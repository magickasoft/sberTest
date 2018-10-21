import React from 'react';
import PropTypes, { array } from 'prop-types';
import cn from 'classnames';
import { Menu, Dropdown } from 'antd';

import Logotype from '../../common-ui/Logotype';
import Button from '../Button';
import css from './styles.less';

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
};
const windowWidth = () => window.innerWidth;

class NavPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blockStyle: {},
        }
    }

    componentDidMount() {
        this.setBlockStyle();
        window.addEventListener('resize', this.onResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }

    onResize = () => {
        this.setBlockStyle()
    };

    setBlockStyle = () => {
        if (!isMobile.any()) {
            const newBlockStyle = windowWidth() < 1023 ? { width: '100%' } : { width: 'calc(100% - 450px)' };
            this.setState({
                blockStyle: newBlockStyle,
            })
        }
    };

    getProfileMenuItem = (menuItem, index) =>
        <Menu.Item key={index} className={css.profileItem}>{menuItem.title}</Menu.Item>;

    createProfileMenu = (menu) => <Menu className={css.profile} onClick={this.handleProfileMenuClick}>
        {menu.map((menuItem, index) => {
            if (index + 1 === menu.length) {
                return [
                    <Menu.Divider className={css.profileDivider}/>,
                    this.getProfileMenuItem(menuItem, index)
                ]
            }

            return this.getProfileMenuItem(menuItem, index)
        })}
    </Menu>;

    handleProfileMenuClick = ({key}) => {
        const a = this.props.profileMenu[key].action;
        a()
    };

    render() {
        const {
            className,
            currentRoute,
            authorizedUser,
            accountNotice,
            cartNotice,
            onAction,
            profileMenu
        } = this.props;
        const rootClass = cn(css.root, className);

        return (
            <div className={rootClass}>
                <div className={css.nav}>
                    <Logotype currentRoute={currentRoute}  className={css.logo}/>

                    <div className={css.navMenu} style={this.state.blockStyle}>
                        {this.props.children}
                    </div>

                    <div className={css.navAdd}>
                        {!authorizedUser && (
                            <Button
                                type="link"
                                size="small"
                                btnText="Войти"
                                style={{ fontFamily: 'Rubik, sans-serif' }}
                                onClick={e => onAction('login')}
                            />
                        )}
                        <div className={css.navLabel}>{authorizedUser}</div>
                        {authorizedUser && (
                            profileMenu && (
                                <Dropdown overlay={this.createProfileMenu(profileMenu)}>
                                    <button className={css.navAddAccount}>
                                        {authorizedUser.split(' ', 2).map(v => v.charAt(0).toUpperCase())}
                                        {accountNotice && <span className={css.navAddNoticeFlag} />}
                                    </button>
                                </Dropdown>
                            )
                        )}
                        {cartNotice && <span className={cn(css.navAddNoticeFlag, css.navAddNoticeFlagCart)} />}
                        {/*<Button className={css.navAddBtnicon} type="icon" icon="bookmark" iconSize={24} onClick={e => onAction('bookmark')} />*/}
                    </div>
                </div>
            </div>
        )
    }
}

NavPanel.propTypes = {
    className: PropTypes.string,
    currentRoute: PropTypes.string,
    authorizedUser: PropTypes.string,
    accountNotice: PropTypes.bool,
    cartNotice: PropTypes.bool,
    onAction: PropTypes.func,
    profileMenu: PropTypes.array,
};

NavPanel.defaultProps = {
    className: '',
    currentRoute: '',
    authorizedUser: '',
    accountNotice: false,
    cartNotice: false,
    onAction: () => {},
    profileMenu: [],
};

export default NavPanel
