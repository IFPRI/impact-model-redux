import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import { Contact } from '../../app/assets/scripts/views/contact'

test('contact test', t => {
  const component = shallow(<Contact />)
  t.truthy(component.hasClass('page__contact'))
})
