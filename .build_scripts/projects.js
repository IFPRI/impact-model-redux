var fs = require('fs')
var glob = require('glob')

glob('app/assets/data/projects/*.md', function (err, files) {
  if (err) console.warn(err)
  fs.writeFileSync('app/assets/data/projects.json',
    JSON.stringify(files.map(function (file) {
      return file.replace('app/', '')
    })))
})
