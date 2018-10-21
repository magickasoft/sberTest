import React from 'react'
import PropTypes from 'prop-types'
import css from './styles.less'

import { AutoComplete as AntAutoComplete } from 'antd'
import Input from '../Input'

class AutoComplete extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			visibility: 'hidden',
		}
	}

	handleSearch = value => {
		let visibility = value.length === 0 ? 'hidden' : 'visible'
		this.setState({
			visibility,
		})
	}

	filter = (inputVal, option) =>
		option.props.children.toUpperCase().indexOf(inputVal.toUpperCase()) !== -1

	render() {
		const { filter, fieldName } = this.props

		return (
			<div>
				<div style={{ visibility: this.state.visibility }} className={css.fieldName}>
					{fieldName}
				</div>
				<AntAutoComplete
					{...this.props}
					onSearch={this.handleSearch}
					filterOption={filter ? this.filter : false}
				>
					<Input placeholder={fieldName} />
				</AntAutoComplete>
			</div>
		)
	}
}

AutoComplete.propTypes = {
	dataSource: PropTypes.array,
	filter: PropTypes.bool,
	fieldName: PropTypes.string,
	onSelect: PropTypes.func,
}

AutoComplete.defaultProps = {
	dataSource: [],
	filter: true,
	fieldName: '',
	onSelect: () => {},
}

export default AutoComplete
