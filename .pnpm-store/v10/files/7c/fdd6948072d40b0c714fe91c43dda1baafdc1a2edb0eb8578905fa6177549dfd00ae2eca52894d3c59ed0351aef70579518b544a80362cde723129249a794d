/**
 * bubblesets-js
 * https://github.com/upsetjs/bubblesets-js
 *
 * Copyright (c) 2021-2022 Samuel Gratzl <sam@sgratzl.com>
 */

function linePtSegDistSq(lx1, ly1, lx2, ly2, x, y) {
    const x1 = lx1;
    const y1 = ly1;
    const x2 = lx2 - x1;
    const y2 = ly2 - y1;
    let px = x - x1;
    let py = y - y1;
    let dotprod = px * x2 + py * y2;
    let projlenSq = 0;
    if (dotprod <= 0) {
        projlenSq = 0;
    }
    else {
        px = x2 - px;
        py = y2 - py;
        dotprod = px * x2 + py * y2;
        if (dotprod <= 0) {
            projlenSq = 0;
        }
        else {
            projlenSq = (dotprod * dotprod) / (x2 * x2 + y2 * y2);
        }
    }
    const lenSq = px * px + py * py - projlenSq;
    if (lenSq < 0) {
        return 0;
    }
    return lenSq;
}
function ptsDistanceSq(x1, y1, x2, y2) {
    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
}
function doublePointsEqual(x1, y1, x2, y2, delta) {
    return ptsDistanceSq(x1, y1, x2, y2) < delta * delta;
}
function round(digits) {
    if (!Number.isFinite(digits)) {
        return (v) => v;
    }
    if (digits === 0) {
        return Math.round;
    }
    const factor = Math.pow(10, digits);
    return (v) => Math.round(v * factor) / factor;
}

function lineBoundingBox(line) {
    const minX = Math.min(line.x1, line.x2);
    const maxX = Math.max(line.x1, line.x2);
    const minY = Math.min(line.y1, line.y2);
    const maxY = Math.max(line.y1, line.y2);
    return {
        x: minX,
        y: minY,
        x2: maxX,
        y2: maxY,
        width: maxX - minX,
        height: maxY - minY,
    };
}
class Line {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    equals(that) {
        return this.x1 === that.x1 && this.y1 === that.y1 && this.x2 === that.x2 && this.y2 === that.y2;
    }
    draw(ctx) {
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
    }
    toString() {
        return `Line(from=(${this.x1},${this.y1}),to=(${this.x2},${this.y2}))`;
    }
    static from(l) {
        return new Line(l.x1, l.y1, l.x2, l.y2);
    }
    cuts(px, py) {
        if (this.y1 === this.y2) {
            return false;
        }
        if ((py < this.y1 && py <= this.y2) || (py > this.y1 && py >= this.y2)) {
            return false;
        }
        if (px > this.x1 && px >= this.x2) {
            return false;
        }
        if (px < this.x1 && px <= this.x2) {
            return true;
        }
        const cross = this.x1 + ((py - this.y1) * (this.x2 - this.x1)) / (this.y2 - this.y1);
        return px <= cross;
    }
    distSquare(x, y) {
        return linePtSegDistSq(this.x1, this.y1, this.x2, this.y2, x, y);
    }
    ptClose(x, y, r) {
        if (this.x1 < this.x2) {
            if (x < this.x1 - r || x > this.x2 + r) {
                return false;
            }
        }
        else {
            if (x < this.x2 - r || x > this.x1 + r) {
                return false;
            }
        }
        if (this.y1 < this.y2) {
            if (y < this.y1 - r || y > this.y2 + r) {
                return false;
            }
        }
        else {
            if (y < this.y2 - r || y > this.y1 + r) {
                return false;
            }
        }
        return true;
    }
}

var EState;
(function (EState) {
    EState[EState["POINT"] = 1] = "POINT";
    EState[EState["PARALLEL"] = 2] = "PARALLEL";
    EState[EState["COINCIDENT"] = 3] = "COINCIDENT";
    EState[EState["NONE"] = 4] = "NONE";
})(EState || (EState = {}));
class Intersection {
    constructor(state, x = 0, y = 0) {
        this.state = state;
        this.x = x;
        this.y = y;
    }
}
function intersectLineLine(la, lb) {
    const uaT = (lb.x2 - lb.x1) * (la.y1 - lb.y1) - (lb.y2 - lb.y1) * (la.x1 - lb.x1);
    const ubT = (la.x2 - la.x1) * (la.y1 - lb.y1) - (la.y2 - la.y1) * (la.x1 - lb.x1);
    const uB = (lb.y2 - lb.y1) * (la.x2 - la.x1) - (lb.x2 - lb.x1) * (la.y2 - la.y1);
    if (uB) {
        const ua = uaT / uB;
        const ub = ubT / uB;
        if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
            return new Intersection(EState.POINT, la.x1 + ua * (la.x2 - la.x1), la.y1 + ua * (la.y2 - la.y1));
        }
        return new Intersection(EState.NONE);
    }
    return new Intersection(uaT === 0 || ubT === 0 ? EState.COINCIDENT : EState.PARALLEL);
}
function fractionAlongLineA(la, lb) {
    const uaT = (lb.x2 - lb.x1) * (la.y1 - lb.y1) - (lb.y2 - lb.y1) * (la.x1 - lb.x1);
    const ubT = (la.x2 - la.x1) * (la.y1 - lb.y1) - (la.y2 - la.y1) * (la.x1 - lb.x1);
    const uB = (lb.y2 - lb.y1) * (la.x2 - la.x1) - (lb.x2 - lb.x1) * (la.y2 - la.y1);
    if (uB) {
        const ua = uaT / uB;
        const ub = ubT / uB;
        if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
            return ua;
        }
    }
    return Number.POSITIVE_INFINITY;
}
function hasFractionToLineCenter(bounds, line) {
    function testLine(xa, ya, xb, yb) {
        let testDistance = fractionAlongLineA(line, new Line(xa, ya, xb, yb));
        testDistance = Math.abs(testDistance - 0.5);
        if (testDistance >= 0 && testDistance <= 1) {
            return 1;
        }
        return 0;
    }
    let countIntersections = testLine(bounds.x, bounds.y, bounds.x2, bounds.y);
    countIntersections += testLine(bounds.x, bounds.y, bounds.x, bounds.y2);
    if (countIntersections > 1) {
        return true;
    }
    countIntersections += testLine(bounds.x, bounds.y2, bounds.x2, bounds.y2);
    if (countIntersections > 1) {
        return true;
    }
    countIntersections += testLine(bounds.x2, bounds.y, bounds.x2, bounds.y2);
    return countIntersections > 0;
}
var OutCode;
(function (OutCode) {
    OutCode[OutCode["LEFT"] = 0] = "LEFT";
    OutCode[OutCode["TOP"] = 1] = "TOP";
    OutCode[OutCode["RIGHT"] = 2] = "RIGHT";
    OutCode[OutCode["BOTTOM"] = 3] = "BOTTOM";
})(OutCode || (OutCode = {}));
function outcode(bounds, px, py) {
    const out = new Set();
    if (bounds.width <= 0) {
        out.add(OutCode.LEFT);
        out.add(OutCode.RIGHT);
    }
    else if (px < bounds.x) {
        out.add(OutCode.LEFT);
    }
    else if (px > bounds.x + bounds.width) {
        out.add(OutCode.RIGHT);
    }
    if (bounds.height <= 0) {
        out.add(OutCode.TOP);
        out.add(OutCode.BOTTOM);
    }
    else if (py < bounds.y) {
        out.add(OutCode.TOP);
    }
    else if (py > bounds.y + bounds.height) {
        out.add(OutCode.BOTTOM);
    }
    return out;
}
function intersectsLine(bounds, line) {
    let x1 = line.x1;
    let y1 = line.y1;
    const x2 = line.x2;
    const y2 = line.y2;
    const out2 = Array.from(outcode(bounds, x2, y2));
    if (out2.length === 0) {
        return true;
    }
    let out1 = outcode(bounds, x1, y1);
    while (out1.size !== 0) {
        for (const a of out2) {
            if (out1.has(a)) {
                return false;
            }
        }
        if (out1.has(OutCode.RIGHT) || out1.has(OutCode.LEFT)) {
            let x = bounds.x;
            if (out1.has(OutCode.RIGHT)) {
                x += bounds.width;
            }
            y1 = y1 + ((x - x1) * (y2 - y1)) / (x2 - x1);
            x1 = x;
        }
        else {
            let y = bounds.y;
            if (out1.has(OutCode.BOTTOM)) {
                y += bounds.height;
            }
            x1 = x1 + ((y - y1) * (x2 - x1)) / (y2 - y1);
            y1 = y;
        }
        out1 = outcode(bounds, x1, y1);
    }
    return true;
}
function fractionToLineCenter(bounds, line) {
    let minDistance = Number.POSITIVE_INFINITY;
    let countIntersections = 0;
    function testLine(xa, ya, xb, yb) {
        let testDistance = fractionAlongLineA(line, new Line(xa, ya, xb, yb));
        testDistance = Math.abs(testDistance - 0.5);
        if (testDistance >= 0 && testDistance <= 1) {
            countIntersections++;
            if (testDistance < minDistance) {
                minDistance = testDistance;
            }
        }
    }
    testLine(bounds.x, bounds.y, bounds.x2, bounds.y);
    testLine(bounds.x, bounds.y, bounds.x, bounds.y2);
    if (countIntersections > 1) {
        return minDistance;
    }
    testLine(bounds.x, bounds.y2, bounds.x2, bounds.y2);
    if (countIntersections > 1) {
        return minDistance;
    }
    testLine(bounds.x2, bounds.y, bounds.x2, bounds.y2);
    if (countIntersections === 0) {
        return -1;
    }
    return minDistance;
}
function testIntersection(line, bounds) {
    let count = 0;
    const top = intersectLineLine(line, new Line(bounds.x, bounds.y, bounds.x2, bounds.y));
    count += top.state === EState.POINT ? 1 : 0;
    const left = intersectLineLine(line, new Line(bounds.x, bounds.y, bounds.x, bounds.y2));
    count += left.state === EState.POINT ? 1 : 0;
    const bottom = intersectLineLine(line, new Line(bounds.x, bounds.y2, bounds.x2, bounds.y2));
    count += bottom.state === EState.POINT ? 1 : 0;
    const right = intersectLineLine(line, new Line(bounds.x2, bounds.y, bounds.x2, bounds.y2));
    count += right.state === EState.POINT ? 1 : 0;
    return { top, left, bottom, right, count };
}

class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    get x2() {
        return this.x + this.width;
    }
    get y2() {
        return this.y + this.height;
    }
    get cx() {
        return this.x + this.width / 2;
    }
    get cy() {
        return this.y + this.height / 2;
    }
    get radius() {
        return Math.max(this.width, this.height) / 2;
    }
    static from(r) {
        return new Rectangle(r.x, r.y, r.width, r.height);
    }
    equals(that) {
        return this.x === that.x && this.y === that.y && this.width === that.width && this.height === that.height;
    }
    clone() {
        return new Rectangle(this.x, this.y, this.width, this.height);
    }
    add(that) {
        const x = Math.min(this.x, that.x);
        const y = Math.min(this.y, that.y);
        const x2 = Math.max(this.x2, that.x + that.width);
        const y2 = Math.max(this.y2, that.y + that.height);
        this.x = x;
        this.y = y;
        this.width = x2 - x;
        this.height = y2 - y;
    }
    addPoint(p) {
        const x = Math.min(this.x, p.x);
        const y = Math.min(this.y, p.y);
        const x2 = Math.max(this.x2, p.x);
        const y2 = Math.max(this.y2, p.y);
        this.x = x;
        this.y = y;
        this.width = x2 - x;
        this.height = y2 - y;
    }
    toString() {
        return `Rectangle[x=${this.x}, y=${this.y}, w=${this.width}, h=${this.height}]`;
    }
    draw(ctx) {
        ctx.rect(this.x, this.y, this.width, this.height);
    }
    containsPt(px, py) {
        return px >= this.x && px <= this.x2 && py >= this.y && py <= this.y2;
    }
    get area() {
        return this.width * this.height;
    }
    intersects(that) {
        if (this.area <= 0 || that.width <= 0 || that.height <= 0) {
            return false;
        }
        return that.x + that.width > this.x && that.y + that.height > this.y && that.x < this.x2 && that.y < this.y2;
    }
    distSquare(tempX, tempY) {
        if (this.containsPt(tempX, tempY)) {
            return 0;
        }
        const code = outcode(this, tempX, tempY);
        if (code.has(OutCode.TOP)) {
            if (code.has(OutCode.LEFT)) {
                return ptsDistanceSq(tempX, tempY, this.x, this.y);
            }
            if (code.has(OutCode.RIGHT)) {
                return ptsDistanceSq(tempX, tempY, this.x2, this.y);
            }
            return (this.y - tempY) * (this.y - tempY);
        }
        if (code.has(OutCode.BOTTOM)) {
            if (code.has(OutCode.LEFT)) {
                return ptsDistanceSq(tempX, tempY, this.x, this.y2);
            }
            if (code.has(OutCode.RIGHT)) {
                return ptsDistanceSq(tempX, tempY, this.x2, this.y2);
            }
            return (tempY - this.y2) * (tempY - this.y2);
        }
        if (code.has(OutCode.LEFT)) {
            return (this.x - tempX) * (this.x - tempX);
        }
        if (code.has(OutCode.RIGHT)) {
            return (tempX - this.x2) * (tempX - this.x2);
        }
        return 0;
    }
}
function boundingBox(path) {
    if (path.length === 0) {
        return null;
    }
    const first = path[0];
    const bb = new Rectangle(first.x, first.y, 0, 0);
    for (const point of path) {
        bb.addPoint(point);
    }
    return bb;
}

class Circle {
    constructor(cx, cy, radius) {
        this.cx = cx;
        this.cy = cy;
        this.radius = radius;
    }
    get x() {
        return this.cx - this.radius;
    }
    get x2() {
        return this.cx + this.radius;
    }
    get width() {
        return this.radius * 2;
    }
    get y() {
        return this.cy - this.radius;
    }
    get y2() {
        return this.cy + this.radius;
    }
    get height() {
        return this.radius * 2;
    }
    static from(r) {
        return new Circle(r.cx, r.cy, r.radius);
    }
    containsPt(x, y) {
        return ptsDistanceSq(this.cx, this.cy, x, y) < this.radius * this.radius;
    }
    distSquare(tempX, tempY) {
        const dist = ptsDistanceSq(this.cx, this.cy, tempX, tempY);
        if (dist < this.radius * this.radius) {
            return 0;
        }
        const offset = Math.sqrt(dist) - this.radius;
        return offset * offset;
    }
    draw(ctx) {
        ctx.ellipse(this.cx, this.cy, this.radius, this.radius, 0, 0, Math.PI * 2);
    }
}

class Area {
    constructor(pixelGroup, i = 0, j = 0, pixelX = 0, pixelY = 0, width = 10, height = 10, pixels = new Float32Array(Math.max(0, width * height)).fill(0)) {
        this.pixelGroup = pixelGroup;
        this.i = i;
        this.j = j;
        this.pixelX = pixelX;
        this.pixelY = pixelY;
        this.width = width;
        this.height = height;
        this.area = pixels;
    }
    createSub(rect, pixelPos) {
        return new Area(this.pixelGroup, rect.x, rect.y, pixelPos.x, pixelPos.y, rect.width, rect.height);
    }
    static fromPixelRegion(pixelRect, pixelGroup) {
        return new Area(pixelGroup, 0, 0, pixelRect.x, pixelRect.y, Math.ceil(pixelRect.width / pixelGroup), Math.ceil(pixelRect.height / pixelGroup));
    }
    copy(sub, pixelPoint) {
        return new Area(this.pixelGroup, this.scaleX(pixelPoint.x), this.scaleY(pixelPoint.y), pixelPoint.x, pixelPoint.y, sub.width, sub.height, sub.area);
    }
    boundX(pos) {
        if (pos < this.i) {
            return this.i;
        }
        if (pos >= this.width) {
            return this.width - 1;
        }
        return pos;
    }
    boundY(pos) {
        if (pos < this.j) {
            return this.j;
        }
        if (pos >= this.height) {
            return this.height - 1;
        }
        return pos;
    }
    scaleX(pixel) {
        return this.boundX(Math.floor((pixel - this.pixelX) / this.pixelGroup));
    }
    scaleY(pixel) {
        return this.boundY(Math.floor((pixel - this.pixelY) / this.pixelGroup));
    }
    scale(pixelRect) {
        const x = this.scaleX(pixelRect.x);
        const y = this.scaleY(pixelRect.y);
        const x2 = this.boundX(Math.ceil((pixelRect.x + pixelRect.width - this.pixelX) / this.pixelGroup));
        const y2 = this.boundY(Math.ceil((pixelRect.y + pixelRect.height - this.pixelY) / this.pixelGroup));
        const width = x2 - x;
        const height = y2 - y;
        return new Rectangle(x, y, width, height);
    }
    invertScaleX(v) {
        return Math.round(v * this.pixelGroup + this.pixelX);
    }
    invertScaleY(v) {
        return Math.round(v * this.pixelGroup + this.pixelY);
    }
    addPadding(rect, pixelPadding) {
        const padding = Math.ceil(pixelPadding / this.pixelGroup);
        const x = this.boundX(rect.x - padding);
        const y = this.boundY(rect.y - padding);
        const x2 = this.boundX(rect.x2 + padding);
        const y2 = this.boundY(rect.y2 + padding);
        const width = x2 - x;
        const height = y2 - y;
        return new Rectangle(x, y, width, height);
    }
    get(i, j) {
        if (i < 0 || j < 0 || i >= this.width || j >= this.height) {
            return Number.NaN;
        }
        return this.area[i + j * this.width];
    }
    inc(i, j, v) {
        if (i < 0 || j < 0 || i >= this.width || j >= this.height) {
            return;
        }
        this.area[i + j * this.width] += v;
    }
    set(i, j, v) {
        if (i < 0 || j < 0 || i >= this.width || j >= this.height) {
            return;
        }
        this.area[i + j * this.width] = v;
    }
    incArea(sub, factor) {
        if (sub.width <= 0 || sub.height <= 0 || factor === 0) {
            return;
        }
        const w = this.width;
        const aw = sub.width;
        const i1 = Math.max(0, sub.i);
        const j1 = Math.max(0, sub.j);
        const i2 = Math.min(sub.i + sub.width, w);
        const j2 = Math.min(sub.j + sub.height, this.height);
        if (j2 <= 0 || i2 <= 0 || i1 >= w || j2 >= this.height) {
            return;
        }
        for (let j = j1; j < j2; j++) {
            const subRow = (j - sub.j) * aw;
            const row = j * w;
            for (let i = i1; i < i2; i++) {
                const v = sub.area[i - sub.i + subRow];
                if (v === 0) {
                    continue;
                }
                this.area[i + row] += factor * v;
            }
        }
    }
    fill(value) {
        this.area.fill(value);
    }
    fillArea(rect, value) {
        const offset = rect.x + rect.y * this.width;
        for (let j = 0; j < rect.height; j++) {
            const pos = offset + j * this.width;
            this.area.fill(value, pos, pos + rect.width);
        }
    }
    fillHorizontalLine(i, j, width, value) {
        const offset = i + j * this.width;
        this.area.fill(value, offset, offset + width);
    }
    fillVerticalLine(i, j, height, value) {
        const offset = i + j * this.width;
        for (let k = 0; k < height; k++) {
            this.area[offset + k * this.width] = value;
        }
    }
    clear() {
        this.area.fill(0);
    }
    toString() {
        let r = '';
        for (let j = 0; j < this.height; j++) {
            const row = j * this.width;
            for (let i = 0; i < this.width; i++) {
                const v = this.area[row + i];
                r += v.toFixed(1).padStart(6);
                r += ' ';
            }
            r += '\n';
        }
        return r;
    }
    draw(ctx, offset = true) {
        if (this.width <= 0 || this.height <= 0) {
            return;
        }
        ctx.save();
        if (offset) {
            ctx.translate(this.pixelX, this.pixelY);
        }
        const min = this.area.reduce((acc, v) => Math.min(acc, v), Number.POSITIVE_INFINITY);
        const max = this.area.reduce((acc, v) => Math.max(acc, v), Number.NEGATIVE_INFINITY);
        const scale = (v) => (v - min) / (max - min);
        ctx.scale(this.pixelGroup, this.pixelGroup);
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                const v = this.area[i + j * this.width];
                ctx.fillStyle = `rgba(0, 0, 0, ${scale(v)})`;
                ctx.fillRect(i, j, 1, 1);
            }
        }
        ctx.restore();
    }
    drawThreshold(ctx, threshold, offset = true) {
        if (this.width <= 0 || this.height <= 0) {
            return;
        }
        ctx.save();
        if (offset) {
            ctx.translate(this.pixelX, this.pixelY);
        }
        ctx.scale(this.pixelGroup, this.pixelGroup);
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                const v = this.area[i + j * this.width];
                ctx.fillStyle = v > threshold ? 'black' : 'white';
                ctx.fillRect(i, j, 1, 1);
            }
        }
        ctx.restore();
    }
}

function addPadding(rect, padding) {
    const map = (r) => ({
        x: r.x - padding,
        y: r.y - padding,
        width: r.width + 2 * padding,
        height: r.height + 2 * padding,
    });
    if (Array.isArray(rect)) {
        return rect.map(map);
    }
    return map(rect);
}

function createLineInfluenceArea(line, potentialArea, padding) {
    return createGenericInfluenceArea(Object.assign(lineBoundingBox(line), {
        distSquare: (x, y) => linePtSegDistSq(line.x1, line.y1, line.x2, line.y2, x, y),
    }), potentialArea, padding);
}
function createGenericInfluenceArea(shape, potentialArea, padding) {
    const lr = addPadding(shape, padding);
    const scaled = potentialArea.scale(lr);
    const area = potentialArea.createSub(scaled, lr);
    sample(area, potentialArea, padding, (x, y) => shape.distSquare(x, y));
    return area;
}
function sample(area, potentialArea, padding, distanceFunction) {
    const padding2 = padding * padding;
    for (let y = 0; y < area.height; y++) {
        for (let x = 0; x < area.width; x++) {
            const tempX = potentialArea.invertScaleX(area.i + x);
            const tempY = potentialArea.invertScaleY(area.j + y);
            const distanceSq = distanceFunction(tempX, tempY);
            if (distanceSq === 0) {
                area.set(x, y, padding2);
                continue;
            }
            if (distanceSq < padding2) {
                const dr = padding - Math.sqrt(distanceSq);
                area.set(x, y, dr * dr);
            }
        }
    }
    return area;
}
function createRectangleInfluenceArea(rect, potentialArea, padding) {
    const scaled = potentialArea.scale(rect);
    const padded = potentialArea.addPadding(scaled, padding);
    const area = potentialArea.createSub(padded, { x: rect.x - padding, y: rect.y - padding });
    const paddingLeft = scaled.x - padded.x;
    const paddingTop = scaled.y - padded.y;
    const paddingRight = padded.x2 - scaled.x2;
    const paddingBottom = padded.y2 - scaled.y2;
    const innerWidth = padded.width - paddingLeft - paddingRight;
    const innerHeight = padded.height - paddingTop - paddingBottom;
    const padding2 = padding * padding;
    area.fillArea({
        x: paddingLeft,
        y: paddingTop,
        width: innerWidth + 1,
        height: innerHeight + 1,
    }, padding2);
    const straightDistances = [0];
    const maxPadding = Math.max(paddingTop, paddingLeft, paddingRight, paddingBottom);
    {
        const tempX = potentialArea.invertScaleX(scaled.x + scaled.width / 2);
        for (let i = 1; i < maxPadding; i++) {
            const tempY = potentialArea.invertScaleY(scaled.y - i);
            const distanceSq = rect.distSquare(tempX, tempY);
            if (distanceSq < padding2) {
                const dr = padding - Math.sqrt(distanceSq);
                straightDistances.push(dr * dr);
            }
            else {
                break;
            }
        }
    }
    const cornerDistances = [];
    const maxHorizontalPadding = Math.max(paddingLeft, paddingRight);
    const maxVerticalPadding = Math.max(paddingTop, paddingRight);
    for (let i = 1; i < maxHorizontalPadding; i++) {
        const tempX = potentialArea.invertScaleX(scaled.x - i);
        const row = [];
        for (let j = 1; j < maxVerticalPadding; j++) {
            const tempY = potentialArea.invertScaleY(scaled.y - j);
            const distanceSq = rect.distSquare(tempX, tempY);
            if (distanceSq < padding2) {
                const dr = padding - Math.sqrt(distanceSq);
                row.push(dr * dr);
            }
            else {
                row.push(0);
            }
        }
        cornerDistances.push(row);
    }
    for (let y = 1; y < Math.min(paddingTop, straightDistances.length); y++) {
        const value = straightDistances[y];
        area.fillHorizontalLine(paddingLeft, paddingTop - y, innerWidth + 1, value);
    }
    for (let y = 1; y < Math.min(paddingBottom, straightDistances.length); y++) {
        const value = straightDistances[y];
        area.fillHorizontalLine(paddingLeft, paddingTop + innerHeight + y, innerWidth + 1, value);
    }
    for (let x = 1; x < Math.min(paddingLeft, straightDistances.length); x++) {
        const value = straightDistances[x];
        area.fillVerticalLine(paddingLeft - x, paddingTop, innerHeight + 1, value);
    }
    for (let x = 1; x < Math.min(paddingBottom, straightDistances.length); x++) {
        const value = straightDistances[x];
        area.fillVerticalLine(paddingLeft + innerWidth + x, paddingTop, innerHeight + 1, value);
    }
    for (let i = 1; i < paddingLeft; i++) {
        const row = cornerDistances[i - 1];
        const ii = paddingLeft - i;
        for (let j = 1; j < paddingTop; j++) {
            area.set(ii, paddingTop - j, row[j - 1]);
        }
        for (let j = 1; j < paddingBottom; j++) {
            area.set(ii, paddingTop + innerHeight + j, row[j - 1]);
        }
    }
    for (let i = 1; i < paddingRight; i++) {
        const row = cornerDistances[i - 1];
        const ii = paddingLeft + innerWidth + i;
        for (let j = 1; j < paddingTop; j++) {
            area.set(ii, paddingTop - j, row[j - 1]);
        }
        for (let j = 1; j < paddingBottom; j++) {
            area.set(ii, paddingTop + innerHeight + j, row[j - 1]);
        }
    }
    return area;
}

function rect(x, y, width, height) {
    return { x, y, width, height };
}
function circle(cx, cy, radius) {
    return { cx, cy, radius };
}
function line(x1, y1, x2, y2) {
    return { x1, y1, x2, y2 };
}
function point(x, y) {
    return { x, y };
}

function calculateVirtualEdges(items, nonMembers, maxRoutingIterations, morphBuffer) {
    if (items.length === 0) {
        return [];
    }
    const sorted = sortByDistanceToCentroid(items);
    return sorted
        .map((d, i) => {
        const visited = sorted.slice(0, i);
        return connectItem(nonMembers, d, visited, maxRoutingIterations, morphBuffer);
    })
        .flat();
}
function connectItem(nonMembers, item, visited, maxRoutingIterations, morphBuffer) {
    const itemCenter = point(item.cx, item.cy);
    const closestNeighbor = calculateClosestNeighbor(itemCenter, visited, nonMembers);
    if (closestNeighbor == null) {
        return [];
    }
    const directLine = new Line(itemCenter.x, itemCenter.y, closestNeighbor.cx, closestNeighbor.cy);
    const scannedLines = computeRoute(directLine, nonMembers, maxRoutingIterations, morphBuffer);
    return mergeLines(scannedLines, nonMembers);
}
function computeRoute(directLine, nonMembers, maxRoutingIterations, morphBuffer) {
    const scannedLines = [];
    const linesToCheck = [];
    linesToCheck.push(directLine);
    let hasIntersection = true;
    for (let iterations = 0; iterations < maxRoutingIterations && hasIntersection; iterations++) {
        hasIntersection = false;
        while (!hasIntersection && linesToCheck.length > 0) {
            const line = linesToCheck.pop();
            const closestItem = getCenterItem(nonMembers, line);
            const intersections = closestItem ? testIntersection(line, closestItem) : null;
            if (!closestItem || !intersections || intersections.count !== 2) {
                if (!hasIntersection) {
                    scannedLines.push(line);
                }
                continue;
            }
            let tempMorphBuffer = morphBuffer;
            let movePoint = rerouteLine(closestItem, tempMorphBuffer, intersections, true);
            let foundFirst = pointExists(movePoint, linesToCheck) || pointExists(movePoint, scannedLines);
            let pointInside = isPointInRectangles(movePoint, nonMembers);
            while (!foundFirst && pointInside && tempMorphBuffer >= 1) {
                tempMorphBuffer /= 1.5;
                movePoint = rerouteLine(closestItem, tempMorphBuffer, intersections, true);
                foundFirst = pointExists(movePoint, linesToCheck) || pointExists(movePoint, scannedLines);
                pointInside = isPointInRectangles(movePoint, nonMembers);
            }
            if (movePoint && !foundFirst && !pointInside) {
                linesToCheck.push(new Line(line.x1, line.y1, movePoint.x, movePoint.y));
                linesToCheck.push(new Line(movePoint.x, movePoint.y, line.x2, line.y2));
                hasIntersection = true;
            }
            if (hasIntersection) {
                continue;
            }
            tempMorphBuffer = morphBuffer;
            movePoint = rerouteLine(closestItem, tempMorphBuffer, intersections, false);
            let foundSecond = pointExists(movePoint, linesToCheck) || pointExists(movePoint, scannedLines);
            pointInside = isPointInRectangles(movePoint, nonMembers);
            while (!foundSecond && pointInside && tempMorphBuffer >= 1) {
                tempMorphBuffer /= 1.5;
                movePoint = rerouteLine(closestItem, tempMorphBuffer, intersections, false);
                foundSecond = pointExists(movePoint, linesToCheck) || pointExists(movePoint, scannedLines);
                pointInside = isPointInRectangles(movePoint, nonMembers);
            }
            if (movePoint && !foundSecond) {
                linesToCheck.push(new Line(line.x1, line.y1, movePoint.x, movePoint.y));
                linesToCheck.push(new Line(movePoint.x, movePoint.y, line.x2, line.y2));
                hasIntersection = true;
            }
            if (!hasIntersection) {
                scannedLines.push(line);
            }
        }
    }
    while (linesToCheck.length > 0) {
        scannedLines.push(linesToCheck.pop());
    }
    return scannedLines;
}
function mergeLines(scannedLines, nonMembers) {
    const finalRoute = [];
    while (scannedLines.length > 0) {
        const line1 = scannedLines.pop();
        if (scannedLines.length === 0) {
            finalRoute.push(line1);
            break;
        }
        const line2 = scannedLines.pop();
        const mergeLine = new Line(line1.x1, line1.y1, line2.x2, line2.y2);
        const closestItem = getCenterItem(nonMembers, mergeLine);
        if (!closestItem) {
            scannedLines.push(mergeLine);
        }
        else {
            finalRoute.push(line1);
            scannedLines.push(line2);
        }
    }
    return finalRoute;
}
function calculateClosestNeighbor(itemCenter, visited, nonMembers) {
    let minLengthSq = Number.POSITIVE_INFINITY;
    return visited.reduce((closestNeighbor, neighborItem) => {
        const distanceSq = ptsDistanceSq(itemCenter.x, itemCenter.y, neighborItem.cx, neighborItem.cy);
        if (distanceSq > minLengthSq) {
            return closestNeighbor;
        }
        const directLine = new Line(itemCenter.x, itemCenter.y, neighborItem.cx, neighborItem.cy);
        const numberInterferenceItems = itemsCuttingLine(nonMembers, directLine);
        if (distanceSq * (numberInterferenceItems + 1) * (numberInterferenceItems + 1) < minLengthSq) {
            closestNeighbor = neighborItem;
            minLengthSq = distanceSq * (numberInterferenceItems + 1) * (numberInterferenceItems + 1);
        }
        return closestNeighbor;
    }, null);
}
function sortByDistanceToCentroid(items) {
    if (items.length < 2) {
        return items;
    }
    let totalX = 0;
    let totalY = 0;
    items.forEach((item) => {
        totalX += item.cx;
        totalY += item.cy;
    });
    totalX /= items.length;
    totalY /= items.length;
    return items
        .map((item) => {
        const diffX = totalX - item.cx;
        const diffY = totalY - item.cy;
        const dist = diffX * diffX + diffY * diffY;
        return [item, dist];
    })
        .sort((a, b) => a[1] - b[1])
        .map((d) => d[0]);
}
function isPointInRectangles(p, rects) {
    return rects.some((r) => r.containsPt(p.x, p.y));
}
function pointExists(pointToCheck, lines) {
    return lines.some((checkEndPointsLine) => {
        if (doublePointsEqual(checkEndPointsLine.x1, checkEndPointsLine.y1, pointToCheck.x, pointToCheck.y, 1e-3)) {
            return true;
        }
        if (doublePointsEqual(checkEndPointsLine.x2, checkEndPointsLine.y2, pointToCheck.x, pointToCheck.y, 1e-3)) {
            return true;
        }
        return false;
    });
}
function getCenterItem(items, testLine) {
    let minDistance = Number.POSITIVE_INFINITY;
    let closestItem = null;
    for (const item of items) {
        if (!intersectsLine(item, testLine)) {
            continue;
        }
        const distance = fractionToLineCenter(item, testLine);
        if (distance >= 0 && distance < minDistance) {
            closestItem = item;
            minDistance = distance;
        }
    }
    return closestItem;
}
function itemsCuttingLine(items, testLine) {
    return items.reduce((count, item) => {
        if (intersectsLine(item, testLine) && hasFractionToLineCenter(item, testLine)) {
            return count + 1;
        }
        return count;
    }, 0);
}
function rerouteLine(item, rerouteBuffer, intersections, wrapNormal) {
    const topIntersect = intersections.top;
    const leftIntersect = intersections.left;
    const bottomIntersect = intersections.bottom;
    const rightIntersect = intersections.right;
    if (wrapNormal) {
        if (leftIntersect.state === EState.POINT) {
            if (topIntersect.state === EState.POINT)
                return point(item.x - rerouteBuffer, item.y - rerouteBuffer);
            if (bottomIntersect.state === EState.POINT)
                return point(item.x - rerouteBuffer, item.y2 + rerouteBuffer);
            const totalArea = item.width * item.height;
            const topArea = item.width * ((leftIntersect.y - item.y + (rightIntersect.y - item.y)) * 0.5);
            if (topArea < totalArea * 0.5) {
                if (leftIntersect.y > rightIntersect.y)
                    return point(item.x - rerouteBuffer, item.y - rerouteBuffer);
                return point(item.x2 + rerouteBuffer, item.y - rerouteBuffer);
            }
            if (leftIntersect.y < rightIntersect.y)
                return point(item.x - rerouteBuffer, item.y2 + rerouteBuffer);
            return point(item.x2 + rerouteBuffer, item.y2 + rerouteBuffer);
        }
        if (rightIntersect.state === EState.POINT) {
            if (topIntersect.state === EState.POINT)
                return point(item.x2 + rerouteBuffer, item.y - rerouteBuffer);
            if (bottomIntersect.state === EState.POINT)
                return point(item.x2 + rerouteBuffer, item.y2 + rerouteBuffer);
        }
        const totalArea = item.height * item.width;
        const leftArea = item.height * ((topIntersect.x - item.x + (rightIntersect.x - item.x)) * 0.5);
        if (leftArea < totalArea * 0.5) {
            if (topIntersect.x > bottomIntersect.x)
                return point(item.x - rerouteBuffer, item.y - rerouteBuffer);
            return point(item.x - rerouteBuffer, item.y2 + rerouteBuffer);
        }
        if (topIntersect.x < bottomIntersect.x)
            return point(item.x2 + rerouteBuffer, item.y - rerouteBuffer);
        return point(item.x2 + rerouteBuffer, item.y2 + rerouteBuffer);
    }
    if (leftIntersect.state === EState.POINT) {
        if (topIntersect.state === EState.POINT)
            return point(item.x2 + rerouteBuffer, item.y2 + rerouteBuffer);
        if (bottomIntersect.state === EState.POINT)
            return point(item.x2 + rerouteBuffer, item.y - rerouteBuffer);
        const totalArea = item.height * item.width;
        const topArea = item.width * ((leftIntersect.y - item.y + (rightIntersect.y - item.y)) * 0.5);
        if (topArea < totalArea * 0.5) {
            if (leftIntersect.y > rightIntersect.y)
                return point(item.x2 + rerouteBuffer, item.y2 + rerouteBuffer);
            return point(item.x - rerouteBuffer, item.y2 + rerouteBuffer);
        }
        if (leftIntersect.y < rightIntersect.y)
            return point(item.x2 + rerouteBuffer, item.y - rerouteBuffer);
        return point(item.x - rerouteBuffer, item.y - rerouteBuffer);
    }
    if (rightIntersect.state === EState.POINT) {
        if (topIntersect.state === EState.POINT)
            return point(item.x - rerouteBuffer, item.y2 + rerouteBuffer);
        if (bottomIntersect.state === EState.POINT)
            return point(item.x - rerouteBuffer, item.y - rerouteBuffer);
    }
    const totalArea = item.height * item.width;
    const leftArea = item.height * ((topIntersect.x - item.x + (rightIntersect.x - item.x)) * 0.5);
    if (leftArea < totalArea * 0.5) {
        if (topIntersect.x > bottomIntersect.x)
            return point(item.x2 + rerouteBuffer, item.y2 + rerouteBuffer);
        return point(item.x2 + rerouteBuffer, item.y - rerouteBuffer);
    }
    if (topIntersect.x < bottomIntersect.x)
        return point(item.x - rerouteBuffer, item.y2 + rerouteBuffer);
    return point(item.x - rerouteBuffer, item.y - rerouteBuffer);
}

function canTakeNext(path, start, end, toleranceSquared) {
    const validEnd = path.closed ? end < path.length : end < path.length - 1;
    if (!validEnd) {
        return false;
    }
    const s = path.get(start);
    const e = path.get(end + 1);
    for (let index = start + 1; index <= end; index++) {
        const p = path.get(index);
        const len = linePtSegDistSq(s.x, s.y, e.x, e.y, p.x, p.y);
        if (len > toleranceSquared) {
            return false;
        }
    }
    return true;
}
function shapeSimplifier(tolerance = 0.0) {
    return (path) => {
        if (tolerance < 0 || path.length < 3) {
            return path;
        }
        const points = [];
        let start = 0;
        const toleranceSquared = tolerance * tolerance;
        while (start < path.length) {
            let end = start + 1;
            while (canTakeNext(path, start, end, toleranceSquared)) {
                end++;
            }
            points.push(path.get(start));
            start = end;
        }
        return new PointPath(points);
    };
}

function basicFunction(i, t) {
    switch (i) {
        case -2:
            return (((-t + 3.0) * t - 3.0) * t + 1.0) / 6.0;
        case -1:
            return ((3.0 * t - 6.0) * t * t + 4.0) / 6.0;
        case 0:
            return (((-3.0 * t + 3.0) * t + 3.0) * t + 1.0) / 6.0;
        case 1:
            return (t * t * t) / 6.0;
        default:
            throw new Error('unknown error');
    }
}
function bSplineShapeGenerator(granularity = 6.0) {
    const ORDER = 3;
    const START_INDEX = ORDER - 1;
    const REL_END = 1;
    const REL_START = REL_END - ORDER;
    function calcPoint(path, i, t) {
        let px = 0.0;
        let py = 0.0;
        for (let j = REL_START; j <= REL_END; j++) {
            const p = path.get(i + j);
            const bf = basicFunction(j, t);
            px += bf * p.x;
            py += bf * p.y;
        }
        return { x: px, y: py };
    }
    return (path) => {
        if (path.length < 3) {
            return path;
        }
        const res = [];
        const closed = path.closed;
        const count = path.length + ORDER - 1 + (closed ? 0 : 2);
        res.push(calcPoint(path, START_INDEX - (closed ? 0 : 2), 0));
        for (let ix = START_INDEX - (closed ? 0 : 2); ix < count; ix++) {
            for (let k = 1; k <= granularity; k++) {
                res.push(calcPoint(path, ix, k / granularity));
            }
        }
        return new PointPath(res);
    };
}

function samplePath(skip = 8) {
    return (path) => {
        let actSkip = skip;
        let size = path.length;
        if (actSkip > 1) {
            size = Math.floor(path.length / actSkip);
            while (size < 3 && actSkip > 1) {
                actSkip -= 1;
                size = Math.floor(path.length / actSkip);
            }
        }
        const finalHull = [];
        for (let i = 0, j = 0; j < size; j++, i += actSkip) {
            finalHull.push(path.get(i));
        }
        return new PointPath(finalHull);
    };
}

class PointPath {
    constructor(points = [], closed = true) {
        this.points = points;
        this.closed = closed;
    }
    get(index) {
        const i = index;
        const l = this.points.length;
        if (index < 0) {
            return this.closed ? this.get(index + l) : this.points[0];
        }
        else if (index >= l) {
            return this.closed ? this.get(index - l) : this.points[l - 1];
        }
        return this.points[i];
    }
    get length() {
        return this.points.length;
    }
    toString(roundToDigits = Infinity) {
        const points = this.points;
        if (points.length === 0) {
            return '';
        }
        const rounder = typeof roundToDigits === 'function' ? roundToDigits : round(roundToDigits);
        let r = 'M';
        for (const p of points) {
            r += `${rounder(p.x)},${rounder(p.y)} L`;
        }
        r = r.slice(0, -1);
        if (this.closed) {
            r += ' Z';
        }
        return r;
    }
    draw(ctx) {
        const points = this.points;
        if (points.length === 0) {
            return;
        }
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (const p of points) {
            ctx.lineTo(p.x, p.y);
        }
        if (this.closed) {
            ctx.closePath();
        }
    }
    sample(skip) {
        return samplePath(skip)(this);
    }
    simplify(tolerance) {
        return shapeSimplifier(tolerance)(this);
    }
    bSplines(granularity) {
        return bSplineShapeGenerator(granularity)(this);
    }
    apply(transformer) {
        return transformer(this);
    }
    containsElements(members) {
        const bb = boundingBox(this.points);
        if (!bb) {
            return false;
        }
        return members.every((member) => {
            return bb.containsPt(member.cx, member.cy) && this.withinArea(member.cx, member.cy);
        });
    }
    withinArea(px, py) {
        if (this.length === 0) {
            return false;
        }
        let crossings = 0;
        const first = this.points[0];
        const line = new Line(first.x, first.y, first.x, first.y);
        for (let i = 1; i < this.points.length; i++) {
            const cur = this.points[i];
            line.x1 = line.x2;
            line.y1 = line.y2;
            line.x2 = cur.x;
            line.y2 = cur.y;
            if (line.cuts(px, py)) {
                crossings++;
            }
        }
        line.x1 = line.x2;
        line.y1 = line.y2;
        line.x2 = first.x;
        line.y2 = first.y;
        if (line.cuts(px, py)) {
            crossings++;
        }
        return crossings % 2 === 1;
    }
}

class PointList {
    constructor(size = 0) {
        this.count = 0;
        this.arr = [];
        this.set = new Set();
        this.arr.length = size;
    }
    add(p) {
        this.set.add(`${p.x}x${p.y}`);
        this.arr[this.count++] = p;
    }
    contains(p) {
        return this.set.has(`${p.x}x${p.y}`);
    }
    isFirst(p) {
        if (this.count === 0) {
            return false;
        }
        const o = this.arr[0];
        return o != null && o.x === p.x && o.y === p.y;
    }
    path() {
        return new PointPath(this.arr.slice(0, this.count));
    }
    clear() {
        this.set.clear();
        this.count = 0;
    }
    get(ix) {
        return this.arr[ix];
    }
    get length() {
        return this.count;
    }
}

const N = 0;
const S = 1;
const E = 2;
const W = 3;
function marchingSquares(potentialArea, threshold) {
    const estLength = (Math.floor(potentialArea.width) + Math.floor(potentialArea.height)) * 2;
    const contour = new PointList(estLength);
    function updateDir(x, y, dir, res) {
        const v = potentialArea.get(x, y);
        if (Number.isNaN(v)) {
            return Number.NaN;
        }
        if (v > threshold) {
            return dir + res;
        }
        return dir;
    }
    function getState(x, y) {
        let dir = N;
        dir = updateDir(x, y, dir, 1);
        dir = updateDir(x + 1, y, dir, 2);
        dir = updateDir(x, y + 1, dir, 4);
        dir = updateDir(x + 1, y + 1, dir, 8);
        if (Number.isNaN(dir)) {
            return -1;
        }
        return dir;
    }
    let direction = S;
    function doMarch(xPos, yPos) {
        let x = xPos;
        let y = yPos;
        let xPixel = potentialArea.invertScaleX(x);
        let yPixel = potentialArea.invertScaleY(y);
        for (let i = 0; i < potentialArea.width * potentialArea.height; i++) {
            const p = { x: xPixel, y: yPixel };
            if (contour.contains(p)) {
                if (!contour.isFirst(p)) ;
                else {
                    return true;
                }
            }
            else {
                contour.add(p);
            }
            const state = getState(x, y);
            switch (state) {
                case -1:
                    return true;
                case 0:
                case 3:
                case 2:
                case 7:
                    direction = E;
                    break;
                case 12:
                case 14:
                case 4:
                    direction = W;
                    break;
                case 6:
                    direction = direction === N ? W : E;
                    break;
                case 1:
                case 13:
                case 5:
                    direction = N;
                    break;
                case 9:
                    direction = direction === E ? N : S;
                    break;
                case 10:
                case 8:
                case 11:
                    direction = S;
                    break;
                default:
                    console.warn('Marching squares invalid state: ' + state);
                    return true;
            }
            switch (direction) {
                case N:
                    y--;
                    yPixel -= potentialArea.pixelGroup;
                    break;
                case S:
                    y++;
                    yPixel += potentialArea.pixelGroup;
                    break;
                case W:
                    x--;
                    xPixel -= potentialArea.pixelGroup;
                    break;
                case E:
                    x++;
                    xPixel += potentialArea.pixelGroup;
                    break;
                default:
                    console.warn('Marching squares invalid state: ' + state);
                    return true;
            }
        }
        return true;
    }
    for (let x = 0; x < potentialArea.width; x++) {
        for (let y = 0; y < potentialArea.height; y++) {
            if (potentialArea.get(x, y) <= threshold) {
                continue;
            }
            const state = getState(x, y);
            if (state < 0 || state === 15) {
                continue;
            }
            if (doMarch(x, y)) {
                return contour.path();
            }
        }
    }
    return null;
}

const defaultOptions = {
    maxRoutingIterations: 100,
    maxMarchingIterations: 20,
    pixelGroup: 4,
    edgeR0: 10,
    edgeR1: 20,
    nodeR0: 15,
    nodeR1: 50,
    morphBuffer: 10,
    threshold: 1,
    memberInfluenceFactor: 1,
    edgeInfluenceFactor: 1,
    nonMemberInfluenceFactor: -0.8,
    virtualEdges: true,
};
function isCircle(v) {
    return v != null && typeof v.radius === 'number';
}
function isEqual(a, b) {
    if (isCircle(a) !== isCircle(b)) {
        return false;
    }
    if (isCircle(a)) {
        const bc = b;
        return a.cx === bc.cx && a.cy === bc.cy && a.radius === bc.radius;
    }
    const br = b;
    return a.x === br.x && a.y === br.y && a.width === br.width && a.height === br.height;
}
var EDirty;
(function (EDirty) {
    EDirty[EDirty["MEMBERS"] = 0] = "MEMBERS";
    EDirty[EDirty["NON_MEMBERS"] = 1] = "NON_MEMBERS";
    EDirty[EDirty["EDGES"] = 2] = "EDGES";
})(EDirty || (EDirty = {}));
class BubbleSets {
    constructor(options = {}) {
        this.dirty = new Set();
        this.members = [];
        this.nonMembers = [];
        this.virtualEdges = [];
        this.edges = [];
        this.activeRegion = new Rectangle(0, 0, 0, 0);
        this.potentialArea = new Area(1, 0, 0, 0, 0, 0, 0);
        this.o = Object.assign({}, defaultOptions, options);
    }
    pushMember(...members) {
        if (members.length === 0) {
            return;
        }
        this.dirty.add(EDirty.MEMBERS);
        for (const v of members) {
            this.members.push({
                raw: v,
                obj: isCircle(v) ? Circle.from(v) : Rectangle.from(v),
                area: null,
            });
        }
    }
    removeMember(member) {
        const index = this.members.findIndex((d) => isEqual(d.raw, member));
        if (index < 0) {
            return false;
        }
        this.members.splice(index, 1);
        this.dirty.add(EDirty.MEMBERS);
        return true;
    }
    removeNonMember(nonMember) {
        const index = this.nonMembers.findIndex((d) => isEqual(d.raw, nonMember));
        if (index < 0) {
            return false;
        }
        this.nonMembers.splice(index, 1);
        this.dirty.add(EDirty.NON_MEMBERS);
        return true;
    }
    removeEdge(edge) {
        const index = this.edges.findIndex((d) => d.obj.equals(edge));
        if (index < 0) {
            return false;
        }
        this.edges.splice(index, 1);
        this.dirty.add(EDirty.NON_MEMBERS);
        return true;
    }
    pushNonMember(...nonMembers) {
        if (nonMembers.length === 0) {
            return;
        }
        this.dirty.add(EDirty.NON_MEMBERS);
        for (const v of nonMembers) {
            this.nonMembers.push({
                raw: v,
                obj: isCircle(v) ? Circle.from(v) : Rectangle.from(v),
                area: null,
            });
        }
    }
    pushEdge(...edges) {
        if (edges.length === 0) {
            return;
        }
        this.dirty.add(EDirty.EDGES);
        for (const v of edges) {
            this.edges.push({
                raw: v,
                obj: Line.from(v),
                area: null,
            });
        }
    }
    update() {
        const dirtyMembers = this.dirty.has(EDirty.MEMBERS);
        const dirtyNonMembers = this.dirty.has(EDirty.NON_MEMBERS);
        let dirtyEdges = this.dirty.has(EDirty.EDGES);
        this.dirty.clear();
        const memberObjs = this.members.map((d) => d.obj);
        if (this.o.virtualEdges && (dirtyMembers || dirtyNonMembers)) {
            const nonMembersAsRects = this.nonMembers.map((d) => d.obj);
            const virtualEdges = calculateVirtualEdges(memberObjs, nonMembersAsRects, this.o.maxRoutingIterations, this.o.morphBuffer);
            const old = new Map(this.virtualEdges.map((e) => [e.obj.toString(), e.area]));
            this.virtualEdges = virtualEdges.map((e) => {
                var _a;
                return ({
                    raw: e,
                    obj: e,
                    area: (_a = old.get(e.toString())) !== null && _a !== void 0 ? _a : null,
                });
            });
            dirtyEdges = true;
        }
        let activeRegionDirty = false;
        if (dirtyMembers || dirtyEdges) {
            const edgesObj = this.virtualEdges.concat(this.edges).map((e) => e.obj);
            const bb = unionBoundingBox(memberObjs, edgesObj);
            const padding = Math.max(this.o.edgeR1, this.o.nodeR1) + this.o.morphBuffer;
            const activeRegion = Rectangle.from(addPadding(bb, padding));
            if (!activeRegion.equals(this.activeRegion)) {
                activeRegionDirty = true;
                this.activeRegion = activeRegion;
            }
        }
        if (activeRegionDirty) {
            const potentialWidth = Math.ceil(this.activeRegion.width / this.o.pixelGroup);
            const potentialHeight = Math.ceil(this.activeRegion.height / this.o.pixelGroup);
            if (this.activeRegion.x !== this.potentialArea.pixelX || this.activeRegion.y !== this.potentialArea.pixelY) {
                this.potentialArea = Area.fromPixelRegion(this.activeRegion, this.o.pixelGroup);
                this.members.forEach((m) => (m.area = null));
                this.nonMembers.forEach((m) => (m.area = null));
                this.edges.forEach((m) => (m.area = null));
                this.virtualEdges.forEach((m) => (m.area = null));
            }
            else if (potentialWidth !== this.potentialArea.width || potentialHeight !== this.potentialArea.height) {
                this.potentialArea = Area.fromPixelRegion(this.activeRegion, this.o.pixelGroup);
            }
        }
        const existing = new Map();
        const addCache = (m) => {
            if (m.area) {
                const key = `${m.obj.width}x${m.obj.height}x${m.obj instanceof Rectangle ? 'R' : 'C'}`;
                existing.set(key, m.area);
            }
        };
        const createOrAddCache = (m) => {
            if (m.area) {
                return;
            }
            const key = `${m.obj.width}x${m.obj.height}x${m.obj instanceof Rectangle ? 'R' : 'C'}`;
            if (existing.has(key)) {
                const r = existing.get(key);
                m.area = this.potentialArea.copy(r, { x: m.obj.x - this.o.nodeR1, y: m.obj.y - this.o.nodeR1 });
                return;
            }
            const r = m.obj instanceof Rectangle
                ? createRectangleInfluenceArea(m.obj, this.potentialArea, this.o.nodeR1)
                : createGenericInfluenceArea(m.obj, this.potentialArea, this.o.nodeR1);
            m.area = r;
            existing.set(key, r);
        };
        this.members.forEach(addCache);
        this.nonMembers.forEach(addCache);
        this.members.forEach(createOrAddCache);
        this.nonMembers.forEach((m) => {
            if (!this.activeRegion.intersects(m.obj)) {
                m.area = null;
            }
            else {
                createOrAddCache(m);
            }
        });
        this.edges.forEach((edge) => {
            if (!edge.area) {
                edge.area = createLineInfluenceArea(edge.obj, this.potentialArea, this.o.edgeR1);
            }
        });
        this.virtualEdges.forEach((edge) => {
            if (!edge.area) {
                edge.area = createLineInfluenceArea(edge.obj, this.potentialArea, this.o.edgeR1);
            }
        });
    }
    drawMembers(ctx) {
        for (const member of this.members) {
            member.obj.draw(ctx);
        }
    }
    drawNonMembers(ctx) {
        for (const member of this.nonMembers) {
            member.obj.draw(ctx);
        }
    }
    drawEdges(ctx) {
        for (const edge of this.edges) {
            edge.obj.draw(ctx);
        }
    }
    drawPotentialArea(ctx, offset = true) {
        this.potentialArea.draw(ctx, offset);
    }
    compute() {
        if (this.members.length === 0) {
            return new PointPath([]);
        }
        if (this.dirty.size > 0) {
            this.update();
        }
        const { o, potentialArea } = this;
        const members = this.members.map((m) => m.area);
        const edges = this.virtualEdges.concat(this.edges).map((d) => d.area);
        const nonMembers = this.nonMembers.filter((d) => d.area != null).map((d) => d.area);
        const memberObjs = this.members.map((m) => m.obj);
        return calculatePotentialOutline(potentialArea, members, edges, nonMembers, (p) => p.containsElements(memberObjs), o);
    }
}
function calculatePotentialOutline(potentialArea, members, edges, nonMembers, validPath, options = {}) {
    const o = Object.assign({}, defaultOptions, options);
    let threshold = o.threshold;
    let memberInfluenceFactor = o.memberInfluenceFactor;
    let edgeInfluenceFactor = o.edgeInfluenceFactor;
    let nonMemberInfluenceFactor = o.nonMemberInfluenceFactor;
    const nodeInfA = (o.nodeR0 - o.nodeR1) * (o.nodeR0 - o.nodeR1);
    const edgeInfA = (o.edgeR0 - o.edgeR1) * (o.edgeR0 - o.edgeR1);
    for (let iterations = 0; iterations < o.maxMarchingIterations; iterations++) {
        potentialArea.clear();
        if (memberInfluenceFactor !== 0) {
            const f = memberInfluenceFactor / nodeInfA;
            for (const item of members) {
                potentialArea.incArea(item, f);
            }
        }
        if (edgeInfluenceFactor !== 0) {
            const f = edgeInfluenceFactor / edgeInfA;
            for (const area of edges) {
                potentialArea.incArea(area, f);
            }
        }
        if (nonMemberInfluenceFactor !== 0) {
            const f = nonMemberInfluenceFactor / nodeInfA;
            for (const area of nonMembers) {
                potentialArea.incArea(area, f);
            }
        }
        const contour = marchingSquares(potentialArea, threshold);
        if (contour && validPath(contour)) {
            return contour;
        }
        threshold *= 0.95;
        if (iterations <= o.maxMarchingIterations * 0.5) {
            memberInfluenceFactor *= 1.2;
            edgeInfluenceFactor *= 1.2;
        }
        else if (nonMemberInfluenceFactor !== 0 && nonMembers.length > 0) {
            nonMemberInfluenceFactor *= 0.8;
        }
        else {
            break;
        }
    }
    return new PointPath([]);
}
function unionBoundingBox(memberItems, edgeItems) {
    if (memberItems.length === 0) {
        return new Rectangle(0, 0, 0, 0);
    }
    const activeRegion = Rectangle.from(memberItems[0]);
    for (const m of memberItems) {
        activeRegion.add(m);
    }
    for (const l of edgeItems) {
        activeRegion.add(lineBoundingBox(l));
    }
    return activeRegion;
}
function createOutline(members, nonMembers = [], edges = [], options = {}) {
    if (members.length === 0) {
        return new PointPath([]);
    }
    const bb = new BubbleSets(options);
    bb.pushMember(...members);
    bb.pushNonMember(...nonMembers);
    bb.pushEdge(...edges);
    return bb.compute();
}

export { Area, BubbleSets, Circle, Line, PointPath, Rectangle, addPadding, boundingBox, calculatePotentialOutline, calculateVirtualEdges, circle, createGenericInfluenceArea, createLineInfluenceArea, createOutline, createRectangleInfluenceArea, BubbleSets as default, defaultOptions, line, lineBoundingBox, point, rect, unionBoundingBox };
//# sourceMappingURL=index.js.map
