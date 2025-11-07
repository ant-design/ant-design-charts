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
export { Container };
//# sourceMappingURL=container.js.map