import React from 'react'
import { storiesOf } from '@storybook/react'
import TextList from '../'
import ListItem from '../../ListItem'
import ListHeader from '../../ListHeader'

export default storiesOf('TextList', module).addWithJSX('TextList', () => (
	<div>
		<TextList type="dot">
			<ListHeader>Комплексный переезд:</ListHeader>

			<ListItem>Упаковка имущества</ListItem>
			<ListItem>Разборка и упаковка мебели</ListItem>

			<TextList type="number">
				<ListItem>Упаковка имущества</ListItem>
				<ListItem>Упаковка имущества</ListItem>

				<TextList type="alphabet">
					<ListItem>Упаковка имущества</ListItem>
					<ListItem>Упаковка имущества</ListItem>
				</TextList>
			</TextList>
		</TextList>
	</div>
))

