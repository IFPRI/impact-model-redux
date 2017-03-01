import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import { PageHeader } from '../../app/assets/scripts/components/page-header'

test('page-header test', t => {
  const component = shallow(<PageHeader />)

  t.truthy(component.hasClass('page__header'))
})
