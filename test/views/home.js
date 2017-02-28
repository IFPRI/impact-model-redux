import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import { Home } from '../../app/assets/scripts/views/home'

test('home test', t => {
  const component = shallow(<Home />)
  t.truthy(component.hasClass('page__home'))
})
