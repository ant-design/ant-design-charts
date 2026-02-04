import { IApi } from '../../types';
export declare function getApiRoutes(opts: {
    api: IApi;
}): Promise<any>;
export declare function getRoutes(opts: {
    api: IApi;
}): Promise<Record<string, any>>;
export declare function getRouteComponents(opts: {
    routes: Record<string, any>;
    prefix: string;
    api: IApi;
}): Promise<string>;
/**
 *
 * transform component into webpack chunkName
 * @export
 * @param {string} component component path
 * @param {string} [cwd] current root path
 * @return {*}  {string}
 */
export declare function componentToChunkName(component: string, cwd?: string): string;
