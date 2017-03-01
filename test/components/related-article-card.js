import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import { RelatedArticleCard } from '../../app/assets/scripts/components/related-article-card'

import articleMetadata from '../fixtures/article-metadata.json'

test('related-article-card test', t => {
  const component = shallow(<RelatedArticleCard article={articleMetadata} />)

  t.truthy(component.hasClass('article-card--related'))
})
