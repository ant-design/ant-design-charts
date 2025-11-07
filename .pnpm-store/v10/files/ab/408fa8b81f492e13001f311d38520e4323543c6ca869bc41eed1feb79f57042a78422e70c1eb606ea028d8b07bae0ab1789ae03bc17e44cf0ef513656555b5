"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
class IndexedAccessType extends index_1.Type {
    constructor(objectType, indexType) {
        super();
        this.objectType = objectType;
        this.indexType = indexType;
        this.type = 'indexedAccess';
    }
    clone() {
        return new IndexedAccessType(this.objectType, this.indexType);
    }
    equals(type) {
        if (!(type instanceof IndexedAccessType)) {
            return false;
        }
        return type.objectType.equals(this.objectType) && type.indexType.equals(this.indexType);
    }
    toString() {
        return `${this.objectType.toString()}[${this.indexType.toString()}]`;
    }
}
exports.IndexedAccessType = IndexedAccessType;
//# sourceMappingURL=indexed-access.js.map