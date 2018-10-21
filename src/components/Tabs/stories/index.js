import React from 'react'
import { storiesOf } from '@storybook/react'

import { items } from './mock-data'

import Tabs from '../'

export default storiesOf('Tabs', module).addWithJSX('basic', () => (
	<Tabs defaultActiveKey="0">
		{items.map((item, i) => (
			<Tabs.TabPane tab={item.title} key={i}>
				{item.content}
			</Tabs.TabPane>
		))}
	</Tabs>
))
