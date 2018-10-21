import React from 'react'
import PropTypes from 'prop-types'
import { Input as AntInput } from 'antd'
import Inputmask from 'inputmask'

// use in mask: 9 - numeric, a - alphabetical, * - alphanumeric
//							spaces & other symbols

const maskTypes = {
	phone: '+79999999999',
	date: '99/99/9999',
	subdivisionCode: '999-999',
}

const getMaskType = props => {
	return maskTypes[props]
}

class Input extends AntInput {
	componentDidMount() {
		Inputmask(getMaskType(this.props.mask)).mask(this.input.input)
	}
	render() {
		return (
			<AntInput
				{...this.props}
				ref={input => {
					this.input = input
				}}
			/>
		)
	}
}

Input.propTypes = {
	mask: PropTypes.string,
}

Input.defaultProps = {
	mask: '',
}

export default Input
