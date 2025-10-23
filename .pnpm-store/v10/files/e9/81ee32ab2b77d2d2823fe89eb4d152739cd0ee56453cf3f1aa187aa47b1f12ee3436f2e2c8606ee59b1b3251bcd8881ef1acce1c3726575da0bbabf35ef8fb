// Simple caching for constant-radius points.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PathString;
    }
});
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _tagged_template_literal([
        "M",
        ",",
        ""
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "L",
        ",",
        ""
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "M",
        ",",
        ""
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "m0,",
        "a",
        ",",
        " 0 1,1 0,",
        "a",
        ",",
        " 0 1,1 0,",
        "z"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
var cacheDigits, cacheAppend, cacheRadius, cacheCircle;
var PathString = /*#__PURE__*/ function() {
    "use strict";
    function PathString(digits) {
        _class_call_check(this, PathString);
        this._append = digits == null ? append : appendRound(digits);
        this._radius = 4.5;
        this._ = "";
    }
    _create_class(PathString, [
        {
            key: "pointRadius",
            value: function pointRadius(_) {
                this._radius = +_;
                return this;
            }
        },
        {
            key: "polygonStart",
            value: function polygonStart() {
                this._line = 0;
            }
        },
        {
            key: "polygonEnd",
            value: function polygonEnd() {
                this._line = NaN;
            }
        },
        {
            key: "lineStart",
            value: function lineStart() {
                this._point = 0;
            }
        },
        {
            key: "lineEnd",
            value: function lineEnd() {
                if (this._line === 0) this._ += "Z";
                this._point = NaN;
            }
        },
        {
            key: "point",
            value: function point(x, y) {
                switch(this._point){
                    case 0:
                        {
                            this._append(_templateObject(), x, y);
                            this._point = 1;
                            break;
                        }
                    case 1:
                        {
                            this._append(_templateObject1(), x, y);
                            break;
                        }
                    default:
                        {
                            this._append(_templateObject2(), x, y);
                            if (this._radius !== cacheRadius || this._append !== cacheAppend) {
                                var r = this._radius;
                                var s = this._;
                                this._ = ""; // stash the old string so we can cache the circle path fragment
                                this._append(_templateObject3(), r, r, r, -2 * r, r, r, 2 * r);
                                cacheRadius = r;
                                cacheAppend = this._append;
                                cacheCircle = this._;
                                this._ = s;
                            }
                            this._ += cacheCircle;
                            break;
                        }
                }
            }
        },
        {
            key: "result",
            value: function result() {
                var result = this._;
                this._ = "";
                return result.length ? result : null;
            }
        }
    ]);
    return PathString;
}();
function append(strings) {
    var i = 1;
    this._ += strings[0];
    for(var j = strings.length; i < j; ++i){
        this._ += arguments[i] + strings[i];
    }
}
function appendRound(digits) {
    var d = Math.floor(digits);
    if (!(d >= 0)) throw new RangeError("invalid digits: ".concat(digits));
    if (d > 15) return append;
    if (d !== cacheDigits) {
        var k = Math.pow(10, d);
        cacheDigits = d;
        cacheAppend = function append(strings) {
            var i = 1;
            this._ += strings[0];
            for(var j = strings.length; i < j; ++i){
                this._ += Math.round(arguments[i] * k) / k + strings[i];
            }
        };
    }
    return cacheAppend;
}
