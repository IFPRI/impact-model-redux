import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import { BrowseList } from '../../app/assets/scripts/components/browse-list'

import articles from '../fixtures/articles.json'
const dispatch = sinon.spy()
const articleFilters = []
const articleSorting = 'recency'
const articlePage = 0
const path = 'briefs'

test('browse-list test', t => {
  const component = shallow(<BrowseList
    dispatch={dispatch}
    articles={articles}
    articleFilters={articleFilters}
    articleSorting={articleSorting}
    articlePage={articlePage}
    path={path} />)

  t.truthy(component.hasClass('browse__article-list'))
})
