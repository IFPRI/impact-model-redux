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
