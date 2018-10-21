import React from 'react';
import PropTypes from 'prop-types';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import '../../utils/modernizr-custom';

import '../../styles/master.less';

const StylesProvider = props => {
	const { children } = props;

	return <LocaleProvider locale={enUS}>{children}</LocaleProvider>
};

StylesProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default StylesProvider
