"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositionNode = void 0;
const style_1 = require("../utils/style");
const node_1 = require("./node");
const define_1 = require("./define");
const props_1 = require("./props");
let CompositionNode = class CompositionNode extends node_1.Node {
    /**
     * Change current node data and its children data.
     */
    changeData(data) {
        var _a;
        const chart = this.getRoot();
        if (!chart)
            return;
        this.attr('data', data);
        if ((_a = this.children) === null || _a === void 0 ? void 0 : _a.length) {
            this.children.forEach((child) => {
                child.attr('data', data);
            });
        }
        return chart === null || chart === void 0 ? void 0 : chart.render();
    }
    /**
     * Get view instance by key.
     */
    getView() {
        const chart = this.getRoot();
        const { views } = chart.getContext();
        if (!(views === null || views === void 0 ? void 0 : views.length))
            return undefined;
        return views.find((view) => view.key === this._key);
    }
    getScale() {
        var _a;
        return (_a = this.getView()) === null || _a === void 0 ? void 0 : _a.scale;
    }
    getScaleByChannel(channel) {
        const scale = this.getScale();
        if (scale)
            return scale[channel];
        return;
    }
    getCoordinate() {
        var _a;
        return (_a = this.getView()) === null || _a === void 0 ? void 0 : _a.coordinate;
    }
    getTheme() {
        var _a;
        return (_a = this.getView()) === null || _a === void 0 ? void 0 : _a.theme;
    }
    getGroup() {
        const key = this._key;
        if (!key)
            return undefined;
        const chart = this.getRoot();
        const chartGroup = chart.getContext().canvas.getRoot();
        return chartGroup.getElementById(key);
    }
    /**
     * Show the view.
     */
    show() {
        const group = this.getGroup();
        if (!group)
            return;
        !group.isVisible() && (0, style_1.show)(group);
    }
    /**
     * Hide the view.
     */
    hide() {
        const group = this.getGroup();
        if (!group)
            return;
        group.isVisible() && (0, style_1.hide)(group);
    }
};
CompositionNode = __decorate([
    (0, define_1.defineProps)(props_1.compositionProps)
], CompositionNode);
exports.CompositionNode = CompositionNode;
//# sourceMappingURL=composition.js.map