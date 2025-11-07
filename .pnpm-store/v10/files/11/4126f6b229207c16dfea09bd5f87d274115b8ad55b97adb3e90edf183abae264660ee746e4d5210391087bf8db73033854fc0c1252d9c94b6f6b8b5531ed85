"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
class CommentSerializer extends components_1.SerializerComponent {
    serializeGroup(instance) {
        return instance instanceof models_1.Comment;
    }
    supports(t) {
        return true;
    }
    toObject(comment, obj = {}) {
        if (comment.shortText) {
            obj.shortText = comment.shortText;
        }
        if (comment.text) {
            obj.text = comment.text;
        }
        if (comment.returns) {
            obj.returns = comment.returns;
        }
        if (comment.tags && comment.tags.length) {
            obj.tags = comment.tags.map(tag => this.owner.toObject(tag));
        }
        return obj;
    }
}
exports.CommentSerializer = CommentSerializer;
CommentSerializer.PRIORITY = 1000;
//# sourceMappingURL=comment.js.map