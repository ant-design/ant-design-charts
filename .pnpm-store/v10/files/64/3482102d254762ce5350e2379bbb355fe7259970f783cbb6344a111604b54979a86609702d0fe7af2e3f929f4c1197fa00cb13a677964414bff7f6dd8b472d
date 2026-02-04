"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_object_like_1 = require("./is-object-like");
var is_type_1 = require("./is-type");
var isPlainObject = function (value) {
    /**
     * isObjectLike(new Foo) => false
     * isObjectLike([1, 2, 3]) => false
     * isObjectLike({ x: 0, y: 0 }) => true
     * isObjectLike(Object.create(null)) => true
     */
    if (!is_object_like_1.default(value) || !is_type_1.default(value, 'Object')) {
        return false;
    }
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }
    var proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
};
exports.default = isPlainObject;
//# sourceMappingURL=is-plain-object.js.map