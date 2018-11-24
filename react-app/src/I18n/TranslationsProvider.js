import React from 'react';
import {IntlProvider, addLocaleData} from 'react-intl';
import translations from './translations';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import en from 'react-intl/locale-data/en';
import pl from 'react-intl/locale-data/pl';

addLocaleData([...en, ...pl]);

const translationsProvider = (props) => {
    const locale = translations.hasOwnProperty(props.locale) ? props.locale : 'pl';
    return (
        <IntlProvider locale={locale} messages={translations[locale]}>
            {props.children}
        </IntlProvider>
    )
};

const mapStateToProps = (state) => ({
    locale: state.locale
});

translationsProvider.propTypes = {
  locale: PropTypes.oneOf(Object.keys(translations))
};

export default connect(mapStateToProps)(translationsProvider);

