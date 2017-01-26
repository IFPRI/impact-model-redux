var logo = [
  '╭──────────────────────────────────────╮',
  '│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│',
  '│░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░│',
  '│░░░░░░░░░░░░░░░█░░█░░░░█░░░░░░░░░░░░░░│',
  '│░░░░░░░░░░░░░░░██░░█░░██░░░░░░░░░░░░░░│',
  '│░░░░░░░░░░░░░░░███░█░███░░░░░░░░░░░░░░│',
  '│░░░░░░░░░░░░░░░███░████░░░░░░░░░░░░░░░│',
  '│░░░░░░░░░░░░░░░███████░░░░░░█░░░█░░░░░│',
  '│░░░░░░░░██░░░░░██████░░░░░██░░██░░░░░░│',
  '│░░░░░█░░░██░░░░░█████░░░███░███░░░░░░░│',
  '│░░░░░░██░░███░░░█████░░██████░░░░░░░░░│',
  '│░░░░░░░░██░███░░█████░░████░░░░░░░░░░░│',
  '│░░░░░░░░░██████░░████░███░░░░░░░░░░░░░│',
  '│░░░░░░░░░░░░████░███░░█░░░░░░░░░░░░░░░│',
  '│░░░░░░█████░░░░████░░░░░░░░░░░░░░░░░░░│',
  '│░░░░░░░░██████░░░██░░░█░░░░░░░░░░░░░░░│',
  '│░░░░░░░░░░░░████░█████░░░░░░░░░░░░░░░░│',
  '│░░░░░░░░░░░░░░██████░░░░░░░░░░░░░░░░░░│',
  '│░░░░░░░░░░░░░░░░░███░░░░░░░░░░░░░░░░░░│',
  '╰──────────────────────────────────────╯'
]

var colors = []
logo = logo
.map(function (line, i) {
  return line
  .replace(/(^|[|│])|(░+)|(█+)/g, function (match, p1, p2, p3) {
    if (p1) {
      colors.push('black')
      return '%c' + p1
    } else if (p2) {
      colors.push('#cf3f02')
      return '%c' + p2
    } else if (p3 || !match) {
      colors.push('black')
      return '%c' + (p3 || '')
    }
  })
})
.concat([
  '                                        ',
  '%c           DEVELOPMENT SEED             '
])
.join('\n')

colors = colors.map(function (c) {
  return 'color: ' + c
})
.concat(['color: #cf3f02 font-weight: bold'])

module.exports = [logo].concat(colors)
