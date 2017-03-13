'use strict'
import React from 'react'
import { geoEquirectangular, geoPath } from 'd3-geo'
import { select, selectAll } from 'd3-selection'
import { json, csv } from 'd3-request'
import { scaleLinear } from 'd3-scale'
import _ from 'lodash'
import { feature, merge } from 'topojson-client'
import queryDatabase from '../utils/query-database'

export class Map extends React.Component {
  //   this.mapTip = d3.tip()
  //     .attr('class', 'd3-tip')
  //     .offset(function (d) {
  //       // this will have to be custom/manually adjusted to account for countries with unusual bounding boxes, like CHM or USA
  //       switch (d.id) {
  //         case 'rus':
  //           return [0, 0]
  //         case 'can':
  //           return [0, 0]
  //         case 'usa':
  //           return [75, -300]
  //         case 'chm':
  //           return [25, 0]
  //         case 'northern_america':
  //           return [0, -300]
  //         case 'eastern_europe':
  //           return [0, 0]
  //         case 'northern_europe':
  //           return [10, 0]
  //         case 'south_eastern_asia':
  //           return [10, -30]
  //         case 'europe':
  //           return [50, 50]
  //         case 'oceania':
  //           return [20, 350]
  //         case 'americas':
  //           return [0, -300]
  //         default:
  //           return [-10, 0]
  //       }
  //     })
  //     .html(function (d) {
  //       var front = (that.findMapInfo(d.id) > 0) ? '+' : ''
  //       return '<strong>' + translate(d.id) + '</strong><br>Change: ' + front + (that.getDiff(that.findMapInfo(d.id)) * 100).toFixed(1) + '%'
  //     })
  // }
  componentDidMount () {
    this.initializeMap()
  }

  initializeMap () {
    var mapWidth = 960
    var mapHeight = 600

    var projection = geoEquirectangular()

    var mapPath = geoPath(projection)

    var mapSvg = select('#world-map').append('svg')
        .attr('width', mapWidth)
        .attr('height', mapHeight)

    // mapSvg.call(that.mapTip)
    this.mapSvg = mapSvg
    this.mapPath = mapPath
    this.mapHeight = mapHeight
    this.mapWidth = mapWidth

    json('assets/data/geo/world.topojson', (error, world) => {
      if (error) console.warn(error)
      csv('assets/data/geo/aggregation.csv', (err, agg) => {
        if (err) console.warn(err)
        // add aggregation info to geometries
        world.objects.natural_earth_50m.geometries.forEach(country => {
          country.properties = agg.find(a => a.id === country.id)
        })
        this.world = world
        this.drawMap()
      })
    })
  }

  drawMap () {
    var mapSvg = this.mapSvg
    var mapPath = this.mapPath

    // draw the blank map first, the rest is conditional on good data
    // normally don't need to remove anything but we want to clear the overlay and legend in case we don't render anything except the base map
    mapSvg.selectAll('path').remove()
    mapSvg.selectAll('.legend-line').remove()
    mapSvg.selectAll('.label').remove()
    mapSvg.selectAll('defs').remove()

    var defs = mapSvg.append('defs')
    var dashWidth = 5
    var pattern = defs.append('pattern')
      .attr('id', 'maphash')
      .attr('patternUnits', 'userSpaceOnUse')
      .attr('width', dashWidth)
      .attr('height', dashWidth)
      .attr('x', 0).attr('y', 0)
      .append('g').style('fill', 'none').style('stroke', '#888').style('stroke-width', 0.5)

    pattern.append('path').attr('d', 'M' + dashWidth + ', 0 l-' + dashWidth + ', ' + dashWidth)

    mapSvg.selectAll('.land')
        .data(feature(this.world, this.world.objects.natural_earth_50m).features)
        .enter().append('path')
        .attr('class', 'land')
        .attr('d', mapPath)
        .attr('style', 'fill:url(#maphash)')

    const mapQuery = Object.assign({}, this.props.data, {
      encoding: { x: {type: 'nominal', field: 'region'}, y: { type: 'quantitative', field: 'Val'}}
    })

    queryDatabase(mapQuery, null, (mapData) => {
      var values = mapData.values.map(a => a.Val)
      var mapMax = Math.max(...values)
      var mapMin = Math.min(...values)
      var mapColor = scaleLinear()
      // var positiveValues = values.filter(function (x) { return x >= 0 })
      //   var negativeValues = values.filter(function (x) { return x < 0 })
      //   // trade values get more outliers cut out of the legend
      //   var customBreak = _.includes(['qnxagg', 'qnsh1xagg', 'qnsh2xagg', 'qeshxagg', 'qmshxagg'], IfpriImpact.state.map.parameter) ? 0.8 : 0.95
      //   var percentileHigh = positiveValues[Math.floor(positiveValues.length * customBreak)]
      //   var percentileLow = negativeValues[Math.floor(negativeValues.length * (1 - customBreak))] || 0
      //   var mapColor = d3.scale.linear()
      //
      //   if (mapMin < 0) {
      mapColor.domain([mapMin, 0, mapMax]).range(['#CDAA00', '#fff', '#4B7838'])
      //     // mapColor.domain([mapMin, 0, mapMax]).range(['#CDAA00', '#fff', '#4B7838'])
      //   } else {
      //     mapColor.domain([0, percentileHigh, mapMax]).range(['#fff', '#4B7838', '#4B7838'])
      //   }
      var filtered = _.map(mapData.values, x => {
        var obj = {
          geometry: {
            type: 'MultiPolygon'
          },
          properties: {
            val: x.Val
          }
        }
        obj['geometry']['coordinates'] = merge(this.world, _.filter(this.world.objects.natural_earth_50m.geometries, function (y) {
          return _.includes(_.map(y.properties, function (z) {
            return z.replace(/ /g, '_').toLowerCase()
          }), x.region)
        }))['coordinates']
        obj['id'] = x.region
        obj['type'] = 'Feature'
        return obj
      })
      console.log(filtered);

      mapSvg.selectAll('.overlay')
          .data(filtered)
          .enter().append('path')
          .attr('class', 'overlay')
          .attr('d', mapPath)
          .style('fill', function (d) {
            return mapColor(d.properties.val)
          })
          .style('stroke-width', 0.5)
          .style('stroke', '#555')
    })
    //       .on('mouseover', mapTip.show)
    //       .on('mouseout', mapTip.hide)
    //
    //   mapSvg.selectAll('.legend-line')
    //       .data(_.map(_.range(101), function (oneLine) {
    //         return oneLine * (percentileHigh - Math.min(percentileLow, 0)) / 100 + Math.min(percentileLow, 0)
    //       }))
    //       .enter().append('path')
    //       .attr('class', 'legend-line')
    //       .attr('d', function (d, i) {
    //         return 'M' + (25 + i) + ', ' + (mapHeight - 150) + 'L' + (25 + i) + ', ' + (mapHeight - 130)
    //       })
    //       .style('stroke', function (d) {
    //         return mapColor(d)
    //       })
    //       .style('stroke-width', 1)
    //
    //   mapSvg.selectAll('.label')
    //     .data(_.sortBy([0, percentileLow, percentileHigh], function (label) { return label }))
    //   .enter().append('text')
    //     .attr('class', 'label')
    //     .attr('x', function (d) {
    //       return 25 + (d - Math.min(percentileLow, 0)) / ((percentileHigh - Math.min(percentileLow, 0)) / 100)
    //     })
    //     .attr('y', function (d, i) { return (i === 1) ? mapHeight - 116 : mapHeight - 156 })
    //     .style('text-anchor', 'middle')
    //     .style('font-size', 10)
    //     .style('font-weight', 400)
    //     .style('fill', '#333')
    //     .text(function (d) {
    //       return (d * 100).toFixed(1) + '%'
    //     })
    // } else {
    //   mapSvg.append('text').attr('class', 'label')
    //     .attr('x', mapWidth / 2)
    //     .attr('y', mapHeight / 2)
    //     .style('text-anchor', 'middle')
    //     .style('font-size', 12)
    //     .style('fill', '#333')
    //     .style('font-weight', 300)
    //     .text('NO DATA')
    // }
    //
    // var textFix = function (state) {
    //   return typeof state === 'undefined' ? '' : state
    // }
    //
    // mapSvg.append('text').attr('class', 'label')
    //   .attr('x', 15)
    //   .attr('y', mapHeight - 210)
    //   .style('text-anchor', 'start')
    //   .style('font-size', 12)
    //   .style('fill', '#333')
    //   .style('font-weight', 300)
    //   .text('Change in ' + translate(IfpriImpact.state.map.parameter) + ' of')
    //
    // mapSvg.append('text').attr('class', 'label')
    //   .attr('x', 15)
    //   .attr('y', mapHeight - 190)
    //   .style('text-anchor', 'start')
    //   .style('font-size', 12)
    //   .style('fill', '#333')
    //   .style('font-weight', 300)
    //   .text(translate(textFix(IfpriImpact.state.map.aggCommodity)) + translate(textFix(IfpriImpact.state.map.commodity)) + ' from ' + that.yearRange[0] + ' to ' + that.yearRange[1])
    // }
  }
  //
  // query (pass) {
  //   var aggCommodityFilter = 'agg_commodity = ' + IfpriImpact.state.map.aggCommodity
  //   var commodityFilter = 'commodity = ' + IfpriImpact.state.map.commodity
  //   var descriptionFilter = 'impactparameter = ' + IfpriImpact.state.map.parameter
  //   var groupby = IfpriImpact.state.map.aggregation
  //   var yearRangeFilter = 'year in ' + IfpriImpact.state.yearRange[0] +
  //       ', ' + IfpriImpact.state.yearRange[1]
  //   var cFilter
  //   var that = this
  //   if (IfpriImpact.state.map.commodity) {
  //     cFilter = commodityFilter
  //     IfpriImpact.state.map.aggCommodity = ''
  //   } else {
  //     cFilter = aggCommodityFilter
  //   }
  //   var mapChoroData = sqlToES({
  //     select: ['sum(Val)'],
  //     from: [''],
  //     where: [cFilter, descriptionFilter, yearRangeFilter],
  //     groupby: [groupby, 'year']
  //   })
  //   // reset loading conditions, spin, and POST
  //
  //   this.spinner.spin(document.getElementById('map-loader'))
  //
  //   // prevents router changes when called with pass parameter
  //   if (!pass) {
  //     IfpriImpact.router.navigate('scenario/' + that.scenario + '/map' + JSON.stringify(IfpriImpact.state.map).replace(/[{}, ":]/g, '').split(/aggCommodity|commodity|parameter|aggregation/).join('/'), {
  //       trigger: false,
  //       replace: true
  //     })
  //   }
  //   if (_.includes(['tyldxagg', 'anmlyldxagg'], IfpriImpact.state.map.parameter)) {
  //     that.yieldQuery(cFilter, yearRangeFilter, groupby)
  //   } else if (_.includes(['qnsh1xagg', 'qnsh2xagg'])) {
  //     that.tradeQuery(cFilter, yearRangeFilter, groupby)
  //   } else {
  //     IfpriImpact.collections.mapChoro.fetch({
  //       data: mapChoroData,
  //       type: 'POST',
  //       dataType: 'json',
  //       scenario: that.scenario.toLowerCase()
  //     })
  //   }
  //
  //   // update the dropdowns
  //   this.checkDropdowns()
  // }
  //
  // }

  render () {
    return (
      <figure className='map'>
        <figcaption>The map shows change in key output parameters from across geographies. Use dropdown menus to select desired commodity (or group) and parameters to display. Toggle buttons at top right allow different geographic aggregations. Hover over countries or regions to observe the actual results.</figcaption>
        <div className='map-container'>
            <div id='world-map'></div>
        </div>
      </figure>
    )
  }
}

// Set default props
Map.propTypes = {

}

export default Map
