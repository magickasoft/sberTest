/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Rate from '../'
import Icon from '../../Icon'

export default storiesOf('Rate', module)
	.addWithJSX('basic usage', () => (
		<div style={{position: 'relative'}}>
			Не проголосовал
			<Rate defaultValue={2.5} onChange={action('rate')} />
			<br/>
			Проголосовал
			<Rate defaultValue={4} isRated onChange={action('rate')} />
			<br/>
			Заблокировано
			<Rate defaultValue={4} isRated disabled onChange={action('rate')} />
		</div>
	))
	.addWithJSX('disabled', () => (
		<Rate
			defaultValue={3}
			disabled
			onChange={action('rate')}
		/>
	))
	.addWithJSX('halfstars usage', () => (
		<Rate
			character={<Icon svg type="rateStar" size={25} className="svg"/>}
			allowHalf
			defaultValue={3.25}
			onChange={action('rate-halfstar')}
		/>
	))
