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
        return _default;
    },
    extend: function() {
        return extend;
    }
});
function _default(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
}
function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}
