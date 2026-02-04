"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

/*!
 * LeanCloud JavaScript SDK
 * https://leancloud.cn
 *
 * Copyright 2016 LeanCloud.cn, Inc.
 * The LeanCloud JavaScript SDK is freely distributable under the MIT license.
 */
var _ = require('underscore');

var AV = require('./av');

AV._ = _;
AV.version = require('./version');
AV.Promise = _promise.default;
AV.localStorage = require('./localstorage');
AV.Cache = require('./cache');
AV.Error = require('./error');

require('./init');

require('./event')(AV);

require('./geopoint')(AV);

require('./acl')(AV);

require('./op')(AV);

require('./relation')(AV);

require('./file')(AV);

require('./object')(AV);

require('./role')(AV);

require('./user')(AV);

require('./query')(AV);

require('./live-query')(AV);

require('./captcha')(AV);

require('./cloudfunction')(AV);

require('./push')(AV);

require('./status')(AV);

require('./search')(AV);

require('./insight')(AV);

require('./friendship')(AV);

AV.Conversation = require('./conversation');

require('./leaderboard');

module.exports = AV;
/**
 * Options to controll the authentication for an operation
 * @typedef {Object} AuthOptions
 * @property {String} [sessionToken] Specify a user to excute the operation as.
 * @property {AV.User} [user] Specify a user to excute the operation as. The user must have _sessionToken. This option will be ignored if sessionToken option provided.
 * @property {Boolean} [useMasterKey] Indicates whether masterKey is used for this operation. Only valid when masterKey is set.
 */

/**
 * Options to controll the authentication for an SMS operation
 * @typedef {Object} SMSAuthOptions
 * @property {String} [sessionToken] Specify a user to excute the operation as.
 * @property {AV.User} [user] Specify a user to excute the operation as. The user must have _sessionToken. This option will be ignored if sessionToken option provided.
 * @property {Boolean} [useMasterKey] Indicates whether masterKey is used for this operation. Only valid when masterKey is set.
 * @property {String} [validateToken] a validate token returned by {@link AV.Cloud.verifyCaptcha}
 */