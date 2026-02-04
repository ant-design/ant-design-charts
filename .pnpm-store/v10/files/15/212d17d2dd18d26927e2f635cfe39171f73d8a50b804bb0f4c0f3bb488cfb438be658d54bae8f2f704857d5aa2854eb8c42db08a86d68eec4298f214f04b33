import { BaseShape } from './shapes';
export class BaseElement extends BaseShape {
    get context() {
        // @ts-expect-error skip type-check
        return this.config.context;
    }
    get parsedAttributes() {
        return this.attributes;
    }
    /**
     * <zh/> 动画帧执行函数
     *
     * <en/> Animation frame execution function
     */
    onframe() { }
    animate(keyframes, options) {
        const animation = super.animate(keyframes, options);
        if (animation) {
            animation.onframe = () => this.onframe();
            animation.finished.then(() => this.onframe());
        }
        return animation;
    }
}
//# sourceMappingURL=base-element.js.map