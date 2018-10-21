import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.less'
import MetaText from '../../MetaText'
import Rate from '../Rate'
import Button from '../../Button'

class Footer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			iconHover: false,
		}
	}

	onBookmarkHover = () => {
		this.setState({ iconHover: true })
	}

	onBookmarkOver = () => {
		this.setState({ iconHover: false })
	}

	render() {
		const { meta, isSubscribe, rate, onSubscribe, author } = this.props
		let icon = isSubscribe ? 'bookmarkFill' : 'bookmark'
		// const className = !this.state.iconHover ? styles.favourite : styles.favouriteHover

		const onClick = e => {
			onSubscribe()
			e.preventDefault ? e.preventDefault() : (e.returnValue = false)
		}

		icon = this.state.iconHover ? 'bookmarkFill' : icon

		return (
			<div className={styles.footer}>
				{author && <div className={styles.footerAuthor}>{author}</div>}
				{meta && (
					<div className={styles.footerAuthorBlock}>
						{rate && <MetaText text={meta} delimiter=" " component={<Rate rate={rate} />} />}
						{!rate && <MetaText text={meta} delimiter=" " />}
					</div>
				)}
			</div>
		)
	}
}

// <Button
// 	type="icon"
// 	size="large"
// 	btnText="Button"
// 	icon={icon}
// 	iconSize={24}
// 	className={className}
// 	onClick={onClick}
// 	onMouseLeave={this.onBookmarkOver}
// 	onFocus={this.onBookmarkHover}
// 	onMouseEnter={this.onBookmarkHover}
// />

Footer.propTypes = {
	meta: PropTypes.arrayOf(PropTypes.string),
	rate: PropTypes.string,
	isSubscribe: PropTypes.bool,
	onSubscribe: PropTypes.func,
	author: PropTypes.string,
}

Footer.defaultProps = {
	meta: [],
	isSubscribe: false,
	rate: '',
	onSubscribe: () => {},
	author: '',
}

export default Footer
