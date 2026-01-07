"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./abstract");
class ReferenceType extends abstract_1.Type {
    constructor(name, symbolFQN, reflection) {
        super();
        this.type = 'reference';
        this.name = name;
        this.symbolFullyQualifiedName = symbolFQN;
        this.reflection = reflection;
    }
    clone() {
        const clone = new ReferenceType(this.name, this.symbolFullyQualifiedName, this.reflection);
        clone.typeArguments = this.typeArguments;
        return clone;
    }
    equals(other) {
        return other instanceof ReferenceType && (other.symbolFullyQualifiedName === this.symbolFullyQualifiedName || other.reflection === this.reflection);
    }
    toString() {
        const name = this.reflection ? this.reflection.name : this.name;
        let typeArgs = '';
        if (this.typeArguments) {
            typeArgs += '<';
            typeArgs += this.typeArguments.map(arg => arg.toString()).join(', ');
            typeArgs += '>';
        }
        return name + typeArgs;
    }
}
exports.ReferenceType = ReferenceType;
ReferenceType.SYMBOL_FQN_RESOLVED = '///resolved';
ReferenceType.SYMBOL_FQN_RESOLVE_BY_NAME = '///resolve_by_name';
//# sourceMappingURL=reference.js.map