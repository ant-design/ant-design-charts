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
        return log;
    },
    loggish: function() {
        return loggish;
    }
});
var _index = require("../../d3-array/src/index.js");
var _index1 = require("../../d3-format/src/index.js");
var _nice = /*#__PURE__*/ _interop_require_default(require("./nice.js"));
var _continuous = require("./continuous.js");
var _init = require("./init.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function transformLog(x) {
    return Math.log(x);
}
function transformExp(x) {
    return Math.exp(x);
}
function transformLogn(x) {
    return -Math.log(-x);
}
function transformExpn(x) {
    return -Math.exp(-x);
}
function pow10(x) {
    return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}
function powp(base) {
    return base === 10 ? pow10 : base === Math.E ? Math.exp : function(x) {
        return Math.pow(base, x);
    };
}
function logp(base) {
    return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function(x) {
        return Math.log(x) / base;
    });
}
function reflect(f) {
    return function(x, k) {
        return -f(-x, k);
    };
}
function loggish(transform) {
    var scale = transform(transformLog, transformExp);
    var domain = scale.domain;
    var base = 10;
    var logs;
    var pows;
    function rescale() {
        logs = logp(base), pows = powp(base);
        if (domain()[0] < 0) {
            logs = reflect(logs), pows = reflect(pows);
            transform(transformLogn, transformExpn);
        } else {
            transform(transformLog, transformExp);
        }
        return scale;
    }
    scale.base = function(_) {
        return arguments.length ? (base = +_, rescale()) : base;
    };
    scale.domain = function(_) {
        return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.ticks = function(count) {
        var d = domain();
        var u = d[0];
        var v = d[d.length - 1];
        var r = v < u;
        var ref;
        if (r) ref = [
            v,
            u
        ], u = ref[0], v = ref[1], ref;
        var i = logs(u);
        var j = logs(v);
        var k;
        var t;
        var n = count == null ? 10 : +count;
        var z = [];
        if (!(base % 1) && j - i < n) {
            i = Math.floor(i), j = Math.ceil(j);
            if (u > 0) for(; i <= j; ++i){
                for(k = 1; k < base; ++k){
                    t = i < 0 ? k / pows(-i) : k * pows(i);
                    if (t < u) continue;
                    if (t > v) break;
                    z.push(t);
                }
            }
            else for(; i <= j; ++i){
                for(k = base - 1; k >= 1; --k){
                    t = i > 0 ? k / pows(-i) : k * pows(i);
                    if (t < u) continue;
                    if (t > v) break;
                    z.push(t);
                }
            }
            if (z.length * 2 < n) z = (0, _index.ticks)(u, v, n);
        } else {
            z = (0, _index.ticks)(i, j, Math.min(j - i, n)).map(pows);
        }
        return r ? z.reverse() : z;
    };
    scale.tickFormat = function(count, specifier) {
        if (count == null) count = 10;
        if (specifier == null) specifier = base === 10 ? "s" : ",";
        if (typeof specifier !== "function") {
            if (!(base % 1) && (specifier = (0, _index1.formatSpecifier)(specifier)).precision == null) specifier.trim = true;
            specifier = (0, _index1.format)(specifier);
        }
        if (count === Infinity) return specifier;
        var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
        return function(d) {
            var i = d / pows(Math.round(logs(d)));
            if (i * base < base - 0.5) i *= base;
            return i <= k ? specifier(d) : "";
        };
    };
    scale.nice = function() {
        return domain((0, _nice.default)(domain(), {
            floor: function(x) {
                return pows(Math.floor(logs(x)));
            },
            ceil: function(x) {
                return pows(Math.ceil(logs(x)));
            }
        }));
    };
    return scale;
}
function log() {
    var scale = loggish((0, _continuous.transformer)()).domain([
        1,
        10
    ]);
    scale.copy = function() {
        return (0, _continuous.copy)(scale, log()).base(scale.base());
    };
    _init.initRange.apply(scale, arguments);
    return scale;
}
