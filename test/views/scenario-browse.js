import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import { ScenarioBrowse } from '../../app/assets/scripts/views/scenario-browse'

import articles from '../fixtures/articles.json'
const route = {path: '/scenarios'}

test('scenario-browse test', t => {
  const component = shallow(<ScenarioBrowse articles={articles} route={route} />)

  t.truthy(component.hasClass('page__browse'))
})
