// @flow
import React from 'react'
import { Tooltip as TooltipAntd } from 'antd'
// import _ from 'lodash'
import css from './styles.less'

type PropTypes = {
	content: Element,
	width: number,
}

class Tooltip extends React.Component<PropTypes> {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const { content, width } = this.props
		return (
			<TooltipAntd {...this.props} overlayStyle={width ? { width } : {}} overlayClassName={css.tooltip}>
				<span>{content}</span>
			</TooltipAntd>
		)
	}
}

export default Tooltip
