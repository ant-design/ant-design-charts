"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const index_1 = require("../../models/index");
const converter_1 = require("../converter");
const comment_js_1 = require("./comment.js");
const reference_1 = require("./reference");
const nonStaticKinds = [
    index_1.ReflectionKind.Class,
    index_1.ReflectionKind.Interface,
    index_1.ReflectionKind.Namespace
];
const nonStaticMergeKinds = [
    ts.SyntaxKind.ClassDeclaration,
    ts.SyntaxKind.ClassExpression,
    ts.SyntaxKind.InterfaceDeclaration
];
const builtInSymbolRegExp = /^__@(\w+)$/;
function hasCommentOnParentAxis(node) {
    let currentNode = node;
    while (currentNode) {
        if (Boolean(comment_js_1.getRawComment(currentNode))) {
            return true;
        }
        currentNode = currentNode.parent;
    }
    return false;
}
function shouldBeIgnoredAsNotDocumented(node, kind) {
    if (kind === index_1.ReflectionKind.Module || kind === index_1.ReflectionKind.Global || kind === index_1.ReflectionKind.EnumMember) {
        return false;
    }
    if (kind === index_1.ReflectionKind.Variable && hasCommentOnParentAxis(node)) {
        return false;
    }
    const hasComment = Boolean(comment_js_1.getRawComment(node));
    return !hasComment;
}
function createDeclaration(context, node, kind, name) {
    var _a, _b;
    if (!(context.scope instanceof index_1.ContainerReflection)) {
        throw new Error('Expected container reflection.');
    }
    const container = context.scope;
    if (!name) {
        if (node.localSymbol) {
            name = node.localSymbol.name;
        }
        else if (node.symbol) {
            name = node.symbol.name;
        }
        else {
            return;
        }
        const match = builtInSymbolRegExp.exec(name);
        if (match) {
            name = `[Symbol.${match[1]}]`;
        }
        else if (kind & (index_1.ReflectionKind.ClassMember | index_1.ReflectionKind.VariableOrProperty) && name === '__computed') {
            const declName = ts.getNameOfDeclaration(node);
            const symbol = declName && context.checker.getSymbolAtLocation(declName);
            if (symbol) {
                name = context.checker.symbolToString(symbol, undefined, ts.SymbolFlags.ClassMember);
            }
            else if (declName) {
                name = declName.getText();
            }
        }
    }
    const modifiers = ts.getCombinedModifierFlags(node);
    let isExported;
    if (kind === index_1.ReflectionKind.Module || kind === index_1.ReflectionKind.Global) {
        isExported = true;
    }
    else if (container.kind === index_1.ReflectionKind.Global) {
        isExported = true;
    }
    else if (container.kindOf([index_1.ReflectionKind.Namespace, index_1.ReflectionKind.Module])) {
        const symbol = context.getSymbolAtLocation(node);
        if (!symbol) {
            isExported = false;
        }
        else {
            let parentNode = node.parent;
            while (![ts.SyntaxKind.SourceFile, ts.SyntaxKind.ModuleDeclaration].includes(parentNode.kind)) {
                parentNode = parentNode.parent;
            }
            const parentSymbol = context.getSymbolAtLocation(parentNode);
            if (!parentSymbol) {
                isExported = true;
            }
            else {
                isExported = !!((_a = parentSymbol.exports) === null || _a === void 0 ? void 0 : _a.get(symbol.escapedName));
            }
        }
    }
    else {
        isExported = container.flags.isExported;
    }
    if ((!isExported && context.converter.excludeNotExported)
        ||
            (context.converter.excludeNotDocumented && shouldBeIgnoredAsNotDocumented(node, kind))) {
        return;
    }
    const isPrivate = !!(modifiers & ts.ModifierFlags.Private);
    if (context.isInherit && isPrivate) {
        return;
    }
    let isConstructorProperty = false;
    let isStatic = false;
    if (!nonStaticKinds.includes(kind)) {
        isStatic = !!(modifiers & ts.ModifierFlags.Static);
        if (container.kind === index_1.ReflectionKind.Class) {
            if (node.parent && node.parent.kind === ts.SyntaxKind.Constructor) {
                isConstructorProperty = true;
            }
            else if (!node.parent || !nonStaticMergeKinds.includes(node.parent.kind)) {
                isStatic = true;
            }
        }
    }
    let child;
    const children = container.children = container.children || [];
    children.forEach((n) => {
        if (n.name === name && n.flags.isStatic === isStatic && canMergeReflectionsByKind(n.kind, kind)) {
            child = n;
        }
    });
    if (!child) {
        child = new index_1.DeclarationReflection(name, kind, container);
        child.setFlag(index_1.ReflectionFlag.Static, isStatic);
        child.setFlag(index_1.ReflectionFlag.Private, isPrivate);
        child.setFlag(index_1.ReflectionFlag.ConstructorProperty, isConstructorProperty);
        child.setFlag(index_1.ReflectionFlag.Exported, isExported);
        child = setupDeclaration(context, child, node);
        if (child) {
            children.push(child);
            context.registerReflection(child, (_b = context.getSymbolAtLocation(node)) !== null && _b !== void 0 ? _b : node.symbol);
        }
    }
    else {
        child = mergeDeclarations(context, child, node, kind);
    }
    if (child) {
        context.trigger(converter_1.Converter.EVENT_CREATE_DECLARATION, child, node);
    }
    return child;
}
exports.createDeclaration = createDeclaration;
function setupDeclaration(context, reflection, node) {
    const modifiers = ts.getCombinedModifierFlags(node);
    reflection.setFlag(index_1.ReflectionFlag.External, context.isExternal);
    reflection.setFlag(index_1.ReflectionFlag.Protected, !!(modifiers & ts.ModifierFlags.Protected));
    reflection.setFlag(index_1.ReflectionFlag.Public, !!(modifiers & ts.ModifierFlags.Public));
    reflection.setFlag(index_1.ReflectionFlag.Optional, !!(node['questionToken']));
    reflection.setFlag(index_1.ReflectionFlag.Readonly, !!(modifiers & ts.ModifierFlags.Readonly));
    if (context.isInherit &&
        (node.parent === context.inheritParent || reflection.flags.isConstructorProperty)) {
        if (!reflection.inheritedFrom) {
            reflection.inheritedFrom = reference_1.createReferenceType(context, node.symbol, true);
            reflection.getAllSignatures().forEach((signature) => {
                signature.inheritedFrom = reference_1.createReferenceType(context, node.symbol, true);
            });
        }
    }
    return reflection;
}
function canMergeReflectionsByKind(kind1, kind2) {
    if ((kind1 & index_1.ReflectionKind.SomeType && kind2 & index_1.ReflectionKind.SomeValue)
        ||
            (kind2 & index_1.ReflectionKind.SomeType && kind1 & index_1.ReflectionKind.SomeValue)) {
        return false;
    }
    return true;
}
function mergeDeclarations(context, reflection, node, kind) {
    if (reflection.kind !== kind) {
        const weights = [index_1.ReflectionKind.Namespace, index_1.ReflectionKind.Enum, index_1.ReflectionKind.Class];
        const kindWeight = weights.indexOf(kind);
        const childKindWeight = weights.indexOf(reflection.kind);
        if (kindWeight > childKindWeight) {
            reflection.kind = kind;
        }
    }
    if (context.isInherit &&
        (context.inherited || []).includes(reflection.name) &&
        (node.parent === context.inheritParent || reflection.flags.isConstructorProperty)) {
        if (!reflection.overwrites) {
            reflection.overwrites = reference_1.createReferenceType(context, node.symbol, true);
            reflection.getAllSignatures().forEach((signature) => {
                signature.overwrites = reference_1.createReferenceType(context, node.symbol, true);
            });
        }
        return;
    }
    return reflection;
}
//# sourceMappingURL=declaration.js.map