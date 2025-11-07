/**
 * <zh/> 右键菜单显示项目。
 * <en/> The item of the right-click menu.
 */
export type Item = {
    /**
     * <zh/> 菜单项显示的名字。
     * <en/> The name of the menu item.
     */
    name: string;
    /**
     * <zh/> 菜单项对应的值。
     * <en/> The value corresponding to the menu item.
     */
    value: string;
};
/**
 * Get the content of the right-click menu.
 * @param items - context menu items
 * @returns HTML string
 */
export declare function getContentFromItems(items: Item[]): string;
/**
 * Style of the right-click menu, same with `tooltip`.
 */
export declare const CONTEXTMENU_CSS = "\n  .g6-contextmenu {\n    font-size: 12px;\n    background-color: rgba(255, 255, 255, 0.96);\n    border-radius: 4px;\n    overflow: hidden;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 12px 0px;\n    transition: visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s;\n  }\n\n  .g6-contextmenu-ul {\n    max-width: 256px;\n    min-width: 96px;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  .g6-contextmenu-li {\n    padding: 8px 12px;\n    cursor: pointer;\n    user-select: none;\n  }\n\n  .g6-contextmenu-li:hover {\n    background-color: #f5f5f5;\n    cursor: pointer;\n  }\n";
