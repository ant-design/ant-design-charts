import type { Point } from '../../types';
import { CrosshairBase } from './base';
import type { LineCrosshairOptions, LineCrosshairStyleProps } from './types';
export type { LineCrosshairStyleProps, LineCrosshairOptions };
export declare class LineCrosshair extends CrosshairBase<Required<LineCrosshairStyleProps>> {
    static tag: string;
    protected static defaultOptions: {
        style: Partial<LineCrosshairStyleProps>;
    };
    protected get crosshairPath(): any[];
    /**
     * 获得 pointer 的相对坐标
     */
    protected get localPointer(): number[];
    private get isVertical();
    private get tagShapeSpace();
    constructor(options: LineCrosshairOptions);
    update(cfg: Partial<LineCrosshairStyleProps>): void;
    /**
     * 将线移动至对应位置
     */
    setPointer(pointer: Point): void;
    setText(text: string): void;
    protected adjustLayout(): void;
    /**
     * 调整this位置
     */
    private adjustPosition;
    /**
     * 调整tag位置
     */
    private adjustTag;
    private getOrientVal;
}
