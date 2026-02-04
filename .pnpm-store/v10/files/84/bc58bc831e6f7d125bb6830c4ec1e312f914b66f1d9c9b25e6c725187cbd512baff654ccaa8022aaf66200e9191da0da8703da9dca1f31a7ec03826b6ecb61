"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../components");
const decorator_wrapper_1 = require("./models/decorator-wrapper");
class DecoratorContainerSerializer extends components_1.SerializerComponent {
    serializeGroup(instance) {
        return instance instanceof decorator_wrapper_1.DecoratorWrapper;
    }
    supports(_) {
        return true;
    }
    toObject({ decorator }, obj) {
        const result = Object.assign(Object.assign({}, obj), { name: decorator.name });
        if (decorator.type) {
            result.type = this.owner.toObject(decorator.type);
        }
        if (decorator.arguments) {
            result.arguments = decorator.arguments;
        }
        return result;
    }
}
exports.DecoratorContainerSerializer = DecoratorContainerSerializer;
DecoratorContainerSerializer.PRIORITY = 1000;
//# sourceMappingURL=decorator.js.map