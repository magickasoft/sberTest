import React from 'react'
import { InputNumber as AntInputNumber } from 'antd'

const InputNumber = props => {
	return <AntInputNumber {...props} maxLength="15" />
}

export default InputNumber
