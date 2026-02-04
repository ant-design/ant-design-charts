"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graphin = void 0;
var react_1 = __importStar(require("react"));
var context_1 = require("./context");
var useGraph_1 = __importDefault(require("./hooks/useGraph"));
/**
 * Graphin, the react component for G6.
 */
var Graph = (0, react_1.forwardRef)(function (props, ref) {
    var style = props.style, children = props.children, restProps = __rest(props, ["style", "children"]);
    var _a = (0, useGraph_1.default)(restProps), graph = _a.graph, containerRef = _a.containerRef, isReady = _a.isReady;
    (0, react_1.useImperativeHandle)(ref, function () { return graph; }, [graph]);
    var containerStyle = __assign({ height: 'inherit', position: 'relative' }, style);
    if (children) {
        return (react_1.default.createElement(context_1.GraphinContext.Provider, { value: { graph: graph, isReady: isReady } },
            react_1.default.createElement("div", { ref: containerRef, style: containerStyle }, isReady && children)));
    }
    return react_1.default.createElement("div", { ref: containerRef, style: containerStyle });
});
exports.Graphin = (0, react_1.memo)(Graph);
