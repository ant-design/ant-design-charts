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
    transformer: function() {
        return transformer;
    }
});
function _default(methods) {
    return {
        stream: transformer(methods)
    };
}
function transformer(methods) {
    return function(stream) {
        var s = new TransformStream;
        for(var key in methods)s[key] = methods[key];
        s.stream = stream;
        return s;
    };
}
function TransformStream() {}
TransformStream.prototype = {
    constructor: TransformStream,
    point: function point(x, y) {
        this.stream.point(x, y);
    },
    sphere: function sphere() {
        this.stream.sphere();
    },
    lineStart: function lineStart() {
        this.stream.lineStart();
    },
    lineEnd: function lineEnd() {
        this.stream.lineEnd();
    },
    polygonStart: function polygonStart() {
        this.stream.polygonStart();
    },
    polygonEnd: function polygonEnd() {
        this.stream.polygonEnd();
    }
};
