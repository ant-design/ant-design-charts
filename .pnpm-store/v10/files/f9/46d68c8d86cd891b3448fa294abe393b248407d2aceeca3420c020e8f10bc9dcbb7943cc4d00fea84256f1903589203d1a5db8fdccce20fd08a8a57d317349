"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const reference_1 = require("../../models/reflections/reference");
const converter_1 = require("../converter");
function createReferenceType(context, symbol, includeParent) {
    if (!symbol) {
        return;
    }
    const checker = context.checker;
    let name = checker.symbolToString(symbol);
    if (includeParent && symbol.parent) {
        name = checker.symbolToString(symbol.parent) + '.' + name;
    }
    return new models_1.ReferenceType(name, context.checker.getFullyQualifiedName(symbol));
}
exports.createReferenceType = createReferenceType;
function createReferenceReflection(context, source, target) {
    if (!(context.scope instanceof models_1.ContainerReflection)) {
        throw new Error('Cannot add reference to a non-container');
    }
    if (target.declarations.some(d => context.isOutsideDocumentation(d.getSourceFile().fileName))) {
        return;
    }
    const reflection = new models_1.ReferenceReflection(source.name, [reference_1.ReferenceState.Unresolved, context.checker.getFullyQualifiedName(target)], context.scope);
    reflection.flags.setFlag(models_1.ReflectionFlag.Exported, true);
    if (!context.scope.children) {
        context.scope.children = [];
    }
    context.scope.children.push(reflection);
    context.registerReflection(reflection, target === source ? undefined : source);
    context.trigger(converter_1.Converter.EVENT_CREATE_DECLARATION, reflection);
    return reflection;
}
exports.createReferenceReflection = createReferenceReflection;
//# sourceMappingURL=reference.js.map