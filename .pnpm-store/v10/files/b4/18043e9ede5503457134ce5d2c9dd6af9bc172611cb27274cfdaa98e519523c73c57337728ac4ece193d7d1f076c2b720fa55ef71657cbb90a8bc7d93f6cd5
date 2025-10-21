export type RequestData<T = any> = {
    data?: T;
    success?: boolean;
    [key: string]: any;
} & Record<string, any>;
export type UseFetchDataAction<T extends RequestData> = {
    dataSource: T['data'] | T;
    setDataSource: (value: T['data'] | T) => void;
    loading?: boolean;
    reload: () => Promise<void>;
};
declare const useFetchData: <T extends RequestData<any>>(getData: () => Promise<T>, options?: {
    effects?: any[] | undefined;
    manual: boolean;
    loading?: boolean | undefined;
    onLoadingChange?: ((loading?: boolean) => void) | undefined;
    onRequestError?: ((e: Error) => void) | undefined;
    dataSource?: T["data"] | undefined;
    defaultDataSource?: T["data"] | undefined;
    onDataSourceChange?: ((value: T['data']) => void) | undefined;
} | undefined) => UseFetchDataAction<T>;
export default useFetchData;
