import { isNumber } from '@antv/util';
export const clone = (target) => {
    if (target === null) {
        return target;
    }
    if (target instanceof Date) {
        return new Date(target.getTime());
    }
    if (target instanceof Array) {
        const cp = [];
        target.forEach((v) => {
            cp.push(v);
        });
        return cp.map((n) => clone(n));
    }
    if (typeof target === 'object') {
        const cp = {};
        Object.keys(target).forEach((k) => {
            cp[k] = clone(target[k]);
        });
        return cp;
    }
    return target;
};
/**
 * Clone node or edge data and format it
 * @param target node/edge to be cloned
 * @param initRange whether init the x and y in data with the range, which means [xRange, yRange]
 * @returns cloned node/edge
 */
export const cloneFormatData = (target, initRange) => {
    const cloned = clone(target);
    cloned.data = cloned.data || {};
    if (initRange) {
        if (!isNumber(cloned.data.x))
            cloned.data.x = Math.random() * initRange[0];
        if (!isNumber(cloned.data.y))
            cloned.data.y = Math.random() * initRange[1];
    }
    return cloned;
};
//# sourceMappingURL=object.js.map