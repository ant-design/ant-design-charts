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
import React, { forwardRef, memo, useImperativeHandle } from 'react';
import { GraphinContext } from './context';
import useGraph from './hooks/useGraph';
/**
 * Graphin, the react component for G6.
 */
var Graph = forwardRef(function (props, ref) {
    var style = props.style, children = props.children, restProps = __rest(props, ["style", "children"]);
    var _a = useGraph(restProps), graph = _a.graph, containerRef = _a.containerRef, isReady = _a.isReady;
    useImperativeHandle(ref, function () { return graph; }, [graph]);
    var containerStyle = __assign({ height: 'inherit', position: 'relative' }, style);
    if (children) {
        return (React.createElement(GraphinContext.Provider, { value: { graph: graph, isReady: isReady } },
            React.createElement("div", { ref: containerRef, style: containerStyle }, isReady && children)));
    }
    return React.createElement("div", { ref: containerRef, style: containerStyle });
});
export var Graphin = memo(Graph);
