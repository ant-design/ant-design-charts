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
exports.Hull = void 0;
const util_1 = require("@antv/util");
const constants_1 = require("../../constants");
const shapes_1 = require("../../elements/shapes");
const id_1 = require("../../utils/id");
const position_1 = require("../../utils/position");
const base_plugin_1 = require("../base-plugin");
const hull_1 = require("./hull");
const util_2 = require("./util");
/**
 * <zh/> 轮廓
 *
 * <en/> Hull
 * @remarks
 * <zh/> 轮廓包围（Hull）用于处理和表示一组点的凸多边形包围盒。轮廓包围分为两种形态：凸包和凹包。
 *
 * <zh/> 凸包（Convex Hull）：这是一个凸多边形，它包含所有的点，并且没有任何凹陷。你可以将其想象为一组点的最小包围盒，没有任何点在这个多边形的外部。
 *
 * <zh/> 凹包（Concave Hull）：这是一个凹多边形，它同样包含所有的点，但是可能会有凹陷。凹包的凹陷程度由 concavity 参数控制。concavity 越大，凹陷越小。当 concavity 为 Infinity 时，凹包就变成了凸包。
 *
 * <en/> Hull is used to process and represent the convex polygon bounding box of a set of points. Hull has two forms: convex hull and concave hull.
 *
 * <en/>  Convex Hull: This is a convex polygon that contains all points and has no concave. You can think of it as the smallest bounding box of a set of points, with no points outside the polygon.
 *
 *  <en/>  Concave Hull: This is a concave polygon that also contains all points, but may have concave. The concavity of the concave hull is controlled by the concavity parameter. The larger the concavity, the smaller the concave. When concavity is Infinity, the concave hull becomes a convex hull.
 */
class Hull extends base_plugin_1.BasePlugin {
    constructor(context, options) {
        super(context, Object.assign({}, Hull.defaultOptions, options));
        /**
         * <zh/> 在 Hull 上的元素
         *
         * <en/> Element Ids on Hull
         */
        this.hullMemberIds = [];
        this.drawHull = () => {
            if (!this.shape) {
                this.shape = new shapes_1.Contour({ style: this.getHullStyle() });
                this.context.canvas.appendChild(this.shape);
            }
            else {
                const forceUpdate = !(0, util_1.isEqual)(this.optionsCache, this.options);
                this.shape.update(this.getHullStyle(forceUpdate));
            }
            this.optionsCache = Object.assign({}, this.options);
        };
        this.updateHullPath = (event) => {
            if (!this.shape)
                return;
            if (!this.options.members.includes((0, id_1.idOf)(event.data)))
                return;
            this.shape.update({ d: this.getHullPath(true) });
        };
        this.getHullPath = (forceUpdate = false) => {
            const { graph } = this.context;
            const members = this.getMember();
            if (members.length === 0)
                return '';
            const data = members.map((id) => graph.getNodeData(id));
            const vertices = (0, hull_1.hull)(data.map(position_1.positionOf), this.options.concavity).slice(1).reverse();
            const hullMemberIds = vertices.flatMap((point) => data.filter((m) => (0, util_1.isEqual)((0, position_1.positionOf)(m), point)).map(id_1.idOf));
            if ((0, util_1.isEqual)(hullMemberIds, this.hullMemberIds) && !forceUpdate)
                return this.path;
            this.hullMemberIds = hullMemberIds;
            this.path = (0, util_2.computeHullPath)(vertices, this.getPadding(), this.options.corner);
            return this.path;
        };
        this.bindEvents();
    }
    bindEvents() {
        this.context.graph.on(constants_1.GraphEvent.AFTER_RENDER, this.drawHull);
        this.context.graph.on(constants_1.GraphEvent.AFTER_ELEMENT_UPDATE, this.updateHullPath);
    }
    unbindEvents() {
        this.context.graph.off(constants_1.GraphEvent.AFTER_RENDER, this.drawHull);
        this.context.graph.off(constants_1.GraphEvent.AFTER_ELEMENT_UPDATE, this.updateHullPath);
    }
    getHullStyle(forceUpdate) {
        const _a = this.options, { members, padding, corner } = _a, style = __rest(_a, ["members", "padding", "corner"]);
        return Object.assign(Object.assign({}, style), { d: this.getHullPath(forceUpdate) });
    }
    getPadding() {
        const { graph } = this.context;
        const memberPadding = this.hullMemberIds.reduce((acc, id) => {
            const { halfExtents } = graph.getElementRenderBounds(id);
            const size = Math.max(halfExtents[0], halfExtents[1]);
            return Math.max(acc, size);
        }, 0);
        return memberPadding + this.options.padding;
    }
    /**
     * <zh/> 添加 Hull 成员
     *
     * <en/> Add Hull member
     * @param members - <zh/> 元素 Ids | <en/> Element Ids
     */
    addMember(members) {
        const membersToAdd = Array.isArray(members) ? members : [members];
        this.options.members = [...new Set([...this.options.members, ...membersToAdd])];
        this.shape.update({ d: this.getHullPath() });
    }
    /**
     * <zh/> 移除 Hull 成员
     *
     * <en/> Remove Hull member
     * @param members - <zh/> 元素 Ids | <en/> Element Ids
     */
    removeMember(members) {
        const membersToRemove = Array.isArray(members) ? members : [members];
        this.options.members = this.options.members.filter((id) => !membersToRemove.includes(id));
        if (membersToRemove.some((id) => this.hullMemberIds.includes(id))) {
            this.shape.update({ d: this.getHullPath() });
        }
    }
    /**
     * <zh/> 更新 Hull 成员
     *
     * <en/> Update Hull member
     * @param members - <zh/> 元素 Ids | <en/> Element Ids
     */
    updateMember(members) {
        this.options.members = (0, util_1.isFunction)(members) ? members(this.options.members) : members;
        this.shape.update(this.getHullStyle(true));
    }
    /**
     * <zh/> 获取 Hull 成员
     *
     * <en/> Get Hull member
     * @returns <zh/> 元素 Ids | <en/> Element Ids
     */
    getMember() {
        return this.options.members;
    }
    /**
     * <zh/> 销毁 Hull
     *
     * <en/> Destroy Hull
     * @internal
     */
    destroy() {
        this.unbindEvents();
        this.shape.destroy();
        this.hullMemberIds = [];
        super.destroy();
    }
}
exports.Hull = Hull;
Hull.defaultOptions = {
    members: [],
    padding: 10,
    corner: 'rounded',
    concavity: Infinity,
    /** hull style */
    fill: 'lightblue',
    fillOpacity: 0.2,
    labelOpacity: 1,
    stroke: 'blue',
    strokeOpacity: 0.2,
};
//# sourceMappingURL=index.js.map