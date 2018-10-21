import React from 'react'
import Hammer from 'react-hammerjs'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Icon from '../Icon'
import css from './index.less'

const TITLE_ITEM_OFFSET = 85
const TITLE_ITEM_WIDTH = 120
const TITLE_ITEM_MARGIN = 50
const TITLE_MOVE_SPEED = 20

const isMobile = {
	Android: () => navigator.userAgent.match(/Android/i),
	BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
	iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
	Opera: () => navigator.userAgent.match(/Opera Mini/i),
	Windows: () => navigator.userAgent.match(/IEMobile/i),
	any: () =>
		isMobile.Android() ||
		isMobile.BlackBerry() ||
		isMobile.iOS() ||
		isMobile.Opera() ||
		isMobile.Windows(),
}
const windowWidth = () => window.innerWidth

class TagSlider extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedItem: this.props.startItem,
			dots: this.getDots(this.props.items),
			styles: {
				titles: {
					width: 3000,
					left: -TITLE_ITEM_OFFSET,
					transition: 'none'
				}
			},
			startPoint: null
		}
	}

	componentDidMount() {
		if (!isMobile.any()) {
			window.addEventListener('resize', this.onResize)
			setTimeout(() => {
				this.setLeftOffset(this.props.startItem)
				this.titlesElem.addEventListener('mouseenter', this.beginTracingMouse)
				this.titlesElem.addEventListener('mouseleave', this.endTracingMouse)
			})
		}
	}

	componentWillUpdate(nextProps) {
		if (nextProps.startItem !== this.props.startItem) {
			if (!isMobile.any()) {
				this.setLeftOffset(nextProps.startItem)
			} else {
				this.setState({selectedItem: nextProps.startItem})
			}
		}
	}

	componentWillUnmount() {
		if (!isMobile.any()) {
			window.removeEventListener('resize', this.onResize)
			this.titlesElem.removeEventListener('mouseenter', this.beginTracingMouse)
			this.titlesElem.removeEventListener('mouseleave', this.endTracingMouse)
		}
	}

	onResize = () => {
		const currentItem = this.state.selectedItem
		this.setLeftOffset(currentItem)
	}

	getDots = items => {
		const dist = 100 / (items.length - 1)
		return items.map((el, i) => ({left: `calc(${dist * i}% - 10px)`}))
	}

	setLeftOffset = i => {
		// console.log('Set left offset')
		const dotsDist = this.dotElems.getBoundingClientRect().width / (this.props.items.length - 1)
		const currentState = Object.assign({}, this.state)
		const titlesLeftOffset = dotsDist * i - (TITLE_ITEM_WIDTH + TITLE_ITEM_MARGIN) * i - TITLE_ITEM_OFFSET

		currentState.selectedItem = i
		currentState.styles.titles.left = titlesLeftOffset
		// currentState.startPoint = null
		currentState.selectedItem = i
		currentState.styles.titles.transition = 'left 0.4s cubic-bezier(0.68, 0.55, 0.265, 1.25)'
		this.setState(currentState)
	}

	setSliderLeftOffset = offset => {
		const currentState = Object.assign({}, this.state)
		const widthTitles = (TITLE_ITEM_WIDTH + TITLE_ITEM_MARGIN) * this.props.items.length + windowWidth() * 0.2
		const extremePoints = {
			left: -TITLE_ITEM_OFFSET,
			right: windowWidth() * 0.8 - widthTitles + TITLE_ITEM_OFFSET - TITLE_ITEM_MARGIN / 2
		}

		let titlesLeftOffset = currentState.styles.titles.left + offset

		if (titlesLeftOffset >= extremePoints.left) {
			titlesLeftOffset = extremePoints.left
		}
		if (titlesLeftOffset < extremePoints.right) {
			titlesLeftOffset = extremePoints.right
		}

		currentState.styles.titles.transition = 'none'
		currentState.styles.titles.left = titlesLeftOffset

		this.setState(currentState)
	}

	selectItem = (ev, i) => {
		// console.log(ev.clientX)
		this.setLeftOffset(i)
		this.props.onAction(i)
	}

	selectMobileItem = (ev, i) => {
		this.setState({selectedItem: i})
		this.props.onAction(i)
	}

	dotHover = (i, mode) => {
		const dotElems = document.querySelectorAll('.dot')
		dotElems[i].style.transform = mode === 'on' ? 'scale(2.8)' : 'scale(1)'
	}

	beginTracingMouse = ev => {
		// console.log(`Begin tracing: ${ev.clientX}`)
		this.setState({startPoint: ev.clientX})
		this.titlesElem.addEventListener('mousemove', this.tracingMouse)
	}

	endTracingMouse = () => {
		// console.log('End tracing')
		this.titlesElem.removeEventListener('mousemove', this.tracingMouse)
		this.setLeftOffset(this.state.selectedItem)
	}

	tracingMouse = (ev) => {
		const currentOffset = this.state.startPoint - ev.clientX
		if (Math.abs(currentOffset) < 20) { return }

		const part = {
			left: this.state.startPoint - 0,
			right: windowWidth() - this.state.startPoint
		}
		const calcOffset = (currentOffset > 0) ? currentOffset / part.left * TITLE_MOVE_SPEED : currentOffset / part.right * TITLE_MOVE_SPEED
		// console.log(`StartPoint: ${this.state.startPoint}  Part: ${JSON.stringify(part)}   Offset: ${currentOffset}  CalcOffset: ${calcOffset}`)

		this.setSliderLeftOffset(calcOffset)
	}

	render() {
		const { items, style, className } = this.props
		const rootClass = cn(
			css.root,
			className,
			{[css.rootResponsive]: isMobile.any()}
		)
		const titleStyles = Object.assign({}, this.state.styles.titles)
		const dotsStyles = this.state.dots.slice()

		return (
			<div className={rootClass} style={style}>

				{
					!isMobile.any() &&
					<div className={css.rootTitles} ref={(el) => {this.titlesElem = el}} style={{...titleStyles}}>
						{
							items.map((el, i) => {
								const titleClass = cn(css.rootTitlesItem, {[css.rootTitlesItemActive]: i === this.state.selectedItem})
								return (
									<div
										key={i}
										role="button"
										className={titleClass}
										onClick={ev => this.selectItem(ev, i)}
										onMouseEnter={() => this.dotHover(i, 'on')}
										onMouseLeave={() => this.dotHover(i, 'out')}>
										<div className={css.rootTitlesItemIcon}>
											<Icon
												svg
												type={el.icon}
												size={60}
												{...(i === this.state.selectedItem ? { grad: true } : {})}
											/>
										</div>
										<div className={css.rootTitlesItemText}>{el.name}</div>
									</div>
								)
							})
						}
					</div>
				}

				{
					isMobile.any() &&
					<table className={css.rootTitlesMobile}>
						<tbody>
							<tr>
								{
									items.map((el, i) => {
										const titleClass = cn(css.rootTitlesMobileItem, { [css.rootTitlesMobileItemActive]: i === this.state.selectedItem})
										return (
											<td key={i}>
												<div className={titleClass} onClick={ev => this.selectMobileItem(ev, i)}>
													<div className={css.rootTitlesMobileItemIcon}>
														<Icon
															svg
															type={el.icon}
															size={60}
														/>
													</div>
													<div className={css.rootTitlesMobileItemText}>
														{el.name}
													</div>
												</div>
											</td>
										)
									})
								}
							</tr>
						</tbody>
					</table>
				}

				{
					!isMobile.any() &&
					<div className={css.rootDots} ref={(el) => {this.dotElems = el}}>
						{
							items.map((el, i) => {
								const dotClass = cn(css.rootDotsItem, 'dot', {[css.rootDotsItemActive]: i === this.state.selectedItem})
								return (
									<span
										key={i}
										role="button"
										className={dotClass}
										style={dotsStyles[i]}
										onClick={ev => this.selectItem(ev, i)}
										onMouseEnter={() => this.dotHover(i, 'on')}
										onMouseLeave={() => this.dotHover(i, 'out')}
									/>
								)
							})
						}
					</div>
				}
			</div>
		)
	}
}

TagSlider.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
	startItem: PropTypes.number,
	style: PropTypes.object,
	className: PropTypes.string,
	onAction: PropTypes.func,
}

TagSlider.defaultProps = {
	items: [{}],
	startItem: 0,
	style: {},
	className: '',
	onAction: () => {},
}

export default TagSlider
