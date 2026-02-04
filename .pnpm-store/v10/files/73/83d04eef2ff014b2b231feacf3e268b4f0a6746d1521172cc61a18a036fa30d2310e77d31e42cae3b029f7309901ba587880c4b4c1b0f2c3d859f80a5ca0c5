"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hoistSelectors = hoistSelectors;
exports.isStructurallySame = isStructurallySame;
var tslib_1 = require("tslib");
var types_1 = require("./types");
function cloneDeep(obj) {
    if (Array.isArray(obj)) {
        // @ts-expect-error meh
        return tslib_1.__spreadArray([], obj.map(cloneDeep), true);
    }
    if (obj !== null && typeof obj === 'object') {
        // @ts-expect-error meh
        return Object.keys(obj).reduce(function (cloned, k) {
            // @ts-expect-error meh
            cloned[k] = cloneDeep(obj[k]);
            return cloned;
        }, {});
    }
    return obj;
}
function hoistPluralOrSelectElement(ast, el, positionToInject) {
    // pull this out of the ast and move it to the top
    var cloned = cloneDeep(el);
    var options = cloned.options;
    cloned.options = Object.keys(options).reduce(function (all, k) {
        var newValue = hoistSelectors(tslib_1.__spreadArray(tslib_1.__spreadArray(tslib_1.__spreadArray([], ast.slice(0, positionToInject), true), options[k].value, true), ast.slice(positionToInject + 1), true));
        all[k] = {
            value: newValue,
        };
        return all;
    }, {});
    return cloned;
}
function isPluralOrSelectElement(el) {
    return (0, types_1.isPluralElement)(el) || (0, types_1.isSelectElement)(el);
}
function findPluralOrSelectElement(ast) {
    return !!ast.find(function (el) {
        if (isPluralOrSelectElement(el)) {
            return true;
        }
        if ((0, types_1.isTagElement)(el)) {
            return findPluralOrSelectElement(el.children);
        }
        return false;
    });
}
/**
 * Hoist all selectors to the beginning of the AST & flatten the
 * resulting options. E.g:
 * "I have {count, plural, one{a dog} other{many dogs}}"
 * becomes "{count, plural, one{I have a dog} other{I have many dogs}}".
 * If there are multiple selectors, the order of which one is hoisted 1st
 * is non-deterministic.
 * The goal is to provide as many full sentences as possible since fragmented
 * sentences are not translator-friendly
 * @param ast AST
 */
function hoistSelectors(ast) {
    for (var i = 0; i < ast.length; i++) {
        var el = ast[i];
        if (isPluralOrSelectElement(el)) {
            return [hoistPluralOrSelectElement(ast, el, i)];
        }
        if ((0, types_1.isTagElement)(el) && findPluralOrSelectElement([el])) {
            throw new Error('Cannot hoist plural/select within a tag element. Please put the tag element inside each plural/select option');
        }
    }
    return ast;
}
/**
 * Collect all variables in an AST to Record<string, TYPE>
 * @param ast AST to collect variables from
 * @param vars Record of variable name to variable type
 */
function collectVariables(ast, vars) {
    if (vars === void 0) { vars = new Map(); }
    ast.forEach(function (el) {
        if ((0, types_1.isArgumentElement)(el) ||
            (0, types_1.isDateElement)(el) ||
            (0, types_1.isTimeElement)(el) ||
            (0, types_1.isNumberElement)(el)) {
            if (el.value in vars && vars.get(el.value) !== el.type) {
                throw new Error("Variable ".concat(el.value, " has conflicting types"));
            }
            vars.set(el.value, el.type);
        }
        if ((0, types_1.isPluralElement)(el) || (0, types_1.isSelectElement)(el)) {
            vars.set(el.value, el.type);
            Object.keys(el.options).forEach(function (k) {
                collectVariables(el.options[k].value, vars);
            });
        }
        if ((0, types_1.isTagElement)(el)) {
            vars.set(el.value, el.type);
            collectVariables(el.children, vars);
        }
    });
}
/**
 * Check if 2 ASTs are structurally the same. This primarily means that
 * they have the same variables with the same type
 * @param a
 * @param b
 * @returns
 */
function isStructurallySame(a, b) {
    var aVars = new Map();
    var bVars = new Map();
    collectVariables(a, aVars);
    collectVariables(b, bVars);
    if (aVars.size !== bVars.size) {
        return {
            success: false,
            error: new Error("Different number of variables: [".concat(Array.from(aVars.keys()).join(', '), "] vs [").concat(Array.from(bVars.keys()).join(', '), "]")),
        };
    }
    return Array.from(aVars.entries()).reduce(function (result, _a) {
        var key = _a[0], type = _a[1];
        if (!result.success) {
            return result;
        }
        var bType = bVars.get(key);
        if (bType == null) {
            return {
                success: false,
                error: new Error("Missing variable ".concat(key, " in message")),
            };
        }
        if (bType !== type) {
            return {
                success: false,
                error: new Error("Variable ".concat(key, " has conflicting types: ").concat(types_1.TYPE[type], " vs ").concat(types_1.TYPE[bType])),
            };
        }
        return result;
    }, { success: true });
}
