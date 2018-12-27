import React from 'react';
import { FormattedMessage } from 'react-intl';

export const t = (key) => <FormattedMessage id={key} defaultMessage={key}/>;
