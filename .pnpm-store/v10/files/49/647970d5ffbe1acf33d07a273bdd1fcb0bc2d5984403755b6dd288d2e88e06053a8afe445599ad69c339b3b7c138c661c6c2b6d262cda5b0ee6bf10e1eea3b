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
let InferredConverter = class InferredConverter extends components_1.ConverterTypeComponent {
    supportsNode(_context, node) {
        return ts.isInferTypeNode(node);
    }
    convertNode(context, node) {
        return new types_1.InferredType(node.typeParameter.getText());
    }
};
InferredConverter = __decorate([
    components_1.Component({ name: 'type:inferred' })
], InferredConverter);
exports.InferredConverter = InferredConverter;
//# sourceMappingURL=inferred.js.map