var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { BasePlugin } from '../base-plugin';
import { createPluginContainer } from '../utils/dom';
import { getImageWatermark, getTextWatermark } from './util';
/**
 * <zh/> 水印
 *
 * <en/> Watermark
 * @remarks
 * <zh/> 支持使用文本和图片作为水印，实现原理是在 Graph 容器的 div 上加上 `background-image` 属性，然后就可以通过 css 来控制水印的位置和样式。对于文本，会使用隐藏 canvas 转成图片的方式来实现
 *
 * <en/> Support using text and image as watermark, the principle is to add the `background-image` property to the div of the Graph container, and then you can control the position and style of the watermark through css. For text, it will be converted to an image using a hidden canvas
 */
export class Watermark extends BasePlugin {
    constructor(context, options) {
        super(context, Object.assign({}, Watermark.defaultOptions, options));
        this.$element = createPluginContainer('watermark');
        const $container = this.context.canvas.getContainer();
        $container.appendChild(this.$element);
        this.update(options);
    }
    /**
     * <zh/> 更新水印配置
     *
     * <en/> Update the watermark configuration
     * @param options - <zh/> 配置项 | <en/> Options
     * @internal
     */
    update(options) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.update.call(this, options);
            const _a = this.options, { width, height, text, imageURL } = _a, rest = __rest(_a, ["width", "height", "text", "imageURL"]);
            // Set the background style.
            Object.keys(rest).forEach((key) => {
                if (key.startsWith('background')) {
                    // @ts-expect-error ignore
                    this.$element.style[key] = options[key];
                }
            });
            // Set the background image
            const base64 = imageURL
                ? yield getImageWatermark(width, height, imageURL, rest)
                : yield getTextWatermark(width, height, text, rest);
            this.$element.style.backgroundImage = `url(${base64})`;
        });
    }
    /**
     * <zh/> 销毁水印
     *
     * <en/> Destroy the watermark
     * @internal
     */
    destroy() {
        super.destroy();
        // Remove the background dom.
        this.$element.remove();
    }
}
Watermark.defaultOptions = {
    width: 200,
    height: 100,
    opacity: 0.2,
    rotate: Math.PI / 12,
    text: '',
    textFill: '#000',
    textFontSize: 16,
    textAlign: 'center',
    textBaseline: 'middle',
    backgroundRepeat: 'repeat',
};
//# sourceMappingURL=index.js.map