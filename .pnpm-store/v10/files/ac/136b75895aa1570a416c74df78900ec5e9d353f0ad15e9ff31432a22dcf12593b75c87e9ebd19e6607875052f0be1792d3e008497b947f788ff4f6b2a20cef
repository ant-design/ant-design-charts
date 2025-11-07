const isArrayLike = function(value: any): boolean {
    /**
     * isArrayLike([1, 2, 3]) => true
     * isArrayLike(document.body.children) => true
     * isArrayLike('abc') => true
     * isArrayLike(Function) => false
     */
  return value !== null && typeof value !== 'function' && isFinite(value.length);
};

export default isArrayLike;
