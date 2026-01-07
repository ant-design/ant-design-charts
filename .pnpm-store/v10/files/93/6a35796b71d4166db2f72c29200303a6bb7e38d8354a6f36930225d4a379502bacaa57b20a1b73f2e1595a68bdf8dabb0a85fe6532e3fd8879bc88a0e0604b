import 'react';
import { Interpolation } from '@emotion/serialize';
import { Theme } from "./theming.js";
type IsPreReact19 = 2 extends Parameters<React.FunctionComponent<any>>['length'] ? true : false;
type WithConditionalCSSProp<P> = 'className' extends keyof P ? string extends P['className' & keyof P] ? {
    css?: Interpolation<Theme>;
} : {} : {};
/** @ts-ignore */
type ReactJSXElement = true extends IsPreReact19 ? JSX.Element : React.JSX.Element;
/** @ts-ignore */
type ReactJSXElementClass = true extends IsPreReact19 ? JSX.ElementClass : React.JSX.ElementClass;
/** @ts-ignore */
type ReactJSXElementAttributesProperty = true extends IsPreReact19 ? JSX.ElementAttributesProperty : React.JSX.ElementAttributesProperty;
/** @ts-ignore */
type ReactJSXElementChildrenAttribute = true extends IsPreReact19 ? JSX.ElementChildrenAttribute : React.JSX.ElementChildrenAttribute;
/** @ts-ignore */
type ReactJSXLibraryManagedAttributes<C, P> = true extends IsPreReact19 ? JSX.LibraryManagedAttributes<C, P> : React.JSX.LibraryManagedAttributes<C, P>;
/** @ts-ignore */
type ReactJSXIntrinsicAttributes = true extends IsPreReact19 ? JSX.IntrinsicAttributes : React.JSX.IntrinsicAttributes;
/** @ts-ignore */
type ReactJSXIntrinsicClassAttributes<T> = true extends IsPreReact19 ? JSX.IntrinsicClassAttributes<T> : React.JSX.IntrinsicClassAttributes<T>;
/** @ts-ignore */
type ReactJSXIntrinsicElements = true extends IsPreReact19 ? JSX.IntrinsicElements : React.JSX.IntrinsicElements;
/** @ts-ignore */
type ReactJSXElementType = true extends IsPreReact19 ? string | React.JSXElementConstructor<any> : React.JSX.ElementType;
export declare namespace ReactJSX {
    type ElementType = ReactJSXElementType;
    interface Element extends ReactJSXElement {
    }
    interface ElementClass extends ReactJSXElementClass {
    }
    interface ElementAttributesProperty extends ReactJSXElementAttributesProperty {
    }
    interface ElementChildrenAttribute extends ReactJSXElementChildrenAttribute {
    }
    type LibraryManagedAttributes<C, P> = ReactJSXLibraryManagedAttributes<C, P>;
    interface IntrinsicAttributes extends ReactJSXIntrinsicAttributes {
    }
    interface IntrinsicClassAttributes<T> extends ReactJSXIntrinsicClassAttributes<T> {
    }
    type IntrinsicElements = ReactJSXIntrinsicElements;
}
export declare namespace EmotionJSX {
    type ElementType = ReactJSXElementType;
    interface Element extends ReactJSXElement {
    }
    interface ElementClass extends ReactJSXElementClass {
    }
    interface ElementAttributesProperty extends ReactJSXElementAttributesProperty {
    }
    interface ElementChildrenAttribute extends ReactJSXElementChildrenAttribute {
    }
    type LibraryManagedAttributes<C, P> = P extends unknown ? WithConditionalCSSProp<P> & ReactJSXLibraryManagedAttributes<C, P> : never;
    interface IntrinsicAttributes extends ReactJSXIntrinsicAttributes {
    }
    interface IntrinsicClassAttributes<T> extends ReactJSXIntrinsicClassAttributes<T> {
    }
    type IntrinsicElements = {
        [K in keyof ReactJSXIntrinsicElements]: ReactJSXIntrinsicElements[K] & {
            css?: Interpolation<Theme>;
        };
    };
}
export {};
