"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class SerializerComponent {
    constructor(owner) {
        this.owner = owner;
    }
    get priority() {
        return this.constructor['PRIORITY'] || SerializerComponent.PRIORITY;
    }
}
exports.SerializerComponent = SerializerComponent;
SerializerComponent.PRIORITY = 0;
class ReflectionSerializerComponent extends SerializerComponent {
    serializeGroup(instance) {
        return instance instanceof models_1.Reflection;
    }
}
exports.ReflectionSerializerComponent = ReflectionSerializerComponent;
class TypeSerializerComponent extends SerializerComponent {
    serializeGroup(instance) {
        return instance instanceof models_1.Type;
    }
}
exports.TypeSerializerComponent = TypeSerializerComponent;
//# sourceMappingURL=components.js.map