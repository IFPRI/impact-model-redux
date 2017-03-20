import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import { BriefBrowse } from '../../app/assets/scripts/views/brief-browse'

import articles from '../fixtures/articles.json'
const route = {path: '/briefs'}

test('brief-browse test', t => {
  const component = shallow(<BriefBrowse articles={articles} route={route} />)

  t.truthy(component.hasClass('page__browse'))
})
