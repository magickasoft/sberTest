const menuItems = [
	{menu: 'rbidos', name: 'service-select', title: 'Выбор услуги', index: 1, disabled: false},
	{
		menu: 'rbidos',
		name: 'personal-information',
		title: 'Персональные данные',
		index: 2,
		disabled: true,
		count: 2,
		onClick: () => {console.log(111)}
	},
	{menu: 'rbidos', name: 'business', title: 'Мой бизнес', index: 3, disabled: true},
	{menu: 'rbidos', name: 'account', title: 'Мой счет', index: 4, disabled: true},
	{menu: 'rbidos', name: 'payment', title: 'Оплата', index: 5, disabled: true},
	{
		menu: 'rbidos',
		name: 'signing-of-documents',
		title: 'Подписание документов',
		index: 6,
		disabled: true,
		count: 5,
	},
	{menu: '#', name: '', title: 'Бизнес зарегистрирован', index: '✓', disabled: true},
	{menu: 'rbidos', name: 'account-opened', title: 'Счет открыт', index: '✓', disabled: true},
	{menu: 'rbidos', name: 'elements', title: 'Элементы', index: 7, disabled: true},
]

const menuCourseItems = [
	{menu: 'rbidos', name: 'service-select', title: 'Выбор услуги', disabled: false},
	{
		menu: 'rbidos',
		name: 'personal-information',
		title: 'Персональные данные',
		disabled: true,
	},
	{menu: 'rbidos', name: 'business', title: 'Мой бизнес', disabled: true},
	{menu: 'rbidos', name: 'account', title: 'Мой счет', disabled: true},
	{menu: 'rbidos', name: 'payment', title: 'Оплата', disabled: true},
	{
		menu: 'rbidos',
		name: 'signing-of-documents',
		title: 'Подписание документов',
		disabled: true
	},
	{menu: '#', name: '', title: 'Бизнес зарегистрирован', disabled: true},
	{menu: 'rbidos', name: 'account-opened', title: 'Счет открыт', disabled: true},
	{menu: 'rbidos', name: 'elements', title: 'Элементы', disabled: true},
]

const menuTrajectoriSubMenu = [
	{
		menu: 'rbidos', 
		name: 'service-select', 
		title: 'Зарегистрировать бизнес', 
		disabled: false,
		items: [
			{
				name: 'personal-information',
				title: 'Персональные данные',			
				disabled: false,
				onClick: () => {console.log(111)}
			},
			{
				name: 'registration',
				title: 'Регистрация',			
				disabled: false,
			},
			{
				name: 'taxes',
				title: 'Налоговый режим',		
				disabled: false,
			},
			{
				name: 'bill',
				title: 'Расчетный счет',	
				disabled: false,
			},
			{
				name: 'insurance',
				title: 'Регистрация в страховых фондах',		
				disabled: false,
			},
			{
				name: 'online',
				title: 'Онлайн-касса и эквайринг',
				disabled: false,
			},
			{
				name: 'registration-important',
				title: 'Самое важное',
				disabled: false,
			}
		]
	},
	{
		menu: 'rbidos',
		name: 'personal-information',
		title: 'Разработать договоры',
		disabled: true,
		items: [
			{
				name: 'docs',
				title: 'Персональные данные',
				disabled: true,
			}
		]
	},
	{menu: 'rbidos', name: 'business', title: 'Приобрести транспорт', disabled: true},
	{menu: 'rbidos', name: 'account', title: 'Купить спецодежду и оборудование', disabled: true},
	{menu: 'rbidos', name: 'payment', title: 'Снять офис, склад', disabled: true},
	{
		menu: 'rbidos',
		name: 'signing-of-documents',
		title: 'Нанять и обучить персонал',
		disabled: true
	},
	{menu: '#', name: '', title: 'Запустить рекламу', disabled: true},
]

const menuHashItems = [
	{
		menu: 'trajectories/1',
		name: '#register-business',
		title: 'Зарегистрировать бизнес',
		index: 1,
	},
	{
		menu: 'trajectories/1',
		name: '#make-contract',
		title: 'Разработать договоры',
		index: 2,
		items: [
			{
				name: '#docs',
				title: 'Персональные данные',
			},
		],
	},
	{
		menu: 'trajectories/1',
		name: '#buy-cars',
		index: 3,
		title: 'Приобрести транспорт',
	},
	{
		menu: 'trajectories/1',
		name: '#buy-equipment',
		index: 4,
		title: 'Купить спецодежду и оборудование',
	},
	{
		menu: 'trajectories/1',
		name: '#rent-office',
		index: 5,
		title: 'Снять офис, склад',
	},
	{
		menu: 'trajectories/1',
		name: '#hire-and-educate',
		index: 6,
		title: 'Нанять и обучить персонал',
	},
	{
		menu: 'trajectories/1',
		name: '#start-advert',
		index: 7,
		title: 'Запустить рекламу',
	},
]



export { menuItems, menuCourseItems, menuTrajectoriSubMenu, menuHashItems }