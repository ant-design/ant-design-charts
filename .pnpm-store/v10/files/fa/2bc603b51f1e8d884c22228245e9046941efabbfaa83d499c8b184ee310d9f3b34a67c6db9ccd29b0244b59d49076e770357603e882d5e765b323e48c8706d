import { barycenter } from './barycenter';
import resolveConflicts from './resolve-conflicts';
import { sort } from './sort';
export const sortSubgraph = (g, v, cg, biasRight, usePrev, keepNodeOrder) => {
    var _a, _b, _c, _d;
    let movable = g.getChildren(v).map((n) => n.id);
    // fixorder的点不参与排序（这个方案不合适，只排了新增节点，和原来的分离）
    const node = g.getNode(v);
    const bl = node ? node.data.borderLeft : undefined;
    const br = node ? node.data.borderRight : undefined;
    const subgraphs = {};
    if (bl) {
        movable = movable === null || movable === void 0 ? void 0 : movable.filter((w) => {
            return w !== bl && w !== br;
        });
    }
    const barycenters = barycenter(g, movable || []);
    barycenters === null || barycenters === void 0 ? void 0 : barycenters.forEach((entry) => {
        var _a;
        if ((_a = g.getChildren(entry.v)) === null || _a === void 0 ? void 0 : _a.length) {
            const subgraphResult = sortSubgraph(g, entry.v, cg, biasRight, keepNodeOrder);
            subgraphs[entry.v] = subgraphResult;
            if (subgraphResult.hasOwnProperty('barycenter')) {
                mergeBarycenters(entry, subgraphResult);
            }
        }
    });
    const entries = resolveConflicts(barycenters, cg);
    expandSubgraphs(entries, subgraphs);
    // 添加fixorder信息到entries里边
    // TODO: 不考虑复合情况，只用第一个点的fixorder信息，后续考虑更完备的实现
    (_a = entries
        .filter((e) => e.vs.length > 0)) === null || _a === void 0 ? void 0 : _a.forEach((e) => {
        const node = g.getNode(e.vs[0]);
        if (node) {
            e.fixorder = node.data.fixorder;
            e.order = node.data.order;
        }
    });
    const result = sort(entries, biasRight, usePrev, keepNodeOrder);
    if (bl) {
        result.vs = [bl, result.vs, br].flat();
        if ((_b = g.getPredecessors(bl)) === null || _b === void 0 ? void 0 : _b.length) {
            const blPred = g.getNode(((_c = g.getPredecessors(bl)) === null || _c === void 0 ? void 0 : _c[0].id) || '');
            const brPred = g.getNode(((_d = g.getPredecessors(br)) === null || _d === void 0 ? void 0 : _d[0].id) || '');
            if (!result.hasOwnProperty('barycenter')) {
                result.barycenter = 0;
                result.weight = 0;
            }
            result.barycenter =
                (result.barycenter * result.weight +
                    blPred.data.order +
                    brPred.data.order) /
                    (result.weight + 2);
            result.weight += 2;
        }
    }
    return result;
};
const expandSubgraphs = (entries, subgraphs) => {
    entries === null || entries === void 0 ? void 0 : entries.forEach((entry) => {
        var _a;
        const vss = (_a = entry.vs) === null || _a === void 0 ? void 0 : _a.map((v) => {
            if (subgraphs[v]) {
                return subgraphs[v].vs;
            }
            return v;
        });
        entry.vs = vss.flat();
    });
};
const mergeBarycenters = (target, other) => {
    if (target.barycenter !== undefined) {
        target.barycenter =
            (target.barycenter * target.weight + other.barycenter * other.weight) /
                (target.weight + other.weight);
        target.weight += other.weight;
    }
    else {
        target.barycenter = other.barycenter;
        target.weight = other.weight;
    }
};
//# sourceMappingURL=sort-subgraph.js.map