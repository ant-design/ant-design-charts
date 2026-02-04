"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
class Container {
    constructor(x) {
        this.$value = x;
    }
    static of(x) {
        return new Container(x);
    }
    call(f, ...rest) {
        return (this.$value = f(this.$value, ...rest)), this;
    }
    value() {
        return this.$value;
    }
}
exports.Container = Container;
//# sourceMappingURL=container.js.map