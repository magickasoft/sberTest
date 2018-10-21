/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Tooltip from '../'
import AddSubs from '../../AddSubs'
import css from './styles.less'

const RouterDecorator = storyFn => (
	<Router>
		<Route path="*" render={() => storyFn()} />
	</Router>
)

addDecorator(RouterDecorator)

export default storiesOf('Tooltip', module).addWithJSX('The simplest usage.', () => (
	<div className={css.indents}>
		<div>
			<Tooltip
				width={386}
				title={
					<p>
						Теперь новые материалы по теме «Регистрация» будут появляться в вашей лентне на главной.{' '}
						<NavLink to="/#">Зарегистрируйтесь</NavLink>, чтобы не потерять свои подписки
					</p>
				}
				content={<AddSubs activated hideCloseBtn activatedText="Читаю в моей ленте" btnText="Читаю в моей ленте" />}
				// content={<AddSubs btnText="Читаю в моей ленте" />}
			/>
		</div>
	</div>
))
// .addWithJSX('A circular progress bar', () => (
// 	<div className={css.indents}>
// 		{defaultText}
// 		<div>
// 			<Progress type="circle" percent={75} />
// 			<Progress type="circle" percent={70} status="exception" />
// 			<Progress type="circle" percent={100} />
// 		</div>
// 	</div>
// ))
