/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { items, cssClass } from './mock-data'
import TagSlider from '../'

export default storiesOf('Tags / TagSlider', module).addWithJSX('basic usage', () => (
	<TagSlider items={items} startItem={1} className={cssClass} onAction={action('select item')} />
))
