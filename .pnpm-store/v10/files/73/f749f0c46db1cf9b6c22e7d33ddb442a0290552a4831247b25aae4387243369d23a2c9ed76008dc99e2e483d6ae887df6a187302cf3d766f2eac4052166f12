"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifBreadcrumbs = void 0;
const theme_1 = require("../../theme");
function ifBreadcrumbs(options) {
    if (theme_1.default.isSingleFile) {
        return options.inverse(this);
    }
    return theme_1.default.handlebars.helpers.ifBreadcrumbs.call(this, options);
}
exports.ifBreadcrumbs = ifBreadcrumbs;
