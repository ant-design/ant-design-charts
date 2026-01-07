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
    shuffler: function() {
        return shuffler;
    }
});
var _default = shuffler(Math.random);
function shuffler(random) {
    return function shuffle(array) {
        var i0 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i1 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : array.length;
        var m = i1 - (i0 = +i0);
        while(m){
            var i = random() * m-- | 0, t = array[m + i0];
            array[m + i0] = array[i + i0];
            array[i + i0] = t;
        }
        return array;
    };
}
