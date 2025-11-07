import * as React from 'react';
import { invariantIntlContext } from '../utils';
import { Context } from './injectIntl';
export default function useIntl() {
    var intl = React.useContext(Context);
    invariantIntlContext(intl);
    return intl;
}
