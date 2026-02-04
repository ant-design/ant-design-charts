"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./abstract");
class ConditionalType extends abstract_1.Type {
    constructor(checkType, extendsType, trueType, falseType) {
        super();
        this.checkType = checkType;
        this.extendsType = extendsType;
        this.trueType = trueType;
        this.falseType = falseType;
        this.type = 'conditional';
    }
    clone() {
        return new ConditionalType(this.checkType, this.extendsType, this.trueType, this.falseType);
    }
    equals(type) {
        if (!(type instanceof ConditionalType)) {
            return false;
        }
        return this.checkType.equals(type.checkType) &&
            this.extendsType.equals(type.extendsType) &&
            this.trueType.equals(type.trueType) &&
            this.falseType.equals(type.falseType);
    }
    toString() {
        return this.checkType + ' extends ' + this.extendsType + ' ? ' + this.trueType + ' : ' + this.falseType;
    }
}
exports.ConditionalType = ConditionalType;
//# sourceMappingURL=conditional.js.map