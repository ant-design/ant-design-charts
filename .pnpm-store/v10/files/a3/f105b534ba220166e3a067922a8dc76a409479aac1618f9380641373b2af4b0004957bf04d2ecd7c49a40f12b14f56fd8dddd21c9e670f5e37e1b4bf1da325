import type { Theme } from '@ant-design/cssinjs';
import type { DesignTokenProviderProps } from 'antd/es/theme/context';
import type { AliasToken, GlobalToken, SeedToken } from './cssinjs-utils';
export declare const getComputedToken: (originToken: SeedToken, overrideToken: DesignTokenProviderProps['components'] & {
    override?: Partial<AliasToken>;
}, theme: Theme<any, any>) => any;
export declare function useInternalToken(): [
    theme: Theme<SeedToken, AliasToken>,
    token: GlobalToken,
    hashId: string,
    realToken: GlobalToken,
    cssVar?: DesignTokenProviderProps['cssVar']
];
export default function useToken(): {
    theme: Theme<SeedToken, AliasToken>;
    token: GlobalToken;
    hashId: string;
};
