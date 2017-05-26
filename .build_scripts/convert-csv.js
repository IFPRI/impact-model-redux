var fs = require('fs')
var file = './app/assets/data/translation.csv'

const json = {}
const csv = fs.readFileSync(file).toString().split('\n')
csv.forEach((line) => {
  const [ key, value ] = line.split(',')
  if (key && value) {
    json[key] = value
  }
})

fs.writeFile('./app/assets/data/translation.json',
  JSON.stringify(json), (err) => {
    if (err) return err
  })
