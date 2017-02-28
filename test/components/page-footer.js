import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import { PageFooter } from '../../app/assets/scripts/components/page-footer'

test('page-footer test', t => {
  const component = shallow(<PageFooter />)

  t.truthy(component.hasClass('page__footer'))
})
