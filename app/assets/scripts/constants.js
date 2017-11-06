export const articleBrowsePageLength = 15



export const multiColorPalette = [
  '#73AF48', '#1D6996', '#CC503E', '#E17C05',
  '#5F4690', '#38A6A5', '#0F8554', '#6F4070',
  '#EDAD08', '#994E95', '#666666', '#94346E'
]
export const multiColorPaletteSort = [
  '#5F4690', '#1D6996', '#38A6A5', '#0F8554',
  '#73AF48', '#EDAD08', '#E17C05', '#CC503E',
  '#94346E', '#6F4070', '#994E95', '#666666'
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
