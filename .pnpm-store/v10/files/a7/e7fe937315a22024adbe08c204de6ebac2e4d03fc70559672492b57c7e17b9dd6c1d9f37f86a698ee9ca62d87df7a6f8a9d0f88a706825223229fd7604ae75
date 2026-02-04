"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispatchPositionChange = exports.connectImage = exports.Image = void 0;
const g_1 = require("@antv/g");
const shape_1 = require("../../utils/shape");
class Image extends g_1.Image {
    constructor(options) {
        super(options);
        this.onMounted = () => {
            this.handleRadius();
        };
        this.onAttrModified = () => {
            this.handleRadius();
        };
        current = this;
        this.isMutationObserved = true;
        this.addEventListener(g_1.ElementEvent.MOUNTED, this.onMounted);
        this.addEventListener(g_1.ElementEvent.ATTR_MODIFIED, this.onAttrModified);
    }
    handleRadius() {
        const { radius, clipPath, width = 0, height = 0 } = this.attributes;
        if (radius && width && height) {
            const [x, y] = this.getBounds().min;
            const clipPathStyle = { x, y, radius, width, height };
            if (clipPath) {
                Object.assign(this.parsedStyle.clipPath.style, clipPathStyle);
            }
            else {
                const rect = new g_1.Rect({ style: clipPathStyle });
                this.style.clipPath = rect;
            }
        }
        else {
            if (clipPath)
                this.style.clipPath = null;
        }
    }
}
exports.Image = Image;
const ImagesWeakMap = new WeakMap();
let current = null;
/**
 * <zh/> 由于 g clipPath 不支持相对位置，因此当作用的元素发生位置变化时，需要通知 Image 更新 clipPath。
 *
 * 通过 connectImage 创建图形与图片的关联，并结合 dispatchPositionChange 方法触发更新
 *
 * ⚠️ 这是一种临时的、黑盒的解决方案，如果后续 g 支持相对位置，会移除该方法。
 *
 * <en/> Since g clipPath does not support relative positions, when the position of the affected element changes, the Image needs to be notified to update the clipPath.
 *
 * Use connectImage to create an association between the shape and the image, and combine it with the dispatchPositionChange method to trigger the update.
 *
 * ⚠️ This is a temporary, black-box solution, and if g supports relative positions in the future, this method will be removed.
 * @param target - <zh/> 目标元素 <en/> Target element
 */
const connectImage = (target) => {
    if (current && (0, shape_1.getAncestorShapes)(current).includes(target)) {
        const images = ImagesWeakMap.get(target);
        if (images) {
            if (!images.includes(current))
                images.push(current);
        }
        else
            ImagesWeakMap.set(target, [current]);
    }
};
exports.connectImage = connectImage;
/**
 * <zh/> 触发关联的图片更新位置
 *
 * <en/> Trigger the associated image to update its position
 * @param target - <zh/> 目标元素 <en/> Target element
 */
const dispatchPositionChange = (target) => {
    const image = ImagesWeakMap.get(target);
    if (image) {
        image.forEach((i) => i.handleRadius());
    }
};
exports.dispatchPositionChange = dispatchPositionChange;
//# sourceMappingURL=image.js.map