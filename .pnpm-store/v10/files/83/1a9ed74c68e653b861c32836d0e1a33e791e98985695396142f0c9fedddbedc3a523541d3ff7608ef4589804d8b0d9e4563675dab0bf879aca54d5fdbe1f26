"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Background = void 0;
const util_1 = require("@antv/util");
const base_plugin_1 = require("../base-plugin");
const dom_1 = require("../utils/dom");
/**
 * <zh/> 背景图
 *
 * <en/> Background image
 * @remarks
 * <zh/> 支持为图画布设置一个背景图片，让画布更有层次感、叙事性。
 *
 * <en/> Support setting a background image for the canvas to make the canvas more hierarchical and narrative.
 */
class Background extends base_plugin_1.BasePlugin {
    constructor(context, options) {
        super(context, Object.assign({}, Background.defaultOptions, options));
        this.$element = (0, dom_1.createPluginContainer)('background');
        const $container = this.context.canvas.getContainer();
        $container.prepend(this.$element);
        this.update(options);
    }
    /**
     * <zh/> 更新背景图配置
     *
     * <en/> Update the background image configuration
     * @param options - <zh/> 配置项 | <en/> Options
     * @internal
     */
    update(options) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.update.call(this, options);
            // Set the background style.
            Object.assign(this.$element.style, (0, util_1.omit)(this.options, ['key', 'type']));
        });
    }
    /**
     * <zh/> 销毁背景图
     *
     * <en/> Destroy the background image
     * @internal
     */
    destroy() {
        super.destroy();
        // Remove the background dom.
        this.$element.remove();
    }
}
exports.Background = Background;
Background.defaultOptions = {
    transition: 'background 0.5s',
    backgroundSize: 'cover',
    zIndex: '-1', // aviod to cover the other plugin's dom, eg: grid-line.
};
//# sourceMappingURL=index.js.map