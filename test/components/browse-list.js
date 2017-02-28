import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import { BrowseList } from '../../app/assets/scripts/components/browse-list'

import articles from '../fixtures/articles.json'
const dispatch = sinon.spy()

test('browse-list test', t => {
  const component = shallow(<BrowseList
    dispatch={dispatch}
    articles={articles}
    articleFilters={[]}
    articleSorting={'recency'}
    articlePage={0}
    path={'briefs'} />)

  t.truthy(component.hasClass('browse__article-list'))
})
