/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Row from '../../Row'
import Col from '../../Col'
import SectionTag from '../'

export const content = 'Далее'
export const color = 'yellow'

export default storiesOf('Tag / Section tag', module)
	.addWithJSX('Small default tag', () => (
		<Row>
			<Col span={8}>
				<SectionTag content={content} />
			</Col>
		</Row>
	))
	.addWithJSX('Small yellow tag', () => (
		<Row>
			<Col span={8}>
				<SectionTag content="Привет" color={color} />
			</Col>
		</Row>
	))
	.addWithJSX('Small green tag', () => (
		<Row>
			<Col span={8}>
				<SectionTag content="Это просто текст" color="green" />
			</Col>
		</Row>
	))
	.addWithJSX('Small blue tag', () => (
		<Row>
			<Col span={8}>
				<SectionTag content="Над заголовком" color="blue" />
			</Col>
		</Row>
	))
	.addWithJSX('Small red tag', () => (
		<Row>
			<Col span={8}>
				<SectionTag content="Видео" color="red" />
			</Col>
		</Row>
	))
	.addWithJSX('Medium grey tag', () => (
		<Row>
			<Col span={8}>
				<SectionTag content="Лекция" size="medium" />
			</Col>
		</Row>
	))
