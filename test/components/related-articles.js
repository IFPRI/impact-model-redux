import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import { RelatedArticles } from '../../app/assets/scripts/components/related-articles'

import articles from '../fixtures/articles.json'
import articleMetadata from '../fixtures/article-metadata.json'

test('related-articles test', t => {
  const component = shallow(<RelatedArticles articles={articles} articleMetadata={articleMetadata} />)

  t.truthy(component.hasClass('page__related-articles-list'))
})
