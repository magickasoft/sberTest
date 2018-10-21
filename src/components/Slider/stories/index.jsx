/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react'
import { storiesOf } from '@storybook/react'

import Slider from '../'

export default storiesOf('Slider', module).addWithJSX('basic usage', () => (
	<div>
		<Slider marks={{ 0: '0', 25: '25', 50: '50 платежей', 75: '75', 100: 'больше 100' }} />
	</div>
))
