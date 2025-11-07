var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Tooltip as TooltipComponent } from '@antv/component';
import { get } from '@antv/util';
import { isToBeDestroyed } from '../utils/element';
import { BasePlugin } from './base-plugin';
/**
 * <zh/> 提示框插件
 *
 * <en/> Tooltip plugin
 */
export class Tooltip extends BasePlugin {
    constructor(context, options) {
        super(context, Object.assign({}, Tooltip.defaultOptions, options));
        this.currentTarget = null;
        this.tooltipElement = null;
        this.container = null;
        this.isEnable = (event, items) => {
            const { enable } = this.options;
            if (typeof enable === 'function') {
                return enable(event, items);
            }
            return enable;
        };
        /**
         * <zh/> 点击事件
         *
         * <en/> Click event
         * @param event - <zh/> 元素 | <en/> element
         */
        this.onClick = (event) => {
            const { target: { id }, } = event;
            // click the same item twice, tooltip will be hidden
            if (this.currentTarget === id) {
                this.hide(event);
            }
            else {
                this.show(event);
            }
        };
        /**
         * <zh/> 在目标元素(node/edge/combo)上移动
         *
         * <en/> Move on target element (node/edge/combo)
         * @param event - <zh/> 目标元素 | <en/> target element
         */
        this.onPointerMove = (event) => {
            const { target } = event;
            if (!this.currentTarget || target.id === this.currentTarget) {
                return;
            }
            this.show(event);
        };
        /**
         * <zh/> 点击画布/触发拖拽/出现上下文菜单隐藏tooltip
         *
         * <en/> Hide tooltip when clicking canvas/triggering drag/appearing context menu
         * @param event - <zh/> 目标元素 | <en/> target element
         */
        this.onPointerLeave = (event) => {
            this.hide(event);
        };
        /**
         * <zh/> 移动画布
         *
         * <en/> Move canvas
         * @param event - <zh/> 目标元素 | <en/> target element
         */
        this.onCanvasMove = (event) => {
            this.hide(event);
        };
        this.onPointerOver = (event) => {
            this.show(event);
        };
        /**
         * <zh/> 显示目标元素的提示框
         *
         * <en/> Show tooltip of target element
         * @param id - <zh/> 元素 ID | <en/> element ID
         */
        this.showById = (id) => __awaiter(this, void 0, void 0, function* () {
            const event = {
                target: { id },
            };
            yield this.show(event);
        });
        this.getElementData = (id, targetType) => {
            const { model } = this.context;
            switch (targetType) {
                case 'node':
                    return model.getNodeData([id]);
                case 'edge':
                    return model.getEdgeData([id]);
                case 'combo':
                    return model.getComboData([id]);
                default:
                    return [];
            }
        };
        /**
         * <zh/> 在目标元素上显示tooltip
         *
         * <en/> Show tooltip on target element
         * @param event - <zh/> 目标元素 | <en/> target element
         * @internal
         */
        this.show = (event) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const { client, target: { id }, } = event;
            if (isToBeDestroyed(event.target))
                return;
            const targetType = this.context.graph.getElementType(id);
            const { getContent, title } = this.options;
            const items = this.getElementData(id, targetType);
            if (!this.tooltipElement || !this.isEnable(event, items))
                return;
            let tooltipContent = {};
            if (getContent) {
                tooltipContent.content = yield getContent(event, items);
                if (!tooltipContent.content)
                    return;
            }
            else {
                const style = this.context.graph.getElementRenderStyle(id);
                const color = targetType === 'node' ? style.fill : style.stroke;
                tooltipContent = {
                    title: title || targetType,
                    data: items.map((item) => {
                        return {
                            name: 'ID',
                            value: item.id || `${item.source} -> ${item.target}`,
                            color,
                        };
                    }),
                };
            }
            this.currentTarget = id;
            let x;
            let y;
            if (client) {
                x = client.x;
                y = client.y;
            }
            else {
                const style = get(items, '0.style', { x: 0, y: 0 });
                x = style.x;
                y = style.y;
            }
            (_b = (_a = this.options).onOpenChange) === null || _b === void 0 ? void 0 : _b.call(_a, true);
            this.tooltipElement.update(Object.assign(Object.assign(Object.assign({}, this.tooltipStyleProps), { x,
                y, style: {
                    '.tooltip': {
                        visibility: 'visible',
                    },
                } }), tooltipContent));
        });
        /**
         * <zh/> 隐藏tooltip
         *
         * <en/> Hidden tooltip
         * @param event - <zh/> 目标元素,不传则为外部调用 | <en/> Target element, not passed in as external call
         */
        this.hide = (event) => {
            var _a, _b, _c, _d, _e;
            // if e is undefined, hide the tooltip， external call
            if (!event) {
                (_b = (_a = this.options).onOpenChange) === null || _b === void 0 ? void 0 : _b.call(_a, false);
                (_c = this.tooltipElement) === null || _c === void 0 ? void 0 : _c.hide();
                this.currentTarget = null;
                return;
            }
            if (!this.tooltipElement)
                return;
            // No target node: tooltip has been hidden. No need for duplicated call.
            if (!this.currentTarget)
                return;
            const { client: { x, y }, } = event;
            (_e = (_d = this.options).onOpenChange) === null || _e === void 0 ? void 0 : _e.call(_d, false);
            this.tooltipElement.hide(x, y);
            this.currentTarget = null;
        };
        this.initTooltip = () => {
            var _a;
            const tooltipElement = new TooltipComponent({
                className: 'tooltip',
                style: this.tooltipStyleProps,
            });
            (_a = this.container) === null || _a === void 0 ? void 0 : _a.appendChild(tooltipElement.HTMLTooltipElement);
            return tooltipElement;
        };
        this.render();
        this.bindEvents();
    }
    /**
     * <zh/> 获取事件及处理事件的方法
     *
     * <en/> Get event and handle event methods
     * @returns <zh/> 事件及处理事件的方法 | <en/> Event and handling event methods
     */
    getEvents() {
        if (this.options.trigger === 'click') {
            return {
                'node:click': this.onClick,
                'edge:click': this.onClick,
                'combo:click': this.onClick,
                'canvas:click': this.onPointerLeave,
                contextmenu: this.onPointerLeave,
                drag: this.onPointerLeave,
            };
        }
        return {
            'node:pointerover': this.onPointerOver,
            'node:pointermove': this.onPointerMove,
            'canvas:pointermove': this.onCanvasMove,
            'edge:pointerover': this.onPointerOver,
            'edge:pointermove': this.onPointerMove,
            'combo:pointerover': this.onPointerOver,
            'combo:pointermove': this.onPointerMove,
            contextmenu: this.onPointerLeave,
            'node:drag': this.onPointerLeave,
        };
    }
    /**
     * <zh/> 更新tooltip配置
     *
     * <en/> Update the tooltip configuration
     * @param options - <zh/> 配置项 | <en/> options
     * @internal
     */
    update(options) {
        var _a;
        this.unbindEvents();
        super.update(options);
        if (this.tooltipElement) {
            (_a = this.container) === null || _a === void 0 ? void 0 : _a.removeChild(this.tooltipElement.HTMLTooltipElement);
        }
        this.tooltipElement = this.initTooltip();
        this.bindEvents();
    }
    render() {
        const { canvas } = this.context;
        const $container = canvas.getContainer();
        if (!$container)
            return;
        this.container = $container;
        this.tooltipElement = this.initTooltip();
    }
    unbindEvents() {
        const { graph } = this.context;
        /** The previous event binding needs to be removed when updating the trigger. */
        const events = this.getEvents();
        Object.keys(events).forEach((eventName) => {
            graph.off(eventName, events[eventName]);
        });
    }
    bindEvents() {
        const { graph } = this.context;
        const events = this.getEvents();
        Object.keys(events).forEach((eventName) => {
            graph.on(eventName, events[eventName]);
        });
    }
    get tooltipStyleProps() {
        const { canvas } = this.context;
        const { center } = canvas.getBounds();
        const $container = canvas.getContainer();
        const { top, left } = $container.getBoundingClientRect();
        const { style, position, enterable, container = { x: -left, y: -top }, title, offset } = this.options;
        const [x, y] = center;
        const [width, height] = canvas.getSize();
        return {
            x,
            y,
            container,
            title,
            bounding: { x: 0, y: 0, width, height },
            position,
            enterable,
            offset,
            style,
        };
    }
    /**
     * <zh/> 销毁tooltip
     *
     * <en/> Destroy tooltip
     * @internal
     */
    destroy() {
        var _a;
        this.unbindEvents();
        if (this.tooltipElement) {
            (_a = this.container) === null || _a === void 0 ? void 0 : _a.removeChild(this.tooltipElement.HTMLTooltipElement);
        }
        super.destroy();
    }
}
Tooltip.defaultOptions = {
    trigger: 'hover',
    position: 'top-right',
    enterable: false,
    enable: true,
    offset: [10, 10],
    style: {
        '.tooltip': {
            visibility: 'hidden',
        },
    },
};
//# sourceMappingURL=tooltip.js.map