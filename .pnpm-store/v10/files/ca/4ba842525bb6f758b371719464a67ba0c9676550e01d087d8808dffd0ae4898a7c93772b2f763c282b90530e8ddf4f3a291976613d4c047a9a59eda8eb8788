"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
class TypeOperatorTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.TypeOperatorType;
    }
    toObject(type, obj) {
        return Object.assign(Object.assign({}, obj), { operator: type.operator, target: this.owner.toObject(type.target) });
    }
}
exports.TypeOperatorTypeSerializer = TypeOperatorTypeSerializer;
//# sourceMappingURL=type-operator.js.map