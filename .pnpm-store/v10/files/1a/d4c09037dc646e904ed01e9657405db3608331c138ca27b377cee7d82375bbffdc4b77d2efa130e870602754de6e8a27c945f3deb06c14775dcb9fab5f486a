import { partition } from '../util';
export const sort = (entries, biasRight, usePrev, keepNodeOrder) => {
    const parts = partition(entries, (entry) => {
        const hasFixOrder = entry.hasOwnProperty('fixorder') && !isNaN(entry.fixorder);
        if (keepNodeOrder) {
            return !hasFixOrder && entry.hasOwnProperty('barycenter');
        }
        // NOTE: 有fixorder的也可以排
        return hasFixOrder || entry.hasOwnProperty('barycenter');
    });
    const sortable = parts.lhs;
    const unsortable = parts.rhs.sort((a, b) => -a.i - -b.i);
    const vs = [];
    let sum = 0;
    let weight = 0;
    let vsIndex = 0;
    sortable === null || sortable === void 0 ? void 0 : sortable.sort(compareWithBias(!!biasRight, !!usePrev));
    vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
    sortable === null || sortable === void 0 ? void 0 : sortable.forEach((entry) => {
        var _a;
        vsIndex += (_a = entry.vs) === null || _a === void 0 ? void 0 : _a.length;
        vs.push(entry.vs);
        sum += entry.barycenter * entry.weight;
        weight += entry.weight;
        vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
    });
    const result = {
        vs: vs.flat(),
    };
    if (weight) {
        result.barycenter = sum / weight;
        result.weight = weight;
    }
    return result;
};
const consumeUnsortable = (vs, unsortable, index) => {
    let iindex = index;
    let last;
    while (unsortable.length &&
        (last = unsortable[unsortable.length - 1]).i <= iindex) {
        unsortable.pop();
        vs === null || vs === void 0 ? void 0 : vs.push(last.vs);
        iindex++;
    }
    return iindex;
};
/**
 * 配置是否考虑使用之前的布局结果
 */
const compareWithBias = (bias, usePrev) => {
    return (entryV, entryW) => {
        // 排序的时候先判断fixorder，不行再判断重心
        if (entryV.fixorder !== undefined && entryW.fixorder !== undefined) {
            return entryV.fixorder - entryW.fixorder;
        }
        if (entryV.barycenter < entryW.barycenter) {
            return -1;
        }
        if (entryV.barycenter > entryW.barycenter) {
            return 1;
        }
        // 重心相同，考虑之前排好的顺序
        if (usePrev && entryV.order !== undefined && entryW.order !== undefined) {
            if (entryV.order < entryW.order) {
                return -1;
            }
            if (entryV.order > entryW.order) {
                return 1;
            }
        }
        return !bias ? entryV.i - entryW.i : entryW.i - entryV.i;
    };
};
//# sourceMappingURL=sort.js.map