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

let commodities = []
let locations = []
let projects = []

glob('app/assets/data/articles/*.md', function (err, files) {
  if (err) console.warn(err)
  const inventory = files.map(function (file) {
    var text = fm(fs.readFileSync(file).toString())
    var metadata = text.attributes
    commodities = commodities.concat(metadata.commodities)
    locations = locations.concat(metadata.locations)
    projects = projects.concat(metadata.project)
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
  fs.writeFile('./app/assets/data/articles.json', JSON.stringify(inventory), (err) => {
    if (err) return err
  })
  fs.writeFile('./app/assets/data/filter-categories.json',
    JSON.stringify({
      commodities: commodities.filter((value, index, self) => self.indexOf(value) === index && value && value !== 'undefined').sort(),
      locations: locations.filter((value, index, self) => self.indexOf(value) === index && value && value !== 'undefined').sort(),
      projects: projects.filter((value, index, self) => self.indexOf(value) === index && value && value !== 'undefined').sort()
    }), (err) => {
      if (err) return err
    })
  console.log('Inventory saved to ./app/assets/data/articles.json')
  console.log('List of filter categories saved to ./app/assets/data/filter-categories.json')
})
