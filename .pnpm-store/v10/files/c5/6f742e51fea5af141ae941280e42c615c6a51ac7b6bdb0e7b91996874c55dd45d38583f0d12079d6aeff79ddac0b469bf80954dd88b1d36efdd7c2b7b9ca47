"use strict";

var _require = require('leancloud-realtime/core'),
    Realtime = _require.Realtime,
    setRTMAdapters = _require.setAdapters;

var _require2 = require('leancloud-realtime-plugin-live-query'),
    LiveQueryPlugin = _require2.LiveQueryPlugin;

Realtime.__preRegisteredPlugins = [LiveQueryPlugin];

module.exports = function (AV) {
  AV._sharedConfig.liveQueryRealtime = Realtime;
  var setAdapters = AV.setAdapters;

  AV.setAdapters = function (adapters) {
    setAdapters(adapters);
    setRTMAdapters(adapters);
  };

  return AV;
};