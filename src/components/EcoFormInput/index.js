// @flow
import React from 'react'
import { Form, Input } from '../'
import PropTypes from 'prop-types'

import { FormPropTypes } from '../EcoForm'

export type FormInputPropTypes = {
	name: string,
	label: string,
	options?: Object,
}

export type FormInputContextTypes = {
	form: FormPropTypes,
}

export default function FormInput(props: FormInputPropTypes, context: { form: FormPropTypes }) {
	const { name, label, options, ...rest } = props
	const { form } = context
	const { getFieldDecorator } = form

	return <Form.Item label={label}>{getFieldDecorator(name, options)(<Input {...rest} />)}</Form.Item>
}

FormInput.defaultProps = {
	options: {},
	label: '',
}

FormInput.contextTypes = {
	form: PropTypes.object,
}
