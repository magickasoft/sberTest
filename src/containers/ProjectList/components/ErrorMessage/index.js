import React from 'react';
import PropTypes from 'prop-types';

import css from './styles.less'

const ErrorMessage = ({ error }) => (
  <div className={css.errorMessage}>
    <small>{error.toString()}</small>
  </div>
);


ErrorMessage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired

};

export default ErrorMessage;