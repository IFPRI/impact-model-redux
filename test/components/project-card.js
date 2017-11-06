import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import ProjectCard from '../../app/assets/scripts/components/project-card'
import articleMetadata from '../fixtures/article-metadata.json'

test('project-article-card test', t => {
  const component = shallow(<ProjectCard project='test' briefs={[articleMetadata]}/>)

  t.truthy(component.hasClass('featured-project'))
})
