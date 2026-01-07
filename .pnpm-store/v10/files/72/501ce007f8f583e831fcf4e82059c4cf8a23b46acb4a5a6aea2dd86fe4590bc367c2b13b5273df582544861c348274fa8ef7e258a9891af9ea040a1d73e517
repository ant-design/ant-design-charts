"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
class IntersectionTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.IntersectionType;
    }
    toObject(type, obj) {
        return Object.assign(Object.assign({}, obj), { types: type.types.map(t => this.owner.toObject(t)) });
    }
}
exports.IntersectionTypeSerializer = IntersectionTypeSerializer;
//# sourceMappingURL=intersection.js.map