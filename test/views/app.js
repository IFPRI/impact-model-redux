import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import { App } from '../../app/assets/scripts/views/app'

test('app test', t => {
  const component = shallow(<App />, {contextTypes:{}})
  t.truthy(component.hasClass('page'))
})
