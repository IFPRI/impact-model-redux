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

export const defaultText = `\`\`\chart
mark: grouped-bar
title: Change in SSP2_GFDL Impact Parameters per Commodity Group (%) from 2015 - 2050 (SSP2_GFDL vs. SSP2_GFDL)
width: 70%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
scenarios: SSP2_GFDL, SSP2_GFDL
fixed:
  impactparameter: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
change: true
\`\`\``
