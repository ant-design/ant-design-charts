"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
class ReferenceTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.ReferenceType;
    }
    toObject(type, obj) {
        if (type.reflection) {
            obj.id = type.reflection.id;
        }
        if (type.typeArguments && type.typeArguments.length > 0) {
            obj.typeArguments = type.typeArguments.map(t => this.owner.toObject(t));
        }
        return Object.assign(Object.assign({}, obj), { name: type.name });
    }
}
exports.ReferenceTypeSerializer = ReferenceTypeSerializer;
//# sourceMappingURL=reference.js.map