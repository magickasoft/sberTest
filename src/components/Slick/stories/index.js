/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from 'antd'
import styles from './index.less'
import Card from '../../Card'
import SectionTitle from '../../SectionTitle'
import Slick from '../'

const RouterDecorator = storyFn => (
	<Router>
		<Route path="*" render={() => storyFn()} />
	</Router>
)

addDecorator(RouterDecorator)

const { Content } = Layout

const simpleCard = {
	type: {
		label: 'course',
		text: 'Курс самостоятельный',
	},
	content: {
		title: 'Как построить стартап: работа с гипотезами',
		description: 'Всё начинается с гипотез, которые выстраиваются ',
	},
	footer: {
		author: 'Высшая школа экономики Высшая школа экономики Высшая школа экономики',
		time: '2 мин. ',
		meta: ['10 уроков', '2ч в неделю'],
	},
}

const horizontalImage = {
	type: {
		label: 'solution',
		text: 'Совет',
		position: 'horizontal',
	},
	header: {
		url: 'http://www.radionetplus.ru/uploads/posts/2013-05/1369460621_panda-26.jpg',
	},
	content: {
		title: 'Как построить стартап: работа с гипотезами',
	},
	footer: {
		meta: ['Деловая среда'],
	},
}

const withoutLink = {
	icon: 'management',
	text: 'Услуги',
	link: '/services',
}

export default storiesOf('Slick', module)
	.addWithJSX('simple', () => (
		<div>
			<SectionTitle {...withoutLink} />
			<Slick>
				<Card {...simpleCard} />
				<Card {...simpleCard} />
				<Card {...simpleCard} />
				<Card {...simpleCard} />
				<Card {...simpleCard} />
			</Slick>
		</div>
	))
	.addWithJSX('horizontalImage with options ( options={{infinite: false, slidesToShow: 3, slidesToScroll: 1}} )', () => (
		<Slick
			options={{
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 1,
			}}
		>
			<Card {...horizontalImage} />
			<Card {...horizontalImage} />
			<Card {...horizontalImage} />
			<Card {...horizontalImage} />
			<Card {...horizontalImage} />
		</Slick>
	))
	.addWithJSX('Main Page', () => (
		<Content className={styles.content}>
			<Slick
				options={{
					infinite: false,
					slidesToShow: 3,
					slidesToScroll: 1,
					initialSlide: 0,
				}}
			>
				<Card {...horizontalImage} />
				<Card {...horizontalImage} />
				<Card {...horizontalImage} />
				<Card {...horizontalImage} />
				<Card {...horizontalImage} />
			</Slick>
		</Content>
	))
