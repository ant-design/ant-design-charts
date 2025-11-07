"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReflectionCategory_1 = require("../../models/ReflectionCategory");
const components_1 = require("../components");
class ReflectionCategorySerializer extends components_1.SerializerComponent {
    serializeGroup(instance) {
        return instance instanceof ReflectionCategory_1.ReflectionCategory;
    }
    supports(r) {
        return r instanceof ReflectionCategory_1.ReflectionCategory;
    }
    toObject(category, obj) {
        const result = Object.assign(Object.assign({}, obj), { title: category.title });
        if (category.children && category.children.length > 0) {
            result.children = category.children.map(child => child.id);
        }
        return result;
    }
}
exports.ReflectionCategorySerializer = ReflectionCategorySerializer;
ReflectionCategorySerializer.PRIORITY = 1000;
//# sourceMappingURL=reflection-category.js.map