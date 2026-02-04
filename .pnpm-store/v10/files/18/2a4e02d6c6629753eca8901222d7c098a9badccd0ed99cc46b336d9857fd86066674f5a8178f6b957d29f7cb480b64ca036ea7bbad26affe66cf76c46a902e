import type { RuntimeContext } from '../../runtime/types';
import type { BasePluginOptions } from '../base-plugin';
import { BasePlugin } from '../base-plugin';
/**
 * <zh/> 背景配置项
 *
 * <en/> Background options
 */
export interface BackgroundOptions extends BasePluginOptions, CSSStyleDeclaration {
}
/**
 * <zh/> 背景图
 *
 * <en/> Background image
 * @remarks
 * <zh/> 支持为图画布设置一个背景图片，让画布更有层次感、叙事性。
 *
 * <en/> Support setting a background image for the canvas to make the canvas more hierarchical and narrative.
 */
export declare class Background extends BasePlugin<BackgroundOptions> {
    static defaultOptions: Partial<BackgroundOptions>;
    private $element;
    constructor(context: RuntimeContext, options: BackgroundOptions);
    /**
     * <zh/> 更新背景图配置
     *
     * <en/> Update the background image configuration
     * @param options - <zh/> 配置项 | <en/> Options
     * @internal
     */
    update(options: Partial<BackgroundOptions>): Promise<void>;
    /**
     * <zh/> 销毁背景图
     *
     * <en/> Destroy the background image
     * @internal
     */
    destroy(): void;
}
