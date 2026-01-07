"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printAST = printAST;
exports.doPrintAST = doPrintAST;
exports.printDateTimeSkeleton = printDateTimeSkeleton;
var tslib_1 = require("tslib");
var types_1 = require("./types");
function printAST(ast) {
    return doPrintAST(ast, false);
}
function doPrintAST(ast, isInPlural) {
    var printedNodes = ast.map(function (el, i) {
        if ((0, types_1.isLiteralElement)(el)) {
            return printLiteralElement(el, isInPlural, i === 0, i === ast.length - 1);
        }
        if ((0, types_1.isArgumentElement)(el)) {
            return printArgumentElement(el);
        }
        if ((0, types_1.isDateElement)(el) || (0, types_1.isTimeElement)(el) || (0, types_1.isNumberElement)(el)) {
            return printSimpleFormatElement(el);
        }
        if ((0, types_1.isPluralElement)(el)) {
            return printPluralElement(el);
        }
        if ((0, types_1.isSelectElement)(el)) {
            return printSelectElement(el);
        }
        if ((0, types_1.isPoundElement)(el)) {
            return '#';
        }
        if ((0, types_1.isTagElement)(el)) {
            return printTagElement(el);
        }
    });
    return printedNodes.join('');
}
function printTagElement(el) {
    return "<".concat(el.value, ">").concat(printAST(el.children), "</").concat(el.value, ">");
}
function printEscapedMessage(message) {
    return message.replace(/([{}](?:[\s\S]*[{}])?)/, "'$1'");
}
function printLiteralElement(_a, isInPlural, isFirstEl, isLastEl) {
    var value = _a.value;
    var escaped = value;
    // If this literal starts with a ' and its not the 1st node, this means the node before it is non-literal
    // and the `'` needs to be unescaped
    if (!isFirstEl && escaped[0] === "'") {
        escaped = "''".concat(escaped.slice(1));
    }
    // Same logic but for last el
    if (!isLastEl && escaped[escaped.length - 1] === "'") {
        escaped = "".concat(escaped.slice(0, escaped.length - 1), "''");
    }
    escaped = printEscapedMessage(escaped);
    return isInPlural ? escaped.replace('#', "'#'") : escaped;
}
function printArgumentElement(_a) {
    var value = _a.value;
    return "{".concat(value, "}");
}
function printSimpleFormatElement(el) {
    return "{".concat(el.value, ", ").concat(types_1.TYPE[el.type]).concat(el.style ? ", ".concat(printArgumentStyle(el.style)) : '', "}");
}
function printNumberSkeletonToken(token) {
    var stem = token.stem, options = token.options;
    return options.length === 0
        ? stem
        : "".concat(stem).concat(options.map(function (o) { return "/".concat(o); }).join(''));
}
function printArgumentStyle(style) {
    if (typeof style === 'string') {
        return printEscapedMessage(style);
    }
    else if (style.type === types_1.SKELETON_TYPE.dateTime) {
        return "::".concat(printDateTimeSkeleton(style));
    }
    else {
        return "::".concat(style.tokens.map(printNumberSkeletonToken).join(' '));
    }
}
function printDateTimeSkeleton(style) {
    return style.pattern;
}
function printSelectElement(el) {
    var msg = [
        el.value,
        'select',
        Object.keys(el.options)
            .map(function (id) { return "".concat(id, "{").concat(doPrintAST(el.options[id].value, false), "}"); })
            .join(' '),
    ].join(',');
    return "{".concat(msg, "}");
}
function printPluralElement(el) {
    var type = el.pluralType === 'cardinal' ? 'plural' : 'selectordinal';
    var msg = [
        el.value,
        type,
        tslib_1.__spreadArray([
            el.offset ? "offset:".concat(el.offset) : ''
        ], Object.keys(el.options).map(function (id) { return "".concat(id, "{").concat(doPrintAST(el.options[id].value, true), "}"); }), true).filter(Boolean)
            .join(' '),
    ].join(',');
    return "{".concat(msg, "}");
}
