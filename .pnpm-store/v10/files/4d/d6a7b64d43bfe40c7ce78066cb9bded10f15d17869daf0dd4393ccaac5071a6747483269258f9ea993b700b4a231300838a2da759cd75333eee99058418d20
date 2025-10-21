"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/keys"));

var _ = require('underscore');

var EventEmitter = require('eventemitter3');

var _require = require('./utils'),
    inherits = _require.inherits;

var _require2 = require('./request'),
    request = _require2.request;

var subscribe = function subscribe(queryJSON, subscriptionId) {
  return request({
    method: 'POST',
    path: '/LiveQuery/subscribe',
    data: {
      query: queryJSON,
      id: subscriptionId
    }
  });
};

module.exports = function (AV) {
  var requireRealtime = function requireRealtime() {
    if (!AV._config.realtime) {
      throw new Error('LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query');
    }
  };
  /**
   * @class
   * A LiveQuery, created by {@link AV.Query#subscribe} is an EventEmitter notifies changes of the Query.
   * @since 3.0.0
   */


  AV.LiveQuery = inherits(EventEmitter,
  /** @lends AV.LiveQuery.prototype */
  {
    constructor: function constructor(id, client, queryJSON, subscriptionId) {
      var _this = this;

      EventEmitter.apply(this);
      this.id = id;
      this._client = client;

      this._client.register(this);

      this._queryJSON = queryJSON;
      this._subscriptionId = subscriptionId;
      this._onMessage = this._dispatch.bind(this);

      this._onReconnect = function () {
        subscribe(_this._queryJSON, _this._subscriptionId).catch(function (error) {
          return console.error("LiveQuery resubscribe error: ".concat(error.message));
        });
      };

      client.on('message', this._onMessage);
      client.on('reconnect', this._onReconnect);
    },
    _dispatch: function _dispatch(message) {
      var _this2 = this;

      message.forEach(function (_ref) {
        var op = _ref.op,
            object = _ref.object,
            queryId = _ref.query_id,
            updatedKeys = _ref.updatedKeys;
        if (queryId !== _this2.id) return;
        var target = AV.parseJSON(_.extend({
          __type: object.className === '_File' ? 'File' : 'Object'
        }, object));

        if (updatedKeys) {
          /**
           * An existing AV.Object which fulfills the Query you subscribe is updated.
           * @event AV.LiveQuery#update
           * @param {AV.Object|AV.File} target updated object
           * @param {String[]} updatedKeys updated keys
           */

          /**
           * An existing AV.Object which doesn't fulfill the Query is updated and now it fulfills the Query.
           * @event AV.LiveQuery#enter
           * @param {AV.Object|AV.File} target updated object
           * @param {String[]} updatedKeys updated keys
           */

          /**
           * An existing AV.Object which fulfills the Query is updated and now it doesn't fulfill the Query.
           * @event AV.LiveQuery#leave
           * @param {AV.Object|AV.File} target updated object
           * @param {String[]} updatedKeys updated keys
           */
          _this2.emit(op, target, updatedKeys);
        } else {
          /**
           * A new AV.Object which fulfills the Query you subscribe is created.
           * @event AV.LiveQuery#create
           * @param {AV.Object|AV.File} target updated object
           */

          /**
           * An existing AV.Object which fulfills the Query you subscribe is deleted.
           * @event AV.LiveQuery#delete
           * @param {AV.Object|AV.File} target updated object
           */
          _this2.emit(op, target);
        }
      });
    },

    /**
     * unsubscribe the query
     *
     * @return {Promise}
     */
    unsubscribe: function unsubscribe() {
      var client = this._client;
      client.off('message', this._onMessage);
      client.off('reconnect', this._onReconnect);
      client.deregister(this);
      return request({
        method: 'POST',
        path: '/LiveQuery/unsubscribe',
        data: {
          id: client.id,
          query_id: this.id
        }
      });
    }
  },
  /** @lends AV.LiveQuery */
  {
    init: function init(query) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$subscriptionId = _ref2.subscriptionId,
          userDefinedSubscriptionId = _ref2$subscriptionId === void 0 ? AV._getSubscriptionId() : _ref2$subscriptionId;

      requireRealtime();
      if (!(query instanceof AV.Query)) throw new TypeError('LiveQuery must be inited with a Query');
      return _promise.default.resolve(userDefinedSubscriptionId).then(function (subscriptionId) {
        return AV._config.realtime.createLiveQueryClient(subscriptionId).then(function (liveQueryClient) {
          var _query$_getParams = query._getParams(),
              where = _query$_getParams.where,
              keys = (0, _keys.default)(_query$_getParams),
              returnACL = _query$_getParams.returnACL;

          var queryJSON = {
            where: where,
            keys: keys,
            returnACL: returnACL,
            className: query.className
          };
          var promise = subscribe(queryJSON, subscriptionId).then(function (_ref3) {
            var queryId = _ref3.query_id;
            return new AV.LiveQuery(queryId, liveQueryClient, queryJSON, subscriptionId);
          }).finally(function () {
            liveQueryClient.deregister(promise);
          });
          liveQueryClient.register(promise);
          return promise;
        });
      });
    },

    /**
     * Pause the LiveQuery connection. This is useful to deactivate the SDK when the app is swtiched to background.
     * @static
     * @return void
     */
    pause: function pause() {
      requireRealtime();
      return AV._config.realtime.pause();
    },

    /**
     * Resume the LiveQuery connection. All subscriptions will be restored after reconnection.
     * @static
     * @return void
     */
    resume: function resume() {
      requireRealtime();
      return AV._config.realtime.resume();
    }
  });
};