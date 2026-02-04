"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = useIntl;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var utils_1 = require("../utils");
var injectIntl_1 = require("./injectIntl");
function useIntl() {
    var intl = React.useContext(injectIntl_1.Context);
    (0, utils_1.invariantIntlContext)(intl);
    return intl;
}
