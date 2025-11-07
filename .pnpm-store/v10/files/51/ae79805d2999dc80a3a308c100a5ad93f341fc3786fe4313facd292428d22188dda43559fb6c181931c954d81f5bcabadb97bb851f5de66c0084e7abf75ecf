/**
 * Simple memoization utility that only uses the first argument as cache key and has no memory limit.
 *
 * @template {(...args: any[]) => any} F
 * @param {F} f
 * @returns {F}
 */
module.exports.memoize = (f) => {
	const cache = new Map();

	// @ts-ignore
	return function (cacheKey, ...rest) {
		if (cache.has(cacheKey)) {
			return cache.get(cacheKey);
		}

		const result = f(cacheKey, ...rest);

		cache.set(cacheKey, result);

		return result;
	};
};
