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
import { CONTEXTMENU_CSS, getContentFromItems } from './util';
/**
 * <zh/> 上下文菜单
 *
 * <en/> Contextmenu
 * @remarks
 * <zh/> 上下文菜单，也被称为右键菜单，是当用户在某个特定区域上点击后出现的一个菜单。支持在点击前后，触发自定义事件。
 *
 * <en/> Contextmenu, also known as the right-click menu , is a menu that appears when a user clicks on a specific area. Supports triggering custom events before and after clicking.
 */
export class Contextmenu extends BasePlugin {
    constructor(context, options) {
        super(context, Object.assign({}, Contextmenu.defaultOptions, options));
        this.targetElement = null;
        this.onTriggerEvent = (event) => {
            var _a;
            // `contextmenu` 事件默认会触发浏览器的右键菜单，需要阻止默认事件
            // `click` 事件不需要阻止默认事件
            (_a = event.preventDefault) === null || _a === void 0 ? void 0 : _a.call(event);
            this.show(event);
        };
        this.onMenuItemClick = (event) => {
            const { onClick, trigger } = this.options;
            if (event.target instanceof HTMLElement) {
                if (event.target.className.includes('g6-contextmenu-li')) {
                    const value = event.target.getAttribute('value');
                    onClick === null || onClick === void 0 ? void 0 : onClick(value, event.target, this.targetElement);
                    this.hide();
                }
            }
            if (trigger !== 'click')
                this.hide();
        };
        this.initElement();
        this.update(options);
    }
    initElement() {
        this.$element = createPluginContainer('contextmenu', false, { zIndex: '99' });
        const { className } = this.options;
        if (className)
            this.$element.classList.add(className);
        const $container = this.context.canvas.getContainer();
        $container.appendChild(this.$element);
        insertDOM('g6-contextmenu-css', 'style', {}, CONTEXTMENU_CSS, document.head);
    }
    /**
     * <zh/> 显示上下文菜单
     *
     * <en/> Show the contextmenu
     * @param event - <zh/> 元素指针事件 | <en/> Element pointer event
     * @internal
     */
    show(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const { enable, offset } = this.options;
            if ((typeof enable === 'function' && !enable(event)) || !enable) {
                this.hide();
                return;
            }
            const content = yield this.getDOMContent(event);
            if (content instanceof HTMLElement) {
                this.$element.innerHTML = '';
                this.$element.appendChild(content);
            }
            else {
                this.$element.innerHTML = content;
            }
            // NOTICE: 为什么事件中的 client 是相对浏览器，而不是画布容器？
            const clientRect = this.context.graph.getCanvas().getContainer().getBoundingClientRect();
            this.$element.style.left = `${event.client.x - clientRect.left + offset[0]}px`;
            this.$element.style.top = `${event.client.y - clientRect.top + offset[1]}px`;
            this.$element.style.display = 'block';
            this.targetElement = event.target;
        });
    }
    /**
     * <zh/> 隐藏上下文菜单
     *
     * <en/> Hide the contextmenu
     */
    hide() {
        this.$element.style.display = 'none';
        this.targetElement = null;
    }
    /**
     * <zh/> 更新上下文菜单的配置项
     *
     * <en/> Update the contextmenu options
     * @param options - <zh/> 配置项 | <en/> Options
     * @internal
     */
    update(options) {
        this.unbindEvents();
        super.update(options);
        this.bindEvents();
    }
    /**
     * <zh/> 销毁上下文菜单
     *
     * <en/> Destroy the contextmenu
     * @internal
     */
    destroy() {
        this.unbindEvents();
        super.destroy();
        this.$element.remove();
    }
    getDOMContent(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const { getContent, getItems } = this.options;
            if (getItems) {
                return getContentFromItems(yield getItems(event));
            }
            return yield getContent(event);
        });
    }
    bindEvents() {
        const { graph } = this.context;
        const { trigger } = this.options;
        graph.on(`canvas:${trigger}`, this.onTriggerEvent);
        graph.on(`node:${trigger}`, this.onTriggerEvent);
        graph.on(`edge:${trigger}`, this.onTriggerEvent);
        graph.on(`combo:${trigger}`, this.onTriggerEvent);
        document.addEventListener('click', this.onMenuItemClick);
    }
    unbindEvents() {
        const { graph } = this.context;
        const { trigger } = this.options;
        graph.off(`canvas:${trigger}`, this.onTriggerEvent);
        graph.off(`node:${trigger}`, this.onTriggerEvent);
        graph.off(`edge:${trigger}`, this.onTriggerEvent);
        graph.off(`combo:${trigger}`, this.onTriggerEvent);
        document.removeEventListener('click', this.onMenuItemClick);
    }
}
Contextmenu.defaultOptions = {
    trigger: 'contextmenu',
    offset: [4, 4],
    loadingContent: '<div class="g6-contextmenu-loading">Loading...</div>',
    getContent: () => 'It is a empty context menu.',
    enable: () => true,
};
//# sourceMappingURL=index.js.map