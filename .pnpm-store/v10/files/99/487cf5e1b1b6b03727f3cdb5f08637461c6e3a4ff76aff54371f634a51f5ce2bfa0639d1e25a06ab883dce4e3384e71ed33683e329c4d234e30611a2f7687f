var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BasePlugin } from '../base-plugin';
import { createPluginContainer, insertDOM } from '../utils/dom';
import { BUILD_IN_SVG_ICON, TOOLBAR_CSS, parsePositionToStyle } from './util';
/**
 * <zh/> 工具栏，支持配置工具栏项目，以及点击之后的回调方法
 *
 * <en/> Toolbar, support configuration of toolbar items, and callback methods after clicking
 */
export class Toolbar extends BasePlugin {
    constructor(context, options) {
        super(context, Object.assign({}, Toolbar.defaultOptions, options));
        this.$element = createPluginContainer('toolbar', false);
        this.onToolbarItemClick = (e) => {
            const { onClick } = this.options;
            if (e.target instanceof Element) {
                if (e.target.className.includes('g6-toolbar-item')) {
                    const v = e.target.getAttribute('value');
                    onClick === null || onClick === void 0 ? void 0 : onClick(v, e.target);
                }
            }
        };
        const $container = this.context.canvas.getContainer();
        this.$element.style.display = 'flex';
        $container.appendChild(this.$element);
        // 设置样式
        insertDOM('g6-toolbar-css', 'style', {}, TOOLBAR_CSS, document.head);
        insertDOM('g6-toolbar-svgicon', 'div', { display: 'none' }, BUILD_IN_SVG_ICON);
        this.$element.addEventListener('click', this.onToolbarItemClick);
        this.update(options);
    }
    /**
     * <zh/> 更新工具栏的配置项
     *
     * <en/> Update the configuration of the toolbar
     * @param options - <zh/> 工具栏的配置项 | <en/> The options of the toolbar
     * @internal
     */
    update(options) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.update.call(this, options);
            const { className, position, style } = this.options;
            this.$element.className = `g6-toolbar ${className || ''}`;
            // 设置容器的样式，主要是位置，背景之类的
            Object.assign(this.$element.style, style, parsePositionToStyle(position));
            this.$element.innerHTML = yield this.getDOMContent();
        });
    }
    /**
     * <zh/> 销毁工具栏
     *
     * <en/> Destroy the toolbar
     * @internal
     */
    destroy() {
        this.$element.removeEventListener('click', this.onToolbarItemClick);
        this.$element.remove();
        super.destroy();
    }
    getDOMContent() {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield this.options.getItems();
            return items
                .map((item) => {
                var _a;
                return `
          <div class="g6-toolbar-item" value="${item.value}" title="${(_a = item.title) !== null && _a !== void 0 ? _a : ''}">
            <svg aria-hidden="true" focusable="false">
              <use xlink:href="#${item.id}"></use>
            </svg>
          </div>`;
            })
                .join('');
        });
    }
}
Toolbar.defaultOptions = {
    position: 'top-left',
};
//# sourceMappingURL=index.js.map