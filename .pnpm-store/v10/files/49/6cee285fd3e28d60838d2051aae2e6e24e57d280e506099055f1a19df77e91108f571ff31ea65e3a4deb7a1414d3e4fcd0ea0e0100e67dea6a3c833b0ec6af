"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./abstract");
class PredicateType extends abstract_1.Type {
    constructor(name, asserts, targetType) {
        super();
        this.type = 'predicate';
        this.name = name;
        this.asserts = asserts;
        this.targetType = targetType;
    }
    clone() {
        return new PredicateType(this.name, this.asserts, this.targetType);
    }
    equals(type) {
        var _a, _b;
        if (!(type instanceof PredicateType)) {
            return false;
        }
        if (!this.targetType && type.targetType) {
            return false;
        }
        if (this.targetType && !type.targetType) {
            return false;
        }
        return this.name === type.name
            && this.asserts === type.asserts
            && ((_b = (_a = this.targetType) === null || _a === void 0 ? void 0 : _a.equals(type.targetType)) !== null && _b !== void 0 ? _b : true);
    }
    toString() {
        const out = this.asserts ? ['asserts', this.name] : [this.name];
        if (this.targetType) {
            out.push('is', this.targetType.toString());
        }
        return out.join(' ');
    }
}
exports.PredicateType = PredicateType;
//# sourceMappingURL=predicate.js.map