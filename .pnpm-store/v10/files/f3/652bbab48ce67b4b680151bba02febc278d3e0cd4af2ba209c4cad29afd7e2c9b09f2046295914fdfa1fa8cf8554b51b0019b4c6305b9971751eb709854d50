"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
class StringLiteralTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.StringLiteralType;
    }
    toObject(type, obj) {
        return Object.assign(Object.assign({}, obj), { value: type.value });
    }
}
exports.StringLiteralTypeSerializer = StringLiteralTypeSerializer;
//# sourceMappingURL=string-literal.js.map