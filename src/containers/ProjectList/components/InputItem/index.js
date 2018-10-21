import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components';
import { debounce } from 'lodash';

class InputItem extends PureComponent {
  static propTypes = {
    onEndChange: PropTypes.func.isRequired
  };

  state = {
    value: ''
  };

  handleChangeValue = evt => {
    const { value } = evt.target;
    this.setState({ value });
    this.onEndChange(value)
  };

  onEndChange = debounce((value) => {
    this.props.onEndChange(value);
  }, 750);

  render() {
    const { value } = this.state;
    return (
      <Input
        placeholder="Search"
        value={value}
        onChange={this.handleChangeValue}
      />
    );
  }
}

export default InputItem;