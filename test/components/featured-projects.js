import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import FeaturedProjects from '../../app/assets/scripts/components/featured-projects'

test('project-articles test', t => {
  const component = shallow(<FeaturedProjects projects={[]} />)

  t.truthy(component.hasClass('split__internal--left'))
})
