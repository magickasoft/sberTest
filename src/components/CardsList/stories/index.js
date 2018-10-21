import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from '../../Card'
import EventCard from '../../EventCard'
import CourseCard from '../../CourseCard'
import ServiceCard from '../../ServiceCard'
import PodcastCard from '../../PodcastCard'
import VideoCard from '../../VideoCard'
import CardsList from '../'
import Hr from '../../Hr'
import {
	serviceCardDone,
	serviceCardFree,
	horizontalImage1,
	horizontalImage2,
	biggest,
	eventCardFree,
	eventCardPay,
	verticalImage,
	courseCardImage,
	courseCardImageBig,
	courseCard,
	simpleCard,
	video,
	podcast,
	test,
} from './mock-data'

export default storiesOf('Card / CardsList', module)
	.addWithJSX('Три карточки', () => (
		<div>
			<h4>CardList</h4>
			<p>big - если не передать, то ни одна карточка выделена не будет</p>
			<p>cols - количество колонок (2, 3, 4)</p>
			<p>horizontal - ориентация карточки по горизонтали (top, middle, bottom)</p>
			<p>vertical - ориентация карточки по вертикали (left, right)</p>
			<p>если передать col = 2 и не указать вертикаль, то big карточка займет всю строку</p>
			<p>rand рандомное расположение карточки</p>
			<CardsList big={2} horizontal="top" vertical="left" cols={3}>
				<Card {...horizontalImage2} />
				<Card {...horizontalImage1} />
				<Card {...biggest} />
			</CardsList>
			<Hr margin={30} />
			<CardsList big={1} horizontal="top" vertical="right" cols={3}>
				<Card {...horizontalImage2} />
				<Card {...biggest} />
			</CardsList>
		</div>
	))
	.addWithJSX('траектории', () => (
		<div>
			<CardsList big={2} horizontal="top" vertical="left" cols={3}>
				<Card {...horizontalImage2} />
				<Card {...horizontalImage1} />
				<Card {...biggest} />
				<Card {...horizontalImage2} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
			</CardsList>
			<Hr margin={30} />
			<CardsList big={8} horizontal="top" vertical="right" cols={3}>
				<Card {...horizontalImage2} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage2} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
				<Card {...biggest} />
			</CardsList>
			<Hr />
			<CardsList big={0} horizontal="middle" vertical="left" cols={3}>
				<Card {...biggest} />
				<Card {...horizontalImage2} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage2} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
			</CardsList>
			<Hr />
			<CardsList big={0} horizontal="middle" vertical="right" cols={3}>
				<Card {...biggest} />
				<Card {...horizontalImage2} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage2} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
			</CardsList>
			<Hr />
			<CardsList big={0} horizontal="bottom" vertical="left" cols={3}>
				<Card {...biggest} />
				<Card {...horizontalImage2} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage2} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
			</CardsList>
			<Hr />
			<CardsList big={0} horizontal="bottom" vertical="right" cols={3}>
				<Card {...biggest} />
				<Card {...horizontalImage2} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage2} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
				<Card {...horizontalImage1} />
			</CardsList>
		</div>
	))
	.addWithJSX('Мероприятия', () => (
		<div>
			<CardsList horizontal="top" cols={2}>
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
			</CardsList>
			<Hr margin={30} />
			<CardsList big={0} horizontal="top" cols={2}>
				<EventCard {...eventCardPay} />
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
			</CardsList>
			<Hr />
			<CardsList horizontal="middle" cols={2}>
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
			</CardsList>
			<Hr />
			<CardsList big={1} horizontal="middle" cols={2}>
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardPay} />
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
			</CardsList>
			<Hr />
			<CardsList horizontal="bottom" cols={2}>
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
			</CardsList>
			<Hr />
			<CardsList big={2} horizontal="bottom" cols={2}>
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardPay} />
				<EventCard {...eventCardFree} />
				<EventCard {...eventCardFree} />
			</CardsList>
		</div>
	))
	.addWithJSX('Курсы', () => (
		<div>
			<CardsList big={2} horizontal="top" vertical="left" cols={2}>
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCardImageBig} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCard} />
			</CardsList>
			<Hr margin={30} />
			<CardsList big={2} horizontal="top" vertical="right" cols={2}>
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCard} />
				<CourseCard {...courseCardImageBig} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCardImage} />
			</CardsList>
			<Hr />
			<CardsList big={1} horizontal="middle" vertical="left" cols={2}>
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCardImageBig} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCard} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCardImage} />
			</CardsList>
			<Hr />
			<CardsList big={0} horizontal="middle" vertical="right" cols={2}>
				<CourseCard {...courseCardImageBig} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCard} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCardImage} />
			</CardsList>
			<Hr />
			<CardsList big={0} horizontal="bottom" vertical="left" cols={2}>
				<CourseCard {...courseCardImageBig} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCard} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCardImage} />
			</CardsList>
			<Hr />
			<CardsList big={0} horizontal="bottom" vertical="right" cols={2}>
				<CourseCard {...courseCardImageBig} />
				<CourseCard {...courseCard} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCardImage} />
				<CourseCard {...courseCardImage} />
			</CardsList>
		</div>
	))
	.addWithJSX('Сервисы', () => (
		<div>
			<CardsList big={1} horizontal="top" vertical="left" cols={4}>
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardFree} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
			</CardsList>
			<Hr margin={30} />
			<CardsList big={1} horizontal="top" vertical="right" cols={4}>
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardFree} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
			</CardsList>
			<Hr />
			<CardsList big={1} horizontal="middle" vertical="left" cols={4}>
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardFree} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
			</CardsList>
			<Hr />
			<CardsList big={1} horizontal="middle" vertical="right" cols={4}>
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardFree} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
			</CardsList>
			<Hr />
			<CardsList big={8} horizontal="bottom" vertical="left" cols={4}>
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardFree} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
			</CardsList>
			<Hr />
			<CardsList big={4} horizontal="bottom" vertical="right" cols={4}>
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardFree} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
				<ServiceCard {...serviceCardDone} />
			</CardsList>
		</div>
	))
	.addWithJSX('Пустой', () => (
		<div>
			<CardsList cols={3}/>
		</div>
	))
	// todo under develope
	// .addWithJSX('Знания', () => (
	// 	<div>
	// 		<CardsList big={0} random cols={3}>
	// 			<Card {...biggest} />
	// 			<CourseCard {...verticalImage} />
	// 			<VideoCard {...video} />
	// 			<PodcastCard {...podcast} />
	// 			<Card {...test} />
	// 			<Card {...simpleCard} />
	// 			<Card {...simpleCard} />
	// 			<Card {...simpleCard} />
	// 		</CardsList>
	// 		<Hr margin={30} />
	// 		<CardsList big={5} middle={[2, 1]} horizontal="top" vertical="right" cols={3}>
	// 			<Card {...verticalImage} />
	// 			<Card {...verticalImage} />
	// 			<VideoCard {...video} />
	// 			<VideoCard {...video} />
	// 			<Card {...verticalImage} />
	// 			<CourseCard {...verticalImage} />
	// 			<PodcastCard {...podcast} />
	// 			<PodcastCard {...podcast} />
	// 		</CardsList>
	// 		<Hr margin={30} />
	// 		<CardsList big={5} horizontal="top" vertical="right" cols={3}>
	// 			<Card {...verticalImage} />
	// 			<Card {...verticalImage} />
	// 			<VideoCard {...video} />
	// 			<VideoCard {...video} />
	// 			<Card {...verticalImage} />
	// 			<CourseCard {...verticalImage} />
	// 			<PodcastCard {...podcast} />
	// 			<PodcastCard {...podcast} />
	// 		</CardsList>
	// 	</div>
	// ))
