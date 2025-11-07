"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternMap = void 0;
function internGet({ map, initKey }, value) {
    const key = initKey(value);
    return map.has(key) ? map.get(key) : value;
}
function internSet({ map, initKey }, value) {
    const key = initKey(value);
    if (map.has(key))
        return map.get(key);
    map.set(key, value);
    return value;
}
function internDelete({ map, initKey }, value) {
    const key = initKey(value);
    if (map.has(key)) {
        value = map.get(key);
        map.delete(key);
    }
    return value;
}
function keyof(value) {
    return typeof value === 'object' ? value.valueOf() : value;
}
/**
 * @see 参考 https://github.com/mbostock/internmap/blob/main/src/index.js
 */
class InternMap extends Map {
    constructor(entries) {
        super();
        this.map = new Map();
        this.initKey = keyof;
        if (entries !== null) {
            for (const [key, value] of entries) {
                this.set(key, value);
            }
        }
    }
    get(key) {
        return super.get(internGet({ map: this.map, initKey: this.initKey }, key));
    }
    has(key) {
        return super.has(internGet({ map: this.map, initKey: this.initKey }, key));
    }
    set(key, value) {
        return super.set(internSet({ map: this.map, initKey: this.initKey }, key), value);
    }
    delete(key) {
        return super.delete(internDelete({ map: this.map, initKey: this.initKey }, key));
    }
}
exports.InternMap = InternMap;
//# sourceMappingURL=internMap.js.map