"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preprocessOption = preprocessOption;
const flow_1 = require("../../utils/flow");
const style_1 = require("./style");
const axis_breaks_1 = require("./axis-breaks");
function preprocessOption(options) {
    const convertedOptions = adapter(options);
    // If there are children, recursively convert each child node.
    if (convertedOptions.children && Array.isArray(convertedOptions.children)) {
        convertedOptions.children = convertedOptions.children.map((child) => preprocessOption(child));
    }
    return convertedOptions;
}
// Entry point for all syntactic sugar functions.
function adapter(options) {
    //@todo define a type for params of flow
    return (0, flow_1.flow)(style_1.columnWidthRatio, axis_breaks_1.axisBreaks)(options);
}
//# sourceMappingURL=index.js.map