import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import { ProjectArticleCard } from '../../app/assets/scripts/components/project-article-card'

import articleMetadata from '../fixtures/article-metadata.json'

test('project-article-card test', t => {
  const component = shallow(<ProjectArticleCard article={articleMetadata} />)

  t.truthy(component.hasClass('article-card__link--project'))
})
