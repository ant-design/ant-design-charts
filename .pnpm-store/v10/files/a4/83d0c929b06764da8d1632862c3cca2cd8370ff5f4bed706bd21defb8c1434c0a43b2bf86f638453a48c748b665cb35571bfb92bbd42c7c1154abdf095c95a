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
function _default(callback, that) {
    var node = this, nodes = [
        node
    ], next = [], children, i, n, index = -1;
    while(node = nodes.pop()){
        next.push(node);
        if (children = node.children) {
            for(i = 0, n = children.length; i < n; ++i){
                nodes.push(children[i]);
            }
        }
    }
    while(node = next.pop()){
        callback.call(that, node, ++index, this);
    }
    return this;
}
