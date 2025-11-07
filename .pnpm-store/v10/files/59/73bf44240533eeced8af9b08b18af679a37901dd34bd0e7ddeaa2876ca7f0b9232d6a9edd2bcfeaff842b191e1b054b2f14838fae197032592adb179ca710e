"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _ = require('underscore');

var _require = require('./request'),
    _request = _require._request;

var AV = require('./av');

var serializeMessage = function serializeMessage(message) {
  if (typeof message === 'string') {
    return message;
  }

  if (typeof message.getPayload === 'function') {
    return (0, _stringify.default)(message.getPayload());
  }

  return (0, _stringify.default)(message);
};
/**
 * <p>An AV.Conversation is a local representation of a LeanCloud realtime's
 * conversation. This class is a subclass of AV.Object, and retains the
 * same functionality of an AV.Object, but also extends it with various
 * conversation specific methods, like get members, creators of this conversation.
 * </p>
 *
 * @class AV.Conversation
 * @param {String} name The name of the Role to create.
 * @param {Object} [options]
 * @param {Boolean} [options.isSystem] Set this conversation as system conversation.
 * @param {Boolean} [options.isTransient] Set this conversation as transient conversation.
 */


module.exports = AV.Object.extend('_Conversation',
/** @lends AV.Conversation.prototype */
{
  constructor: function constructor(name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    AV.Object.prototype.constructor.call(this, null, null);
    this.set('name', name);

    if (options.isSystem !== undefined) {
      this.set('sys', options.isSystem ? true : false);
    }

    if (options.isTransient !== undefined) {
      this.set('tr', options.isTransient ? true : false);
    }
  },

  /**
   * Get current conversation's creator.
   *
   * @return {String}
   */
  getCreator: function getCreator() {
    return this.get('c');
  },

  /**
   * Get the last message's time.
   *
   * @return {Date}
   */
  getLastMessageAt: function getLastMessageAt() {
    return this.get('lm');
  },

  /**
   * Get this conversation's members
   *
   * @return {String[]}
   */
  getMembers: function getMembers() {
    return this.get('m');
  },

  /**
   * Add a member to this conversation
   *
   * @param {String} member
   */
  addMember: function addMember(member) {
    return this.add('m', member);
  },

  /**
   * Get this conversation's members who set this conversation as muted.
   *
   * @return {String[]}
   */
  getMutedMembers: function getMutedMembers() {
    return this.get('mu');
  },

  /**
   * Get this conversation's name field.
   *
   * @return String
   */
  getName: function getName() {
    return this.get('name');
  },

  /**
   * Returns true if this conversation is transient conversation.
   *
   * @return {Boolean}
   */
  isTransient: function isTransient() {
    return this.get('tr');
  },

  /**
   * Returns true if this conversation is system conversation.
   *
   * @return {Boolean}
   */
  isSystem: function isSystem() {
    return this.get('sys');
  },

  /**
   * Send realtime message to this conversation, using HTTP request.
   *
   * @param {String} fromClient Sender's client id.
   * @param {String|Object} message The message which will send to conversation.
   *     It could be a raw string, or an object with a `toJSON` method, like a
   *     realtime SDK's Message object. See more: {@link https://leancloud.cn/docs/realtime_guide-js.html#消息}
   * @param {Object} [options]
   * @param {Boolean} [options.transient] Whether send this message as transient message or not.
   * @param {String[]} [options.toClients] Ids of clients to send to. This option can be used only in system conversation.
   * @param {Object} [options.pushData] Push data to this message. See more: {@link https://url.leanapp.cn/pushData 推送消息内容}
   * @param {AuthOptions} [authOptions]
   * @return {Promise}
   */
  send: function send(fromClient, message) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var authOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var data = {
      from_peer: fromClient,
      conv_id: this.id,
      transient: false,
      message: serializeMessage(message)
    };

    if (options.toClients !== undefined) {
      data.to_peers = options.toClients;
    }

    if (options.transient !== undefined) {
      data.transient = options.transient ? true : false;
    }

    if (options.pushData !== undefined) {
      data.push_data = options.pushData;
    }

    return _request('rtm', 'messages', null, 'POST', data, authOptions);
  },

  /**
   * Send realtime broadcast message to all clients, via this conversation, using HTTP request.
   *
   * @param {String} fromClient Sender's client id.
   * @param {String|Object} message The message which will send to conversation.
   *     It could be a raw string, or an object with a `toJSON` method, like a
   *     realtime SDK's Message object. See more: {@link https://leancloud.cn/docs/realtime_guide-js.html#消息}.
   * @param {Object} [options]
   * @param {Object} [options.pushData] Push data to this message. See more: {@link https://url.leanapp.cn/pushData 推送消息内容}.
   * @param {Object} [options.validTill] The message will valid till this time.
   * @param {AuthOptions} [authOptions]
   * @return {Promise}
   */
  broadcast: function broadcast(fromClient, message) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var authOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var data = {
      from_peer: fromClient,
      conv_id: this.id,
      message: serializeMessage(message)
    };

    if (options.pushData !== undefined) {
      data.push = options.pushData;
    }

    if (options.validTill !== undefined) {
      var ts = options.validTill;

      if (_.isDate(ts)) {
        ts = ts.getTime();
      }

      options.valid_till = ts;
    }

    return _request('rtm', 'broadcast', null, 'POST', data, authOptions);
  }
});