"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _ = require('underscore');

var _require = require('./request'),
    LCRequest = _require.request;

var _require2 = require('./utils'),
    getSessionToken = _require2.getSessionToken;

module.exports = function (AV) {
  var getUserWithSessionToken = function getUserWithSessionToken(authOptions) {
    if (authOptions.user) {
      if (!authOptions.user._sessionToken) {
        throw new Error('authOptions.user is not signed in.');
      }

      return _promise.default.resolve(authOptions.user);
    }

    if (authOptions.sessionToken) {
      return AV.User._fetchUserBySessionToken(authOptions.sessionToken);
    }

    return AV.User.currentAsync();
  };

  var getSessionTokenAsync = function getSessionTokenAsync(authOptions) {
    var sessionToken = getSessionToken(authOptions);

    if (sessionToken) {
      return _promise.default.resolve(sessionToken);
    }

    return AV.User.currentAsync().then(function (user) {
      if (user) {
        return user.getSessionToken();
      }
    });
  };
  /**
   * Contains functions to deal with Friendship in LeanCloud.
   * @class
   */


  AV.Friendship = {
    /**
     * Request friendship.
     * @since 4.8.0
     * @param {String | AV.User | Object} options if an AV.User or string is given, it will be used as the friend.
     * @param {AV.User | string} options.friend The friend (or friend's objectId) to follow.
     * @param {Object} [options.attributes] key-value attributes dictionary to be used as conditions of followeeQuery.
     * @param {AuthOptions} [authOptions]
     * @return {Promise<void>}
     */
    request: function request(options) {
      var authOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var friend;
      var attributes;

      if (options.friend) {
        friend = options.friend;
        attributes = options.attributes;
      } else {
        friend = options;
      }

      var friendObj = _.isString(friend) ? AV.Object.createWithoutData('_User', friend) : friend;
      return getUserWithSessionToken(authOptions).then(function (userObj) {
        if (!userObj) {
          throw new Error('Please signin an user.');
        }

        return LCRequest({
          method: 'POST',
          path: '/users/friendshipRequests',
          data: {
            user: userObj._toPointer(),
            friend: friendObj._toPointer(),
            friendship: attributes
          },
          authOptions: authOptions
        });
      });
    },

    /**
     * Accept a friendship request.
     * @since 4.8.0
     * @param {AV.Object | string | Object} options if an AV.Object or string is given, it will be used as the request in _FriendshipRequest.
     * @param {AV.Object} options.request The request (or it's objectId) to be accepted.
     * @param {Object} [options.attributes] key-value attributes dictionary to be used as conditions of {@link AV#followeeQuery}.
     * @param {AuthOptions} [authOptions]
     * @return {Promise<void>}
     */
    acceptRequest: function acceptRequest(options) {
      var authOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var request;
      var attributes;

      if (options.request) {
        request = options.request;
        attributes = options.attributes;
      } else {
        request = options;
      }

      var requestId = _.isString(request) ? request : request.id;
      return getSessionTokenAsync(authOptions).then(function (sessionToken) {
        if (!sessionToken) {
          throw new Error('Please signin an user.');
        }

        return LCRequest({
          method: 'PUT',
          path: '/users/friendshipRequests/' + requestId + '/accept',
          data: {
            friendship: AV._encode(attributes)
          },
          authOptions: authOptions
        });
      });
    },

    /**
     * Decline a friendship request.
     * @param {AV.Object | string} request The request (or it's objectId) to be declined.
     * @param {AuthOptions} [authOptions]
     * @return {Promise<void>}
     */
    declineRequest: function declineRequest(request) {
      var authOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var requestId = _.isString(request) ? request : request.id;
      return getSessionTokenAsync(authOptions).then(function (sessionToken) {
        if (!sessionToken) {
          throw new Error('Please signin an user.');
        }

        return LCRequest({
          method: 'PUT',
          path: '/users/friendshipRequests/' + requestId + '/decline',
          authOptions: authOptions
        });
      });
    }
  };
};