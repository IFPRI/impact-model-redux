var fs = require('fs')
var glob = require('glob')
var path = require('path')
var jsyaml = require('js-yaml')

glob('app/assets/data/projects/*.md', function (err, files) {
  if (err) console.warn(err)
  var inventory = {}
  files.map(function (file) {
    var metadata = fs.readFileSync(file).toString()
    metadata = jsyaml.load(metadata.split('---')[1])
    metadata = {
      title: metadata.title,
      tags: metadata.tags,
      scenarios: metadata.scenarios,
      url: file.replace('app/', '')
    }
    inventory[path.basename(file, '.md')] = metadata
  })
  fs.writeFile('./app/assets/data/projects.json', JSON.stringify(inventory))
})
