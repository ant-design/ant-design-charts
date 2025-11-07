export class Grid {
    constructor(points, cellSize) {
        this._cells = [];
        this._cellSize = cellSize;
        this._reverseCellSize = 1 / cellSize;
        for (const point of points) {
            const x = this.coordToCellNum(point[0]);
            const y = this.coordToCellNum(point[1]);
            if (!this._cells[x]) {
                this._cells[x] = [];
            }
            if (!this._cells[x][y]) {
                this._cells[x][y] = [];
            }
            this._cells[x][y].push(point);
        }
    }
    cellPoints(x, y) {
        var _a;
        return ((_a = this._cells[x]) === null || _a === void 0 ? void 0 : _a[y]) || [];
    }
    rangePoints(bbox) {
        const tlCellX = this.coordToCellNum(bbox[0]);
        const tlCellY = this.coordToCellNum(bbox[1]);
        const brCellX = this.coordToCellNum(bbox[2]);
        const brCellY = this.coordToCellNum(bbox[3]);
        const points = [];
        for (let x = tlCellX; x <= brCellX; x++) {
            for (let y = tlCellY; y <= brCellY; y++) {
                const cell = this.cellPoints(x, y);
                for (const point of cell) {
                    points.push(point);
                }
            }
        }
        return points;
    }
    removePoint(point) {
        const cellX = this.coordToCellNum(point[0]);
        const cellY = this.coordToCellNum(point[1]);
        const cell = this._cells[cellX][cellY];
        const index = cell.findIndex(([px, py]) => px === point[0] && py === point[1]);
        if (index > -1) {
            cell.splice(index, 1);
        }
        return cell;
    }
    trunc(val) {
        return Math.trunc(val);
    }
    coordToCellNum(x) {
        return this.trunc(x * this._reverseCellSize);
    }
    extendBbox(bbox, scaleFactor) {
        return [
            bbox[0] - scaleFactor * this._cellSize,
            bbox[1] - scaleFactor * this._cellSize,
            bbox[2] + scaleFactor * this._cellSize,
            bbox[3] + scaleFactor * this._cellSize,
        ];
    }
}
export function grid(points, cellSize) {
    return new Grid(points, cellSize);
}
//# sourceMappingURL=grid_handle.js.map