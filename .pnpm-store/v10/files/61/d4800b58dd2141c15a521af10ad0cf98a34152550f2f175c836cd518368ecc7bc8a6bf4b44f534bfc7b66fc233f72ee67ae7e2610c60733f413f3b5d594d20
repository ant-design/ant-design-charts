export type BaseLayoutDesignToken = {
    hashId: string;
    colorPrimary: string;
    /**
     * 跨站点应用的图标hover颜色
     */
    colorBgAppListIconHover: string;
    /**
     * 跨站点应用的图标hover颜色
     */
    colorTextAppListIconHover: string;
    /**
     * 跨站点应用的图标hover颜色
     */
    colorTextAppListIcon: string;
    /**
     * layout 的背景颜色
     */
    bgLayout: string;
    /**
     * 侧边side的 token 配置
     */
    sider: {
        colorBgCollapsedButton: string;
        colorTextCollapsedButtonHover: string;
        colorTextCollapsedButton: string;
        colorMenuBackground: string;
        menuHeight: number;
        colorBgMenuItemCollapsedElevated: string;
        colorMenuItemDivider: string;
        colorBgMenuItemHover: string;
        colorBgMenuItemActive: string;
        colorBgMenuItemSelected: string;
        colorTextMenuSelected: string;
        colorTextMenuItemHover: string;
        colorTextMenuActive: string;
        colorTextMenu: string;
        colorTextMenuSecondary: string;
        paddingInlineLayoutMenu: number;
        paddingBlockLayoutMenu: number;
        /**
         * menu 顶部 title 的字体颜色
         */
        colorTextMenuTitle: string;
        colorTextSubMenuSelected: string;
    };
    /**
     * header 的 token 设置
     */
    header: {
        colorBgHeader: string;
        colorBgScrollHeader: string;
        colorHeaderTitle: string;
        colorBgMenuItemHover: string;
        colorBgMenuElevated: string;
        colorBgMenuItemSelected: string;
        colorTextMenuSelected: string;
        colorTextMenuActive: string;
        colorTextMenu: string;
        colorTextMenuSecondary: string;
        colorBgRightActionsItemHover: string;
        colorTextRightActionsItem: string;
        heightLayoutHeader: number;
    };
    /**
     * pageContainer
     */
    pageContainer: {
        /**
         * pageContainer 的背景颜色
         */
        colorBgPageContainer: string;
        /**
         * pageContainer 自带的 margin inline
         * @deprecated 请使用 paddingInlinePageContainerContent
         */
        marginInlinePageContainerContent: number;
        /**
         * pageContainer 自带的 margin block
         * @deprecated 请使用 paddingBlockPageContainerContent
         */
        marginBlockPageContainerContent: number;
        /**
         * pageContainer 自带的 padding inline
         */
        paddingInlinePageContainerContent: number;
        /**
         * pageContainer 自带的 padding block
         */
        paddingBlockPageContainerContent: number;
        /**
         * pageContainer 被固定时的背景颜色
         */
        colorBgPageContainerFixed: string;
    };
};
export type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
export type LayoutDesignToken = BaseLayoutDesignToken;
export declare const getLayoutDesignToken: (baseDesignTokens: DeepPartial<LayoutDesignToken>, antdToken: Record<string, any>) => LayoutDesignToken;
export type ProTokenType = {
    layout?: DeepPartial<LayoutDesignToken>;
};
