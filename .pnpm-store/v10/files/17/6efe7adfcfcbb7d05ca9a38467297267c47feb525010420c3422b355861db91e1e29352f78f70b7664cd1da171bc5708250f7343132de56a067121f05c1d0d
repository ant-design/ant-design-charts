"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
class InferredTypeSerializer extends components_1.TypeSerializerComponent {
    supports(item) {
        return item instanceof models_1.InferredType;
    }
    toObject(inferred, obj) {
        return Object.assign(Object.assign({}, obj), { name: inferred.name });
    }
}
exports.InferredTypeSerializer = InferredTypeSerializer;
//# sourceMappingURL=inferred.js.map