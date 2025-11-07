import { Component } from '../../core';
import { Group, Path } from '../../shapes';
import type { Point } from '../../types';
import { Tag } from '../tag';
import type { CrosshairBaseStyleProps, CrosshairBaseOptions } from './types';
export declare abstract class CrosshairBase<T extends CrosshairBaseStyleProps> extends Component<T> {
    static tag: string;
    /**
     * 指针位置
     */
    protected pointer: Point;
    protected shapesGroup: Group;
    protected tagShape: Tag;
    protected crosshairShape: Path;
    /**
     * 获得 pointer 的相对坐标
     */
    protected get localPointer(): number[];
    /**
     * 获得 crosshair 的 path
     */
    protected abstract get crosshairPath(): any[];
    private get tagStyle();
    private get crosshairStyle();
    constructor(options: CrosshairBaseOptions);
    render(attributes: CrosshairBaseStyleProps, container: Group): void;
    /**
     * 设置当前指针的位置
     * 1. 线条类型 调整位置即可
     * 2. circle 和 polygon 需要重新计算 path
     */
    setPointer(pointer: Point): void;
    /**
     * 调整tag
     */
    protected abstract adjustLayout(): void;
}
