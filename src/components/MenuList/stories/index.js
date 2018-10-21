/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { data } from './mock-data'
import MenuList from '../'

const RouterDecorator = storyFn => (
	<Router>
		<Route path="*" render={() => storyFn()} />
	</Router>
)

addDecorator(RouterDecorator)

export default storiesOf('Navigation / MenuList', module).addWithJSX('simple', () => (
	<MenuList list={data} />
))
