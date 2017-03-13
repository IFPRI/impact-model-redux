'use strict'
import React from 'react'
import { geoEquirectangular, geoPath } from 'd3-geo'
import { select } from 'd3-selection'
import { json, csv } from 'd3-request'
import { scaleLinear } from 'd3-scale'
import _ from 'lodash'
import { feature, merge } from 'topojson-client'
import { body as tip } from '@redsift/d3-rs-tip'
import c from 'classnames'

import queryDatabase from '../utils/query-database'
import translation from '../../data/translation'

const yellow = '#CDAA00'
const green = '#4B7838'

export class Map extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      impactParameter: props.data.fixed.impactparameter,
      activeQuery: props.data.dropdown.values.split(', ')[0]
    }
    this.dropdownValues = props.data.dropdown
    if (this.dropdownValues && this.dropdownValues.field && this.dropdownValues.values) {
      this.dropdownValues = this.dropdownValues.values.split(',').map((value) => value.trim())
    }
    this.activeQuery = this.dropdownValues[0] || null

    this.initializeChart = this.initializeMap.bind(this)
    this.queryMapData = this.queryMapData.bind(this)
    this.drawMap = this.drawMap.bind(this)
    this.updateMap = this.updateMap.bind(this)
    this.handleDropdown = this.handleDropdown.bind(this)
  }

  componentDidMount () {
    this.initializeMap()
  }

  initializeMap () {
    var mapWidth = 960
    var mapHeight = 480

    var projection = geoEquirectangular()

    var mapPath = geoPath(projection)

    var mapSvg = select('#world-map').append('svg')
        .attr('width', mapWidth)
        .attr('height', mapHeight)

    this.mapTip = tip()
      .offset(d => {
            // this will have to be custom/manually adjusted to account for countries with unusual bounding boxes, like CHM or USA
        switch (d.id) {
          case 'rus':
            return [0, 0]
          case 'can':
            return [0, 0]
          case 'usa':
            return [75, -300]
          case 'chm':
            return [25, 0]
          case 'northern_america':
            return [0, -300]
          case 'eastern_europe':
            return [0, 0]
          case 'northern_europe':
            return [10, 0]
          case 'south_eastern_asia':
            return [10, -30]
          case 'europe':
            return [50, 50]
          case 'oceania':
            return [20, 350]
          case 'americas':
            return [0, -300]
          default:
            return [-10, 0]
        }
      })
      .html(d => `<strong>${d.id}</strong><br>Value: ${d.properties.val.toFixed(1)}`)

    this.mapSvg = mapSvg
    this.mapPath = mapPath
    this.mapHeight = mapHeight
    this.mapWidth = mapWidth
    this.mapSvg.call(this.mapTip)

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
        this.queryMapData()
      })
    })
  }

  queryMapData () {
    const mapQuery = Object.assign({}, this.props.data, {
      encoding: {
        x: { type: 'nominal', field: 'region' },
        y: { type: 'quantitative', field: 'Val' }
      }
    })
    queryDatabase(mapQuery, this.state.activeQuery, (mapData) => {
      this.updateMap(mapData)
    })
  }

  drawMap () {
    // draw the blank map first, the rest is conditional on good data
    var defs = this.mapSvg.append('defs')
    var dashWidth = 5
    var pattern = defs.append('pattern')
      .attr('id', 'maphash')
      .attr('patternUnits', 'userSpaceOnUse')
      .attr('width', dashWidth)
      .attr('height', dashWidth)
      .attr('x', 0).attr('y', 0)
      .append('g').style('fill', 'none').style('stroke', '#888').style('stroke-width', 0.5)

    pattern.append('path').attr('d', 'M' + dashWidth + ', 0 l-' + dashWidth + ', ' + dashWidth)

    this.mapSvg.selectAll('.land')
        .data(feature(this.world, this.world.objects.natural_earth_50m).features)
        .enter().append('path')
        .attr('class', 'land')
        .attr('d', this.mapPath)
        .attr('style', 'fill:url(#maphash)')
  }

  updateMap (mapData) {
    this.mapSvg.selectAll('.overlay').remove()
    this.mapSvg.selectAll('.legend-line').remove()
    this.mapSvg.selectAll('.label').remove()

    var values = mapData.values.map(a => a.Val)
    var mapMax = Math.max(...values)
    var mapMin = Math.min(...values)
    var mapColor = scaleLinear()
    var positiveValues = values.filter(function (x) { return x >= 0 })
    var negativeValues = values.filter(function (x) { return x < 0 })
    // trade values get more outliers cut out of the legend
    // var customBreak = _.includes(['qnxagg', 'qnsh1xagg', 'qnsh2xagg', 'qeshxagg', 'qmshxagg'], IfpriImpact.state.map.parameter) ? 0.8 : 0.95
    var customBreak = 0.8
    var percentileHigh = positiveValues[Math.floor(positiveValues.length * customBreak)]
    var percentileLow = negativeValues[Math.floor(negativeValues.length * (1 - customBreak))] || 0

    if (mapMin < 0) {
      mapColor.domain([mapMin, percentileLow, 0, percentileHigh, mapMax]).range([yellow, yellow, '#fff', green, green])
    } else {
      mapColor.domain([0, percentileHigh, mapMax]).range(['#fff', green, green])
    }
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

    this.mapSvg.selectAll('.overlay')
        .data(filtered)
        .enter().append('path')
        .attr('class', 'overlay')
        .attr('d', this.mapPath)
        .style('fill', function (d) {
          return mapColor(d.properties.val)
        })
        .style('stroke-width', 0.5)
        .style('stroke', '#555')
        .on('mouseover', this.mapTip.show)
        .on('mouseout', this.mapTip.hide)

    this.mapSvg.selectAll('.legend-line')
        .data(_.map(_.range(101), oneLine => {
          return oneLine * (percentileHigh - Math.min(percentileLow, 0)) / 100 + Math.min(percentileLow, 0)
        }))
        .enter().append('path')
        .attr('class', 'legend-line')
        .attr('d', (d, i) => {
          return 'M' + (25 + i) + ', ' + (this.mapHeight - 150) + 'L' + (25 + i) + ', ' + (this.mapHeight - 130)
        })
        .style('stroke', d => mapColor(d))
        .style('stroke-width', 1)

    this.mapSvg.selectAll('.label')
      .data(_.sortBy(percentileLow > 0 ? [0, percentileLow, percentileHigh] : [0, percentileHigh], label => label))
    .enter().append('text')
      .attr('class', 'label')
      .attr('x', function (d) {
        return 25 + (d - Math.min(percentileLow, 0)) / ((percentileHigh - Math.min(percentileLow, 0)) / 100)
      })
      .attr('y', (d, i) => { return (i === 1) ? this.mapHeight - 116 : this.mapHeight - 156 })
      .style('text-anchor', 'middle')
      .style('font-size', 10)
      .style('font-weight', 400)
      .style('fill', '#333')
      .text(d => (d * 100).toFixed(1) + '%')

    // TODO: text
    // var textFix = function (state) {
    //   return typeof state === 'undefined' ? '' : state
    // }
    // this.mapSvg.append('text').attr('class', 'label')
    //   .attr('x', 15)
    //   .attr('y', mapHeight - 210)
    //   .style('text-anchor', 'start')
    //   .style('font-size', 12)
    //   .style('fill', '#333')
    //   .style('font-weight', 300)
    //   .text('Change in ' + translate(IfpriImpact.state.map.parameter) + ' of')
    //
    // this.mapSvg.append('text').attr('class', 'label')
    //   .attr('x', 15)
    //   .attr('y', mapHeight - 190)
    //   .style('text-anchor', 'start')
    //   .style('font-size', 12)
    //   .style('fill', '#333')
    //   .style('font-weight', 300)
    //   .text(translate(textFix(IfpriImpact.state.map.aggCommodity)) + translate(textFix(IfpriImpact.state.map.commodity)) + ' from ' + that.yearRange[0] + ' to ' + that.yearRange[1])
  }

  handleDropdown (e) {
    this.setState({ activeQuery: e.target.value })
    this.queryMapData()
  }

  render () {
    return (
      <figure className='map'>
        <figcaption>The map shows change in key output parameters from across geographies. Use dropdown menus to select desired commodity (or group) and parameters to display. Toggle buttons at top right allow different geographic aggregations. Hover over countries or regions to observe the actual results.</figcaption>
        <div className='map-container'>
          <div id='world-map'></div>
          <div className={c('map-dropdown', {visible: this.props.data.dropdown})}>
            <span>Filter:</span>
            <select className={`${name}-dropdown`} defaultValue={this.state.activeQuery} onChange={this.handleDropdown}>
              {this.dropdownValues.map((value, i) => {
                return <option value={value} key={`${name}-${i}`}>{translation[value]}</option>
              })}
            </select>
          </div>
        </div>
      </figure>
    )
  }
}

// Set default props
Map.propTypes = {
  data: React.PropTypes.object
}

export default Map
