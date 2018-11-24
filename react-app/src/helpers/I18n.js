import React from 'react';
import { FormattedMessage } from 'react-intl';

export const t = (key) => {
    return (
        <FormattedMessage id={key} defaultMessage={key}/>
    )
};