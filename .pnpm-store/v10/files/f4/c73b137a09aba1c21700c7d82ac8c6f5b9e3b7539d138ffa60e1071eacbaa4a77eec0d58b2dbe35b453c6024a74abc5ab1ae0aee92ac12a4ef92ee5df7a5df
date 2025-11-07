import { stripQueryStringAndHashFromPath, childrenPropsName, } from '../transformRoute/transformRoute';
/**
 * 获取打平的 menuData
 * 以 path 为 key
 * @param menuData
 */
export const getFlatMenus = (menuData = []) => {
    let menus = {};
    menuData.forEach((mapItem) => {
        const item = { ...mapItem };
        if (!item || !item.key) {
            return;
        }
        if (!item.children && item[childrenPropsName]) {
            item.children = item[childrenPropsName];
            delete item[childrenPropsName];
        }
        const routerChildren = item.children || [];
        menus[stripQueryStringAndHashFromPath(item.path || item.key || '/')] = {
            ...item,
        };
        menus[item.key || item.path || '/'] = { ...item };
        if (routerChildren) {
            menus = { ...menus, ...getFlatMenus(routerChildren) };
        }
    });
    return menus;
};
export default getFlatMenus;
//# sourceMappingURL=getFlatMenus.js.map