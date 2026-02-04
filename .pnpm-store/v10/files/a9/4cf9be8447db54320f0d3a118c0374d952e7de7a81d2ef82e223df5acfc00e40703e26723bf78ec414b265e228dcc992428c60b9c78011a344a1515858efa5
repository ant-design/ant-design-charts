"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
class IndexedAccessTypeSerializer extends components_1.TypeSerializerComponent {
    supports(item) {
        return item instanceof models_1.IndexedAccessType;
    }
    toObject(type, obj) {
        return Object.assign(Object.assign({}, obj), { indexType: this.owner.toObject(type.indexType), objectType: this.owner.toObject(type.objectType) });
    }
}
exports.IndexedAccessTypeSerializer = IndexedAccessTypeSerializer;
//# sourceMappingURL=indexed-access.js.map