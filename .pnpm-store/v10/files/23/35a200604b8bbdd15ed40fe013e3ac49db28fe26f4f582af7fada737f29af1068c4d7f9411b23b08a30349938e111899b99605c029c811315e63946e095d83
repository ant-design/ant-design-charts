import * as runtime from '@module-federation/runtime';
import { FEDERATION_SUPPORTED_TYPES } from './constant.esm.mjs';
import { decodeName, ENCODE_NAME_PREFIX } from '@module-federation/sdk';
import { _ as _extends } from './polyfills.esm.mjs';

function attachShareScopeMap(webpackRequire) {
    if (!webpackRequire.S || webpackRequire.federation.hasAttachShareScopeMap || !webpackRequire.federation.instance || !webpackRequire.federation.instance.shareScopeMap) {
        return;
    }
    webpackRequire.S = webpackRequire.federation.instance.shareScopeMap;
    webpackRequire.federation.hasAttachShareScopeMap = true;
}

function remotes(options) {
    const { chunkId, promises, chunkMapping, idToExternalAndNameMapping, webpackRequire, idToRemoteMap } = options;
    attachShareScopeMap(webpackRequire);
    if (webpackRequire.o(chunkMapping, chunkId)) {
        chunkMapping[chunkId].forEach((id)=>{
            let getScope = webpackRequire.R;
            if (!getScope) {
                getScope = [];
            }
            const data = idToExternalAndNameMapping[id];
            const remoteInfos = idToRemoteMap[id];
            // @ts-ignore seems not work
            if (getScope.indexOf(data) >= 0) {
                return;
            }
            // @ts-ignore seems not work
            getScope.push(data);
            if (data.p) {
                return promises.push(data.p);
            }
            const onError = (error)=>{
                if (!error) {
                    error = new Error('Container missing');
                }
                if (typeof error.message === 'string') {
                    error.message += `\nwhile loading "${data[1]}" from ${data[2]}`;
                }
                webpackRequire.m[id] = ()=>{
                    throw error;
                };
                data.p = 0;
            };
            const handleFunction = (fn, arg1, arg2, d, next, first)=>{
                try {
                    const promise = fn(arg1, arg2);
                    if (promise && promise.then) {
                        const p = promise.then((result)=>next(result, d), onError);
                        if (first) {
                            promises.push(data.p = p);
                        } else {
                            return p;
                        }
                    } else {
                        return next(promise, d, first);
                    }
                } catch (error) {
                    onError(error);
                }
            };
            const onExternal = (external, _, first)=>external ? handleFunction(webpackRequire.I, data[0], 0, external, onInitialized, first) : onError();
            // eslint-disable-next-line no-var
            var onInitialized = (_, external, first)=>handleFunction(external.get, data[1], getScope, 0, onFactory, first);
            // eslint-disable-next-line no-var
            var onFactory = (factory)=>{
                data.p = 1;
                webpackRequire.m[id] = (module)=>{
                    module.exports = factory();
                };
            };
            const onRemoteLoaded = ()=>{
                try {
                    const remoteName = decodeName(remoteInfos[0].name, ENCODE_NAME_PREFIX);
                    const remoteModuleName = remoteName + data[1].slice(1);
                    const instance = webpackRequire.federation.instance;
                    const loadRemote = ()=>webpackRequire.federation.instance.loadRemote(remoteModuleName, {
                            loadFactory: false,
                            from: 'build'
                        });
                    if (instance.options.shareStrategy === 'version-first') {
                        return Promise.all(instance.sharedHandler.initializeSharing(data[0])).then(()=>{
                            return loadRemote();
                        });
                    }
                    return loadRemote();
                } catch (error) {
                    onError(error);
                }
            };
            const useRuntimeLoad = remoteInfos.length === 1 && FEDERATION_SUPPORTED_TYPES.includes(remoteInfos[0].externalType) && remoteInfos[0].name;
            if (useRuntimeLoad) {
                handleFunction(onRemoteLoaded, data[2], 0, 0, onFactory, 1);
            } else {
                handleFunction(webpackRequire, data[2], 0, 0, onExternal, 1);
            }
        });
    }
}

function consumes(options) {
    const { chunkId, promises, chunkMapping, installedModules, moduleToHandlerMapping, webpackRequire } = options;
    attachShareScopeMap(webpackRequire);
    if (webpackRequire.o(chunkMapping, chunkId)) {
        chunkMapping[chunkId].forEach((id)=>{
            if (webpackRequire.o(installedModules, id)) {
                return promises.push(installedModules[id]);
            }
            const onFactory = (factory)=>{
                installedModules[id] = 0;
                webpackRequire.m[id] = (module)=>{
                    delete webpackRequire.c[id];
                    module.exports = factory();
                };
            };
            const onError = (error)=>{
                delete installedModules[id];
                webpackRequire.m[id] = (module)=>{
                    delete webpackRequire.c[id];
                    throw error;
                };
            };
            try {
                const federationInstance = webpackRequire.federation.instance;
                if (!federationInstance) {
                    throw new Error('Federation instance not found!');
                }
                const { shareKey, getter, shareInfo } = moduleToHandlerMapping[id];
                const promise = federationInstance.loadShare(shareKey, {
                    customShareInfo: shareInfo
                }).then((factory)=>{
                    if (factory === false) {
                        return getter();
                    }
                    return factory;
                });
                if (promise.then) {
                    promises.push(installedModules[id] = promise.then(onFactory).catch(onError));
                } else {
                    // @ts-ignore maintain previous logic
                    onFactory(promise);
                }
            } catch (e) {
                onError(e);
            }
        });
    }
}

function initializeSharing({ shareScopeName, webpackRequire, initPromises, initTokens, initScope }) {
    if (!initScope) initScope = [];
    const mfInstance = webpackRequire.federation.instance;
    // handling circular init calls
    var initToken = initTokens[shareScopeName];
    if (!initToken) initToken = initTokens[shareScopeName] = {
        from: mfInstance.name
    };
    if (initScope.indexOf(initToken) >= 0) return;
    initScope.push(initToken);
    const promise = initPromises[shareScopeName];
    if (promise) return promise;
    var warn = (msg)=>typeof console !== 'undefined' && console.warn && console.warn(msg);
    var initExternal = (id)=>{
        var handleError = (err)=>warn('Initialization of sharing external failed: ' + err);
        try {
            var module = webpackRequire(id);
            if (!module) return;
            var initFn = (module)=>module && module.init && // @ts-ignore compat legacy mf shared behavior
                module.init(webpackRequire.S[shareScopeName], initScope);
            if (module.then) return promises.push(module.then(initFn, handleError));
            var initResult = initFn(module);
            // @ts-ignore
            if (initResult && typeof initResult !== 'boolean' && initResult.then) // @ts-ignore
            return promises.push(initResult['catch'](handleError));
        } catch (err) {
            handleError(err);
        }
    };
    const promises = mfInstance.initializeSharing(shareScopeName, {
        strategy: mfInstance.options.shareStrategy,
        initScope,
        from: 'build'
    });
    attachShareScopeMap(webpackRequire);
    const bundlerRuntimeRemotesOptions = webpackRequire.federation.bundlerRuntimeOptions.remotes;
    if (bundlerRuntimeRemotesOptions) {
        Object.keys(bundlerRuntimeRemotesOptions.idToRemoteMap).forEach((moduleId)=>{
            const info = bundlerRuntimeRemotesOptions.idToRemoteMap[moduleId];
            const externalModuleId = bundlerRuntimeRemotesOptions.idToExternalAndNameMapping[moduleId][2];
            if (info.length > 1) {
                initExternal(externalModuleId);
            } else if (info.length === 1) {
                const remoteInfo = info[0];
                if (!FEDERATION_SUPPORTED_TYPES.includes(remoteInfo.externalType)) {
                    initExternal(externalModuleId);
                }
            }
        });
    }
    if (!promises.length) {
        return initPromises[shareScopeName] = true;
    }
    return initPromises[shareScopeName] = Promise.all(promises).then(()=>initPromises[shareScopeName] = true);
}

function handleInitialConsumes(options) {
    const { moduleId, moduleToHandlerMapping, webpackRequire } = options;
    const federationInstance = webpackRequire.federation.instance;
    if (!federationInstance) {
        throw new Error('Federation instance not found!');
    }
    const { shareKey, shareInfo } = moduleToHandlerMapping[moduleId];
    try {
        return federationInstance.loadShareSync(shareKey, {
            customShareInfo: shareInfo
        });
    } catch (err) {
        console.error('loadShareSync failed! The function should not be called unless you set "eager:true". If you do not set it, and encounter this issue, you can check whether an async boundary is implemented.');
        console.error('The original error message is as follows: ');
        throw err;
    }
}
function installInitialConsumes(options) {
    const { moduleToHandlerMapping, webpackRequire, installedModules, initialConsumes } = options;
    initialConsumes.forEach((id)=>{
        webpackRequire.m[id] = (module)=>{
            // Handle scenario when module is used synchronously
            installedModules[id] = 0;
            delete webpackRequire.c[id];
            const factory = handleInitialConsumes({
                moduleId: id,
                moduleToHandlerMapping,
                webpackRequire
            });
            if (typeof factory !== 'function') {
                throw new Error(`Shared module is not available for eager consumption: ${id}`);
            }
            module.exports = factory();
        };
    });
}

function initContainerEntry(options) {
    const { webpackRequire, shareScope, initScope, shareScopeKey, remoteEntryInitOptions } = options;
    if (!webpackRequire.S) return;
    if (!webpackRequire.federation || !webpackRequire.federation.instance || !webpackRequire.federation.initOptions) return;
    const federationInstance = webpackRequire.federation.instance;
    var name = shareScopeKey || 'default';
    federationInstance.initOptions(_extends({
        name: webpackRequire.federation.initOptions.name,
        remotes: []
    }, remoteEntryInitOptions));
    federationInstance.initShareScopeMap(name, shareScope, {
        hostShareScopeMap: (remoteEntryInitOptions == null ? void 0 : remoteEntryInitOptions.shareScopeMap) || {}
    });
    if (webpackRequire.federation.attachShareScopeMap) {
        webpackRequire.federation.attachShareScopeMap(webpackRequire);
    }
    if (typeof webpackRequire.federation.prefetch === 'function') {
        webpackRequire.federation.prefetch();
    }
    // @ts-ignore
    return webpackRequire.I(name, initScope);
}

const federation = {
    runtime,
    instance: undefined,
    initOptions: undefined,
    bundlerRuntime: {
        remotes,
        consumes,
        I: initializeSharing,
        S: {},
        installInitialConsumes,
        initContainerEntry
    },
    attachShareScopeMap,
    bundlerRuntimeOptions: {}
};

export { federation as default };
