"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../../components");
const models_1 = require("../models");
class SourceReferenceContainerSerializer extends components_1.SerializerComponent {
    serializeGroup(instance) {
        return instance instanceof models_1.SourceReferenceWrapper;
    }
    supports(_) {
        return true;
    }
    toObject({ sourceReference: ref }, obj) {
        return Object.assign(Object.assign({}, obj), { fileName: ref.fileName, line: ref.line, character: ref.character });
    }
}
exports.SourceReferenceContainerSerializer = SourceReferenceContainerSerializer;
SourceReferenceContainerSerializer.PRIORITY = 1000;
//# sourceMappingURL=source-reference.js.map