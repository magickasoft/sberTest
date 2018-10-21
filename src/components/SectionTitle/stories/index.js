/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
	withLinkNoIcon,
	withoutLinkAndAddNumber,
	withoutLinkAndAddText,
	withLinkAndIcon,
	withLinkAndIconRight,
	withoutLink,
	withLinkAndAddNumber,
	withLinkAndAddText,
	cssClass,
} from './mock-data'

import SectionTitle from '../'

const RouterDecorator = storyFn => (
	<Router>
		<Route path="*" render={() => storyFn()} />
	</Router>
)

addDecorator(RouterDecorator)

export default storiesOf('SectionTitle', module)
	.addWithJSX('w/out link', () => <SectionTitle className={cssClass} {...withoutLink} />)
	.addWithJSX('w/out link and additional number', () => (
		<SectionTitle className={cssClass} {...withoutLinkAndAddNumber} />
	))
	.addWithJSX('w/out link and additional string', () => (
		<SectionTitle className={cssClass} {...withoutLinkAndAddText} />
	))
	.addWithJSX('with link', () => <SectionTitle className={cssClass} {...withLinkNoIcon} />)
	.addWithJSX('with link and icon', () => (
		<div>
			<SectionTitle className={cssClass} {...withLinkAndIcon} />
			<SectionTitle className={cssClass} {...withLinkAndIconRight} />
		</div>
	))
	.addWithJSX('with link and additional number', () => (
		<SectionTitle className={cssClass} {...withLinkAndAddNumber} />
	))
	.addWithJSX('with link and additional string', () => (
		<SectionTitle className={cssClass} {...withLinkAndAddText} />
	))
