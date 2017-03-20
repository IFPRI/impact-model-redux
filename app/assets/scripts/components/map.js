'use strict'
import React from 'react'
import { geoEquirectangular, geoPath } from 'd3-geo'
import { select } from 'd3-selection'
import { scaleLinear } from 'd3-scale'
import _ from 'lodash'
import { feature, merge } from 'topojson-client'
import { body as tip } from '@redsift/d3-rs-tip'

import queryDatabase from '../utils/query-database'
import { translate } from '../utils/translation'
import locationAggregation from '../../data/aggregate-region'
import world from '../../data/geo/world.json'

const yellow = '#E2C117'
const green = '#83C61A'

export class MapComponent extends React.Component {
  constructor (props, context) {
    super(props, context)

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
    const containerWidth = this.mapRef.getBoundingClientRect().width
    const mapWidth = containerWidth
    const mapHeight = containerWidth / 2

    const baseProjectionScale = 152.63
    var projection = geoEquirectangular()
      .scale(baseProjectionScale / (960 / containerWidth))
      .translate([containerWidth / 2, containerWidth / 4])

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
      .html(d => `<strong>${translate(d.id)}</strong><br>Value: ${d.properties.val.toFixed(1)}`)

    this.mapSvg = mapSvg
    this.mapPath = mapPath
    this.mapHeight = mapHeight
    this.mapWidth = mapWidth
    this.mapSvg.call(this.mapTip)

    // add aggregation info to geometries
    world.objects.natural_earth_50m.geometries.forEach(country => {
      country.properties = locationAggregation[country.id.toLowerCase()]
    })
    this.world = world
    this.drawMap()
    this.queryMapData(this.props.data)
  }

  queryMapData (newData) {
    const mapQuery = Object.assign({}, newData, {
      encoding: {
        x: { type: 'nominal', field: 'region' },
        y: { type: 'quantitative', field: 'Val' }
      }
    })
    queryDatabase(mapQuery, (mapData) => {
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
  }

  handleDropdown (e) {
    const valueToFront = e.target.value
    const dropdown = e.target.id
    const newData = _.cloneDeep(this.props.data)
    newData[dropdown].values = [valueToFront, ...this.props.data[dropdown].values.filter(a => a !== valueToFront)]
    this.queryMapData(newData)
  }

  render () {
    const { data, name } = this.props

    const Dropdowns = Object.keys(this.props.data)
      .filter(key => key.match(/dropdown/))
      .map(key => {
        return <div key={key} className='map-dropdown'>
          <label>{translate(this.props.data[key].field)}:</label>
          <div className='select--wrapper'>
            <select id={key} className={`${name}`} defaultValue={this.props.data[key].values[0]} onChange={this.handleDropdown}>
              {this.props.data[key].values.map((value, i) => {
                return <option value={value} key={`${name}-${key}-${i}`}>{translate(value)}</option>
              })}
            </select>
          </div>
        </div>
      })

    return (
      <figure className='map'>
        <h5 className='label--map'>{data.title}</h5>
        <figcaption>The map shows change in key output parameters from across geographies. Use dropdown menus to select desired commodity (or group) and parameters to display. Toggle buttons at top right allow different geographic aggregations. Hover over countries or regions to observe the actual results.</figcaption>
        <div className='map-container'>
          <div ref={(a) => { this.mapRef = a }} id='world-map'></div>
          {Dropdowns}
        </div>
      </figure>
    )
  }
}

// Set default props
MapComponent.propTypes = {
  data: React.PropTypes.object,
  name: React.PropTypes.string
}

export default MapComponent
