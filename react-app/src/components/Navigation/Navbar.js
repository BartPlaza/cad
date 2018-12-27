import React, {useState, useEffect, useReducer} from 'react';
import './Navbar.css';
import NavbarBrand from "./NavbarBrand";
import NavbarItem from "./NavbarItem";
import NavbarBurger from "./NavbarBurger";
import {joinClasses} from '../../helpers/functions';
import NavbarDropdown from "./NavbarDropdown";
import NavbarButton from "./NavbarButton";
import NavbarLanguage from "./NavbarLanguage";
import {t} from "../../helpers/I18n";
import {useRedux} from "../../index";

const navbar = () => {

    const [isVisible, setIsVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const [position, setPosition] = useState(window.scrollY);

    const [user, dispatch] = useRedux('user');

    useEffect(() => {
        if ((window.scrollY > position) && (window.scrollY > 200) && (isVisible)) {
            setIsVisible(false);
        } else if ((window.scrollY < position) && (!isVisible)) {
            setIsVisible(true);
        }
    }, [window.scrollY]);


    useEffect(() => {
        const callback = () => {
            setPosition((prevPosition) => {
                const scrollLevel = Math.abs(window.scrollY - prevPosition);
                return (scrollLevel > 30) ? window.scrollY : prevPosition;
            });
        };
        window.addEventListener('scroll', callback);
        return () => window.removeEventListener('scroll', callback);
    }, []);


    const updateOpen = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const logoutAndClose = () => {
        dispatch.logout();
        closeMenu();
    };

    const navbarClasses = joinClasses(['navbar', 'is-fixed-top', isVisible ? null : 'is-rolled']);
    const navbarMenuClasses = joinClasses(['navbar-menu', isOpen ? 'is-active' : null]);

    return (
        <nav className={navbarClasses} role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <NavbarBrand url={'/'}/>
                    <NavbarBurger updateOpen={updateOpen} isOpen={isOpen}/>
                </div>
                <div className={navbarMenuClasses}>
                    <div className="navbar-end">
                        <NavbarItem name={t('navigation.home')} url={'/home'} closeMenu={closeMenu}/>
                        <NavbarItem name='Else' url={'/else'} closeMenu={closeMenu}/>
                        {user.isLoggedIn ? (
                            <NavbarDropdown name={user.name} url={'/profile'}>
                                <NavbarItem name='My account' url={'/profile'} closeMenu={closeMenu}/>
                                <NavbarButton name='Logout' onClick={() => console.log('asd')}
                                              closeMenu={logoutAndClose}/>
                            </NavbarDropdown>
                        ) : (
                            <NavbarItem name='Login' url={'/login'} closeMenu={closeMenu}/>
                        )}
                        {!user.isLoggedIn &&
                        <NavbarItem name='Register' url={'/register'} closeMenu={closeMenu}/>}
                        <NavbarLanguage/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default navbar;