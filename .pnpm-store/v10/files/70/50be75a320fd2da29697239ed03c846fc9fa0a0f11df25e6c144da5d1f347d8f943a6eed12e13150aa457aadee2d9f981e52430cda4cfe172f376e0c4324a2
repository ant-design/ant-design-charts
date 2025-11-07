"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return group;
    },
    flatGroup: function() {
        return flatGroup;
    },
    flatRollup: function() {
        return flatRollup;
    },
    groups: function() {
        return groups;
    },
    index: function() {
        return index;
    },
    indexes: function() {
        return indexes;
    },
    rollup: function() {
        return rollup;
    },
    rollups: function() {
        return rollups;
    }
});
var _index = require("../../internmap/src/index.js");
var _identity = /*#__PURE__*/ _interop_require_default(require("./identity.js"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function group(values) {
    for(var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        keys[_key - 1] = arguments[_key];
    }
    return nest(values, _identity.default, _identity.default, keys);
}
function groups(values) {
    for(var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        keys[_key - 1] = arguments[_key];
    }
    return nest(values, Array.from, _identity.default, keys);
}
function flatten(groups, keys) {
    for(var i = 1, n = keys.length; i < n; ++i){
        groups = groups.flatMap(function(g) {
            return g.pop().map(function(param) {
                var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                return _to_consumable_array(g).concat([
                    key,
                    value
                ]);
            });
        });
    }
    return groups;
}
function flatGroup(values) {
    for(var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        keys[_key - 1] = arguments[_key];
    }
    return flatten(groups.apply(void 0, [
        values
    ].concat(_to_consumable_array(keys))), keys);
}
function flatRollup(values, reduce) {
    for(var _len = arguments.length, keys = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        keys[_key - 2] = arguments[_key];
    }
    return flatten(rollups.apply(void 0, [
        values,
        reduce
    ].concat(_to_consumable_array(keys))), keys);
}
function rollup(values, reduce) {
    for(var _len = arguments.length, keys = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        keys[_key - 2] = arguments[_key];
    }
    return nest(values, _identity.default, reduce, keys);
}
function rollups(values, reduce) {
    for(var _len = arguments.length, keys = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        keys[_key - 2] = arguments[_key];
    }
    return nest(values, Array.from, reduce, keys);
}
function index(values) {
    for(var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        keys[_key - 1] = arguments[_key];
    }
    return nest(values, _identity.default, unique, keys);
}
function indexes(values) {
    for(var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        keys[_key - 1] = arguments[_key];
    }
    return nest(values, Array.from, unique, keys);
}
function unique(values) {
    if (values.length !== 1) throw new Error("duplicate key");
    return values[0];
}
function nest(values, map, reduce, keys) {
    return function regroup(values, i) {
        if (i >= keys.length) return reduce(values);
        var groups = new _index.InternMap();
        var keyof = keys[i++];
        var index = -1;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var value = _step.value;
                var key = keyof(value, ++index, values);
                var group = groups.get(key);
                if (group) group.push(value);
                else groups.set(key, [
                    value
                ]);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = groups[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var _step_value = _sliced_to_array(_step1.value, 2), key1 = _step_value[0], _$values = _step_value[1];
                groups.set(key1, regroup(_$values, i));
            }
        } catch (err) {
            _didIteratorError1 = true;
            _iteratorError1 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
                }
            }
        }
        return map(groups);
    }(values, 0);
}
