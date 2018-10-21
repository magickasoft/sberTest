// @flow

import React from 'react'
import { Form } from '../'
import PropTypes from 'prop-types'

import { FormPropTypes } from '../EcoForm'

export default function FormItem(
	props: { children: any, options?: Object },
	context: { form: FormPropTypes }
) {
	const { children, options, ...rest } = props
	const { form } = context
	const { getFieldDecorator } = form

	const childrenWithProps = React.Children.map(children, child =>
		getFieldDecorator(child.props.name, options)(child)
	)

	return <Form.Item {...rest}>{childrenWithProps}</Form.Item>
}

FormItem.defaultProps = {
	options: {},
}

FormItem.contextTypes = {
	form: PropTypes.object,
}
