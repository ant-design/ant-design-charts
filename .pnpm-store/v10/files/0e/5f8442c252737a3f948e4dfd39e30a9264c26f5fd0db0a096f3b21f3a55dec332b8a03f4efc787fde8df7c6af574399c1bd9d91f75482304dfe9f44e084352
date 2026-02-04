import { ReactJSX } from "./jsx-namespace.js";
/**
 * @desc Utility type for getting props type of React component.
 * It takes `defaultProps` into an account - making props with defaults optional.
 */
export type PropsOf<C extends keyof ReactJSX.IntrinsicElements | React.JSXElementConstructor<any>> = ReactJSX.LibraryManagedAttributes<C, React.ComponentProps<C>>;
export type DistributiveOmit<T, U> = T extends any ? Pick<T, Exclude<keyof T, U>> : never;
