import { __awaiter } from "tslib";
import { isNumber, isString } from '@antv/util';
import { cloneFormatData, formatNumberFn, formatSizeFn } from './util';
import { handleSingleNodeGraph } from './util/common';
import { parseSize } from './util/size';
const DEFAULTS_LAYOUT_OPTIONS = {
    begin: [0, 0],
    preventOverlap: true,
    preventOverlapPadding: 10,
    condense: false,
    rows: undefined,
    cols: undefined,
    position: undefined,
    sortBy: 'degree',
    nodeSize: 30,
    width: 300,
    height: 300,
};
/**
 * <zh/> 网格布局
 *
 * <en/> Grid layout
 */
export class GridLayout {
    constructor(options = {}) {
        this.options = options;
        this.id = 'grid';
        this.options = Object.assign(Object.assign({}, DEFAULTS_LAYOUT_OPTIONS), options);
    }
    /**
     * Return the positions of nodes and edges(if needed).
     */
    execute(graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.genericGridLayout(false, graph, options);
        });
    }
    /**
     * To directly assign the positions to the nodes.
     */
    assign(graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.genericGridLayout(true, graph, options);
        });
    }
    genericGridLayout(assign, graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const mergedOptions = Object.assign(Object.assign({}, this.options), options);
            const { begin = [0, 0], condense, preventOverlapPadding, preventOverlap, rows: propsRows, cols: propsCols, nodeSpacing: paramNodeSpacing, nodeSize: paramNodeSize, width: propsWidth, height: propsHeight, position, } = mergedOptions;
            let { sortBy } = mergedOptions;
            const nodes = graph.getAllNodes();
            const edges = graph.getAllEdges();
            const n = nodes === null || nodes === void 0 ? void 0 : nodes.length;
            // Need no layout if there is no node.
            if (!n || n === 1) {
                return handleSingleNodeGraph(graph, assign, begin);
            }
            const layoutNodes = nodes.map((node) => cloneFormatData(node));
            if (
            // `id` should be reserved keyword
            sortBy !== 'id' &&
                (!isString(sortBy) || layoutNodes[0].data[sortBy] === undefined)) {
                sortBy = 'degree';
            }
            if (sortBy === 'degree') {
                layoutNodes.sort((n1, n2) => graph.getDegree(n2.id, 'both') - graph.getDegree(n1.id, 'both'));
            }
            else if (sortBy === 'id') {
                // sort nodes by ID
                layoutNodes.sort((n1, n2) => {
                    if (isNumber(n2.id) && isNumber(n1.id)) {
                        return n2.id - n1.id;
                    }
                    return `${n1.id}`.localeCompare(`${n2.id}`);
                });
            }
            else {
                // sort nodes by value
                layoutNodes.sort((n1, n2) => n2.data[sortBy] - n1.data[sortBy]);
            }
            const width = !propsWidth && typeof window !== 'undefined'
                ? window.innerWidth
                : propsWidth;
            const height = !propsHeight && typeof window !== 'undefined'
                ? window.innerHeight
                : propsHeight;
            const cells = n;
            const rcs = { rows: propsRows, cols: propsCols };
            // if rows or columns were set in self, use those values
            if (propsRows != null && propsCols != null) {
                rcs.rows = propsRows;
                rcs.cols = propsCols;
            }
            else if (propsRows != null && propsCols == null) {
                rcs.rows = propsRows;
                rcs.cols = Math.ceil(cells / rcs.rows);
            }
            else if (propsRows == null && propsCols != null) {
                rcs.cols = propsCols;
                rcs.rows = Math.ceil(cells / rcs.cols);
            }
            else {
                // otherwise use the automatic values and adjust accordingly	      // otherwise use the automatic values and adjust accordingly
                // width/height * splits^2 = cells where splits is number of times to split width
                const splits = Math.sqrt((cells * height) / width);
                rcs.rows = Math.round(splits);
                rcs.cols = Math.round((width / height) * splits);
            }
            rcs.rows = Math.max(rcs.rows, 1);
            rcs.cols = Math.max(rcs.cols, 1);
            if (rcs.cols * rcs.rows > cells) {
                // otherwise use the automatic values and adjust accordingly
                // if rounding was up, see if we can reduce rows or columns
                const sm = small(rcs);
                const lg = large(rcs);
                // reducing the small side takes away the most cells, so try it first
                if ((sm - 1) * lg >= cells) {
                    small(rcs, sm - 1);
                }
                else if ((lg - 1) * sm >= cells) {
                    large(rcs, lg - 1);
                }
            }
            else {
                // if rounding was too low, add rows or columns
                while (rcs.cols * rcs.rows < cells) {
                    const sm = small(rcs);
                    const lg = large(rcs);
                    // try to add to larger side first (adds less in multiplication)
                    if ((lg + 1) * sm >= cells) {
                        large(rcs, lg + 1);
                    }
                    else {
                        small(rcs, sm + 1);
                    }
                }
            }
            let cellWidth = condense ? 0 : width / rcs.cols;
            let cellHeight = condense ? 0 : height / rcs.rows;
            if (preventOverlap || paramNodeSpacing) {
                const nodeSpacing = formatNumberFn(10, paramNodeSpacing);
                const nodeSize = formatSizeFn(30, paramNodeSize, false);
                layoutNodes.forEach((node) => {
                    if (!node.data.x || !node.data.y) {
                        // for bb
                        node.data.x = 0;
                        node.data.y = 0;
                    }
                    const oNode = graph.getNode(node.id);
                    const [nodeW, nodeH] = parseSize(nodeSize(oNode) || 30);
                    const p = nodeSpacing !== undefined ? nodeSpacing(node) : preventOverlapPadding;
                    const w = nodeW + p;
                    const h = nodeH + p;
                    cellWidth = Math.max(cellWidth, w);
                    cellHeight = Math.max(cellHeight, h);
                });
            }
            const cellUsed = {}; // e.g. 'c-0-2' => true
            // to keep track of current cell position
            const rc = { row: 0, col: 0 };
            // get a cache of all the manual positions
            const id2manPos = {};
            for (let i = 0; i < layoutNodes.length; i++) {
                const node = layoutNodes[i];
                let rcPos;
                if (position) {
                    // TODO: not sure the api name
                    rcPos = position(graph.getNode(node.id));
                }
                if (rcPos && (rcPos.row !== undefined || rcPos.col !== undefined)) {
                    // must have at least row or col def'd
                    const pos = {
                        row: rcPos.row,
                        col: rcPos.col,
                    };
                    if (pos.col === undefined) {
                        // find unused col
                        pos.col = 0;
                        while (used(cellUsed, pos)) {
                            pos.col++;
                        }
                    }
                    else if (pos.row === undefined) {
                        // find unused row
                        pos.row = 0;
                        while (used(cellUsed, pos)) {
                            pos.row++;
                        }
                    }
                    id2manPos[node.id] = pos;
                    use(cellUsed, pos);
                }
                getPos(node, begin, cellWidth, cellHeight, id2manPos, rcs, rc, cellUsed);
            }
            const result = {
                nodes: layoutNodes,
                edges,
            };
            if (assign) {
                layoutNodes.forEach((node) => {
                    graph.mergeNodeData(node.id, {
                        x: node.data.x,
                        y: node.data.y,
                    });
                });
            }
            return result;
        });
    }
}
const small = (rcs, val) => {
    let res;
    const rows = rcs.rows || 5;
    const cols = rcs.cols || 5;
    if (val == null) {
        res = Math.min(rows, cols);
    }
    else {
        const min = Math.min(rows, cols);
        if (min === rcs.rows) {
            rcs.rows = val;
        }
        else {
            rcs.cols = val;
        }
    }
    return res;
};
const large = (rcs, val) => {
    let result;
    const usedRows = rcs.rows || 5;
    const usedCols = rcs.cols || 5;
    if (val == null) {
        result = Math.max(usedRows, usedCols);
    }
    else {
        const max = Math.max(usedRows, usedCols);
        if (max === rcs.rows) {
            rcs.rows = val;
        }
        else {
            rcs.cols = val;
        }
    }
    return result;
};
const used = (cellUsed, rc) => cellUsed[`c-${rc.row}-${rc.col}`] || false;
const use = (cellUsed, rc) => (cellUsed[`c-${rc.row}-${rc.col}`] = true);
const moveToNextCell = (rcs, rc) => {
    const cols = rcs.cols || 5;
    rc.col++;
    if (rc.col >= cols) {
        rc.col = 0;
        rc.row++;
    }
};
const getPos = (node, begin, cellWidth, cellHeight, id2manPos, rcs, rc, cellUsed) => {
    let x;
    let y;
    // see if we have a manual position set
    const rcPos = id2manPos[node.id];
    if (rcPos) {
        x = rcPos.col * cellWidth + cellWidth / 2 + begin[0];
        y = rcPos.row * cellHeight + cellHeight / 2 + begin[1];
    }
    else {
        // otherwise set automatically
        while (used(cellUsed, rc)) {
            moveToNextCell(rcs, rc);
        }
        x = rc.col * cellWidth + cellWidth / 2 + begin[0];
        y = rc.row * cellHeight + cellHeight / 2 + begin[1];
        use(cellUsed, rc);
        moveToNextCell(rcs, rc);
    }
    node.data.x = x;
    node.data.y = y;
};
//# sourceMappingURL=grid.js.map