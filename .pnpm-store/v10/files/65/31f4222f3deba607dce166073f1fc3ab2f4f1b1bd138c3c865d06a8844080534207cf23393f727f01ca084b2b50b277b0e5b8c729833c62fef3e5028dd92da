"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = require("handlebars");
function wbr(options) {
    let str = typeof options === 'string' ? options : options.fn(this);
    str = Handlebars.escapeExpression(str);
    str = str.replace(/&#x3D;/g, '&#61;');
    str = str.replace(/([^_\-][_\-])([^_\-])/g, (m, a, b) => a + '<wbr>' + b);
    str = str.replace(/([^A-Z])([A-Z][^A-Z])/g, (m, a, b) => a + '<wbr>' + b);
    return new Handlebars.SafeString(str);
}
exports.wbr = wbr;
//# sourceMappingURL=wbr.js.map