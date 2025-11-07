"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
class ParameterReflectionSerializer extends components_1.ReflectionSerializerComponent {
    supports(t) {
        return t instanceof models_1.ParameterReflection;
    }
    toObject(parameter, obj) {
        const result = Object.assign({}, obj);
        if (parameter.type) {
            result.type = this.owner.toObject(parameter.type);
        }
        if (parameter.defaultValue) {
            result.defaultValue = parameter.defaultValue;
        }
        return result;
    }
}
exports.ParameterReflectionSerializer = ParameterReflectionSerializer;
//# sourceMappingURL=parameter.js.map