"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var AV = require('./av');

var AppRouter = require('./app-router');

var _require = require('./utils'),
    isNullOrUndefined = _require.isNullOrUndefined;

var _require2 = require('underscore'),
    extend = _require2.extend,
    isObject = _require2.isObject,
    isEmpty = _require2.isEmpty;

var isCNApp = function isCNApp(appId) {
  return (0, _slice.default)(appId).call(appId, -9) !== '-MdYXbMMI';
};

var fillServerURLs = function fillServerURLs(url) {
  return {
    push: url,
    stats: url,
    engine: url,
    api: url,
    rtm: url
  };
};

function getDefaultServerURLs(appId) {
  var _context, _context2, _context3, _context4, _context5;

  if (isCNApp(appId)) {
    return {};
  }

  var id = (0, _slice.default)(appId).call(appId, 0, 8).toLowerCase();
  var domain = 'lncldglobal.com';
  return {
    push: (0, _concat.default)(_context = "https://".concat(id, ".push.")).call(_context, domain),
    stats: (0, _concat.default)(_context2 = "https://".concat(id, ".stats.")).call(_context2, domain),
    engine: (0, _concat.default)(_context3 = "https://".concat(id, ".engine.")).call(_context3, domain),
    api: (0, _concat.default)(_context4 = "https://".concat(id, ".api.")).call(_context4, domain),
    rtm: (0, _concat.default)(_context5 = "https://".concat(id, ".rtm.")).call(_context5, domain)
  };
}

var _disableAppRouter = false;
var _initialized = false;
/**
 * URLs for services
 * @typedef {Object} ServerURLs
 * @property {String} [api] serverURL for API service
 * @property {String} [engine] serverURL for engine service
 * @property {String} [stats] serverURL for stats service
 * @property {String} [push] serverURL for push service
 * @property {String} [rtm] serverURL for LiveQuery service
 */

/**
 * Call this method first to set up your authentication tokens for AV.
 * You can get your app keys from the LeanCloud dashboard on http://leancloud.cn .
 * @function AV.init
 * @param {Object} options
 * @param {String} options.appId application id
 * @param {String} options.appKey application key
 * @param {String} [options.masterKey] application master key
 * @param {Boolean} [options.production]
 * @param {String|ServerURLs} [options.serverURL] URLs for services. if a string was given, it will be applied for all services.
 * @param {Boolean} [options.disableCurrentUser]
 */

AV.init = function init(options) {
  if (!isObject(options)) {
    return AV.init({
      appId: options,
      appKey: arguments.length <= 1 ? undefined : arguments[1],
      masterKey: arguments.length <= 2 ? undefined : arguments[2]
    });
  }

  var appId = options.appId,
      appKey = options.appKey,
      masterKey = options.masterKey,
      hookKey = options.hookKey,
      serverURL = options.serverURL,
      _options$serverURLs = options.serverURLs,
      serverURLs = _options$serverURLs === void 0 ? serverURL : _options$serverURLs,
      disableCurrentUser = options.disableCurrentUser,
      production = options.production,
      realtime = options.realtime;
  if (_initialized) console.warn('Initializing LeanCloud Storage SDK which has already been initialized. Reinitializing the SDK might cause problems like unexpected cross-app data writing and invalid relations.');
  if (!appId) throw new TypeError('appId must be a string');
  if (!appKey) throw new TypeError('appKey must be a string');
  if ("NODE_JS" !== 'NODE_JS' && masterKey) console.warn('MasterKey is not supposed to be used at client side.');

  if (isCNApp(appId)) {
    if (!serverURLs && isEmpty(AV._config.serverURLs)) {
      throw new TypeError("serverURL option is required for apps from CN region");
    }
  }

  if (appId !== AV._config.applicationId) {
    // overwrite all keys when reinitializing as a new app
    AV._config.masterKey = masterKey;
    AV._config.hookKey = hookKey;
  } else {
    if (masterKey) AV._config.masterKey = masterKey;
    if (hookKey) AV._config.hookKey = hookKey;
  }

  AV._config.applicationId = appId;
  AV._config.applicationKey = appKey;

  if (!isNullOrUndefined(production)) {
    AV.setProduction(production);
  }

  if (typeof disableCurrentUser !== 'undefined') AV._config.disableCurrentUser = disableCurrentUser;
  var disableAppRouter = _disableAppRouter || typeof serverURLs !== 'undefined';

  if (!disableAppRouter) {
    AV._appRouter = new AppRouter(AV);
  }

  AV._setServerURLs(extend({}, getDefaultServerURLs(appId), AV._config.serverURLs, typeof serverURLs === 'string' ? fillServerURLs(serverURLs) : serverURLs), disableAppRouter);

  if (realtime) {
    AV._config.realtime = realtime;
  } else if (AV._sharedConfig.liveQueryRealtime) {
    var _AV$_config$serverURL = AV._config.serverURLs,
        api = _AV$_config$serverURL.api,
        rtm = _AV$_config$serverURL.rtm;
    AV._config.realtime = new AV._sharedConfig.liveQueryRealtime({
      appId: appId,
      appKey: appKey,
      server: {
        api: api,
        RTMRouter: rtm
      }
    });
  }

  _initialized = true;
}; // If we're running in node.js, allow using the master key.


if ("NODE_JS" === 'NODE_JS') {
  AV.Cloud = AV.Cloud || {};
  /**
   * Switches the LeanCloud SDK to using the Master key.  The Master key grants
   * priveleged access to the data in LeanCloud and can be used to bypass ACLs and
   * other restrictions that are applied to the client SDKs.
   * <p><strong><em>Available in Cloud Code and Node.js only.</em></strong>
   * </p>
   */

  AV.Cloud.useMasterKey = function () {
    AV._config.useMasterKey = true;
  };
}
/**
 * Call this method to set production environment variable.
 * @function AV.setProduction
 * @param {Boolean} production True is production environment,and
 *  it's true by default.
 */


AV.setProduction = function (production) {
  if (!isNullOrUndefined(production)) {
    AV._config.production = production ? 1 : 0;
  } else {
    // change to default value
    AV._config.production = null;
  }
};

AV._setServerURLs = function (urls) {
  var disableAppRouter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (typeof urls !== 'string') {
    extend(AV._config.serverURLs, urls);
  } else {
    AV._config.serverURLs = fillServerURLs(urls);
  }

  if (disableAppRouter) {
    if (AV._appRouter) {
      AV._appRouter.disable();
    } else {
      _disableAppRouter = true;
    }
  }
};
/**
 * Set server URLs for services.
 * @function AV.setServerURL
 * @since 4.3.0
 * @param {String|ServerURLs} urls URLs for services. if a string was given, it will be applied for all services.
 * You can also set them when initializing SDK with `options.serverURL`
 */


AV.setServerURL = function (urls) {
  return AV._setServerURLs(urls);
};

AV.setServerURLs = AV.setServerURL;

AV.keepErrorRawMessage = function (value) {
  AV._sharedConfig.keepErrorRawMessage = value;
};
/**
 * Set a deadline for requests to complete.
 * Note that file upload requests are not affected.
 * @function AV.setRequestTimeout
 * @since 3.6.0
 * @param {number} ms
 */


AV.setRequestTimeout = function (ms) {
  AV._config.requestTimeout = ms;
}; // backword compatible


AV.initialize = AV.init;

var defineConfig = function defineConfig(property) {
  return (0, _defineProperty.default)(AV, property, {
    get: function get() {
      return AV._config[property];
    },
    set: function set(value) {
      AV._config[property] = value;
    }
  });
};

['applicationId', 'applicationKey', 'masterKey', 'hookKey'].forEach(defineConfig);