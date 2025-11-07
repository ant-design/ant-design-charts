"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
function _default(input, init) {
    return new Promise(function(resolve, reject) {
        var image = new Image;
        for(var key in init)image[key] = init[key];
        image.onerror = reject;
        image.onload = function() {
            resolve(image);
        };
        image.src = input;
    });
}
