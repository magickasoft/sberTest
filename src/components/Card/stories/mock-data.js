import { action } from '@storybook/addon-actions'

export const simpleCardVisited = {
	type: {
		label: 'course',
		text: 'Курс самостоятельный',
	},
	content: {
		title: 'Truncate Как построить стартап: работа с гипотезами, работа с гипотезами',
		description: 'Всё начинается с гипотез, которые выстраиваются ',
	},
	footer: {
		author: 'Высшая школа экономики Высшая школа экономики Высшая школа экономики',
		time: '2 мин. ',
		meta: ['10 уроков', '2ч в неделю'],
		rate: '10',
	},
	status: 'visited',
	isSubscribe: true,
	onSubscribe: action('subscribe'),
	cardUrl: '/',
}
export const simpleCard = {
	type: {
		label: 'course',
		text: 'Курс самостоятельный',
	},
	content: {
		title: 'Truncate Как построить стартап: работа с гипотезами, работа с гипотезами',
		description: 'Всё начинается с гипотез, которые выстраиваются ',
	},
	footer: {
		author: 'Высшая школа экономики Высшая школа экономики Высшая школа экономики',
		time: '2 мин. ',
		meta: ['10 уроков', '2ч в неделю'],
		rate: '10',
	},
	isSubscribe: true,
	onSubscribe: action('subscribe'),
	cardUrl: '/',
}

export const horizontalImage = {
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
	onSubscribe: action('subscribe'),
	cardUrl: '/',
}

export const verticalImage = {
	type: {
		label: 'trajectorie',
		text: 'Траектория',
		position: 'vertical',
	},
	header: {
		url: 'https://i2.wp.com/www.alpinabook.ru/upload/iblock/66e/66ea084f563b2301ce31b6f9b81a4607.jpg',
	},
	content: {
		title: 'Как построить стартап: работа с гипотезами',
	},
	footer: {
		meta: ['2ч в неделю'],
	},
	onSubscribe: action('subscribe'),
	cardUrl: '/',
}

export const biggest = {
	type: {
		label: 'service',
		text: 'Услуга',
		position: 'horizontalBiggest',
	},
	header: {
		url: 'http://www.radionetplus.ru/uploads/posts/2013-05/1369460621_panda-26.jpg',
	},
	content: {
		title: 'Как построить стартап: работа с гипотезами',
		description:
			'Полностью онлайн, без обращения в ФНС и стояния в очередях. Пока только для клиентов Сбербанка',
		block: {
			status: 'pay',
			text: 'от 1000 ₽ в мес.',
		},
	},
	footer: {
		meta: ['Деловая среда', 'Старт бизнеса'],
	},
	onSubscribe: action('subscribe'),
	cardUrl: '/',
}

export const test = {
	type: {
		label: 'test',
		text: 'Тест',
	},
	header: {
		url:
			'https://static9.depositphotos.com/1177973/1160/i/950/depositphotos_11609264-stock-photo-many-question-marks-on-cork.jpg',
	},
	content: {
		title: 'Какие есть способы продвижения продукта?',
	},
	footer: {
		meta: ['9 вопросов'],
	},
	onSubscribe: action('subscribe'),
	cardUrl: '/',
}
