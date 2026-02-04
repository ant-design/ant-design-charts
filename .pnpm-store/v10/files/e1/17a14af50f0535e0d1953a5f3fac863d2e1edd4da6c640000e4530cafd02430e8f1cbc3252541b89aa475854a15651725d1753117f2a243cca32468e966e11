"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberTitle = void 0;
function memberTitle() {
    const md = [];
    if (this.flags) {
        md.push(this.flags.map(flag => `\`${flag}\``).join(' '));
    }
    md.push(this.name);
    return md.join(' ');
}
exports.memberTitle = memberTitle;
