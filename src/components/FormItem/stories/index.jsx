/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Input, Form, Icon, Button } from 'antd'

const FormItem = Form.Item

class FormItemStory extends React.Component {
	handleSubmit = e => {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values)
			}
		})
	}
	render() {
		const { getFieldDecorator } = this.props.form

		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<FormItem label="UserName">
					{getFieldDecorator('userName', {
						rules: [{ required: true, message: 'Please input your username!' }],
					})(<Input placeholder="Username" />)}
				</FormItem>

				<FormItem label="Password">
					{getFieldDecorator('password', {
						rules: [{ required: true, message: 'Please input your password!' }],
					})(<Input placeholder="Username" />)}
				</FormItem>

				<Button type="primary" htmlType="submit" className="login-form-button">
					Log in
				</Button>
			</Form>
		)
	}
}

const WrappedFormItemStory = Form.create()(FormItemStory)

export default storiesOf('FormItem', module).addWithJSX('basic usage', () => (
	<div>
		<WrappedFormItemStory />
	</div>
))
