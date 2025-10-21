import * as React from 'react';
import { IntlShape } from '../types';
declare global {
    interface Window {
        /**
         * Set this to `true` prior to mounting to bypass using a globally-exposed context.
         */
        __REACT_INTL_BYPASS_GLOBAL_CONTEXT__: boolean | undefined;
        __REACT_INTL_CONTEXT__: React.Context<IntlShape> | undefined;
    }
}
export declare const Provider: React.Provider<IntlShape>;
export declare const Context: React.Context<IntlShape>;
export interface Opts<IntlPropName extends string = 'intl', ForwardRef extends boolean = false> {
    intlPropName?: IntlPropName;
    forwardRef?: ForwardRef;
    enforceContext?: boolean;
}
export type WrappedComponentProps<IntlPropName extends string = 'intl'> = {
    [k in IntlPropName]: IntlShape;
};
/**
 * Utility type to help deal with the fact that `Omit` doesn't play well with unions:
 * - https://github.com/microsoft/TypeScript/issues/31501
 * - https://github.com/microsoft/TypeScript/issues/28339
 *
 * @example
 *      DistributedOmit<X | Y, K>  -->  Omit<X, K> | Omit<Y, K>
 */
export type DistributedOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;
export type WithIntlProps<P> = DistributedOmit<P, keyof WrappedComponentProps> & {
    forwardedRef?: React.Ref<any>;
};
export default function injectIntl<IntlPropName extends string = 'intl', P extends WrappedComponentProps<IntlPropName> = WrappedComponentProps<any>>(WrappedComponent: React.ComponentType<P>, options?: Opts<IntlPropName, false>): React.FC<WithIntlProps<P>> & {
    WrappedComponent: React.ComponentType<P>;
};
export default function injectIntl<IntlPropName extends string = 'intl', P extends WrappedComponentProps<IntlPropName> = WrappedComponentProps<any>, T extends React.ComponentType<P> = any>(WrappedComponent: React.ComponentType<P>, options?: Opts<IntlPropName, true>): React.ForwardRefExoticComponent<React.PropsWithoutRef<WithIntlProps<React.PropsWithChildren<P>>> & React.RefAttributes<T>> & {
    WrappedComponent: React.ComponentType<P>;
};
