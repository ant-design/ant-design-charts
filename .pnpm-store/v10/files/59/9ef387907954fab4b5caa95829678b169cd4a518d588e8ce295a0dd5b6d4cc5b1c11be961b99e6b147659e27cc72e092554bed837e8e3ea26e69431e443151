"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.declarationTitle = void 0;
const typedoc_1 = require("typedoc");
const heading_1 = require("./heading");
const member_symbol_1 = require("./member-symbol");
const type_1 = require("./type");
function declarationTitle(showSymbol) {
    const isOptional = this.flags.map(flag => flag).includes('Optional');
    const md = [];
    if (this.parent && this.parent.kind !== typedoc_1.ReflectionKind.ObjectLiteral && this.kind === typedoc_1.ReflectionKind.ObjectLiteral) {
        md.push(heading_1.heading(3));
    }
    if (showSymbol) {
        md.push(member_symbol_1.memberSymbol.call(this));
    }
    md.push(`**${this.name}**${isOptional ? '? ' : ''}:`);
    if (this.type) {
        md.push(`*${type_1.type.call(this.type)}*`);
    }
    if (this.defaultValue) {
        md.push(`= ${this.defaultValue}`);
    }
    return md.join(' ');
}
exports.declarationTitle = declarationTitle;
