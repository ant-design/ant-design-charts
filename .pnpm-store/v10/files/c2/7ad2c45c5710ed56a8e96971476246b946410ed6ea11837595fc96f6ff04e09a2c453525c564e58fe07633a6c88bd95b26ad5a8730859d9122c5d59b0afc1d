import type { RuntimeContext } from '../../runtime/types';
import type { ShortcutKey } from '../../utils/shortcut';
import type { BasePluginOptions } from '../base-plugin';
import { BasePlugin } from '../base-plugin';
/**
 * <zh/> 全屏配置项
 *
 * <en/> Full screen options
 */
export interface FullscreenOptions extends BasePluginOptions {
    /**
     * <zh/> 触发全屏的方式
     * - `request` : 请求全屏
     * - `exit` : 退出全屏
     *
     * <en/> The way to trigger full screen
     * - `request`: request full screen
     * - `exit`: exit full screen
     */
    trigger?: {
        request?: ShortcutKey;
        exit?: ShortcutKey;
    };
    /**
     * <zh/> 是否自适应画布尺寸，全屏后画布尺寸会自动适应屏幕尺寸
     *
     * <en/> Whether to adapt the canvas size
     * @defaultValue true
     */
    autoFit?: boolean;
    /**
     * <zh/> 进入全屏后的回调
     *
     * <en/> Callback after entering full screen
     */
    onEnter?: () => void;
    /**
     * <zh/> 退出全屏后的回调
     *
     * <en/> Callback after exiting full screen
     */
    onExit?: () => void;
}
/**
 * <zh/> 全屏
 *
 * <en/> Full screen
 */
export declare class Fullscreen extends BasePlugin<FullscreenOptions> {
    static defaultOptions: Partial<FullscreenOptions>;
    private shortcut;
    private style;
    private $el;
    private graphSize;
    constructor(context: RuntimeContext, options: FullscreenOptions);
    private bindEvents;
    private unbindEvents;
    private setGraphSize;
    private onFullscreenChange;
    /**
     * <zh/> 请求全屏
     *
     * <en/> Request full screen
     */
    request(): void;
    /**
     * <zh/> 退出全屏
     *
     * <en/> Exit full screen
     */
    exit(): void;
    /**
     * <zh/> 更新配置
     *
     * <en/> Update options
     * @param options - <zh/> 配置项 | <en/> Options
     * @internal
     */
    update(options: Partial<FullscreenOptions>): void;
    destroy(): void;
}
