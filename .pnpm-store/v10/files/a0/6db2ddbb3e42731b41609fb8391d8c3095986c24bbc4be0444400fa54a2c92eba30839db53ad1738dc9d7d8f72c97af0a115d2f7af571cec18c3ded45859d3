export default <T = object>(value: any): value is T => {
    /**
     * isObject({}) => true
     * isObject([1, 2, 3]) => true
     * isObject(Function) => true
     * isObject(null) => false
     */
  const type = typeof value;
  return value !== null && type === 'object' || type === 'function';
};
