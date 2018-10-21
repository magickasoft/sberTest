import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './styles.less'
import Icon from '../Icon'

class Tags extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
			rootStyle: {},
		}
	}

	componentDidMount() {
		this.setFlag()
		window.addEventListener('resize', this.onResize)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.onResize)
	}

	onResize = () => {
		this.setFlag()
	}

	setFlag() {
		if (this.wrapElem && this.rootElem) {
			if (this.wrapElem.clientHeight > this.rootElem.clientHeight) {
				if (!this.state.show) {
					this.setState({ show: true })
				}
			} else if (this.state.show) {
				this.setState({ show: false })
			}
		}
	}

	showAllTags = () => {
		const currentState = Object.assign({}, this.state)
		currentState.rootStyle = {
			height: 'auto',
			overflow: 'visible',
		}
		currentState.show = false
		this.setState(currentState)
		window.removeEventListener('resize', this.onResize)
	}

	render() {
		const { items, className, onAction } = this.props
		const rootClass = cn(css.tags, className)

		return (
			<div className={rootClass} ref={root => (this.rootElem = root)} style={this.state.rootStyle}>
				<div className={css.tagsWrap} ref={wrap => (this.wrapElem = wrap)}>
					{items.map((e, i) => (
						<div key={i} className={css.tagsItem}>
							<Icon svg type={'tag'} size={18} className={css.tagsItemHash} /> {e}
							<button className={css.tagsItemClose} onClick={ev => onAction(i)}>
								<Icon svg type={'close'} size={20} grad={true} className={css.tagsItemCloseIcon} />
							</button>
						</div>
					))}
				</div>
				{this.state.show && (
					<button className={css.tagsMore} onClick={this.showAllTags}>
						<Icon svg type={'dots'} size={20} />
					</button>
				)}
			</div>
		)
	}
}

export default Tags

Tags.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string),
	className: PropTypes.string,
	onAction: PropTypes.func,
}

Tags.defaultProps = {
	items: [],
	className: '',
	onAction: () => {},
}
