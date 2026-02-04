"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const types_1 = require("../../models/types");
const components_1 = require("../components");
let ConditionalConverter = class ConditionalConverter extends components_1.ConverterTypeComponent {
    supportsNode(context, node) {
        return node.kind === ts.SyntaxKind.ConditionalType;
    }
    supportsType(context, type) {
        return !!(type.flags & ts.TypeFlags.Conditional);
    }
    convertNode(context, node) {
        const types = this.owner.convertTypes(context, [node.checkType, node.extendsType, node.trueType, node.falseType]);
        if (types.length !== 4) {
            return undefined;
        }
        return new types_1.ConditionalType(...types);
    }
    convertType(context, type) {
        const types = this.owner.convertTypes(context, [], [type.checkType, type.extendsType, type.resolvedTrueType, type.resolvedFalseType]);
        if (types.length !== 4) {
            return undefined;
        }
        return new types_1.ConditionalType(...types);
    }
};
ConditionalConverter = __decorate([
    components_1.Component({ name: 'type:conditional' })
], ConditionalConverter);
exports.ConditionalConverter = ConditionalConverter;
//# sourceMappingURL=conditional.js.map