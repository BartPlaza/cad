import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './Navbar.css';
import NavbarBrand from "./NavbarBrand";
import NavbarItem from "./NavbarItem";
import NavbarBurger from "./NavbarBurger";
import {joinClasses} from '../../helpers/functions';
import NavbarDropdown from "./NavbarDropdown";
import {logout} from "../../store/actions/user";
import NavbarButton from "./NavbarButton";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
            scrollY: 0,
            isOpen: false
        }
    }

    componentWillMount() {
        window.addEventListener('scroll', this.updateVisibility)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateVisibility)
    }

    updateOpen = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }));
    };

    closeMenu = () => {
        this.setState({
            isOpen: false
        });
    };

    logoutAndClose = () => {
        this.props.logout();
        this.closeMenu();
    };

    updateVisibility = () => {
        const scrollLevel = Math.abs(window.scrollY - this.state.scrollY);
        if (scrollLevel > 30) {
            if ((window.scrollY > this.state.scrollY) && (window.scrollY > 200) && (this.state.isVisible)) {
                this.setState({
                    isVisible: false,
                })
            } else if ((window.scrollY < this.state.scrollY) && (!this.state.isVisible)) {
                this.setState({
                    isVisible: true,
                })
            }
            this.setState({
                scrollY: window.scrollY
            })
        }
    };

    render() {

        const {isOpen, isVisible} = this.state;
        const {user, logout} = this.props;
        const navbarClasses = joinClasses(['navbar', 'is-fixed-top', isVisible ? null : 'is-rolled']);
        const navbarMenuClasses = joinClasses(['navbar-menu', isOpen ? 'is-active' : null]);

        return (
            <nav className={navbarClasses} role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <NavbarBrand url={'/'}/>
                        <NavbarBurger updateOpen={this.updateOpen} isOpen={isOpen}/>
                    </div>
                    <div className={navbarMenuClasses}>
                        <div className="navbar-end">
                            <NavbarItem name='Home' url={'/home'} closeMenu={this.closeMenu}/>
                            <NavbarItem name='Else' url={'/else'} closeMenu={this.closeMenu}/>
                            {user.isLoggedIn ? (
                                <NavbarDropdown name={user.name} url={'/profile'}>
                                    <NavbarItem name='My account' url={'/profile'} closeMenu={this.closeMenu}/>
                                    <NavbarButton name='Logout' onClick={()=>console.log('asd')} closeMenu={this.logoutAndClose}/>
                                </NavbarDropdown>
                            ) : (
                                <NavbarItem name='Login' url={'/login'} closeMenu={this.closeMenu}/>
                            )}
                            {!user.isLoggedIn && <NavbarItem name='Register' url={'/register'} closeMenu={this.closeMenu}/>}
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    user: PropTypes.object
};

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);