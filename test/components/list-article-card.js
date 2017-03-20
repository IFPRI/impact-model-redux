import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import { ListArticleCard } from '../../app/assets/scripts/components/list-article-card'

import articleMetadata from '../fixtures/article-metadata.json'
const path = 'briefs'

test('list-article-card test', t => {
  const component = shallow(<ListArticleCard article={articleMetadata} path={path}/>)

  t.truthy(component.hasClass('article-list-card'))
})
