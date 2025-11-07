"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
class ReflectionTypeSerializer extends components_1.TypeSerializerComponent {
    constructor() {
        super(...arguments);
        this.visited = new Set();
    }
    supports(t) {
        return t instanceof models_1.ReflectionType;
    }
    toObject(reference, obj) {
        const result = Object.assign({}, obj);
        if (this.visited.has(reference.declaration)) {
            result.declaration = { id: reference.declaration.id };
        }
        else {
            this.visited.add(reference.declaration);
            result.declaration = this.owner.toObject(reference.declaration);
        }
        this.visited.delete(reference.declaration);
        return result;
    }
}
exports.ReflectionTypeSerializer = ReflectionTypeSerializer;
//# sourceMappingURL=reflection.js.map