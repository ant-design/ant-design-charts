"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return sequentialQuantile;
    }
});
var _index = require("../../d3-array/src/index.js");
var _continuous = require("./continuous.js");
var _init = require("./init.js");
function sequentialQuantile() {
    var domain = [], interpolator = _continuous.identity;
    function scale(x) {
        if (x != null && !isNaN(x = +x)) return interpolator(((0, _index.bisect)(domain, x, 1) - 1) / (domain.length - 1));
    }
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = _[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var d = _step.value;
                if (d != null && !isNaN(d = +d)) domain.push(d);
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
        domain.sort(_index.ascending);
        return scale;
    };
    scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    scale.range = function() {
        return domain.map(function(d, i) {
            return interpolator(i / (domain.length - 1));
        });
    };
    scale.quantiles = function(n) {
        return Array.from({
            length: n + 1
        }, function(_, i) {
            return (0, _index.quantile)(domain, i / n);
        });
    };
    scale.copy = function() {
        return sequentialQuantile(interpolator).domain(domain);
    };
    return _init.initInterpolator.apply(scale, arguments);
}
