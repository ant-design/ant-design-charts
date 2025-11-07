"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
const container_1 = require("./container");
class ProjectReflectionSerializer extends components_1.ReflectionSerializerComponent {
    supports(t) {
        return t instanceof models_1.ProjectReflection;
    }
    toObject(container, obj) {
        return obj;
    }
}
exports.ProjectReflectionSerializer = ProjectReflectionSerializer;
ProjectReflectionSerializer.PRIORITY = container_1.ContainerReflectionSerializer.PRIORITY - 1;
//# sourceMappingURL=project.js.map