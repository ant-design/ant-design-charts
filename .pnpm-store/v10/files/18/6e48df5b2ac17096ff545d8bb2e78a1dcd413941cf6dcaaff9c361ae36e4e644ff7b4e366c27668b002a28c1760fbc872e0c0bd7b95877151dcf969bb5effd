"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const index_1 = require("../../models/index");
const converter_1 = require("../converter");
const parameter_1 = require("./parameter");
function createSignature(context, node, name, kind) {
    const container = context.scope;
    if (!(container instanceof index_1.ContainerReflection)) {
        throw new Error('Expected container reflection.');
    }
    const signature = new index_1.SignatureReflection(name, kind, container);
    signature.flags.setFlag(index_1.ReflectionFlag.Exported, container.flags.isExported);
    context.registerReflection(signature);
    context.withScope(signature, node.typeParameters, true, () => {
        node.parameters.forEach((parameter) => {
            parameter_1.createParameter(context, parameter);
        });
        signature.type = extractSignatureType(context, node);
        if (container.inheritedFrom) {
            signature.inheritedFrom = container.inheritedFrom.clone();
        }
    });
    context.trigger(converter_1.Converter.EVENT_CREATE_SIGNATURE, signature, node);
    return signature;
}
exports.createSignature = createSignature;
function extractSignatureType(context, node) {
    const checker = context.checker;
    if (node.kind & ts.SyntaxKind.CallSignature || node.kind & ts.SyntaxKind.CallExpression) {
        try {
            const signature = checker.getSignatureFromDeclaration(node);
            if (!signature) {
                throw new Error('Failed to retrieve signature for node.');
            }
            return context.converter.convertType(context, node.type, checker.getReturnTypeOfSignature(signature));
        }
        catch (error) { }
    }
    return context.converter.convertType(context, node.type || node);
}
//# sourceMappingURL=signature.js.map