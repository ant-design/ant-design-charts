/**
 * 按照数据中的结果设置fixorder
 */
export const initDataOrder = (g, nodeOrder) => {
    const simpleNodes = g.getAllNodes().filter((v) => {
        var _a;
        return !((_a = g.getChildren(v.id)) === null || _a === void 0 ? void 0 : _a.length);
    });
    const ranks = simpleNodes.map((v) => v.data.rank);
    const maxRank = Math.max(...ranks);
    const layers = [];
    for (let i = 0; i < maxRank + 1; i++) {
        layers[i] = [];
    }
    nodeOrder === null || nodeOrder === void 0 ? void 0 : nodeOrder.forEach((n) => {
        const node = g.getNode(n);
        // 只考虑原有节点，dummy节点需要按照后续算法排出
        if (!node || node.data.dummy) {
            return;
        }
        if (!isNaN(node.data.rank)) {
            node.data.fixorder = layers[node.data.rank].length; // 设置fixorder为当层的顺序
            layers[node.data.rank].push(n);
        }
    });
};
//# sourceMappingURL=init-data-order.js.map