/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { items, cssClass } from './mock-data'
import TagSlider from '../'

addDecorator(withKnobs)

export default storiesOf('Tags / TagSlider', module)
	.addWithJSX('basic usage', () => (
		<TagSlider 
			items={items} 
			startItem={0}
			style={{}}
			className={cssClass} 
			onAction={action('select item')} 
		/>
	))
	.addWithJSX('basic usage (start index = 2))', () => (
		<TagSlider 
			items={items} 
			startItem={2}
			style={{}}
			className={cssClass} 
			onAction={action('select item')} 
		/>
	))
	.addWithJSX('test: change external data', () => {
		const index = 0
		const value = number('Index', index)

		return (
			<section style={{position: 'relative'}}>
				<TagSlider 
					items={items} 
					startItem={value}
					style={{}}
					className={cssClass} 
					onAction={action('select item')} 
				/>
			</section>
		)

	})
