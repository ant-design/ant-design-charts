import type { IPointerEvent } from '../types';
import type { BrushSelectOptions } from './brush-select';
import { BrushSelect } from './brush-select';
/**
 * <zh/> 套索选择交互配置项
 *
 * <en/> Lasso select behavior options
 */
export interface LassoSelectOptions extends BrushSelectOptions {
}
/**
 * <zh/> 套索选择交互
 *
 * <en/> Lasso select behavior
 * @remarks
 * <zh/> 用不规则多边形框选一组元素。
 *
 * <en/> Select a group of elements with an irregular polygon.
 */
export declare class LassoSelect extends BrushSelect {
    private points?;
    private pathShape?;
    /**
     * Triggered when the mouse is pressed
     * @param event - mouse event
     * @internal
     */
    protected onPointerDown(event: IPointerEvent): void;
    /**
     * Triggered when the mouse is moved
     * @param event - mouse event
     * @internal
     */
    protected onPointerMove(event: IPointerEvent): void;
    /**
     * Triggered when the mouse is released
     * @internal
     */
    protected onPointerUp(): void;
    private clearLasso;
}
