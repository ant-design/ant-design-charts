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
    Path: function() {
        return Path;
    },
    path: function() {
        return path;
    },
    pathRound: function() {
        return pathRound;
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
        "Z"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "L",
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
        "Q",
        ",",
        ",",
        ",",
        ""
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "C",
        ",",
        ",",
        ",",
        ",",
        ",",
        ""
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "M",
        ",",
        ""
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "L",
        ",",
        ""
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "L",
        ",",
        ""
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "A",
        ",",
        ",0,0,",
        ",",
        ",",
        ""
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "M",
        ",",
        ""
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        "L",
        ",",
        ""
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = _tagged_template_literal([
        "A",
        ",",
        ",0,1,",
        ",",
        ",",
        "A",
        ",",
        ",0,1,",
        ",",
        ",",
        ""
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = _tagged_template_literal([
        "A",
        ",",
        ",0,",
        ",",
        ",",
        ",",
        ""
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = _tagged_template_literal([
        "M",
        ",",
        "h",
        "v",
        "h",
        "Z"
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
var pi = Math.PI, tau = 2 * pi, epsilon = 1e-6, tauEpsilon = tau - epsilon;
function append(strings) {
    this._ += strings[0];
    for(var i = 1, n = strings.length; i < n; ++i){
        this._ += arguments[i] + strings[i];
    }
}
function appendRound(digits) {
    var d = Math.floor(digits);
    if (!(d >= 0)) throw new Error("invalid digits: ".concat(digits));
    if (d > 15) return append;
    var k = Math.pow(10, d);
    return function(strings) {
        this._ += strings[0];
        for(var i = 1, n = strings.length; i < n; ++i){
            this._ += Math.round(arguments[i] * k) / k + strings[i];
        }
    };
}
var Path = /*#__PURE__*/ function() {
    "use strict";
    function Path(digits) {
        _class_call_check(this, Path);
        this._x0 = this._y0 = this._x1 = this._y1 = null; // end of current subpath
        this._ = "";
        this._append = digits == null ? append : appendRound(digits);
    }
    _create_class(Path, [
        {
            key: "moveTo",
            value: function moveTo(x, y) {
                this._append(_templateObject(), this._x0 = this._x1 = +x, this._y0 = this._y1 = +y);
            }
        },
        {
            key: "closePath",
            value: function closePath() {
                if (this._x1 !== null) {
                    this._x1 = this._x0, this._y1 = this._y0;
                    this._append(_templateObject1());
                }
            }
        },
        {
            key: "lineTo",
            value: function lineTo(x, y) {
                this._append(_templateObject2(), this._x1 = +x, this._y1 = +y);
            }
        },
        {
            key: "quadraticCurveTo",
            value: function quadraticCurveTo(x1, y1, x, y) {
                this._append(_templateObject3(), +x1, +y1, this._x1 = +x, this._y1 = +y);
            }
        },
        {
            key: "bezierCurveTo",
            value: function bezierCurveTo(x1, y1, x2, y2, x, y) {
                this._append(_templateObject4(), +x1, +y1, +x2, +y2, this._x1 = +x, this._y1 = +y);
            }
        },
        {
            key: "arcTo",
            value: function arcTo(x1, y1, x2, y2, r) {
                x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
                // Is the radius negative? Error.
                if (r < 0) throw new Error("negative radius: ".concat(r));
                var x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
                // Is this path empty? Move to (x1,y1).
                if (this._x1 === null) {
                    this._append(_templateObject5(), this._x1 = x1, this._y1 = y1);
                } else if (!(l01_2 > epsilon)) ;
                else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
                    this._append(_templateObject6(), this._x1 = x1, this._y1 = y1);
                } else {
                    var x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
                    // If the start tangent is not coincident with (x0,y0), line to.
                    if (Math.abs(t01 - 1) > epsilon) {
                        this._append(_templateObject7(), x1 + t01 * x01, y1 + t01 * y01);
                    }
                    this._append(_templateObject8(), r, r, +(y01 * x20 > x01 * y20), this._x1 = x1 + t21 * x21, this._y1 = y1 + t21 * y21);
                }
            }
        },
        {
            key: "arc",
            value: function arc(x, y, r, a0, a1, ccw) {
                x = +x, y = +y, r = +r, ccw = !!ccw;
                // Is the radius negative? Error.
                if (r < 0) throw new Error("negative radius: ".concat(r));
                var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x + dx, y0 = y + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
                // Is this path empty? Move to (x0,y0).
                if (this._x1 === null) {
                    this._append(_templateObject9(), x0, y0);
                } else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
                    this._append(_templateObject10(), x0, y0);
                }
                // Is this arc empty? We’re done.
                if (!r) return;
                // Does the angle go the wrong way? Flip the direction.
                if (da < 0) da = da % tau + tau;
                // Is this a complete circle? Draw two arcs to complete the circle.
                if (da > tauEpsilon) {
                    this._append(_templateObject11(), r, r, cw, x - dx, y - dy, r, r, cw, this._x1 = x0, this._y1 = y0);
                } else if (da > epsilon) {
                    this._append(_templateObject12(), r, r, +(da >= pi), cw, this._x1 = x + r * Math.cos(a1), this._y1 = y + r * Math.sin(a1));
                }
            }
        },
        {
            key: "rect",
            value: function rect(x, y, w, h) {
                this._append(_templateObject13(), this._x0 = this._x1 = +x, this._y0 = this._y1 = +y, w = +w, +h, -w);
            }
        },
        {
            key: "toString",
            value: function toString() {
                return this._;
            }
        }
    ]);
    return Path;
}();
function path() {
    return new Path;
}
// Allow instanceof d3.path
path.prototype = Path.prototype;
function pathRound() {
    var digits = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 3;
    return new Path(+digits);
}
