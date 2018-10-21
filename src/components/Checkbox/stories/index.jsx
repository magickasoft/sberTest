/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Checkbox from '../'

export default storiesOf('Controls / Checkbox', module).addWithJSX('basic usage', () => (
	<div>
		<Checkbox onChange={action('toggle-checkbox')}>Checkbox</Checkbox>
		<Checkbox onChange={action('toggle-checkbox')}>Checkbox</Checkbox>
		<Checkbox onChange={action('toggle-checkbox')}>Checkbox</Checkbox>
	</div>
))
