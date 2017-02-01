var fs = require('fs')
var glob = require('glob')
var path = require('path')
var fm = require('front-matter')

// Extract n charecters of preview text, rounded to the closest full word
function cutAt (text, charecters) {
  console.log(text)
  var lastCharecter = text.lastIndexOf(' ', charecters)
  return text.substring(0, lastCharecter) + '...'
}

glob('app/assets/data/projects/*.md', function (err, files) {
  if (err) console.warn(err)
  var inventory = {}
  files.map(function (file) {
    var text = fm(fs.readFileSync(file).toString())
    var metadata = text.attributes
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
      scenarios: metadata.scenarios,
      preview: cutAt(text.body, 300).replace(/# /g, '').replace(/\n\n/g, ' ').replace(/\n/g, ' ').replace('....', '...').replace(/. #.../g, '...')
    }
    inventory[path.basename(file, '.md')] = metadata
  })
  fs.writeFile('./app/assets/data/projects.json', JSON.stringify(inventory))
})
