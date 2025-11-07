"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _ = require('underscore');

var AVError = require('./error');

var _require = require('./request'),
    request = _require.request;

module.exports = function (AV) {
  /**
   * 包含了使用了 LeanCloud
   *  <a href='/docs/leaninsight_guide.html'>离线数据分析功能</a>的函数。
   * <p><strong><em>
   *   仅在云引擎运行环境下有效。
   * </em></strong></p>
   * @namespace
   */
  AV.Insight = AV.Insight || {};

  _.extend(AV.Insight,
  /** @lends AV.Insight */
  {
    /**
     * 开始一个 Insight 任务。结果里将返回 Job id，你可以拿得到的 id 使用
     * AV.Insight.JobQuery 查询任务状态和结果。
     * @param {Object} jobConfig 任务配置的 JSON 对象，例如：<code><pre>
     *                   { "sql" : "select count(*) as c,gender from _User group by gender",
     *                     "saveAs": {
     *                         "className" : "UserGender",
     *                         "limit": 1
     *                      }
     *                   }
     *                  </pre></code>
     *               sql 指定任务执行的 SQL 语句， saveAs（可选） 指定将结果保存在哪张表里，limit 最大 1000。
     * @param {AuthOptions} [options]
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     */
    startJob: function startJob(jobConfig, options) {
      if (!jobConfig || !jobConfig.sql) {
        throw new Error('Please provide the sql to run the job.');
      }

      var data = {
        jobConfig: jobConfig,
        appId: AV.applicationId
      };
      return request({
        path: '/bigquery/jobs',
        method: 'POST',
        data: AV._encode(data, null, true),
        authOptions: options,
        signKey: false
      }).then(function (resp) {
        return AV._decode(resp).id;
      });
    },

    /**
     * 监听 Insight 任务事件（未来推出独立部署的离线分析服务后开放）
     *  <p><strong><em>
     *     仅在云引擎运行环境下有效。
     *  </em></strong></p>
     * @param {String} event 监听的事件，目前尚不支持。
     * @param {Function} 监听回调函数，接收 (err, id) 两个参数，err 表示错误信息，
     *                   id 表示任务 id。接下来你可以拿这个 id 使用AV.Insight.JobQuery 查询任务状态和结果。
     *
     */
    on: function on(event, cb) {}
  });
  /**
   * 创建一个对象，用于查询 Insight 任务状态和结果。
   * @class
   * @param {String} id 任务 id
   * @since 0.5.5
   */


  AV.Insight.JobQuery = function (id, className) {
    if (!id) {
      throw new Error('Please provide the job id.');
    }

    this.id = id;
    this.className = className;
    this._skip = 0;
    this._limit = 100;
  };

  _.extend(AV.Insight.JobQuery.prototype,
  /** @lends AV.Insight.JobQuery.prototype */
  {
    /**
     * Sets the number of results to skip before returning any results.
     * This is useful for pagination.
     * Default is to skip zero results.
     * @param {Number} n the number of results to skip.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    skip: function skip(n) {
      this._skip = n;
      return this;
    },

    /**
     * Sets the limit of the number of results to return. The default limit is
     * 100, with a maximum of 1000 results being returned at a time.
     * @param {Number} n the number of results to limit to.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    limit: function limit(n) {
      this._limit = n;
      return this;
    },

    /**
     * 查询任务状态和结果，任务结果为一个 JSON 对象，包括 status 表示任务状态， totalCount 表示总数，
     * results 数组表示任务结果数组，previewCount 表示可以返回的结果总数，任务的开始和截止时间
     * startTime、endTime 等信息。
     *
     * @param {AuthOptions} [options]
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     *
     */
    find: function find(options) {
      var params = {
        skip: this._skip,
        limit: this._limit
      };
      return request({
        path: "/bigquery/jobs/".concat(this.id),
        method: 'GET',
        query: params,
        authOptions: options,
        signKey: false
      }).then(function (response) {
        if (response.error) {
          return _promise.default.reject(new AVError(response.code, response.error));
        }

        return _promise.default.resolve(response);
      });
    }
  });
};