/// <reference types="react" />
export type ProRequestData<T, U = Record<string, any>> = (params: U, props: any) => Promise<T>;
export declare function useFetchData<T, U = Record<string, any>>(props: {
    proFieldKey?: React.Key;
    params?: U;
    request?: ProRequestData<T, U>;
}): [T | undefined];
