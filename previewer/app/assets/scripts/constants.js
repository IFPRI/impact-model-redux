import chroma from 'chroma-js'

export const articleBrowsePageLength = 15

export const fourteenColorPalette = [
  '#5185A3', // (blue/gray)
  '#38A386', // (dark green)
  '#83C61A', // (light green)
  '#BDD05E', // (bright green)
  '#E2C117', // (yellow)
  '#C6881A', // (orange)
  '#B55215', // (red)
  '#2ECC40', // (green)
  '#FF4136', // (red)
  '#001F3F', // (navy)
  '#AAAAAA', // (grey)
  '#85144b', // maroon
  '#F012BE', // (fuschia)
  '#39CCCC'  // (teal)
]

export const oneColorPalette = [
  '#83C61A'
]

export const stripeChartFill = [
  'rgba(0, 255, 0, 0.3)'
]

export const greenGradientPalette = (steps) => chroma.scale(['#00ff00', '#ccffcc']).colors(steps)

export const blueGradientPalette = (steps) => chroma.scale(['#007acc', '#b3e0ff']).colors(steps)

export const greyGradientPalette = (steps) => chroma.scale(['#4d4d4d', '#cccccc']).colors(steps)

export const chartTypes = ['bar', 'horizontalBar', 'grouped-bar', 'line', 'stripe', 'pie', 'doughnut', 'polarArea']
export const multiChartTypes = ['grouped-bar', 'line', 'stripe']

export const exampleCharts = [
  { type: 'bar',
    displayName: 'Bar',
    description: 'Examine a singular data source',
    markup: `\`\`\`chart
mark: bar
title: Change in SSP2_IPSL Impact Parameters per Commodity Group from 2015 - 2050 (%)
width: 100%
scenarios: ssp2_ipsl
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  impactparameter: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
dropdown:
  field: agg_commodity
  values: cereals, animal_products, fruits_vegetables, oils_seeds, food_oils, oil_meals, other, pulses, roots_tubers, sugar
change: true\`\`\``
  }, {
    type: 'line',
    description: 'Compare values from multiple scenarios',
    displayName: 'Line',
    markup: `\`\`\`chart
mark: line
title: Wheat Impact Parameters over time (SSP2_NOCC/SSP2_GFDL/SSP2_IPSL)
width: 100%
legend: top
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: whea
scenarios: ssp2_gfdl, ssp2_hgem, ssp2_ipsl
dropdown:
  field: impactparameter
  values: qnxagg, qdxagg, yldxagg, areaxagg, pwxagg, qsupxagg\`\`\``
  }, {
    type: 'groupedBar',
    displayName: 'Grouped Bar',
    description: 'Compare values from multiple scenarios',
    markup: `\`\`\`chart
mark: grouped-bar
title: Rice Impact Parameters over time (SSP2_GFDL/SSP2_HGEM/SSP2_MIROC)
width: 100%
legend: bottom
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: rice
scenarios: ssp2_gfdl, ssp2_hgem, ssp2_miroc
dropdown:
  field: impactparameter
  values: qnxagg, qdxagg, yldxagg, areaxagg, pwxagg, qsupxagg\`\`\``
  }, {
    type: 'stripe',
    displayName: 'Stripe',
    description: "Compare multiple scenarios as lines, with an area representative of all scenarios' range",
    markup: `\`\`\`chart
mark: stripe
title: Maiz Impact Parameters over time (SSP2_GFDL, SSP2_IPSL/SSP2_HGEM/SSP2_MIROC)
width: 40rem
legend: bottom
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
commodity: maiz
scenarios: ssp2_gfdl, ssp2_ipsl, ssp2_hgem, ssp2_miroc
dropdown:
  field: impactparameter
  values: pwxagg, qnxagg, areaxagg, qdxagg, yldxagg, qsupxagg\`\`\``
  }, {
    type: 'pie',
    displayName: 'Pie',
    description: 'Compare relative parameter values',
    markup: `\`\`\`chart
mark: pie
title: Change in SSP2_MIROC Impact Parameters from 2015 - 2050 (%)
width: 100%
legend: bottom
scenarios: ssp2_miroc
encoding:
  x:
    type: nominal
    field: agg_commodity
  y:
    type: quantitative
    field: Val
fixed:
  agg_commodity: cereals, oils_seeds, animal_products, fruits_vegetables, other, sugar, food_oils, roots_tubers, oil_meals, pulses
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
  change: true\`\`\``
  }, {
    type: 'doughnut',
    displayName: 'Doughnut',
    description: 'Compare relative parameter values',
    markup: `\`\`\`chart
mark: doughnut
title: Change in SSP2_HGEM Impact Parameters from 2015 - 2050 (%)
width: 32rem
legend: left
scenarios: ssp2_hgem
encoding:
  x:
    type: nominal
    field: agg_commodity
  y:
    type: quantitative
    field: Val
fixed:
  agg_commodity: oils_seeds, roots_tubers, cereals, fruits_vegetables, animal_products, sugar, food_oils, other, oil_meals, pulses
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
  change: true\`\`\``
  }, {
    type: 'horizontalBar',
    displayName: 'Horizontal Bar',
    description: 'Use vertical space to compare more parameter values',
    markup: `\`\`\`chart
mark: horizontalBar
title: Change in SSP2_GFDL Impact Parameters from 2015 - 2050 (%)
width: 100%
scenarios: ssp2_gfdl
encoding:
  x:
    type: nominal
    field: agg_commodity
  y:
    type: quantitative
    field: Val
fixed:
  agg_commodity: animal_products, cereals, fruits_vegetables, oils_seeds, food_oils, oil_meals, other, pulses, roots_tubers, sugar
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: true\`\`\``
  }
]
