"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_1 = require("../../theme");
class BitbucketTheme extends theme_1.default {
    constructor(renderer, basePath) {
        super(renderer, basePath);
    }
    toAnchorRef(reflection) {
        function parseAnchorRef(ref) {
            return ref.replace(/"/g, '').replace(/ /g, '-');
        }
        let anchorPrefix = '';
        reflection.flags.forEach(flag => (anchorPrefix += `${flag}-`));
        const prefixRef = parseAnchorRef(anchorPrefix);
        const reflectionRef = parseAnchorRef(reflection.name);
        const anchorRef = prefixRef + reflectionRef;
        return 'markdown-header-' + anchorRef.toLowerCase();
    }
}
exports.default = BitbucketTheme;
