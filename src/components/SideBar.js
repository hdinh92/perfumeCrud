import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom'
const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true,
        className: "fas fa-chart-pie mr-3"
    },
    {
        name: 'Profile',
        to: '/profile',
        exact: false,
        className: "fas fa-user mr-3"
    },
    {
        name: 'Quản lý sản phẩm',
        to: '/product-list',
        exact: false,
        className: "fas fa-map mr-3"
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact, className }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : ''
                var acc = sessionStorage.getItem('users')
                if (acc) {
                    return (
                        <Link to={to} className={`list-group-item  waves-effect   ${active}`}>
                            <i className={`${className}`} />{label}
                        </Link>
                    )
                } else {
                    return (
                        <Link to={to} className={`list-group-item disabled `}>
                            <i className={`${className}`} />{label}
                        </Link>
                    )
                }

            }}
        />
    )
}


class SideBar extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }
    
    
    logout = (e) => {
        e.preventDefault()
        var r = confirm("Bạn chắc chắn muốn thoát?");/* eslint no-restricted-globals:0 */
        if (r === true) {
            sessionStorage.removeItem('users')
            window.location.reload()
        } 
    }
    render() {
        var loggedInUser = sessionStorage.getItem('users')
        if (loggedInUser === null) {
            return <Redirect to='/login'> </Redirect>
        }
        return (
            <div className="sidebar-fixed position-fixed">
                <a href="# " className="logo-wrapper waves-effect disabled">
                    <img src='https://cdn3.iconfinder.com/data/icons/gray-user-toolbar/512/oficcial-512.png' className="img-fluid" alt="" />
                </a>
                <Link to='/login' onClick={this.logout} className={loggedInUser === null ? 'd-none' : 'text-warning d-block float-right mt-5'}>Thoát</Link>
                <div className="list-group list-group-flush">
                    {this.showMenu(menus)}
                </div>
            </div>
        );
    }


    showMenu = menus => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={index} to={menu.to} className={menu.className} activeOnlyWhenExact={menu.exact} label={menu.name}></MenuLink>
                )
            })
        }
        return result
    }
}

export default SideBar;