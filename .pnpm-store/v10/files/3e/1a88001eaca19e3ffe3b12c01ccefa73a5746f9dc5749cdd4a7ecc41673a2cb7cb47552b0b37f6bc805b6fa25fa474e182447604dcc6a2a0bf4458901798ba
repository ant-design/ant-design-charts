"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkNode = void 0;
const node_1 = require("./node");
const define_1 = require("./define");
const props_1 = require("./props");
let MarkNode = class MarkNode extends node_1.Node {
    changeData(data) {
        const chart = this.getRoot();
        if (!chart)
            return;
        this.attr('data', data);
        return chart === null || chart === void 0 ? void 0 : chart.render();
    }
    /**
     * Get mark from chart views.
     */
    getMark() {
        var _a;
        const chartView = (_a = this.getRoot()) === null || _a === void 0 ? void 0 : _a.getView();
        if (!chartView)
            return undefined;
        const { markState } = chartView;
        const markKey = Array.from(markState.keys()).find((item) => item.key === this.attr('key'));
        return markState.get(markKey);
    }
    /**
     * Get all scales instance.
     */
    getScale() {
        var _a;
        const chartView = (_a = this.getRoot()) === null || _a === void 0 ? void 0 : _a.getView();
        if (!chartView)
            return undefined;
        return chartView === null || chartView === void 0 ? void 0 : chartView.scale;
    }
    /**
     * Get the scale instance by channel.
     */
    getScaleByChannel(channel) {
        var _a, _b;
        const chartView = (_a = this.getRoot()) === null || _a === void 0 ? void 0 : _a.getView();
        if (!chartView)
            return undefined;
        return (_b = chartView === null || chartView === void 0 ? void 0 : chartView.scale) === null || _b === void 0 ? void 0 : _b[channel];
    }
    /**
     * Get canvas group.
     */
    getGroup() {
        const key = this.attr('key');
        if (!key)
            return undefined;
        const chart = this.getRoot();
        const chartGroup = chart.getContext().canvas.getRoot();
        return chartGroup.getElementById(key);
    }
};
MarkNode = __decorate([
    (0, define_1.defineProps)(props_1.markProps)
], MarkNode);
exports.MarkNode = MarkNode;
//# sourceMappingURL=mark.js.map