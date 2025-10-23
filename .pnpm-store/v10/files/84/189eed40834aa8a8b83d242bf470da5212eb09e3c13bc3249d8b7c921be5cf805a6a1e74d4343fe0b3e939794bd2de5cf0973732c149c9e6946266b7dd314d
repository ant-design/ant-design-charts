"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
class TupleTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.TupleType;
    }
    toObject(tuple, obj) {
        const result = Object.assign({}, obj);
        if (tuple.elements && tuple.elements.length > 0) {
            result.elements = tuple.elements.map(t => this.owner.toObject(t));
        }
        return result;
    }
}
exports.TupleTypeSerializer = TupleTypeSerializer;
//# sourceMappingURL=tuple.js.map