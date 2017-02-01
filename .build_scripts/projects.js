var fs = require('fs')
var glob = require('glob')
var path = require('path')
var fm = require('front-matter')

glob('app/assets/data/projects/*.md', function (err, files) {
  if (err) console.warn(err)
  var inventory = {}
  files.map(function (file) {
    var metadata = fm(fs.readFileSync(file).toString()).attributes
    metadata = {
      title: metadata.title,
      author: metadata.author,
      date: metadata.date,
      url: file.replace('app/', ''),
      type: metadata.type,
      project: metadata.project,
      tags: metadata.tags,
      resources: metadata.resources,
      locations: metadata.locations,
      scenarios: metadata.scenarios
    }
    inventory[path.basename(file, '.md')] = metadata
  })
  fs.writeFile('./app/assets/data/projects.json', JSON.stringify(inventory))
})
