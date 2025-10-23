'use strict';

var chunkLength = require('../../lib/chunkLength');

function defaultSendProxyRequest(Container) {
  var req = Container.user.req;
  var res = Container.user.res;
  var bodyContent = Container.proxy.bodyContent;
  var reqOpt = Container.proxy.reqBuilder;
  var options = Container.options;

  return new Promise(function (resolve, reject) {
    var protocol = Container.proxy.requestModule;
    var proxyReq = Container.proxy.req = protocol.request(reqOpt, function (rsp) {
      if (options.stream) {
        Container.proxy.res = rsp;
        return resolve(Container);
      }

      var chunks = [];
      rsp.on('data', function (chunk) { chunks.push(chunk); });
      rsp.on('end', function () {
        Container.proxy.res = rsp;
        Container.proxy.resData = Buffer.concat(chunks, chunkLength(chunks));
        resolve(Container);
      });
      rsp.on('error', reject);
    });

    proxyReq.on('socket', function (socket) {
      if (options.timeout) {
        socket.setTimeout(options.timeout, function () {
          proxyReq.abort();
        });
      }
    });

    proxyReq.on('error', reject);

    if (options.parseReqBody) {
      // We are parsing the body ourselves so we need to write the body content
      // and then manually end the request.

      if (bodyContent.length) {
        var body = bodyContent;
        var contentType = proxyReq.getHeader('Content-Type');
        // contentTypes may contain semi-colon
        // example: "application/x-www-form-urlencoded; charset=UTF-8"

        if (contentType && contentType.match('x-www-form-urlencoded')) {
          try {
            var params = JSON.parse(body);
            body = Object.keys(params).map(function (k) { return k + '=' + params[k]; }).join('&');
          } catch (e) {
            // bodyContent is not json-format
          }
        }
        proxyReq.setHeader('Content-Length', Buffer.byteLength(body));
        proxyReq.write(body);
      }
      proxyReq.end();
    } else if (bodyContent) {
      proxyReq.write(bodyContent);
      proxyReq.end();
    } else {
    // Pipe will call end when it has completely read from the request.

      req.pipe(proxyReq);
    }

    // 'aborted' event stopped working reliably on v15.5.0 and was later removed entirely
    var supportsAbortedEvent = (function () {
      var ver = process.versions.node.split('.').map(Number);
      return ver[0] <= 14 || ver[0] === 15 && ver[1] <= 4;
    }());

    if (supportsAbortedEvent) {
      req.on('aborted', function () {
        // reject?
        proxyReq.abort();
      });
    } else {
      res.on('close', function () {
        var aborted = !res.writableFinished;
        if (aborted) {
          proxyReq.abort();
        }
      });
    }
  });
}

function sendProxyRequest(Container) {
  if (Container.options.sendProxyRequest) {
    return Promise.resolve(Container.options.sendProxyRequest(Container));
  }
  return defaultSendProxyRequest(Container);
}

module.exports = sendProxyRequest;
