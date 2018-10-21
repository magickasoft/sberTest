/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { data, authorizedUser, path, cssClass, profileMenu } from './mock-data'

import MainMenu from '../../MainMenu'
import NavPanel from '../'

const RouterDecorator = storyFn => (
	<Router>
		<Route path="*" render={() => storyFn()} />
	</Router>
)

addDecorator(RouterDecorator)

export default storiesOf('Navigation / NavPanel', module)
	.addWithJSX('not autorized (without menu)', () => (
		<NavPanel currentRoute={path} className={cssClass} onAction={action('click btn')} />
	))
	.addWithJSX('not autorized (including MainMenu)', () => (
		<NavPanel currentRoute={path} className={cssClass} onAction={action('click btn')}>
			<MainMenu menu={data} currentRoute={path} />
		</NavPanel>
	))
	.addWithJSX('autorized (including MainMenu)', () => (
		<NavPanel
			currentRoute={path}
			className={cssClass}
			onAction={action('click btn')}
			authorizedUser={authorizedUser}
			profileMenu={profileMenu}
		>
			<MainMenu menu={data} currentRoute={path} />
		</NavPanel>
	))
	.addWithJSX('autorized with notice (including MainMenu)', () => (
		<NavPanel
			currentRoute={path}
			className={cssClass}
			onAction={action('click btn')}
			authorizedUser={authorizedUser}
			accountNotice
			cartNotice
			profileMenu={profileMenu}
		>
			<MainMenu menu={data} currentRoute={path} />
		</NavPanel>
	))
