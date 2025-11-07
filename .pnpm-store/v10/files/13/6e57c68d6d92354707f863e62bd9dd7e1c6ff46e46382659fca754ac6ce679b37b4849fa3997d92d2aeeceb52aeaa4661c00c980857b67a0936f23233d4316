"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _ = require('underscore');

var _require = require('./request'),
    request = _require.request;

var _require2 = require('./utils'),
    ensureArray = _require2.ensureArray,
    parseDate = _require2.parseDate;

var AV = require('./av');
/**
 * The version change interval for Leaderboard
 * @enum
 */


AV.LeaderboardVersionChangeInterval = {
  NEVER: 'never',
  DAY: 'day',
  WEEK: 'week',
  MONTH: 'month'
};
/**
 * The order of the leaderboard results
 * @enum
 */

AV.LeaderboardOrder = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending'
};
/**
 * The update strategy for Leaderboard
 * @enum
 */

AV.LeaderboardUpdateStrategy = {
  /** Only keep the best statistic. If the leaderboard is in descending order, the best statistic is the highest one. */
  BETTER: 'better',

  /** Keep the last updated statistic */
  LAST: 'last',

  /** Keep the sum of all updated statistics */
  SUM: 'sum'
};
/**
 * @typedef {Object} Ranking
 * @property {number} rank Starts at 0
 * @property {number} value the statistic value of this ranking
 * @property {AV.User} user The user of this ranking
 * @property {Statistic[]} [includedStatistics] Other statistics of the user, specified by the `includeStatistic` option of `AV.Leaderboard.getResults()`
 */

/**
 * @typedef {Object} LeaderboardArchive
 * @property {string} statisticName
 * @property {number} version version of the leaderboard
 * @property {string} status
 * @property {string} url URL for the downloadable archive
 * @property {Date} activatedAt time when this version became active
 * @property {Date} deactivatedAt time when this version was deactivated by a version incrementing
 */

/**
 * @class
 */

function Statistic(_ref) {
  var name = _ref.name,
      value = _ref.value,
      version = _ref.version;

  /**
   * @type {string}
   */
  this.name = name;
  /**
   * @type {number}
   */

  this.value = value;
  /**
   * @type {number?}
   */

  this.version = version;
}

var parseStatisticData = function parseStatisticData(statisticData) {
  var _AV$_decode = AV._decode(statisticData),
      name = _AV$_decode.statisticName,
      value = _AV$_decode.statisticValue,
      version = _AV$_decode.version;

  return new Statistic({
    name: name,
    value: value,
    version: version
  });
};
/**
 * @class
 */


AV.Leaderboard = function Leaderboard(statisticName) {
  /**
   * @type {string}
   */
  this.statisticName = statisticName;
  /**
   * @type {AV.LeaderboardOrder}
   */

  this.order = undefined;
  /**
   * @type {AV.LeaderboardUpdateStrategy}
   */

  this.updateStrategy = undefined;
  /**
   * @type {AV.LeaderboardVersionChangeInterval}
   */

  this.versionChangeInterval = undefined;
  /**
   * @type {number}
   */

  this.version = undefined;
  /**
   * @type {Date?}
   */

  this.nextResetAt = undefined;
  /**
   * @type {Date?}
   */

  this.createdAt = undefined;
};

var Leaderboard = AV.Leaderboard;
/**
 * Create an instance of Leaderboard for the give statistic name.
 * @param {string} statisticName
 * @return {AV.Leaderboard}
 */

AV.Leaderboard.createWithoutData = function (statisticName) {
  return new Leaderboard(statisticName);
};
/**
 * (masterKey required) Create a new Leaderboard.
 * @param {Object} options
 * @param {string} options.statisticName
 * @param {AV.LeaderboardOrder} options.order
 * @param {AV.LeaderboardVersionChangeInterval} [options.versionChangeInterval] default to WEEK
 * @param {AV.LeaderboardUpdateStrategy} [options.updateStrategy] default to BETTER
 * @param {AuthOptions} [authOptions]
 * @return {Promise<AV.Leaderboard>}
 */


AV.Leaderboard.createLeaderboard = function (_ref2, authOptions) {
  var statisticName = _ref2.statisticName,
      order = _ref2.order,
      versionChangeInterval = _ref2.versionChangeInterval,
      updateStrategy = _ref2.updateStrategy;
  return request({
    method: 'POST',
    path: '/leaderboard/leaderboards',
    data: {
      statisticName: statisticName,
      order: order,
      versionChangeInterval: versionChangeInterval,
      updateStrategy: updateStrategy
    },
    authOptions: authOptions
  }).then(function (data) {
    var leaderboard = new Leaderboard(statisticName);
    return leaderboard._finishFetch(data);
  });
};
/**
 * Get the Leaderboard with the specified statistic name.
 * @param {string} statisticName
 * @param {AuthOptions} [authOptions]
 * @return {Promise<AV.Leaderboard>}
 */


AV.Leaderboard.getLeaderboard = function (statisticName, authOptions) {
  return Leaderboard.createWithoutData(statisticName).fetch(authOptions);
};
/**
 * Get Statistics for the specified user.
 * @param {AV.User} user The specified AV.User pointer.
 * @param {Object} [options]
 * @param {string[]} [options.statisticNames] Specify the statisticNames. If not set, all statistics of the user will be fetched.
 * @param {AuthOptions} [authOptions]
 * @return {Promise<Statistic[]>}
 */


AV.Leaderboard.getStatistics = function (user) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      statisticNames = _ref3.statisticNames;

  var authOptions = arguments.length > 2 ? arguments[2] : undefined;
  return _promise.default.resolve().then(function () {
    if (!(user && user.id)) throw new Error('user must be an AV.User');
    return request({
      method: 'GET',
      path: "/leaderboard/users/".concat(user.id, "/statistics"),
      query: {
        statistics: statisticNames ? ensureArray(statisticNames).join(',') : undefined
      },
      authOptions: authOptions
    }).then(function (_ref4) {
      var results = _ref4.results;
      return (0, _map.default)(results).call(results, parseStatisticData);
    });
  });
};
/**
 * Update Statistics for the specified user.
 * @param {AV.User} user The specified AV.User pointer.
 * @param {Object} statistics A name-value pair representing the statistics to update.
 * @param {AuthOptions} [options] AuthOptions plus:
 * @param {boolean} [options.overwrite] Wethere to overwrite these statistics disregarding the updateStrategy of there leaderboards
 * @return {Promise<Statistic[]>}
 */


AV.Leaderboard.updateStatistics = function (user, statistics) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return _promise.default.resolve().then(function () {
    if (!(user && user.id)) throw new Error('user must be an AV.User');
    var data = (0, _map.default)(_).call(_, statistics, function (value, key) {
      return {
        statisticName: key,
        statisticValue: value
      };
    });
    var overwrite = options.overwrite;
    return request({
      method: 'POST',
      path: "/leaderboard/users/".concat(user.id, "/statistics"),
      query: {
        overwrite: overwrite ? 1 : undefined
      },
      data: data,
      authOptions: options
    }).then(function (_ref5) {
      var results = _ref5.results;
      return (0, _map.default)(results).call(results, parseStatisticData);
    });
  });
};
/**
 * Delete Statistics for the specified user.
 * @param {AV.User} user The specified AV.User pointer.
 * @param {Object} statistics A name-value pair representing the statistics to delete.
 * @param {AuthOptions} [options]
 * @return {Promise<void>}
 */


AV.Leaderboard.deleteStatistics = function (user, statisticNames, authOptions) {
  return _promise.default.resolve().then(function () {
    if (!(user && user.id)) throw new Error('user must be an AV.User');
    return request({
      method: 'DELETE',
      path: "/leaderboard/users/".concat(user.id, "/statistics"),
      query: {
        statistics: ensureArray(statisticNames).join(',')
      },
      authOptions: authOptions
    }).then(function () {
      return undefined;
    });
  });
};

_.extend(Leaderboard.prototype,
/** @lends AV.Leaderboard.prototype */
{
  _finishFetch: function _finishFetch(data) {
    var _this = this;

    _.forEach(data, function (value, key) {
      if (key === 'updatedAt' || key === 'objectId') return;

      if (key === 'expiredAt') {
        key = 'nextResetAt';
      }

      if (key === 'createdAt') {
        value = parseDate(value);
      }

      if (value && value.__type === 'Date') {
        value = parseDate(value.iso);
      }

      _this[key] = value;
    });

    return this;
  },

  /**
   * Fetch data from the srever.
   * @param {AuthOptions} [authOptions]
   * @return {Promise<AV.Leaderboard>}
   */
  fetch: function fetch(authOptions) {
    var _this2 = this;

    return request({
      method: 'GET',
      path: "/leaderboard/leaderboards/".concat(this.statisticName),
      authOptions: authOptions
    }).then(function (data) {
      return _this2._finishFetch(data);
    });
  },

  /**
   * Counts the number of users participated in this leaderboard
   * @param {Object} [options]
   * @param {number} [options.version] Specify the version of the leaderboard
   * @param {AuthOptions} [authOptions]
   * @return {Promise<number>}
   */
  count: function count() {
    var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        version = _ref6.version;

    var authOptions = arguments.length > 1 ? arguments[1] : undefined;
    return request({
      method: 'GET',
      path: "/leaderboard/leaderboards/".concat(this.statisticName, "/ranks"),
      query: {
        count: 1,
        limit: 0,
        version: version
      },
      authOptions: authOptions
    }).then(function (_ref7) {
      var count = _ref7.count;
      return count;
    });
  },
  _getResults: function _getResults(_ref8, authOptions, userId) {
    var _context;

    var skip = _ref8.skip,
        limit = _ref8.limit,
        selectUserKeys = _ref8.selectUserKeys,
        includeUserKeys = _ref8.includeUserKeys,
        includeStatistics = _ref8.includeStatistics,
        version = _ref8.version;
    return request({
      method: 'GET',
      path: (0, _concat.default)(_context = "/leaderboard/leaderboards/".concat(this.statisticName, "/ranks")).call(_context, userId ? "/".concat(userId) : ''),
      query: {
        skip: skip,
        limit: limit,
        selectUserKeys: _.union(ensureArray(selectUserKeys), ensureArray(includeUserKeys)).join(',') || undefined,
        includeUser: includeUserKeys ? ensureArray(includeUserKeys).join(',') : undefined,
        includeStatistics: includeStatistics ? ensureArray(includeStatistics).join(',') : undefined,
        version: version
      },
      authOptions: authOptions
    }).then(function (_ref9) {
      var rankings = _ref9.results;
      return (0, _map.default)(rankings).call(rankings, function (rankingData) {
        var _AV$_decode2 = AV._decode(rankingData),
            user = _AV$_decode2.user,
            value = _AV$_decode2.statisticValue,
            rank = _AV$_decode2.rank,
            _AV$_decode2$statisti = _AV$_decode2.statistics,
            statistics = _AV$_decode2$statisti === void 0 ? [] : _AV$_decode2$statisti;

        return {
          user: user,
          value: value,
          rank: rank,
          includedStatistics: (0, _map.default)(statistics).call(statistics, parseStatisticData)
        };
      });
    });
  },

  /**
   * Retrieve a list of ranked users for this Leaderboard.
   * @param {Object} [options]
   * @param {number} [options.skip] The number of results to skip. This is useful for pagination.
   * @param {number} [options.limit] The limit of the number of results.
   * @param {string[]} [options.selectUserKeys] Specify keys of the users to include in the Rankings
   * @param {string[]} [options.includeUserKeys] If the value of a selected user keys is a Pointer, use this options to include its value.
   * @param {string[]} [options.includeStatistics] Specify other statistics to include in the Rankings
   * @param {number} [options.version] Specify the version of the leaderboard
   * @param {AuthOptions} [authOptions]
   * @return {Promise<Ranking[]>}
   */
  getResults: function getResults() {
    var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        skip = _ref10.skip,
        limit = _ref10.limit,
        selectUserKeys = _ref10.selectUserKeys,
        includeUserKeys = _ref10.includeUserKeys,
        includeStatistics = _ref10.includeStatistics,
        version = _ref10.version;

    var authOptions = arguments.length > 1 ? arguments[1] : undefined;
    return this._getResults({
      skip: skip,
      limit: limit,
      selectUserKeys: selectUserKeys,
      includeUserKeys: includeUserKeys,
      includeStatistics: includeStatistics,
      version: version
    }, authOptions);
  },

  /**
   * Retrieve a list of ranked users for this Leaderboard, centered on the specified user.
   * @param {AV.User} user The specified AV.User pointer.
   * @param {Object} [options]
   * @param {number} [options.limit] The limit of the number of results.
   * @param {string[]} [options.selectUserKeys] Specify keys of the users to include in the Rankings
   * @param {string[]} [options.includeUserKeys] If the value of a selected user keys is a Pointer, use this options to include its value.
   * @param {string[]} [options.includeStatistics] Specify other statistics to include in the Rankings
   * @param {number} [options.version] Specify the version of the leaderboard
   * @param {AuthOptions} [authOptions]
   * @return {Promise<Ranking[]>}
   */
  getResultsAroundUser: function getResultsAroundUser(user) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var authOptions = arguments.length > 2 ? arguments[2] : undefined;

    // getResultsAroundUser(options, authOptions)
    if (user && typeof user.id !== 'string') {
      return this.getResultsAroundUser(undefined, user, options);
    }

    var limit = options.limit,
        selectUserKeys = options.selectUserKeys,
        includeUserKeys = options.includeUserKeys,
        includeStatistics = options.includeStatistics,
        version = options.version;
    return this._getResults({
      limit: limit,
      selectUserKeys: selectUserKeys,
      includeUserKeys: includeUserKeys,
      includeStatistics: includeStatistics,
      version: version
    }, authOptions, user ? user.id : 'self');
  },
  _update: function _update(data, authOptions) {
    var _this3 = this;

    return request({
      method: 'PUT',
      path: "/leaderboard/leaderboards/".concat(this.statisticName),
      data: data,
      authOptions: authOptions
    }).then(function (result) {
      return _this3._finishFetch(result);
    });
  },

  /**
   * (masterKey required) Update the version change interval of the Leaderboard.
   * @param {AV.LeaderboardVersionChangeInterval} versionChangeInterval
   * @param {AuthOptions} [authOptions]
   * @return {Promise<AV.Leaderboard>}
   */
  updateVersionChangeInterval: function updateVersionChangeInterval(versionChangeInterval, authOptions) {
    return this._update({
      versionChangeInterval: versionChangeInterval
    }, authOptions);
  },

  /**
   * (masterKey required) Update the version change interval of the Leaderboard.
   * @param {AV.LeaderboardUpdateStrategy} updateStrategy
   * @param {AuthOptions} [authOptions]
   * @return {Promise<AV.Leaderboard>}
   */
  updateUpdateStrategy: function updateUpdateStrategy(updateStrategy, authOptions) {
    return this._update({
      updateStrategy: updateStrategy
    }, authOptions);
  },

  /**
   * (masterKey required) Reset the Leaderboard. The version of the Leaderboard will be incremented by 1.
   * @param {AuthOptions} [authOptions]
   * @return {Promise<AV.Leaderboard>}
   */
  reset: function reset(authOptions) {
    var _this4 = this;

    return request({
      method: 'PUT',
      path: "/leaderboard/leaderboards/".concat(this.statisticName, "/incrementVersion"),
      authOptions: authOptions
    }).then(function (data) {
      return _this4._finishFetch(data);
    });
  },

  /**
   * (masterKey required) Delete the Leaderboard and its all archived versions.
   * @param {AuthOptions} [authOptions]
   * @return {void}
   */
  destroy: function destroy(authOptions) {
    return AV.request({
      method: 'DELETE',
      path: "/leaderboard/leaderboards/".concat(this.statisticName),
      authOptions: authOptions
    }).then(function () {
      return undefined;
    });
  },

  /**
   * (masterKey required) Get archived versions.
   * @param {Object} [options]
   * @param {number} [options.skip] The number of results to skip. This is useful for pagination.
   * @param {number} [options.limit] The limit of the number of results.
   * @param {AuthOptions} [authOptions]
   * @return {Promise<LeaderboardArchive[]>}
   */
  getArchives: function getArchives() {
    var _this5 = this;

    var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        skip = _ref11.skip,
        limit = _ref11.limit;

    var authOptions = arguments.length > 1 ? arguments[1] : undefined;
    return request({
      method: 'GET',
      path: "/leaderboard/leaderboards/".concat(this.statisticName, "/archives"),
      query: {
        skip: skip,
        limit: limit
      },
      authOptions: authOptions
    }).then(function (_ref12) {
      var results = _ref12.results;
      return (0, _map.default)(results).call(results, function (_ref13) {
        var version = _ref13.version,
            status = _ref13.status,
            url = _ref13.url,
            activatedAt = _ref13.activatedAt,
            deactivatedAt = _ref13.deactivatedAt;
        return {
          statisticName: _this5.statisticName,
          version: version,
          status: status,
          url: url,
          activatedAt: parseDate(activatedAt.iso),
          deactivatedAt: parseDate(deactivatedAt.iso)
        };
      });
    });
  }
});