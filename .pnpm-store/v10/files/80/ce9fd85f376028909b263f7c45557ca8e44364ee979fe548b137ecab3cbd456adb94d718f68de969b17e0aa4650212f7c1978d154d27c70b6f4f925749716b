"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
const models_2 = require("../models");
class ContainerReflectionSerializer extends components_1.ReflectionSerializerComponent {
    supports(t) {
        return t instanceof models_1.ContainerReflection;
    }
    toObject(container, obj) {
        const result = Object.assign({}, obj);
        if (container.groups && container.groups.length > 0) {
            result.groups = container.groups.map(group => this.owner.toObject(group));
        }
        if (container.categories && container.categories.length > 0) {
            result.categories = container.categories.map(category => this.owner.toObject(category));
        }
        if (container.sources && container.sources.length > 0) {
            result.sources = container.sources.map(source => this.owner.toObject(new models_2.SourceReferenceWrapper({
                fileName: source.fileName,
                line: source.line,
                character: source.character
            })));
        }
        return result;
    }
}
exports.ContainerReflectionSerializer = ContainerReflectionSerializer;
//# sourceMappingURL=container.js.map