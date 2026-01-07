'use strict';

var runtimeCore = require('@module-federation/runtime-core');
var utils = require('./utils.cjs.js');

let FederationInstance = null;
function init(options) {
    // Retrieve the same instance with the same name
    const instance = utils.getGlobalFederationInstance(options.name, options.version);
    if (!instance) {
        // Retrieve debug constructor
        const FederationConstructor = runtimeCore.getGlobalFederationConstructor() || runtimeCore.FederationHost;
        FederationInstance = new FederationConstructor(options);
        runtimeCore.setGlobalFederationInstance(FederationInstance);
        return FederationInstance;
    } else {
        // Merge options
        instance.initOptions(options);
        if (!FederationInstance) {
            FederationInstance = instance;
        }
        return instance;
    }
}
function loadRemote(...args) {
    runtimeCore.assert(FederationInstance, 'Please call init first');
    const loadRemote1 = FederationInstance.loadRemote;
    // eslint-disable-next-line prefer-spread
    return loadRemote1.apply(FederationInstance, args);
}
function loadShare(...args) {
    runtimeCore.assert(FederationInstance, 'Please call init first');
    // eslint-disable-next-line prefer-spread
    const loadShare1 = FederationInstance.loadShare;
    return loadShare1.apply(FederationInstance, args);
}
function loadShareSync(...args) {
    runtimeCore.assert(FederationInstance, 'Please call init first');
    const loadShareSync1 = FederationInstance.loadShareSync;
    // eslint-disable-next-line prefer-spread
    return loadShareSync1.apply(FederationInstance, args);
}
function preloadRemote(...args) {
    runtimeCore.assert(FederationInstance, 'Please call init first');
    // eslint-disable-next-line prefer-spread
    return FederationInstance.preloadRemote.apply(FederationInstance, args);
}
function registerRemotes(...args) {
    runtimeCore.assert(FederationInstance, 'Please call init first');
    // eslint-disable-next-line prefer-spread
    return FederationInstance.registerRemotes.apply(FederationInstance, args);
}
function registerPlugins(...args) {
    runtimeCore.assert(FederationInstance, 'Please call init first');
    // eslint-disable-next-line prefer-spread
    return FederationInstance.registerPlugins.apply(FederationInstance, args);
}
function getInstance() {
    return FederationInstance;
}
// Inject for debug
runtimeCore.setGlobalFederationConstructor(runtimeCore.FederationHost);

Object.defineProperty(exports, "FederationHost", {
  enumerable: true,
  get: function () { return runtimeCore.FederationHost; }
});
Object.defineProperty(exports, "Module", {
  enumerable: true,
  get: function () { return runtimeCore.Module; }
});
Object.defineProperty(exports, "getRemoteEntry", {
  enumerable: true,
  get: function () { return runtimeCore.getRemoteEntry; }
});
Object.defineProperty(exports, "getRemoteInfo", {
  enumerable: true,
  get: function () { return runtimeCore.getRemoteInfo; }
});
Object.defineProperty(exports, "loadScript", {
  enumerable: true,
  get: function () { return runtimeCore.loadScript; }
});
Object.defineProperty(exports, "loadScriptNode", {
  enumerable: true,
  get: function () { return runtimeCore.loadScriptNode; }
});
Object.defineProperty(exports, "registerGlobalPlugins", {
  enumerable: true,
  get: function () { return runtimeCore.registerGlobalPlugins; }
});
exports.getInstance = getInstance;
exports.init = init;
exports.loadRemote = loadRemote;
exports.loadShare = loadShare;
exports.loadShareSync = loadShareSync;
exports.preloadRemote = preloadRemote;
exports.registerPlugins = registerPlugins;
exports.registerRemotes = registerRemotes;
