'use strict';

function defaultSkipFilter(/* res */) {
  return false;
}

function maybeSkipToNextHandler(container) {
  var resolverFn = container.options.skipToNextHandlerFilter || defaultSkipFilter;

  return Promise
    .resolve(resolverFn(container.proxy.res))
    .then(function (shouldSkipToNext) {
      if (shouldSkipToNext) {
        return Promise.reject();
      } else {
        return Promise.resolve(container);
      }
    });
}

module.exports = maybeSkipToNextHandler;
