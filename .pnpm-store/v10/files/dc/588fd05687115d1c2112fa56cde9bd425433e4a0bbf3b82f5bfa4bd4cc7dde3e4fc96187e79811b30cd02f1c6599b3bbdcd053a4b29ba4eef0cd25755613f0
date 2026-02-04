"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connector = void 0;
const shape_1 = require("../shape");
const utils_1 = require("./utils");
const link_1 = require("./link");
const shape = {
    connector: shape_1.ConnectorShape,
};
const Connector = (...args) => {
    return (0, link_1.Link)(...args);
};
exports.Connector = Connector;
exports.Connector.props = {
    defaultShape: 'connector',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...(0, utils_1.baseAnnotationChannels)({ shapes: Object.keys(shape) }),
        { name: 'x', required: true },
        { name: 'y', required: true },
    ],
    preInference: [...(0, utils_1.basePreInference)()],
    postInference: [...(0, utils_1.basePostInference)()],
};
//# sourceMappingURL=connector.js.map