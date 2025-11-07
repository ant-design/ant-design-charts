const XFetch = async (baseURL, options = {}) => {
  const {
    fetch: fetchFn = globalThis.fetch,
    middlewares = {},
    ...requestInit
  } = options;
  if (typeof fetchFn !== 'function') {
    throw new Error('The options.fetch must be a typeof fetch function!');
  }

  /** ---------------------- request init ---------------------- */
  let fetchArgs = [baseURL, requestInit];

  /** ---------------------- request middleware ---------------------- */
  if (typeof middlewares.onRequest === 'function') {
    const modifiedFetchArgs = await middlewares.onRequest(...fetchArgs);
    fetchArgs = modifiedFetchArgs;
  }

  /** ---------------------- fetch ---------------------- */
  let response = await fetchFn(...fetchArgs);

  /** ---------------------- response middleware ---------------------- */
  if (typeof middlewares.onResponse === 'function') {
    const modifiedResponse = await middlewares.onResponse(response);
    if (!(modifiedResponse instanceof Response)) {
      throw new Error('The options.onResponse must return a Response instance!');
    }
    response = modifiedResponse;
  }

  /** ---------------------- response check ---------------------- */
  if (!response.ok) {
    throw new Error(`Fetch failed with status ${response.status}`);
  }
  if (!response.body) {
    throw new Error('The response body is empty.');
  }

  /** ---------------------- return ---------------------- */
  return response;
};
export default XFetch;