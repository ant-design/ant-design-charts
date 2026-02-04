type AnyFunction = (...args: any[]) => any;
type Path = (string | symbol)[];
type Op = [
    /*op*/ 'set',
    /*path*/ Path,
    /*value*/ unknown,
    /*prevValue*/ unknown
] | [
    /*op*/ 'delete',
    /*path*/ Path,
    /*prevValue*/ unknown
] | [
    /*op*/ 'resolve',
    /*path*/ Path,
    /*value*/ unknown
] | [
    /*op*/ 'reject',
    /*path*/ Path,
    /*error*/ unknown
];
type Listener = (op: Op, nextVersion: number) => void;
type Primitive = string | number | boolean | null | undefined | symbol | bigint;
type SnapshotIgnore = Date | Map<any, any> | Set<any> | WeakMap<any, any> | WeakSet<any> | Error | RegExp | AnyFunction | Primitive;
type Snapshot<T> = T extends {
    $$valtioSnapshot: infer S;
} ? S : T extends SnapshotIgnore ? T : T extends Promise<unknown> ? Awaited<T> : T extends object ? {
    readonly [K in keyof T]: Snapshot<T[K]>;
} : T;
/**
 * This is not a public API.
 * It can be changed without any notice.
 */
export type INTERNAL_Snapshot<T> = Snapshot<T>;
type HandlePromise = <P extends Promise<any>>(promise: P) => Awaited<P>;
type CreateSnapshot = <T extends object>(target: T, version: number, handlePromise?: HandlePromise) => T;
type RemoveListener = () => void;
type AddListener = (listener: Listener) => RemoveListener;
type ProxyState = readonly [
    /*target*/ object,
    /*ensureVersion*/ (nextCheckVersion?: number) => number,
    /*createSnapshot*/ CreateSnapshot,
    /*addListener*/ AddListener
];
export declare function proxy<T extends object>(initialObject?: T): T;
export declare function getVersion(proxyObject: unknown): number | undefined;
export declare function subscribe<T extends object>(proxyObject: T, callback: (ops: Op[]) => void, notifyInSync?: boolean): () => void;
export declare function snapshot<T extends object>(proxyObject: T, handlePromise?: HandlePromise): Snapshot<T>;
export declare function ref<T extends object>(obj: T): T & {
    $$valtioSnapshot: T;
};
export declare const unstable_buildProxyFunction: (objectIs?: (value1: any, value2: any) => boolean, newProxy?: <T extends object>(target: T, handler: ProxyHandler<T>) => T, canProxy?: (x: unknown) => boolean, defaultHandlePromise?: <P extends Promise<any>>(promise: P & {
    status?: 'pending' | 'fulfilled' | 'rejected';
    value?: Awaited<P>;
    reason?: unknown;
}) => Awaited<P>, snapCache?: WeakMap<object, [
    /*version*/ number,
    /*snap*/ unknown
]>, createSnapshot?: CreateSnapshot, proxyCache?: WeakMap<object, object>, versionHolder?: [
    number,
    number
], proxyFunction?: <T_1 extends object>(initialObject: T_1) => T_1) => readonly [
    <T_1 extends object>(initialObject: T_1) => T_1,
    WeakMap<object, ProxyState>,
    WeakSet<WeakKey>,
    (value1: any, value2: any) => boolean,
    <T extends object>(target: T, handler: ProxyHandler<T>) => T,
    (x: unknown) => boolean,
    <P extends Promise<any>>(promise: P & {
        status?: 'pending' | 'fulfilled' | 'rejected';
        value?: Awaited<P>;
        reason?: unknown;
    }) => Awaited<P>,
    WeakMap<object, [
        /*version*/ number,
        /*snap*/ unknown
    ]>,
    CreateSnapshot,
    WeakMap<object, object>,
    [
        number,
        number
    ]
];
export {};
declare type Awaited<T> = T extends Promise<infer V> ? V : T;