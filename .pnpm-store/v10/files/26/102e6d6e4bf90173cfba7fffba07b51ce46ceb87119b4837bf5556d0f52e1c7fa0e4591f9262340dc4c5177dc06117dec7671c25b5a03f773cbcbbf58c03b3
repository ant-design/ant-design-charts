"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnicodeExtensionComponents = UnicodeExtensionComponents;
var utils_1 = require("./utils");
function UnicodeExtensionComponents(extension) {
    (0, utils_1.invariant)(extension === extension.toLowerCase(), 'Expected extension to be lowercase');
    (0, utils_1.invariant)(extension.slice(0, 3) === '-u-', 'Expected extension to be a Unicode locale extension');
    var attributes = [];
    var keywords = [];
    var keyword;
    var size = extension.length;
    var k = 3;
    while (k < size) {
        var e = extension.indexOf('-', k);
        var len = void 0;
        if (e === -1) {
            len = size - k;
        }
        else {
            len = e - k;
        }
        var subtag = extension.slice(k, k + len);
        (0, utils_1.invariant)(len >= 2, 'Expected a subtag to have at least 2 characters');
        if (keyword === undefined && len != 2) {
            if (attributes.indexOf(subtag) === -1) {
                attributes.push(subtag);
            }
        }
        else if (len === 2) {
            keyword = { key: subtag, value: '' };
            if (keywords.find(function (k) { return k.key === (keyword === null || keyword === void 0 ? void 0 : keyword.key); }) === undefined) {
                keywords.push(keyword);
            }
        }
        else if ((keyword === null || keyword === void 0 ? void 0 : keyword.value) === '') {
            keyword.value = subtag;
        }
        else {
            (0, utils_1.invariant)(keyword !== undefined, 'Expected keyword to be defined');
            keyword.value += '-' + subtag;
        }
        k += len + 1;
    }
    return { attributes: attributes, keywords: keywords };
}
