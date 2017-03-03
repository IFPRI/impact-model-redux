/* global sqltoes, reqwest, YAML, d3, vg, _ , */
window.onload = () => {
  // Base URL
  const url = 'https://82e66fb22a73abdaa81040f2abdc298f-us-east-1.foundcluster.com:9243/ifpri/ssp2_gfdl/_search?search_type=count'

  // Start a new marked renderer
  const marked = window.marked
  const renderer = new marked.Renderer()
  let counter = 0

  // Awful global state for submitting with dropdown values
  let dropdownOverride = null
  let axisOverride = null

  // Render the ```vis as a vega-lite chart
  renderer.code = (code, lang, escaped) => {
    if (lang === 'vis') {
      const jsonVis = YAML.parse(code)
      // if we don't have a color scheme, make it a set color
      if (!jsonVis.encoding.color) jsonVis.encoding.color = { value: '83C719' }

      // grab the important field names
      const groups = String(jsonVis.encoding.x.field).split(',').map(a => a.trim())
      let group
      let axisComponent = ''
      if (groups.length === 1) {
        group = groups[0]
      } else {
        group = axisOverride || groups[0]
        axisComponent = `<span>X Axis</span><select class='axis-select'>${groups.map((g) => {
          return `<option value='${g}' ${g === (axisOverride || groups[0]) ? 'selected' : ''}>${g}</option>`
        })}</select>`
      }

      let val = jsonVis.encoding.y.field
      const series = jsonVis.encoding.color.field

      // construct a where clause for our sql statement
      const where = _.flatten(_.map(jsonVis.fixed, (val, param) => {
        const vals = String(val).split(',').map(a => a.trim())
        return vals.length === 1 ? `${param} = ${val}` : `${param} in ${vals.join(',')}`
      }))

      // group by for sql statement, add series if necessary
      const groupBy = [group]
      if (series) groupBy.push(series)

      // switch for getting change in var from 2015 - 2050
      const change = jsonVis.change
      if (change) {
        groupBy.push('year')
        where.push('year in 2015,2050')
      }

      // add dropdown component...
      const dropdown = jsonVis.dropdown
      let dropdownComponent = ''
      if (dropdown && dropdown.field && dropdown.values) {
        // ...to where clause
        const values = dropdown.values.split(',').map((val) => val.trim())
        where.push(`${dropdown.field} = ${dropdownOverride || values[0]}`)

        // ...to the DOM
        dropdownComponent = `<span>Filter</span><select class='dropdown-select'>${values.map((val) => {
          // Something funny happenning here... option select list doesn't like async fetching
          // translation(val, (translatedVal) => {
          return `<option value='${val}' ${val === (dropdownOverride || values[0]) ? 'selected' : ''}>${val}</option>`
          // })
        })}</select>`
      }

      // keep track of the number of dependencies
      counter++
      const el = `#vis-${counter}`
      const htmlChart = `<div><h2>${jsonVis.title}</h2><div id='vis-${counter}'></div>${dropdownComponent}${axisComponent}</div>`

      // request the data and parse the response for our graph format
      const postData = JSON.stringify(sqltoes({select: [`sum(${val})`], where: where, groupBy: groupBy}))
      console.log(postData)
      reqwest({
        url: url,
        method: 'post',
        data: postData,
        success: (resp) => {
          jsonVis.encoding.y.field = val
          jsonVis.encoding.x.field = group
          jsonVis.encoding.color.field = series
          // find out how to parse our response
          const wherePath = where.map(a => {
            let b, c
            if (a.match(' = ')) {
              [b, c] = a.split(' = ')
              return `where_${b}_${c}`
            } else {
              [b, c] = a.split(' in ')
              return `where_${b}_multiple`
            }
          })
          jsonVis.data = {
            values: _.flattenDeep(_.get(resp.aggregations, wherePath)[`group_by_${group}`].buckets.map((obj) => {
              return parseDataObject(obj, group, val, {}, change)
            }))
          }
          // embed the graph in the element which is awaiting it
          const embedSpec = {mode: 'vega-lite', spec: jsonVis, renderer: 'svg', actions: false}
          vg.embed(el, embedSpec, (err, result) => {
            if (err) { throw err }
            // after we embed it add d3 tip, display the value or the summed value
            const tip = d3.tip().attr('class', 'd3-tip').html((d) => (d.datum[val] || d.datum[`sum_${val}`]).toFixed(2))
            const vis = d3.select(`${el} svg`)
            vis.call(tip)
            vis.select('.marks').selectAll('*')
               .on('mouseover', tip.show)
               .on('mouseout', tip.hide)
          })
        }
      })
      return htmlChart
    }
    // return result
    return marked.Renderer.prototype.code.call(this, code, lang, escaped)
  }

  // Convert from Markdown to HTML
  const input = document.querySelector('#visdown-input')
  const output = document.querySelector('#visdown-output')

  const visdown = () => {
    const markdownText = input.value
    dropdownOverride = null
    axisOverride = null
    output.innerHTML = marked(markdownText, { renderer: renderer })
    document.querySelectorAll('select').forEach(s => {
      s.addEventListener('change', (e) =>
        secondaryUpdate()
      )
    })
  }

  const secondaryUpdate = () => {
    var markdownText = input.value
    dropdownOverride = document.querySelectorAll('.dropdown-select').length && document.querySelectorAll('.dropdown-select')[0].value
    axisOverride = document.querySelectorAll('.axis-select').length && document.querySelectorAll('.axis-select')[0].value
    output.innerHTML = marked(markdownText, { renderer: renderer })
    document.querySelectorAll('select').forEach(s => {
      s.addEventListener('change', (e) =>
        secondaryUpdate()
      )
    })
  }
  visdown()

  const parseDataObject = (obj, group, val, otherKeys, change) => {
    var nextGroup = Object.keys(obj).find(a => a.match('group_by'))
    // we may have other groupings to parse through
    if (nextGroup) {
      // special parsing for change by year
      if (nextGroup === 'group_by_year' && change) {
        return Object.assign({}, {
          // assumes later value in bucket 1 and early value in bucket 0
          // divide by earlier value if we want a percentage
          [val]: (obj[nextGroup].buckets[1][`sum_${val}`].value - obj[nextGroup].buckets[0][`sum_${val}`].value) /
            (_.includes(['percentage', 'percent', '%', 'p'], change) ? obj[nextGroup].buckets[0][`sum_${val}`].value : 1),
          [group]: obj.key
        }, otherKeys)
      } else {
      // normal procedure
        return obj[nextGroup].buckets.map(a => {
          return parseDataObject(a, nextGroup.replace('group_by_', ''), val, Object.assign({}, otherKeys, {[group]: obj.key}), change)
        })
      }
    } else {
      // we're at the lowest level, make our object
      return Object.assign({}, {
        [group]: obj.key,
        [val]: obj[`sum_${val}`].value
      }, otherKeys)
    }
  }
}
