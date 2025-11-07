"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberSymbol = void 0;
const typedoc_1 = require("typedoc");
function memberSymbol() {
    const isStatic = this.flags.map(flag => flag).includes('Static');
    const symbol = '•';
    if (this.kind === typedoc_1.ReflectionKind.ConstructorSignature) {
        return '\\+';
    }
    if (this.kind === typedoc_1.ReflectionKind.CallSignature) {
        return '▸';
    }
    if (this.kind === typedoc_1.ReflectionKind.TypeAlias) {
        return 'Ƭ';
    }
    if (this.kind === typedoc_1.ReflectionKind.ObjectLiteral) {
        return '▪';
    }
    if (this.kind === typedoc_1.ReflectionKind.Property && isStatic) {
        return '▪';
    }
    return symbol;
}
exports.memberSymbol = memberSymbol;
