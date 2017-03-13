'use strict'
import React from 'react'
import d3 from 'd3'
import _ from 'lodash'
import sqlToES from 'sqltoes'
import topojson from 'topojson'
import d3geo from 'd3-geo-projection'

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
  //
  // render () {
  //   IfpriImpact.views.push(this)
  //   var that = this
  //
  //   // dropdown values
  //   var commodity = this.collection.dropdown.map('key')
  //   var description = this.collection.dropdown2.map('key')
  //   var commodityGroup = this.collection.dropdown3.map('key')
  //
  //   // sort parameter/description list
  //   description = _.sortBy(description, function (sort) {
  //     return IfpriImpact.order.parameter[sort] || 999
  //   })
  //
  //   // sort commodity groups
  //   commodityGroup = _.sortBy(commodityGroup, function (sort) {
  //     return -(IfpriImpact.order.commodityGroup[sort] || 999)
  //   })
  //
  //   // dropdown tree construction
  //   var groups = {uncategorized: []}
  //   _.each(commodityGroup, function (g) {
  //     groups[g] = []
  //   })
  //
  //   d3.csv('assets/data/aggregate_commodity.csv', function (error, commodityTree) {
  //     if (error) console.warn(error)
  //     _.each(commodity, function (com) {
  //       var group = _.find(commodityTree, function (treeRow) {
  //         return treeRow.Commodity === com
  //       })
  //       if (group) {
  //         groups[group.Group.toLowerCase().split(' ').join('_')].push(com)
  //       } else {
  //         groups.uncategorized.push(com)
  //       }
  //     })
  //
  //     // for now at least
  //     delete groups.uncategorized
  //
  //     // organize
  //
  //     var orderedGroups = _.sortBy(_.map(groups, function (group, key) {
  //       return { name: key, array: group.sort(), order: (key === 'other') ? -1 : 1 }
  //     }), function (sort) {
  //       return -sort.order
  //     })
  //
  //     // if we don't get the necessary set of metadata
  //     if (!that.collection.customtext.models[0].get('metadata').mapParam) {
  //       // remove this set of parameters
  //       var descriptionFiltered = _.without(description, 'pcgdpxagg',
  //         'percapkcalxagg', 'popxagg', 'gdpxagg', 'pwxagg', 'areaxagg',
  //         'yldxagg', 'ppxagg', 'qnsh2xagg', 'qmshxagg', 'qnsh1xagg', 'qeshxagg',
  //         'populationatriskxagg', 'totalmalnourishedxagg', 'at', 'hunger', 'of',
  //         'pop', 'risk')
  //     } else {
  //       // if we have the metadata, take any parameter on both lists
  //       descriptionFiltered = []
  //       var toShow = that.collection.customtext.models[0].get('metadata').mapParam.slice(0, 12)
  //       _.each(description, function (mod) {
  //         if (_.includes(toShow, mod)) {
  //           descriptionFiltered.push(mod)
  //         }
  //       })
  //     }
  //
  //     that.$el.html(that.template({
  //       groups: orderedGroups,
  //       commodity: commodity,
  //       description: descriptionFiltered,
  //       commodityGroup: commodityGroup,
  //       scenario: that.scenario.split('_').join('-'),
  //       yearRange: that.yearRange,
  //       state: IfpriImpact.state.map,
  //       translate
  //     }))
  //     that.$commodityGroup = that.$('.commodity-group-dropdown')
  //     that.$commodity = that.$('.commodity-dropdown')
  //     // make the right buttons active
  //     $('#' + IfpriImpact.state.map.aggregation).toggleClass('active')
  //
  //     var mapWidth = 960
  //     var mapHeight = 600
  //
  //     var projection = d3geo.geoMiller()
  //         .scale(150)
  //         .translate([mapWidth / 2, mapHeight / 2 + 110])
  //         .precision(0.1)
  //         .rotate([-11, 0])
  //
  //     var mapPath = d3.geo.path()
  //         .projection(projection)
  //
  //     var mapSvg = d3.select('#world-map').append('svg')
  //         .attr('width', mapWidth)
  //         .attr('height', mapHeight)
  //
  //     mapSvg.call(that.mapTip)
  //     that.mapSvg = mapSvg
  //     that.mapPath = mapPath
  //     that.mapHeight = mapHeight
  //     that.mapWidth = mapWidth
  //     var drawMap = $.proxy(that.drawMap, that)
  //     var mapAggregation = that.collection.customtext.models[0].get('metadata').mapAggregation || 'default.csv'
  //
  //     d3.json('assets/data/geo/world_sim.topojson', function (error, world) {
  //       if (error) console.warn(error)
  //       d3.csv('assets/data/geo/aggregations/' + mapAggregation, function (err, prop) {
  //         if (err) console.warn(err)
  //         _.each(world.objects.natural_earth_50m.geometries, function (c) {
  //           var newProperties = _.find(prop, function (agg) {
  //             return agg.id === c.id
  //           })
  //           // remove the id so we don't match on it (the map aggregation searches the entire 'properties' object)
  //           // add (or replace) the properties object to our topojson
  //           if (newProperties) {
  //             delete newProperties.id
  //             c.properties = newProperties
  //           }
  //         })
  //         that.world = world
  //         drawMap()
  //       })
  //     })
  //
  //     that.checkDropdowns()
  //
  //     IfpriImpact.scenarioView.scrollSetup()
  //   })
  // }
  //
  // drawMap () {
  //   var that = this
  //   var mapSvg = this.mapSvg
  //   var mapPath = this.mapPath
  //   var mapTip = this.mapTip
  //   var mapHeight = this.mapHeight
  //   var mapWidth = this.mapWidth
  //
  //   // draw the blank map first, the rest is conditional on good data
  //   // normally don't need to remove anything but we want to clear the overlay and legend in case we don't render anything except the base map
  //   mapSvg.selectAll('path').remove()
  //   mapSvg.selectAll('.legend-line').remove()
  //   mapSvg.selectAll('.label').remove()
  //   mapSvg.selectAll('defs').remove()
  //
  //   // for reasons I don't fully grasp, this has to be readded each time
  //   var defs = mapSvg.append('defs')
  //   var dashWidth = 5
  //   var pattern = defs.append('pattern')
  //   .attr('id', 'maphash')
  //   .attr('patternUnits', 'userSpaceOnUse')
  //   .attr('width', dashWidth)
  //   .attr('height', dashWidth)
  //   .attr('x', 0).attr('y', 0)
  //   .append('g').style('fill', 'none').style('stroke', '#888').style('stroke-width', 0.5)
  //
  //   // pattern.append('path').attr('d', 'M0, 0 l'+dashWidth+', '+dashWidth)
  //   pattern.append('path').attr('d', 'M' + dashWidth + ', 0 l-' + dashWidth + ', ' + dashWidth)
  //
  //   var world = this.world
  //   mapSvg.selectAll('.land')
  //       .data(topojson.feature(world, world.objects.natural_earth_50m).features)
  //       .enter().append('path')
  //       .attr('class', 'land')
  //       .attr('d', mapPath)
  //       .attr('style', 'fill:url(#maphash)')
  //
  //   if (this.collection.mapChoro.models[0]) {
  //     var values = _.sortBy(_.map(this.collection.mapChoro.models, function (x) { return that.getDiff(x) }), function (sort) { return sort })
  //     var mapMax = values[values.length - 1]
  //     var mapMin = values[0]
  //     var positiveValues = values.filter(function (x) { return x >= 0 })
  //     var negativeValues = values.filter(function (x) { return x < 0 })
  //     // trade values get more outliers cut out of the legend
  //     var customBreak = _.includes(['qnxagg', 'qnsh1xagg', 'qnsh2xagg', 'qeshxagg', 'qmshxagg'], IfpriImpact.state.map.parameter) ? 0.8 : 0.95
  //     var percentileHigh = positiveValues[Math.floor(positiveValues.length * customBreak)]
  //     var percentileLow = negativeValues[Math.floor(negativeValues.length * (1 - customBreak))] || 0
  //     var mapColor = d3.scale.linear()
  //
  //     if (mapMin < 0) {
  //       mapColor.domain([mapMin, percentileLow, 0, percentileHigh, mapMax]).range(['#CDAA00', '#CDAA00', '#fff', '#4B7838', '#4B7838'])
  //       // mapColor.domain([mapMin, 0, mapMax]).range(['#CDAA00', '#fff', '#4B7838'])
  //     } else {
  //       mapColor.domain([0, percentileHigh, mapMax]).range(['#fff', '#4B7838', '#4B7838'])
  //     }
  //
  //     var filtered = _.map(this.collection.mapChoro.models, function (x) {
  //       var obj = {
  //         geometry: {
  //           type: 'MultiPolygon'
  //         }
  //       }
  //       obj['geometry']['coordinates'] = topojson.merge(world, _.filter(world.objects.natural_earth_50m.geometries, function (y) {
  //         return _.includes(_.map(y.properties, function (z) {
  //           return z.replace(/ /g, '_').toLowerCase()
  //         }), x.get('key'))
  //       }))['coordinates']
  //       obj['id'] = x.get('key')
  //       obj['type'] = 'Feature'
  //       return obj
  //     })
  //
  //     mapSvg.selectAll('.overlay')
  //         .data(filtered)
  //         .enter().append('path')
  //         .attr('class', 'overlay')
  //         .attr('d', mapPath)
  //         .style('fill', function (d) {
  //           var co = that.findMapInfo(d.id)
  //           if (co) {
  //             return mapColor(that.getDiff(co))
  //           } else {
  //             return 'lightgray'
  //           }
  //         })
  //         .style('stroke-width', 0.5)
  //         .style('stroke', '#555')
  //         .on('mouseover', mapTip.show)
  //         .on('mouseout', mapTip.hide)
  //
  //     mapSvg.selectAll('.legend-line')
  //         .data(_.map(_.range(101), function (oneLine) {
  //           return oneLine * (percentileHigh - Math.min(percentileLow, 0)) / 100 + Math.min(percentileLow, 0)
  //         }))
  //         .enter().append('path')
  //         .attr('class', 'legend-line')
  //         .attr('d', function (d, i) {
  //           return 'M' + (25 + i) + ', ' + (mapHeight - 150) + 'L' + (25 + i) + ', ' + (mapHeight - 130)
  //         })
  //         .style('stroke', function (d) {
  //           return mapColor(d)
  //         })
  //         .style('stroke-width', 1)
  //
  //     mapSvg.selectAll('.label')
  //       .data(_.sortBy([0, percentileLow, percentileHigh], function (label) { return label }))
  //     .enter().append('text')
  //       .attr('class', 'label')
  //       .attr('x', function (d) {
  //         return 25 + (d - Math.min(percentileLow, 0)) / ((percentileHigh - Math.min(percentileLow, 0)) / 100)
  //       })
  //       .attr('y', function (d, i) { return (i === 1) ? mapHeight - 116 : mapHeight - 156 })
  //       .style('text-anchor', 'middle')
  //       .style('font-size', 10)
  //       .style('font-weight', 400)
  //       .style('fill', '#333')
  //       .text(function (d) {
  //         return (d * 100).toFixed(1) + '%'
  //       })
  //   } else {
  //     mapSvg.append('text').attr('class', 'label')
  //       .attr('x', mapWidth / 2)
  //       .attr('y', mapHeight / 2)
  //       .style('text-anchor', 'middle')
  //       .style('font-size', 12)
  //       .style('fill', '#333')
  //       .style('font-weight', 300)
  //       .text('NO DATA')
  //   }
  //
  //   var textFix = function (state) {
  //     return typeof state === 'undefined' ? '' : state
  //   }
  //
  //   mapSvg.append('text').attr('class', 'label')
  //     .attr('x', 15)
  //     .attr('y', mapHeight - 210)
  //     .style('text-anchor', 'start')
  //     .style('font-size', 12)
  //     .style('fill', '#333')
  //     .style('font-weight', 300)
  //     .text('Change in ' + translate(IfpriImpact.state.map.parameter) + ' of')
  //
  //   mapSvg.append('text').attr('class', 'label')
  //     .attr('x', 15)
  //     .attr('y', mapHeight - 190)
  //     .style('text-anchor', 'start')
  //     .style('font-size', 12)
  //     .style('fill', '#333')
  //     .style('font-weight', 300)
  //     .text(translate(textFix(IfpriImpact.state.map.aggCommodity)) + translate(textFix(IfpriImpact.state.map.commodity)) + ' from ' + that.yearRange[0] + ' to ' + that.yearRange[1])
  //
  //   this.spinner.stop()
  // }
  //
  // select (e) {
  //   // make sure we don't trigger first level clicks as well
  //   e.stopPropagation()
  //
  //   var $target = $(e.currentTarget)
  //   var $parent = $target.parent('ul')
  //   var type = $parent.data('type')
  //   var text = $target.children('a').text()
  //   var parsed = untranslate(text)
  //
  //   switch (type) {
  //     case 'commodity':
  //       IfpriImpact.state.map.commodity = parsed
  //       break
  //     case 'agg-commodity':
  //       IfpriImpact.state.map.aggCommodity = parsed
  //       IfpriImpact.state.map.commodity = ''
  //       break
  //     case 'description':
  //       IfpriImpact.state.map.parameter = parsed
  //   }
  //
  //   // close dropdown
  //   $('.dropdown.open').toggleClass('open', false)
  //
  //   this.query()
  // }
  //
  // geographyChange (e) {
  //   var $target = $(e.currentTarget)
  //   if (!$target.hasClass('active')) {
  //     IfpriImpact.state.map.aggregation = $target.attr('id')
  //     this.$('.level-toggle').removeClass('active')
  //     $target.addClass('active')
  //   }
  //   this.query()
  // }
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
  // findMapInfo (code) {
  //   return _.find(this.collection.mapChoro.models, function (x) {
  //     return x.get('key') == code // eslint-disable-line
  //   })
  // }
  //
  // getDiff (co) {
  //   var that = this
  //   var attr = co['attributes']['group_by_year']['buckets']
  //   var valEarly = _.find(attr, function (x) {
  //     return x.key === that.yearRange[0]
  //   })['sum_Val']['value']
  //   var valLate = _.find(attr, function (x) {
  //     return x.key === that.yearRange[1]
  //   })['sum_Val']['value']
  //   var diff = (valLate - valEarly) / valEarly
  //   return diff
  // }
  //
  // yieldQuery (cFilter, yearRangeFilter, groupby) {
  //   var divisor = IfpriImpact.state.map.parameter === 'tyldxagg' ? 'tareaxagg' : 'anmlnumxagg'
  //   var supplyFilter = 'impactparameter = qsupxagg'
  //   var divisorFilter = 'impactparameter = ' + divisor
  //   var that = this
  //
  //   // replace form data with two pieces to post: one for supply and one for the divisor (area or animal numbers)
  //   var supplyData = sqlToES({
  //     select: ['sum(Val)'],
  //     from: [''],
  //     where: [cFilter, supplyFilter, yearRangeFilter],
  //     groupby: [groupby, 'year']
  //   })
  //   var divisorData = sqlToES({
  //     select: ['sum(Val)'],
  //     from: [''],
  //     where: [cFilter, divisorFilter, yearRangeFilter],
  //     groupby: [groupby, 'year']
  //   })
  //
  //   // make two temporary collections
  //   IfpriImpact.temp = {}
  //   IfpriImpact.temp.collection1 = new MapChoro()
  //   IfpriImpact.temp.collection2 = new MapChoro()
  //   this.listenTo(IfpriImpact.temp.collection1, 'sync', this.divide)
  //   this.listenTo(IfpriImpact.temp.collection2, 'sync', this.divide)
  //   this.divided = 0
  //   IfpriImpact.temp.collection1.fetch({ data: supplyData, type: 'POST', dataType: 'json', scenario: that.scenario.toLowerCase() })
  //   IfpriImpact.temp.collection2.fetch({ data: divisorData, type: 'POST', dataType: 'json', scenario: that.scenario.toLowerCase() })
  // }
  //
  // divide () {
  //   if (this.divided === 0) {
  //     this.divided++
  //   } else {
  //     // check that the divisor is not empty
  //     if (IfpriImpact.temp.collection2.models[0]) {
  //       var newModels = []
  //       // divide and add to the mapChoro collection
  //
  //       _.each(IfpriImpact.temp.collection1.models, function (model, index) {
  //         // I'm not sure this clone() works as intended (copy looks like it's still overwriting model)
  //         // but the model is temporary anyway and we only output tempModel and model is only iterated over once
  //         var tempModel = model.clone()
  //         var supply = tempModel.get('group_by_year').buckets
  //         var divisor = IfpriImpact.temp.collection2.models[index].get('group_by_year').buckets
  //         supply[0].sum_Val.value = supply[0].sum_Val.value / divisor[0].sum_Val.value
  //         supply[1].sum_Val.value = supply[1].sum_Val.value / divisor[1].sum_Val.value
  //         newModels.push(tempModel)
  //       })
  //       IfpriImpact.collections.mapChoro.reset(newModels)
  //     } else {
  //       // trigger a reset with no data here and the drawMap function will handle the error
  //       IfpriImpact.collections.mapChoro.reset()
  //     }
  //   }
  // }
  //
  // tradeQuery (cFilter, yearRangeFilter, groupby) {
  //   var priceFilter = 'impactparameter = pwxagg'
  //   var supplyFilter = 'impactparameter = qsupxagg'
  //   var demandFilter = 'impactparameter = qdxagg'
  //
  //   // replace form data with three pieces to post: prices, supply, and demand
  //   var priceData = sqlToES({
  //     select: ['sum(Val)'],
  //     from: [''],
  //     where: [cFilter, priceFilter, yearRangeFilter],
  //     groupby: [groupby, 'year']
  //   })
  //   var supplyData = sqlToES({
  //     select: ['sum(Val)'],
  //     from: [''],
  //     where: [cFilter, supplyFilter, yearRangeFilter],
  //     groupby: [groupby, 'year']
  //   })
  //   var demandData = sqlToES({
  //     select: ['sum(Val)'],
  //     from: [''],
  //     where: [cFilter, demandFilter, yearRangeFilter],
  //     groupby: [groupby, 'year']
  //   })
  //
  //   // make three temporary collections
  //   IfpriImpact.temp = {}
  //   IfpriImpact.temp.collection1 = new MapChoro()
  //   IfpriImpact.temp.collection2 = new MapChoro()
  //   IfpriImpact.temp.collection3 = new MapChoro()
  //   this.listenTo(IfpriImpact.temp.collection1, 'sync', this.tradeMath)
  //   this.listenTo(IfpriImpact.temp.collection2, 'sync', this.tradeMath)
  //   this.listenTo(IfpriImpact.temp.collection3, 'sync', this.tradeMath)
  //   this.tradeMathParam = 0
  //   IfpriImpact.temp.collection1.fetch({ data: priceData, type: 'POST', dataType: 'json', scenario: this.scenario.toLowerCase() })
  //   IfpriImpact.temp.collection2.fetch({ data: supplyData, type: 'POST', dataType: 'json', scenario: this.scenario.toLowerCase() })
  //   IfpriImpact.temp.collection3.fetch({ data: demandData, type: 'POST', dataType: 'json', scenario: this.scenario.toLowerCase() })
  // }
  //
  // tradeMath () {
  //   if (this.tradeMathParam < 2) {
  //     this.tradeMathParam++
  //   } else {
  //     // check that all the models are present
  //     if (IfpriImpact.temp.collection1.models[0] && IfpriImpact.temp.collection2.models[0] && IfpriImpact.temp.collection3.models[0]) {
  //       var newModels = []
  //       // do the math
  //       // I don't conceptually agree with the calculations below (they can be simplified) but I'm currently
  //       // following my understanding of the provided instructions
  //       _.each(IfpriImpact.temp.collection1.models, function (model, index) {
  //         // I'm not sure this clone() works as intended (copy looks like it's still overwriting model)
  //         // but the model is temporary anyway and we only output tempModel and model is only iterated over once
  //         var tempModel = model.clone()
  //         var price = tempModel.get('group_by_year').buckets
  //         var supply = IfpriImpact.temp.collection2.models[index].get('group_by_year').buckets
  //         var demand = IfpriImpact.temp.collection3.models[index].get('group_by_year').buckets
  //         if (IfpriImpact.state.map.parameter === 'qnsh1xagg') {
  //           price[0].sum_Val.value = (price[0].sum_Val.value * supply[0].sum_Val.value - price[0].sum_Val.value * demand[0].sum_Val.value) / (price[0].sum_Val.value * supply[0].sum_Val.value)
  //           price[1].sum_Val.value = (price[1].sum_Val.value * supply[1].sum_Val.value - price[1].sum_Val.value * demand[1].sum_Val.value) / (price[1].sum_Val.value * supply[1].sum_Val.value)
  //         } else if (IfpriImpact.state.map.parameter === 'qnsh2xagg') {
  //           price[0].sum_Val.value = (price[0].sum_Val.value * supply[0].sum_Val.value - price[0].sum_Val.value * demand[0].sum_Val.value) / (price[0].sum_Val.value * demand[0].sum_Val.value)
  //           price[1].sum_Val.value = (price[1].sum_Val.value * supply[1].sum_Val.value - price[1].sum_Val.value * demand[1].sum_Val.value) / (price[1].sum_Val.value * demand[1].sum_Val.value)
  //         } else if (IfpriImpact.state.map.parameter === 'qeshxagg') {
  //           price[0].sum_Val.value = Math.max(price[0].sum_Val.value * supply[0].sum_Val.value - price[0].sum_Val.value * demand[0].sum_Val.value, 0) / (price[0].sum_Val.value * supply[0].sum_Val.value)
  //           price[1].sum_Val.value = Math.max(price[1].sum_Val.value * supply[1].sum_Val.value - price[1].sum_Val.value * demand[1].sum_Val.value, 0) / (price[1].sum_Val.value * supply[1].sum_Val.value)
  //         } else if (IfpriImpact.state.map.parameter === 'qmshxagg') {
  //           price[0].sum_Val.value = Math.min(price[0].sum_Val.value * supply[0].sum_Val.value - price[0].sum_Val.value * demand[0].sum_Val.value, 0) / (price[0].sum_Val.value * demand[0].sum_Val.value)
  //           price[1].sum_Val.value = Math.min(price[1].sum_Val.value * supply[1].sum_Val.value - price[1].sum_Val.value * demand[1].sum_Val.value, 0) / (price[1].sum_Val.value * demand[1].sum_Val.value)
  //         } else {
  //           // it's the least I can do
  //           console.log('error')
  //         }
  //         newModels.push(tempModel)
  //       })
  //       IfpriImpact.collections.mapChoro.reset(newModels)
  //     } else {
  //       // trigger a reset with no data here and the drawMap function will handle the error
  //       IfpriImpact.collections.mapChoro.reset()
  //     }
  //   }
  // }
  //
  // checkDropdowns () {
  //   // start with everything enabled
  //   $('.description-menu-map').toggleClass('disabled', false)
  //   // conditionally disable dropdown options based on commodity or commodity group
  //   if (_.includes(['other', 'fruits_vegetables'], IfpriImpact.state.map.aggCommodity) || _.includes(['bana', 'plnt', 'subf', 'temf', 'vege', 'pstr', 'teas', 'coco', 'fodr', 'cafe', 'cott', 'othr'], IfpriImpact.state.map.commodity)) {
  //     $('.description-menu-map:contains("Livestock Feed Demand")').addClass('disabled')
  //   }
  //   if (!((IfpriImpact.state.map.aggCommodity === 'animal_products') || _.includes(['lamb', 'beef', 'eggs', 'poul', 'milk', 'pork'], IfpriImpact.state.map.commodity))) {
  //     $('.description-menu-map:contains("Animal Numbers")').addClass('disabled')
  //     $('.description-menu-map:contains("Animal Yield")').addClass('disabled')
  //   } else {
  //     $('.description-menu-map:contains("Total Area")').addClass('disabled')
  //     $('.description-menu-map:contains("Total Yield")').addClass('disabled')
  //   }
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
