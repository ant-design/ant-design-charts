"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./abstract");
class IntersectionType extends abstract_1.Type {
    constructor(types) {
        super();
        this.type = 'intersection';
        this.types = types;
    }
    clone() {
        return new IntersectionType(this.types);
    }
    equals(type) {
        if (!(type instanceof IntersectionType)) {
            return false;
        }
        return abstract_1.Type.isTypeListSimilar(type.types, this.types);
    }
    toString() {
        const names = [];
        this.types.forEach((element) => {
            names.push(element.toString());
        });
        return names.join(' & ');
    }
}
exports.IntersectionType = IntersectionType;
//# sourceMappingURL=intersection.js.map