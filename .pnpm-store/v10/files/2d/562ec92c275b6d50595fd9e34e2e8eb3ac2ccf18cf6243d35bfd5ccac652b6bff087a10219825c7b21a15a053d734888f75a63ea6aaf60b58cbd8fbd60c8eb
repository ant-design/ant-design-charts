"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
class TypeParameterReflectionSerializer extends components_1.ReflectionSerializerComponent {
    supports(t) {
        return t instanceof models_1.TypeParameterReflection;
    }
    toObject(typeParameter, obj) {
        const result = Object.assign({}, obj);
        if (typeParameter.type) {
            result.type = this.owner.toObject(typeParameter.type);
        }
        return result;
    }
}
exports.TypeParameterReflectionSerializer = TypeParameterReflectionSerializer;
//# sourceMappingURL=type-parameter.js.map