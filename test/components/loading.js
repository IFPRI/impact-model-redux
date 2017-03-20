import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import { Loading } from '../../app/assets/scripts/components/loading'

test('loading test', t => {
  const component = shallow(<Loading />)

  t.truthy(component.hasClass('loading-spinner'))
})
