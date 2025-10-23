/**
 * TODO: The median method consistently performs better than the barycenter method and has a slight theoretical advantage
 */
export const barycenter = (g, movable) => {
    return movable.map((v) => {
        const inV = g.getRelatedEdges(v, 'in');
        if (!(inV === null || inV === void 0 ? void 0 : inV.length)) {
            return { v };
        }
        const result = { sum: 0, weight: 0 };
        inV === null || inV === void 0 ? void 0 : inV.forEach((e) => {
            const nodeU = g.getNode(e.source);
            result.sum += e.data.weight * nodeU.data.order;
            result.weight += e.data.weight;
        });
        return {
            v,
            barycenter: result.sum / result.weight,
            weight: result.weight,
        };
    });
};
//# sourceMappingURL=barycenter.js.map