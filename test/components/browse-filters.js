import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import { BrowseFilters } from '../../app/assets/scripts/components/browse-filters'

const dispatch = sinon.spy()
const articleFilters = []

test('brief test', t => {
  const component = shallow(<BrowseFilters articleFilters={articleFilters} dispatch={dispatch} />)
  component.instance().handleFilterSelection = () => {}

  t.truthy(component.hasClass('browse__filters'))
})
