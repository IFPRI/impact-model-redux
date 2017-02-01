var fs = require('fs')
var glob = require('glob')
var path = require('path')
var fm = require('front-matter')

// Extract n characters of preview text, rounded to the closest full word
function cutAt (text, characters) {
  var lastCharacter = text.lastIndexOf(' ', characters)
  return text.substring(0, lastCharacter) + '...'
}

function slugify (text) {
  return text.toString().toLowerCase()
  .replace(/\s+/g, '-')           // Replace spaces with -
  .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
  .replace(/\-\-+/g, '-')         // Replace multiple - with single -
  .replace(/^-+/, '')             // Trim - from start of text
  .replace(/-+$/, '')             // Trim - from end of text
}

glob('app/assets/data/projects/*.md', function (err, files) {
  if (err) console.warn(err)
  var inventory = {}
  files.map(function (file) {
    var text = fm(fs.readFileSync(file).toString())
    var metadata = text.attributes
    metadata = {
      title: metadata.title,
      id: slugify(metadata.title),
      author: metadata.author,
      date: metadata.date,
      url: file.replace('app/', ''),
      type: metadata.type,
      project: metadata.project,
      tags: metadata.tags,
      resources: metadata.resources,
      locations: metadata.locations,
      scenarios: metadata.scenarios,
      // Correct for several edge cases that can occur around markdown parsing
      preview: cutAt(text.body, 300).replace(/# /g, '').replace(/\n\n/g, ' ').replace(/\n/g, ' ').replace('....', '...').replace(/. #.../g, '...')
    }
    inventory[path.basename(file, '.md')] = metadata
  })
  fs.writeFile('./app/assets/data/projects.json', JSON.stringify(inventory))
})
