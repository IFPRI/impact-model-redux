import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import { Scenario } from '../../app/assets/scripts/views/scenario'

import articles from '../fixtures/articles.json'
const pathname = {id: 'a-quia-voluptas'}
const dispatch = sinon.spy()

test('scenario test', t => {
  const component = shallow(<Scenario articles={articles} params={pathname} dispatch={dispatch} />)

  t.truthy(component.hasClass('page__article'))
})
