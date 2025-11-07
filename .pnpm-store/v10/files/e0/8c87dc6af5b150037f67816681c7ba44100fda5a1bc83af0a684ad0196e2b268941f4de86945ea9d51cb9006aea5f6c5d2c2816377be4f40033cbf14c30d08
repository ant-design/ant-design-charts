"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/keys"));

var _ = require('underscore');

var EventEmitter = require('eventemitter3');

var _require = require('./utils'),
    inherits = _require.inherits;

var AdapterManager = inherits(EventEmitter, {
  constructor: function constructor() {
    EventEmitter.apply(this);
    this._adapters = {};
  },
  getAdapter: function getAdapter(name) {
    var adapter = this._adapters[name];

    if (adapter === undefined) {
      throw new Error("".concat(name, " adapter is not configured"));
    }

    return adapter;
  },
  setAdapters: function setAdapters(newAdapters) {
    var _this = this;

    _.extend(this._adapters, newAdapters);

    (0, _keys.default)(_).call(_, newAdapters).forEach(function (name) {
      return _this.emit(name, newAdapters[name]);
    });
  }
});
var adapterManager = new AdapterManager();
module.exports = {
  getAdapter: adapterManager.getAdapter.bind(adapterManager),
  setAdapters: adapterManager.setAdapters.bind(adapterManager),
  adapterManager: adapterManager
};