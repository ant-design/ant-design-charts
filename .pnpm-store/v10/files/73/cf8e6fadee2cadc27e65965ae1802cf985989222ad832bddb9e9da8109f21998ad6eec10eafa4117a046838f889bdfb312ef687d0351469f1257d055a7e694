"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReflectionGroup {
    constructor(title, kind) {
        this.children = [];
        this.title = title;
        this.kind = kind;
        this.allChildrenHaveOwnDocument = (() => this.getAllChildrenHaveOwnDocument());
    }
    getAllChildrenHaveOwnDocument() {
        let onlyOwnDocuments = true;
        this.children.forEach((child) => {
            onlyOwnDocuments = onlyOwnDocuments && !!child.hasOwnDocument;
        });
        return onlyOwnDocuments;
    }
}
exports.ReflectionGroup = ReflectionGroup;
//# sourceMappingURL=ReflectionGroup.js.map