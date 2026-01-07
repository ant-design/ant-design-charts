import React from 'react';
import { IClientRoute, ILoaderData, IRouteComponents, IRoutesById, ISelectedRoutes } from './types';
interface IAppContextType {
    routes: IRoutesById;
    routeComponents: IRouteComponents;
    clientRoutes: IClientRoute[];
    pluginManager: any;
    rootElement?: HTMLElement;
    basename?: string;
    clientLoaderData: ILoaderData;
    preloadRoute?: (to: string) => void;
    serverLoaderData: ILoaderData;
    history?: any;
}
export declare const AppContext: React.Context<IAppContextType>;
export declare function useAppData(): IAppContextType;
export declare function useSelectedRoutes(): ISelectedRoutes[];
export declare function useRouteProps<T extends Record<string, any> = any>(): T;
declare type ServerLoaderFunc = (...args: any[]) => Promise<any> | any;
export declare function useServerLoaderData<T extends ServerLoaderFunc = any>(): {
    data: Awaited<ReturnType<T>> | undefined;
};
export declare function useClientLoaderData(): {
    data: any;
};
export declare function useLoaderData<T extends ServerLoaderFunc = any>(): Awaited<ReturnType<T>>;
export {};
