"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./abstract");
class InferredType extends abstract_1.Type {
    constructor(name) {
        super();
        this.name = name;
        this.type = 'inferred';
    }
    clone() {
        return new InferredType(this.name);
    }
    equals(type) {
        if (!(type instanceof InferredType)) {
            return false;
        }
        return this.name === type.name;
    }
    toString() {
        return `infer ${this.name}`;
    }
}
exports.InferredType = InferredType;
//# sourceMappingURL=inferred.js.map