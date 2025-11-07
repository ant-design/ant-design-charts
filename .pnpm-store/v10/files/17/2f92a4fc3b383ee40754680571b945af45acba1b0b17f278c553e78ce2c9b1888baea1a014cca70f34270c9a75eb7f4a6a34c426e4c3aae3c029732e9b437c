"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReflectionGroup_1 = require("../../models/ReflectionGroup");
const components_1 = require("../components");
class ReflectionGroupSerializer extends components_1.SerializerComponent {
    serializeGroup(instance) {
        return instance instanceof ReflectionGroup_1.ReflectionGroup;
    }
    supports(r) {
        return true;
    }
    toObject(group, obj) {
        const result = Object.assign(Object.assign({}, obj), { title: group.title, kind: group.kind });
        if (group.children && group.children.length > 0) {
            result.children = group.children.map(child => child.id);
        }
        if (group.categories && group.categories.length > 0) {
            result.categories = group.categories.map(category => this.owner.toObject(category));
        }
        return result;
    }
}
exports.ReflectionGroupSerializer = ReflectionGroupSerializer;
ReflectionGroupSerializer.PRIORITY = 1000;
//# sourceMappingURL=reflection-group.js.map