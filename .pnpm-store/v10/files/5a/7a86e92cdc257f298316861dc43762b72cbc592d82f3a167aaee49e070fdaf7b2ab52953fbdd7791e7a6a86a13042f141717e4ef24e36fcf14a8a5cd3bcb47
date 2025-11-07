'use strict';
var getHeaders = require('../../lib/getHeaders');

function decorateUserResHeaders(container) {
  var resolverFn = container.options.userResHeaderDecorator;
  var headers = getHeaders(container.user.res);

  if (!resolverFn) {
    return Promise.resolve(container);
  }

  const clearAllHeaders = (res) => {
    for (const header in getHeaders(res)) {
      res.removeHeader(header);
    }
  };

  return Promise
    .resolve(resolverFn(headers, container.user.req, container.user.res, container.proxy.req, container.proxy.res))
    .then(function (headers) {
      return new Promise(function (resolve) {
        clearAllHeaders(container.user.res);
        container.user.res.set(headers);
        resolve(container);
      });
    });
}

module.exports = decorateUserResHeaders;
