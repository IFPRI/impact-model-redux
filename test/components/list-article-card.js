import React from 'react'
import fetch from 'isomorphic-fetch'
import marked from 'marked'
import fm from 'front-matter'
import test from 'ava'
import { shallow } from 'enzyme'

import config from '../../app/assets/scripts/config'

import { ListArticleCard } from '../../app/assets/scripts/components/list-article-card'

test('list-article-card test', t => {
  fetch(`${config.baseUrl}/assets/data/articles/a-id-occaecati.md`)
  .then(response => response.data)
  .then(text => {
    const article = marked(fm(text).body)
    const component = shallow(<ListArticleCard article={article.body} articleMatadata={article.metadata}/>)

    t.truthy(component.hasClass('article-list-card'))
  })
})
