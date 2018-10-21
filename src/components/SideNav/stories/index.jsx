/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react'
import {storiesOf, addDecorator} from '@storybook/react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

import { menuItems, menuCourseItems, menuTrajectoriSubMenu, menuHashItems } from './mock-data'
import SideNav from '../'
import css from './styles.less'



const RouterDecorator = storyFn => (
	<Router>
		<Route path="*" render={() => storyFn()}/>
	</Router>
)

addDecorator(RouterDecorator)

export default storiesOf('Navigation / SideNav', module)
	.addWithJSX('regular navigation', () => (
		<div className={css.sidenavWrapper}>
			<div className={css.sidenav}>
				<SideNav
					items={menuItems}
					description={
						<p>
						Заявка со всеми введенными данными сохранена в <NavLink to="/#">личном кабинете</NavLink>
						</p>
					}
					title="Финансы для нефинансистов"
				/>
			</div>
			<div className={css.demoContentStyle}>
				<h1>Контент</h1>
			</div>
		</div>
	))
	.addWithJSX('hash navigation', () => (
		<div className={css.sidenavWrapper}>
			<div className={css.sidenav}>
				<SideNav
					items={menuHashItems}
					description={
						<p>
						Заявка со всеми введенными данными сохранена в <NavLink to="/#">личном кабинете</NavLink>
						</p>
					}
					title="Финансы для нефинансистов"
				/>
			</div>
			<div className={css.demoContentStyle}>
				<h1>Контент</h1>
			</div>
		</div>
	))
	.addWithJSX('preselected key', () => (
		<div className={css.sidenavWrapper}>
			<div className={css.sidenav}>
				<SideNav
					selectedKeys={['/rbidos/payment/']}
					items={menuItems}
					description={
						<p>
							Заявка со всеми введенными данными сохранена в <NavLink to="/#">личном кабинете</NavLink>
						</p>
					}
					title="Финансы для нефинансистов"
				/>
			</div>
			<div className={css.demoContentStyle}>
				<h1>Контент</h1>
			</div>
		</div>
	))
	.addWithJSX('usage with count', () => (
		<div className={css.sidenavWrapper}>
			<div className={css.sidenav}>
				<SideNav
					items={menuItems}
					description={
						<p>
							Заявка со всеми введенными данными сохранена в <NavLink to="/#">личном кабинете</NavLink>
						</p>
					}
					title="Финансы для нефинансистов"
					withCount
				/>
			</div>
			<div className={css.demoContentStyle}>
				<h1>Контент</h1>
			</div>
		</div>
	))
	.addWithJSX('affix usage', () => (
		<div className={css.sidenavWrapper}>
			<div className={css.sidenav}>
				<SideNav
					items={menuItems}
					description={
						<p>
							Заявка со всеми введенными данными сохранена в <NavLink to="/#">личном кабинете</NavLink>
						</p>
					}
					title="Финансы для нефинансистов"
					withCount
					affix
				/>
			</div>
			<div className={css.demoContentStyle}>
				<h1>Контент</h1>
			</div>
		</div>
	))
	.addWithJSX('Course', () => (
		<div className={css.uncounter}>
			<div className={css.sidenav}>
				<SideNav
					selectedKeys={['/rbidos/service-select/']}
					items={menuCourseItems}
					withCount
					affix
				/>
			</div>
		</div>
	))
	.addWithJSX('Sub menu', () => (
		<div className={css.uncounter}>
			<div className={css.sidenavTrajectori}>
				<SideNav
					selectedKeys={['/rbidos/service-select/']}
					items={menuTrajectoriSubMenu}
					withCount
					affix
				/>
			</div>
		</div>
	))
