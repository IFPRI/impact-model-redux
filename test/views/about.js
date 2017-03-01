import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import { About } from '../../app/assets/scripts/views/about'

test('about test', t => {
  const component = shallow(<About />)

  t.truthy(component.hasClass('page__about'))
})
