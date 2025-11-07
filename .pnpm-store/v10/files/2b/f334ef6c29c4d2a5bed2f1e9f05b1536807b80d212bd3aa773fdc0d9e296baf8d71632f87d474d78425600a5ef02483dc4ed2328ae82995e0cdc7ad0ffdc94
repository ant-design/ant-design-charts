'use strict';

var polyfills = require('./polyfills.cjs.js');
var runtimeCore = require('@module-federation/runtime-core');
var utils = require('./utils.cjs.js');

var helpers = {
    global: polyfills._extends({}, runtimeCore.helpers.global, {
        getGlobalFederationInstance: utils.getGlobalFederationInstance
    }),
    share: runtimeCore.helpers.share
};

module.exports = helpers;
