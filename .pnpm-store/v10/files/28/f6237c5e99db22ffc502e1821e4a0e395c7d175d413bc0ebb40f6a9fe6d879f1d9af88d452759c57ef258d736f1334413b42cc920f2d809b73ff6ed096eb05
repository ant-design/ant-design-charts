declare class Container<O> {
    private $value;
    constructor(x: any);
    static of<O>(x: any): Container<O>;
    call<T, U>(f: (x: T, ...rest: any[]) => U, ...rest: any[]): this;
    value(): O;
}
export { Container };
