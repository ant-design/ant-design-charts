/**
 * k-v 存储
 */
export default class<T> {
    map: {
        [key: string]: T;
    };
    has(key: string): boolean;
    get(key: string, def?: T): T | undefined;
    set(key: string, value: T): void;
    clear(): void;
    delete(key: string): void;
    size(): number;
}
