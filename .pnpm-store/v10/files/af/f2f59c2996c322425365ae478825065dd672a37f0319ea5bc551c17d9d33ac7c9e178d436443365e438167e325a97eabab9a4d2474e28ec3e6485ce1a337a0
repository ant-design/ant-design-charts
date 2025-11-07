import { DisplayObject } from '@antv/g';
export type Point = [number, number];
export type Vector2 = [number, number];
export type ExtendDisplayObject = string | number | DisplayObject | (() => DisplayObject);
export type Callable<T, P extends any[]> = T | ((...args: P) => T);
export type CallbackParameter<T = any, E extends any[] = []> = [datum: T, index: number, data: T[], ...args: E];
export type CallableObject<T extends {
    [keys: string]: any;
}, P extends any[]> = {
    [K in keyof T]: Callable<T[K], P>;
};
export type BBox = {
    x: number;
    y: number;
    width: number;
    height: number;
};
export * from './prefix';
export * from './styles';
