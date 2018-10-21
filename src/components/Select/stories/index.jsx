/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react'
import { storiesOf } from '@storybook/react'

import Select from '../'

const Option = Select.Option

export default storiesOf('Input / Select', module).addWithJSX('basic usage', () => (
	<div>
		<Select style={{ width: 200 }}>
			<Option value="Вариант 1">Вариант 1</Option>
			<Option value="Вариант 2">Вариант 2</Option>
			<Option value="Вариант 3">Вариант 3</Option>
		</Select>
	</div>
))
