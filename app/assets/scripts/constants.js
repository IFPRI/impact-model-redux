import chroma from 'chroma-js'

export const articleBrowsePageLength = 15

export const nineColorPalette = [
  '#4d4d4d', // (gray)
  '#5da5da', // (blue)
  '#faa43a', // (orange)
  '#60bd68', // (green)
  '#f17cb0', // (pink)
  '#b2912f', // (brown)
  '#b276b2', // (purple)
  '#decf3f', // (yellow)
  '#f15854'  // (red)
]

export const oneColorPalette = [
  '#6ca315'
]

export const greenGradientPalette = (steps) => chroma.scale(['#00ff00', '#ccffcc']).colors(steps)

export const blueGradientPalette = (steps) => chroma.scale(['#007acc', '#b3e0ff']).colors(steps)

export const greyGradientPalette = (steps) => chroma.scale(['#4d4d4d', '#cccccc']).colors(steps)

export const spinnerOptions = {
  color: '#888',
  lines: 9,
  length: 0,
  speed: 0.9,
  width: 10,
  radius: 14,
  top: '60%'
}

export const order = {
  parameter: {
    tyldxagg: 1,
    tareaxagg: 2,
    qsupxagg: 3,
    anmlnumxagg: 4,
    anmlyldxagg: 5,
    qfxagg: 6,
    qlxagg: 7,
    qdxagg: 8,
    pwxagg: 9
  },
  commodityGroup: {
    other: 1,
    food_oils: 4,
    oils_seeds: 3,
    oil_meals: 2
  }
}
