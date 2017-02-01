'use strict'

import _ from 'lodash'
import { translationData } from '../../data/translation'

export const translate = (str) => translationData[str]

export const untranslate = (str) => _.invert(translationData)[str]
