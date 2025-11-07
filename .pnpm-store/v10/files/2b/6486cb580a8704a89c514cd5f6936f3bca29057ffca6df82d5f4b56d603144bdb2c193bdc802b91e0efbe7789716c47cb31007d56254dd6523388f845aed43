"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
class PredicateTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.PredicateType;
    }
    toObject(type, obj) {
        return Object.assign(Object.assign({}, obj), { name: type.name, asserts: type.asserts, targetType: type.targetType ? this.owner.toObject(type.targetType) : undefined });
    }
}
exports.PredicateTypeSerializer = PredicateTypeSerializer;
//# sourceMappingURL=predicate.js.map