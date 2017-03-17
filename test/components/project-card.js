import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import ProjectCard from '../../app/assets/scripts/components/project-card'

test('project-article-card test', t => {
  const component = shallow(<ProjectCard project='test' />)

  t.truthy(component.hasClass('featured-project__item'))
})
