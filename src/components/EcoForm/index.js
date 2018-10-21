// @flow
import React from 'react'
import { Form, message } from '../'
import _ from 'lodash'
import PropTypes from 'prop-types'

export type FormPropTypes = {
	getFieldDecorator: Function,
	getFieldError: Function,
	getFieldProps: Function,
	getFieldValue: Function,
	isSubmitting: Function,
	validateFields: Function,
	resetFields: Function,
	setFields: Function,
}

export type FormComponentPropTypes = {
	children: any,
	form: FormPropTypes,
	onSubmit?: Function,
	children: any,
}

class FormComponent extends React.Component<Object, FormComponentPropTypes, any> {
	props: FormComponentPropTypes

	static childContextTypes = {
		form: PropTypes.object,
	}

	static defaultProps = {
		onSubmit: () => null,
		onSuccess: () => null,
		onFailure: () => null,
	}

	getChildContext() {
		const { form } = this.props
		return { form }
	}

	onSubmit(e) {
		e.preventDefault()

		const { onSubmit = _.noop, form } = this.props

		form.validateFields((errors, fields) => {
			const fieldNames = _.keys(fields)
			const normalizedFields = _.reduce(
				fields,
				(acc, value, key) => {
					const result = acc
					if (!result[key]) result[key] = { value, errors: _.get(errors, `${key}.errors`, []) }
					return result
				},
				{}
			)

			// if (_.size(errors)) return

			onSubmit({
				form,
				fields,
				errors,

				onSuccess: res => {
					form.resetFields(fieldNames)
				},

				onFailure: res => {
					// Merge field values with server errors
					const syncedFields = _.reduce(
						_.get(res, 'data.errors', []),
						(result, error) => {
							const key = _.keys(error).pop()
							const value = _.values(error).pop()

							if (key === '_error') message.error(value)

							if (!result[key]) return result
							result[key].errors.push({ message: value, field: key })
							return result
						},
						normalizedFields
					)

					// Clean up empty errors
					_.each(syncedFields, syncedField => {
						if (!syncedField.errors.length) _.unset(syncedField, 'errors')
					})

					form.setFields(syncedFields)
				},
			})
		})
	}

	render() {
		const { children, form, ...props } = this.props
		const formProps = _.omit(props, ['wrappedComponentRef', 'onSuccess', 'onFailure'])

		return (
			<Form {...formProps} onSubmit={e => this.onSubmit(e)}>
				{children}
			</Form>
		)
	}
}

export default Form.create()(FormComponent)
