"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSets = void 0;
const util_1 = require("@antv/util");
const bubblesets_js_1 = require("bubblesets-js");
const constants_1 = require("../constants");
const shapes_1 = require("../elements/shapes");
const bbox_1 = require("../utils/bbox");
const diff_1 = require("../utils/diff");
const id_1 = require("../utils/id");
const path_1 = require("../utils/path");
const point_1 = require("../utils/point");
const base_plugin_1 = require("./base-plugin");
/**
 * <zh/> 气泡集
 *
 * <en/> BubbleSets
 * @remarks
 * <zh/> BubbleSets 最初由 Christopher Collins 在 2009 年的论文 "Bubble Sets: Revealing Set Relations with Isocontours over Existing Visualizations" 中提出。
 *
 * <zh/> 实现原理是通过创建一种类似于气泡的形状来表示集合。每个集合都被表示为一个独特的 "气泡"，集合中的元素被包含在这个气泡内部。如果两个集合有交集，那么这两个气泡会有重叠的部分，这个重叠的部分就表示这两个集合的交集。
 *
 * <en/> BubbleSets was originally proposed by Christopher Collins in the 2009 paper "Bubble Sets: Revealing Set Relations with Isocontours over Existing Visualizations".
 *
 * <en/> The principle is to represent sets by creating a shape similar to a bubble. Each set is represented by a unique "bubble", and the elements in the set are contained within this bubble. If two sets have an intersection, then the two bubbles will have an overlapping part, which represents the intersection of the two sets.
 */
class BubbleSets extends base_plugin_1.BasePlugin {
    constructor(context, options) {
        super(context, (0, util_1.deepMix)({}, BubbleSets.defaultOptions, options));
        this.members = new Map();
        this.avoidMembers = new Map();
        this.bubbleSetOptions = {};
        this.drawBubbleSets = () => {
            const { style, bubbleSetOptions } = this.parseOptions();
            if (!(0, util_1.isEqual)(this.bubbleSetOptions, bubbleSetOptions))
                this.init();
            this.bubbleSetOptions = Object.assign({}, bubbleSetOptions);
            const finalStyle = Object.assign(Object.assign({}, style), { d: this.getPath() });
            if (!this.shape) {
                this.shape = new shapes_1.Contour({ style: finalStyle });
                this.context.canvas.appendChild(this.shape);
            }
            else {
                this.shape.update(finalStyle);
            }
        };
        this.updateBubbleSetsPath = (event) => {
            if (!this.shape)
                return;
            const id = (0, id_1.idOf)(event.data);
            if (![...this.options.members, ...this.options.avoidMembers].includes(id))
                return;
            this.shape.update(Object.assign(Object.assign({}, this.parseOptions().style), { d: this.getPath(id) }));
        };
        this.getPath = (forceUpdateId) => {
            const { graph } = this.context;
            const currMembers = this.options.members;
            const prevMembers = [...this.members.keys()];
            const currAvoidMembers = this.options.avoidMembers;
            const prevAvoidMembers = [...this.avoidMembers.keys()];
            if (!forceUpdateId && (0, util_1.isEqual)(currMembers, prevMembers) && (0, util_1.isEqual)(currAvoidMembers, prevAvoidMembers))
                return this.path;
            const { enter: membersToEnter = [], exit: membersToExit = [] } = (0, diff_1.arrayDiff)(prevMembers, currMembers, (d) => d);
            const { enter: avoidMembersToEnter = [], exit: avoidMembersToExit = [] } = (0, diff_1.arrayDiff)(prevAvoidMembers, currAvoidMembers, (d) => d);
            if (forceUpdateId) {
                membersToExit.push(forceUpdateId);
                membersToEnter.push(forceUpdateId);
            }
            const updateBubbleSets = (ids, isEntering, isMember) => {
                ids.forEach((id) => {
                    const members = isMember ? this.members : this.avoidMembers;
                    const pushMember = isMember ? 'pushMember' : 'pushNonMember';
                    const removeMember = isMember ? 'removeMember' : 'removeNonMember';
                    if (isEntering) {
                        let area;
                        if (graph.getElementType(id) === 'edge') {
                            [area] = convertToLine(graph, id);
                            this.bubbleSets.pushEdge(area);
                        }
                        else {
                            [area] = convertToRectangle(graph, id);
                            this.bubbleSets[pushMember](area);
                        }
                        members.set(id, area);
                    }
                    else {
                        const area = members.get(id);
                        if (area) {
                            if (graph.getElementType(id) === 'edge') {
                                this.bubbleSets.removeEdge(area);
                            }
                            else {
                                this.bubbleSets[removeMember](area);
                            }
                            members.delete(id);
                        }
                    }
                });
            };
            updateBubbleSets(membersToExit, false, true);
            updateBubbleSets(membersToEnter, true, true);
            updateBubbleSets(avoidMembersToExit, false, false);
            updateBubbleSets(avoidMembersToEnter, true, false);
            const pointPath = this.bubbleSets.compute();
            const cleanPath = pointPath.sample(8).simplify(0).bSplines().simplify(0);
            this.path = (0, path_1.getClosedSpline)(cleanPath.points.map(point_1.parsePoint));
            return this.path;
        };
        this.bindEvents();
        this.bubbleSets = new bubblesets_js_1.BubbleSets(this.options);
    }
    bindEvents() {
        this.context.graph.on(constants_1.GraphEvent.AFTER_RENDER, this.drawBubbleSets);
        this.context.graph.on(constants_1.GraphEvent.AFTER_ELEMENT_UPDATE, this.updateBubbleSetsPath);
    }
    init() {
        this.bubbleSets = new bubblesets_js_1.BubbleSets(this.options);
        this.members = new Map();
        this.avoidMembers = new Map();
    }
    parseOptions() {
        const _a = this.options, { type, key, members, avoidMembers } = _a, rest = __rest(_a, ["type", "key", "members", "avoidMembers"]);
        const res = Object.keys(rest).reduce((acc, key) => {
            if (key in bubblesets_js_1.defaultOptions) {
                acc.bubbleSetOptions[key] = rest[key];
            }
            else {
                acc.style[key] = rest[key];
            }
            return acc;
        }, { style: {}, bubbleSetOptions: {} });
        return Object.assign({ type, key, members, avoidMembers }, res);
    }
    /**
     * <zh/> 添加成员元素
     *
     * <en/> Add member elements
     * @param members - <zh/> 单个或多个 | <en/> single or multiple
     */
    addMember(members) {
        const membersToAdd = Array.isArray(members) ? members : [members];
        if (membersToAdd.some((member) => this.options.avoidMembers.includes(member))) {
            this.options.avoidMembers = this.options.avoidMembers.filter((id) => !membersToAdd.includes(id));
        }
        this.options.members = [...new Set([...this.options.members, ...membersToAdd])];
        this.drawBubbleSets();
    }
    /**
     * <zh/> 移除成员元素
     *
     * <en/> Remove member elements
     * @param members - <zh/> 单个或多个 | <en/> single or multiple
     */
    removeMember(members) {
        const membersToRemove = Array.isArray(members) ? members : [members];
        this.options.members = this.options.members.filter((id) => !membersToRemove.includes(id));
        this.drawBubbleSets();
    }
    /**
     * <zh/> 更新成员元素
     *
     * <en/> Update member elements
     * @param members - <zh/> 值或者回调函数 | <en/> value or callback function
     */
    updateMember(members) {
        this.options.members = (0, util_1.isFunction)(members) ? members(this.options.members) : members;
        this.drawBubbleSets();
    }
    /**
     * <zh/> 获取成员元素
     *
     * <en/> Get member elements
     * @returns <zh/> 成员元素数组 | <en/> member elements array
     */
    getMember() {
        return this.options.members;
    }
    /**
     * <zh/> 添加需要避开的元素
     *
     * <en/> Add elements to avoid
     * @param avoidMembers - <zh/> 单个或多个 | <en/> single or multiple
     */
    addAvoidMember(avoidMembers) {
        const avoidMembersToAdd = Array.isArray(avoidMembers) ? avoidMembers : [avoidMembers];
        if (avoidMembersToAdd.some((AvoidMember) => this.options.members.includes(AvoidMember))) {
            this.options.members = this.options.members.filter((id) => !avoidMembersToAdd.includes(id));
        }
        this.options.avoidMembers = [...new Set([...this.options.avoidMembers, ...avoidMembersToAdd])];
        this.drawBubbleSets();
    }
    /**
     * <zh/> 移除需要避开的元素
     *
     * <en/> Remove elements to avoid
     * @param avoidMembers - <zh/> 单个或多个 | <en/> single or multiple
     */
    removeAvoidMember(avoidMembers) {
        const avoidMembersToRemove = Array.isArray(avoidMembers) ? avoidMembers : [avoidMembers];
        if (this.options.avoidMembers.some((member) => avoidMembersToRemove.includes(member))) {
            this.options.avoidMembers = this.options.avoidMembers.filter((id) => !avoidMembersToRemove.includes(id));
            this.drawBubbleSets();
        }
    }
    /**
     * <zh/> 更新需要避开的元素
     *
     * <en/> Update elements to avoid
     * @param avoidMembers - <zh/> 单个或多个 | <en/> single or multiple
     */
    updateAvoidMember(avoidMembers) {
        this.options.avoidMembers = Array.isArray(avoidMembers) ? avoidMembers : [avoidMembers];
        this.drawBubbleSets();
    }
    /**
     * <zh/> 获取需要避开的元素
     *
     * <en/> Get elements to avoid
     * @returns avoidMembers <zh/> 成员元素数组 | <en/> member elements array
     */
    getAvoidMember() {
        return this.options.avoidMembers;
    }
    /**
     * <zh/> 销毁
     *
     * <en/> Destroy
     * @internal
     */
    destroy() {
        this.context.graph.off(constants_1.GraphEvent.AFTER_RENDER, this.drawBubbleSets);
        this.context.graph.off(constants_1.GraphEvent.AFTER_ELEMENT_UPDATE, this.updateBubbleSetsPath);
        this.shape.destroy();
        super.destroy();
    }
}
exports.BubbleSets = BubbleSets;
BubbleSets.defaultOptions = Object.assign({ members: [], avoidMembers: [], 
    /** shape style */
    fill: 'lightblue', fillOpacity: 0.2, stroke: 'blue', strokeOpacity: 0.2 }, bubblesets_js_1.defaultOptions);
/**
 * <zh/> 将节点转换为 BubbleSetJS 支持的矩形
 *
 * <en/> Convert nodes to rectangles supported by BubbleSetJS
 * @param graph - <zh/> 图实例 | <en/> graph instance
 * @param ids - <zh/> 元素 ID 数组 | <en/> element ID array
 * @returns <zh/> 矩形数组 | <en/> rectangle array
 */
const convertToRectangle = (graph, ids) => {
    const idArr = Array.isArray(ids) ? ids : [ids];
    return idArr.map((id) => {
        const bbox = graph.getElementRenderBounds(id);
        return new bubblesets_js_1.Rectangle(bbox.min[0], bbox.min[1], (0, bbox_1.getBBoxWidth)(bbox), (0, bbox_1.getBBoxHeight)(bbox));
    });
};
/**
 * <zh/> 将边转换为 BubbleSetJS 支持的线
 *
 * <en/> Convert edges to lines supported by BubbleSetJS
 * @param graph - <zh/> 图实例 | <en/> graph instance
 * @param ids - <zh/> 元素 ID 数组 | <en/> element ID array
 * @returns <zh/> 线数组 | <en/> line array
 */
const convertToLine = (graph, ids) => {
    const idArr = Array.isArray(ids) ? ids : [ids];
    return idArr.map((id) => {
        const data = graph.getEdgeData(id);
        const source = graph.getElementPosition(data.source);
        const target = graph.getElementPosition(data.target);
        return bubblesets_js_1.Line.from({ x1: source[0], y1: source[1], x2: target[0], y2: target[1] });
    });
};
//# sourceMappingURL=bubble-sets.js.map