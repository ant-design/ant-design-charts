import * as React from 'react';
import { DistributiveOmit, PropsOf } from "./types.js";
export interface Theme {
}
export interface ThemeProviderProps {
    theme: Partial<Theme> | ((outerTheme: Theme) => Theme);
    children: React.ReactNode;
}
export interface ThemeProvider {
    (props: ThemeProviderProps): React.ReactElement;
}
export type WithTheme<P, T> = P extends {
    theme: infer Theme;
} ? P & {
    theme: Exclude<Theme, undefined>;
} : P & {
    theme: T;
};
export declare const ThemeContext: React.Context<Theme>;
export declare const useTheme: () => Theme;
export interface ThemeProviderProps {
    theme: Partial<Theme> | ((outerTheme: Theme) => Theme);
    children: React.ReactNode;
}
export declare const ThemeProvider: (props: ThemeProviderProps) => React.JSX.Element;
export declare function withTheme<C extends React.ComponentType<React.ComponentProps<C>>>(Component: C): React.ForwardRefExoticComponent<DistributiveOmit<PropsOf<C>, 'theme'> & {
    theme?: Theme;
}>;
