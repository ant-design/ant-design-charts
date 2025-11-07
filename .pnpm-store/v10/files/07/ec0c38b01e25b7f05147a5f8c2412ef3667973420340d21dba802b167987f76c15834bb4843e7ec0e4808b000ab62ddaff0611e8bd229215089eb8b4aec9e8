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
    blur: function() {
        return blur;
    },
    blur2: function() {
        return blur2;
    },
    blurImage: function() {
        return blurImage;
    }
});
function blur(values, r) {
    if (!((r = +r) >= 0)) throw new RangeError("invalid r");
    var length = values.length;
    if (!((length = Math.floor(length)) >= 0)) throw new RangeError("invalid length");
    if (!length || !r) return values;
    var blur = blurf(r);
    var temp = values.slice();
    blur(values, temp, 0, length, 1);
    blur(temp, values, 0, length, 1);
    blur(values, temp, 0, length, 1);
    return values;
}
var blur2 = Blur2(blurf);
var blurImage = Blur2(blurfImage);
function Blur2(blur) {
    return function(data, rx) {
        var ry = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : rx;
        if (!((rx = +rx) >= 0)) throw new RangeError("invalid rx");
        if (!((ry = +ry) >= 0)) throw new RangeError("invalid ry");
        var values = data.data, width = data.width, height = data.height;
        if (!((width = Math.floor(width)) >= 0)) throw new RangeError("invalid width");
        if (!((height = Math.floor(height !== undefined ? height : values.length / width)) >= 0)) throw new RangeError("invalid height");
        if (!width || !height || !rx && !ry) return data;
        var blurx = rx && blur(rx);
        var blury = ry && blur(ry);
        var temp = values.slice();
        if (blurx && blury) {
            blurh(blurx, temp, values, width, height);
            blurh(blurx, values, temp, width, height);
            blurh(blurx, temp, values, width, height);
            blurv(blury, values, temp, width, height);
            blurv(blury, temp, values, width, height);
            blurv(blury, values, temp, width, height);
        } else if (blurx) {
            blurh(blurx, values, temp, width, height);
            blurh(blurx, temp, values, width, height);
            blurh(blurx, values, temp, width, height);
        } else if (blury) {
            blurv(blury, values, temp, width, height);
            blurv(blury, temp, values, width, height);
            blurv(blury, values, temp, width, height);
        }
        return data;
    };
}
function blurh(blur, T, S, w, h) {
    for(var y = 0, n = w * h; y < n;){
        blur(T, S, y, y += w, 1);
    }
}
function blurv(blur, T, S, w, h) {
    for(var x = 0, n = w * h; x < w; ++x){
        blur(T, S, x, x + n, w);
    }
}
function blurfImage(radius) {
    var blur = blurf(radius);
    return function(T, S, start, stop, step) {
        start <<= 2, stop <<= 2, step <<= 2;
        blur(T, S, start + 0, stop + 0, step);
        blur(T, S, start + 1, stop + 1, step);
        blur(T, S, start + 2, stop + 2, step);
        blur(T, S, start + 3, stop + 3, step);
    };
}
// Given a target array T, a source array S, sets each value T[i] to the average
// of {S[i - r], …, S[i], …, S[i + r]}, where r = ⌊radius⌋, start <= i < stop,
// for each i, i + step, i + 2 * step, etc., and where S[j] is clamped between
// S[start] (inclusive) and S[stop] (exclusive). If the given radius is not an
// integer, S[i - r - 1] and S[i + r + 1] are added to the sum, each weighted
// according to r - ⌊radius⌋.
function blurf(radius) {
    var radius0 = Math.floor(radius);
    if (radius0 === radius) return bluri(radius);
    var t = radius - radius0;
    var w = 2 * radius + 1;
    return function(T, S, start, stop, step) {
        if (!((stop -= step) >= start)) return; // inclusive stop
        var sum = radius0 * S[start];
        var s0 = step * radius0;
        var s1 = s0 + step;
        for(var i = start, j = start + s0; i < j; i += step){
            sum += S[Math.min(stop, i)];
        }
        for(var i1 = start, j1 = stop; i1 <= j1; i1 += step){
            sum += S[Math.min(stop, i1 + s0)];
            T[i1] = (sum + t * (S[Math.max(start, i1 - s1)] + S[Math.min(stop, i1 + s1)])) / w;
            sum -= S[Math.max(start, i1 - s0)];
        }
    };
}
// Like blurf, but optimized for integer radius.
function bluri(radius) {
    var w = 2 * radius + 1;
    return function(T, S, start, stop, step) {
        if (!((stop -= step) >= start)) return; // inclusive stop
        var sum = radius * S[start];
        var s = step * radius;
        for(var i = start, j = start + s; i < j; i += step){
            sum += S[Math.min(stop, i)];
        }
        for(var i1 = start, j1 = stop; i1 <= j1; i1 += step){
            sum += S[Math.min(stop, i1 + s)];
            T[i1] = sum / w;
            sum -= S[Math.max(start, i1 - s)];
        }
    };
}
