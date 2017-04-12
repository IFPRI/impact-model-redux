import chroma from 'chroma-js'

export const articleBrowsePageLength = 15

export const sixColorPalette = [
  '#5185A3', // (blue/gray)
  '#38A386', // (dark green)
  '#83C61A', // (green)
  '#BDD05E', // (light green)
  '#E2C117', // (yellow)
  '#C6881A', // (orange)
  '#B55215'  // (red)
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

export const chartTypes = ['bar', 'horizontal-bar', 'grouped-bar', 'line', 'stripe', 'pie', 'doughnut', 'polarArea']
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
  values: cereals,animal_products,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
change: true
\`\`\``
  }, { type: 'line',
       description: 'Use to compare multiple data sources',
       displayName: 'Line',
       markup: ''
  }, { type: 'groupedBar',
       displayName: 'Grouped Bar',
       description: 'Use to compare multiple scenarios',
       markup: ''
  }, { type: 'stripe',
       displayName: 'Stripe',
       description: "Compare multiple scenarios as lines, with an area representative of all scenarios' range",
       markup: ''
  }, { type: 'pie',
       displayName: 'Pie',
       description: 'Pie',
       markup: ''
  }, { type: 'doughnut',
       displayName: 'Doughnut',
       description: 'Doughnut',
       markup: ''
  }, { type: 'horizontalBar',
       displayName: 'Horizontal Bar',
       description: 'Horizontal Bar',
       markup: ''
  }
]
