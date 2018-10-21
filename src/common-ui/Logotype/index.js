import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import Icon from '../../components/Icon'
import css from './styles.less'

const Logotype = ( {currentRoute, className} ) => currentRoute !== '/' ? (
	<NavLink className={cn(className, css.logo)} to="/">
		<Icon svg type="logo" size={72} />
	</NavLink>
) : (
	<div className={cn(className, css.logo)}>
		<Icon svg type="logo" size={72} />
	</div>
);

Logotype.propTypes = {
	currentRoute: PropTypes.string,
	className: PropTypes.string,
};

Logotype.defaultProps = {
	currentRoute: '',
	className: ''
};

export default Logotype