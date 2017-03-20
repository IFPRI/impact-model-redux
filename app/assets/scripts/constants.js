import chroma from 'chroma-js'

export const articleBrowsePageLength = 15

export const sixColorPalette = [
  '#5185A3', // (blue/gray)
  '#38A386', // (dark green)
  '#83C61A', // (green)
  '#BDD05E', // (light green)
  '#E2C117', // (yellow)
  '#C6881A', // (orange)
  '#B55215' // (red)
]

export const oneColorPalette = [
  '#83C61A'
]

export const greenGradientPalette = (steps) => chroma.scale(['#00ff00', '#ccffcc']).colors(steps)

export const blueGradientPalette = (steps) => chroma.scale(['#007acc', '#b3e0ff']).colors(steps)

export const greyGradientPalette = (steps) => chroma.scale(['#4d4d4d', '#cccccc']).colors(steps)
