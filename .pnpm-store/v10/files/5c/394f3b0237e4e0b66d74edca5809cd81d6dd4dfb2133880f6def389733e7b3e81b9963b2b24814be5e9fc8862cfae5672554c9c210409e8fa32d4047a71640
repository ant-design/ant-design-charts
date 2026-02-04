import type { MutableRefObject, RefObject } from 'react';
type Callback<T> = (currentRef: T) => void;
export declare function useRefCallback<T>(callback: Callback<MutableRefObject<T>>, initialValue: T): MutableRefObject<T>;
export declare function useRefCallback<T>(callback: Callback<RefObject<T>>, initialValue: T | null): RefObject<T>;
export declare function useRefCallback<T = undefined>(callback: Callback<MutableRefObject<T | undefined>>): MutableRefObject<T | undefined>;
export {};
