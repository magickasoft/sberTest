import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, withRouter } from 'react-router-dom'
import { Affix, Menu } from 'antd'
import cn from 'classnames'

import css from './styles.less'
import Icon from '../Icon'

const MOBILE_BREAKPOINT = 667
const windowWidth = () => window.innerWidth
const renderItemCount = (count) => count && <div className={css['nav-count']}>{count}</div>

const renderIndex = index => {
	if (!index) return null

	const indexType = typeof index

	if (indexType === 'string') return (
		<div className={css['nav-index']}>{index}</div>
	)

	if (indexType === 'number') return (
		<div className={css['nav-index']}>{index}.</div>
	)
}

const renderSubMenu = (items) => (
	<Menu className={css.navSub}>
		{items.map( ({name, title, index, onClick}) => (
			<Menu.Item key={`${name}`}>
				<NavLink to={`/${name}`} onClick={onClick} className={css.navSubLink}>
					{renderIndex(index)}
					<div className={css['nav-title']}>{title}</div>
				</NavLink>
			</Menu.Item>
		))}
	</Menu>
)

const renderMenuItems = (selectedKey, menuItems, withCount) => (
	menuItems.map( ({menu, items, name, title, index, onClick, count}) => {
		const path = `/${menu}/${name}/`
		const isActive = () => path === selectedKey

		return (
			<Menu.Item className={css['nav-item']} key={path}>
				<NavLink isActive={isActive} to={path} onClick={onClick}>
					{renderIndex(index)}
					<div className={css['nav-title']}>
						<div className={css['nav-title-inner']}>{title}</div>
					</div>
					{withCount && renderItemCount(count)}
				</NavLink>
				{items && renderSubMenu(items)}
			</Menu.Item>
		)
	})
)

class SideNav extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isMobile: false,
			open: false,
			navStyle: {}
		}
	}

	componentDidMount() {
		this.onResize()
		window.addEventListener('resize', this.onResize)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.onResize)
	}

	onResize = () => {
		const isMobile = windowWidth() <= MOBILE_BREAKPOINT
		const isShow = !isMobile ? true : this.state.open ? true : false
		this.setStyle(isMobile, isShow)
	}

	setStyle = (isMobile, isShow) => {
		// console.log(`mod: ${isMobile}   sh: ${isShow}`)
		const newStyles = isShow ? {display: 'block'} : {display: 'none'}		
		this.setState({
			isMobile: isMobile,
			navStyle: newStyles
		})
	}

	// TODO: selectedKeys from outside should be deprecated in V1
	getSelectedKeys = () => {
		const { location: { hash, pathname }, selectedKeys} = this.props

		if (selectedKeys && selectedKeys.length) return selectedKeys
		return [pathname + hash]
	}

	openNav = () => {
		const currentOpenState = !this.state.open
		this.setState({ open: currentOpenState })
		this.setStyle(this.state.isMobile, currentOpenState)
	}

	renderMenu = () => {
		const { items, title,  withCount, description } = this.props

		const menuClassName = cn(
			css.navbar, 
			{[css.navMenuWithCount]: withCount}
		)
		const selectedKeys = this.getSelectedKeys()

		return ( 
			<div className={css.sidenav}>
				<button type="button" className={css.sidenavBtn} onClick={this.openNav}>
					<Icon role="button" type="ellipsis" size={20} />
				</button>
				<div className={css.sidenavBody.concat(' ', css['scroll-block'])} style={this.state.navStyle}>
					{title && <div className={css.title}>{title}</div>}
					<Menu
						mode="inline"
						selectedKeys={selectedKeys}
						className={menuClassName}>
						{renderMenuItems(selectedKeys[0],items, withCount)}
					</Menu>
					{description && <div className={css.description}>{description}</div>}
				</div>
			</div>
		)
	}

	render() {
		const { affix } = this.props
		// console.log(`isMobile: ${this.state.isMobile}  isAffix: ${affix}`)

		return (
			<div style={{position: 'relative', height: '100%'}}>
				{
					(this.state.isMobile || (!this.state.isMobile && !affix)) && this.renderMenu()
				}
				{
					(!this.state.isMobile && affix) &&
					<Affix offsetTop={30}>
						{this.renderMenu()}
					</Affix>
				}
			</div>
		)
	}
}

SideNav.propTypes = {
	selectedKeys: PropTypes.array,
	items: PropTypes.arrayOf(PropTypes.object),
	description: PropTypes.object,
	title: PropTypes.string,
	withCount: PropTypes.bool,
	affix: PropTypes.bool,
	location: PropTypes.object.isRequired,
}

SideNav.defaultProps = {
	items: [],
	description: null,
	title: '',
	withCount: true,
	selectedKeys: [],
	affix: false
}

export default withRouter(SideNav)
