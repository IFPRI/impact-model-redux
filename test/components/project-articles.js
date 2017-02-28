import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import { ProjectArticles } from '../../app/assets/scripts/components/project-articles'

import articles from '../fixtures/articles.json'
import articleMetadata from '../fixtures/article-metadata.json'

test('project-articles test', t => {
  const component = shallow(<ProjectArticles articles={articles} articleMetadata={articleMetadata} />)

  t.truthy(component.hasClass('page__project-articles-list'))
})
