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
import { Category } from '@antv/component';
import { get, isFunction } from '@antv/util';
import { GraphEvent } from '../constants';
import { BasePlugin } from './base-plugin';
import { createPluginCanvas } from './utils/canvas';
/**
 * <zh/> 图例
 *
 * <en/> Legend
 * @remarks
 * <zh/> 图例插件用于展示图中元素的分类信息，支持节点、边、组合的分类信息展示。
 *
 * <en/> The legend plugin is used to display the classification information of elements in the graph, and supports the display of classification information of nodes, edges, and combos.
 */
export class Legend extends BasePlugin {
    constructor(context, options) {
        super(context, Object.assign({}, Legend.defaultOptions, options));
        this.typePrefix = '__data__';
        this.draw = false;
        this.fieldMap = {
            node: new Map(),
            edge: new Map(),
            combo: new Map(),
        };
        this.selectedItems = [];
        this.bindEvents = () => {
            const { graph } = this.context;
            graph.on(GraphEvent.AFTER_DRAW, this.createElement);
        };
        this.changeState = (el, state) => {
            const { graph } = this.context;
            const { typePrefix } = this;
            const composeId = get(el, [typePrefix, 'id']);
            const category = get(el, [typePrefix, 'style', 'labelText']);
            const [type] = composeId.split('__');
            const ids = this.fieldMap[type].get(category) || [];
            graph.setElementState(Object.fromEntries(ids === null || ids === void 0 ? void 0 : ids.map((id) => [id, state])));
        };
        /**
         * <zh/> 图例元素点击事件
         *
         * <en/> Legend element click event
         * @param event - <zh/> 点击的元素 | <en/> The element that is clicked
         */
        this.click = (event) => {
            if (this.options.trigger === 'hover')
                return;
            const composeId = get(event, [this.typePrefix, 'id']);
            if (!this.selectedItems.includes(composeId)) {
                this.selectedItems.push(composeId);
                this.changeState(event, 'selected');
            }
            else {
                this.selectedItems = this.selectedItems.filter((item) => item !== composeId);
                this.changeState(event, []);
            }
        };
        /**
         * <zh/> 图例元素移出事件
         *
         * <en/> Legend element mouseleave event
         * @param event - <zh/> 移出的元素 | <en/> The element that is moved out
         */
        this.mouseleave = (event) => {
            if (this.options.trigger === 'click')
                return;
            this.selectedItems = [];
            this.changeState(event, []);
        };
        /**
         * <zh/> 图例元素移入事件
         *
         * <en/> Legend element mouseenter event
         * @param event - <zh/> 移入的元素 | <en/> The element that is moved in
         */
        this.mouseenter = (event) => {
            if (this.options.trigger === 'click')
                return;
            const composeId = get(event, [this.typePrefix, 'id']);
            if (!this.selectedItems.includes(composeId)) {
                this.selectedItems.push(composeId);
                this.changeState(event, 'active');
            }
            else {
                this.selectedItems = this.selectedItems.filter((item) => item !== composeId);
            }
        };
        this.setFieldMap = (field, id, type) => {
            if (!field)
                return;
            const map = this.fieldMap[type];
            if (!map)
                return;
            if (!map.has(field)) {
                map.set(field, [id]);
            }
            else {
                const ids = map.get(field);
                if (ids) {
                    ids.push(id);
                    map.set(field, ids);
                }
            }
        };
        this.getEvents = () => {
            return {
                mouseenter: this.mouseenter,
                mouseleave: this.mouseleave,
                click: this.click,
            };
        };
        this.getMarkerData = (field, elementType) => {
            if (!field)
                return [];
            const { model, element } = this.context;
            const { nodes, edges, combos } = model.getData();
            const items = {};
            const getField = (item) => {
                if (isFunction(field))
                    return field(item);
                return field;
            };
            const defaultType = {
                node: 'circle',
                edge: 'line',
                combo: 'rect',
            };
            // 用于将 G6 element 转换为 components 支持的类型
            // Used to convert G6 element to types supported by components
            const markerMapping = {
                circle: 'circle',
                ellipse: 'circle', // 待 components 支持 ellipse
                image: 'bowtie',
                rect: 'square',
                star: 'cross',
                triangle: 'triangle',
                diamond: 'diamond',
                cubic: 'dot',
                line: 'hyphen',
                polyline: 'hyphen',
                quadratic: 'hv',
                'cubic-horizontal': 'hyphen',
                'cubic-vertical': 'line',
            };
            const getElementStyle = (type, datum) => {
                const style = element === null || element === void 0 ? void 0 : element.getElementComputedStyle(type, datum);
                return style;
            };
            const getElementModel = (data, type) => {
                data.forEach((item) => {
                    const { id } = item;
                    const value = get(item, ['data', getField(item)]);
                    const marker = (element === null || element === void 0 ? void 0 : element.getElementType(type, item)) || 'circle';
                    const style = getElementStyle(type, item);
                    const color = (type === 'edge' ? style === null || style === void 0 ? void 0 : style.stroke : style === null || style === void 0 ? void 0 : style.fill) || '#1783ff';
                    if (id && value && value.replace(/\s+/g, '')) {
                        this.setFieldMap(value, id, type);
                        if (!items[value]) {
                            items[value] = {
                                id: `${type}__${id}`,
                                label: value,
                                marker: markerMapping[marker] || defaultType[type],
                                elementType: type,
                                lineWidth: 1,
                                stroke: color,
                                fill: color,
                            };
                        }
                    }
                });
            };
            switch (elementType) {
                case 'node':
                    getElementModel(nodes, 'node');
                    break;
                case 'edge':
                    getElementModel(edges, 'edge');
                    break;
                case 'combo':
                    getElementModel(combos, 'combo');
                    break;
                default:
                    return [];
            }
            return Object.values(items);
        };
        this.createElement = () => {
            if (this.draw) {
                this.updateElement();
                return;
            }
            const _a = this.options, { width, height, nodeField, edgeField, comboField, trigger, position, container, containerStyle, className } = _a, rest = __rest(_a, ["width", "height", "nodeField", "edgeField", "comboField", "trigger", "position", "container", "containerStyle", "className"]);
            const nodeItems = this.getMarkerData(nodeField, 'node');
            const edgeItems = this.getMarkerData(edgeField, 'edge');
            const comboItems = this.getMarkerData(comboField, 'combo');
            const items = [...nodeItems, ...comboItems, ...edgeItems];
            const categoryStyle = Object.assign({
                width,
                height,
                data: items,
                itemMarkerLineWidth: ({ lineWidth }) => lineWidth,
                itemMarker: ({ marker }) => marker,
                itemMarkerStroke: ({ stroke }) => stroke,
                itemMarkerFill: ({ fill }) => fill,
                gridCol: nodeItems.length,
            }, rest, this.getEvents());
            const category = new Category({
                className: 'legend',
                style: categoryStyle,
            });
            this.category = category;
            const canvas = this.upsertCanvas();
            canvas.appendChild(category);
            this.draw = true;
        };
        this.bindEvents();
    }
    /**
     * <zh/> 更新图例配置
     *
     * <en/> Update the legend configuration
     * @param options - <zh/> 图例配置项 | <en/> Legend options
     * @internal
     */
    update(options) {
        super.update(options);
        this.clear();
        this.createElement();
    }
    clear() {
        var _a, _b;
        (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this.container) === null || _b === void 0 ? void 0 : _b.remove();
        this.canvas = undefined;
        this.container = undefined;
        this.draw = false;
    }
    /**
     * <zh/> 刷新图例元素状态
     *
     * <en/> Refresh the status of the legend element
     */
    updateElement() {
        if (!this.category)
            return;
        this.category.update({
            itemMarkerOpacity: ({ id }) => {
                if (!this.selectedItems.length || this.selectedItems.includes(id))
                    return 1;
                return 0.5;
            },
            itemLabelOpacity: ({ id }) => {
                if (!this.selectedItems.length || this.selectedItems.includes(id))
                    return 1;
                return 0.5;
            },
        });
    }
    upsertCanvas() {
        if (this.canvas)
            return this.canvas;
        const graphCanvas = this.context.canvas;
        const [canvasWidth, canvasHeight] = graphCanvas.getSize();
        const { width = canvasWidth, height = canvasHeight, position, container, containerStyle, className } = this.options;
        const [$container, canvas] = createPluginCanvas({
            width,
            height,
            graphCanvas,
            container,
            containerStyle,
            placement: position,
            className: 'legend',
        });
        this.container = $container;
        if (className)
            $container.classList.add(className);
        this.canvas = canvas;
        return this.canvas;
    }
    /**
     * <zh/>销毁图例
     *
     * <en/> Destroy the legend
     * @internal
     */
    destroy() {
        this.clear();
        this.context.graph.off(GraphEvent.AFTER_DRAW, this.createElement);
        super.destroy();
    }
}
Legend.defaultOptions = {
    position: 'bottom',
    trigger: 'hover',
    orientation: 'horizontal',
    layout: 'flex',
    itemSpacing: 4,
    rowPadding: 10,
    colPadding: 10,
    itemMarkerSize: 16,
    itemLabelFontSize: 16,
    width: 240,
    height: 160,
};
//# sourceMappingURL=legend.js.map