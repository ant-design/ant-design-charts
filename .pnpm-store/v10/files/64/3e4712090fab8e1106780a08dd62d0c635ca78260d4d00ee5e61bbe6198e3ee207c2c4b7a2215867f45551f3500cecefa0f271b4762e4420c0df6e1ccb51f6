"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifIsLiteralType = void 0;
const typedoc_1 = require("typedoc");
function ifIsLiteralType(truthy, options) {
    const isLiteralType = this.kind === typedoc_1.ReflectionKind.ObjectLiteral || this.kind === typedoc_1.ReflectionKind.TypeLiteral;
    if (isLiteralType && truthy) {
        return options.fn(this);
    }
    return !isLiteralType && !truthy ? options.fn(this) : options.inverse(this);
}
exports.ifIsLiteralType = ifIsLiteralType;
