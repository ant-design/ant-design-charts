"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifHasTypeDeclarations = void 0;
function ifHasTypeDeclarations(truthy, options) {
    const parameterDeclarations = this.parameters &&
        this.parameters.map(parameter => {
            const type = parameter.type;
            return (parameter.type &&
                type.declaration &&
                ((type.declaration.children && type.declaration.children.length > 0) ||
                    (type.declaration.signatures && type.declaration.signatures.length > 0)));
        });
    const hasTypeDeclarations = parameterDeclarations && parameterDeclarations.some(parameterDeclaration => parameterDeclaration);
    if (hasTypeDeclarations && truthy) {
        return options.fn(this);
    }
    return !hasTypeDeclarations && !truthy ? options.fn(this) : options.inverse(this);
}
exports.ifHasTypeDeclarations = ifHasTypeDeclarations;
