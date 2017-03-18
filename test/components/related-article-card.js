import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import { RelatedArticleCard } from '../../app/assets/scripts/components/related-article-card'

import articleMetadata from '../fixtures/article-metadata.json'

test('related-article-card test', t => {
  const relatedComponent = shallow(<RelatedArticleCard article={articleMetadata} cardType='related'/>)

  t.truthy(relatedComponent.hasClass('article-card--related'))

  const projectComponent = shallow(<RelatedArticleCard article={articleMetadata} cardType='project'/>)

  t.truthy(projectComponent.hasClass('article-card--project'))
})
