/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Radio from '../'

export default storiesOf('Controls / Radio', module).addWithJSX('basic usage', () => (
	<div>
		<Radio.Group onChange={action('toggle-radio')}>
			<Radio value='1'>Radio</Radio>
			<Radio value='2'>Radio</Radio>
		</Radio.Group>

		<br/><br/>

		<Radio.Group onChange={action('toggle-radio')} defaultValue="1">
			<Radio.Button value="1">Long value</Radio.Button>
			<Radio.Button value="2">Value</Radio.Button>
		</Radio.Group>

	</div>
))
