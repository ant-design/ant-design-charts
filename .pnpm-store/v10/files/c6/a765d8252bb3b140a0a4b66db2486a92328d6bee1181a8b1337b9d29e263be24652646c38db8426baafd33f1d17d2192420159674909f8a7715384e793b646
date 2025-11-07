"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
class TypeParameterTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.TypeParameterType;
    }
    toObject(type, obj) {
        const result = Object.assign(Object.assign({}, obj), { name: type.name });
        if (type.constraint) {
            result.constraint = this.owner.toObject(type.constraint);
        }
        return result;
    }
}
exports.TypeParameterTypeSerializer = TypeParameterTypeSerializer;
//# sourceMappingURL=type-parameter.js.map