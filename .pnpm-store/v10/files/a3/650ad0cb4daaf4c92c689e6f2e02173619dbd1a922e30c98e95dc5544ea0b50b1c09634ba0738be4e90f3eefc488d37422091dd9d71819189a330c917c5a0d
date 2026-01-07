"use strict";

var ajax = require('./utils/ajax');

var Cache = require('./cache');

function AppRouter(AV) {
  var _this = this;

  this.AV = AV;
  this.lockedUntil = 0;
  Cache.getAsync('serverURLs').then(function (data) {
    if (_this.disabled) return;
    if (!data) return _this.lock(0);
    var serverURLs = data.serverURLs,
        lockedUntil = data.lockedUntil;

    _this.AV._setServerURLs(serverURLs, false);

    _this.lockedUntil = lockedUntil;
  }).catch(function () {
    return _this.lock(0);
  });
}

AppRouter.prototype.disable = function disable() {
  this.disabled = true;
};

AppRouter.prototype.lock = function lock(ttl) {
  this.lockedUntil = Date.now() + ttl;
};

AppRouter.prototype.refresh = function refresh() {
  var _this2 = this;

  if (this.disabled) return;
  if (Date.now() < this.lockedUntil) return;
  this.lock(10);
  var url = 'https://app-router.com/2/route';
  return ajax({
    method: 'get',
    url: url,
    query: {
      appId: this.AV.applicationId
    }
  }).then(function (servers) {
    if (_this2.disabled) return;
    var ttl = servers.ttl;
    if (!ttl) throw new Error('missing ttl');
    ttl = ttl * 1000;
    var protocal = 'https://';
    var serverURLs = {
      push: protocal + servers.push_server,
      stats: protocal + servers.stats_server,
      engine: protocal + servers.engine_server,
      api: protocal + servers.api_server
    };

    _this2.AV._setServerURLs(serverURLs, false);

    _this2.lock(ttl);

    return Cache.setAsync('serverURLs', {
      serverURLs: serverURLs,
      lockedUntil: _this2.lockedUntil
    }, ttl);
  }).catch(function (error) {
    // bypass all errors
    console.warn("refresh server URLs failed: ".concat(error.message));

    _this2.lock(600);
  });
};

module.exports = AppRouter;