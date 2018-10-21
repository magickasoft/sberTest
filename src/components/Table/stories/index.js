import React from 'react'
import {storiesOf} from '@storybook/react'

import css from '../styles/index.less'


export default storiesOf('TrajectoryTable', module).addWithJSX('Table', () => (
	<table className={css.trajectoryTable}>

		<thead>
			<tr>
	        <td></td>
	        <td>Москва</td>
	        <td>Регионы</td>
	    </tr>
		</thead>

		<tbody>
    <tr>
        <td>Аренда офиса </td>
        <td>10 000 — 20 000 ₽</td>
        <td>5 000 — 10 000 ₽</td>
    </tr>
    <tr>
        <td>Аренда Склада </td>
        <td>10 000 — 20 000 ₽</td>
        <td>5 000 — 10 000 ₽</td>
    </tr>
		</tbody>
</table>
))
.addWithJSX('Table total', () => (
	<table className={css.trajectoryTableTotal}>

		<thead>
			<tr>
	        <td></td>
	        <td>Москва</td>
	        <td>Регионы</td>
	    </tr>
		</thead>

		<tbody>
    <tr>
        <td>Аренда офиса </td>
        <td>10 000 — 20 000 ₽</td>
        <td>5 000 — 10 000 ₽</td>
    </tr>
    <tr>
        <td>Аренда Склада </td>
        <td>10 000 — 20 000 ₽</td>
        <td>5 000 — 10 000 ₽</td>
    </tr>
    <tr>
        <td>Итого </td>
        <td>123123</td>
        <td>826423</td>
    </tr>
		</tbody>
</table>
))
