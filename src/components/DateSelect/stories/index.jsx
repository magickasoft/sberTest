/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import DateSelect from '../'

export default storiesOf('Input / DateSelect', module)
	.addWithJSX('basic usage', () => <DateSelect yearRange={40} />)
	.addWithJSX('with initialValue', () => <DateSelect yearRange={40} initialValue />)
	.addWithJSX('with onChange', () => (
		<DateSelect yearRange={40} initialValue onChange={console.log} />
	))
