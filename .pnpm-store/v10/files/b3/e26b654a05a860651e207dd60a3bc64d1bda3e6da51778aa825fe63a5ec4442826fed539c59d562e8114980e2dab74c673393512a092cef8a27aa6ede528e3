"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
class SignatureReflectionSerializer extends components_1.ReflectionSerializerComponent {
    supports(t) {
        return t instanceof models_1.SignatureReflection;
    }
    toObject(signature, obj) {
        const result = Object.assign({}, obj);
        if (signature.type) {
            result.type = this.owner.toObject(signature.type);
        }
        if (signature.overwrites) {
            result.overwrites = this.owner.toObject(signature.overwrites);
        }
        if (signature.inheritedFrom) {
            result.inheritedFrom = this.owner.toObject(signature.inheritedFrom);
        }
        if (signature.implementationOf) {
            result.implementationOf = this.owner.toObject(signature.implementationOf);
        }
        return result;
    }
}
exports.SignatureReflectionSerializer = SignatureReflectionSerializer;
//# sourceMappingURL=signature.js.map