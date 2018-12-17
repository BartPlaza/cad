import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './Navbar.css';
import NavbarBrand from "./NavbarBrand";
import NavbarItem from "./NavbarItem";
import NavbarBurger from "./NavbarBurger";
import {joinClasses} from '../../helpers/functions';
import NavbarUser from "./NavbarUser";

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
        const {user} = this.props;
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
                            <NavbarItem name='Home' url={'/home'}/>
                            <NavbarItem name='Else' url={'/else'}/>
                            {user.isLoggedIn ? (
                                <NavbarUser name={user.name} url={'/profile'}/>
                            ) : (
                                <NavbarItem name='Login' url={'/login'}/>
                            )}
                            {!user.isLoggedIn && <NavbarItem name='Register' url={'/register'}/>}
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

export default connect(mapStateToProps)(Navbar);