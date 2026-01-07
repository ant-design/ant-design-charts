"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
class ArrayTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.ArrayType;
    }
    toObject(type, obj) {
        return Object.assign(Object.assign({}, obj), { elementType: this.owner.toObject(type.elementType) });
    }
}
exports.ArrayTypeSerializer = ArrayTypeSerializer;
//# sourceMappingURL=array.js.map