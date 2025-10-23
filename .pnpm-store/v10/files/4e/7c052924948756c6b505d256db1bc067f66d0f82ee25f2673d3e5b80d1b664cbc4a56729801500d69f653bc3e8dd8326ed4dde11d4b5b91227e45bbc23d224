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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = useGraph;
var g6_1 = require("@antv/g6");
var react_1 = require("react");
/**
 * Hook for creating and managing a G6 graph instance.
 * @param props The props for the Graphin component.
 * @returns An object containing the graph instance, the container ref, and a boolean indicating whether the graph is ready.
 */
function useGraph(props) {
    var onInit = props.onInit, onReady = props.onReady, onDestroy = props.onDestroy, options = props.options;
    var _a = __read((0, react_1.useState)(false), 2), isReady = _a[0], setIsReady = _a[1];
    var graphRef = (0, react_1.useRef)(null);
    var containerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (graphRef.current || !containerRef.current)
            return;
        var graph = new g6_1.Graph(__assign({ container: containerRef.current }, options));
        graphRef.current = graph;
        setIsReady(true);
        onInit === null || onInit === void 0 ? void 0 : onInit(graphRef.current);
        return function () {
            var graph = graphRef.current;
            if (graph) {
                graph.destroy();
                onDestroy === null || onDestroy === void 0 ? void 0 : onDestroy();
                graphRef.current = null;
            }
        };
    }, []);
    (0, react_1.useEffect)(function () {
        var container = containerRef.current;
        var graph = graphRef.current;
        if (!options || !container || !graph || graph.destroyed)
            return;
        graph.setOptions(options);
        graph.render().then(function () { return onReady === null || onReady === void 0 ? void 0 : onReady(graph); });
    }, [options]);
    return {
        graph: graphRef.current,
        containerRef: containerRef,
        isReady: isReady,
    };
}
