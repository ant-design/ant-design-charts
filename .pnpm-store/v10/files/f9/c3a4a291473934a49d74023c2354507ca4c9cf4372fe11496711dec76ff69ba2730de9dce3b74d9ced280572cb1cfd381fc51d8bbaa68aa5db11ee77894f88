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
import { Timebar as TimebarComponent } from '@antv/component';
import { isArray, isDate, isNumber } from '@antv/util';
import { idOf } from '../utils/id';
import { parsePadding } from '../utils/padding';
import { BasePlugin } from './base-plugin';
import { createPluginCanvas } from './utils/canvas';
const prospectiveTimeKeys = ['timestamp', 'time', 'date', 'datetime'];
/**
 * <zh/> 时间组件
 *
 * <en/> Timebar
 */
export class Timebar extends BasePlugin {
    get padding() {
        return parsePadding(this.options.padding);
    }
    constructor(context, options) {
        super(context, Object.assign({}, Timebar.defaultOptions, options));
        this.backup();
        this.upsertTimebar();
    }
    /**
     * <zh/> 播放
     *
     * <en/> Play
     */
    play() {
        var _a;
        (_a = this.timebar) === null || _a === void 0 ? void 0 : _a.play();
    }
    /**
     * <zh/> 暂停
     *
     * <en/> Pause
     */
    pause() {
        var _a;
        (_a = this.timebar) === null || _a === void 0 ? void 0 : _a.pause();
    }
    /**
     * <zh/> 前进
     *
     * <en/> Forward
     */
    forward() {
        var _a;
        (_a = this.timebar) === null || _a === void 0 ? void 0 : _a.forward();
    }
    /**
     * <zh/> 后退
     *
     * <en/> Backward
     */
    backward() {
        var _a;
        (_a = this.timebar) === null || _a === void 0 ? void 0 : _a.backward();
    }
    /**
     * <zh/> 重置
     *
     * <en/> Reset
     */
    reset() {
        var _a;
        (_a = this.timebar) === null || _a === void 0 ? void 0 : _a.reset();
    }
    /**
     * <zh/> 更新时间条配置项
     *
     * <en/> Update timebar configuration options
     * @param options - <zh/> 配置项 | <en/> Options
     * @internal
     */
    update(options) {
        super.update(options);
        this.backup();
        this.upsertTimebar();
    }
    /**
     * <zh/> 备份数据
     *
     * <en/> Backup data
     */
    backup() {
        this.originalData = shallowCopy(this.context.graph.getData());
    }
    upsertTimebar() {
        const { canvas } = this.context;
        const _a = this.options, { onChange, timebarType, data, x, y, width, height, mode } = _a, restOptions = __rest(_a, ["onChange", "timebarType", "data", "x", "y", "width", "height", "mode"]);
        const canvasSize = canvas.getSize();
        const [top] = this.padding;
        this.upsertCanvas().ready.then(() => {
            var _a;
            const style = Object.assign(Object.assign({ x: canvasSize[0] / 2 - width / 2, y: top, onChange: (value) => {
                    const range = (isArray(value) ? value : [value, value]).map((time) => isDate(time) ? time.getTime() : time);
                    if (this.options.mode === 'modify')
                        this.filterElements(range);
                    else
                        this.hiddenElements(range);
                    onChange === null || onChange === void 0 ? void 0 : onChange(range);
                } }, restOptions), { data: data.map((datum) => (isNumber(datum) ? { time: datum, value: 0 } : datum)), width,
                height, type: timebarType });
            if (!this.timebar) {
                this.timebar = new TimebarComponent({ style });
                (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.appendChild(this.timebar);
            }
            else {
                this.timebar.update(style);
            }
        });
    }
    upsertCanvas() {
        if (this.canvas)
            return this.canvas;
        const { className, height, position } = this.options;
        const graphCanvas = this.context.canvas;
        const [width] = graphCanvas.getSize();
        const [top, , bottom] = this.padding;
        const [$container, canvas] = createPluginCanvas({
            width,
            height: height + top + bottom,
            graphCanvas,
            className: 'timebar',
            placement: position,
        });
        this.container = $container;
        if (className)
            $container.classList.add(className);
        this.canvas = canvas;
        return this.canvas;
    }
    filterElements(range) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!this.originalData)
                return;
            const { elementTypes, getTime } = this.options;
            const { graph, element } = this.context;
            const newData = shallowCopy(this.originalData);
            elementTypes.forEach((type) => {
                const key = `${type}s`;
                newData[key] = (this.originalData[key] || []).filter((datum) => {
                    const time = getTime(datum);
                    if (match(time, range))
                        return true;
                    return false;
                });
            });
            const nodeLikeIds = [...newData.nodes, ...newData.combos].map((datum) => idOf(datum));
            newData.edges = newData.edges.filter((edge) => {
                const source = edge.source;
                const target = edge.target;
                return nodeLikeIds.includes(source) && nodeLikeIds.includes(target);
            });
            graph.setData(newData);
            yield ((_a = element.draw({ animation: false, silence: true })) === null || _a === void 0 ? void 0 : _a.finished);
        });
    }
    hiddenElements(range) {
        const { graph } = this.context;
        const { elementTypes, getTime } = this.options;
        const hideElementId = [];
        const showElementId = [];
        elementTypes.forEach((elementType) => {
            var _a;
            const key = `${elementType}s`;
            const elementData = ((_a = this.originalData) === null || _a === void 0 ? void 0 : _a[key]) || [];
            elementData.forEach((elementDatum) => {
                const id = idOf(elementDatum);
                const time = getTime(elementDatum);
                if (match(time, range))
                    showElementId.push(id);
                else
                    hideElementId.push(id);
            });
        });
        graph.hideElement(hideElementId, false);
        graph.showElement(showElementId, false);
    }
    /**
     * <zh/> 销毁时间条
     *
     * <en/> Destroy the timebar
     * @internal
     */
    destroy() {
        var _a, _b, _c;
        const { graph } = this.context;
        this.originalData && graph.setData(Object.assign({}, this.originalData));
        (_a = this.timebar) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this.canvas) === null || _b === void 0 ? void 0 : _b.destroy();
        (_c = this.container) === null || _c === void 0 ? void 0 : _c.remove();
        this.originalData = undefined;
        this.container = undefined;
        this.timebar = undefined;
        this.canvas = undefined;
        super.destroy();
    }
}
Timebar.defaultOptions = {
    position: 'bottom',
    enable: true,
    timebarType: 'time',
    className: 'g6-timebar',
    width: 450,
    height: 60,
    zIndex: 3,
    elementTypes: ['node'],
    padding: 10,
    mode: 'modify',
    getTime: (datum) => inferTime(datum, prospectiveTimeKeys, undefined),
    loop: false,
};
const shallowCopy = (data) => {
    const { nodes = [], edges = [], combos = [] } = data;
    return {
        nodes: [...nodes],
        edges: [...edges],
        combos: [...combos],
    };
};
const match = (time, range) => {
    if (isNumber(range))
        return time === range;
    const [start, end] = range;
    return time >= start && time <= end;
};
const inferTime = (datum, optionsKeys, defaultValue) => {
    var _a;
    for (let i = 0; i < optionsKeys.length; i++) {
        const key = optionsKeys[i];
        const val = (_a = datum.data) === null || _a === void 0 ? void 0 : _a[key];
        if (val)
            return val;
    }
    return defaultValue;
};
//# sourceMappingURL=timebar.js.map