/**
 * A classic LRU (Least Recently Used) cache implementation.
 * It evicts the least recently used item when the cache is full.
 *
 * It uses a Map for O(1) key-based access
 * to maintain the usage order of items.
 *
 * 通过利用 JavaScript 内置 Map 的特性（按插入顺序迭代），我们不再需要手动维护一个双向链表
 */
export default class LRU<T> {
    private readonly capacity;
    private cache;
    constructor(capacity: number);
    /**
     * Retrieves an item from the cache. Marks the item as recently used.
     * @param key The key of the item to retrieve.
     * @returns The value of the item, or undefined if not found.
     */
    get(key: string | number): T | undefined;
    /**
     * Adds or updates an item in the cache. Marks the item as recently used.
     * If the cache is full, it removes the least recently used item.
     * @param key The key of the item.
     * @param value The value of the item.
     */
    put(key: string | number, value: T): void;
    /**
     * Returns the current number of items in the cache.
     */
    len(): number;
    /**
     * Clears all items from the cache.
     */
    clear(): void;
}
//# sourceMappingURL=LRU.d.ts.map