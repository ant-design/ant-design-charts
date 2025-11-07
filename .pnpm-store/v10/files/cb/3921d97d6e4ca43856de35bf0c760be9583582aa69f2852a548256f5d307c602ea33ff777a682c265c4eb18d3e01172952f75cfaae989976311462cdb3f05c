"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./abstract");
class TupleType extends abstract_1.Type {
    constructor(elements) {
        super();
        this.type = 'tuple';
        this.elements = elements;
    }
    clone() {
        return new TupleType(this.elements);
    }
    equals(type) {
        if (!(type instanceof TupleType)) {
            return false;
        }
        return abstract_1.Type.isTypeListEqual(type.elements, this.elements);
    }
    toString() {
        const names = [];
        this.elements.forEach((element) => {
            names.push(element.toString());
        });
        return '[' + names.join(', ') + ']';
    }
}
exports.TupleType = TupleType;
//# sourceMappingURL=tuple.js.map