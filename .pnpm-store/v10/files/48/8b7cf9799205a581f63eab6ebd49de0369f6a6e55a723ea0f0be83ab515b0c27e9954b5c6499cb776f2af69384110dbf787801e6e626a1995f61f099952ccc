"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifParentIsObjectLiteral = void 0;
const typedoc_1 = require("typedoc");
function ifParentIsObjectLiteral(truthy, options) {
    const parentIsObjectLiteral = this.parent && this.parent.parent && this.parent.parent.kind === typedoc_1.ReflectionKind.ObjectLiteral;
    if (parentIsObjectLiteral && truthy) {
        return options.fn(this);
    }
    return !parentIsObjectLiteral && !truthy ? options.fn(this) : options.inverse(this);
}
exports.ifParentIsObjectLiteral = ifParentIsObjectLiteral;
