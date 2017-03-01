/* global $, d3, _ */
function translation () {
  var j = null
  return function (str) {
    if (!j) {
      $.ajax({url: 'translation.csv',
        async: false,
        success: function (data) {
          var csvData = d3.csv.parse(data)
          j = {}
          _.each(csvData, function (obj) {
            j[obj.key.toLowerCase()] = obj.translation
          })
        }
      })
    }
    return _.includes(_.keys(j), String(str).toLowerCase()) ? j[str.toLowerCase()] : str
  }
}

var translate = translation()

function untranslation () {
  var k = null
  return function (str) {
    if (!k) {
      $.ajax({url: 'translation.csv',
        async: false,
        success: function (data) {
          var csvData = d3.csv.parse(data)
          var temp = {}
          _.each(csvData, function (obj) {
            temp[obj.key.toLowerCase()] = obj.translation
          })
          k = _.invert(temp)
        }
      })
    }
    return _.includes(_.keys(k), str) ? k[str] : str
  }
}

var untranslate = untranslation()
