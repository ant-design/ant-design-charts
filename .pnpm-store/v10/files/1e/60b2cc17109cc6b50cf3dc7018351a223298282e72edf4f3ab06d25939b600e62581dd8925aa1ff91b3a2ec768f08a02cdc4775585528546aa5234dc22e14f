import type { Point } from '../../types';
import { CrosshairBase } from './base';
import { PolygonCrosshairOptions, PolygonCrosshairStyleProps } from './types';
export type { PolygonCrosshairStyleProps, PolygonCrosshairOptions };
export declare class PolygonCrosshair extends CrosshairBase<Required<PolygonCrosshairStyleProps>> {
    static tag: string;
    protected static defaultOptions: {
        style: Partial<PolygonCrosshairStyleProps>;
    };
    protected get crosshairPath(): any[];
    constructor(options: PolygonCrosshairOptions);
    update(cfg: Partial<PolygonCrosshairStyleProps>): void;
    /**
     * 得到从中心出发，各个点方向的单位向量
     */
    private get points();
    /**
     * 1. 判断point位于哪一个扇区
     * 2. 计算中心到point的线段与所在扇区的边的交点
     * 3. 计算等效半径
     */
    setPointer([x, y]: Point): void;
    protected adjustLayout(): void;
    private createPolygonPath;
    /**
     * 求点与扇区单位边的交点
     */
    private intersection;
}
