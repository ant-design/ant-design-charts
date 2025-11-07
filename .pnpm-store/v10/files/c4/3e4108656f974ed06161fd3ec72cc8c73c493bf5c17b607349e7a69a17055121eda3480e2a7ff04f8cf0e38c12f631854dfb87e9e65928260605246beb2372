"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fullscreen = void 0;
const print_1 = require("../../utils/print");
const shortcut_1 = require("../../utils/shortcut");
const base_plugin_1 = require("../base-plugin");
/**
 * <zh/> 全屏
 *
 * <en/> Full screen
 */
class Fullscreen extends base_plugin_1.BasePlugin {
    constructor(context, options) {
        super(context, Object.assign({}, Fullscreen.defaultOptions, options));
        this.$el = this.context.canvas.getContainer();
        this.graphSize = [0, 0];
        this.onFullscreenChange = () => {
            var _a, _b, _c, _d;
            const isFull = !!document.fullscreenElement;
            if (this.options.autoFit)
                this.setGraphSize(isFull);
            if (isFull) {
                (_b = (_a = this.options).onEnter) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
            else {
                (_d = (_c = this.options).onExit) === null || _d === void 0 ? void 0 : _d.call(_c);
            }
        };
        this.shortcut = new shortcut_1.Shortcut(context.graph);
        this.bindEvents();
        this.style = document.createElement('style');
        document.head.appendChild(this.style);
        this.style.innerHTML = `
      :not(:root):fullscreen::backdrop {
        background: transparent;
      }
    `;
    }
    bindEvents() {
        this.unbindEvents();
        this.shortcut.unbindAll();
        const { request = [], exit = [] } = this.options.trigger;
        this.shortcut.bind(request, this.request);
        this.shortcut.bind(exit, this.exit);
        const events = ['webkitfullscreenchange', 'mozfullscreenchange', 'fullscreenchange', 'MSFullscreenChange'];
        events.forEach((eventName) => {
            document.addEventListener(eventName, this.onFullscreenChange, false);
        });
    }
    unbindEvents() {
        this.shortcut.unbindAll();
        const events = ['webkitfullscreenchange', 'mozfullscreenchange', 'fullscreenchange', 'MSFullscreenChange'];
        events.forEach((eventName) => {
            document.removeEventListener(eventName, this.onFullscreenChange, false);
        });
    }
    setGraphSize(fullScreen = true) {
        var _a, _b;
        let width, height;
        if (fullScreen) {
            width = ((_a = globalThis.screen) === null || _a === void 0 ? void 0 : _a.width) || 0;
            height = ((_b = globalThis.screen) === null || _b === void 0 ? void 0 : _b.height) || 0;
            this.graphSize = this.context.graph.getSize();
        }
        else {
            [width, height] = this.graphSize;
        }
        this.context.graph.setSize(width, height);
        this.context.graph.render();
    }
    /**
     * <zh/> 请求全屏
     *
     * <en/> Request full screen
     */
    request() {
        if (document.fullscreenElement || !isFullscreenEnabled())
            return;
        this.$el.requestFullscreen().catch((err) => {
            print_1.print.warn(`Error attempting to enable full-screen: ${err.message} (${err.name})`);
        });
    }
    /**
     * <zh/> 退出全屏
     *
     * <en/> Exit full screen
     */
    exit() {
        if (!document.fullscreenElement)
            return;
        document.exitFullscreen();
    }
    /**
     * <zh/> 更新配置
     *
     * <en/> Update options
     * @param options - <zh/> 配置项 | <en/> Options
     * @internal
     */
    update(options) {
        this.unbindEvents();
        super.update(options);
        this.bindEvents();
    }
    destroy() {
        this.exit();
        this.style.remove();
        super.destroy();
    }
}
exports.Fullscreen = Fullscreen;
Fullscreen.defaultOptions = {
    trigger: {},
    autoFit: true,
};
/**
 * <zh/> 判断是否支持全屏
 *
 * <en/> Determine whether full screen is enabled
 * @returns <zh/> 是否支持全屏 | <en/> Whether full screen is enabled
 */
function isFullscreenEnabled() {
    return (document.fullscreenEnabled ||
        // <zh/> 使用 Reflect 语法规避 ts 检查 | <en/> use Reflect to avoid ts checking
        Reflect.get(document, 'webkitFullscreenEnabled') ||
        Reflect.get(document, 'mozFullscreenEnabled') ||
        Reflect.get(document, 'msFullscreenEnabled'));
}
//# sourceMappingURL=index.js.map