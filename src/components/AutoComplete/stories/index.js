import React from 'react'
import { storiesOf } from '@storybook/react'
import AutoComplete from '../'

const dataSource = ['hello', 'Hi', '12345', '3456']

function onSelect(value) {
	console.log('onSelect', value)
}

export default storiesOf('Input / AutoComplete', module).addWithJSX('base usage', () => (
	<AutoComplete
		dataSource={dataSource}
		filter={true} // defaultValue - true
		fieldName="Название поля"
		onSelect={onSelect}
	/>
))
