import { IntlCache } from '@formatjs/intl';
import * as React from 'react';
import type { IntlConfig, IntlShape } from '../types';
import { DefaultIntlConfig } from '../utils';
interface State {
    /**
     * Explicit intl cache to prevent memory leaks
     */
    cache: IntlCache;
    /**
     * Intl object we created
     */
    intl?: IntlShape;
    /**
     * list of memoized config we care about.
     * This is important since creating intl is
     * very expensive
     */
    prevConfig: IntlConfig;
}
export default class IntlProvider extends React.PureComponent<React.PropsWithChildren<IntlConfig>, State> {
    static displayName: string;
    static defaultProps: DefaultIntlConfig;
    private cache;
    state: State;
    static getDerivedStateFromProps(props: Readonly<IntlConfig>, { prevConfig, cache }: State): Partial<State> | null;
    render(): React.JSX.Element;
}
export {};
