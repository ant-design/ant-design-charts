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
function responseText(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    return response.text();
}
function _default(input, init) {
    return fetch(input, init).then(responseText);
}
