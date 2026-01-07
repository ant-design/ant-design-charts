"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _ = require('underscore');

var uuid = require('uuid/v4');

var AVError = require('./error');

var _require = require('./request'),
    AVRequest = _require._request,
    request = _require.request;

var _require2 = require('./adapter'),
    getAdapter = _require2.getAdapter;

var PLATFORM_ANONYMOUS = 'anonymous';
var PLATFORM_QQAPP = 'lc_qqapp';

var mergeUnionDataIntoAuthData = function mergeUnionDataIntoAuthData() {
  var defaultUnionIdPlatform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'weixin';
  return function (authData, unionId) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref$unionIdPlatform = _ref.unionIdPlatform,
        unionIdPlatform = _ref$unionIdPlatform === void 0 ? defaultUnionIdPlatform : _ref$unionIdPlatform,
        _ref$asMainAccount = _ref.asMainAccount,
        asMainAccount = _ref$asMainAccount === void 0 ? false : _ref$asMainAccount;

    if (typeof unionId !== 'string') throw new AVError(AVError.OTHER_CAUSE, 'unionId is not a string');
    if (typeof unionIdPlatform !== 'string') throw new AVError(AVError.OTHER_CAUSE, 'unionIdPlatform is not a string');
    return _.extend({}, authData, {
      platform: unionIdPlatform,
      unionid: unionId,
      main_account: Boolean(asMainAccount)
    });
  };
};

module.exports = function (AV) {
  /**
   * @class
   *
   * <p>An AV.User object is a local representation of a user persisted to the
   * LeanCloud server. This class is a subclass of an AV.Object, and retains the
   * same functionality of an AV.Object, but also extends it with various
   * user specific methods, like authentication, signing up, and validation of
   * uniqueness.</p>
   */
  AV.User = AV.Object.extend('_User',
  /** @lends AV.User.prototype */
  {
    // Instance Variables
    _isCurrentUser: false,
    // Instance Methods

    /**
     * Internal method to handle special fields in a _User response.
     * @private
     */
    _mergeMagicFields: function _mergeMagicFields(attrs) {
      if (attrs.sessionToken) {
        this._sessionToken = attrs.sessionToken;
        delete attrs.sessionToken;
      }

      return AV.User.__super__._mergeMagicFields.call(this, attrs);
    },

    /**
     * Removes null values from authData (which exist temporarily for
     * unlinking)
     * @private
     */
    _cleanupAuthData: function _cleanupAuthData() {
      if (!this.isCurrent()) {
        return;
      }

      var authData = this.get('authData');

      if (!authData) {
        return;
      }

      AV._objectEach(this.get('authData'), function (value, key) {
        if (!authData[key]) {
          delete authData[key];
        }
      });
    },

    /**
     * Synchronizes authData for all providers.
     * @private
     */
    _synchronizeAllAuthData: function _synchronizeAllAuthData() {
      var authData = this.get('authData');

      if (!authData) {
        return;
      }

      var self = this;

      AV._objectEach(this.get('authData'), function (value, key) {
        self._synchronizeAuthData(key);
      });
    },

    /**
     * Synchronizes auth data for a provider (e.g. puts the access token in the
     * right place to be used by the Facebook SDK).
     * @private
     */
    _synchronizeAuthData: function _synchronizeAuthData(provider) {
      if (!this.isCurrent()) {
        return;
      }

      var authType;

      if (_.isString(provider)) {
        authType = provider;
        provider = AV.User._authProviders[authType];
      } else {
        authType = provider.getAuthType();
      }

      var authData = this.get('authData');

      if (!authData || !provider) {
        return;
      }

      var success = provider.restoreAuthentication(authData[authType]);

      if (!success) {
        this.dissociateAuthData(provider);
      }
    },
    _handleSaveResult: function _handleSaveResult(makeCurrent) {
      // Clean up and synchronize the authData object, removing any unset values
      if (makeCurrent && !AV._config.disableCurrentUser) {
        this._isCurrentUser = true;
      }

      this._cleanupAuthData();

      this._synchronizeAllAuthData(); // Don't keep the password around.


      delete this._serverData.password;

      this._rebuildEstimatedDataForKey('password');

      this._refreshCache();

      if ((makeCurrent || this.isCurrent()) && !AV._config.disableCurrentUser) {
        // Some old version of leanengine-node-sdk will overwrite
        // AV.User._saveCurrentUser which returns no Promise.
        // So we need a Promise wrapper.
        return _promise.default.resolve(AV.User._saveCurrentUser(this));
      } else {
        return _promise.default.resolve();
      }
    },

    /**
     * Unlike in the Android/iOS SDKs, logInWith is unnecessary, since you can
     * call linkWith on the user (even if it doesn't exist yet on the server).
     * @private
     */
    _linkWith: function _linkWith(provider, data) {
      var _this = this;

      var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref2$failOnNotExist = _ref2.failOnNotExist,
          failOnNotExist = _ref2$failOnNotExist === void 0 ? false : _ref2$failOnNotExist,
          useMasterKey = _ref2.useMasterKey,
          sessionToken = _ref2.sessionToken,
          user = _ref2.user;

      var authType;

      if (_.isString(provider)) {
        authType = provider;
        provider = AV.User._authProviders[provider];
      } else {
        authType = provider.getAuthType();
      }

      if (data) {
        return this.save({
          authData: (0, _defineProperty2.default)({}, authType, data)
        }, {
          useMasterKey: useMasterKey,
          sessionToken: sessionToken,
          user: user,
          fetchWhenSave: !!this.get('authData'),
          _failOnNotExist: failOnNotExist
        }).then(function (model) {
          return model._handleSaveResult(true).then(function () {
            return model;
          });
        });
      } else {
        return provider.authenticate().then(function (result) {
          return _this._linkWith(provider, result);
        });
      }
    },

    /**
     * Associate the user with a third party authData.
     * @since 3.3.0
     * @param {Object} authData The response json data returned from third party token, maybe like { openid: 'abc123', access_token: '123abc', expires_in: 1382686496 }
     * @param {string} platform Available platform for sign up.
     * @return {Promise<AV.User>} A promise that is fulfilled with the user when completed.
     * @example user.associateWithAuthData({
     *   openid: 'abc123',
     *   access_token: '123abc',
     *   expires_in: 1382686496
     * }, 'weixin').then(function(user) {
     *   //Access user here
     * }).catch(function(error) {
     *   //console.error("error: ", error);
     * });
     */
    associateWithAuthData: function associateWithAuthData(authData, platform) {
      return this._linkWith(platform, authData);
    },

    /**
     * Associate the user with a third party authData and unionId.
     * @since 3.5.0
     * @param {Object} authData The response json data returned from third party token, maybe like { openid: 'abc123', access_token: '123abc', expires_in: 1382686496 }
     * @param {string} platform Available platform for sign up.
     * @param {string} unionId
     * @param {Object} [unionLoginOptions]
     * @param {string} [unionLoginOptions.unionIdPlatform = 'weixin'] unionId platform
     * @param {boolean} [unionLoginOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>} A promise that is fulfilled with the user when completed.
     * @example user.associateWithAuthDataAndUnionId({
     *   openid: 'abc123',
     *   access_token: '123abc',
     *   expires_in: 1382686496
     * }, 'weixin', 'union123', {
     *   unionIdPlatform: 'weixin',
     *   asMainAccount: true,
     * }).then(function(user) {
     *   //Access user here
     * }).catch(function(error) {
     *   //console.error("error: ", error);
     * });
     */
    associateWithAuthDataAndUnionId: function associateWithAuthDataAndUnionId(authData, platform, unionId, unionOptions) {
      return this._linkWith(platform, mergeUnionDataIntoAuthData()(authData, unionId, unionOptions));
    },

    /**
     * Associate the user with the identity of the current mini-app.
     * @since 4.6.0
     * @param {Object} [authInfo]
     * @param {Object} [option]
     * @param {Boolean} [option.failOnNotExist] If true, the login request will fail when no user matches this authInfo.authData exists.
     * @return {Promise<AV.User>}
     */
    associateWithMiniApp: function associateWithMiniApp(authInfo, option) {
      var _this2 = this;

      if (authInfo === undefined) {
        var getAuthInfo = getAdapter('getAuthInfo');
        return getAuthInfo().then(function (authInfo) {
          return _this2._linkWith(authInfo.provider, authInfo.authData, option);
        });
      }

      return this._linkWith(authInfo.provider, authInfo.authData, option);
    },

    /**
     * 将用户与 QQ 小程序用户进行关联。适用于为已经在用户系统中存在的用户关联当前使用 QQ 小程序的微信帐号。
     * 仅在 QQ 小程序中可用。
     *
     * @deprecated Please use {@link AV.User#associateWithMiniApp}
     * @since 4.2.0
     * @param {Object} [options]
     * @param {boolean} [options.preferUnionId = false] 如果服务端在登录时获取到了用户的 UnionId，是否将 UnionId 保存在用户账号中。
     * @param {string} [options.unionIdPlatform = 'qq'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>}
     */
    associateWithQQApp: function associateWithQQApp() {
      var _this3 = this;

      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$preferUnionId = _ref3.preferUnionId,
          preferUnionId = _ref3$preferUnionId === void 0 ? false : _ref3$preferUnionId,
          _ref3$unionIdPlatform = _ref3.unionIdPlatform,
          unionIdPlatform = _ref3$unionIdPlatform === void 0 ? 'qq' : _ref3$unionIdPlatform,
          _ref3$asMainAccount = _ref3.asMainAccount,
          asMainAccount = _ref3$asMainAccount === void 0 ? true : _ref3$asMainAccount;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        preferUnionId: preferUnionId,
        asMainAccount: asMainAccount,
        platform: unionIdPlatform
      }).then(function (authInfo) {
        authInfo.provider = PLATFORM_QQAPP;
        return _this3.associateWithMiniApp(authInfo);
      });
    },

    /**
     * 将用户与微信小程序用户进行关联。适用于为已经在用户系统中存在的用户关联当前使用微信小程序的微信帐号。
     * 仅在微信小程序中可用。
     *
     * @deprecated Please use {@link AV.User#associateWithMiniApp}
     * @since 3.13.0
     * @param {Object} [options]
     * @param {boolean} [options.preferUnionId = false] 当用户满足 {@link https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html 获取 UnionId 的条件} 时，是否将 UnionId 保存在用户账号中。
     * @param {string} [options.unionIdPlatform = 'weixin'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>}
     */
    associateWithWeapp: function associateWithWeapp() {
      var _this4 = this;

      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$preferUnionId = _ref4.preferUnionId,
          preferUnionId = _ref4$preferUnionId === void 0 ? false : _ref4$preferUnionId,
          _ref4$unionIdPlatform = _ref4.unionIdPlatform,
          unionIdPlatform = _ref4$unionIdPlatform === void 0 ? 'weixin' : _ref4$unionIdPlatform,
          _ref4$asMainAccount = _ref4.asMainAccount,
          asMainAccount = _ref4$asMainAccount === void 0 ? true : _ref4$asMainAccount;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        preferUnionId: preferUnionId,
        asMainAccount: asMainAccount,
        platform: unionIdPlatform
      }).then(function (authInfo) {
        return _this4.associateWithMiniApp(authInfo);
      });
    },

    /**
     * @deprecated renamed to {@link AV.User#associateWithWeapp}
     * @return {Promise<AV.User>}
     */
    linkWithWeapp: function linkWithWeapp(options) {
      console.warn('DEPRECATED: User#linkWithWeapp 已废弃，请使用 User#associateWithWeapp 代替');
      return this.associateWithWeapp(options);
    },

    /**
     * 将用户与 QQ 小程序用户进行关联。适用于为已经在用户系统中存在的用户关联当前使用 QQ 小程序的 QQ 帐号。
     * 仅在 QQ 小程序中可用。
     *
     * @deprecated Please use {@link AV.User#associateWithMiniApp}
     * @since 4.2.0
     * @param {string} unionId
     * @param {Object} [unionOptions]
     * @param {string} [unionOptions.unionIdPlatform = 'qq'] unionId platform
     * @param {boolean} [unionOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>}
     */
    associateWithQQAppWithUnionId: function associateWithQQAppWithUnionId(unionId) {
      var _this5 = this;

      var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref5$unionIdPlatform = _ref5.unionIdPlatform,
          unionIdPlatform = _ref5$unionIdPlatform === void 0 ? 'qq' : _ref5$unionIdPlatform,
          _ref5$asMainAccount = _ref5.asMainAccount,
          asMainAccount = _ref5$asMainAccount === void 0 ? false : _ref5$asMainAccount;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        platform: unionIdPlatform
      }).then(function (authInfo) {
        authInfo = AV.User.mergeUnionId(authInfo, unionId, {
          asMainAccount: asMainAccount
        });
        authInfo.provider = PLATFORM_QQAPP;
        return _this5.associateWithMiniApp(authInfo);
      });
    },

    /**
     * 将用户与微信小程序用户进行关联。适用于为已经在用户系统中存在的用户关联当前使用微信小程序的微信帐号。
     * 仅在微信小程序中可用。
     *
     * @deprecated Please use {@link AV.User#associateWithMiniApp}
     * @since 3.13.0
     * @param {string} unionId
     * @param {Object} [unionOptions]
     * @param {string} [unionOptions.unionIdPlatform = 'weixin'] unionId platform
     * @param {boolean} [unionOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>}
     */
    associateWithWeappWithUnionId: function associateWithWeappWithUnionId(unionId) {
      var _this6 = this;

      var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref6$unionIdPlatform = _ref6.unionIdPlatform,
          unionIdPlatform = _ref6$unionIdPlatform === void 0 ? 'weixin' : _ref6$unionIdPlatform,
          _ref6$asMainAccount = _ref6.asMainAccount,
          asMainAccount = _ref6$asMainAccount === void 0 ? false : _ref6$asMainAccount;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        platform: unionIdPlatform
      }).then(function (authInfo) {
        authInfo = AV.User.mergeUnionId(authInfo, unionId, {
          asMainAccount: asMainAccount
        });
        return _this6.associateWithMiniApp(authInfo);
      });
    },

    /**
     * Unlinks a user from a service.
     * @param {string} platform
     * @return {Promise<AV.User>}
     * @since 3.3.0
     */
    dissociateAuthData: function dissociateAuthData(provider) {
      this.unset("authData.".concat(provider));
      return this.save().then(function (model) {
        return model._handleSaveResult(true).then(function () {
          return model;
        });
      });
    },

    /**
     * @private
     * @deprecated
     */
    _unlinkFrom: function _unlinkFrom(provider) {
      console.warn('DEPRECATED: User#_unlinkFrom 已废弃，请使用 User#dissociateAuthData 代替');
      return this.dissociateAuthData(provider);
    },

    /**
     * Checks whether a user is linked to a service.
     * @private
     */
    _isLinked: function _isLinked(provider) {
      var authType;

      if (_.isString(provider)) {
        authType = provider;
      } else {
        authType = provider.getAuthType();
      }

      var authData = this.get('authData') || {};
      return !!authData[authType];
    },

    /**
     * Checks whether a user is anonymous.
     * @since 3.9.0
     * @return {boolean}
     */
    isAnonymous: function isAnonymous() {
      return this._isLinked(PLATFORM_ANONYMOUS);
    },
    logOut: function logOut() {
      this._logOutWithAll();

      this._isCurrentUser = false;
    },

    /**
     * Deauthenticates all providers.
     * @private
     */
    _logOutWithAll: function _logOutWithAll() {
      var authData = this.get('authData');

      if (!authData) {
        return;
      }

      var self = this;

      AV._objectEach(this.get('authData'), function (value, key) {
        self._logOutWith(key);
      });
    },

    /**
     * Deauthenticates a single provider (e.g. removing access tokens from the
     * Facebook SDK).
     * @private
     */
    _logOutWith: function _logOutWith(provider) {
      if (!this.isCurrent()) {
        return;
      }

      if (_.isString(provider)) {
        provider = AV.User._authProviders[provider];
      }

      if (provider && provider.deauthenticate) {
        provider.deauthenticate();
      }
    },

    /**
     * Signs up a new user. You should call this instead of save for
     * new AV.Users. This will create a new AV.User on the server, and
     * also persist the session on disk so that you can access the user using
     * <code>current</code>.
     *
     * <p>A username and password must be set before calling signUp.</p>
     *
     * @param {Object} attrs Extra fields to set on the new user, or null.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the signup
     *     finishes.
     * @see AV.User.signUp
     */
    signUp: function signUp(attrs, options) {
      var error;
      var username = attrs && attrs.username || this.get('username');

      if (!username || username === '') {
        error = new AVError(AVError.OTHER_CAUSE, 'Cannot sign up user with an empty name.');
        throw error;
      }

      var password = attrs && attrs.password || this.get('password');

      if (!password || password === '') {
        error = new AVError(AVError.OTHER_CAUSE, 'Cannot sign up user with an empty password.');
        throw error;
      }

      return this.save(attrs, options).then(function (model) {
        if (model.isAnonymous()) {
          model.unset("authData.".concat(PLATFORM_ANONYMOUS));
          model._opSetQueue = [{}];
        }

        return model._handleSaveResult(true).then(function () {
          return model;
        });
      });
    },

    /**
     * Signs up a new user with mobile phone and sms code.
     * You should call this instead of save for
     * new AV.Users. This will create a new AV.User on the server, and
     * also persist the session on disk so that you can access the user using
     * <code>current</code>.
     *
     * <p>A username and password must be set before calling signUp.</p>
     *
     * @param {Object} attrs Extra fields to set on the new user, or null.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the signup
     *     finishes.
     * @see AV.User.signUpOrlogInWithMobilePhone
     * @see AV.Cloud.requestSmsCode
     */
    signUpOrlogInWithMobilePhone: function signUpOrlogInWithMobilePhone(attrs) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var error;
      var mobilePhoneNumber = attrs && attrs.mobilePhoneNumber || this.get('mobilePhoneNumber');

      if (!mobilePhoneNumber || mobilePhoneNumber === '') {
        error = new AVError(AVError.OTHER_CAUSE, 'Cannot sign up or login user by mobilePhoneNumber ' + 'with an empty mobilePhoneNumber.');
        throw error;
      }

      var smsCode = attrs && attrs.smsCode || this.get('smsCode');

      if (!smsCode || smsCode === '') {
        error = new AVError(AVError.OTHER_CAUSE, 'Cannot sign up or login user by mobilePhoneNumber  ' + 'with an empty smsCode.');
        throw error;
      }

      options._makeRequest = function (route, className, id, method, json) {
        return AVRequest('usersByMobilePhone', null, null, 'POST', json);
      };

      return this.save(attrs, options).then(function (model) {
        delete model.attributes.smsCode;
        delete model._serverData.smsCode;
        return model._handleSaveResult(true).then(function () {
          return model;
        });
      });
    },

    /**
     * The same with {@link AV.User.loginWithAuthData}, except that you can set attributes before login.
     * @since 3.7.0
     */
    loginWithAuthData: function loginWithAuthData(authData, platform, options) {
      return this._linkWith(platform, authData, options);
    },

    /**
     * The same with {@link AV.User.loginWithAuthDataAndUnionId}, except that you can set attributes before login.
     * @since 3.7.0
     */
    loginWithAuthDataAndUnionId: function loginWithAuthDataAndUnionId(authData, platform, unionId, unionLoginOptions) {
      return this.loginWithAuthData(mergeUnionDataIntoAuthData()(authData, unionId, unionLoginOptions), platform, unionLoginOptions);
    },

    /**
     * The same with {@link AV.User.loginWithWeapp}, except that you can set attributes before login.
     * @deprecated please use {@link AV.User#loginWithMiniApp}
     * @since 3.7.0
     * @param {Object} [options]
     * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
     * @param {boolean} [options.preferUnionId] 当用户满足 {@link https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html 获取 UnionId 的条件} 时，是否使用 UnionId 登录。（since 3.13.0）
     * @param {string} [options.unionIdPlatform = 'weixin'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>}
     */
    loginWithWeapp: function loginWithWeapp() {
      var _this7 = this;

      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref7$preferUnionId = _ref7.preferUnionId,
          preferUnionId = _ref7$preferUnionId === void 0 ? false : _ref7$preferUnionId,
          _ref7$unionIdPlatform = _ref7.unionIdPlatform,
          unionIdPlatform = _ref7$unionIdPlatform === void 0 ? 'weixin' : _ref7$unionIdPlatform,
          _ref7$asMainAccount = _ref7.asMainAccount,
          asMainAccount = _ref7$asMainAccount === void 0 ? true : _ref7$asMainAccount,
          _ref7$failOnNotExist = _ref7.failOnNotExist,
          failOnNotExist = _ref7$failOnNotExist === void 0 ? false : _ref7$failOnNotExist,
          useMasterKey = _ref7.useMasterKey,
          sessionToken = _ref7.sessionToken,
          user = _ref7.user;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        preferUnionId: preferUnionId,
        asMainAccount: asMainAccount,
        platform: unionIdPlatform
      }).then(function (authInfo) {
        return _this7.loginWithMiniApp(authInfo, {
          failOnNotExist: failOnNotExist,
          useMasterKey: useMasterKey,
          sessionToken: sessionToken,
          user: user
        });
      });
    },

    /**
     * The same with {@link AV.User.loginWithWeappWithUnionId}, except that you can set attributes before login.
     * @deprecated please use {@link AV.User#loginWithMiniApp}
     * @since 3.13.0
     */
    loginWithWeappWithUnionId: function loginWithWeappWithUnionId(unionId) {
      var _this8 = this;

      var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref8$unionIdPlatform = _ref8.unionIdPlatform,
          unionIdPlatform = _ref8$unionIdPlatform === void 0 ? 'weixin' : _ref8$unionIdPlatform,
          _ref8$asMainAccount = _ref8.asMainAccount,
          asMainAccount = _ref8$asMainAccount === void 0 ? false : _ref8$asMainAccount,
          _ref8$failOnNotExist = _ref8.failOnNotExist,
          failOnNotExist = _ref8$failOnNotExist === void 0 ? false : _ref8$failOnNotExist,
          useMasterKey = _ref8.useMasterKey,
          sessionToken = _ref8.sessionToken,
          user = _ref8.user;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        platform: unionIdPlatform
      }).then(function (authInfo) {
        authInfo = AV.User.mergeUnionId(authInfo, unionId, {
          asMainAccount: asMainAccount
        });
        return _this8.loginWithMiniApp(authInfo, {
          failOnNotExist: failOnNotExist,
          useMasterKey: useMasterKey,
          sessionToken: sessionToken,
          user: user
        });
      });
    },

    /**
     * The same with {@link AV.User.loginWithQQApp}, except that you can set attributes before login.
     * @deprecated please use {@link AV.User#loginWithMiniApp}
     * @since 4.2.0
     * @param {Object} [options]
     * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
     * @param {boolean} [options.preferUnionId] 如果服务端在登录时获取到了用户的 UnionId，是否将 UnionId 保存在用户账号中。
     * @param {string} [options.unionIdPlatform = 'qq'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     */
    loginWithQQApp: function loginWithQQApp() {
      var _this9 = this;

      var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref9$preferUnionId = _ref9.preferUnionId,
          preferUnionId = _ref9$preferUnionId === void 0 ? false : _ref9$preferUnionId,
          _ref9$unionIdPlatform = _ref9.unionIdPlatform,
          unionIdPlatform = _ref9$unionIdPlatform === void 0 ? 'qq' : _ref9$unionIdPlatform,
          _ref9$asMainAccount = _ref9.asMainAccount,
          asMainAccount = _ref9$asMainAccount === void 0 ? true : _ref9$asMainAccount,
          _ref9$failOnNotExist = _ref9.failOnNotExist,
          failOnNotExist = _ref9$failOnNotExist === void 0 ? false : _ref9$failOnNotExist,
          useMasterKey = _ref9.useMasterKey,
          sessionToken = _ref9.sessionToken,
          user = _ref9.user;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        preferUnionId: preferUnionId,
        asMainAccount: asMainAccount,
        platform: unionIdPlatform
      }).then(function (authInfo) {
        authInfo.provider = PLATFORM_QQAPP;
        return _this9.loginWithMiniApp(authInfo, {
          failOnNotExist: failOnNotExist,
          useMasterKey: useMasterKey,
          sessionToken: sessionToken,
          user: user
        });
      });
    },

    /**
     * The same with {@link AV.User.loginWithQQAppWithUnionId}, except that you can set attributes before login.
     * @deprecated please use {@link AV.User#loginWithMiniApp}
     * @since 4.2.0
     */
    loginWithQQAppWithUnionId: function loginWithQQAppWithUnionId(unionId) {
      var _this10 = this;

      var _ref10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref10$unionIdPlatfor = _ref10.unionIdPlatform,
          unionIdPlatform = _ref10$unionIdPlatfor === void 0 ? 'qq' : _ref10$unionIdPlatfor,
          _ref10$asMainAccount = _ref10.asMainAccount,
          asMainAccount = _ref10$asMainAccount === void 0 ? false : _ref10$asMainAccount,
          _ref10$failOnNotExist = _ref10.failOnNotExist,
          failOnNotExist = _ref10$failOnNotExist === void 0 ? false : _ref10$failOnNotExist,
          useMasterKey = _ref10.useMasterKey,
          sessionToken = _ref10.sessionToken,
          user = _ref10.user;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        platform: unionIdPlatform
      }).then(function (authInfo) {
        authInfo = AV.User.mergeUnionId(authInfo, unionId, {
          asMainAccount: asMainAccount
        });
        authInfo.provider = PLATFORM_QQAPP;
        return _this10.loginWithMiniApp(authInfo, {
          failOnNotExist: failOnNotExist,
          useMasterKey: useMasterKey,
          sessionToken: sessionToken,
          user: user
        });
      });
    },

    /**
     * The same with {@link AV.User.loginWithMiniApp}, except that you can set attributes before login.
     * @since 4.6.0
     */
    loginWithMiniApp: function loginWithMiniApp(authInfo, option) {
      var _this11 = this;

      if (authInfo === undefined) {
        var getAuthInfo = getAdapter('getAuthInfo');
        return getAuthInfo().then(function (authInfo) {
          return _this11.loginWithAuthData(authInfo.authData, authInfo.provider, option);
        });
      }

      return this.loginWithAuthData(authInfo.authData, authInfo.provider, option);
    },

    /**
     * Logs in a AV.User. On success, this saves the session to localStorage,
     * so you can retrieve the currently logged in user using
     * <code>current</code>.
     *
     * <p>A username and password must be set before calling logIn.</p>
     *
     * @see AV.User.logIn
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login is complete.
     */
    logIn: function logIn() {
      var model = this;
      var request = AVRequest('login', null, null, 'POST', this.toJSON());
      return request.then(function (resp) {
        var serverAttrs = model.parse(resp);

        model._finishFetch(serverAttrs);

        return model._handleSaveResult(true).then(function () {
          if (!serverAttrs.smsCode) delete model.attributes['smsCode'];
          return model;
        });
      });
    },

    /**
     * @see AV.Object#save
     */
    save: function save(arg1, arg2, arg3) {
      var attrs, options;

      if (_.isObject(arg1) || _.isNull(arg1) || _.isUndefined(arg1)) {
        attrs = arg1;
        options = arg2;
      } else {
        attrs = {};
        attrs[arg1] = arg2;
        options = arg3;
      }

      options = options || {};
      return AV.Object.prototype.save.call(this, attrs, options).then(function (model) {
        return model._handleSaveResult(false).then(function () {
          return model;
        });
      });
    },

    /**
     * Follow a user
     * @since 0.3.0
     * @param {Object | AV.User | String} options if an AV.User or string is given, it will be used as the target user.
     * @param {AV.User | String} options.user The target user or user's objectId to follow.
     * @param {Object} [options.attributes] key-value attributes dictionary to be used as
     *  conditions of followerQuery/followeeQuery.
     * @param {AuthOptions} [authOptions]
     */
    follow: function follow(options, authOptions) {
      if (!this.id) {
        throw new Error('Please signin.');
      }

      var user;
      var attributes;

      if (options.user) {
        user = options.user;
        attributes = options.attributes;
      } else {
        user = options;
      }

      var userObjectId = _.isString(user) ? user : user.id;

      if (!userObjectId) {
        throw new Error('Invalid target user.');
      }

      var route = 'users/' + this.id + '/friendship/' + userObjectId;
      var request = AVRequest(route, null, null, 'POST', AV._encode(attributes), authOptions);
      return request;
    },

    /**
     * Unfollow a user.
     * @since 0.3.0
     * @param {Object | AV.User | String} options if an AV.User or string is given, it will be used as the target user.
     * @param {AV.User | String} options.user The target user or user's objectId to unfollow.
     * @param {AuthOptions} [authOptions]
     */
    unfollow: function unfollow(options, authOptions) {
      if (!this.id) {
        throw new Error('Please signin.');
      }

      var user;

      if (options.user) {
        user = options.user;
      } else {
        user = options;
      }

      var userObjectId = _.isString(user) ? user : user.id;

      if (!userObjectId) {
        throw new Error('Invalid target user.');
      }

      var route = 'users/' + this.id + '/friendship/' + userObjectId;
      var request = AVRequest(route, null, null, 'DELETE', null, authOptions);
      return request;
    },

    /**
     * Get the user's followers and followees.
     * @since 4.8.0
     * @param {Object} [options]
     * @param {Number} [options.skip]
     * @param {Number} [options.limit]
     * @param {AuthOptions} [authOptions]
     */
    getFollowersAndFollowees: function getFollowersAndFollowees(options, authOptions) {
      if (!this.id) {
        throw new Error('Please signin.');
      }

      return request({
        method: 'GET',
        path: "/users/".concat(this.id, "/followersAndFollowees"),
        query: {
          skip: options && options.skip,
          limit: options && options.limit,
          include: 'follower,followee',
          keys: 'follower,followee'
        },
        authOptions: authOptions
      }).then(function (_ref11) {
        var followers = _ref11.followers,
            followees = _ref11.followees;
        return {
          followers: (0, _map.default)(followers).call(followers, function (_ref12) {
            var follower = _ref12.follower;
            return AV._decode(follower);
          }),
          followees: (0, _map.default)(followees).call(followees, function (_ref13) {
            var followee = _ref13.followee;
            return AV._decode(followee);
          })
        };
      });
    },

    /**
     *Create a follower query to query the user's followers.
     * @since 0.3.0
     * @see AV.User#followerQuery
     */
    followerQuery: function followerQuery() {
      return AV.User.followerQuery(this.id);
    },

    /**
     *Create a followee query to query the user's followees.
     * @since 0.3.0
     * @see AV.User#followeeQuery
     */
    followeeQuery: function followeeQuery() {
      return AV.User.followeeQuery(this.id);
    },

    /**
     * @see AV.Object#fetch
     */
    fetch: function fetch(fetchOptions, options) {
      return AV.Object.prototype.fetch.call(this, fetchOptions, options).then(function (model) {
        return model._handleSaveResult(false).then(function () {
          return model;
        });
      });
    },

    /**
     * Update user's new password safely based on old password.
     * @param {String} oldPassword the old password.
     * @param {String} newPassword the new password.
     * @param {AuthOptions} options
     */
    updatePassword: function updatePassword(oldPassword, newPassword, options) {
      var _this12 = this;

      var route = 'users/' + this.id + '/updatePassword';
      var params = {
        old_password: oldPassword,
        new_password: newPassword
      };
      var request = AVRequest(route, null, null, 'PUT', params, options);
      return request.then(function (resp) {
        _this12._finishFetch(_this12.parse(resp));

        return _this12._handleSaveResult(true).then(function () {
          return resp;
        });
      });
    },

    /**
     * Returns true if <code>current</code> would return this user.
     * @see AV.User#current
     */
    isCurrent: function isCurrent() {
      return this._isCurrentUser;
    },

    /**
     * Returns get("username").
     * @return {String}
     * @see AV.Object#get
     */
    getUsername: function getUsername() {
      return this.get('username');
    },

    /**
     * Returns get("mobilePhoneNumber").
     * @return {String}
     * @see AV.Object#get
     */
    getMobilePhoneNumber: function getMobilePhoneNumber() {
      return this.get('mobilePhoneNumber');
    },

    /**
     * Calls set("mobilePhoneNumber", phoneNumber, options) and returns the result.
     * @param {String} mobilePhoneNumber
     * @return {Boolean}
     * @see AV.Object#set
     */
    setMobilePhoneNumber: function setMobilePhoneNumber(phone, options) {
      return this.set('mobilePhoneNumber', phone, options);
    },

    /**
     * Calls set("username", username, options) and returns the result.
     * @param {String} username
     * @return {Boolean}
     * @see AV.Object#set
     */
    setUsername: function setUsername(username, options) {
      return this.set('username', username, options);
    },

    /**
     * Calls set("password", password, options) and returns the result.
     * @param {String} password
     * @return {Boolean}
     * @see AV.Object#set
     */
    setPassword: function setPassword(password, options) {
      return this.set('password', password, options);
    },

    /**
     * Returns get("email").
     * @return {String}
     * @see AV.Object#get
     */
    getEmail: function getEmail() {
      return this.get('email');
    },

    /**
     * Calls set("email", email, options) and returns the result.
     * @param {String} email
     * @param {AuthOptions} options
     * @return {Boolean}
     * @see AV.Object#set
     */
    setEmail: function setEmail(email, options) {
      return this.set('email', email, options);
    },

    /**
     * Checks whether this user is the current user and has been authenticated.
     * @deprecated 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，
     * 如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id
     * @return (Boolean) whether this user is the current user and is logged in.
     */
    authenticated: function authenticated() {
      console.warn('DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。');
      return !!this._sessionToken && !AV._config.disableCurrentUser && AV.User.current() && AV.User.current().id === this.id;
    },

    /**
     * Detects if current sessionToken is valid.
     *
     * @since 2.0.0
     * @return Promise.<Boolean>
     */
    isAuthenticated: function isAuthenticated() {
      var _this13 = this;

      return _promise.default.resolve().then(function () {
        return !!_this13._sessionToken && AV.User._fetchUserBySessionToken(_this13._sessionToken).then(function () {
          return true;
        }, function (error) {
          if (error.code === 211) {
            return false;
          }

          throw error;
        });
      });
    },

    /**
     * Get sessionToken of current user.
     * @return {String} sessionToken
     */
    getSessionToken: function getSessionToken() {
      return this._sessionToken;
    },

    /**
     * Refresh sessionToken of current user.
     * @since 2.1.0
     * @param {AuthOptions} [options]
     * @return {Promise.<AV.User>} user with refreshed sessionToken
     */
    refreshSessionToken: function refreshSessionToken(options) {
      var _this14 = this;

      return AVRequest("users/".concat(this.id, "/refreshSessionToken"), null, null, 'PUT', null, options).then(function (response) {
        _this14._finishFetch(response);

        return _this14._handleSaveResult(true).then(function () {
          return _this14;
        });
      });
    },

    /**
     * Get this user's Roles.
     * @param {AuthOptions} [options]
     * @return {Promise.<AV.Role[]>} A promise that is fulfilled with the roles when
     *     the query is complete.
     */
    getRoles: function getRoles(options) {
      var _context;

      return (0, _find.default)(_context = AV.Relation.reverseQuery('_Role', 'users', this)).call(_context, options);
    }
  },
  /** @lends AV.User */
  {
    // Class Variables
    // The currently logged-in user.
    _currentUser: null,
    // Whether currentUser is known to match the serialized version on disk.
    // This is useful for saving a localstorage check if you try to load
    // _currentUser frequently while there is none stored.
    _currentUserMatchesDisk: false,
    // The localStorage key suffix that the current user is stored under.
    _CURRENT_USER_KEY: 'currentUser',
    // The mapping of auth provider names to actual providers
    _authProviders: {},
    // Class Methods

    /**
     * Signs up a new user with a username (or email) and password.
     * This will create a new AV.User on the server, and also persist the
     * session in localStorage so that you can access the user using
     * {@link #current}.
     *
     * @param {String} username The username (or email) to sign up with.
     * @param {String} password The password to sign up with.
     * @param {Object} [attrs] Extra fields to set on the new user.
     * @param {AuthOptions} [options]
     * @return {Promise} A promise that is fulfilled with the user when
     *     the signup completes.
     * @see AV.User#signUp
     */
    signUp: function signUp(username, password, attrs, options) {
      attrs = attrs || {};
      attrs.username = username;
      attrs.password = password;

      var user = AV.Object._create('_User');

      return user.signUp(attrs, options);
    },

    /**
     * Logs in a user with a username (or email) and password. On success, this
     * saves the session to disk, so you can retrieve the currently logged in
     * user using <code>current</code>.
     *
     * @param {String} username The username (or email) to log in with.
     * @param {String} password The password to log in with.
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @see AV.User#logIn
     */
    logIn: function logIn(username, password) {
      var user = AV.Object._create('_User');

      user._finishFetch({
        username: username,
        password: password
      });

      return user.logIn();
    },

    /**
     * Logs in a user with a session token. On success, this saves the session
     * to disk, so you can retrieve the currently logged in user using
     * <code>current</code>.
     *
     * @param {String} sessionToken The sessionToken to log in with.
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     */
    become: function become(sessionToken) {
      return this._fetchUserBySessionToken(sessionToken).then(function (user) {
        return user._handleSaveResult(true).then(function () {
          return user;
        });
      });
    },
    _fetchUserBySessionToken: function _fetchUserBySessionToken(sessionToken) {
      if (sessionToken === undefined) {
        return _promise.default.reject(new Error('The sessionToken cannot be undefined'));
      }

      var user = AV.Object._create('_User');

      return request({
        method: 'GET',
        path: '/users/me',
        authOptions: {
          sessionToken: sessionToken
        }
      }).then(function (resp) {
        var serverAttrs = user.parse(resp);

        user._finishFetch(serverAttrs);

        return user;
      });
    },

    /**
     * Logs in a user with a mobile phone number and sms code sent by
     * AV.User.requestLoginSmsCode.On success, this
     * saves the session to disk, so you can retrieve the currently logged in
     * user using <code>current</code>.
     *
     * @param {String} mobilePhone The user's mobilePhoneNumber
     * @param {String} smsCode The sms code sent by AV.User.requestLoginSmsCode
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @see AV.User#logIn
     */
    logInWithMobilePhoneSmsCode: function logInWithMobilePhoneSmsCode(mobilePhone, smsCode) {
      var user = AV.Object._create('_User');

      user._finishFetch({
        mobilePhoneNumber: mobilePhone,
        smsCode: smsCode
      });

      return user.logIn();
    },

    /**
     * Signs up or logs in a user with a mobilePhoneNumber and smsCode.
     * On success, this saves the session to disk, so you can retrieve the currently
     * logged in user using <code>current</code>.
     *
     * @param {String} mobilePhoneNumber The user's mobilePhoneNumber.
     * @param {String} smsCode The sms code sent by AV.Cloud.requestSmsCode
     * @param {Object} attributes  The user's other attributes such as username etc.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @see AV.User#signUpOrlogInWithMobilePhone
     * @see AV.Cloud.requestSmsCode
     */
    signUpOrlogInWithMobilePhone: function signUpOrlogInWithMobilePhone(mobilePhoneNumber, smsCode, attrs, options) {
      attrs = attrs || {};
      attrs.mobilePhoneNumber = mobilePhoneNumber;
      attrs.smsCode = smsCode;

      var user = AV.Object._create('_User');

      return user.signUpOrlogInWithMobilePhone(attrs, options);
    },

    /**
     * Logs in a user with a mobile phone number and password. On success, this
     * saves the session to disk, so you can retrieve the currently logged in
     * user using <code>current</code>.
     *
     * @param {String} mobilePhone The user's mobilePhoneNumber
     * @param {String} password The password to log in with.
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @see AV.User#logIn
     */
    logInWithMobilePhone: function logInWithMobilePhone(mobilePhone, password) {
      var user = AV.Object._create('_User');

      user._finishFetch({
        mobilePhoneNumber: mobilePhone,
        password: password
      });

      return user.logIn();
    },

    /**
     * Logs in a user with email and password.
     *
     * @since 3.13.0
     * @param {String} email The user's email.
     * @param {String} password The password to log in with.
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     */
    loginWithEmail: function loginWithEmail(email, password) {
      var user = AV.Object._create('_User');

      user._finishFetch({
        email: email,
        password: password
      });

      return user.logIn();
    },

    /**
     * Signs up or logs in a user with a third party auth data(AccessToken).
     * On success, this saves the session to disk, so you can retrieve the currently
     * logged in user using <code>current</code>.
     *
     * @since 3.7.0
     * @param {Object} authData The response json data returned from third party token, maybe like { openid: 'abc123', access_token: '123abc', expires_in: 1382686496 }
     * @param {string} platform Available platform for sign up.
     * @param {Object} [options]
     * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @example AV.User.loginWithAuthData({
     *   openid: 'abc123',
     *   access_token: '123abc',
     *   expires_in: 1382686496
     * }, 'weixin').then(function(user) {
     *   //Access user here
     * }).catch(function(error) {
     *   //console.error("error: ", error);
     * });
     * @see {@link https://leancloud.cn/docs/js_guide.html#绑定第三方平台账户}
     */
    loginWithAuthData: function loginWithAuthData(authData, platform, options) {
      return AV.User._logInWith(platform, authData, options);
    },

    /**
     * @deprecated renamed to {@link AV.User.loginWithAuthData}
     */
    signUpOrlogInWithAuthData: function signUpOrlogInWithAuthData() {
      console.warn('DEPRECATED: User.signUpOrlogInWithAuthData 已废弃，请使用 User#loginWithAuthData 代替');
      return this.loginWithAuthData.apply(this, arguments);
    },

    /**
     * Signs up or logs in a user with a third party authData and unionId.
     * @since 3.7.0
     * @param {Object} authData The response json data returned from third party token, maybe like { openid: 'abc123', access_token: '123abc', expires_in: 1382686496 }
     * @param {string} platform Available platform for sign up.
     * @param {string} unionId
     * @param {Object} [unionLoginOptions]
     * @param {string} [unionLoginOptions.unionIdPlatform = 'weixin'] unionId platform
     * @param {boolean} [unionLoginOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @param {boolean} [unionLoginOptions.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
     * @return {Promise<AV.User>} A promise that is fulfilled with the user when completed.
     * @example AV.User.loginWithAuthDataAndUnionId({
     *   openid: 'abc123',
     *   access_token: '123abc',
     *   expires_in: 1382686496
     * }, 'weixin', 'union123', {
     *   unionIdPlatform: 'weixin',
     *   asMainAccount: true,
     * }).then(function(user) {
     *   //Access user here
     * }).catch(function(error) {
     *   //console.error("error: ", error);
     * });
     */
    loginWithAuthDataAndUnionId: function loginWithAuthDataAndUnionId(authData, platform, unionId, unionLoginOptions) {
      return this.loginWithAuthData(mergeUnionDataIntoAuthData()(authData, unionId, unionLoginOptions), platform, unionLoginOptions);
    },

    /**
     * @deprecated renamed to {@link AV.User.loginWithAuthDataAndUnionId}
     * @since 3.5.0
     */
    signUpOrlogInWithAuthDataAndUnionId: function signUpOrlogInWithAuthDataAndUnionId() {
      console.warn('DEPRECATED: User.signUpOrlogInWithAuthDataAndUnionId 已废弃，请使用 User#loginWithAuthDataAndUnionId 代替');
      return this.loginWithAuthDataAndUnionId.apply(this, arguments);
    },

    /**
     * Merge unionId into authInfo.
     * @since 4.6.0
     * @param {Object} authInfo
     * @param {String} unionId
     * @param {Object} [unionIdOption]
     * @param {Boolean} [unionIdOption.asMainAccount] If true, the unionId will be associated with the user.
     */
    mergeUnionId: function mergeUnionId(authInfo, unionId) {
      var _ref14 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref14$asMainAccount = _ref14.asMainAccount,
          asMainAccount = _ref14$asMainAccount === void 0 ? false : _ref14$asMainAccount;

      authInfo = JSON.parse((0, _stringify.default)(authInfo));
      var _authInfo = authInfo,
          authData = _authInfo.authData,
          platform = _authInfo.platform;
      authData.platform = platform;
      authData.main_account = asMainAccount;
      authData.unionid = unionId;
      return authInfo;
    },

    /**
     * 使用当前使用微信小程序的微信用户身份注册或登录，成功后用户的 session 会在设备上持久化保存，之后可以使用 AV.User.current() 获取当前登录用户。
     * 仅在微信小程序中可用。
     *
     * @deprecated please use {@link AV.User.loginWithMiniApp}
     * @since 2.0.0
     * @param {Object} [options]
     * @param {boolean} [options.preferUnionId] 当用户满足 {@link https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html 获取 UnionId 的条件} 时，是否使用 UnionId 登录。（since 3.13.0）
     * @param {string} [options.unionIdPlatform = 'weixin'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists. (since v3.7.0)
     * @return {Promise.<AV.User>}
     */
    loginWithWeapp: function loginWithWeapp() {
      var _this15 = this;

      var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref15$preferUnionId = _ref15.preferUnionId,
          preferUnionId = _ref15$preferUnionId === void 0 ? false : _ref15$preferUnionId,
          _ref15$unionIdPlatfor = _ref15.unionIdPlatform,
          unionIdPlatform = _ref15$unionIdPlatfor === void 0 ? 'weixin' : _ref15$unionIdPlatfor,
          _ref15$asMainAccount = _ref15.asMainAccount,
          asMainAccount = _ref15$asMainAccount === void 0 ? true : _ref15$asMainAccount,
          _ref15$failOnNotExist = _ref15.failOnNotExist,
          failOnNotExist = _ref15$failOnNotExist === void 0 ? false : _ref15$failOnNotExist,
          useMasterKey = _ref15.useMasterKey,
          sessionToken = _ref15.sessionToken,
          user = _ref15.user;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        preferUnionId: preferUnionId,
        asMainAccount: asMainAccount,
        platform: unionIdPlatform
      }).then(function (authInfo) {
        return _this15.loginWithMiniApp(authInfo, {
          failOnNotExist: failOnNotExist,
          useMasterKey: useMasterKey,
          sessionToken: sessionToken,
          user: user
        });
      });
    },

    /**
     * 使用当前使用微信小程序的微信用户身份注册或登录，
     * 仅在微信小程序中可用。
     *
     * @deprecated please use {@link AV.User.loginWithMiniApp}
     * @since 3.13.0
     * @param {Object} [unionLoginOptions]
     * @param {string} [unionLoginOptions.unionIdPlatform = 'weixin'] unionId platform
     * @param {boolean} [unionLoginOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @param {boolean} [unionLoginOptions.failOnNotExist] If true, the login request will fail when no user matches this authData exists.       * @return {Promise.<AV.User>}
     */
    loginWithWeappWithUnionId: function loginWithWeappWithUnionId(unionId) {
      var _this16 = this;

      var _ref16 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref16$unionIdPlatfor = _ref16.unionIdPlatform,
          unionIdPlatform = _ref16$unionIdPlatfor === void 0 ? 'weixin' : _ref16$unionIdPlatfor,
          _ref16$asMainAccount = _ref16.asMainAccount,
          asMainAccount = _ref16$asMainAccount === void 0 ? false : _ref16$asMainAccount,
          _ref16$failOnNotExist = _ref16.failOnNotExist,
          failOnNotExist = _ref16$failOnNotExist === void 0 ? false : _ref16$failOnNotExist,
          useMasterKey = _ref16.useMasterKey,
          sessionToken = _ref16.sessionToken,
          user = _ref16.user;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        platform: unionIdPlatform
      }).then(function (authInfo) {
        authInfo = AV.User.mergeUnionId(authInfo, unionId, {
          asMainAccount: asMainAccount
        });
        return _this16.loginWithMiniApp(authInfo, {
          failOnNotExist: failOnNotExist,
          useMasterKey: useMasterKey,
          sessionToken: sessionToken,
          user: user
        });
      });
    },

    /**
     * 使用当前使用 QQ 小程序的 QQ 用户身份注册或登录，成功后用户的 session 会在设备上持久化保存，之后可以使用 AV.User.current() 获取当前登录用户。
     * 仅在 QQ 小程序中可用。
     *
     * @deprecated please use {@link AV.User.loginWithMiniApp}
     * @since 4.2.0
     * @param {Object} [options]
     * @param {boolean} [options.preferUnionId] 如果服务端在登录时获取到了用户的 UnionId，是否将 UnionId 保存在用户账号中。
     * @param {string} [options.unionIdPlatform = 'qq'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists. (since v3.7.0)
     * @return {Promise.<AV.User>}
     */
    loginWithQQApp: function loginWithQQApp() {
      var _this17 = this;

      var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref17$preferUnionId = _ref17.preferUnionId,
          preferUnionId = _ref17$preferUnionId === void 0 ? false : _ref17$preferUnionId,
          _ref17$unionIdPlatfor = _ref17.unionIdPlatform,
          unionIdPlatform = _ref17$unionIdPlatfor === void 0 ? 'qq' : _ref17$unionIdPlatfor,
          _ref17$asMainAccount = _ref17.asMainAccount,
          asMainAccount = _ref17$asMainAccount === void 0 ? true : _ref17$asMainAccount,
          _ref17$failOnNotExist = _ref17.failOnNotExist,
          failOnNotExist = _ref17$failOnNotExist === void 0 ? false : _ref17$failOnNotExist,
          useMasterKey = _ref17.useMasterKey,
          sessionToken = _ref17.sessionToken,
          user = _ref17.user;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        preferUnionId: preferUnionId,
        asMainAccount: asMainAccount,
        platform: unionIdPlatform
      }).then(function (authInfo) {
        authInfo.provider = PLATFORM_QQAPP;
        return _this17.loginWithMiniApp(authInfo, {
          failOnNotExist: failOnNotExist,
          useMasterKey: useMasterKey,
          sessionToken: sessionToken,
          user: user
        });
      });
    },

    /**
     * 使用当前使用 QQ 小程序的 QQ 用户身份注册或登录，
     * 仅在 QQ 小程序中可用。
     *
     * @deprecated please use {@link AV.User.loginWithMiniApp}
     * @since 4.2.0
     * @param {Object} [unionLoginOptions]
     * @param {string} [unionLoginOptions.unionIdPlatform = 'qq'] unionId platform
     * @param {boolean} [unionLoginOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @param {boolean} [unionLoginOptions.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
     * @return {Promise.<AV.User>}
     */
    loginWithQQAppWithUnionId: function loginWithQQAppWithUnionId(unionId) {
      var _this18 = this;

      var _ref18 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref18$unionIdPlatfor = _ref18.unionIdPlatform,
          unionIdPlatform = _ref18$unionIdPlatfor === void 0 ? 'qq' : _ref18$unionIdPlatfor,
          _ref18$asMainAccount = _ref18.asMainAccount,
          asMainAccount = _ref18$asMainAccount === void 0 ? false : _ref18$asMainAccount,
          _ref18$failOnNotExist = _ref18.failOnNotExist,
          failOnNotExist = _ref18$failOnNotExist === void 0 ? false : _ref18$failOnNotExist,
          useMasterKey = _ref18.useMasterKey,
          sessionToken = _ref18.sessionToken,
          user = _ref18.user;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        platform: unionIdPlatform
      }).then(function (authInfo) {
        authInfo = AV.User.mergeUnionId(authInfo, unionId, {
          asMainAccount: asMainAccount
        });
        authInfo.provider = PLATFORM_QQAPP;
        return _this18.loginWithMiniApp(authInfo, {
          failOnNotExist: failOnNotExist,
          useMasterKey: useMasterKey,
          sessionToken: sessionToken,
          user: user
        });
      });
    },

    /**
     * Register or login using the identity of the current mini-app.
     * @param {Object} authInfo
     * @param {Object} [option]
     * @param {Boolean} [option.failOnNotExist] If true, the login request will fail when no user matches this authInfo.authData exists.
     */
    loginWithMiniApp: function loginWithMiniApp(authInfo, option) {
      var _this19 = this;

      if (authInfo === undefined) {
        var getAuthInfo = getAdapter('getAuthInfo');
        return getAuthInfo().then(function (authInfo) {
          return _this19.loginWithAuthData(authInfo.authData, authInfo.provider, option);
        });
      }

      return this.loginWithAuthData(authInfo.authData, authInfo.provider, option);
    },

    /**
     * Only use for DI in tests to produce deterministic IDs.
     */
    _genId: function _genId() {
      return uuid();
    },

    /**
     * Creates an anonymous user.
     *
     * @since 3.9.0
     * @return {Promise.<AV.User>}
     */
    loginAnonymously: function loginAnonymously() {
      return this.loginWithAuthData({
        id: AV.User._genId()
      }, 'anonymous');
    },
    associateWithAuthData: function associateWithAuthData(userObj, platform, authData) {
      console.warn('DEPRECATED: User.associateWithAuthData 已废弃，请使用 User#associateWithAuthData 代替');
      return userObj._linkWith(platform, authData);
    },

    /**
     * Logs out the currently logged in user session. This will remove the
     * session from disk, log out of linked services, and future calls to
     * <code>current</code> will return <code>null</code>.
     * @return {Promise}
     */
    logOut: function logOut() {
      if (AV._config.disableCurrentUser) {
        console.warn('AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html');
        return _promise.default.resolve(null);
      }

      if (AV.User._currentUser !== null) {
        AV.User._currentUser._logOutWithAll();

        AV.User._currentUser._isCurrentUser = false;
      }

      AV.User._currentUserMatchesDisk = true;
      AV.User._currentUser = null;
      return AV.localStorage.removeItemAsync(AV._getAVPath(AV.User._CURRENT_USER_KEY)).then(function () {
        return AV._refreshSubscriptionId();
      });
    },

    /**
     *Create a follower query for special user to query the user's followers.
     * @param {String} userObjectId The user object id.
     * @return {AV.FriendShipQuery}
     * @since 0.3.0
     */
    followerQuery: function followerQuery(userObjectId) {
      if (!userObjectId || !_.isString(userObjectId)) {
        throw new Error('Invalid user object id.');
      }

      var query = new AV.FriendShipQuery('_Follower');
      query._friendshipTag = 'follower';
      query.equalTo('user', AV.Object.createWithoutData('_User', userObjectId));
      return query;
    },

    /**
     *Create a followee query for special user to query the user's followees.
     * @param {String} userObjectId The user object id.
     * @return {AV.FriendShipQuery}
     * @since 0.3.0
     */
    followeeQuery: function followeeQuery(userObjectId) {
      if (!userObjectId || !_.isString(userObjectId)) {
        throw new Error('Invalid user object id.');
      }

      var query = new AV.FriendShipQuery('_Followee');
      query._friendshipTag = 'followee';
      query.equalTo('user', AV.Object.createWithoutData('_User', userObjectId));
      return query;
    },

    /**
     * Requests a password reset email to be sent to the specified email address
     * associated with the user account. This email allows the user to securely
     * reset their password on the AV site.
     *
     * @param {String} email The email address associated with the user that
     *     forgot their password.
     * @return {Promise}
     */
    requestPasswordReset: function requestPasswordReset(email) {
      var json = {
        email: email
      };
      var request = AVRequest('requestPasswordReset', null, null, 'POST', json);
      return request;
    },

    /**
     * Requests a verify email to be sent to the specified email address
     * associated with the user account. This email allows the user to securely
     * verify their email address on the AV site.
     *
     * @param {String} email The email address associated with the user that
     *     doesn't verify their email address.
     * @return {Promise}
     */
    requestEmailVerify: function requestEmailVerify(email) {
      var json = {
        email: email
      };
      var request = AVRequest('requestEmailVerify', null, null, 'POST', json);
      return request;
    },

    /**
     * Requests a verify sms code to be sent to the specified mobile phone
     * number associated with the user account. This sms code allows the user to
     * verify their mobile phone number by calling AV.User.verifyMobilePhone
     *
     * @param {String} mobilePhoneNumber The mobile phone number associated with the
     *                  user that doesn't verify their mobile phone number.
     * @param {SMSAuthOptions} [options]
     * @return {Promise}
     */
    requestMobilePhoneVerify: function requestMobilePhoneVerify(mobilePhoneNumber) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var data = {
        mobilePhoneNumber: mobilePhoneNumber
      };

      if (options.validateToken) {
        data.validate_token = options.validateToken;
      }

      var request = AVRequest('requestMobilePhoneVerify', null, null, 'POST', data, options);
      return request;
    },

    /**
     * Requests a reset password sms code to be sent to the specified mobile phone
     * number associated with the user account. This sms code allows the user to
     * reset their account's password by calling AV.User.resetPasswordBySmsCode
     *
     * @param {String} mobilePhoneNumber The mobile phone number  associated with the
     *                  user that doesn't verify their mobile phone number.
     * @param {SMSAuthOptions} [options]
     * @return {Promise}
     */
    requestPasswordResetBySmsCode: function requestPasswordResetBySmsCode(mobilePhoneNumber) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var data = {
        mobilePhoneNumber: mobilePhoneNumber
      };

      if (options.validateToken) {
        data.validate_token = options.validateToken;
      }

      var request = AVRequest('requestPasswordResetBySmsCode', null, null, 'POST', data, options);
      return request;
    },

    /**
     * Requests a change mobile phone number sms code to be sent to the mobilePhoneNumber.
     * This sms code allows current user to reset it's mobilePhoneNumber by
     * calling {@link AV.User.changePhoneNumber}
     * @since 4.7.0
     * @param {String} mobilePhoneNumber
     * @param {Number} [ttl] ttl of sms code (default is 6 minutes)
     * @param {SMSAuthOptions} [options]
     * @return {Promise}
     */
    requestChangePhoneNumber: function requestChangePhoneNumber(mobilePhoneNumber, ttl, options) {
      var data = {
        mobilePhoneNumber: mobilePhoneNumber
      };

      if (ttl) {
        data.ttl = options.ttl;
      }

      if (options && options.validateToken) {
        data.validate_token = options.validateToken;
      }

      return AVRequest('requestChangePhoneNumber', null, null, 'POST', data, options);
    },

    /**
     * Makes a call to reset user's account mobilePhoneNumber by sms code.
     * The sms code is sent by {@link AV.User.requestChangePhoneNumber}
     * @since 4.7.0
     * @param {String} mobilePhoneNumber
     * @param {String} code The sms code.
     * @return {Promise}
     */
    changePhoneNumber: function changePhoneNumber(mobilePhoneNumber, code) {
      var data = {
        mobilePhoneNumber: mobilePhoneNumber,
        code: code
      };
      return AVRequest('changePhoneNumber', null, null, 'POST', data);
    },

    /**
     * Makes a call to reset user's account password by sms code and new password.
     * The sms code is sent by AV.User.requestPasswordResetBySmsCode.
     * @param {String} code The sms code sent by AV.User.Cloud.requestSmsCode
     * @param {String} password The new password.
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     */
    resetPasswordBySmsCode: function resetPasswordBySmsCode(code, password) {
      var json = {
        password: password
      };
      var request = AVRequest('resetPasswordBySmsCode', null, code, 'PUT', json);
      return request;
    },

    /**
     * Makes a call to verify sms code that sent by AV.User.Cloud.requestSmsCode
     * If verify successfully,the user mobilePhoneVerified attribute will be true.
     * @param {String} code The sms code sent by AV.User.Cloud.requestSmsCode
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     */
    verifyMobilePhone: function verifyMobilePhone(code) {
      var request = AVRequest('verifyMobilePhone', null, code, 'POST', null);
      return request;
    },

    /**
     * Requests a logIn sms code to be sent to the specified mobile phone
     * number associated with the user account. This sms code allows the user to
     * login by AV.User.logInWithMobilePhoneSmsCode function.
     *
     * @param {String} mobilePhoneNumber The mobile phone number  associated with the
     *           user that want to login by AV.User.logInWithMobilePhoneSmsCode
     * @param {SMSAuthOptions} [options]
     * @return {Promise}
     */
    requestLoginSmsCode: function requestLoginSmsCode(mobilePhoneNumber) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var data = {
        mobilePhoneNumber: mobilePhoneNumber
      };

      if (options.validateToken) {
        data.validate_token = options.validateToken;
      }

      var request = AVRequest('requestLoginSmsCode', null, null, 'POST', data, options);
      return request;
    },

    /**
     * Retrieves the currently logged in AVUser with a valid session,
     * either from memory or localStorage, if necessary.
     * @return {Promise.<AV.User>} resolved with the currently logged in AV.User.
     */
    currentAsync: function currentAsync() {
      if (AV._config.disableCurrentUser) {
        console.warn('AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html');
        return _promise.default.resolve(null);
      }

      if (AV.User._currentUser) {
        return _promise.default.resolve(AV.User._currentUser);
      }

      if (AV.User._currentUserMatchesDisk) {
        return _promise.default.resolve(AV.User._currentUser);
      }

      return AV.localStorage.getItemAsync(AV._getAVPath(AV.User._CURRENT_USER_KEY)).then(function (userData) {
        if (!userData) {
          return null;
        } // Load the user from local storage.


        AV.User._currentUserMatchesDisk = true;
        AV.User._currentUser = AV.Object._create('_User');
        AV.User._currentUser._isCurrentUser = true;
        var json = JSON.parse(userData);
        AV.User._currentUser.id = json._id;
        delete json._id;
        AV.User._currentUser._sessionToken = json._sessionToken;
        delete json._sessionToken;

        AV.User._currentUser._finishFetch(json); //AV.User._currentUser.set(json);


        AV.User._currentUser._synchronizeAllAuthData();

        AV.User._currentUser._refreshCache();

        AV.User._currentUser._opSetQueue = [{}];
        return AV.User._currentUser;
      });
    },

    /**
     * Retrieves the currently logged in AVUser with a valid session,
     * either from memory or localStorage, if necessary.
     * @return {AV.User} The currently logged in AV.User.
     */
    current: function current() {
      if (AV._config.disableCurrentUser) {
        console.warn('AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html');
        return null;
      }

      if (AV.localStorage.async) {
        var error = new Error('Synchronous API User.current() is not available in this runtime. Use User.currentAsync() instead.');
        error.code = 'SYNC_API_NOT_AVAILABLE';
        throw error;
      }

      if (AV.User._currentUser) {
        return AV.User._currentUser;
      }

      if (AV.User._currentUserMatchesDisk) {
        return AV.User._currentUser;
      } // Load the user from local storage.


      AV.User._currentUserMatchesDisk = true;
      var userData = AV.localStorage.getItem(AV._getAVPath(AV.User._CURRENT_USER_KEY));

      if (!userData) {
        return null;
      }

      AV.User._currentUser = AV.Object._create('_User');
      AV.User._currentUser._isCurrentUser = true;
      var json = JSON.parse(userData);
      AV.User._currentUser.id = json._id;
      delete json._id;
      AV.User._currentUser._sessionToken = json._sessionToken;
      delete json._sessionToken;

      AV.User._currentUser._finishFetch(json); //AV.User._currentUser.set(json);


      AV.User._currentUser._synchronizeAllAuthData();

      AV.User._currentUser._refreshCache();

      AV.User._currentUser._opSetQueue = [{}];
      return AV.User._currentUser;
    },

    /**
     * Persists a user as currentUser to localStorage, and into the singleton.
     * @private
     */
    _saveCurrentUser: function _saveCurrentUser(user) {
      var promise;

      if (AV.User._currentUser !== user) {
        promise = AV.User.logOut();
      } else {
        promise = _promise.default.resolve();
      }

      return promise.then(function () {
        user._isCurrentUser = true;
        AV.User._currentUser = user;

        var json = user._toFullJSON();

        json._id = user.id;
        json._sessionToken = user._sessionToken;
        return AV.localStorage.setItemAsync(AV._getAVPath(AV.User._CURRENT_USER_KEY), (0, _stringify.default)(json)).then(function () {
          AV.User._currentUserMatchesDisk = true;
          return AV._refreshSubscriptionId();
        });
      });
    },
    _registerAuthenticationProvider: function _registerAuthenticationProvider(provider) {
      AV.User._authProviders[provider.getAuthType()] = provider; // Synchronize the current user with the auth provider.

      if (!AV._config.disableCurrentUser && AV.User.current()) {
        AV.User.current()._synchronizeAuthData(provider.getAuthType());
      }
    },
    _logInWith: function _logInWith(provider, authData, options) {
      var user = AV.Object._create('_User');

      return user._linkWith(provider, authData, options);
    }
  });
};