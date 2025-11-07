"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeAndParent = void 0;
const typedoc_1 = require("typedoc");
const types_1 = require("typedoc/dist/lib/models/types");
const theme_1 = require("../../theme");
function typeAndParent() {
    if (this instanceof types_1.ReferenceType && this.reflection) {
        const md = [];
        if (this.reflection instanceof typedoc_1.SignatureReflection) {
            if (this.reflection.parent.parent.url) {
                md.push(`[${this.reflection.parent.parent.name}](${theme_1.default.handlebars.helpers.relativeURL(this.reflection.parent.parent.url)})`);
            }
            else {
                md.push(this.reflection.parent.parent.name);
            }
        }
        else {
            if (this.reflection.parent.url) {
                md.push(`[${this.reflection.parent.name}](${theme_1.default.handlebars.helpers.relativeURL(this.reflection.parent.url)})`);
            }
            else {
                md.push(this.reflection.parent.name);
            }
            if (this.reflection.url) {
                md.push(`[${this.reflection.name}](${theme_1.default.handlebars.helpers.relativeURL(this.reflection.url)})`);
            }
            else {
                md.push(this.reflection.name);
            }
        }
        return md.join('.');
    }
    return 'void';
}
exports.typeAndParent = typeAndParent;
