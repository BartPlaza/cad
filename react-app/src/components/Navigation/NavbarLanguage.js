import React from 'react';
import {useRedux} from "../../index";
import {joinClasses} from "../../helpers/functions";

const navbarLanguage = () => {

    const [locale, dispatch] = useRedux('locale');
    const defaultClassNames = ['navbar-link', 'is-arrowless', 'navbar-language'];
    const plClassNames = joinClasses([...defaultClassNames, locale === 'pl' ? 'is-active' : null]);
    const enClassNames = joinClasses([...defaultClassNames, locale === 'en' ? 'is-active' : null]);


    return (
        <div className="navbar-item is-size-5">
            <a className={plClassNames} onClick={() => dispatch.setLocale('pl')}>PL</a>
            <span>|</span>
            <a className={enClassNames} onClick={() => dispatch.setLocale('en')}>EN</a>
        </div>
    )
};

export default navbarLanguage;