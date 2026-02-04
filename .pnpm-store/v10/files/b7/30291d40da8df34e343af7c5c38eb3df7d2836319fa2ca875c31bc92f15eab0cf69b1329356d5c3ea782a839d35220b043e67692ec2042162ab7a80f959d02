"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
class IntrinsicTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.IntrinsicType;
    }
    toObject(type, obj) {
        return Object.assign(Object.assign({}, obj), { name: type.name });
    }
}
exports.IntrinsicTypeSerializer = IntrinsicTypeSerializer;
//# sourceMappingURL=intrinsic.js.map