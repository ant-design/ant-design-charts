import React from 'react';
import type { WithFalse } from '../../typing';
import type { GlobalHeaderProps } from '../GlobalHeader';
import type { PrivateSiderMenuProps } from '../SiderMenu/SiderMenu';
export type HeaderViewProps = GlobalHeaderProps & {
    isMobile?: boolean;
    logo?: React.ReactNode;
    headerRender?: WithFalse<(props: HeaderViewProps, defaultDom: React.ReactNode) => React.ReactNode>;
    headerTitleRender?: WithFalse<(logo: React.ReactNode, title: React.ReactNode, props: HeaderViewProps) => React.ReactNode>;
    headerContentRender?: WithFalse<(props: HeaderViewProps, defaultDom: React.ReactNode) => React.ReactNode>;
    siderWidth?: number;
    hasSiderMenu?: boolean;
};
declare const DefaultHeader: React.FC<HeaderViewProps & PrivateSiderMenuProps>;
export { DefaultHeader };
