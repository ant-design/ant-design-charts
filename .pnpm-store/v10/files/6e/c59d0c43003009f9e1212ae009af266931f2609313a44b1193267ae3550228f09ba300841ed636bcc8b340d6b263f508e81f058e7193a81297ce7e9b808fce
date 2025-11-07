import { ReactElement } from 'react';
import { StyledThemeProvider } from "../../types";
import type { ThemeProviderProps } from './type';
interface TokenContainerProps<T, S = Record<string, string>> extends Pick<ThemeProviderProps<T, S>, 'children' | 'customToken' | 'customStylish' | 'prefixCls'> {
    StyledThemeProvider: StyledThemeProvider;
    defaultCustomToken?: ThemeProviderProps<T, S>['customToken'];
}
declare const TokenContainer: <T, S>(props: TokenContainerProps<T, S>) => ReactElement | null;
export default TokenContainer;
