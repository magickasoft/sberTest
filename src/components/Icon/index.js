import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Icon as AntdIcon } from 'antd';

import { getIcon, iconsList } from './IconsList';
import css from './styles.less';

const Icon = props => {
	const { svg, type, className, size, grad, style, onClick } = props;

	style.fontSize = `${size}px`;
	if (!svg) return <AntdIcon onClick={onClick} type={props.type} style={style} />;

	const iconClass = cn(css.icon, className);

	return <span onClick={onClick}>{getIcon(type, iconClass, size, grad)}</span>
};

Icon.propTypes = {
	svg: PropTypes.bool,
	type: PropTypes.oneOf(Object.keys(iconsList)).isRequired,
	className: PropTypes.string,
	size: PropTypes.number,
	style: PropTypes.object,
	grad: PropTypes.bool,
	onClick: PropTypes.func,
};

Icon.defaultProps = {
	svg: false,
	size: 36,
	className: '',
	style: {},
	grad: false,
	onClick: () => {},
};

export default Icon
