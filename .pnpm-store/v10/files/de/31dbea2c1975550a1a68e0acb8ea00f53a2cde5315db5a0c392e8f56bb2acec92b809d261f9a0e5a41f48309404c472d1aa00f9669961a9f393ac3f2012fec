function getRuntime() {
    // @ts-ignore
    const runtime = __webpack_require__.federation.runtime;
    if (!runtime) {
        throw new Error('Federation runtime accessed before instantiation or installation');
    }
    return runtime;
}
const registerGlobalPlugins = (...args)=>{
    return getRuntime().registerGlobalPlugins(...args);
};
const getRemoteEntry = (...args)=>{
    return getRuntime().getRemoteEntry(...args);
};
const getRemoteInfo = (...args)=>{
    return getRuntime().getRemoteInfo(...args);
};
const loadScript = (...args)=>{
    return getRuntime().loadScript(...args);
};
const loadScriptNode = (...args)=>{
    return getRuntime().loadScriptNode(...args);
};
const init = (...args)=>{
    return getRuntime().init(...args);
};
const loadRemote = (...args)=>{
    return getRuntime().loadRemote(...args);
};
const loadShare = (...args)=>{
    return getRuntime().loadShare(...args);
};
const loadShareSync = (...args)=>{
    return getRuntime().loadShareSync(...args);
};
const preloadRemote = (...args)=>{
    return getRuntime().preloadRemote(...args);
};
const registerRemotes = (...args)=>{
    return getRuntime().registerRemotes(...args);
};
const registerPlugins = (...args)=>{
    return getRuntime().registerPlugins(...args);
};
const getInstance = (...args)=>{
    return getRuntime().getInstance(...args);
};
class FederationHost {
    _getInstance() {
        if (!this._instance) {
            const RealFederationHost = getRuntime().FederationHost;
            this._instance = new RealFederationHost(...this._args);
        }
        return this._instance;
    }
    get options() {
        return this._getInstance().options;
    }
    set options(value) {
        this._getInstance().options = value;
    }
    get hooks() {
        return this._getInstance().hooks;
    }
    get version() {
        return this._getInstance().version;
    }
    get name() {
        return this._getInstance().name;
    }
    get moduleCache() {
        return this._getInstance().moduleCache;
    }
    get snapshotHandler() {
        return this._getInstance().snapshotHandler;
    }
    get sharedHandler() {
        return this._getInstance().sharedHandler;
    }
    get remoteHandler() {
        return this._getInstance().remoteHandler;
    }
    get shareScopeMap() {
        return this._getInstance().shareScopeMap;
    }
    get loaderHook() {
        return this._getInstance().loaderHook;
    }
    get bridgeHook() {
        return this._getInstance().bridgeHook;
    }
    initOptions(...args) {
        return this._getInstance().initOptions(...args);
    }
    loadShare(...args) {
        return this._getInstance().loadShare(...args);
    }
    loadShareSync(...args) {
        return this._getInstance().loadShareSync(...args);
    }
    initializeSharing(...args) {
        return this._getInstance().initializeSharing(...args);
    }
    initRawContainer(...args) {
        return this._getInstance().initRawContainer(...args);
    }
    loadRemote(...args) {
        return this._getInstance().loadRemote(...args);
    }
    preloadRemote(...args) {
        return this._getInstance().preloadRemote(...args);
    }
    initShareScopeMap(...args) {
        return this._getInstance().initShareScopeMap(...args);
    }
    registerPlugins(...args) {
        return this._getInstance().registerPlugins(...args);
    }
    registerRemotes(...args) {
        return this._getInstance().registerRemotes(...args);
    }
    formatOptions(...args) {
        //@ts-ignore
        return this._getInstance().formatOptions(...args);
    }
    constructor(...args){
        this._instance = null;
        this._args = args;
        const RealFederationHost = getRuntime().FederationHost;
        this._instance = new RealFederationHost(...this._args);
    }
}
class Module {
    _getInstance() {
        if (!this._instance) {
            const RealModule = getRuntime().Module;
            this._instance = new RealModule(...this._args);
        }
        return this._instance;
    }
    get remoteInfo() {
        return this._getInstance().remoteInfo;
    }
    set remoteInfo(value) {
        this._getInstance().remoteInfo = value;
    }
    get inited() {
        return this._getInstance().inited;
    }
    set inited(value) {
        this._getInstance().inited = value;
    }
    get lib() {
        return this._getInstance().lib;
    }
    set lib(value) {
        this._getInstance().lib = value;
    }
    get host() {
        return this._getInstance().host;
    }
    set host(value) {
        this._getInstance().host = value;
    }
    async getEntry(...args) {
        return this._getInstance().getEntry(...args);
    }
    async get(...args) {
        return this._getInstance().get(...args);
    }
    wraperFactory(...args) {
        //@ts-ignore
        return this._getInstance().wraperFactory(...args);
    }
    constructor(...args){
        this._instance = null;
        this._args = args;
    }
} //maybe use proxy?
 //export class Module implements ModuleInterface {
 //   private _instance: IndexModule.Module | null = null;
 //   private _args: ConstructorParameters<typeof IndexModule.Module>;
 //   constructor(...args: ConstructorParameters<typeof IndexModule.Module>) {
 //     this._args = args;
 //     return new Proxy(this, {
 //       get(target, prop) {
 //         if (prop in target) {
 //           return target[prop as keyof Module];
 //         }
 //         const instance = target._getInstance();
 //         const value = instance[prop as keyof IndexModule.Module];
 //         return typeof value === 'function' ? value.bind(instance) : value;
 //       },
 //       set(target, prop, value) {
 //         const instance = target._getInstance();
 //         instance[prop as keyof IndexModule.Module] = value;
 //         return true;
 //       },
 //     });
 //   }
 //   private _getInstance(): IndexModule.Module {
 //     if (!this._instance) {
 //       const RealModule = getRuntime().Module;
 //       this._instance = new RealModule(...this._args);
 //     }
 //     return this._instance;
 //   }
 //   // Keep only the methods that have custom logic
 //   private wraperFactory(...args: Parameters<IndexModule.Module['wraperFactory']>) {
 //     return this._getInstance().wraperFactory(...args);
 //   }
 // }
 //export class FederationHost implements IndexModule.FederationHost {
 //   private _instance: IndexModule.FederationHost | null = null;
 //   private _args: ConstructorParameters<typeof IndexModule.FederationHost>;
 //   constructor(...args: ConstructorParameters<typeof IndexModule.FederationHost>) {
 //     this._args = args;
 //     return new Proxy(this, {
 //       get(target, prop) {
 //         if (prop in target) {
 //           return target[prop as keyof FederationHost];
 //         }
 //         const instance = target._getInstance();
 //         const value = instance[prop as keyof IndexModule.FederationHost];
 //         return typeof value === 'function' ? value.bind(instance) : value;
 //       },
 //       set(target, prop, value) {
 //         const instance = target._getInstance();
 //         instance[prop as keyof IndexModule.FederationHost] = value;
 //         return true;
 //       },
 //     });
 //   }
 //   private _getInstance(): IndexModule.FederationHost {
 //     if (!this._instance) {
 //       const RealFederationHost = getRuntime().FederationHost;
 //       this._instance = new RealFederationHost(...this._args);
 //     }
 //     return this._instance;
 //   }
 //   // Keep only the methods that have custom logic
 //   formatOptions(...args: Parameters<IndexModule.FederationHost['formatOptions']>) {
 //     return this._getInstance().formatOptions(...args);
 //   }
 // }
 //function createRuntimeFunction<T extends keyof typeof IndexModule>(
 //   name: T
 // ): typeof IndexModule[T] {
 //   return (...args: any[]) => {
 //     return getRuntime()[name](...args);
 //   };
 // }
 // export const registerGlobalPlugins = createRuntimeFunction('registerGlobalPlugins');
 // export const getRemoteEntry = createRuntimeFunction('getRemoteEntry');
 // export const getRemoteInfo = createRuntimeFunction('getRemoteInfo');
 // export const loadScript = createRuntimeFunction('loadScript');
 // export const loadScriptNode = createRuntimeFunction('loadScriptNode');
 // export const init = createRuntimeFunction('init');
 // export const loadRemote = createRuntimeFunction('loadRemote');
 // export const loadShare = createRuntimeFunction('loadShare');
 // export const loadShareSync = createRuntimeFunction('loadShareSync');
 // export const preloadRemote = createRuntimeFunction('preloadRemote');
 // export const registerRemotes = createRuntimeFunction('registerRemotes');
 // export const registerPlugins = createRuntimeFunction('registerPlugins');
 // export const getInstance = createRuntimeFunction('getInstance');

export { FederationHost, Module, getInstance, getRemoteEntry, getRemoteInfo, init, loadRemote, loadScript, loadScriptNode, loadShare, loadShareSync, preloadRemote, registerGlobalPlugins, registerPlugins, registerRemotes };
