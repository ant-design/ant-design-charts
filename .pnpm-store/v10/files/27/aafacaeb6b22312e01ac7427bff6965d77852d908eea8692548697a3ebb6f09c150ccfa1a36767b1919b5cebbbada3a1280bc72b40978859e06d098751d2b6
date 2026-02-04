"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
class TypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.Type;
    }
    toObject(type, obj) {
        return Object.assign(Object.assign({}, obj), { type: type.type });
    }
}
exports.TypeSerializer = TypeSerializer;
TypeSerializer.PRIORITY = 1000;
//# sourceMappingURL=abstract.js.map