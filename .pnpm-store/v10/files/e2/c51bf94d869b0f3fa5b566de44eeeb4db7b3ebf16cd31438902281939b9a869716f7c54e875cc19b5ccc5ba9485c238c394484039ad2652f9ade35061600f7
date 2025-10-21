"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./abstract");
class QueryType extends abstract_1.Type {
    constructor(reference) {
        super();
        this.type = 'query';
        this.queryType = reference;
    }
    clone() {
        return new QueryType(this.queryType);
    }
    equals(other) {
        return other instanceof QueryType && this.queryType.equals(other.queryType);
    }
    toString() {
        return `typeof ${this.queryType.toString()}`;
    }
}
exports.QueryType = QueryType;
//# sourceMappingURL=query.js.map