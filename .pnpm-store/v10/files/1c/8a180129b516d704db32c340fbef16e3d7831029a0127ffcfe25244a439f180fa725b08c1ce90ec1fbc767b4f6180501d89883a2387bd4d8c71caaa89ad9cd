"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
const container_1 = require("./container");
class DeclarationReflectionSerializer extends components_1.ReflectionSerializerComponent {
    supports(t) {
        return t instanceof models_1.DeclarationReflection;
    }
    toObject(declaration, obj) {
        const result = Object.assign({}, obj);
        if (declaration.type) {
            result.type = this.owner.toObject(declaration.type);
        }
        if (declaration.defaultValue) {
            result.defaultValue = declaration.defaultValue;
        }
        if (declaration.overwrites) {
            result.overwrites = this.owner.toObject(declaration.overwrites);
        }
        if (declaration.inheritedFrom) {
            result.inheritedFrom = this.owner.toObject(declaration.inheritedFrom);
        }
        if (declaration.extendedTypes) {
            result.extendedTypes = declaration.extendedTypes.map(t => this.owner.toObject(t));
        }
        if (declaration.extendedBy) {
            result.extendedBy = declaration.extendedBy.map(t => this.owner.toObject(t));
        }
        if (declaration.implementedTypes) {
            result.implementedTypes = declaration.implementedTypes.map(t => this.owner.toObject(t));
        }
        if (declaration.implementedBy) {
            result.implementedBy = declaration.implementedBy.map(t => this.owner.toObject(t));
        }
        if (declaration.implementationOf) {
            result.implementationOf = this.owner.toObject(declaration.implementationOf);
        }
        return result;
    }
}
exports.DeclarationReflectionSerializer = DeclarationReflectionSerializer;
DeclarationReflectionSerializer.PRIORITY = container_1.ContainerReflectionSerializer.PRIORITY - 1;
//# sourceMappingURL=declaration.js.map