import { IRoute, IRouteCustom, IRoutesById } from './types';
export declare function createServerRoutes(opts: {
    routesById: IRoutesById;
    parentId?: string;
    createRoute?: (opts: {
        route: IRoute;
    }) => IRouteCustom;
}): (IRouteCustom | {
    id: string;
    path: string | undefined;
    index: boolean | undefined;
})[];
export declare function createServerRoute(opts: {
    route: IRoute;
}): {
    id: string;
    path: string | undefined;
    index: boolean | undefined;
};
