/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { items, cssClass } from './mock-data'
import Tags from '../'

export default storiesOf('Tags / Tags', module)
	.addWithJSX('few items', () => (
		<Tags items={items.slice(0, 3)} className={cssClass} onAction={action('delete tag')} />
	))
	.addWithJSX('many items', () => (
		<Tags items={items} className={cssClass} onAction={action('delete tag')} />
	))
