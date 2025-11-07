"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
class CommentTagSerializer extends components_1.SerializerComponent {
    serializeGroup(instance) {
        return instance instanceof models_1.CommentTag;
    }
    supports(t) {
        return true;
    }
    toObject(tag, obj = {}) {
        const result = {
            tag: tag.tagName,
            text: tag.text
        };
        if (tag.paramName) {
            result.param = tag.paramName;
        }
        return Object.assign(Object.assign({}, obj), result);
    }
}
exports.CommentTagSerializer = CommentTagSerializer;
CommentTagSerializer.PRIORITY = 1000;
//# sourceMappingURL=comment-tag.js.map