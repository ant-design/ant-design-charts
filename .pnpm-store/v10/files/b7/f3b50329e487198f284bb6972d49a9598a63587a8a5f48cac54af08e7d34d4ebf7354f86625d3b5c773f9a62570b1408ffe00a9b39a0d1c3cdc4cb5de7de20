"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./abstract");
const lodash_1 = require("lodash");
class ContainerReflection extends abstract_1.Reflection {
    getChildrenByKind(kind) {
        return (this.children || []).filter(child => child.kindOf(kind));
    }
    traverse(callback) {
        for (const child of lodash_1.toArray(this.children)) {
            if (callback(child, abstract_1.TraverseProperty.Children) === false) {
                return;
            }
        }
    }
}
exports.ContainerReflection = ContainerReflection;
//# sourceMappingURL=container.js.map