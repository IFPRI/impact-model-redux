export const articleBrowsePageLength = 15

export const multiColorPalette = [
  '#E58606', '#5D69B1', '#52BCA3', '#99C945',
  '#CC61B0', '#24796C', '#DAA51B', '#2F8AC4',
  '#764E9F', '#ED645A', '#CC3A8E', '#A5AA99'
]

export const oneColorPalette = ['#83C61A']

export const stripeChartFill = ['#dddddd']

export const chartTypes = ['bar', 'horizontalBar', 'grouped-bar', 'line', 'stripe', 'pie', 'doughnut', 'polarArea']
export const multiChartTypes = ['grouped-bar', 'line', 'stripe']

export const examplePreviewerCharts = [
  { type: 'bar',
    displayName: 'Bar',
    description: '',
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
  impactparameter: qdxagg, qfxagg
  _type: ssp2_gfdl
dropdown:
  field: agg_commodity
  values: cer, amt, f&v, ols, oil, mls, other, pul, r&t, sgr
change:
  field: year
  values: 2015, 2050
  type: percent\`\`\``
  }, {
    type: 'line',
    displayName: 'Line',
    description: '',
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
  commodity: cer-rice
dropdown:
  field: impactparameter
  values: qfxagg, qdxagg
series:
  field: _type
  values: ssp2_gfdl, ssp2_hgem\`\`\``
  }, {
    type: 'groupedBar',
    displayName: 'Grouped Bar',
    description: '',
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
  commodity: cer-rice
dropdown:
  field: impactparameter
  values: qfxagg, qdxagg
series:
  field: _type
  values: ssp2_gfdl, ssp2_hgem
  \`\`\``
  }, {
    type: 'stripe',
    displayName: 'Stripe',
    description: 'Compare multiple values as lines, with an area representative of all values range',
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
  commodity: cer-maize
dropdown:
  field: impactparameter
  values: qfxagg, qdxagg
series:
  field: _type
  values: ssp2_gfdl, ssp2_hgem
  \`\`\``
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
  agg_commodity: cer, amt, f&v, ols, oil, mls, other, pul, r&t, sgr
  _type: ssp2_gfdl
dropdown:
  field: impactparameter
  values: qfxagg, qdxagg
change:
  field: year
  values: 2015, 2050
  type: percent\`\`\``
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
  agg_commodity: cer, amt, f&v, ols, oil, mls, other, pul, r&t, sgr
  _type: ssp2_gfdl
dropdown:
  field: impactparameter
  values: qfxagg, qdxagg
change:
  field: year
  values: 2015, 2050
  type: percent\`\`\``
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
  agg_commodity: cer, amt, f&v, ols, oil, mls, other, pul, r&t, sgr
  _type: ssp2_gfdl
dropdown:
  field: impactparameter
  values: qfxagg, qdxagg
change:
  field: year
  values: 2015, 2050
  type: percent\`\`\``
  }
]
