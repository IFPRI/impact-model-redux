import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import { UhOh } from '../../app/assets/scripts/views/uhoh'

test('uhoh test', t => {
  const component = shallow(<UhOh />)
  t.truthy(component.hasClass('page__uhoh'))
})
