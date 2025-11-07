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
function responseBlob(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    return response.blob();
}
function _default(input, init) {
    return fetch(input, init).then(responseBlob);
}
