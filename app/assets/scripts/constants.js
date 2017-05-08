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

export const examplePreviewerCharts = [
  { type: 'bar',
    displayName: 'Bar',
    description: 'Examine a singular data source',
    markup: `\`\`\`chart
mark: bar
title: Example Bar Chart
width: 100%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  impactparameter: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
  _type: ssp2_gfdl
dropdown:
  field: agg_commodity
  values: cereals, animal_products, fruits_vegetables, oils_seeds, food_oils, oil_meals, other, pulses, roots_tubers, sugar
change: percent\`\`\``
  }, {
    type: 'line',
    description: 'Compare values from multiple scenarios',
    displayName: 'Line',
    markup: `\`\`\`chart
mark: line
title: Example Line Chart
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
  _type: ssp2_gfdl
dropdown:
  field: impactparameter
  values: qnxagg, qdxagg, yldxagg, areaxagg, pwxagg, qsupxagg\`\`\``
  }, {
    type: 'groupedBar',
    displayName: 'Grouped Bar',
    description: 'Compare values from multiple scenarios',
    markup: `\`\`\`chart
mark: grouped-bar
title: Example Grouped Bar Chart
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
  _type: ssp2_gfdl
dropdown:
  field: impactparameter
  values: qnxagg, qdxagg, yldxagg, areaxagg, pwxagg, qsupxagg\`\`\``
  }, {
    type: 'stripe',
    displayName: 'Stripe',
    description: "Compare multiple scenarios as lines, with an area representative of all scenarios' range",
    markup: `\`\`\`chart
mark: stripe
title: Example Stripe Chart
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
  _type: ssp2_gfdl
dropdown:
  field: impactparameter
  values: pwxagg, qnxagg, areaxagg, qdxagg, yldxagg, qsupxagg\`\`\``
  }, {
    type: 'pie',
    displayName: 'Pie',
    description: 'Compare relative parameter values',
    markup: `\`\`\`chart
mark: pie
title: Example Pie Chart
width: 45rem
legend: bottom
encoding:
  x:
    type: nominal
    field: agg_commodity
  y:
    type: quantitative
    field: Val
fixed:
  agg_commodity: cereals, oils_seeds, animal_products, fruits_vegetables, other, sugar, food_oils, roots_tubers, oil_meals, pulses
  _type: ssp2_gfdl
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
title: Example Doughnut Chart
width: 32rem
legend: left
encoding:
  x:
    type: nominal
    field: agg_commodity
  y:
    type: quantitative
    field: Val
fixed:
  agg_commodity: oils_seeds, roots_tubers, cereals, fruits_vegetables, animal_products, sugar, food_oils, other, oil_meals, pulses
  _type: ssp2_gfdl
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
title: Example Horizontal Bar Chart
width: 100%
encoding:
  x:
    type: nominal
    field: agg_commodity
  y:
    type: quantitative
    field: Val
fixed:
  agg_commodity: animal_products, cereals, fruits_vegetables, oils_seeds, food_oils, oil_meals, other, pulses, roots_tubers, sugar
  _type: ssp2_gfdl
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: percent\`\`\``
  }
]
