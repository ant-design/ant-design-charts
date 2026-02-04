"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const index_1 = require("../../models/index");
const components_1 = require("../components");
let IndexedAccessConverter = class IndexedAccessConverter extends components_1.ConverterTypeComponent {
    supportsNode(context, node) {
        return ts.isIndexedAccessTypeNode(node);
    }
    convertNode(context, node) {
        const objectType = this.owner.convertType(context, node.objectType);
        if (!objectType) {
            return;
        }
        const indexType = this.owner.convertType(context, node.indexType);
        if (!indexType) {
            return;
        }
        return new index_1.IndexedAccessType(objectType, indexType);
    }
};
IndexedAccessConverter = __decorate([
    components_1.Component({ name: 'type:indexed-access' })
], IndexedAccessConverter);
exports.IndexedAccessConverter = IndexedAccessConverter;
//# sourceMappingURL=indexed-access.js.map