/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react'
import { storiesOf } from '@storybook/react'
import styles from './styles.less'
import Card from '../'
import Row from '../../Row'
import Col from '../../Col'

import {
	simpleCardVisited,
	simpleCard,
	horizontalImage,
	verticalImage,
	biggest,
	test,
} from './mock-data'

export default storiesOf('Card / Card', module)
	.addWithJSX('All type', () => (
		<Row type="flex">
			<Col xs={12} sm={6} md={4} lg={4} xl={4}>
				<Card {...simpleCard} />
			</Col>
			<Col xs={12} sm={6} md={4} lg={4} xl={4}>
				<Card {...horizontalImage} />
			</Col>
			<Col xs={12} sm={6} md={4} lg={4} xl={4}>
				<Card {...verticalImage} />
			</Col>
			<Col xs={12} sm={6} md={4} lg={4} xl={4}>
				<Card {...test} />
			</Col>
		</Row>
	))
	.addWithJSX('Basic card', () => (
		<Row type="flex">
			<Col xs={12} sm={6} md={4} lg={4} xl={4}>
				<Card {...simpleCard} />
			</Col>
		</Row>
	))
	.addWithJSX('Basic card with external link', () => (
		<Row type="flex">
			<Col xs={12} sm={6} md={4} lg={4} xl={4}>
				<Card {...simpleCard} cardUrl="http://traject.dasreda.ru/bakery"  />
			</Col>
		</Row>
	))
	.addWithJSX('Viseted card', () => (
		<Row type="flex">
			<Col xs={12} sm={6} md={4} lg={4} xl={4}>
				<Card {...simpleCardVisited} />
			</Col>
		</Row>
	))
	.addWithJSX('Horizontal image', () => (
		<Row type="flex">
			<Col xs={12} sm={6} md={6} lg={6} xl={6}>
				<Card {...horizontalImage} />
			</Col>
		</Row>
	))
	.addWithJSX('Vertical image', () => (
		<Row type="flex">
			<Col xs={12} sm={6} md={6} lg={6} xl={6}>
				<Card {...verticalImage} />
			</Col>
		</Row>
	))
	.addWithJSX('Biggest Card', () => (
		<Row type="flex">
			<Col xs={12} sm={12} md={6} lg={6} xl={6}>
				<Card {...biggest} />
			</Col>
			<Col xs={12} sm={12} md={6} lg={6} xl={6} className={styles.promoChild}>
				<Card {...simpleCard} />
			</Col>
		</Row>
	))
	.addWithJSX('Test Card', () => (
		<Row type="flex">
			<Col xs={12} sm={6} md={6} lg={6} xl={6}>
				<Card {...test} />
			</Col>
		</Row>
	))
