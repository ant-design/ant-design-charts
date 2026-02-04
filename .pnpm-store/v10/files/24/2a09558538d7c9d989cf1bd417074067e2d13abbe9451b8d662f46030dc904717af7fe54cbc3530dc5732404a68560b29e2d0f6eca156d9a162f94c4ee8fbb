//@ts-ignore
import { pathToRegexp } from '../path-to-regexp';
import sha265 from '../sha265';
export const childrenPropsName = 'routes';
export function stripQueryStringAndHashFromPath(url) {
    return url.split('?')[0].split('#')[0];
}
export const isUrl = (path) => {
    if (!path.startsWith('http')) {
        return false;
    }
    try {
        const url = new URL(path);
        return !!url;
    }
    catch (error) {
        return false;
    }
};
export const getKeyByPath = (item) => {
    const { path } = item;
    if (!path || path === '/') {
        // 如果还是没有，用对象的hash 生成一个
        try {
            return `/${sha265(JSON.stringify(item))}`;
        }
        catch (error) {
            // dom some thing
        }
    }
    return path ? stripQueryStringAndHashFromPath(path) : path;
};
/**
 * 获取locale，增加了一个功能，如果 locale = false，将不使用国际化
 * @param item
 * @param parentName
 */
const getItemLocaleName = (item, parentName) => {
    const { name, locale } = item;
    // 如果配置了 locale 并且 locale 为 false或 ""
    if (('locale' in item && locale === false) || !name) {
        return false;
    }
    return item.locale || `${parentName}.${name}`;
};
/**
 * 如果不是 / 开头的和父节点做一下合并
 * 如果是 / 开头的不作任何处理
 * 如果是 url 也直接返回
 * @param path
 * @param parentPath
 */
const mergePath = (path = '', parentPath = '/') => {
    if (path.endsWith('/*')) {
        return path.replace('/*', '/');
    }
    if ((path || parentPath).startsWith('/')) {
        return path;
    }
    if (isUrl(path)) {
        return path;
    }
    return `/${parentPath}/${path}`.replace(/\/\//g, '/').replace(/\/\//g, '/');
};
// bigfish 的兼容准话
const bigfishCompatibleConversions = (route, props) => {
    const { menu = {}, indexRoute, path = '' } = route;
    const routerChildren = route.children || [];
    const { name = route.name, icon = route.icon, hideChildren = route.hideChildren, flatMenu = route.flatMenu, } = menu; // 兼容平铺式写法
    // 拼接 childrenRoutes, 处理存在 indexRoute 时的逻辑
    const childrenList = indexRoute &&
        // 如果只有 redirect,不用处理的
        Object.keys(indexRoute).join(',') !== 'redirect'
        ? [
            {
                path,
                menu,
                ...indexRoute,
            },
        ].concat(routerChildren || [])
        : routerChildren;
    // 拼接返回的 menu 数据
    const result = {
        ...route,
    };
    if (name) {
        result.name = name;
    }
    if (icon) {
        result.icon = icon;
    }
    if (childrenList && childrenList.length) {
        /** 在菜单中隐藏子项 */
        if (hideChildren) {
            delete result.children;
            return result;
        }
        // 需要重新进行一次
        const finalChildren = formatter({
            ...props,
            data: childrenList,
        }, route);
        /** 在菜单中只隐藏此项，子项往上提，仍旧展示 */
        if (flatMenu) {
            return finalChildren;
        }
        delete result[childrenPropsName];
    }
    return result;
};
const notNullArray = (value) => Array.isArray(value) && value.length > 0;
/**
 *
 * @param props
 * @param parent
 */
function formatter(props, parent = { path: '/' }) {
    const { data, formatMessage, parentName, locale: menuLocale } = props;
    if (!data || !Array.isArray(data)) {
        return [];
    }
    return data
        .filter((item) => {
        if (!item)
            return false;
        if (notNullArray(item.children))
            return true;
        if (item.path)
            return true;
        if (item.originPath)
            return true;
        if (item.layout)
            return true;
        // 重定向
        if (item.redirect)
            return false;
        if (item.unaccessible)
            return false;
        return false;
    })
        .filter((item) => {
        if (item?.menu?.name || item?.flatMenu || item?.menu?.flatMenu) {
            return true;
        }
        // 显示指定在 menu 中隐藏该项
        // layout 插件的功能，其实不应该存在的
        if (item.menu === false) {
            return false;
        }
        return true;
    })
        .map((finallyItem) => {
        const item = {
            ...finallyItem,
            path: finallyItem.path || finallyItem.originPath,
        };
        if (!item.children && item[childrenPropsName]) {
            item.children = item[childrenPropsName];
            delete item[childrenPropsName];
        }
        // 是否没有权限查看
        // 这样就不会显示，是一个兼容性的方式
        if (item.unaccessible) {
            // eslint-disable-next-line no-param-reassign
            delete item.name;
        }
        if (item.path === '*') {
            item.path = '.';
        }
        if (item.path === '/*') {
            item.path = '.';
        }
        if (!item.path && item.originPath) {
            item.path = item.originPath;
        }
        return item;
    })
        .map((item = { path: '/' }) => {
        const routerChildren = item.children || item[childrenPropsName] || [];
        const path = mergePath(item.path, parent ? parent.path : '/');
        const { name } = item;
        const locale = getItemLocaleName(item, parentName || 'menu');
        // if enableMenuLocale use item.name,
        // close menu international
        const localeName = locale !== false && menuLocale !== false && formatMessage && locale
            ? formatMessage({ id: locale, defaultMessage: name })
            : name;
        const { 
        // eslint-disable-next-line @typescript-eslint/naming-convention
        pro_layout_parentKeys = [], children, icon, flatMenu, indexRoute, routes, ...restParent } = parent;
        const item_pro_layout_parentKeys = new Set([
            ...pro_layout_parentKeys,
            ...(item.parentKeys || []),
        ]);
        if (parent.key) {
            item_pro_layout_parentKeys.add(parent.key);
        }
        const finallyItem = {
            ...restParent,
            menu: undefined,
            ...item,
            path,
            locale,
            key: item.key || getKeyByPath({ ...item, path }),
            pro_layout_parentKeys: Array.from(item_pro_layout_parentKeys).filter((key) => key && key !== '/'),
        };
        if (localeName) {
            finallyItem.name = localeName;
        }
        else {
            delete finallyItem.name;
        }
        if (finallyItem.menu === undefined) {
            delete finallyItem.menu;
        }
        if (notNullArray(routerChildren)) {
            const formatterChildren = formatter({
                ...props,
                data: routerChildren,
                parentName: locale || '',
            }, finallyItem);
            if (notNullArray(formatterChildren)) {
                finallyItem.children = formatterChildren;
            }
        }
        return bigfishCompatibleConversions(finallyItem, props);
    })
        .flat(1);
}
/**
 * 删除 hideInMenu 和 item.name 不存在的
 */
const defaultFilterMenuData = (menuData = []) => menuData
    .filter((item) => item &&
    (item.name || notNullArray(item.children)) &&
    !item.hideInMenu &&
    !item.redirect)
    .map((item) => {
    const newItem = { ...item };
    const routerChildren = newItem.children || item[childrenPropsName] || [];
    delete newItem[childrenPropsName];
    if (notNullArray(routerChildren) &&
        !newItem.hideChildrenInMenu &&
        routerChildren.some((child) => child && !!child.name)) {
        const newChildren = defaultFilterMenuData(routerChildren);
        if (newChildren.length)
            return {
                ...newItem,
                children: newChildren,
            };
    }
    return { ...item };
})
    .filter((item) => item);
/**
 * support pathToRegexp get string
 */
class RouteListMap extends Map {
    get(pathname) {
        let routeValue;
        try {
            // eslint-disable-next-line no-restricted-syntax
            for (const [key, value] of this.entries()) {
                const path = stripQueryStringAndHashFromPath(key);
                if (!isUrl(key) &&
                    pathToRegexp(path, []).test(pathname)) {
                    routeValue = value;
                    break;
                }
            }
        }
        catch (error) {
            routeValue = undefined;
        }
        return routeValue;
    }
}
/**
 * 获取面包屑映射
 * @param MenuDataItem[] menuData 菜单配置
 */
const getBreadcrumbNameMap = (menuData) => {
    // Map is used to ensure the order of keys
    const routerMap = new RouteListMap();
    const flattenMenuData = (data, parent) => {
        data.forEach((menuItem) => {
            const routerChildren = menuItem.children || menuItem[childrenPropsName] || [];
            if (notNullArray(routerChildren)) {
                flattenMenuData(routerChildren, menuItem);
            }
            // Reduce memory usage
            const path = mergePath(menuItem.path, parent ? parent.path : '/');
            routerMap.set(stripQueryStringAndHashFromPath(path), menuItem);
        });
    };
    flattenMenuData(menuData);
    return routerMap;
};
const clearChildren = (menuData = []) => {
    return menuData
        .map((item) => {
        const routerChildren = item.children || item[childrenPropsName];
        if (notNullArray(routerChildren)) {
            const newChildren = clearChildren(routerChildren);
            if (newChildren.length)
                return { ...item };
        }
        const finallyItem = { ...item };
        delete finallyItem[childrenPropsName];
        delete finallyItem.children;
        return finallyItem;
    })
        .filter((item) => item);
};
/**
 * @param routeList 路由配置
 * @param locale 是否使用国际化
 * @param formatMessage 国际化的程序
 * @param ignoreFilter 是否筛选掉不展示的 menuItem 项，plugin-layout需要所有项目来计算布局样式
 * @returns { breadcrumb, menuData}
 */
const transformRoute = (routeList, locale, formatMessage, ignoreFilter) => {
    const originalMenuData = formatter({
        data: [...routeList].map((item) => ({ ...item })),
        formatMessage,
        locale,
    });
    const menuData = ignoreFilter
        ? clearChildren(originalMenuData)
        : defaultFilterMenuData(originalMenuData);
    // Map type used for internal logic
    const breadcrumb = getBreadcrumbNameMap(originalMenuData);
    return { breadcrumb, menuData };
};
export default transformRoute;
//# sourceMappingURL=transformRoute.js.map