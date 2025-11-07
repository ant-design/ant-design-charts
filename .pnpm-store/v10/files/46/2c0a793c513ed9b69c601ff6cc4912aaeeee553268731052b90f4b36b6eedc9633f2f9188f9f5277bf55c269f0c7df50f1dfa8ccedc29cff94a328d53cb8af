"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
class QueryTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.QueryType;
    }
    toObject(type, obj) {
        return Object.assign(Object.assign({}, obj), { queryType: this.owner.toObject(type.queryType) });
    }
}
exports.QueryTypeSerializer = QueryTypeSerializer;
//# sourceMappingURL=query.js.map