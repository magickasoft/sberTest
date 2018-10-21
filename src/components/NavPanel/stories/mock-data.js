/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { action } from '@storybook/addon-actions'

export const data = [
	{ name: 'Курсы', url: '/courses' },
	{ name: 'Услуги', url: '/services' },
	{ name: 'Журнал', url: '/journal' },
	{ name: 'Мероприятия', url: '/events', icon: 'event' },
	{
		name: 'Еще',
		items: [
			{ name: 'Траектории', url: '/trajectories' },
			{ name: 'Сообщества', url: '/community' },
			{ name: 'О площадке', url: '/about_site' },
			{ name: 'Партнерам', url: '/for_partners' },
			{ name: 'Компаниям', url: '/companies' },
		],
	},
]

export const path = '/events'
export const authorizedUser = 'KK'
export const cssClass = 'nav-test'
export const profileMenu = [
	{
		title: 'Профиль',
		action: () => {console.log('test')}
	},
	{
		title: 'Уведомления',
		action: () => {action('click btn')}
	},
	{
		title: 'Настройки',
		action: () => {action('click btn')}
	},
	{
		title: 'Выход',
		action: () => {action('click btn')}
	},
]
