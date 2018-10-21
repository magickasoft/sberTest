const serviceCardDone = {
	header: {
		url: 'https://www.shopolog.ru/upload/iblock/bc6/bc663ee4e787e57f10192097f0bf1625.jpg',
	},
	content: {
		title: 'Яндекс-касса для интернет-магазина',
		block: {
			status: 'done',
			text: 'Подключено',
			check: true,
		},
	},
	footer: {
		meta: ['Оценка и подбор персонала'],
	},
	status: 'visited',
}

const serviceCardFree = {
	aside: {
		url: 'https://www.shopolog.ru/upload/iblock/bc6/bc663ee4e787e57f10192097f0bf1625.jpg',
	},
	content: {
		status: 'promo',
		title: 'Яндекс-касса для интернет-магазина',
		description:
			'Подключение приема электронных платежей на счет компании. Прием платежей в адрес поставщиков различных услуг',
		block: {
			status: 'free',
			text: 'Бесплатно',
		},
	},
	footer: {
		meta: ['Деловая среда', 'Связь/телефония'],
	},
}

const horizontalImage1 = {
	type: {
		label: 'trajectorie',
		text: 'Траектория',
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

const horizontalImage2 = {
	type: {
		label: 'trajectorie',
		text: 'Траектория',
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

const biggest = {
	type: {
		label: 'trajectorie',
		text: 'Траектория',
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
			text: 'Подробнее',
		},
	},
	footer: {
		meta: ['Деловая среда', 'Старт бизнеса'],
	},
}

const eventCardFree = {
	content: {
		title: 'Яндекс-касса для интернет-магазина',
		author: 'Иван Иванов',
		description:
			'Подключение приема электронных платежей на счет компании. Прием платежей в адрес поставщиков различных услуг',
		dateStart: 'Завтра, 20:00 - 22:00',
		location: 'Москва, м. Динамо, Ленинградский пр-т, д.27',
		block: {
			status: 'done',
			check: true,
			text: 'Посетил',
		},
	},
	type: {
		label: 'lecture',
		text: 'Лекция',
	},
	promoImage: 'https://placeimg.com/500/300/tech',
	footer: {
		meta: ['Осталось 21 место'],
	},
}

const eventCardPay = {
	aside: {
		url: 'https://placeimg.com/45/46/people',
	},
	content: {
		title: 'Яндекс-касса для интернет-магазина',
		author: 'Деловая Среда',
		description:
			'Подключение приема электронных платежей на счет компании. Прием платежей в адрес поставщиков различных услуг',
		dateStart: 'Через 2 дня, 19:00 - 20:00',
		location: 'Онлайн',
		block: {
			status: 'pay',
			text: '20 000 ₽',
		},
	},
	type: {
		label: 'webinar',
		text: 'Вебинар',
	},
	promoImage: 'https://placeimg.com/500/300/tech',
	footer: {
		meta: ['Осталось 2 места'],
	},
}

const verticalImage = {
	type: {
		label: 'curatorcourse',
		text: 'Курс с куратором',
	},
	header: {
		url:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png',
	},
	content: {
		title: 'Планирование в компании',
		period: '29 ноя - 20 дек',
		block: {
			status: 'free',
			text: 'Бесплатно',
		},
	},
	footer: {
		author: 'Высшая Школа Экономики',
		meta: ['5 уроков', '2ч в неделю'],
	},
}

const courseCardImage = {
	header: {
		url: 'https://1079638729.rsc.cdn77.org/pic/v2/gallery/preview/eda-fon-frukty-lajm-8561.jpg',
	},
	type: {
		label: 'videocourse',
		text: 'Видеокурс',
		position: 'vertical',
	},
	content: {
		title: 'Планирование в компании',
		description:
			'Как вести бизнес с Китаем — закупать товары и услуги, а также привлекать инвестиции, где искать поставщиков и как их оценивать ',
		block: {
			status: 'free',
			text: 'Бесплатно',
		},
	},
	footer: {
		author: 'Высшая Школа Экономики',
		meta: ['7 уроков', '1ч 30 мин.'],
	},
}

const courseCardImageBig = {
	type: {
		label: 'videocourse',
		text: 'Видеокурс',
		position: 'horizontalBiggest',
	},
	header: {
		url: 'https://1079638729.rsc.cdn77.org/pic/v2/gallery/preview/eda-fon-frukty-lajm-8561.jpg',
	},
	content: {
		title: 'Планирование в компании',
		description:
			'Как вести бизнес с Китаем — закупать товары и услуги, а также привлекать инвестиции, где искать поставщиков и как их оценивать ',
		block: {
			status: 'pay',
			text: '20 000 ₽',
		},
		period: 'уже завтра',
	},
	footer: {
		author: 'Высшая Школа Экономики',
		meta: ['7 уроков', '1ч 30 мин.'],
	},
}

const courseCard = {
	type: {
		label: 'videocourse',
		text: 'Видеокурс',
	},
	content: {
		title: 'Планирование в компании',

		block: {
			status: 'free',
			text: 'Бесплатно',
		},
		period: 'через 2 недели',
	},
	footer: {
		author: 'Высшая Школа Экономики',
		meta: ['7 уроков', '1ч 30 мин.'],
	},
}

const simpleCard = {
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
		description:
			'Подключение приема электронных платежей на счет компании. Прием платежей в адрес поставщиков различных услуг',
	},
	footer: {
		meta: ['Деловая среда'],
	},
}

const video = {
	header: {
		url: 'https://oldimg.ria.ru/i/ria_social.png',
	},
	content: {
		title: 'Как построить стартап: работа с гипотезами',
	},
	footer: {
		author: 'Яндкс',
		meta: ['Онлайн', '2 мин.'],
	},
}

const podcast = {
	header: {
		url: 'https://placeimg.com/500/300/people',
	},
	content: {
		title: 'Как построить стартап: работа с гипотезами',
	},
	footer: {
		author: 'Яндкс',
		meta: ['Деловая среда', '1 час 27 минут'],
	},
}

const test = {
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
}

export {
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
}
