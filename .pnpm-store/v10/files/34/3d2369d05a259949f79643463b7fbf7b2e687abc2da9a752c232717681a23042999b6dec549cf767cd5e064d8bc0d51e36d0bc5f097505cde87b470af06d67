"use strict";

var request = require('./request').request;

module.exports = function (AV) {
  AV.Installation = AV.Object.extend('_Installation');
  /**
   * @namespace
   */

  AV.Push = AV.Push || {};
  /**
   * Sends a push notification.
   * @param {Object} data The data of the push notification.
   * @param {String[]} [data.channels] An Array of channels to push to.
   * @param {Date} [data.push_time] A Date object for when to send the push.
   * @param {Date} [data.expiration_time]  A Date object for when to expire
   *         the push.
   * @param {Number} [data.expiration_interval] The seconds from now to expire the push.
   * @param {Number} [data.flow_control] The clients to notify per second
   * @param {AV.Query} [data.where] An AV.Query over AV.Installation that is used to match
   *         a set of installations to push to.
   * @param {String} [data.cql] A CQL statement over AV.Installation that is used to match
   *         a set of installations to push to.
   * @param {Object} data.data The data to send as part of the push.
             More details:  https://url.leanapp.cn/pushData
   * @param {AuthOptions} [options]
   * @return {Promise}
   */

  AV.Push.send = function (data, options) {
    if (data.where) {
      data.where = data.where._getParams().where;
    }

    if (data.where && data.cql) {
      throw new Error("Both where and cql can't be set");
    }

    if (data.push_time) {
      data.push_time = data.push_time.toJSON();
    }

    if (data.expiration_time) {
      data.expiration_time = data.expiration_time.toJSON();
    }

    if (data.expiration_time && data.expiration_interval) {
      throw new Error("Both expiration_time and expiration_interval can't be set");
    }

    return request({
      service: 'push',
      method: 'POST',
      path: '/push',
      data: data,
      authOptions: options
    });
  };
};