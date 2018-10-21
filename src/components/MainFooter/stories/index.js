/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainFooter from '../'
import { data, maxRow } from './mock-data'

const RouterDecorator = storyFn => (
	<Router>
		<Route path="*" render={() => storyFn()} />
	</Router>
)

addDecorator(RouterDecorator)

export default storiesOf('MainFooter', module)
	.addWithJSX('simple', () => <MainFooter data={data} maxRow={maxRow} />)
	.addWithJSX('С логотипом', () => <MainFooter data={data} maxRow={maxRow} logotype={{isHide: false, currentRoute: '/'}}/>)
