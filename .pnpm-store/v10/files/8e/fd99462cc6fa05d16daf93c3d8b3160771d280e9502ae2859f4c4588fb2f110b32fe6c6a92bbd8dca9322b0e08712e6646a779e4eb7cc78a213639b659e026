import { setGlobalFederationConstructor, FederationHost, getGlobalFederationConstructor, setGlobalFederationInstance, assert } from '@module-federation/runtime-core';
export { FederationHost, Module, getRemoteEntry, getRemoteInfo, loadScript, loadScriptNode, registerGlobalPlugins } from '@module-federation/runtime-core';
import { g as getGlobalFederationInstance } from './utils.esm.mjs';

let FederationInstance = null;
function init(options) {
    // Retrieve the same instance with the same name
    const instance = getGlobalFederationInstance(options.name, options.version);
    if (!instance) {
        // Retrieve debug constructor
        const FederationConstructor = getGlobalFederationConstructor() || FederationHost;
        FederationInstance = new FederationConstructor(options);
        setGlobalFederationInstance(FederationInstance);
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
    assert(FederationInstance, 'Please call init first');
    const loadRemote1 = FederationInstance.loadRemote;
    // eslint-disable-next-line prefer-spread
    return loadRemote1.apply(FederationInstance, args);
}
function loadShare(...args) {
    assert(FederationInstance, 'Please call init first');
    // eslint-disable-next-line prefer-spread
    const loadShare1 = FederationInstance.loadShare;
    return loadShare1.apply(FederationInstance, args);
}
function loadShareSync(...args) {
    assert(FederationInstance, 'Please call init first');
    const loadShareSync1 = FederationInstance.loadShareSync;
    // eslint-disable-next-line prefer-spread
    return loadShareSync1.apply(FederationInstance, args);
}
function preloadRemote(...args) {
    assert(FederationInstance, 'Please call init first');
    // eslint-disable-next-line prefer-spread
    return FederationInstance.preloadRemote.apply(FederationInstance, args);
}
function registerRemotes(...args) {
    assert(FederationInstance, 'Please call init first');
    // eslint-disable-next-line prefer-spread
    return FederationInstance.registerRemotes.apply(FederationInstance, args);
}
function registerPlugins(...args) {
    assert(FederationInstance, 'Please call init first');
    // eslint-disable-next-line prefer-spread
    return FederationInstance.registerPlugins.apply(FederationInstance, args);
}
function getInstance() {
    return FederationInstance;
}
// Inject for debug
setGlobalFederationConstructor(FederationHost);

export { getInstance, init, loadRemote, loadShare, loadShareSync, preloadRemote, registerPlugins, registerRemotes };
