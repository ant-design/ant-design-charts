/**
 * bubblesets-js
 * https://github.com/upsetjs/bubblesets-js
 *
 * Copyright (c) 2021-2022 Samuel Gratzl <sam@sgratzl.com>
 */

declare type IPoint = {
    x: number;
    y: number;
};
interface ICenterPoint {
    cx: number;
    cy: number;
}
interface IRectangle extends IPoint {
    width: number;
    height: number;
}
interface IRectangle2 extends IRectangle {
    x2: number;
    y2: number;
}
interface ILine {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}
interface ICircle extends ICenterPoint {
    radius: number;
}
declare function rect(x: number, y: number, width: number, height: number): IRectangle;
declare function circle(cx: number, cy: number, radius: number): ICircle;
declare function line(x1: number, y1: number, x2: number, y2: number): ILine;
declare function point(x: number, y: number): {
    x: number;
    y: number;
};

declare class Rectangle implements IRectangle2, ICircle {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x: number, y: number, width: number, height: number);
    get x2(): number;
    get y2(): number;
    get cx(): number;
    get cy(): number;
    get radius(): number;
    static from(r: IRectangle): Rectangle;
    equals(that: IRectangle): boolean;
    clone(): Rectangle;
    add(that: IRectangle): void;
    addPoint(p: IPoint): void;
    toString(): string;
    draw(ctx: CanvasRenderingContext2D): void;
    containsPt(px: number, py: number): boolean;
    get area(): number;
    intersects(that: IRectangle): boolean;
    distSquare(tempX: number, tempY: number): number;
}
declare function boundingBox(path: ReadonlyArray<IPoint>): Rectangle | null;

declare class Area {
    readonly pixelGroup: number;
    readonly i: number;
    readonly j: number;
    readonly pixelX: number;
    readonly pixelY: number;
    readonly width: number;
    readonly height: number;
    private readonly area;
    constructor(pixelGroup: number, i?: number, j?: number, pixelX?: number, pixelY?: number, width?: number, height?: number, pixels?: Float32Array);
    createSub(rect: IRectangle, pixelPos: IPoint): Area;
    static fromPixelRegion(pixelRect: IRectangle, pixelGroup: number): Area;
    copy(sub: Area, pixelPoint: IPoint): Area;
    boundX(pos: number): number;
    boundY(pos: number): number;
    scaleX(pixel: number): number;
    scaleY(pixel: number): number;
    scale(pixelRect: IRectangle): Rectangle;
    invertScaleX(v: number): number;
    invertScaleY(v: number): number;
    addPadding(rect: Rectangle, pixelPadding: number): Rectangle;
    get(i: number, j: number): number;
    inc(i: number, j: number, v: number): void;
    set(i: number, j: number, v: number): void;
    incArea(sub: Area, factor: number): void;
    fill(value: number): void;
    fillArea(rect: IRectangle, value: number): void;
    fillHorizontalLine(i: number, j: number, width: number, value: number): void;
    fillVerticalLine(i: number, j: number, height: number, value: number): void;
    clear(): void;
    toString(): string;
    draw(ctx: CanvasRenderingContext2D, offset?: boolean): void;
    drawThreshold(ctx: CanvasRenderingContext2D, threshold: number, offset?: boolean): void;
}

declare function lineBoundingBox(line: ILine): IRectangle2;
declare class Line {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    constructor(x1: number, y1: number, x2: number, y2: number);
    equals(that: ILine): boolean;
    draw(ctx: CanvasRenderingContext2D): void;
    toString(): string;
    static from(l: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    }): Line;
    cuts(px: number, py: number): boolean;
    distSquare(x: number, y: number): number;
    ptClose(x: number, y: number, r: number): boolean;
}

declare class PointPath {
    readonly points: ReadonlyArray<IPoint>;
    readonly closed: boolean;
    constructor(points?: ReadonlyArray<IPoint>, closed?: boolean);
    get(index: number): IPoint;
    get length(): number;
    toString(roundToDigits?: number | ((v: number) => number)): string;
    draw(ctx: CanvasRenderingContext2D): void;
    sample(skip?: number): PointPath;
    simplify(tolerance?: number): PointPath;
    bSplines(granularity?: number): PointPath;
    apply(transformer: (path: PointPath) => PointPath): PointPath;
    containsElements(members: ReadonlyArray<ICenterPoint>): boolean;
    withinArea(px: number, py: number): boolean;
}

interface IPotentialOptions {
    /**
     * how many pixels per potential area group to improve speed
     * @default 4
     */
    pixelGroup?: number;
    morphBuffer?: number;
}
interface IRoutingOptions {
    virtualEdges?: boolean;
    /**
     * maximum number of iterations when computing routes between members
     * @default 100
     */
    maxRoutingIterations?: number;
    morphBuffer?: number;
}
interface IOutlineOptions {
    /**
     * maximum number of iterations when computing the contour
     * @default 20
     */
    maxMarchingIterations?: number;
    edgeR0?: number;
    edgeR1?: number;
    nodeR0?: number;
    nodeR1?: number;
    threshold?: number;
    memberInfluenceFactor?: number;
    edgeInfluenceFactor?: number;
    nonMemberInfluenceFactor?: number;
}
interface IBubbleSetOptions extends IRoutingOptions, IOutlineOptions, IPotentialOptions {
}
declare const defaultOptions: Readonly<Required<IBubbleSetOptions>>;
declare class BubbleSets {
    private readonly dirty;
    private readonly o;
    private readonly members;
    private readonly nonMembers;
    private virtualEdges;
    private readonly edges;
    private activeRegion;
    private potentialArea;
    constructor(options?: IBubbleSetOptions);
    pushMember(...members: ReadonlyArray<IRectangle | ICircle>): void;
    removeMember(member: IRectangle | ICircle): boolean;
    removeNonMember(nonMember: IRectangle | ICircle): boolean;
    removeEdge(edge: ILine): boolean;
    pushNonMember(...nonMembers: ReadonlyArray<IRectangle | ICircle>): void;
    pushEdge(...edges: ReadonlyArray<ILine>): void;
    private update;
    drawMembers(ctx: CanvasRenderingContext2D): void;
    drawNonMembers(ctx: CanvasRenderingContext2D): void;
    drawEdges(ctx: CanvasRenderingContext2D): void;
    drawPotentialArea(ctx: CanvasRenderingContext2D, offset?: boolean): void;
    compute(): PointPath;
}
declare function calculatePotentialOutline(potentialArea: Area, members: ReadonlyArray<Area>, edges: ReadonlyArray<Area>, nonMembers: ReadonlyArray<Area>, validPath: (path: PointPath) => boolean, options?: IOutlineOptions): PointPath;
declare function unionBoundingBox(memberItems: IRectangle[], edgeItems: Line[]): Rectangle;
declare function createOutline(members: ReadonlyArray<IRectangle | ICircle>, nonMembers?: ReadonlyArray<IRectangle>, edges?: ReadonlyArray<ILine>, options?: IOutlineOptions): PointPath;

declare function addPadding(rect: IRectangle, padding: number): IRectangle;
declare function addPadding(rect: ReadonlyArray<IRectangle>, padding: number): ReadonlyArray<IRectangle>;

declare class Circle implements IRectangle2, ICircle {
    cx: number;
    cy: number;
    radius: number;
    constructor(cx: number, cy: number, radius: number);
    get x(): number;
    get x2(): number;
    get width(): number;
    get y(): number;
    get y2(): number;
    get height(): number;
    static from(r: ICircle): Circle;
    containsPt(x: number, y: number): boolean;
    distSquare(tempX: number, tempY: number): number;
    draw(ctx: CanvasRenderingContext2D): void;
}

declare function createLineInfluenceArea(line: ILine, potentialArea: Area, padding: number): Area;
declare function createGenericInfluenceArea(shape: IRectangle & {
    distSquare(x: number, y: number): number;
}, potentialArea: Area, padding: number): Area;
declare function createRectangleInfluenceArea(rect: IRectangle & {
    distSquare(x: number, y: number): number;
}, potentialArea: Area, padding: number): Area;

declare function calculateVirtualEdges(items: ReadonlyArray<ICircle>, nonMembers: ReadonlyArray<IRectangle2 & {
    containsPt(x: number, y: number): boolean;
}>, maxRoutingIterations: number, morphBuffer: number): Line[];

export { Area, BubbleSets, Circle, type IBubbleSetOptions, type ICenterPoint, type ICircle, type ILine, type IOutlineOptions, type IPoint, type IPotentialOptions, type IRectangle, type IRectangle2, type IRoutingOptions, Line, PointPath, Rectangle, addPadding, boundingBox, calculatePotentialOutline, calculateVirtualEdges, circle, createGenericInfluenceArea, createLineInfluenceArea, createOutline, createRectangleInfluenceArea, BubbleSets as default, defaultOptions, line, lineBoundingBox, point, rect, unionBoundingBox };
//# sourceMappingURL=index.d.ts.map
