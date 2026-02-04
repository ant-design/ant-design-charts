"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _ = require('underscore');

var AVRequest = require('./request')._request;

module.exports = function (AV) {
  /**
   * A builder to generate sort string for app searching.For example:
   * @class
   * @since 0.5.1
   * @example
   *   var builder = new AV.SearchSortBuilder();
   *   builder.ascending('key1').descending('key2','max');
   *   var query = new AV.SearchQuery('Player');
   *   query.sortBy(builder);
   *   query.find().then();
   */
  AV.SearchSortBuilder = function () {
    this._sortFields = [];
  };

  _.extend(AV.SearchSortBuilder.prototype,
  /** @lends AV.SearchSortBuilder.prototype */
  {
    _addField: function _addField(key, order, mode, missing) {
      var field = {};
      field[key] = {
        order: order || 'asc',
        mode: mode || 'avg',
        missing: '_' + (missing || 'last')
      };

      this._sortFields.push(field);

      return this;
    },

    /**
     * Sorts the results in ascending order by the given key and options.
     *
     * @param {String} key The key to order by.
     * @param {String} mode The sort mode, default is 'avg', you can choose
     *                  'max' or 'min' too.
     * @param {String} missing The missing key behaviour, default is 'last',
     *                  you can choose 'first' too.
     * @return {AV.SearchSortBuilder} Returns the builder, so you can chain this call.
     */
    ascending: function ascending(key, mode, missing) {
      return this._addField(key, 'asc', mode, missing);
    },

    /**
     * Sorts the results in descending order by the given key and options.
     *
     * @param {String} key The key to order by.
     * @param {String} mode The sort mode, default is 'avg', you can choose
     *                  'max' or 'min' too.
     * @param {String} missing The missing key behaviour, default is 'last',
     *                  you can choose 'first' too.
     * @return {AV.SearchSortBuilder} Returns the builder, so you can chain this call.
     */
    descending: function descending(key, mode, missing) {
      return this._addField(key, 'desc', mode, missing);
    },

    /**
     * Add a proximity based constraint for finding objects with key point
     * values near the point given.
     * @param {String} key The key that the AV.GeoPoint is stored in.
     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
     * @param {Object} options The other options such as mode,order, unit etc.
     * @return {AV.SearchSortBuilder} Returns the builder, so you can chain this call.
     */
    whereNear: function whereNear(key, point, options) {
      options = options || {};
      var field = {};
      var geo = {
        lat: point.latitude,
        lon: point.longitude
      };
      var m = {
        order: options.order || 'asc',
        mode: options.mode || 'avg',
        unit: options.unit || 'km'
      };
      m[key] = geo;
      field['_geo_distance'] = m;

      this._sortFields.push(field);

      return this;
    },

    /**
     * Build a sort string by configuration.
     * @return {String} the sort string.
     */
    build: function build() {
      return (0, _stringify.default)(AV._encode(this._sortFields));
    }
  });
  /**
   * App searching query.Use just like AV.Query:
   *
   * Visit <a href='https://leancloud.cn/docs/app_search_guide.html'>App Searching Guide</a>
   * for more details.
   * @class
   * @since 0.5.1
   * @example
   *   var query = new AV.SearchQuery('Player');
   *   query.queryString('*');
   *   query.find().then(function(results) {
   *     console.log('Found %d objects', query.hits());
   *     //Process results
   *   });
   */


  AV.SearchQuery = AV.Query._extend(
  /** @lends AV.SearchQuery.prototype */
  {
    _sid: null,
    _hits: 0,
    _queryString: null,
    _highlights: null,
    _sortBuilder: null,
    _clazz: null,
    constructor: function constructor(className) {
      if (className) {
        this._clazz = className;
      } else {
        className = '__INVALID_CLASS';
      }

      AV.Query.call(this, className);
    },
    _createRequest: function _createRequest(params, options) {
      return AVRequest('search/select', null, null, 'GET', params || this._getParams(), options);
    },

    /**
     * Sets the sid of app searching query.Default is null.
     * @param {String} sid  Scroll id for searching.
     * @return {AV.SearchQuery} Returns the query, so you can chain this call.
     */
    sid: function sid(_sid) {
      this._sid = _sid;
      return this;
    },

    /**
     * Sets the query string of app searching.
     * @param {String} q  The query string.
     * @return {AV.SearchQuery} Returns the query, so you can chain this call.
     */
    queryString: function queryString(q) {
      this._queryString = q;
      return this;
    },

    /**
     * Sets the highlight fields. Such as
     * <pre><code>
     *   query.highlights('title');
     *   //or pass an array.
     *   query.highlights(['title', 'content'])
     * </code></pre>
     * @param {String|String[]} highlights a list of fields.
     * @return {AV.SearchQuery} Returns the query, so you can chain this call.
     */
    highlights: function highlights(_highlights) {
      var objects;

      if (_highlights && _.isString(_highlights)) {
        objects = _.toArray(arguments);
      } else {
        objects = _highlights;
      }

      this._highlights = objects;
      return this;
    },

    /**
     * Sets the sort builder for this query.
     * @see AV.SearchSortBuilder
     * @param { AV.SearchSortBuilder} builder The sort builder.
     * @return {AV.SearchQuery} Returns the query, so you can chain this call.
     *
     */
    sortBy: function sortBy(builder) {
      this._sortBuilder = builder;
      return this;
    },

    /**
     * Returns the number of objects that match this query.
     * @return {Number}
     */
    hits: function hits() {
      if (!this._hits) {
        this._hits = 0;
      }

      return this._hits;
    },
    _processResult: function _processResult(json) {
      delete json['className'];
      delete json['_app_url'];
      delete json['_deeplink'];
      return json;
    },

    /**
     * Returns true when there are more documents can be retrieved by this
     * query instance, you can call find function to get more results.
     * @see AV.SearchQuery#find
     * @return {Boolean}
     */
    hasMore: function hasMore() {
      return !this._hitEnd;
    },

    /**
     * Reset current query instance state(such as sid, hits etc) except params
     * for a new searching. After resetting, hasMore() will return true.
     */
    reset: function reset() {
      this._hitEnd = false;
      this._sid = null;
      this._hits = 0;
    },

    /**
     * Retrieves a list of AVObjects that satisfy this query.
     * Either options.success or options.error is called when the find
     * completes.
     *
     * @see AV.Query#find
     * @param {AuthOptions} options
     * @return {Promise} A promise that is resolved with the results when
     * the query completes.
     */
    find: function find(options) {
      var self = this;

      var request = this._createRequest(undefined, options);

      return request.then(function (response) {
        //update sid for next querying.
        if (response.sid) {
          self._oldSid = self._sid;
          self._sid = response.sid;
        } else {
          self._sid = null;
          self._hitEnd = true;
        }

        self._hits = response.hits || 0;
        return (0, _map.default)(_).call(_, response.results, function (json) {
          if (json.className) {
            response.className = json.className;
          }

          var obj = self._newObject(response);

          obj.appURL = json['_app_url'];

          obj._finishFetch(self._processResult(json), true);

          return obj;
        });
      });
    },
    _getParams: function _getParams() {
      var params = AV.SearchQuery.__super__._getParams.call(this);

      delete params.where;

      if (this._clazz) {
        params.clazz = this.className;
      }

      if (this._sid) {
        params.sid = this._sid;
      }

      if (!this._queryString) {
        throw new Error('Please set query string.');
      } else {
        params.q = this._queryString;
      }

      if (this._highlights) {
        params.highlights = this._highlights.join(',');
      }

      if (this._sortBuilder && params.order) {
        throw new Error('sort and order can not be set at same time.');
      }

      if (this._sortBuilder) {
        params.sort = this._sortBuilder.build();
      }

      return params;
    }
  });
};
/**
 * Sorts the results in ascending order by the given key.
 *
 * @method AV.SearchQuery#ascending
 * @param {String} key The key to order by.
 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
 */

/**
 * Also sorts the results in ascending order by the given key. The previous sort keys have
 * precedence over this key.
 *
 * @method AV.SearchQuery#addAscending
 * @param {String} key The key to order by
 * @return {AV.SearchQuery} Returns the query so you can chain this call.
 */

/**
 * Sorts the results in descending order by the given key.
 *
 * @method AV.SearchQuery#descending
 * @param {String} key The key to order by.
 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
 */

/**
 * Also sorts the results in descending order by the given key. The previous sort keys have
 * precedence over this key.
 *
 * @method AV.SearchQuery#addDescending
 * @param {String} key The key to order by
 * @return {AV.SearchQuery} Returns the query so you can chain this call.
 */

/**
 * Include nested AV.Objects for the provided key.  You can use dot
 * notation to specify which fields in the included object are also fetch.
 * @method AV.SearchQuery#include
 * @param {String[]} keys The name of the key to include.
 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
 */

/**
 * Sets the number of results to skip before returning any results.
 * This is useful for pagination.
 * Default is to skip zero results.
 * @method AV.SearchQuery#skip
 * @param {Number} n the number of results to skip.
 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
 */

/**
 * Sets the limit of the number of results to return. The default limit is
 * 100, with a maximum of 1000 results being returned at a time.
 * @method AV.SearchQuery#limit
 * @param {Number} n the number of results to limit to.
 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
 */