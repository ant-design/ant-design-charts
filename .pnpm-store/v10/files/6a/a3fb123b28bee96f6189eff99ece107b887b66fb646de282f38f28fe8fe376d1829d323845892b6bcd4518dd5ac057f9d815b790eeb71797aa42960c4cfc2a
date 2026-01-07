const adjust = (g, rankdir) => {
    const rd = rankdir.toLowerCase();
    if (rd === 'lr' || rd === 'rl') {
        swapWidthHeight(g);
    }
};
const undo = (g, rankdir) => {
    const rd = rankdir.toLowerCase();
    if (rd === 'bt' || rd === 'rl') {
        reverseY(g);
    }
    if (rd === 'lr' || rd === 'rl') {
        swapXY(g);
        swapWidthHeight(g);
    }
};
const swapWidthHeight = (g) => {
    g.getAllNodes().forEach((v) => {
        swapWidthHeightOne(v);
    });
    g.getAllEdges().forEach((e) => {
        swapWidthHeightOne(e);
    });
};
const swapWidthHeightOne = (node) => {
    const w = node.data.width;
    node.data.width = node.data.height;
    node.data.height = w;
};
const reverseY = (g) => {
    g.getAllNodes().forEach((v) => {
        reverseYOne(v.data);
    });
    g.getAllEdges().forEach((edge) => {
        var _a;
        (_a = edge.data.points) === null || _a === void 0 ? void 0 : _a.forEach((point) => reverseYOne(point));
        if (edge.data.hasOwnProperty('y')) {
            reverseYOne(edge.data);
        }
    });
};
const reverseYOne = (node) => {
    if (node === null || node === void 0 ? void 0 : node.y) {
        node.y = -node.y;
    }
};
const swapXY = (g) => {
    g.getAllNodes().forEach((v) => {
        swapXYOne(v.data);
    });
    g.getAllEdges().forEach((edge) => {
        var _a;
        (_a = edge.data.points) === null || _a === void 0 ? void 0 : _a.forEach((point) => swapXYOne(point));
        if (edge.data.hasOwnProperty('x')) {
            swapXYOne(edge.data);
        }
    });
};
const swapXYOne = (node) => {
    const x = node.x;
    node.x = node.y;
    node.y = x;
};
export { adjust, undo };
//# sourceMappingURL=coordinate-system.js.map