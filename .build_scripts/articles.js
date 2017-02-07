var fs = require('fs')
var glob = require('glob')
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

glob('app/assets/data/articles/*.md', function (err, files) {
  if (err) console.warn(err)
  const inventory = files.map(function (file) {
    var text = fm(fs.readFileSync(file).toString())
    var metadata = text.attributes
    return {
      title: metadata.title,
      id: slugify(metadata.title),
      author: metadata.author,
      date: metadata.date,
      url: file.replace('app/', ''),
      type: metadata.type,
      project: metadata.project,
      locations: metadata.locations,
      commodities: metadata.commodities,
      tags: metadata.tags,
      scenarios: metadata.scenarios,
      resources: metadata.resources,
      // Correct for several edge cases that can occur around markdown parsing
      preview: cutAt(text.body, 300).replace(/# /g, '').replace(/\n\n/g, ' ').replace(/\n/g, ' ').replace('....', '...').replace(/. #.../g, '...')
    }
  })
  console.log(inventory)
  fs.writeFile('./app/assets/data/articles.json', JSON.stringify(inventory))
})
