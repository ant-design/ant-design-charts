import { IRoute } from '../../types';
export declare function esbuildIgnorePathPrefixPlugin(): {
    name: string;
    setup(build: any): void;
};
/**
 * 匹配 API 路由，包含动态路由的处理, 前后 trailing slash 的处理及 /api 前缀的处理
 *
 * 例如：`/api/users/ken20001207`, `api/users/ken20001207`,
 * `/api/users/ken20001207/`, `api/users/ken20001207/`, `users/ken20001207/`,
 * `/users/ken20001207/`, `users/ken20001207`, `/users/ken20001207` 等请求
 *
 * 都会被匹配到 `/api/users/[userId]` 这个路由中,
 * 并且 `ken20001207` 会被抽取出来放入 `params.userId` 中
 */
export declare function matchApiRoute(apiRoutes: IRoute[], path: string): {
    route: IRoute;
    params: {
        [key: string]: string;
    };
} | undefined;
