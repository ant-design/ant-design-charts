export type Point = {
    x: number;
    y: number;
};
export type MCommand = 'M';
export type mCommand = 'm';
export type LCommand = 'L';
export type lCommand = 'l';
export type VCommand = 'V';
export type vCommand = 'v';
export type HCommand = 'H';
export type hCommand = 'h';
export type ZCommand = 'Z';
export type zCommand = 'z';
export type CCommand = 'C';
export type cCommand = 'c';
export type SCommand = 'S';
export type sCommand = 's';
export type QCommand = 'Q';
export type qCommand = 'q';
export type TCommand = 'T';
export type tCommand = 't';
export type ACommand = 'A';
export type aCommand = 'a';
export type AbsoluteCommand = MCommand | LCommand | VCommand | HCommand | ZCommand | CCommand | SCommand | QCommand | TCommand | ACommand;
export type RelativeCommand = mCommand | lCommand | vCommand | hCommand | zCommand | cCommand | sCommand | qCommand | tCommand | aCommand;
export type PathCommand = AbsoluteCommand | RelativeCommand;
export type MSegment = [MCommand, number, number];
export type mSegment = [mCommand, number, number];
export type MoveSegment = MSegment | mSegment;
export type LSegment = [LCommand, number, number];
export type lSegment = [lCommand, number, number];
export type LineSegment = LSegment | lSegment;
export type VSegment = [VCommand, number];
export type vSegment = [vCommand, number];
export type VertLineSegment = vSegment | VSegment;
export type HSegment = [HCommand, number];
export type hSegment = [hCommand, number];
export type HorLineSegment = HSegment | hSegment;
export type ZSegment = [ZCommand];
export type zSegment = [zCommand];
export type CloseSegment = ZSegment | zSegment;
export type CSegment = [CCommand, number, number, number, number, number, number];
export type cSegment = [cCommand, number, number, number, number, number, number];
export type CubicSegment = CSegment | cSegment;
export type SSegment = [SCommand, number, number, number, number];
export type sSegment = [sCommand, number, number, number, number];
export type ShortCubicSegment = SSegment | sSegment;
export type QSegment = [QCommand, number, number, number, number];
export type qSegment = [qCommand, number, number, number, number];
export type QuadSegment = QSegment | qSegment;
export type TSegment = [TCommand, number, number];
export type tSegment = [tCommand, number, number];
export type ShortQuadSegment = TSegment | tSegment;
export type ASegment = [ACommand, number, number, number, number, number, number, number];
export type aSegment = [aCommand, number, number, number, number, number, number, number];
export type ArcSegment = ASegment | aSegment;
export type PathSegment = MoveSegment | LineSegment | VertLineSegment | HorLineSegment | CloseSegment | CubicSegment | ShortCubicSegment | QuadSegment | ShortQuadSegment | ArcSegment;
export interface SegmentProperties {
    /** the segment */
    segment: PathSegment;
    /** the segment index */
    index: number;
    /** the segment length */
    length: number;
    /** the length including the segment length */
    lengthAtSegment: number;
    [key: string]: any;
}
export type ShortSegment = VertLineSegment | HorLineSegment | ShortCubicSegment | ShortQuadSegment | CloseSegment;
export type AbsoluteSegment = MSegment | LSegment | VSegment | HSegment | CSegment | SSegment | QSegment | TSegment | ASegment | ZSegment;
export type RelativeSegment = mSegment | lSegment | vSegment | hSegment | cSegment | sSegment | qSegment | tSegment | aSegment | zSegment;
export type NormalSegment = MSegment | LSegment | CSegment | QSegment | ASegment | ZSegment;
export type PathArray = [MSegment | mSegment, ...PathSegment[]];
export type AbsoluteArray = [MSegment, ...AbsoluteSegment[]];
export type RelativeArray = [MSegment, ...RelativeSegment[]];
export type NormalArray = [MSegment, ...NormalSegment[]];
export type CurveArray = [MSegment, ...CSegment[]];
export type PolygonArray = [MSegment, ...LSegment[], ZSegment];
export type PolylineArray = [MSegment, ...LSegment[]];
export interface ParserParams {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    x: number;
    y: number;
    qx: number | null;
    qy: number | null;
}
export interface PathBBox {
    width: number;
    height: number;
    x: number;
    y: number;
    x2: number;
    y2: number;
    cx: number;
    cy: number;
    cz: number;
}
export interface PathBBoxTotalLength extends PathBBox {
    length: number;
}
export interface PathLengthFactoryOptions {
    bbox: boolean;
    length: boolean;
    sampleSize: number;
}
export interface SegmentLimits {
    min: Point;
    max: Point;
}
export interface PointProperties {
    closest: {
        x: number;
        y: number;
    };
    distance: number;
    segment?: SegmentProperties;
}
export interface LengthFactory {
    length: number;
    point: Point;
    min: Point;
    max: Point;
}
