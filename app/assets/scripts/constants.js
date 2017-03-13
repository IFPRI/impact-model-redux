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
  '#83C61A'
]

export const greenGradientPalette = (steps) => chroma.scale(['#00ff00', '#ccffcc']).colors(steps)

export const blueGradientPalette = (steps) => chroma.scale(['#007acc', '#b3e0ff']).colors(steps)

export const greyGradientPalette = (steps) => chroma.scale(['#4d4d4d', '#cccccc']).colors(steps)
