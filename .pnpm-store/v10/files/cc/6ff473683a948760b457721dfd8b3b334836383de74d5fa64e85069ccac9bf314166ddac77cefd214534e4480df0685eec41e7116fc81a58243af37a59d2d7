((__TURBOPACK__) => {
            
if (!Array.isArray(__TURBOPACK__)) {
    return;
}

const CHUNK_BASE_PATH = "";
const CHUNK_SUFFIX_PATH = "";
const RELATIVE_ROOT_PATH = "/ROOT";
const RUNTIME_PUBLIC_PATH = "";
/**
 * This file contains runtime types and functions that are shared between all
 * TurboPack ECMAScript runtimes.
 *
 * It will be prepended to the runtime code of each runtime.
 */ /* eslint-disable @typescript-eslint/no-unused-vars */ /// <reference path="./runtime-types.d.ts" />
const REEXPORTED_OBJECTS = Symbol("reexported objects");
/**
 * Constructs the `__turbopack_context__` object for a module.
 */ function Context(module) {
    this.m = module;
    this.e = module.exports;
}
const contextPrototype = Context.prototype;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const toStringTag = typeof Symbol !== "undefined" && Symbol.toStringTag;
function defineProp(obj, name, options) {
    if (!hasOwnProperty.call(obj, name)) Object.defineProperty(obj, name, options);
}
function getOverwrittenModule(moduleCache, id) {
    let module = moduleCache[id];
    if (!module) {
        // This is invoked when a module is merged into another module, thus it wasn't invoked via
        // instantiateModule and the cache entry wasn't created yet.
        module = createModuleObject(id);
        moduleCache[id] = module;
    }
    return module;
}
/**
 * Creates the module object. Only done here to ensure all module objects have the same shape.
 */ function createModuleObject(id) {
    return {
        exports: {},
        error: undefined,
        loaded: false,
        id,
        namespaceObject: undefined,
        [REEXPORTED_OBJECTS]: undefined
    };
}
/**
 * Adds the getters to the exports object.
 */ function esm(exports, getters) {
    defineProp(exports, "__esModule", {
        value: true
    });
    if (toStringTag) defineProp(exports, toStringTag, {
        value: "Module"
    });
    for(const key in getters){
        const item = getters[key];
        if (Array.isArray(item)) {
            defineProp(exports, key, {
                get: item[0],
                set: item[1],
                enumerable: true
            });
        } else {
            defineProp(exports, key, {
                get: item,
                enumerable: true
            });
        }
    }
    Object.seal(exports);
}
/**
 * Makes the module an ESM with exports
 */ function esmExport(getters, id) {
    let module = this.m;
    let exports = this.e;
    if (id != null) {
        module = getOverwrittenModule(this.c, id);
        exports = module.exports;
    }
    module.namespaceObject = module.exports;
    esm(exports, getters);
}
contextPrototype.s = esmExport;
function ensureDynamicExports(module, exports) {
    let reexportedObjects = module[REEXPORTED_OBJECTS];
    if (!reexportedObjects) {
        reexportedObjects = module[REEXPORTED_OBJECTS] = [];
        module.exports = module.namespaceObject = new Proxy(exports, {
            get (target, prop) {
                if (hasOwnProperty.call(target, prop) || prop === "default" || prop === "__esModule") {
                    return Reflect.get(target, prop);
                }
                for (const obj of reexportedObjects){
                    const value = Reflect.get(obj, prop);
                    if (value !== undefined) return value;
                }
                return undefined;
            },
            ownKeys (target) {
                const keys = Reflect.ownKeys(target);
                for (const obj of reexportedObjects){
                    for (const key of Reflect.ownKeys(obj)){
                        if (key !== "default" && !keys.includes(key)) keys.push(key);
                    }
                }
                return keys;
            }
        });
    }
}
/**
 * Dynamically exports properties from an object
 */ function dynamicExport(object, id) {
    let module = this.m;
    let exports = this.e;
    if (id != null) {
        module = getOverwrittenModule(this.c, id);
        exports = module.exports;
    }
    ensureDynamicExports(module, exports);
    if (typeof object === "object" && object !== null) {
        module[REEXPORTED_OBJECTS].push(object);
    }
}
contextPrototype.j = dynamicExport;
function exportValue(value, id) {
    let module = this.m;
    if (id != null) {
        module = getOverwrittenModule(this.c, id);
    }
    module.exports = value;
}
contextPrototype.v = exportValue;
function exportNamespace(namespace, id) {
    let module = this.m;
    if (id != null) {
        module = getOverwrittenModule(this.c, id);
    }
    module.exports = module.namespaceObject = namespace;
}
contextPrototype.n = exportNamespace;
function createGetter(obj, key) {
    return ()=>obj[key];
}
/**
 * @returns prototype of the object
 */ const getProto = Object.getPrototypeOf ? (obj)=>Object.getPrototypeOf(obj) : (obj)=>obj.__proto__;
/** Prototypes that are not expanded for exports */ const LEAF_PROTOTYPES = [
    null,
    getProto({}),
    getProto([]),
    getProto(getProto)
];
/**
 * @param raw
 * @param ns
 * @param allowExportDefault
 *   * `false`: will have the raw module as default export
 *   * `true`: will have the default property as default export
 */ function interopEsm(raw, ns, allowExportDefault) {
    const getters = Object.create(null);
    for(let current = raw; (typeof current === "object" || typeof current === "function") && !LEAF_PROTOTYPES.includes(current); current = getProto(current)){
        for (const key of Object.getOwnPropertyNames(current)){
            getters[key] = createGetter(raw, key);
        }
    }
    // this is not really correct
    // we should set the `default` getter if the imported module is a `.cjs file`
    if (!(allowExportDefault && "default" in getters)) {
        getters["default"] = ()=>raw;
    }
    esm(ns, getters);
    return ns;
}
function createNS(raw) {
    if (typeof raw === "function") {
        return function(...args) {
            return raw.apply(this, args);
        };
    } else {
        return Object.create(null);
    }
}
function esmImport(id) {
    const module = getOrInstantiateModuleFromParent(id, this.m);
    if (module.error) throw module.error;
    // any ES module has to have `module.namespaceObject` defined.
    if (module.namespaceObject) return module.namespaceObject;
    // only ESM can be an async module, so we don't need to worry about exports being a promise here.
    const raw = module.exports;
    return module.namespaceObject = interopEsm(raw, createNS(raw), raw && raw.__esModule);
}
contextPrototype.i = esmImport;
function asyncLoader(moduleId) {
    const loader = this.r(moduleId);
    return loader(this.i.bind(this));
}
contextPrototype.A = asyncLoader;
// Add a simple runtime require so that environments without one can still pass
// `typeof require` CommonJS checks so that exports are correctly registered.
const runtimeRequire = // @ts-ignore
typeof require === "function" ? require : function require1() {
    throw new Error("Unexpected use of runtime require");
};
contextPrototype.t = runtimeRequire;
function commonJsRequire(id) {
    const module = getOrInstantiateModuleFromParent(id, this.m);
    if (module.error) throw module.error;
    return module.exports;
}
contextPrototype.r = commonJsRequire;
/**
 * `require.context` and require/import expression runtime.
 */ function moduleContext(map) {
    function moduleContext(id) {
        if (hasOwnProperty.call(map, id)) {
            return map[id].module();
        }
        const e = new Error(`Cannot find module '${id}'`);
        e.code = "MODULE_NOT_FOUND";
        throw e;
    }
    moduleContext.keys = ()=>{
        return Object.keys(map);
    };
    moduleContext.resolve = (id)=>{
        if (hasOwnProperty.call(map, id)) {
            return map[id].id();
        }
        const e = new Error(`Cannot find module '${id}'`);
        e.code = "MODULE_NOT_FOUND";
        throw e;
    };
    moduleContext.import = async (id)=>{
        return await moduleContext(id);
    };
    return moduleContext;
}
contextPrototype.f = moduleContext;
/**
 * Returns the path of a chunk defined by its data.
 */ function getChunkPath(chunkData) {
    return typeof chunkData === "string" ? chunkData : chunkData.path;
}
function isPromise(maybePromise) {
    return maybePromise != null && typeof maybePromise === "object" && "then" in maybePromise && typeof maybePromise.then === "function";
}
function isAsyncModuleExt(obj) {
    return turbopackQueues in obj;
}
function createPromise() {
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        reject = rej;
        resolve = res;
    });
    return {
        promise,
        resolve: resolve,
        reject: reject
    };
}
// everything below is adapted from webpack
// https://github.com/webpack/webpack/blob/6be4065ade1e252c1d8dcba4af0f43e32af1bdc1/lib/runtime/AsyncModuleRuntimeModule.js#L13
const turbopackQueues = Symbol("turbopack queues");
const turbopackExports = Symbol("turbopack exports");
const turbopackError = Symbol("turbopack error");
function resolveQueue(queue) {
    if (queue && queue.status !== 1) {
        queue.status = 1;
        queue.forEach((fn)=>fn.queueCount--);
        queue.forEach((fn)=>fn.queueCount-- ? fn.queueCount++ : fn());
    }
}
function wrapDeps(deps) {
    return deps.map((dep)=>{
        if (dep !== null && typeof dep === "object") {
            if (isAsyncModuleExt(dep)) return dep;
            if (isPromise(dep)) {
                const queue = Object.assign([], {
                    status: 0
                });
                const obj = {
                    [turbopackExports]: {},
                    [turbopackQueues]: (fn)=>fn(queue)
                };
                dep.then((res)=>{
                    obj[turbopackExports] = res;
                    resolveQueue(queue);
                }, (err)=>{
                    obj[turbopackError] = err;
                    resolveQueue(queue);
                });
                return obj;
            }
        }
        return {
            [turbopackExports]: dep,
            [turbopackQueues]: ()=>{}
        };
    });
}
function asyncModule(body, hasAwait) {
    const module = this.m;
    const queue = hasAwait ? Object.assign([], {
        status: -1
    }) : undefined;
    const depQueues = new Set();
    const { resolve, reject, promise: rawPromise } = createPromise();
    const promise = Object.assign(rawPromise, {
        [turbopackExports]: module.exports,
        [turbopackQueues]: (fn)=>{
            queue && fn(queue);
            depQueues.forEach(fn);
            promise["catch"](()=>{});
        }
    });
    const attributes = {
        get () {
            return promise;
        },
        set (v) {
            // Calling `esmExport` leads to this.
            if (v !== promise) {
                promise[turbopackExports] = v;
            }
        }
    };
    Object.defineProperty(module, "exports", attributes);
    Object.defineProperty(module, "namespaceObject", attributes);
    function handleAsyncDependencies(deps) {
        const currentDeps = wrapDeps(deps);
        const getResult = ()=>currentDeps.map((d)=>{
                if (d[turbopackError]) throw d[turbopackError];
                return d[turbopackExports];
            });
        const { promise, resolve } = createPromise();
        const fn = Object.assign(()=>resolve(getResult), {
            queueCount: 0
        });
        function fnQueue(q) {
            if (q !== queue && !depQueues.has(q)) {
                depQueues.add(q);
                if (q && q.status === 0) {
                    fn.queueCount++;
                    q.push(fn);
                }
            }
        }
        currentDeps.map((dep)=>dep[turbopackQueues](fnQueue));
        return fn.queueCount ? promise : getResult();
    }
    function asyncResult(err) {
        if (err) {
            reject(promise[turbopackError] = err);
        } else {
            resolve(promise[turbopackExports]);
        }
        resolveQueue(queue);
    }
    body(handleAsyncDependencies, asyncResult);
    if (queue && queue.status === -1) {
        queue.status = 0;
    }
}
contextPrototype.a = asyncModule;
/**
 * A pseudo "fake" URL object to resolve to its relative path.
 *
 * When UrlRewriteBehavior is set to relative, calls to the `new URL()` will construct url without base using this
 * runtime function to generate context-agnostic urls between different rendering context, i.e ssr / client to avoid
 * hydration mismatch.
 *
 * This is based on webpack's existing implementation:
 * https://github.com/webpack/webpack/blob/87660921808566ef3b8796f8df61bd79fc026108/lib/runtime/RelativeUrlRuntimeModule.js
 */ const relativeURL = function relativeURL(inputUrl) {
    const realUrl = new URL(inputUrl, "x:/");
    const values = {};
    for(const key in realUrl)values[key] = realUrl[key];
    values.href = inputUrl;
    values.pathname = inputUrl.replace(/[?#].*/, "");
    values.origin = values.protocol = "";
    values.toString = values.toJSON = (..._args)=>inputUrl;
    for(const key in values)Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        value: values[key]
    });
};
relativeURL.prototype = URL.prototype;
contextPrototype.U = relativeURL;
/**
 * Utility function to ensure all variants of an enum are handled.
 */ function invariant(never, computeMessage) {
    throw new Error(`Invariant: ${computeMessage(never)}`);
}
/**
 * A stub function to make `require` available but non-functional in ESM.
 */ function requireStub(_moduleId) {
    throw new Error("dynamic usage of require is not supported");
}
contextPrototype.z = requireStub;
/**
 * This file contains runtime types and functions that are shared between all
 * Turbopack *development* ECMAScript runtimes.
 *
 * It will be appended to the runtime code of each runtime right after the
 * shared runtime utils.
 */ /* eslint-disable @typescript-eslint/no-unused-vars */ /// <reference path="./globals.d.ts" />
/// <reference path="./runtime-utils.ts" />
// Used in WebWorkers to tell the runtime about the chunk base path
function normalizeChunkPath(path) {
    if (path.startsWith("/")) {
        path = path.substring(1);
    } else if (path.startsWith("./")) {
        path = path.substring(2);
    }
    if (path.endsWith("/")) {
        path = path.slice(0, -1);
    }
    return path;
}
const NORMALIZED_CHUNK_BASE_PATH = normalizeChunkPath(CHUNK_BASE_PATH);
const browserContextPrototype = Context.prototype;
var SourceType = /*#__PURE__*/ function(SourceType) {
    /**
   * The module was instantiated because it was included in an evaluated chunk's
   * runtime.
   * SourceData is a ChunkPath.
   */ SourceType[SourceType["Runtime"] = 0] = "Runtime";
    /**
   * The module was instantiated because a parent module imported it.
   * SourceData is a ModuleId.
   */ SourceType[SourceType["Parent"] = 1] = "Parent";
    /**
   * The module was instantiated because it was included in a chunk's hot module
   * update.
   * SourceData is an array of ModuleIds or undefined.
   */ SourceType[SourceType["Update"] = 2] = "Update";
    return SourceType;
}(SourceType || {});
const moduleFactories = Object.create(null);
contextPrototype.M = moduleFactories;
const availableModules = new Map();
const availableModuleChunks = new Map();
function factoryNotAvailable(moduleId, sourceType, sourceData) {
    let instantiationReason;
    switch(sourceType){
        case 0:
            instantiationReason = `as a runtime entry of chunk ${sourceData}`;
            break;
        case 1:
            instantiationReason = `because it was required from module ${sourceData}`;
            break;
        case 2:
            instantiationReason = "because of an HMR update";
            break;
        default:
            invariant(sourceType, (sourceType)=>`Unknown source type: ${sourceType}`);
    }
    throw new Error(`Module ${moduleId} was instantiated ${instantiationReason}, but the module factory is not available. It might have been deleted in an HMR update.`);
}
const loadedChunk = Promise.resolve(undefined);
const instrumentedBackendLoadChunks = new WeakMap();
// Do not make this async. React relies on referential equality of the returned Promise.
function loadChunkByUrl(chunkUrl) {
    return loadChunkByUrlInternal(1, this.m.id, chunkUrl);
}
browserContextPrototype.L = loadChunkByUrl;
// Do not make this async. React relies on referential equality of the returned Promise.
function loadChunkByUrlInternal(sourceType, sourceData, chunkUrl) {
    const thenable = BACKEND.loadChunkCached(sourceType, sourceData, chunkUrl);
    let entry = instrumentedBackendLoadChunks.get(thenable);
    if (entry === undefined) {
        const resolve = instrumentedBackendLoadChunks.set.bind(instrumentedBackendLoadChunks, thenable, loadedChunk);
        entry = thenable.then(resolve).catch((error)=>{
            let loadReason;
            switch(sourceType){
                case 0:
                    loadReason = `as a runtime dependency of chunk ${sourceData}`;
                    break;
                case 1:
                    loadReason = `from module ${sourceData}`;
                    break;
                case 2:
                    loadReason = "from an HMR update";
                    break;
                default:
                    invariant(sourceType, (sourceType)=>`Unknown source type: ${sourceType}`);
            }
            throw new Error(`Failed to load chunk ${chunkUrl} ${loadReason}${error ? `: ${error}` : ""}`, error ? {
                cause: error
            } : undefined);
        });
        instrumentedBackendLoadChunks.set(thenable, entry);
    }
    return entry;
}
// Do not make this async. React relies on referential equality of the returned Promise.
function loadChunkPath(sourceType, sourceData, chunkPath) {
    const url = getChunkRelativeUrl(chunkPath);
    return loadChunkByUrlInternal(sourceType, sourceData, url);
}
/**
 * Returns an absolute url to an asset.
 */ function resolvePathFromModule(moduleId) {
    const exported = this.r(moduleId);
    return exported?.default ?? exported;
}
browserContextPrototype.R = resolvePathFromModule;
/**
 * no-op for browser
 * @param modulePath
 */ function resolveAbsolutePath(modulePath) {
    return `/ROOT/${modulePath ?? ""}`;
}
browserContextPrototype.P = resolveAbsolutePath;
/**
 * Instantiates a runtime module.
 */ function instantiateRuntimeModule(moduleId, chunkPath) {
    return instantiateModule(moduleId, 0, chunkPath);
}
/**
 * Returns the URL relative to the origin where a chunk can be fetched from.
 */ function getChunkRelativeUrl(chunkPath) {
    return `${NORMALIZED_CHUNK_BASE_PATH}${chunkPath.split("/").map((p)=>encodeURIComponent(p)).join("/")}${CHUNK_SUFFIX_PATH}`;
}
function getPathFromScript(chunkScript) {
    if (typeof chunkScript === "string") {
        return chunkScript;
    }
    const chunkUrl = typeof TURBOPACK_NEXT_CHUNK_URLS !== "undefined" ? TURBOPACK_NEXT_CHUNK_URLS.pop() : chunkScript.getAttribute("src");
    const src = decodeURIComponent(chunkUrl.replace(/[?#].*$/, ""));
    const path = src.startsWith(CHUNK_BASE_PATH) ? src.slice(CHUNK_BASE_PATH.length) : src;
    return path;
}
function registerCompressedModuleFactory(moduleId, moduleFactory) {
    if (!moduleFactories[moduleId]) {
        if (Array.isArray(moduleFactory)) {
            let [moduleFactoryFn, otherIds] = moduleFactory;
            moduleFactories[moduleId] = moduleFactoryFn;
            for (const otherModuleId of otherIds){
                moduleFactories[otherModuleId] = moduleFactoryFn;
            }
        } else {
            moduleFactories[moduleId] = moduleFactory;
        }
    }
}
const regexJsUrl = /\.js(?:\?[^#]*)?(?:#.*)?$/;
/**
 * Checks if a given path/URL ends with .js, optionally followed by ?query or #fragment.
 */ function isJs(chunkUrlOrPath) {
    return regexJsUrl.test(chunkUrlOrPath);
}
/// <reference path="./runtime-base.ts" />
/// <reference path="./dummy.ts" />
const moduleCache = {};
contextPrototype.c = moduleCache;
/**
 * Gets or instantiates a runtime module.
 */ // @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getOrInstantiateRuntimeModule(chunkPath, moduleId) {
    const module = moduleCache[moduleId];
    if (module) {
        if (module.error) {
            throw module.error;
        }
        return module;
    }
    return instantiateModule(moduleId, SourceType.Runtime, chunkPath);
}
/**
 * Retrieves a module from the cache, or instantiate it if it is not cached.
 */ // Used by the backend
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getOrInstantiateModuleFromParent = (id, sourceModule)=>{
    const module = moduleCache[id];
    if (module) {
        return module;
    }
    return instantiateModule(id, SourceType.Parent, sourceModule.id);
};
function instantiateModule(id, sourceType, sourceData) {
    const moduleFactory = moduleFactories[id];
    if (typeof moduleFactory !== "function") {
        // This can happen if modules incorrectly handle HMR disposes/updates,
        // e.g. when they keep a `setTimeout` around which still executes old code
        // and contains e.g. a `require("something")` call.
        factoryNotAvailable(id, sourceType, sourceData);
    }
    const module = createModuleObject(id);
    moduleCache[id] = module;
    // NOTE(alexkirsz) This can fail when the module encounters a runtime error.
    try {
        const context = new Context(module);
        moduleFactory(context);
    } catch (error) {
        module.error = error;
        throw error;
    }
    module.loaded = true;
    if (module.namespaceObject && module.exports !== module.namespaceObject) {
        // in case of a circular dependency: cjs1 -> esm2 -> cjs1
        interopEsm(module.exports, module.namespaceObject);
    }
    return module;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function registerChunk([chunkScript, chunkModules, runtimeParams]) {
    const chunkPath = getPathFromScript(chunkScript);
    for (const [moduleId, moduleFactory] of Object.entries(chunkModules)){
        registerCompressedModuleFactory(moduleId, moduleFactory);
    }
    return BACKEND.registerChunk(chunkPath, runtimeParams);
}
/* eslint-disable @typescript-eslint/no-unused-vars */ /// <reference path="./runtime-utils.ts" />
/// A 'base' utilities to support runtime can have externals.
/// Currently this is for node.js / edge runtime both.
/// If a fn requires node.js specific behavior, it should be placed in `node-external-utils` instead.
async function externalImport(id) {
    let raw;
    try {
        raw = await import(id);
    } catch (err) {
        // TODO(alexkirsz) This can happen when a client-side module tries to load
        // an external module we don't provide a shim for (e.g. querystring, url).
        // For now, we fail semi-silently, but in the future this should be a
        // compilation error.
        throw new Error(`Failed to load external module ${id}: ${err}`);
    }
    if (raw && raw.__esModule && raw.default && "default" in raw.default) {
        return interopEsm(raw.default, createNS(raw), true);
    }
    return raw;
}
contextPrototype.y = externalImport;
function externalRequire(id, thunk, esm = false) {
    let raw;
    try {
        raw = thunk();
    } catch (err) {
        // TODO(alexkirsz) This can happen when a client-side module tries to load
        // an external module we don't provide a shim for (e.g. querystring, url).
        // For now, we fail semi-silently, but in the future this should be a
        // compilation error.
        throw new Error(`Failed to load external module ${id}: ${err}`);
    }
    if (!esm || raw.__esModule) {
        return raw;
    }
    return interopEsm(raw, createNS(raw), true);
}
externalRequire.resolve = (id, options)=>{
    return require.resolve(id, options);
};
contextPrototype.x = externalRequire;
/**
 * This file contains the runtime code specific to the Turbopack development
 * ECMAScript DOM runtime.
 *
 * It will be appended to the base development runtime code.
 */ /* eslint-disable @typescript-eslint/no-unused-vars */ /// <reference path="./runtime-base.ts" />
/// <reference path="./runtime-types.d.ts" />
let BACKEND;
/**
 * Maps chunk paths to the corresponding resolver.
 */ const chunkResolvers = new Map();
(()=>{
    BACKEND = {
        registerChunk (chunkPath, params) {
            const chunkUrl = getChunkRelativeUrl(chunkPath);
            const resolver = getOrCreateResolver(chunkUrl);
            resolver.resolve();
            if (params == null) {
                return;
            }
            for (const otherChunkData of params.otherChunks){
                const otherChunkPath = getChunkPath(otherChunkData);
                const otherChunkUrl = getChunkRelativeUrl(otherChunkPath);
                // Chunk might have started loading, so we want to avoid triggering another load.
                getOrCreateResolver(otherChunkUrl);
            }
            if (params.runtimeModuleIds.length > 0) {
                for (const moduleId of params.runtimeModuleIds){
                    getOrInstantiateRuntimeModule(chunkPath, moduleId);
                }
            }
        },
        /**
     * Loads the given chunk, and returns a promise that resolves once the chunk
     * has been loaded.
     */ loadChunkCached (sourceType, sourceData, chunkUrl) {
            return doLoadChunk(sourceType, sourceData, chunkUrl);
        }
    };
    function getOrCreateResolver(chunkUrl) {
        let resolver = chunkResolvers.get(chunkUrl);
        if (!resolver) {
            let resolve;
            let reject;
            const promise = new Promise((innerResolve, innerReject)=>{
                resolve = innerResolve;
                reject = innerReject;
            });
            resolver = {
                resolved: false,
                loadingStarted: false,
                promise,
                resolve: ()=>{
                    resolver.resolved = true;
                    resolve();
                },
                reject: reject
            };
            chunkResolvers.set(chunkUrl, resolver);
        }
        return resolver;
    }
    /**
   * Loads the given chunk, and returns a promise that resolves once the chunk
   * has been loaded.
   */ function doLoadChunk(sourceType, _sourceData, chunkUrl) {
        const resolver = getOrCreateResolver(chunkUrl);
        if (resolver.loadingStarted) {
            return resolver.promise;
        }
        if (sourceType === SourceType.Runtime) {
            // We don't need to load chunks references from runtime code, as they're already
            // present in the DOM.
            resolver.loadingStarted = true;
            // We need to wait for JS chunks to register themselves within `registerChunk`
            // before we can start instantiating runtime modules, hence the absence of
            // `resolver.resolve()` in this branch.
            return resolver.promise;
        }
        if (typeof importScripts === "function") {
            // We're in a web worker
            if (isJs(chunkUrl)) {
                self.TURBOPACK_NEXT_CHUNK_URLS.push(chunkUrl);
                importScripts(TURBOPACK_WORKER_LOCATION + chunkUrl);
            } else {
                throw new Error(`can't infer type of chunk from URL ${chunkUrl} in worker`);
            }
        } else {
            // TODO(PACK-2140): remove this once all filenames are guaranteed to be escaped.
            const decodedChunkUrl = decodeURI(chunkUrl);
            if (isJs(chunkUrl)) {
                const previousScripts = document.querySelectorAll(`script[src="${chunkUrl}"],script[src^="${chunkUrl}?"],script[src="${decodedChunkUrl}"],script[src^="${decodedChunkUrl}?"]`);
                if (previousScripts.length > 0) {
                    // There is this edge where the script already failed loading, but we
                    // can't detect that. The Promise will never resolve in this case.
                    for (const script of Array.from(previousScripts)){
                        script.addEventListener("error", ()=>{
                            resolver.reject();
                        });
                    }
                } else {
                    const script = document.createElement("script");
                    script.src = chunkUrl;
                    // We'll only mark the chunk as loaded once the script has been executed,
                    // which happens in `registerChunk`. Hence the absence of `resolve()` in
                    // this branch.
                    script.onerror = ()=>{
                        resolver.reject();
                    };
                    // Append to the `head` for webpack compatibility.
                    document.head.appendChild(script);
                }
            } else {
                throw new Error(`can't infer type of chunk from URL ${chunkUrl}`);
            }
        }
        resolver.loadingStarted = true;
        return resolver.promise;
    }
})();
const chunksToRegister = __TURBOPACK__;
__TURBOPACK__ = { push: registerChunk };
chunksToRegister.forEach(registerChunk);
function factory () {
    const runtimeModuleIds = ["8738"];
    if (runtimeModuleIds.length > 0) {
        const module = moduleCache[runtimeModuleIds[0]];
        if (module.error) throw module.error;
        // any ES module has to have `module.namespaceObject` defined.
        if (module.namespaceObject) return module.namespaceObject;
        // only ESM can be an async module, so we don't need to worry about exports being a promise here.
        const raw = module.exports;
        return module.namespaceObject = interopEsm(raw, createNS(raw), raw && raw.__esModule);
    }
}

if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = factory();
} else if (typeof exports === 'object') {
    exports["antdx"] = factory();
} else {
    globalThis["antdx"] = factory();
}
})([["antdx.js", {

7057: ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
function jsxProd(type, config, maybeKey) {
    var key = null;
    void 0 !== maybeKey && (key = "" + maybeKey);
    void 0 !== config.key && (key = "" + config.key);
    if ("key" in config) {
        maybeKey = {};
        for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
    } else maybeKey = config;
    config = maybeKey.ref;
    return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key,
        ref: void 0 !== config ? config : null,
        props: maybeKey
    };
}
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsxProd;
exports.jsxs = jsxProd;
}}),
7084: ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
if ("TURBOPACK compile-time truthy", 1) {
    module.exports = __turbopack_context__.r(7057);
} else //TURBOPACK unreachable
;
}}),
7454: ((__turbopack_context__) => {
"use strict";

let mod; if (typeof exports === 'object' && typeof module === 'object') { mod = __turbopack_context__.x("antd", () => require("antd")); } else { mod = globalThis["antd"] }

__turbopack_context__.v(mod);
}),
1446: ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    'use strict';
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
        var classes = '';
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (arg) {
                classes = appendClass(classes, parseValue(arg));
            }
        }
        return classes;
    }
    function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
            return arg;
        }
        if (typeof arg !== 'object') {
            return '';
        }
        if (Array.isArray(arg)) {
            return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
            return arg.toString();
        }
        var classes = '';
        for(var key in arg){
            if (hasOwn.call(arg, key) && arg[key]) {
                classes = appendClass(classes, key);
            }
        }
        return classes;
    }
    function appendClass(value, newClass) {
        if (!newClass) {
            return value;
        }
        if (value) {
            return value + ' ' + newClass;
        }
        return value + newClass;
    }
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        // register as 'classnames', consistent with npm package name
        ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
            return classNames;
        }());
    } else {
        window.classNames = classNames;
    }
})();
}}),
8583: ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
8423: ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
function _typeof(o) {
    "@babel/helpers - typeof";
    return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
3634: ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
var _typeof = __turbopack_context__.r(8423)["default"];
function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
883: ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
var _typeof = __turbopack_context__.r(8423)["default"];
var toPrimitive = __turbopack_context__.r(3634);
function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
5017: ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
var toPropertyKey = __turbopack_context__.r(883);
function _defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
4773: ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
var defineProperty = __turbopack_context__.r(5017);
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
9394: ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var _interopRequireDefault = __turbopack_context__.r(8583).default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = pickAttrs;
var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(4773));
var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
/* eslint-enable max-len */ var ariaPrefix = 'aria-';
var dataPrefix = 'data-';
function match(key, prefix) {
    return key.indexOf(prefix) === 0;
}
/**
 * Picker props from exist props with filter
 * @param props Passed props
 * @param ariaOnly boolean | { aria?: boolean; data?: boolean; attr?: boolean; } filter config
 */ function pickAttrs(props) {
    var ariaOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var mergedConfig;
    if (ariaOnly === false) {
        mergedConfig = {
            aria: true,
            data: true,
            attr: true
        };
    } else if (ariaOnly === true) {
        mergedConfig = {
            aria: true
        };
    } else {
        mergedConfig = (0, _objectSpread2.default)({}, ariaOnly);
    }
    var attrs = {};
    Object.keys(props).forEach(function(key) {
        if (// Aria
        mergedConfig.aria && (key === 'role' || match(key, ariaPrefix)) || // Data
        mergedConfig.data && match(key, dataPrefix) || // Attr
        mergedConfig.attr && propList.includes(key)) {
            attrs[key] = props[key];
        }
    });
    return attrs;
}
}}),
2211: ((__turbopack_context__) => {
"use strict";

let mod; if (typeof exports === 'object' && typeof module === 'object') { mod = __turbopack_context__.x("react", () => require("react")); } else { mod = globalThis["React"] }

__turbopack_context__.v(mod);
}),
9588: ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), k = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u;
u = Symbol.for("react.module.reference");
function v(a) {
    if ("object" === typeof a && null !== a) {
        var r = a.$$typeof;
        switch(r){
            case b:
                switch(a = a.type, a){
                    case d:
                    case f:
                    case e:
                    case m:
                    case n:
                        return a;
                    default:
                        switch(a = a && a.$$typeof, a){
                            case k:
                            case h:
                            case l:
                            case q:
                            case p:
                            case g:
                                return a;
                            default:
                                return r;
                        }
                }
            case c:
                return r;
        }
    }
}
exports.ContextConsumer = h;
exports.ContextProvider = g;
exports.Element = b;
exports.ForwardRef = l;
exports.Fragment = d;
exports.Lazy = q;
exports.Memo = p;
exports.Portal = c;
exports.Profiler = f;
exports.StrictMode = e;
exports.Suspense = m;
exports.SuspenseList = n;
exports.isAsyncMode = function() {
    return !1;
};
exports.isConcurrentMode = function() {
    return !1;
};
exports.isContextConsumer = function(a) {
    return v(a) === h;
};
exports.isContextProvider = function(a) {
    return v(a) === g;
};
exports.isElement = function(a) {
    return "object" === typeof a && null !== a && a.$$typeof === b;
};
exports.isForwardRef = function(a) {
    return v(a) === l;
};
exports.isFragment = function(a) {
    return v(a) === d;
};
exports.isLazy = function(a) {
    return v(a) === q;
};
exports.isMemo = function(a) {
    return v(a) === p;
};
exports.isPortal = function(a) {
    return v(a) === c;
};
exports.isProfiler = function(a) {
    return v(a) === f;
};
exports.isStrictMode = function(a) {
    return v(a) === e;
};
exports.isSuspense = function(a) {
    return v(a) === m;
};
exports.isSuspenseList = function(a) {
    return v(a) === n;
};
exports.isValidElementType = function(a) {
    return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? !0 : !1;
};
exports.typeOf = v;
}}),
4354: ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
if ("TURBOPACK compile-time truthy", 1) {
    module.exports = __turbopack_context__.r(9588);
} else //TURBOPACK unreachable
;
}}),
6115: ((__turbopack_context__) => {
"use strict";

let mod; if (typeof exports === 'object' && typeof module === 'object') { mod = __turbopack_context__.x("react-dom", () => require("react-dom")); } else { mod = globalThis["ReactDOM"] }

__turbopack_context__.v(mod);
}),
1229: ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = get;
function get(entity, path) {
    var current = entity;
    for(var i = 0; i < path.length; i += 1){
        if (current === null || current === undefined) {
            return undefined;
        }
        current = current[path[i]];
    }
    return current;
}
}}),
9862: ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
var _typeof = __turbopack_context__.r(8423)["default"];
function _interopRequireWildcard(e, t) {
    if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap();
    return (module.exports = _interopRequireWildcard = function _interopRequireWildcard(e, t) {
        if (!t && e && e.__esModule) return e;
        var o, i, f = {
            __proto__: null,
            "default": e
        };
        if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;
        if (o = t ? n : r) {
            if (o.has(e)) return o.get(e);
            o.set(e, f);
        }
        for(var _t in e)"default" !== _t && ({}).hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);
        return f;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports)(e, t);
}
module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
6832: ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = canUseDom;
function canUseDom() {
    return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
}}),
7087: ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var _interopRequireDefault = __turbopack_context__.r(8583).default;
var _interopRequireWildcard = __turbopack_context__.r(9862).default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useLayoutUpdateEffect = exports.default = void 0;
var React = _interopRequireWildcard(__turbopack_context__.r(2211));
var _canUseDom = _interopRequireDefault(__turbopack_context__.r(6832));
/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */ var useInternalLayoutEffect = ("TURBOPACK compile-time value", "production") !== 'test' && (0, _canUseDom.default)() ? React.useLayoutEffect : React.useEffect;
var useLayoutEffect = function useLayoutEffect(callback, deps) {
    var firstMountRef = React.useRef(true);
    useInternalLayoutEffect(function() {
        return callback(firstMountRef.current);
    }, deps);
    // We tell react that first mount has passed
    useInternalLayoutEffect(function() {
        firstMountRef.current = false;
        return function() {
            firstMountRef.current = true;
        };
    }, []);
};
var useLayoutUpdateEffect = exports.useLayoutUpdateEffect = function useLayoutUpdateEffect(callback, deps) {
    useLayoutEffect(function(firstMount) {
        if (!firstMount) {
            return callback();
        }
    }, deps);
};
var _default = exports.default = useLayoutEffect;
}}),
1071: ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
1653: ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
3735: ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
1246: ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
var arrayLikeToArray = __turbopack_context__.r(3735);
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return arrayLikeToArray(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
    }
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
8958: ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
8010: ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
var arrayWithHoles = __turbopack_context__.r(1071);
var iterableToArrayLimit = __turbopack_context__.r(1653);
var unsupportedIterableToArray = __turbopack_context__.r(1246);
var nonIterableRest = __turbopack_context__.r(8958);
function _slicedToArray(r, e) {
    return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
5049: ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var _interopRequireWildcard = __turbopack_context__.r(9862).default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = useEvent;
var React = _interopRequireWildcard(__turbopack_context__.r(2211));
function useEvent(callback) {
    var fnRef = React.useRef();
    fnRef.current = callback;
    var memoFn = React.useCallback(function() {
        var _fnRef$current;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [
            fnRef
        ].concat(args));
    }, []);
    return memoFn;
}
}}),
985: ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var _interopRequireWildcard = __turbopack_context__.r(9862).default;
var _interopRequireDefault = __turbopack_context__.r(8583).default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = useSafeState;
var _slicedToArray2 = _interopRequireDefault(__turbopack_context__.r(8010));
var React = _interopRequireWildcard(__turbopack_context__.r(2211));
/**
 * Same as React.useState but `setState` accept `ignoreDestroy` param to not to setState after destroyed.
 * We do not make this auto is to avoid real memory leak.
 * Developer should confirm it's safe to ignore themselves.
 */ function useSafeState(defaultValue) {
    var destroyRef = React.useRef(false);
    var _React$useState = React.useState(defaultValue), _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2), value = _React$useState2[0], setValue = _React$useState2[1];
    React.useEffect(function() {
        destroyRef.current = false;
        return function() {
            destroyRef.current = true;
        };
    }, []);
    function safeSetState(updater, ignoreDestroy) {
        if (ignoreDestroy && destroyRef.current) {
            return;
        }
        setValue(updater);
    }
    return [
        value,
        safeSetState
    ];
}
}}),
3717: ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var _interopRequireDefault = __turbopack_context__.r(8583).default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = useMergedState;
var _slicedToArray2 = _interopRequireDefault(__turbopack_context__.r(8010));
var _useEvent = _interopRequireDefault(__turbopack_context__.r(5049));
var _useLayoutEffect = __turbopack_context__.r(7087);
var _useState5 = _interopRequireDefault(__turbopack_context__.r(985));
/** We only think `undefined` is empty */ function hasValue(value) {
    return value !== undefined;
}
/**
 * Similar to `useState` but will use props value if provided.
 * Note that internal use rc-util `useState` hook.
 */ function useMergedState(defaultStateValue, option) {
    var _ref = option || {}, defaultValue = _ref.defaultValue, value = _ref.value, onChange = _ref.onChange, postState = _ref.postState;
    // ======================= Init =======================
    var _useState = (0, _useState5.default)(function() {
        if (hasValue(value)) {
            return value;
        } else if (hasValue(defaultValue)) {
            return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        } else {
            return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
        }
    }), _useState2 = (0, _slicedToArray2.default)(_useState, 2), innerValue = _useState2[0], setInnerValue = _useState2[1];
    var mergedValue = value !== undefined ? value : innerValue;
    var postMergedValue = postState ? postState(mergedValue) : mergedValue;
    // ====================== Change ======================
    var onChangeFn = (0, _useEvent.default)(onChange);
    var _useState3 = (0, _useState5.default)([
        mergedValue
    ]), _useState4 = (0, _slicedToArray2.default)(_useState3, 2), prevValue = _useState4[0], setPrevValue = _useState4[1];
    (0, _useLayoutEffect.useLayoutUpdateEffect)(function() {
        var prev = prevValue[0];
        if (innerValue !== prev) {
            onChangeFn(innerValue, prev);
        }
    }, [
        prevValue
    ]);
    // Sync value back to `undefined` when it from control to un-control
    (0, _useLayoutEffect.useLayoutUpdateEffect)(function() {
        if (!hasValue(value)) {
            setInnerValue(value);
        }
    }, [
        value
    ]);
    // ====================== Update ======================
    var triggerChange = (0, _useEvent.default)(function(updater, ignoreDestroy) {
        setInnerValue(updater, ignoreDestroy);
        setPrevValue([
            mergedValue
        ], ignoreDestroy);
    });
    return [
        postMergedValue,
        triggerChange
    ];
}
}}),
8738: ((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/components/index.ts [library] (ecmascript)
;
__turbopack_context__.s({
    "Actions": ()=>__TURBOPACK__default__export__53,
    "Attachments": ()=>__TURBOPACK__default__export__92,
    "Bubble": ()=>__TURBOPACK__default__export__119,
    "Conversations": ()=>__TURBOPACK__default__export__124,
    "Prompts": ()=>__TURBOPACK__default__export__126,
    "Sender": ()=>__TURBOPACK__default__export__111,
    "Suggestion": ()=>__TURBOPACK__default__export__134,
    "ThoughtChain": ()=>__TURBOPACK__default__export__132,
    "Welcome": ()=>__TURBOPACK__default__export__136,
    "XProvider": ()=>__TURBOPACK__default__export__137,
    "XRequest": ()=>__TURBOPACK__default__export__140,
    "XStream": ()=>__TURBOPACK__default__export__138,
    "useXAgent": ()=>useXAgent,
    "useXChat": ()=>useXChat,
    "version": ()=>__TURBOPACK__default__export__1
}, 8738);
// MERGED MODULE: [project]/components/index.ts [library] (ecmascript) <module evaluation>
;
// MERGED MODULE: [project]/components/index.ts [library] (ecmascript) <locals>
;
__turbopack_context__.s({}, 1096);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// MERGED MODULE: [project]/components/index.ts [library] (ecmascript) <exports>
;
__turbopack_context__.s({
    "Actions": ()=>__TURBOPACK__default__export__53,
    "Attachments": ()=>__TURBOPACK__default__export__92,
    "Bubble": ()=>__TURBOPACK__default__export__119,
    "Conversations": ()=>__TURBOPACK__default__export__124,
    "Prompts": ()=>__TURBOPACK__default__export__126,
    "Sender": ()=>__TURBOPACK__default__export__111,
    "Suggestion": ()=>__TURBOPACK__default__export__134,
    "ThoughtChain": ()=>__TURBOPACK__default__export__132,
    "Welcome": ()=>__TURBOPACK__default__export__136,
    "XProvider": ()=>__TURBOPACK__default__export__137,
    "XRequest": ()=>__TURBOPACK__default__export__140,
    "XStream": ()=>__TURBOPACK__default__export__138,
    "useXAgent": ()=>useXAgent,
    "useXChat": ()=>useXChat,
    "version": ()=>__TURBOPACK__default__export__1
}, 2088);
// MERGED MODULE: [project]/components/version/index.ts [library] (ecmascript)
;
// MERGED MODULE: [project]/components/version/version.ts [library] (ecmascript)
;
const __TURBOPACK__default__export__ = '1.6.1';
;
const __TURBOPACK__default__export__1 = __TURBOPACK__default__export__;
// MERGED MODULE: [project]/components/actions/index.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__ = __turbopack_context__.i(7084);
var __TURBOPACK__imported__module__7454__ = __turbopack_context__.i(7454);
var __TURBOPACK__imported__module__1446__ = __turbopack_context__.i(1446);
var __TURBOPACK__imported__module__9394__ = __turbopack_context__.i(9394);
// MERGED MODULE: [project]/components/_util/hooks/use-x-component-config.ts [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__ = __turbopack_context__.i(2211);
// MERGED MODULE: [project]/components/x-provider/context.ts [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__1 = __TURBOPACK__imported__module__2211__;
;
const XProviderContext = /*#__PURE__*/ __TURBOPACK__imported__module__2211__1["default"].createContext({});
const __TURBOPACK__default__export__2 = XProviderContext;
;
;
const defaultXComponentStyleConfig = {
    classNames: {},
    styles: {},
    className: '',
    style: {}
};
const useXComponentConfig = (component)=>{
    const xProviderContext = __TURBOPACK__imported__module__2211__["default"].useContext(__TURBOPACK__default__export__2);
    return __TURBOPACK__imported__module__2211__["default"].useMemo(()=>({
            ...defaultXComponentStyleConfig,
            ...xProviderContext[component]
        }), [
        xProviderContext[component]
    ]);
};
const __TURBOPACK__default__export__3 = useXComponentConfig;
// MERGED MODULE: [project]/components/x-provider/hooks/use-x-provider-context.ts [library] (ecmascript) <export default as useXProviderContext>
;
// MERGED MODULE: [project]/components/x-provider/hooks/use-x-provider-context.ts [library] (ecmascript)
;
var __TURBOPACK__imported__module__7454__1 = __TURBOPACK__imported__module__7454__;
var __TURBOPACK__imported__module__2211__2 = __TURBOPACK__imported__module__2211__;
;
;
const defaultPrefixCls = 'ant';
function useXProviderContext() {
    const { getPrefixCls, direction, csp, iconPrefixCls, theme } = __TURBOPACK__imported__module__2211__2["default"].useContext(__TURBOPACK__imported__module__7454__1["ConfigProvider"].ConfigContext);
    return {
        theme,
        getPrefixCls,
        direction,
        csp,
        iconPrefixCls
    };
}
const __TURBOPACK__default__export__4 = useXProviderContext;
// MERGED MODULE: [project]/components/actions/ActionMenu.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__1 = __TURBOPACK__imported__module__7084__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js [library] (ecmascript) <export default as EllipsisOutlined>
;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/extends.js [library] (ecmascript)
;
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
var __TURBOPACK__imported__module__2211__3 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons-svg/es/asn/EllipsisOutlined.js [library] (ecmascript)
;
// This icon file is generated automatically.
var EllipsisOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"
                }
            }
        ]
    },
    "name": "ellipsis",
    "theme": "outlined"
};
const __TURBOPACK__default__export__5 = EllipsisOutlined;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/components/AntdIcon.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js [library] (ecmascript)
;
function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js [library] (ecmascript)
;
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js [library] (ecmascript)
;
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
;
;
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
}
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js [library] (ecmascript)
;
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;
;
;
;
;
function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/typeof.js [library] (ecmascript)
;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [library] (ecmascript)
;
;
function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
;
;
function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
;
;
function _defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [library] (ecmascript)
;
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
;
var __TURBOPACK__imported__module__2211__4 = __TURBOPACK__imported__module__2211__;
var __TURBOPACK__imported__module__1446__1 = __TURBOPACK__imported__module__1446__;
// MERGED MODULE: [project]/node_modules/@ant-design/colors/es/index.js [library] (ecmascript) <module evaluation>
;
// MERGED MODULE: [project]/node_modules/@ant-design/colors/es/generate.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@ant-design/fast-color/es/index.js [library] (ecmascript) <module evaluation>
;
// MERGED MODULE: [project]/node_modules/@ant-design/fast-color/es/FastColor.js [library] (ecmascript)
;
;
const round = Math.round;
/**
 * Support format, alpha unit will check the % mark:
 * - rgba(102, 204, 255, .5)      -> [102, 204, 255, 0.5]
 * - rgb(102 204 255 / .5)        -> [102, 204, 255, 0.5]
 * - rgb(100%, 50%, 0% / 50%)     -> [255, 128, 0, 0.5]
 * - hsl(270, 60, 40, .5)         -> [270, 60, 40, 0.5]
 * - hsl(270deg 60% 40% / 50%)   -> [270, 60, 40, 0.5]
 *
 * When `base` is provided, the percentage value will be divided by `base`.
 */ function splitColorStr(str, parseNum) {
    const match = str// Remove str before `(`
    .replace(/^[^(]*\((.*)/, '$1')// Remove str after `)`
    .replace(/\).*/, '').match(/\d*\.?\d+%?/g) || [];
    const numList = match.map((item)=>parseFloat(item));
    for(let i = 0; i < 3; i += 1){
        numList[i] = parseNum(numList[i] || 0, match[i] || '', i);
    }
    // For alpha. 50% should be 0.5
    if (match[3]) {
        numList[3] = match[3].includes('%') ? numList[3] / 100 : numList[3];
    } else {
        // By default, alpha is 1
        numList[3] = 1;
    }
    return numList;
}
const parseHSVorHSL = (num, _, index)=>index === 0 ? num : num / 100;
/** round and limit number to integer between 0-255 */ function limitRange(value, max) {
    const mergedMax = max || 255;
    if (value > mergedMax) {
        return mergedMax;
    }
    if (value < 0) {
        return 0;
    }
    return value;
}
class FastColor {
    constructor(input){
        /**
     * All FastColor objects are valid. So isValid is always true. This property is kept to be compatible with TinyColor.
     */ _defineProperty(this, "isValid", true);
        /**
     * Red, R in RGB
     */ _defineProperty(this, "r", 0);
        /**
     * Green, G in RGB
     */ _defineProperty(this, "g", 0);
        /**
     * Blue, B in RGB
     */ _defineProperty(this, "b", 0);
        /**
     * Alpha/Opacity, A in RGBA/HSLA
     */ _defineProperty(this, "a", 1);
        // HSV privates
        _defineProperty(this, "_h", void 0);
        _defineProperty(this, "_s", void 0);
        _defineProperty(this, "_l", void 0);
        _defineProperty(this, "_v", void 0);
        // intermediate variables to calculate HSL/HSV
        _defineProperty(this, "_max", void 0);
        _defineProperty(this, "_min", void 0);
        _defineProperty(this, "_brightness", void 0);
        /**
     * Always check 3 char in the object to determine the format.
     * We not use function in check to save bundle size.
     * e.g. 'rgb' -> { r: 0, g: 0, b: 0 }.
     */ function matchFormat(str) {
            return str[0] in input && str[1] in input && str[2] in input;
        }
        if (!input) {
        // Do nothing since already initialized
        } else if (typeof input === 'string') {
            const trimStr = input.trim();
            function matchPrefix(prefix) {
                return trimStr.startsWith(prefix);
            }
            if (/^#?[A-F\d]{3,8}$/i.test(trimStr)) {
                this.fromHexString(trimStr);
            } else if (matchPrefix('rgb')) {
                this.fromRgbString(trimStr);
            } else if (matchPrefix('hsl')) {
                this.fromHslString(trimStr);
            } else if (matchPrefix('hsv') || matchPrefix('hsb')) {
                this.fromHsvString(trimStr);
            }
        } else if (input instanceof FastColor) {
            this.r = input.r;
            this.g = input.g;
            this.b = input.b;
            this.a = input.a;
            this._h = input._h;
            this._s = input._s;
            this._l = input._l;
            this._v = input._v;
        } else if (matchFormat('rgb')) {
            this.r = limitRange(input.r);
            this.g = limitRange(input.g);
            this.b = limitRange(input.b);
            this.a = typeof input.a === 'number' ? limitRange(input.a, 1) : 1;
        } else if (matchFormat('hsl')) {
            this.fromHsl(input);
        } else if (matchFormat('hsv')) {
            this.fromHsv(input);
        } else {
            throw new Error('@ant-design/fast-color: unsupported input ' + JSON.stringify(input));
        }
    }
    // ======================= Setter =======================
    setR(value) {
        return this._sc('r', value);
    }
    setG(value) {
        return this._sc('g', value);
    }
    setB(value) {
        return this._sc('b', value);
    }
    setA(value) {
        return this._sc('a', value, 1);
    }
    setHue(value) {
        const hsv = this.toHsv();
        hsv.h = value;
        return this._c(hsv);
    }
    // ======================= Getter =======================
    /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */ getLuminance() {
        function adjustGamma(raw) {
            const val = raw / 255;
            return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
        }
        const R = adjustGamma(this.r);
        const G = adjustGamma(this.g);
        const B = adjustGamma(this.b);
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    }
    getHue() {
        if (typeof this._h === 'undefined') {
            const delta = this.getMax() - this.getMin();
            if (delta === 0) {
                this._h = 0;
            } else {
                this._h = round(60 * (this.r === this.getMax() ? (this.g - this.b) / delta + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / delta + 2 : (this.r - this.g) / delta + 4));
            }
        }
        return this._h;
    }
    getSaturation() {
        if (typeof this._s === 'undefined') {
            const delta = this.getMax() - this.getMin();
            if (delta === 0) {
                this._s = 0;
            } else {
                this._s = delta / this.getMax();
            }
        }
        return this._s;
    }
    getLightness() {
        if (typeof this._l === 'undefined') {
            this._l = (this.getMax() + this.getMin()) / 510;
        }
        return this._l;
    }
    getValue() {
        if (typeof this._v === 'undefined') {
            this._v = this.getMax() / 255;
        }
        return this._v;
    }
    /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */ getBrightness() {
        if (typeof this._brightness === 'undefined') {
            this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1000;
        }
        return this._brightness;
    }
    // ======================== Func ========================
    darken(amount = 10) {
        const h = this.getHue();
        const s = this.getSaturation();
        let l = this.getLightness() - amount / 100;
        if (l < 0) {
            l = 0;
        }
        return this._c({
            h,
            s,
            l,
            a: this.a
        });
    }
    lighten(amount = 10) {
        const h = this.getHue();
        const s = this.getSaturation();
        let l = this.getLightness() + amount / 100;
        if (l > 1) {
            l = 1;
        }
        return this._c({
            h,
            s,
            l,
            a: this.a
        });
    }
    /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */ mix(input, amount = 50) {
        const color = this._c(input);
        const p = amount / 100;
        const calc = (key)=>(color[key] - this[key]) * p + this[key];
        const rgba = {
            r: round(calc('r')),
            g: round(calc('g')),
            b: round(calc('b')),
            a: round(calc('a') * 100) / 100
        };
        return this._c(rgba);
    }
    /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */ tint(amount = 10) {
        return this.mix({
            r: 255,
            g: 255,
            b: 255,
            a: 1
        }, amount);
    }
    /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */ shade(amount = 10) {
        return this.mix({
            r: 0,
            g: 0,
            b: 0,
            a: 1
        }, amount);
    }
    onBackground(background) {
        const bg = this._c(background);
        const alpha = this.a + bg.a * (1 - this.a);
        const calc = (key)=>{
            return round((this[key] * this.a + bg[key] * bg.a * (1 - this.a)) / alpha);
        };
        return this._c({
            r: calc('r'),
            g: calc('g'),
            b: calc('b'),
            a: alpha
        });
    }
    // ======================= Status =======================
    isDark() {
        return this.getBrightness() < 128;
    }
    isLight() {
        return this.getBrightness() >= 128;
    }
    // ======================== MISC ========================
    equals(other) {
        return this.r === other.r && this.g === other.g && this.b === other.b && this.a === other.a;
    }
    clone() {
        return this._c(this);
    }
    // ======================= Format =======================
    toHexString() {
        let hex = '#';
        const rHex = (this.r || 0).toString(16);
        hex += rHex.length === 2 ? rHex : '0' + rHex;
        const gHex = (this.g || 0).toString(16);
        hex += gHex.length === 2 ? gHex : '0' + gHex;
        const bHex = (this.b || 0).toString(16);
        hex += bHex.length === 2 ? bHex : '0' + bHex;
        if (typeof this.a === 'number' && this.a >= 0 && this.a < 1) {
            const aHex = round(this.a * 255).toString(16);
            hex += aHex.length === 2 ? aHex : '0' + aHex;
        }
        return hex;
    }
    /** CSS support color pattern */ toHsl() {
        return {
            h: this.getHue(),
            s: this.getSaturation(),
            l: this.getLightness(),
            a: this.a
        };
    }
    /** CSS support color pattern */ toHslString() {
        const h = this.getHue();
        const s = round(this.getSaturation() * 100);
        const l = round(this.getLightness() * 100);
        return this.a !== 1 ? `hsla(${h},${s}%,${l}%,${this.a})` : `hsl(${h},${s}%,${l}%)`;
    }
    /** Same as toHsb */ toHsv() {
        return {
            h: this.getHue(),
            s: this.getSaturation(),
            v: this.getValue(),
            a: this.a
        };
    }
    toRgb() {
        return {
            r: this.r,
            g: this.g,
            b: this.b,
            a: this.a
        };
    }
    toRgbString() {
        return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
    }
    toString() {
        return this.toRgbString();
    }
    // ====================== Privates ======================
    /** Return a new FastColor object with one channel changed */ _sc(rgb, value, max) {
        const clone = this.clone();
        clone[rgb] = limitRange(value, max);
        return clone;
    }
    _c(input) {
        return new this.constructor(input);
    }
    getMax() {
        if (typeof this._max === 'undefined') {
            this._max = Math.max(this.r, this.g, this.b);
        }
        return this._max;
    }
    getMin() {
        if (typeof this._min === 'undefined') {
            this._min = Math.min(this.r, this.g, this.b);
        }
        return this._min;
    }
    fromHexString(trimStr) {
        const withoutPrefix = trimStr.replace('#', '');
        function connectNum(index1, index2) {
            return parseInt(withoutPrefix[index1] + withoutPrefix[index2 || index1], 16);
        }
        if (withoutPrefix.length < 6) {
            // #rgb or #rgba
            this.r = connectNum(0);
            this.g = connectNum(1);
            this.b = connectNum(2);
            this.a = withoutPrefix[3] ? connectNum(3) / 255 : 1;
        } else {
            // #rrggbb or #rrggbbaa
            this.r = connectNum(0, 1);
            this.g = connectNum(2, 3);
            this.b = connectNum(4, 5);
            this.a = withoutPrefix[6] ? connectNum(6, 7) / 255 : 1;
        }
    }
    fromHsl({ h, s, l, a }) {
        this._h = h % 360;
        this._s = s;
        this._l = l;
        this.a = typeof a === 'number' ? a : 1;
        if (s <= 0) {
            const rgb = round(l * 255);
            this.r = rgb;
            this.g = rgb;
            this.b = rgb;
        }
        let r = 0, g = 0, b = 0;
        const huePrime = h / 60;
        const chroma = (1 - Math.abs(2 * l - 1)) * s;
        const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
        if (huePrime >= 0 && huePrime < 1) {
            r = chroma;
            g = secondComponent;
        } else if (huePrime >= 1 && huePrime < 2) {
            r = secondComponent;
            g = chroma;
        } else if (huePrime >= 2 && huePrime < 3) {
            g = chroma;
            b = secondComponent;
        } else if (huePrime >= 3 && huePrime < 4) {
            g = secondComponent;
            b = chroma;
        } else if (huePrime >= 4 && huePrime < 5) {
            r = secondComponent;
            b = chroma;
        } else if (huePrime >= 5 && huePrime < 6) {
            r = chroma;
            b = secondComponent;
        }
        const lightnessModification = l - chroma / 2;
        this.r = round((r + lightnessModification) * 255);
        this.g = round((g + lightnessModification) * 255);
        this.b = round((b + lightnessModification) * 255);
    }
    fromHsv({ h, s, v, a }) {
        this._h = h % 360;
        this._s = s;
        this._v = v;
        this.a = typeof a === 'number' ? a : 1;
        const vv = round(v * 255);
        this.r = vv;
        this.g = vv;
        this.b = vv;
        if (s <= 0) {
            return;
        }
        const hh = h / 60;
        const i = Math.floor(hh);
        const ff = hh - i;
        const p = round(v * (1.0 - s) * 255);
        const q = round(v * (1.0 - s * ff) * 255);
        const t = round(v * (1.0 - s * (1.0 - ff)) * 255);
        switch(i){
            case 0:
                this.g = t;
                this.b = p;
                break;
            case 1:
                this.r = q;
                this.b = p;
                break;
            case 2:
                this.r = p;
                this.b = t;
                break;
            case 3:
                this.r = p;
                this.g = q;
                break;
            case 4:
                this.r = t;
                this.g = p;
                break;
            case 5:
            default:
                this.g = p;
                this.b = q;
                break;
        }
    }
    fromHsvString(trimStr) {
        const cells = splitColorStr(trimStr, parseHSVorHSL);
        this.fromHsv({
            h: cells[0],
            s: cells[1],
            v: cells[2],
            a: cells[3]
        });
    }
    fromHslString(trimStr) {
        const cells = splitColorStr(trimStr, parseHSVorHSL);
        this.fromHsl({
            h: cells[0],
            s: cells[1],
            l: cells[2],
            a: cells[3]
        });
    }
    fromRgbString(trimStr) {
        const cells = splitColorStr(trimStr, (num, txt)=>// Convert percentage to number. e.g. 50% -> 128
            txt.includes('%') ? round(num / 100 * 255) : num);
        this.r = cells[0];
        this.g = cells[1];
        this.b = cells[2];
        this.a = cells[3];
    }
}
// MERGED MODULE: [project]/node_modules/@ant-design/fast-color/es/types.js [library] (ecmascript)
;
;
// MERGED MODULE: [project]/node_modules/@ant-design/fast-color/es/index.js [library] (ecmascript) <locals>
;
;
;
;
var hueStep = 2; // 色相阶梯
var saturationStep = 0.16; // 饱和度阶梯，浅色部分
var saturationStep2 = 0.05; // 饱和度阶梯，深色部分
var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分
var brightnessStep2 = 0.15; // 亮度阶梯，深色部分
var lightColorCount = 5; // 浅色数量，主色上
var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表
var darkColorMap = [
    {
        index: 7,
        amount: 15
    },
    {
        index: 6,
        amount: 25
    },
    {
        index: 5,
        amount: 30
    },
    {
        index: 5,
        amount: 45
    },
    {
        index: 5,
        amount: 65
    },
    {
        index: 5,
        amount: 85
    },
    {
        index: 4,
        amount: 90
    },
    {
        index: 3,
        amount: 95
    },
    {
        index: 2,
        amount: 97
    },
    {
        index: 1,
        amount: 98
    }
];
function getHue(hsv, i, light) {
    var hue;
    // 根据色相不同，色相转向不同
    if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
        hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
    } else {
        hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
    }
    if (hue < 0) {
        hue += 360;
    } else if (hue >= 360) {
        hue -= 360;
    }
    return hue;
}
function getSaturation(hsv, i, light) {
    // grey color don't change saturation
    if (hsv.h === 0 && hsv.s === 0) {
        return hsv.s;
    }
    var saturation;
    if (light) {
        saturation = hsv.s - saturationStep * i;
    } else if (i === darkColorCount) {
        saturation = hsv.s + saturationStep;
    } else {
        saturation = hsv.s + saturationStep2 * i;
    }
    // 边界值修正
    if (saturation > 1) {
        saturation = 1;
    }
    // 第一格的 s 限制在 0.06-0.1 之间
    if (light && i === lightColorCount && saturation > 0.1) {
        saturation = 0.1;
    }
    if (saturation < 0.06) {
        saturation = 0.06;
    }
    return Math.round(saturation * 100) / 100;
}
function getValue(hsv, i, light) {
    var value;
    if (light) {
        value = hsv.v + brightnessStep1 * i;
    } else {
        value = hsv.v - brightnessStep2 * i;
    }
    // Clamp value between 0 and 1
    value = Math.max(0, Math.min(1, value));
    return Math.round(value * 100) / 100;
}
function generate(color) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var patterns = [];
    var pColor = new FastColor(color);
    var hsv = pColor.toHsv();
    for(var i = lightColorCount; i > 0; i -= 1){
        var c = new FastColor({
            h: getHue(hsv, i, true),
            s: getSaturation(hsv, i, true),
            v: getValue(hsv, i, true)
        });
        patterns.push(c);
    }
    patterns.push(pColor);
    for(var _i = 1; _i <= darkColorCount; _i += 1){
        var _c = new FastColor({
            h: getHue(hsv, _i),
            s: getSaturation(hsv, _i),
            v: getValue(hsv, _i)
        });
        patterns.push(_c);
    }
    // dark theme patterns
    if (opts.theme === 'dark') {
        return darkColorMap.map(function(_ref) {
            var index = _ref.index, amount = _ref.amount;
            return new FastColor(opts.backgroundColor || '#141414').mix(patterns[index], amount).toHexString();
        });
    }
    return patterns.map(function(c) {
        return c.toHexString();
    });
}
// MERGED MODULE: [project]/node_modules/@ant-design/colors/es/presets.js [library] (ecmascript)
;
var presetPrimaryColors = {
    "red": "#F5222D",
    "volcano": "#FA541C",
    "orange": "#FA8C16",
    "gold": "#FAAD14",
    "yellow": "#FADB14",
    "lime": "#A0D911",
    "green": "#52C41A",
    "cyan": "#13C2C2",
    "blue": "#1677FF",
    "geekblue": "#2F54EB",
    "purple": "#722ED1",
    "magenta": "#EB2F96",
    "grey": "#666666"
};
var red = [
    "#fff1f0",
    "#ffccc7",
    "#ffa39e",
    "#ff7875",
    "#ff4d4f",
    "#f5222d",
    "#cf1322",
    "#a8071a",
    "#820014",
    "#5c0011"
];
red.primary = red[5];
var volcano = [
    "#fff2e8",
    "#ffd8bf",
    "#ffbb96",
    "#ff9c6e",
    "#ff7a45",
    "#fa541c",
    "#d4380d",
    "#ad2102",
    "#871400",
    "#610b00"
];
volcano.primary = volcano[5];
var orange = [
    "#fff7e6",
    "#ffe7ba",
    "#ffd591",
    "#ffc069",
    "#ffa940",
    "#fa8c16",
    "#d46b08",
    "#ad4e00",
    "#873800",
    "#612500"
];
orange.primary = orange[5];
var gold = [
    "#fffbe6",
    "#fff1b8",
    "#ffe58f",
    "#ffd666",
    "#ffc53d",
    "#faad14",
    "#d48806",
    "#ad6800",
    "#874d00",
    "#613400"
];
gold.primary = gold[5];
var yellow = [
    "#feffe6",
    "#ffffb8",
    "#fffb8f",
    "#fff566",
    "#ffec3d",
    "#fadb14",
    "#d4b106",
    "#ad8b00",
    "#876800",
    "#614700"
];
yellow.primary = yellow[5];
var lime = [
    "#fcffe6",
    "#f4ffb8",
    "#eaff8f",
    "#d3f261",
    "#bae637",
    "#a0d911",
    "#7cb305",
    "#5b8c00",
    "#3f6600",
    "#254000"
];
lime.primary = lime[5];
var green = [
    "#f6ffed",
    "#d9f7be",
    "#b7eb8f",
    "#95de64",
    "#73d13d",
    "#52c41a",
    "#389e0d",
    "#237804",
    "#135200",
    "#092b00"
];
green.primary = green[5];
var cyan = [
    "#e6fffb",
    "#b5f5ec",
    "#87e8de",
    "#5cdbd3",
    "#36cfc9",
    "#13c2c2",
    "#08979c",
    "#006d75",
    "#00474f",
    "#002329"
];
cyan.primary = cyan[5];
var blue = [
    "#e6f4ff",
    "#bae0ff",
    "#91caff",
    "#69b1ff",
    "#4096ff",
    "#1677ff",
    "#0958d9",
    "#003eb3",
    "#002c8c",
    "#001d66"
];
blue.primary = blue[5];
var geekblue = [
    "#f0f5ff",
    "#d6e4ff",
    "#adc6ff",
    "#85a5ff",
    "#597ef7",
    "#2f54eb",
    "#1d39c4",
    "#10239e",
    "#061178",
    "#030852"
];
geekblue.primary = geekblue[5];
var purple = [
    "#f9f0ff",
    "#efdbff",
    "#d3adf7",
    "#b37feb",
    "#9254de",
    "#722ed1",
    "#531dab",
    "#391085",
    "#22075e",
    "#120338"
];
purple.primary = purple[5];
var magenta = [
    "#fff0f6",
    "#ffd6e7",
    "#ffadd2",
    "#ff85c0",
    "#f759ab",
    "#eb2f96",
    "#c41d7f",
    "#9e1068",
    "#780650",
    "#520339"
];
magenta.primary = magenta[5];
var grey = [
    "#a6a6a6",
    "#999999",
    "#8c8c8c",
    "#808080",
    "#737373",
    "#666666",
    "#404040",
    "#1a1a1a",
    "#000000",
    "#000000"
];
grey.primary = grey[5];
var gray = grey;
var presetPalettes = {
    red: red,
    volcano: volcano,
    orange: orange,
    gold: gold,
    yellow: yellow,
    lime: lime,
    green: green,
    cyan: cyan,
    blue: blue,
    geekblue: geekblue,
    purple: purple,
    magenta: magenta,
    grey: grey
};
var redDark = [
    "#2a1215",
    "#431418",
    "#58181c",
    "#791a1f",
    "#a61d24",
    "#d32029",
    "#e84749",
    "#f37370",
    "#f89f9a",
    "#fac8c3"
];
redDark.primary = redDark[5];
var volcanoDark = [
    "#2b1611",
    "#441d12",
    "#592716",
    "#7c3118",
    "#aa3e19",
    "#d84a1b",
    "#e87040",
    "#f3956a",
    "#f8b692",
    "#fad4bc"
];
volcanoDark.primary = volcanoDark[5];
var orangeDark = [
    "#2b1d11",
    "#442a11",
    "#593815",
    "#7c4a15",
    "#aa6215",
    "#d87a16",
    "#e89a3c",
    "#f3b765",
    "#f8cf8d",
    "#fae3b7"
];
orangeDark.primary = orangeDark[5];
var goldDark = [
    "#2b2111",
    "#443111",
    "#594214",
    "#7c5914",
    "#aa7714",
    "#d89614",
    "#e8b339",
    "#f3cc62",
    "#f8df8b",
    "#faedb5"
];
goldDark.primary = goldDark[5];
var yellowDark = [
    "#2b2611",
    "#443b11",
    "#595014",
    "#7c6e14",
    "#aa9514",
    "#d8bd14",
    "#e8d639",
    "#f3ea62",
    "#f8f48b",
    "#fafab5"
];
yellowDark.primary = yellowDark[5];
var limeDark = [
    "#1f2611",
    "#2e3c10",
    "#3e4f13",
    "#536d13",
    "#6f9412",
    "#8bbb11",
    "#a9d134",
    "#c9e75d",
    "#e4f88b",
    "#f0fab5"
];
limeDark.primary = limeDark[5];
var greenDark = [
    "#162312",
    "#1d3712",
    "#274916",
    "#306317",
    "#3c8618",
    "#49aa19",
    "#6abe39",
    "#8fd460",
    "#b2e58b",
    "#d5f2bb"
];
greenDark.primary = greenDark[5];
var cyanDark = [
    "#112123",
    "#113536",
    "#144848",
    "#146262",
    "#138585",
    "#13a8a8",
    "#33bcb7",
    "#58d1c9",
    "#84e2d8",
    "#b2f1e8"
];
cyanDark.primary = cyanDark[5];
var blueDark = [
    "#111a2c",
    "#112545",
    "#15325b",
    "#15417e",
    "#1554ad",
    "#1668dc",
    "#3c89e8",
    "#65a9f3",
    "#8dc5f8",
    "#b7dcfa"
];
blueDark.primary = blueDark[5];
var geekblueDark = [
    "#131629",
    "#161d40",
    "#1c2755",
    "#203175",
    "#263ea0",
    "#2b4acb",
    "#5273e0",
    "#7f9ef3",
    "#a8c1f8",
    "#d2e0fa"
];
geekblueDark.primary = geekblueDark[5];
var purpleDark = [
    "#1a1325",
    "#24163a",
    "#301c4d",
    "#3e2069",
    "#51258f",
    "#642ab5",
    "#854eca",
    "#ab7ae0",
    "#cda8f0",
    "#ebd7fa"
];
purpleDark.primary = purpleDark[5];
var magentaDark = [
    "#291321",
    "#40162f",
    "#551c3b",
    "#75204f",
    "#a02669",
    "#cb2b83",
    "#e0529c",
    "#f37fb7",
    "#f8a8cc",
    "#fad2e3"
];
magentaDark.primary = magentaDark[5];
var greyDark = [
    "#151515",
    "#1f1f1f",
    "#2d2d2d",
    "#393939",
    "#494949",
    "#5a5a5a",
    "#6a6a6a",
    "#7b7b7b",
    "#888888",
    "#969696"
];
greyDark.primary = greyDark[5];
var presetDarkPalettes = {
    red: redDark,
    volcano: volcanoDark,
    orange: orangeDark,
    gold: goldDark,
    yellow: yellowDark,
    lime: limeDark,
    green: greenDark,
    cyan: cyanDark,
    blue: blueDark,
    geekblue: geekblueDark,
    purple: purpleDark,
    magenta: magentaDark,
    grey: greyDark
};
// MERGED MODULE: [project]/node_modules/@ant-design/colors/es/index.js [library] (ecmascript) <locals>
;
;
;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/components/Context.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__5 = __TURBOPACK__imported__module__2211__;
;
var IconContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__2211__5["createContext"])({});
const __TURBOPACK__default__export__6 = IconContext;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/components/IconBase.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [library] (ecmascript)
;
;
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
;
var __TURBOPACK__imported__module__2211__6 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/utils.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@ant-design/colors/es/generate.js [library] (ecmascript) <export default as generate>
;
// MERGED MODULE: [project]/node_modules/rc-util/es/Dom/dynamicCSS.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/rc-util/es/Dom/canUseDom.js [library] (ecmascript)
;
function canUseDom() {
    return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
// MERGED MODULE: [project]/node_modules/rc-util/es/Dom/contains.js [library] (ecmascript)
;
function contains(root, n) {
    if (!root) {
        return false;
    }
    // Use native if support
    if (root.contains) {
        return root.contains(n);
    }
    // `document.contains` not support with IE11
    var node = n;
    while(node){
        if (node === root) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
;
;
;
var APPEND_ORDER = 'data-rc-order';
var APPEND_PRIORITY = 'data-rc-priority';
var MARK_KEY = "rc-util-key";
var containerCache = new Map();
function getMark() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, mark = _ref.mark;
    if (mark) {
        return mark.startsWith('data-') ? mark : "data-".concat(mark);
    }
    return MARK_KEY;
}
function getContainer(option) {
    if (option.attachTo) {
        return option.attachTo;
    }
    var head = document.querySelector('head');
    return head || document.body;
}
function getOrder(prepend) {
    if (prepend === 'queue') {
        return 'prependQueue';
    }
    return prepend ? 'prepend' : 'append';
}
/**
 * Find style which inject by rc-util
 */ function findStyles(container) {
    return Array.from((containerCache.get(container) || container).children).filter(function(node) {
        return node.tagName === 'STYLE';
    });
}
function injectCSS(css) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!canUseDom()) {
        return null;
    }
    var csp = option.csp, prepend = option.prepend, _option$priority = option.priority, priority = _option$priority === void 0 ? 0 : _option$priority;
    var mergedOrder = getOrder(prepend);
    var isPrependQueue = mergedOrder === 'prependQueue';
    var styleNode = document.createElement('style');
    styleNode.setAttribute(APPEND_ORDER, mergedOrder);
    if (isPrependQueue && priority) {
        styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
    }
    if (csp !== null && csp !== void 0 && csp.nonce) {
        styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
    }
    styleNode.innerHTML = css;
    var container = getContainer(option);
    var firstChild = container.firstChild;
    if (prepend) {
        // If is queue `prepend`, it will prepend first style and then append rest style
        if (isPrependQueue) {
            var existStyle = (option.styles || findStyles(container)).filter(function(node) {
                // Ignore style which not injected by rc-util with prepend
                if (![
                    'prepend',
                    'prependQueue'
                ].includes(node.getAttribute(APPEND_ORDER))) {
                    return false;
                }
                // Ignore style which priority less then new style
                var nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
                return priority >= nodePriority;
            });
            if (existStyle.length) {
                container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
                return styleNode;
            }
        }
        // Use `insertBefore` as `prepend`
        container.insertBefore(styleNode, firstChild);
    } else {
        container.appendChild(styleNode);
    }
    return styleNode;
}
function findExistNode(key) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var container = getContainer(option);
    return (option.styles || findStyles(container)).find(function(node) {
        return node.getAttribute(getMark(option)) === key;
    });
}
function removeCSS(key) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var existNode = findExistNode(key, option);
    if (existNode) {
        var container = getContainer(option);
        container.removeChild(existNode);
    }
}
/**
 * qiankun will inject `appendChild` to insert into other
 */ function syncRealContainer(container, option) {
    var cachedRealContainer = containerCache.get(container);
    // Find real container when not cached or cached container removed
    if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
        var placeholderStyle = injectCSS('', option);
        var parentNode = placeholderStyle.parentNode;
        containerCache.set(container, parentNode);
        container.removeChild(placeholderStyle);
    }
}
function clearContainerCache() {
    containerCache.clear();
}
function updateCSS(css, key) {
    var originOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var container = getContainer(originOption);
    var styles = findStyles(container);
    var option = _objectSpread2(_objectSpread2({}, originOption), {}, {
        styles: styles
    });
    // Sync real parent
    syncRealContainer(container, option);
    var existNode = findExistNode(key, option);
    if (existNode) {
        var _option$csp, _option$csp2;
        if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
            var _option$csp3;
            existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
        }
        if (existNode.innerHTML !== css) {
            existNode.innerHTML = css;
        }
        return existNode;
    }
    var newNode = injectCSS(css, option);
    newNode.setAttribute(getMark(option), key);
    return newNode;
}
// MERGED MODULE: [project]/node_modules/rc-util/es/Dom/shadow.js [library] (ecmascript)
;
function getRoot(ele) {
    var _ele$getRootNode;
    return ele === null || ele === void 0 || (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
}
function inShadow(ele) {
    return getRoot(ele) instanceof ShadowRoot;
}
function getShadowRoot(ele) {
    return inShadow(ele) ? getRoot(ele) : null;
}
// MERGED MODULE: [project]/node_modules/rc-util/es/warning.js [library] (ecmascript)
;
/* eslint-disable no-console */ var warned = {};
var preWarningFns = [];
var preMessage = function preMessage(fn) {
    preWarningFns.push(fn);
};
function warning(valid, message) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    {
        var finalMessage;
    }
}
function note(valid, message) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    {
        var finalMessage;
    }
}
function resetWarned() {
    warned = {};
}
function call(method, valid, message) {
    if (!valid && !warned[message]) {
        method(false, message);
        warned[message] = true;
    }
}
function warningOnce(valid, message) {
    call(warning, valid, message);
}
function noteOnce(valid, message) {
    call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
const __TURBOPACK__default__export__7 = warningOnce;
var __TURBOPACK__imported__module__2211__7 = __TURBOPACK__imported__module__2211__;
;
;
;
;
;
;
;
;
function camelCase(input) {
    return input.replace(/-(.)/g, function(match, g) {
        return g.toUpperCase();
    });
}
function warning1(valid, message) {
    __TURBOPACK__default__export__7(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
    return _typeof(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (_typeof(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.keys(attrs).reduce(function(acc, key) {
        var val = attrs[key];
        switch(key){
            case 'class':
                acc.className = val;
                delete acc.class;
                break;
            default:
                delete acc[key];
                acc[camelCase(key)] = val;
        }
        return acc;
    }, {});
}
function generate1(node, key, rootProps) {
    if (!rootProps) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__2211__7["default"].createElement(node.tag, _objectSpread2({
            key: key
        }, normalizeAttrs(node.attrs)), (node.children || []).map(function(child, index) {
            return generate1(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
        }));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__7["default"].createElement(node.tag, _objectSpread2(_objectSpread2({
        key: key
    }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function(child, index) {
        return generate1(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
}
function getSecondaryColor(primaryColor) {
    // choose the second color
    return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
    if (!twoToneColor) {
        return [];
    }
    return Array.isArray(twoToneColor) ? twoToneColor : [
        twoToneColor
    ];
}
var svgBaseProps = {
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true',
    focusable: 'false'
};
var iconStyles = "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles(eleRef) {
    var _useContext = (0, __TURBOPACK__imported__module__2211__7["useContext"])(__TURBOPACK__default__export__6), csp = _useContext.csp, prefixCls = _useContext.prefixCls, layer = _useContext.layer;
    var mergedStyleStr = iconStyles;
    if (prefixCls) {
        mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
    }
    if (layer) {
        mergedStyleStr = "@layer ".concat(layer, " {\n").concat(mergedStyleStr, "\n}");
    }
    (0, __TURBOPACK__imported__module__2211__7["useEffect"])(function() {
        var ele = eleRef.current;
        var shadowRoot = getShadowRoot(ele);
        updateCSS(mergedStyleStr, '@ant-design-icons', {
            prepend: !layer,
            csp: csp,
            attachTo: shadowRoot
        });
    }, []);
};
;
;
var _excluded = [
    "icon",
    "className",
    "onClick",
    "style",
    "primaryColor",
    "secondaryColor"
];
;
;
var twoToneColorPalette = {
    primaryColor: '#333',
    secondaryColor: '#E6E6E6',
    calculated: false
};
function setTwoToneColors(_ref) {
    var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
    twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
    return _objectSpread2({}, twoToneColorPalette);
}
var IconBase = function IconBase(props) {
    var icon = props.icon, className = props.className, onClick = props.onClick, style = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = _objectWithoutProperties(props, _excluded);
    var svgRef = __TURBOPACK__imported__module__2211__6["useRef"]();
    var colors = twoToneColorPalette;
    if (primaryColor) {
        colors = {
            primaryColor: primaryColor,
            secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
        };
    }
    useInsertStyles(svgRef);
    warning1(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
    if (!isIconDefinition(icon)) {
        return null;
    }
    var target = icon;
    if (target && typeof target.icon === 'function') {
        target = _objectSpread2(_objectSpread2({}, target), {}, {
            icon: target.icon(colors.primaryColor, colors.secondaryColor)
        });
    }
    return generate1(target.icon, "svg-".concat(target.name), _objectSpread2(_objectSpread2({
        className: className,
        onClick: onClick,
        style: style,
        'data-icon': target.name,
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        'aria-hidden': 'true'
    }, restProps), {}, {
        ref: svgRef
    }));
};
IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
const __TURBOPACK__default__export__8 = IconBase;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js [library] (ecmascript)
;
;
;
;
function setTwoToneColor(twoToneColor) {
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return __TURBOPACK__default__export__8.setTwoToneColors({
        primaryColor: primaryColor,
        secondaryColor: secondaryColor
    });
}
function getTwoToneColor() {
    var colors = __TURBOPACK__default__export__8.getTwoToneColors();
    if (!colors.calculated) {
        return colors.primaryColor;
    }
    return [
        colors.primaryColor,
        colors.secondaryColor
    ];
}
'use client';
;
;
;
;
var _excluded1 = [
    "className",
    "icon",
    "spin",
    "rotate",
    "tabIndex",
    "onClick",
    "twoToneColor"
];
;
;
;
;
;
;
;
// Initial setting
// should move it to antd main repo?
setTwoToneColor(blue.primary);
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757#issuecomment-488848720
var Icon = /*#__PURE__*/ __TURBOPACK__imported__module__2211__4["forwardRef"](function(props, ref) {
    var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = _objectWithoutProperties(props, _excluded1);
    var _React$useContext = __TURBOPACK__imported__module__2211__4["useContext"](__TURBOPACK__default__export__6), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
    var classString = (0, __TURBOPACK__imported__module__1446__1["default"])(rootClassName, prefixCls, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), className);
    var iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
        iconTabIndex = -1;
    }
    var svgStyle = rotate ? {
        msTransform: "rotate(".concat(rotate, "deg)"),
        transform: "rotate(".concat(rotate, "deg)")
    } : undefined;
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__4["createElement"]("span", _extends({
        role: "img",
        "aria-label": icon.name
    }, restProps, {
        ref: ref,
        tabIndex: iconTabIndex,
        onClick: onClick,
        className: classString
    }), /*#__PURE__*/ __TURBOPACK__imported__module__2211__4["createElement"](__TURBOPACK__default__export__8, {
        icon: icon,
        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
        style: svgStyle
    }));
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
const __TURBOPACK__default__export__9 = Icon;
;
;
;
;
var EllipsisOutlined1 = function EllipsisOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__3["createElement"](__TURBOPACK__default__export__9, _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__default__export__5
    }));
};
/**![ellipsis](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3NiA1MTFhNTYgNTYgMCAxMDExMiAwIDU2IDU2IDAgMTAtMTEyIDB6bTI4MCAwYTU2IDU2IDAgMTAxMTIgMCA1NiA1NiAwIDEwLTExMiAwem0yODAgMGE1NiA1NiAwIDEwMTEyIDAgNTYgNTYgMCAxMC0xMTIgMHoiIC8+PC9zdmc+) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__2211__3["forwardRef"](EllipsisOutlined1);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__10 = RefIcon;
var __TURBOPACK__imported__module__7454__2 = __TURBOPACK__imported__module__7454__;
;
;
;
;
const findItem = (keyPath, items)=>{
    const keyToFind = keyPath[0]; // Get the first key from the keyPath
    for (const item of items){
        if (item.key === keyToFind) {
            // If the item is found and this is the last key in the path
            if (keyPath.length === 1) return item;
            // If it is a SubItemType, recurse to find in its children
            if ('children' in item) {
                return findItem(keyPath.slice(1), item.children);
            }
        }
    }
    return null;
};
const ActionMenu = (props)=>{
    const { onClick: onMenuClick, item } = props;
    const { children = [], triggerSubMenuAction = 'hover' } = item;
    const { getPrefixCls } = __TURBOPACK__default__export__4();
    const prefixCls = getPrefixCls('actions', props.prefixCls);
    const icon = item?.icon ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__1["jsx"])(__TURBOPACK__default__export__10, {});
    const menuProps = {
        items: children,
        onClick: ({ key, keyPath, domEvent })=>{
            if (findItem(keyPath, children)?.onItemClick) {
                findItem(keyPath, children)?.onItemClick?.(findItem(keyPath, children));
                return;
            }
            onMenuClick?.({
                key,
                keyPath: [
                    ...keyPath,
                    item.key
                ],
                domEvent,
                item: findItem(keyPath, children)
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__1["jsx"])(__TURBOPACK__imported__module__7454__2["Dropdown"], {
        menu: menuProps,
        overlayClassName: `${prefixCls}-sub-item`,
        arrow: true,
        trigger: [
            triggerSubMenuAction
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__1["jsx"])("div", {
            className: `${prefixCls}-list-item`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__1["jsx"])("div", {
                className: `${prefixCls}-list-item-icon`,
                children: icon
            })
        })
    });
};
const __TURBOPACK__default__export__11 = ActionMenu;
// MERGED MODULE: [project]/components/actions/style/index.ts [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs-utils/es/index.js [library] (ecmascript) <module evaluation>
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs-utils/es/util/genStyleUtils.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__8 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/index.js [library] (ecmascript) <module evaluation>
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/extractStyle.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/hooks/useCacheToken.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js [library] (ecmascript)
;
;
function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
}
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/iterableToArray.js [library] (ecmascript)
;
function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js [library] (ecmascript)
;
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;
;
;
;
;
function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
;
// MERGED MODULE: [project]/node_modules/@emotion/hash/dist/hash.browser.esm.js [library] (ecmascript)
;
/* eslint-disable */ // Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash
    var k, i = 0, len = str.length;
    for(; len >= 4; ++i, len -= 4){
        k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
        k = /* Math.imul(k, m): */ (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
        k ^= /* k >>> r: */ k >>> 24;
        h = /* Math.imul(k, m): */ (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Handle the last few bytes of the input array
    switch(len){
        case 3:
            h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
        case 2:
            h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
            h ^= str.charCodeAt(i) & 0xff;
            h = /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.
    h ^= h >>> 13;
    h = /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
}
const __TURBOPACK__default__export__12 = murmur2;
var __TURBOPACK__imported__module__2211__9 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/StyleContext.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/rc-util/es/hooks/useMemo.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__10 = __TURBOPACK__imported__module__2211__;
;
function useMemo(getValue, condition, shouldUpdate) {
    var cacheRef = __TURBOPACK__imported__module__2211__10["useRef"]({});
    if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
        cacheRef.current.value = getValue();
        cacheRef.current.condition = condition;
    }
    return cacheRef.current.value;
}
// MERGED MODULE: [project]/node_modules/rc-util/es/isEqual.js [library] (ecmascript)
;
;
;
/**
 * Deeply compares two object literals.
 * @param obj1 object 1
 * @param obj2 object 2
 * @param shallow shallow compare
 * @returns
 */ function isEqual(obj1, obj2) {
    var shallow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    // https://github.com/mapbox/mapbox-gl-js/pull/5979/files#diff-fde7145050c47cc3a306856efd5f9c3016e86e859de9afbd02c879be5067e58f
    var refSet = new Set();
    function deepEqual(a, b) {
        var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var circular = refSet.has(a);
        __TURBOPACK__default__export__7(!circular, 'Warning: There may be circular references');
        if (circular) {
            return false;
        }
        if (a === b) {
            return true;
        }
        if (shallow && level > 1) {
            return false;
        }
        refSet.add(a);
        var newLevel = level + 1;
        if (Array.isArray(a)) {
            if (!Array.isArray(b) || a.length !== b.length) {
                return false;
            }
            for(var i = 0; i < a.length; i++){
                if (!deepEqual(a[i], b[i], newLevel)) {
                    return false;
                }
            }
            return true;
        }
        if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
            var keys = Object.keys(a);
            if (keys.length !== Object.keys(b).length) {
                return false;
            }
            return keys.every(function(key) {
                return deepEqual(a[key], b[key], newLevel);
            });
        }
        // other
        return false;
    }
    return deepEqual(obj1, obj2);
}
const __TURBOPACK__default__export__13 = isEqual;
var __TURBOPACK__imported__module__2211__11 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/Cache.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [library] (ecmascript)
;
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/createClass.js [library] (ecmascript)
;
;
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
;
;
;
;
// [times, realValue]
var SPLIT = '%';
function pathKey(keys) {
    return keys.join(SPLIT);
}
var Entity = /*#__PURE__*/ function() {
    function Entity(instanceId) {
        _classCallCheck(this, Entity);
        _defineProperty(this, "instanceId", void 0);
        /** @private Internal cache map. Do not access this directly */ _defineProperty(this, "cache", new Map());
        _defineProperty(this, "extracted", new Set());
        this.instanceId = instanceId;
    }
    _createClass(Entity, [
        {
            key: "get",
            value: function get(keys) {
                return this.opGet(pathKey(keys));
            }
        },
        {
            key: "opGet",
            value: function opGet(keyPathStr) {
                return this.cache.get(keyPathStr) || null;
            }
        },
        {
            key: "update",
            value: function update(keys, valueFn) {
                return this.opUpdate(pathKey(keys), valueFn);
            }
        },
        {
            key: "opUpdate",
            value: function opUpdate(keyPathStr, valueFn) {
                var prevValue = this.cache.get(keyPathStr);
                var nextValue = valueFn(prevValue);
                if (nextValue === null) {
                    this.cache.delete(keyPathStr);
                } else {
                    this.cache.set(keyPathStr, nextValue);
                }
            }
        }
    ]);
    return Entity;
}();
const __TURBOPACK__default__export__14 = Entity;
;
;
var _excluded2 = [
    "children"
];
;
;
;
;
var ATTR_TOKEN = 'data-token-hash';
var ATTR_MARK = 'data-css-hash';
var ATTR_CACHE_PATH = 'data-cache-path';
var CSS_IN_JS_INSTANCE = '__cssinjs_instance__';
function createCache() {
    var cssinjsInstanceId = Math.random().toString(12).slice(2);
    // Tricky SSR: Move all inline style to the head.
    // PS: We do not recommend tricky mode.
    if (typeof document !== 'undefined' && document.head && document.body) {
        var styles = document.body.querySelectorAll("style[".concat(ATTR_MARK, "]")) || [];
        var firstChild = document.head.firstChild;
        Array.from(styles).forEach(function(style) {
            style[CSS_IN_JS_INSTANCE] = style[CSS_IN_JS_INSTANCE] || cssinjsInstanceId;
            // Not force move if no head
            if (style[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
                document.head.insertBefore(style, firstChild);
            }
        });
        // Deduplicate of moved styles
        var styleHash = {};
        Array.from(document.querySelectorAll("style[".concat(ATTR_MARK, "]"))).forEach(function(style) {
            var hash = style.getAttribute(ATTR_MARK);
            if (styleHash[hash]) {
                if (style[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
                    var _style$parentNode;
                    (_style$parentNode = style.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style);
                }
            } else {
                styleHash[hash] = true;
            }
        });
    }
    return new __TURBOPACK__default__export__14(cssinjsInstanceId);
}
var StyleContext = /*#__PURE__*/ __TURBOPACK__imported__module__2211__11["createContext"]({
    hashPriority: 'low',
    cache: createCache(),
    defaultCache: true
});
var StyleProvider = function StyleProvider(props) {
    var children = props.children, restProps = _objectWithoutProperties(props, _excluded2);
    var parentContext = __TURBOPACK__imported__module__2211__11["useContext"](StyleContext);
    var context = useMemo(function() {
        var mergedContext = _objectSpread2({}, parentContext);
        Object.keys(restProps).forEach(function(key) {
            var value = restProps[key];
            if (restProps[key] !== undefined) {
                mergedContext[key] = value;
            }
        });
        var cache = restProps.cache;
        mergedContext.cache = mergedContext.cache || createCache();
        mergedContext.defaultCache = !cache && parentContext.defaultCache;
        return mergedContext;
    }, [
        parentContext,
        restProps
    ], function(prev, next) {
        return !__TURBOPACK__default__export__13(prev[0], next[0], true) || !__TURBOPACK__default__export__13(prev[1], next[1], true);
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__11["createElement"](StyleContext.Provider, {
        value: context
    }, children);
};
const __TURBOPACK__default__export__15 = StyleContext;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/util/index.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/theme/index.js [library] (ecmascript) <module evaluation>
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/theme/calc/index.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/theme/calc/CSSCalculator.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [library] (ecmascript)
;
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/inherits.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [library] (ecmascript)
;
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
;
;
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && _setPrototypeOf(t, e);
}
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/createSuper.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js [library] (ecmascript)
;
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js [library] (ecmascript)
;
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js [library] (ecmascript)
;
;
;
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}
;
;
;
;
function _createSuper(t) {
    var r = _isNativeReflectConstruct();
    return function() {
        var e, o = _getPrototypeOf(t);
        if (r) {
            var s = _getPrototypeOf(this).constructor;
            e = Reflect.construct(o, arguments, s);
        } else e = o.apply(this, arguments);
        return _possibleConstructorReturn(this, e);
    };
}
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/theme/calc/calculator.js [library] (ecmascript)
;
;
;
var AbstractCalculator = /*#__PURE__*/ _createClass(function AbstractCalculator() {
    _classCallCheck(this, AbstractCalculator);
});
const __TURBOPACK__default__export__16 = AbstractCalculator;
;
;
;
;
;
;
;
;
var CALC_UNIT = 'CALC_UNIT';
var regexp = new RegExp(CALC_UNIT, 'g');
function unit(value) {
    if (typeof value === 'number') {
        return "".concat(value).concat(CALC_UNIT);
    }
    return value;
}
var CSSCalculator = /*#__PURE__*/ function(_AbstractCalculator) {
    _inherits(CSSCalculator, _AbstractCalculator);
    var _super = _createSuper(CSSCalculator);
    function CSSCalculator(num, unitlessCssVar) {
        var _this;
        _classCallCheck(this, CSSCalculator);
        _this = _super.call(this);
        _defineProperty(_assertThisInitialized(_this), "result", '');
        _defineProperty(_assertThisInitialized(_this), "unitlessCssVar", void 0);
        _defineProperty(_assertThisInitialized(_this), "lowPriority", void 0);
        var numType = _typeof(num);
        _this.unitlessCssVar = unitlessCssVar;
        if (num instanceof CSSCalculator) {
            _this.result = "(".concat(num.result, ")");
        } else if (numType === 'number') {
            _this.result = unit(num);
        } else if (numType === 'string') {
            _this.result = num;
        }
        return _this;
    }
    _createClass(CSSCalculator, [
        {
            key: "add",
            value: function add(num) {
                if (num instanceof CSSCalculator) {
                    this.result = "".concat(this.result, " + ").concat(num.getResult());
                } else if (typeof num === 'number' || typeof num === 'string') {
                    this.result = "".concat(this.result, " + ").concat(unit(num));
                }
                this.lowPriority = true;
                return this;
            }
        },
        {
            key: "sub",
            value: function sub(num) {
                if (num instanceof CSSCalculator) {
                    this.result = "".concat(this.result, " - ").concat(num.getResult());
                } else if (typeof num === 'number' || typeof num === 'string') {
                    this.result = "".concat(this.result, " - ").concat(unit(num));
                }
                this.lowPriority = true;
                return this;
            }
        },
        {
            key: "mul",
            value: function mul(num) {
                if (this.lowPriority) {
                    this.result = "(".concat(this.result, ")");
                }
                if (num instanceof CSSCalculator) {
                    this.result = "".concat(this.result, " * ").concat(num.getResult(true));
                } else if (typeof num === 'number' || typeof num === 'string') {
                    this.result = "".concat(this.result, " * ").concat(num);
                }
                this.lowPriority = false;
                return this;
            }
        },
        {
            key: "div",
            value: function div(num) {
                if (this.lowPriority) {
                    this.result = "(".concat(this.result, ")");
                }
                if (num instanceof CSSCalculator) {
                    this.result = "".concat(this.result, " / ").concat(num.getResult(true));
                } else if (typeof num === 'number' || typeof num === 'string') {
                    this.result = "".concat(this.result, " / ").concat(num);
                }
                this.lowPriority = false;
                return this;
            }
        },
        {
            key: "getResult",
            value: function getResult(force) {
                return this.lowPriority || force ? "(".concat(this.result, ")") : this.result;
            }
        },
        {
            key: "equal",
            value: function equal(options) {
                var _this2 = this;
                var _ref = options || {}, cssUnit = _ref.unit;
                var mergedUnit = true;
                if (typeof cssUnit === 'boolean') {
                    mergedUnit = cssUnit;
                } else if (Array.from(this.unitlessCssVar).some(function(cssVar) {
                    return _this2.result.includes(cssVar);
                })) {
                    mergedUnit = false;
                }
                this.result = this.result.replace(regexp, mergedUnit ? 'px' : '');
                if (typeof this.lowPriority !== 'undefined') {
                    return "calc(".concat(this.result, ")");
                }
                return this.result;
            }
        }
    ]);
    return CSSCalculator;
}(__TURBOPACK__default__export__16);
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/theme/calc/NumCalculator.js [library] (ecmascript)
;
;
;
;
;
;
;
;
var NumCalculator = /*#__PURE__*/ function(_AbstractCalculator) {
    _inherits(NumCalculator, _AbstractCalculator);
    var _super = _createSuper(NumCalculator);
    function NumCalculator(num) {
        var _this;
        _classCallCheck(this, NumCalculator);
        _this = _super.call(this);
        _defineProperty(_assertThisInitialized(_this), "result", 0);
        if (num instanceof NumCalculator) {
            _this.result = num.result;
        } else if (typeof num === 'number') {
            _this.result = num;
        }
        return _this;
    }
    _createClass(NumCalculator, [
        {
            key: "add",
            value: function add(num) {
                if (num instanceof NumCalculator) {
                    this.result += num.result;
                } else if (typeof num === 'number') {
                    this.result += num;
                }
                return this;
            }
        },
        {
            key: "sub",
            value: function sub(num) {
                if (num instanceof NumCalculator) {
                    this.result -= num.result;
                } else if (typeof num === 'number') {
                    this.result -= num;
                }
                return this;
            }
        },
        {
            key: "mul",
            value: function mul(num) {
                if (num instanceof NumCalculator) {
                    this.result *= num.result;
                } else if (typeof num === 'number') {
                    this.result *= num;
                }
                return this;
            }
        },
        {
            key: "div",
            value: function div(num) {
                if (num instanceof NumCalculator) {
                    this.result /= num.result;
                } else if (typeof num === 'number') {
                    this.result /= num;
                }
                return this;
            }
        },
        {
            key: "equal",
            value: function equal() {
                return this.result;
            }
        }
    ]);
    return NumCalculator;
}(__TURBOPACK__default__export__16);
;
;
;
var genCalc = function genCalc(type, unitlessCssVar) {
    var Calculator = type === 'css' ? CSSCalculator : NumCalculator;
    return function(num) {
        return new Calculator(num, unitlessCssVar);
    };
};
const __TURBOPACK__default__export__17 = genCalc;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/theme/createTheme.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/theme/ThemeCache.js [library] (ecmascript)
;
;
;
;
;
function sameDerivativeOption(left, right) {
    if (left.length !== right.length) {
        return false;
    }
    for(var i = 0; i < left.length; i++){
        if (left[i] !== right[i]) {
            return false;
        }
    }
    return true;
}
var ThemeCache = /*#__PURE__*/ function() {
    function ThemeCache() {
        _classCallCheck(this, ThemeCache);
        _defineProperty(this, "cache", void 0);
        _defineProperty(this, "keys", void 0);
        _defineProperty(this, "cacheCallTimes", void 0);
        this.cache = new Map();
        this.keys = [];
        this.cacheCallTimes = 0;
    }
    _createClass(ThemeCache, [
        {
            key: "size",
            value: function size() {
                return this.keys.length;
            }
        },
        {
            key: "internalGet",
            value: function internalGet(derivativeOption) {
                var _cache2, _cache3;
                var updateCallTimes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var cache = {
                    map: this.cache
                };
                derivativeOption.forEach(function(derivative) {
                    if (!cache) {
                        cache = undefined;
                    } else {
                        var _cache;
                        cache = (_cache = cache) === null || _cache === void 0 || (_cache = _cache.map) === null || _cache === void 0 ? void 0 : _cache.get(derivative);
                    }
                });
                if ((_cache2 = cache) !== null && _cache2 !== void 0 && _cache2.value && updateCallTimes) {
                    cache.value[1] = this.cacheCallTimes++;
                }
                return (_cache3 = cache) === null || _cache3 === void 0 ? void 0 : _cache3.value;
            }
        },
        {
            key: "get",
            value: function get(derivativeOption) {
                var _this$internalGet;
                return (_this$internalGet = this.internalGet(derivativeOption, true)) === null || _this$internalGet === void 0 ? void 0 : _this$internalGet[0];
            }
        },
        {
            key: "has",
            value: function has(derivativeOption) {
                return !!this.internalGet(derivativeOption);
            }
        },
        {
            key: "set",
            value: function set(derivativeOption, value) {
                var _this = this;
                // New cache
                if (!this.has(derivativeOption)) {
                    if (this.size() + 1 > ThemeCache.MAX_CACHE_SIZE + ThemeCache.MAX_CACHE_OFFSET) {
                        var _this$keys$reduce = this.keys.reduce(function(result, key) {
                            var _result = _slicedToArray(result, 2), callTimes = _result[1];
                            if (_this.internalGet(key)[1] < callTimes) {
                                return [
                                    key,
                                    _this.internalGet(key)[1]
                                ];
                            }
                            return result;
                        }, [
                            this.keys[0],
                            this.cacheCallTimes
                        ]), _this$keys$reduce2 = _slicedToArray(_this$keys$reduce, 1), targetKey = _this$keys$reduce2[0];
                        this.delete(targetKey);
                    }
                    this.keys.push(derivativeOption);
                }
                var cache = this.cache;
                derivativeOption.forEach(function(derivative, index) {
                    if (index === derivativeOption.length - 1) {
                        cache.set(derivative, {
                            value: [
                                value,
                                _this.cacheCallTimes++
                            ]
                        });
                    } else {
                        var cacheValue = cache.get(derivative);
                        if (!cacheValue) {
                            cache.set(derivative, {
                                map: new Map()
                            });
                        } else if (!cacheValue.map) {
                            cacheValue.map = new Map();
                        }
                        cache = cache.get(derivative).map;
                    }
                });
            }
        },
        {
            key: "deleteByPath",
            value: function deleteByPath(currentCache, derivatives) {
                var cache = currentCache.get(derivatives[0]);
                if (derivatives.length === 1) {
                    var _cache$value;
                    if (!cache.map) {
                        currentCache.delete(derivatives[0]);
                    } else {
                        currentCache.set(derivatives[0], {
                            map: cache.map
                        });
                    }
                    return (_cache$value = cache.value) === null || _cache$value === void 0 ? void 0 : _cache$value[0];
                }
                var result = this.deleteByPath(cache.map, derivatives.slice(1));
                if ((!cache.map || cache.map.size === 0) && !cache.value) {
                    currentCache.delete(derivatives[0]);
                }
                return result;
            }
        },
        {
            key: "delete",
            value: function _delete(derivativeOption) {
                // If cache exists
                if (this.has(derivativeOption)) {
                    this.keys = this.keys.filter(function(item) {
                        return !sameDerivativeOption(item, derivativeOption);
                    });
                    return this.deleteByPath(this.cache, derivativeOption);
                }
                return undefined;
            }
        }
    ]);
    return ThemeCache;
}();
_defineProperty(ThemeCache, "MAX_CACHE_SIZE", 20);
_defineProperty(ThemeCache, "MAX_CACHE_OFFSET", 5);
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/theme/Theme.js [library] (ecmascript)
;
;
;
;
;
var uuid = 0;
/**
 * Theme with algorithms to derive tokens from design tokens.
 * Use `createTheme` first which will help to manage the theme instance cache.
 */ var Theme = /*#__PURE__*/ function() {
    function Theme(derivatives) {
        _classCallCheck(this, Theme);
        _defineProperty(this, "derivatives", void 0);
        _defineProperty(this, "id", void 0);
        this.derivatives = Array.isArray(derivatives) ? derivatives : [
            derivatives
        ];
        this.id = uuid;
        if (derivatives.length === 0) {
            warning(derivatives.length > 0, '[Ant Design CSS-in-JS] Theme should have at least one derivative function.');
        }
        uuid += 1;
    }
    _createClass(Theme, [
        {
            key: "getDerivativeToken",
            value: function getDerivativeToken(token) {
                return this.derivatives.reduce(function(result, derivative) {
                    return derivative(token, result);
                }, undefined);
            }
        }
    ]);
    return Theme;
}();
;
;
;
var cacheThemes = new ThemeCache();
function createTheme(derivatives) {
    var derivativeArr = Array.isArray(derivatives) ? derivatives : [
        derivatives
    ];
    // Create new theme if not exist
    if (!cacheThemes.has(derivativeArr)) {
        cacheThemes.set(derivativeArr, new Theme(derivativeArr));
    }
    // Get theme from cache and return
    return cacheThemes.get(derivativeArr);
}
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/theme/index.js [library] (ecmascript) <locals>
;
;
;
;
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/theme/Theme.js [library] (ecmascript) <export default as Theme>
;
;
;
;
;
;
;
;
;
// Create a cache for memo concat
var resultCache = new WeakMap();
var RESULT_VALUE = {};
function memoResult(callback, deps) {
    var current = resultCache;
    for(var i = 0; i < deps.length; i += 1){
        var dep = deps[i];
        if (!current.has(dep)) {
            current.set(dep, new WeakMap());
        }
        current = current.get(dep);
    }
    if (!current.has(RESULT_VALUE)) {
        current.set(RESULT_VALUE, callback());
    }
    return current.get(RESULT_VALUE);
}
// Create a cache here to avoid always loop generate
var flattenTokenCache = new WeakMap();
function flattenToken(token) {
    var str = flattenTokenCache.get(token) || '';
    if (!str) {
        Object.keys(token).forEach(function(key) {
            var value = token[key];
            str += key;
            if (value instanceof Theme) {
                str += value.id;
            } else if (value && _typeof(value) === 'object') {
                str += flattenToken(value);
            } else {
                str += value;
            }
        });
        // https://github.com/ant-design/ant-design/issues/48386
        // Should hash the string to avoid style tag name too long
        str = __TURBOPACK__default__export__12(str);
        // Put in cache
        flattenTokenCache.set(token, str);
    }
    return str;
}
function token2key(token, salt) {
    return __TURBOPACK__default__export__12("".concat(salt, "_").concat(flattenToken(token)));
}
var randomSelectorKey = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, '');
// Magic `content` for detect selector support
var checkContent = '_bAmBoO_';
function supportSelector(styleStr, handleElement, supportCheck) {
    if (canUseDom()) {
        var _getComputedStyle$con, _ele$parentNode;
        updateCSS(styleStr, randomSelectorKey);
        var _ele = document.createElement('div');
        _ele.style.position = 'fixed';
        _ele.style.left = '0';
        _ele.style.top = '0';
        handleElement === null || handleElement === void 0 || handleElement(_ele);
        document.body.appendChild(_ele);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        var support = supportCheck ? supportCheck(_ele) : (_getComputedStyle$con = getComputedStyle(_ele).content) === null || _getComputedStyle$con === void 0 ? void 0 : _getComputedStyle$con.includes(checkContent);
        (_ele$parentNode = _ele.parentNode) === null || _ele$parentNode === void 0 || _ele$parentNode.removeChild(_ele);
        removeCSS(randomSelectorKey);
        return support;
    }
    return false;
}
var canLayer = undefined;
function supportLayer() {
    if (canLayer === undefined) {
        canLayer = supportSelector("@layer ".concat(randomSelectorKey, " { .").concat(randomSelectorKey, " { content: \"").concat(checkContent, "\"!important; } }"), function(ele) {
            ele.className = randomSelectorKey;
        });
    }
    return canLayer;
}
var canWhere = undefined;
function supportWhere() {
    if (canWhere === undefined) {
        canWhere = supportSelector(":where(.".concat(randomSelectorKey, ") { content: \"").concat(checkContent, "\"!important; }"), function(ele) {
            ele.className = randomSelectorKey;
        });
    }
    return canWhere;
}
var canLogic = undefined;
function supportLogicProps() {
    if (canLogic === undefined) {
        canLogic = supportSelector(".".concat(randomSelectorKey, " { inset-block: 93px !important; }"), function(ele) {
            ele.className = randomSelectorKey;
        }, function(ele) {
            return getComputedStyle(ele).bottom === '93px';
        });
    }
    return canLogic;
}
var isClientSide = canUseDom();
function unit1(num) {
    if (typeof num === 'number') {
        return "".concat(num, "px");
    }
    return num;
}
function toStyleStr(style, tokenKey, styleId) {
    var customizeAttrs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var plain = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    if (plain) {
        return style;
    }
    var attrs = _objectSpread2(_objectSpread2({}, customizeAttrs), {}, _defineProperty(_defineProperty({}, ATTR_TOKEN, tokenKey), ATTR_MARK, styleId));
    var attrStr = Object.keys(attrs).map(function(attr) {
        var val = attrs[attr];
        return val ? "".concat(attr, "=\"").concat(val, "\"") : null;
    }).filter(function(v) {
        return v;
    }).join(' ');
    return "<style ".concat(attrStr, ">").concat(style, "</style>");
}
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/util/css-variables.js [library] (ecmascript)
;
;
var token2CSSVar = function token2CSSVar(token) {
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return "--".concat(prefix ? "".concat(prefix, "-") : '').concat(token).replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1-$2').replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase();
};
var serializeCSSVar = function serializeCSSVar(cssVars, hashId, options) {
    if (!Object.keys(cssVars).length) {
        return '';
    }
    return ".".concat(hashId).concat(options !== null && options !== void 0 && options.scope ? ".".concat(options.scope) : '', "{").concat(Object.entries(cssVars).map(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
        return "".concat(key, ":").concat(value, ";");
    }).join(''), "}");
};
var transformToken = function transformToken(token, themeKey, config) {
    var cssVars = {};
    var result = {};
    Object.entries(token).forEach(function(_ref3) {
        var _config$preserve, _config$ignore;
        var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], value = _ref4[1];
        if (config !== null && config !== void 0 && (_config$preserve = config.preserve) !== null && _config$preserve !== void 0 && _config$preserve[key]) {
            result[key] = value;
        } else if ((typeof value === 'string' || typeof value === 'number') && !(config !== null && config !== void 0 && (_config$ignore = config.ignore) !== null && _config$ignore !== void 0 && _config$ignore[key])) {
            var _config$unitless;
            var cssVar = token2CSSVar(key, config === null || config === void 0 ? void 0 : config.prefix);
            cssVars[cssVar] = typeof value === 'number' && !(config !== null && config !== void 0 && (_config$unitless = config.unitless) !== null && _config$unitless !== void 0 && _config$unitless[key]) ? "".concat(value, "px") : String(value);
            result[key] = "var(".concat(cssVar, ")");
        }
    });
    return [
        result,
        serializeCSSVar(cssVars, themeKey, {
            scope: config === null || config === void 0 ? void 0 : config.scope
        })
    ];
};
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/hooks/useGlobalCache.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__12 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/hooks/useCompatibleInsertionEffect.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/rc-util/es/hooks/useLayoutEffect.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__13 = __TURBOPACK__imported__module__2211__;
;
;
/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */ var useInternalLayoutEffect = ("TURBOPACK compile-time value", "production") !== 'test' && canUseDom() ? __TURBOPACK__imported__module__2211__13["useLayoutEffect"] : __TURBOPACK__imported__module__2211__13["useEffect"];
var useLayoutEffect = function useLayoutEffect(callback, deps) {
    var firstMountRef = __TURBOPACK__imported__module__2211__13["useRef"](true);
    useInternalLayoutEffect(function() {
        return callback(firstMountRef.current);
    }, deps);
    // We tell react that first mount has passed
    useInternalLayoutEffect(function() {
        firstMountRef.current = false;
        return function() {
            firstMountRef.current = true;
        };
    }, []);
};
var useLayoutUpdateEffect = function useLayoutUpdateEffect(callback, deps) {
    useLayoutEffect(function(firstMount) {
        if (!firstMount) {
            return callback();
        }
    }, deps);
};
const __TURBOPACK__default__export__18 = useLayoutEffect;
var __TURBOPACK__imported__module__2211__14 = __TURBOPACK__imported__module__2211__;
;
;
;
// We need fully clone React function here
// to avoid webpack warning React 17 do not export `useId`
var fullClone = _objectSpread2({}, __TURBOPACK__imported__module__2211__14);
var useInsertionEffect = fullClone.useInsertionEffect;
/**
 * Polyfill `useInsertionEffect` for React < 18
 * @param renderEffect will be executed in `useMemo`, and do not have callback
 * @param effect will be executed in `useLayoutEffect`
 * @param deps
 */ var useInsertionEffectPolyfill = function useInsertionEffectPolyfill(renderEffect, effect, deps) {
    __TURBOPACK__imported__module__2211__14.useMemo(renderEffect, deps);
    __TURBOPACK__default__export__18(function() {
        return effect(true);
    }, deps);
};
/**
 * Compatible `useInsertionEffect`
 * will use `useInsertionEffect` if React version >= 18,
 * otherwise use `useInsertionEffectPolyfill`.
 */ var useCompatibleInsertionEffect = useInsertionEffect ? function(renderEffect, effect, deps) {
    return useInsertionEffect(function() {
        renderEffect();
        return effect();
    }, deps);
} : useInsertionEffectPolyfill;
const __TURBOPACK__default__export__19 = useCompatibleInsertionEffect;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/hooks/useEffectCleanupRegister.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__15 = __TURBOPACK__imported__module__2211__;
;
;
;
var fullClone1 = _objectSpread2({}, __TURBOPACK__imported__module__2211__15);
var useInsertionEffect1 = fullClone1.useInsertionEffect;
// DO NOT register functions in useEffect cleanup function, or functions that registered will never be called.
var useCleanupRegister = function useCleanupRegister(deps) {
    var effectCleanups = [];
    var cleanupFlag = false;
    function register(fn) {
        if (cleanupFlag) {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return;
        }
        effectCleanups.push(fn);
    }
    __TURBOPACK__imported__module__2211__15.useEffect(function() {
        // Compatible with strict mode
        cleanupFlag = false;
        return function() {
            cleanupFlag = true;
            if (effectCleanups.length) {
                effectCleanups.forEach(function(fn) {
                    return fn();
                });
            }
        };
    }, deps);
    return register;
};
var useRun = function useRun() {
    return function(fn) {
        fn();
    };
};
// Only enable register in React 18
var useEffectCleanupRegister = typeof useInsertionEffect1 !== 'undefined' ? useCleanupRegister : useRun;
const __TURBOPACK__default__export__20 = useEffectCleanupRegister;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/hooks/useHMR.js [library] (ecmascript)
;
function useProdHMR() {
    return false;
}
var webpackHMR = false;
function useDevHMR() {
    return webpackHMR;
}
const __TURBOPACK__default__export__21 = ("TURBOPACK compile-time truthy", 1) ? useProdHMR : "TURBOPACK unreachable";
// Webpack `module.hot.accept` do not support any deps update trigger
// We have to hack handler to force mark as HRM
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
{
    // Use `globalThis` first, and `window` for older browsers
    // const win = globalThis as any;
    var win;
    var originWebpackHotUpdate;
}
;
;
;
;
;
;
;
;
function useGlobalCache(prefix, keyPath, cacheFn, onCacheRemove, // Add additional effect trigger by `useInsertionEffect`
onCacheEffect) {
    var _React$useContext = __TURBOPACK__imported__module__2211__12["useContext"](__TURBOPACK__default__export__15), globalCache = _React$useContext.cache;
    var fullPath = [
        prefix
    ].concat(_toConsumableArray(keyPath));
    var fullPathStr = pathKey(fullPath);
    var register = __TURBOPACK__default__export__20([
        fullPathStr
    ]);
    var HMRUpdate = __TURBOPACK__default__export__21();
    var buildCache = function buildCache(updater) {
        globalCache.opUpdate(fullPathStr, function(prevCache) {
            var _ref = prevCache || [
                undefined,
                undefined
            ], _ref2 = _slicedToArray(_ref, 2), _ref2$ = _ref2[0], times = _ref2$ === void 0 ? 0 : _ref2$, cache = _ref2[1];
            // HMR should always ignore cache since developer may change it
            var tmpCache = cache;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            var mergedCache = tmpCache || cacheFn();
            var data = [
                times,
                mergedCache
            ];
            // Call updater if need additional logic
            return updater ? updater(data) : data;
        });
    };
    // Create cache
    __TURBOPACK__imported__module__2211__12["useMemo"](function() {
        buildCache();
    }, /* eslint-disable react-hooks/exhaustive-deps */ [
        fullPathStr
    ]);
    var cacheEntity = globalCache.opGet(fullPathStr);
    // HMR clean the cache but not trigger `useMemo` again
    // Let's fallback of this
    // ref https://github.com/ant-design/cssinjs/issues/127
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    var cacheContent = cacheEntity[1];
    // Remove if no need anymore
    __TURBOPACK__default__export__19(function() {
        onCacheEffect === null || onCacheEffect === void 0 || onCacheEffect(cacheContent);
    }, function(polyfill) {
        // It's bad to call build again in effect.
        // But we have to do this since StrictMode will call effect twice
        // which will clear cache on the first time.
        buildCache(function(_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2), times = _ref4[0], cache = _ref4[1];
            if (polyfill && times === 0) {
                onCacheEffect === null || onCacheEffect === void 0 || onCacheEffect(cacheContent);
            }
            return [
                times + 1,
                cache
            ];
        });
        return function() {
            globalCache.opUpdate(fullPathStr, function(prevCache) {
                var _ref5 = prevCache || [], _ref6 = _slicedToArray(_ref5, 2), _ref6$ = _ref6[0], times = _ref6$ === void 0 ? 0 : _ref6$, cache = _ref6[1];
                var nextCount = times - 1;
                if (nextCount === 0) {
                    // Always remove styles in useEffect callback
                    register(function() {
                        // With polyfill, registered callback will always be called synchronously
                        // But without polyfill, it will be called in effect clean up,
                        // And by that time this cache is cleaned up.
                        if (polyfill || !globalCache.opGet(fullPathStr)) {
                            onCacheRemove === null || onCacheRemove === void 0 || onCacheRemove(cache, false);
                        }
                    });
                    return null;
                }
                return [
                    times - 1,
                    cache
                ];
            });
        };
    }, [
        fullPathStr
    ]);
    return cacheContent;
}
;
;
;
;
;
;
;
;
;
;
var EMPTY_OVERRIDE = {};
// Generate different prefix to make user selector break in production env.
// This helps developer not to do style override directly on the hash id.
var hashPrefix = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'css';
var tokenKeys = new Map();
function recordCleanToken(tokenKey) {
    tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
}
function removeStyleTags(key, instanceId) {
    if (typeof document !== 'undefined') {
        var styles = document.querySelectorAll("style[".concat(ATTR_TOKEN, "=\"").concat(key, "\"]"));
        styles.forEach(function(style) {
            if (style[CSS_IN_JS_INSTANCE] === instanceId) {
                var _style$parentNode;
                (_style$parentNode = style.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style);
            }
        });
    }
}
var TOKEN_THRESHOLD = 0;
// Remove will check current keys first
function cleanTokenStyle(tokenKey, instanceId) {
    tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
    var cleanableKeyList = new Set();
    tokenKeys.forEach(function(value, key) {
        if (value <= 0) cleanableKeyList.add(key);
    });
    // Should keep tokens under threshold for not to insert style too often
    if (tokenKeys.size - cleanableKeyList.size > TOKEN_THRESHOLD) {
        cleanableKeyList.forEach(function(key) {
            removeStyleTags(key, instanceId);
            tokenKeys.delete(key);
        });
    }
}
var getComputedToken = function getComputedToken(originToken, overrideToken, theme, format) {
    var derivativeToken = theme.getDerivativeToken(originToken);
    // Merge with override
    var mergedDerivativeToken = _objectSpread2(_objectSpread2({}, derivativeToken), overrideToken);
    // Format if needed
    if (format) {
        mergedDerivativeToken = format(mergedDerivativeToken);
    }
    return mergedDerivativeToken;
};
var TOKEN_PREFIX = 'token';
function useCacheToken(theme, tokens) {
    var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _useContext = (0, __TURBOPACK__imported__module__2211__9["useContext"])(__TURBOPACK__default__export__15), instanceId = _useContext.cache.instanceId, container = _useContext.container;
    var _option$salt = option.salt, salt = _option$salt === void 0 ? '' : _option$salt, _option$override = option.override, override = _option$override === void 0 ? EMPTY_OVERRIDE : _option$override, formatToken = option.formatToken, compute = option.getComputedToken, cssVar = option.cssVar;
    // Basic - We do basic cache here
    var mergedToken = memoResult(function() {
        return Object.assign.apply(Object, [
            {}
        ].concat(_toConsumableArray(tokens)));
    }, tokens);
    var tokenStr = flattenToken(mergedToken);
    var overrideTokenStr = flattenToken(override);
    var cssVarStr = cssVar ? flattenToken(cssVar) : '';
    var cachedToken = useGlobalCache(TOKEN_PREFIX, [
        salt,
        theme.id,
        tokenStr,
        overrideTokenStr,
        cssVarStr
    ], function() {
        var _cssVar$key;
        var mergedDerivativeToken = compute ? compute(mergedToken, override, theme) : getComputedToken(mergedToken, override, theme, formatToken);
        // Replace token value with css variables
        var actualToken = _objectSpread2({}, mergedDerivativeToken);
        var cssVarsStr = '';
        if (!!cssVar) {
            var _transformToken = transformToken(mergedDerivativeToken, cssVar.key, {
                prefix: cssVar.prefix,
                ignore: cssVar.ignore,
                unitless: cssVar.unitless,
                preserve: cssVar.preserve
            });
            var _transformToken2 = _slicedToArray(_transformToken, 2);
            mergedDerivativeToken = _transformToken2[0];
            cssVarsStr = _transformToken2[1];
        }
        // Optimize for `useStyleRegister` performance
        var tokenKey = token2key(mergedDerivativeToken, salt);
        mergedDerivativeToken._tokenKey = tokenKey;
        actualToken._tokenKey = token2key(actualToken, salt);
        var themeKey = (_cssVar$key = cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) !== null && _cssVar$key !== void 0 ? _cssVar$key : tokenKey;
        mergedDerivativeToken._themeKey = themeKey;
        recordCleanToken(themeKey);
        var hashId = "".concat(hashPrefix, "-").concat(__TURBOPACK__default__export__12(tokenKey));
        mergedDerivativeToken._hashId = hashId; // Not used
        return [
            mergedDerivativeToken,
            hashId,
            actualToken,
            cssVarsStr,
            (cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) || ''
        ];
    }, function(cache) {
        // Remove token will remove all related style
        cleanTokenStyle(cache[0]._themeKey, instanceId);
    }, function(_ref) {
        var _ref2 = _slicedToArray(_ref, 4), token = _ref2[0], cssVarsStr = _ref2[3];
        if (cssVar && cssVarsStr) {
            var style = updateCSS(cssVarsStr, __TURBOPACK__default__export__12("css-variables-".concat(token._themeKey)), {
                mark: ATTR_MARK,
                prepend: 'queue',
                attachTo: container,
                priority: -999
            });
            style[CSS_IN_JS_INSTANCE] = instanceId;
            // Used for `useCacheToken` to remove on batch when token removed
            style.setAttribute(ATTR_TOKEN, token._themeKey);
        }
    });
    return cachedToken;
}
var extract = function extract(cache, effectStyles, options) {
    var _cache = _slicedToArray(cache, 5), realToken = _cache[2], styleStr = _cache[3], cssVarKey = _cache[4];
    var _ref3 = options || {}, plain = _ref3.plain;
    if (!styleStr) {
        return null;
    }
    var styleId = realToken._tokenKey;
    var order = -999;
    // ====================== Style ======================
    // Used for rc-util
    var sharedAttrs = {
        'data-rc-order': 'prependQueue',
        'data-rc-priority': "".concat(order)
    };
    var styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
    return [
        order,
        styleId,
        styleText
    ];
};
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/hooks/useCSSVarRegister.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__16 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/hooks/useStyleRegister.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__17 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@emotion/unitless/dist/unitless.browser.esm.js [library] (ecmascript)
;
var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
};
const __TURBOPACK__default__export__22 = unitlessKeys;
// MERGED MODULE: [project]/node_modules/stylis/src/Parser.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/stylis/src/Enum.js [library] (ecmascript)
;
var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';
var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var PAGE = '@page';
var MEDIA = '@media';
var IMPORT = '@import';
var CHARSET = '@charset';
var VIEWPORT = '@viewport';
var SUPPORTS = '@supports';
var DOCUMENT = '@document';
var NAMESPACE = '@namespace';
var KEYFRAMES = '@keyframes';
var FONT_FACE = '@font-face';
var COUNTER_STYLE = '@counter-style';
var FONT_FEATURE_VALUES = '@font-feature-values';
var LAYER = '@layer';
var SCOPE = '@scope';
// MERGED MODULE: [project]/node_modules/stylis/src/Utility.js [library] (ecmascript)
;
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length) {
    return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
    return value.trim();
}
function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
}
function indexof(value, search, position) {
    return value.indexOf(search, position);
}
function charat(value, index) {
    return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
    return value.slice(begin, end);
}
function strlen(value) {
    return value.length;
}
function sizeof(value) {
    return value.length;
}
function append(value, array) {
    return array.push(value), value;
}
function combine(array, callback) {
    return array.map(callback).join('');
}
function filter(array, pattern) {
    return array.filter(function(value) {
        return !match(value, pattern);
    });
}
// MERGED MODULE: [project]/node_modules/stylis/src/Tokenizer.js [library] (ecmascript)
;
;
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';
function node(value, root, parent, type, props, children, length, siblings) {
    return {
        value: value,
        root: root,
        parent: parent,
        type: type,
        props: props,
        children: children,
        line: line,
        column: column,
        length: length,
        return: '',
        siblings: siblings
    };
}
function copy(root, props) {
    return assign(node('', null, null, '', null, null, 0, root.siblings), root, {
        length: -root.length
    }, props);
}
function lift(root) {
    while(root.root)root = copy(root.root, {
        children: [
            root
        ]
    });
    append(root, root.siblings);
}
function char() {
    return character;
}
function prev() {
    character = position > 0 ? charat(characters, --position) : 0;
    if (column--, character === 10) column = 1, line--;
    return character;
}
function next() {
    character = position < length ? charat(characters, position++) : 0;
    if (column++, character === 10) column = 1, line++;
    return character;
}
function peek() {
    return charat(characters, position);
}
function caret() {
    return position;
}
function slice(begin, end) {
    return substr(characters, begin, end);
}
function token(type) {
    switch(type){
        // \0 \t \n \r \s whitespace token
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        // ! + , / > @ ~ isolate token
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        // ; { } breakpoint token
        case 59:
        case 123:
        case 125:
            return 4;
        // : accompanied token
        case 58:
            return 3;
        // " ' ( [ opening delimit token
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        // ) ] closing delimit token
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function alloc(value) {
    return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
    return characters = '', value;
}
function delimit(type) {
    return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function tokenize(value) {
    return dealloc(tokenizer(alloc(value)));
}
function whitespace(type) {
    while(character = peek())if (character < 33) next();
    else break;
    return token(type) > 2 || token(character) > 3 ? '' : ' ';
}
function tokenizer(children) {
    while(next())switch(token(character)){
        case 0:
            append(identifier(position - 1), children);
            break;
        case 2:
            append(delimit(character), children);
            break;
        default:
            append(from(character), children);
    }
    return children;
}
function escaping(index, count) {
    while(--count && next())// not 0-9 A-F a-f
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
    while(next())switch(character){
        // ] ) " '
        case type:
            return position;
        // " '
        case 34:
        case 39:
            if (type !== 34 && type !== 39) delimiter(character);
            break;
        // (
        case 40:
            if (type === 41) delimiter(type);
            break;
        // \
        case 92:
            next();
            break;
    }
    return position;
}
function commenter(type, index) {
    while(next())// //
    if (type + character === 47 + 10) break;
    else if (type + character === 42 + 42 && peek() === 47) break;
    return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next());
}
function identifier(index) {
    while(!token(peek()))next();
    return slice(index, position);
}
;
;
;
function compile(value) {
    return dealloc(parse('', null, null, null, [
        ''
    ], value = alloc(value), 0, [
        0
    ], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character = 0;
    var type = '';
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters = type;
    while(scanning)switch(previous = character, character = next()){
        // (
        case 40:
            if (previous != 108 && charat(characters, length - 1) == 58) {
                if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f', abs(index ? points[index - 1] : 0)) != -1) ampersand = -1;
                break;
            }
        // " ' [
        case 34:
        case 39:
        case 91:
            characters += delimit(character);
            break;
        // \t \n \r \s
        case 9:
        case 10:
        case 13:
        case 32:
            characters += whitespace(previous);
            break;
        // \
        case 92:
            characters += escaping(caret() - 1, 7);
            continue;
        // /
        case 47:
            switch(peek()){
                case 42:
                case 47:
                    append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
                    if ((token(previous || 1) == 5 || token(peek() || 1) == 5) && strlen(characters) && substr(characters, -1, void 0) !== ' ') characters += ' ';
                    break;
                default:
                    characters += '/';
            }
            break;
        // {
        case 123 * variable:
            points[index++] = strlen(characters) * ampersand;
        // } ; \0
        case 125 * variable:
        case 59:
        case 0:
            switch(character){
                // \0 }
                case 0:
                case 125:
                    scanning = 0;
                // ;
                case 59 + offset:
                    if (ampersand == -1) characters = replace(characters, /\f/g, '');
                    if (property > 0 && (strlen(characters) - length || variable === 0 && previous === 47)) append(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations);
                    break;
                // @ ;
                case 59:
                    characters += ';';
                // { rule/at-rule
                default:
                    append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);
                    if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);
                    else {
                        switch(atrule){
                            // c(ontainer)
                            case 99:
                                if (charat(characters, 3) === 110) break;
                            // l(ayer)
                            case 108:
                                if (charat(characters, 2) === 97) break;
                            default:
                                offset = 0;
                            // d(ocument) m(edia) s(upports)
                            case 100:
                            case 109:
                            case 115:
                        }
                        if (offset) parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
                        else parse(characters, reference, reference, reference, [
                            ''
                        ], children, 0, points, children);
                    }
            }
            index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
            break;
        // :
        case 58:
            length = 1 + strlen(characters), property = previous;
        default:
            if (variable < 1) {
                if (character == 123) --variable;
                else if (character == 125 && variable++ == 0 && prev() == 125) continue;
            }
            switch(characters += from(character), character * variable){
                // &
                case 38:
                    ampersand = offset > 0 ? 1 : (characters += '\f', -1);
                    break;
                // ,
                case 44:
                    points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
                    break;
                // @
                case 64:
                    // -
                    if (peek() === 45) characters += delimit(next());
                    atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
                    break;
                // -
                case 45:
                    if (previous === 45 && strlen(characters) == 2) variable = 0;
            }
    }
    return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [
        ''
    ];
    var size = sizeof(rule);
    for(var i = 0, j = 0, k = 0; i < index; ++i)for(var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
    return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length, siblings);
}
function comment(value, root, parent, siblings) {
    return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
function declaration(value, root, parent, length, siblings) {
    return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length, siblings);
}
// MERGED MODULE: [project]/node_modules/stylis/src/Serializer.js [library] (ecmascript)
;
;
;
function serialize(children, callback) {
    var output = '';
    for(var i = 0; i < children.length; i++)output += callback(children[i], i, children, callback) || '';
    return output;
}
function stringify(element, index, children, callback) {
    switch(element.type){
        case LAYER:
            if (element.children.length) break;
        case IMPORT:
        case NAMESPACE:
        case DECLARATION:
            return element.return = element.return || element.value;
        case COMMENT:
            return '';
        case KEYFRAMES:
            return element.return = element.value + '{' + serialize(element.children, callback) + '}';
        case RULESET:
            if (!strlen(element.value = element.props.join(','))) return '';
    }
    return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
}
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/linters/index.js [library] (ecmascript) <module evaluation>
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/linters/contentQuotesLinter.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/linters/utils.js [library] (ecmascript)
;
;
function lintWarning(message, info) {
    var path = info.path, parentSelectors = info.parentSelectors;
    __TURBOPACK__default__export__7(false, "[Ant Design CSS-in-JS] ".concat(path ? "Error in ".concat(path, ": ") : '').concat(message).concat(parentSelectors.length ? " Selector: ".concat(parentSelectors.join(' | ')) : ''));
}
;
var linter = function linter(key, value, info) {
    if (key === 'content') {
        // From emotion: https://github.com/emotion-js/emotion/blob/main/packages/serialize/src/index.js#L63
        var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
        var contentValues = [
            'normal',
            'none',
            'initial',
            'inherit',
            'unset'
        ];
        if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
            lintWarning("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(value, "\"'`."), info);
        }
    }
};
const __TURBOPACK__default__export__23 = linter;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/linters/hashedAnimationLinter.js [library] (ecmascript)
;
;
var linter1 = function linter(key, value, info) {
    if (key === 'animation') {
        if (info.hashId && value !== 'none') {
            lintWarning("You seem to be using hashed animation '".concat(value, "', in which case 'animationName' with Keyframe as value is recommended."), info);
        }
    }
};
const __TURBOPACK__default__export__24 = linter1;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/linters/legacyNotSelectorLinter.js [library] (ecmascript)
;
;
function isConcatSelector(selector) {
    var _selector$match;
    var notContent = ((_selector$match = selector.match(/:not\(([^)]*)\)/)) === null || _selector$match === void 0 ? void 0 : _selector$match[1]) || '';
    // split selector. e.g.
    // `h1#a.b` => ['h1', #a', '.b']
    var splitCells = notContent.split(/(\[[^[]*])|(?=[.#])/).filter(function(str) {
        return str;
    });
    return splitCells.length > 1;
}
function parsePath(info) {
    return info.parentSelectors.reduce(function(prev, cur) {
        if (!prev) {
            return cur;
        }
        return cur.includes('&') ? cur.replace(/&/g, prev) : "".concat(prev, " ").concat(cur);
    }, '');
}
var linter2 = function linter(key, value, info) {
    var parentSelectorPath = parsePath(info);
    var notList = parentSelectorPath.match(/:not\([^)]*\)/g) || [];
    if (notList.length > 0 && notList.some(isConcatSelector)) {
        lintWarning("Concat ':not' selector not support in legacy browsers.", info);
    }
};
const __TURBOPACK__default__export__25 = linter2;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/linters/logicalPropertiesLinter.js [library] (ecmascript)
;
;
var linter3 = function linter(key, value, info) {
    switch(key){
        case 'marginLeft':
        case 'marginRight':
        case 'paddingLeft':
        case 'paddingRight':
        case 'left':
        case 'right':
        case 'borderLeft':
        case 'borderLeftWidth':
        case 'borderLeftStyle':
        case 'borderLeftColor':
        case 'borderRight':
        case 'borderRightWidth':
        case 'borderRightStyle':
        case 'borderRightColor':
        case 'borderTopLeftRadius':
        case 'borderTopRightRadius':
        case 'borderBottomLeftRadius':
        case 'borderBottomRightRadius':
            lintWarning("You seem to be using non-logical property '".concat(key, "' which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), info);
            return;
        case 'margin':
        case 'padding':
        case 'borderWidth':
        case 'borderStyle':
            // case 'borderColor':
            if (typeof value === 'string') {
                var valueArr = value.split(' ').map(function(item) {
                    return item.trim();
                });
                if (valueArr.length === 4 && valueArr[1] !== valueArr[3]) {
                    lintWarning("You seem to be using '".concat(key, "' property with different left ").concat(key, " and right ").concat(key, ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), info);
                }
            }
            return;
        case 'clear':
        case 'textAlign':
            if (value === 'left' || value === 'right') {
                lintWarning("You seem to be using non-logical value '".concat(value, "' of ").concat(key, ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), info);
            }
            return;
        case 'borderRadius':
            if (typeof value === 'string') {
                var radiusGroups = value.split('/').map(function(item) {
                    return item.trim();
                });
                var invalid = radiusGroups.reduce(function(result, group) {
                    if (result) {
                        return result;
                    }
                    var radiusArr = group.split(' ').map(function(item) {
                        return item.trim();
                    });
                    // borderRadius: '2px 4px'
                    if (radiusArr.length >= 2 && radiusArr[0] !== radiusArr[1]) {
                        return true;
                    }
                    // borderRadius: '4px 4px 2px'
                    if (radiusArr.length === 3 && radiusArr[1] !== radiusArr[2]) {
                        return true;
                    }
                    // borderRadius: '4px 4px 2px 4px'
                    if (radiusArr.length === 4 && radiusArr[2] !== radiusArr[3]) {
                        return true;
                    }
                    return result;
                }, false);
                if (invalid) {
                    lintWarning("You seem to be using non-logical value '".concat(value, "' of ").concat(key, ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), info);
                }
            }
            return;
        default:
    }
};
const __TURBOPACK__default__export__26 = linter3;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/linters/NaNLinter.js [library] (ecmascript)
;
;
var linter4 = function linter(key, value, info) {
    if (typeof value === 'string' && /NaN/g.test(value) || Number.isNaN(value)) {
        lintWarning("Unexpected 'NaN' in property '".concat(key, ": ").concat(value, "'."), info);
    }
};
const __TURBOPACK__default__export__27 = linter4;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/linters/parentSelectorLinter.js [library] (ecmascript)
;
;
var linter5 = function linter(key, value, info) {
    if (info.parentSelectors.some(function(selector) {
        var selectors = selector.split(',');
        return selectors.some(function(item) {
            return item.split('&').length > 2;
        });
    })) {
        lintWarning('Should not use more than one `&` in a selector.', info);
    }
};
const __TURBOPACK__default__export__28 = linter5;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/linters/index.js [library] (ecmascript) <locals>
;
;
;
;
;
;
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/util/cacheMapUtil.js [library] (ecmascript)
;
;
;
;
var ATTR_CACHE_MAP = 'data-ant-cssinjs-cache-path';
var CSS_FILE_STYLE = '_FILE_STYLE__';
function serialize1(cachePathMap) {
    return Object.keys(cachePathMap).map(function(path) {
        var hash = cachePathMap[path];
        return "".concat(path, ":").concat(hash);
    }).join(';');
}
var cachePathMap;
var fromCSSFile = true;
function reset(mockCache) {
    var fromFile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    cachePathMap = mockCache;
    fromCSSFile = fromFile;
}
function prepare() {
    if (!cachePathMap) {
        cachePathMap = {};
        if (canUseDom()) {
            var div = document.createElement('div');
            div.className = ATTR_CACHE_MAP;
            div.style.position = 'fixed';
            div.style.visibility = 'hidden';
            div.style.top = '-9999px';
            document.body.appendChild(div);
            var content = getComputedStyle(div).content || '';
            content = content.replace(/^"/, '').replace(/"$/, '');
            // Fill data
            content.split(';').forEach(function(item) {
                var _item$split = item.split(':'), _item$split2 = _slicedToArray(_item$split, 2), path = _item$split2[0], hash = _item$split2[1];
                cachePathMap[path] = hash;
            });
            // Remove inline record style
            var inlineMapStyle = document.querySelector("style[".concat(ATTR_CACHE_MAP, "]"));
            if (inlineMapStyle) {
                var _inlineMapStyle$paren;
                fromCSSFile = false;
                (_inlineMapStyle$paren = inlineMapStyle.parentNode) === null || _inlineMapStyle$paren === void 0 || _inlineMapStyle$paren.removeChild(inlineMapStyle);
            }
            document.body.removeChild(div);
        }
    }
}
function existPath(path) {
    prepare();
    return !!cachePathMap[path];
}
function getStyleAndHash(path) {
    var hash = cachePathMap[path];
    var styleStr = null;
    if (hash && canUseDom()) {
        if (fromCSSFile) {
            styleStr = CSS_FILE_STYLE;
        } else {
            var _style = document.querySelector("style[".concat(ATTR_MARK, "=\"").concat(cachePathMap[path], "\"]"));
            if (_style) {
                styleStr = _style.innerHTML;
            } else {
                // Clean up since not exist anymore
                delete cachePathMap[path];
            }
        }
    }
    return [
        styleStr,
        hash
    ];
}
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var SKIP_CHECK = '_skip_check_';
var MULTI_VALUE = '_multi_value_';
function normalizeStyle(styleStr) {
    var serialized = serialize(compile(styleStr), stringify);
    return serialized.replace(/\{%%%\:[^;];}/g, ';');
}
function isCompoundCSSProperty(value) {
    return _typeof(value) === 'object' && value && (SKIP_CHECK in value || MULTI_VALUE in value);
}
// 注入 hash 值
function injectSelectorHash(key, hashId, hashPriority) {
    if (!hashId) {
        return key;
    }
    var hashClassName = ".".concat(hashId);
    var hashSelector = hashPriority === 'low' ? ":where(".concat(hashClassName, ")") : hashClassName;
    // 注入 hashId
    var keys = key.split(',').map(function(k) {
        var _firstPath$match;
        var fullPath = k.trim().split(/\s+/);
        // 如果 Selector 第一个是 HTML Element，那我们就插到它的后面。反之，就插到最前面。
        var firstPath = fullPath[0] || '';
        var htmlElement = ((_firstPath$match = firstPath.match(/^\w+/)) === null || _firstPath$match === void 0 ? void 0 : _firstPath$match[0]) || '';
        firstPath = "".concat(htmlElement).concat(hashSelector).concat(firstPath.slice(htmlElement.length));
        return [
            firstPath
        ].concat(_toConsumableArray(fullPath.slice(1))).join(' ');
    });
    return keys.join(',');
}
var parseStyle = function parseStyle(interpolation) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        root: true,
        parentSelectors: []
    }, root = _ref.root, injectHash = _ref.injectHash, parentSelectors = _ref.parentSelectors;
    var hashId = config.hashId, layer = config.layer, path = config.path, hashPriority = config.hashPriority, _config$transformers = config.transformers, transformers = _config$transformers === void 0 ? [] : _config$transformers, _config$linters = config.linters, linters = _config$linters === void 0 ? [] : _config$linters;
    var styleStr = '';
    var effectStyle = {};
    function parseKeyframes(keyframes) {
        var animationName = keyframes.getName(hashId);
        if (!effectStyle[animationName]) {
            var _parseStyle = parseStyle(keyframes.style, config, {
                root: false,
                parentSelectors: parentSelectors
            }), _parseStyle2 = _slicedToArray(_parseStyle, 1), _parsedStr = _parseStyle2[0];
            effectStyle[animationName] = "@keyframes ".concat(keyframes.getName(hashId)).concat(_parsedStr);
        }
    }
    function flattenList(list) {
        var fullList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        list.forEach(function(item) {
            if (Array.isArray(item)) {
                flattenList(item, fullList);
            } else if (item) {
                fullList.push(item);
            }
        });
        return fullList;
    }
    var flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [
        interpolation
    ]);
    flattenStyleList.forEach(function(originStyle) {
        // Only root level can use raw string
        var style = typeof originStyle === 'string' && !root ? {} : originStyle;
        if (typeof style === 'string') {
            styleStr += "".concat(style, "\n");
        } else if (style._keyframe) {
            // Keyframe
            parseKeyframes(style);
        } else {
            var mergedStyle = transformers.reduce(function(prev, trans) {
                var _trans$visit;
                return (trans === null || trans === void 0 || (_trans$visit = trans.visit) === null || _trans$visit === void 0 ? void 0 : _trans$visit.call(trans, prev)) || prev;
            }, style);
            // Normal CSSObject
            Object.keys(mergedStyle).forEach(function(key) {
                var value = mergedStyle[key];
                if (_typeof(value) === 'object' && value && (key !== 'animationName' || !value._keyframe) && !isCompoundCSSProperty(value)) {
                    var subInjectHash = false;
                    // 当成嵌套对象来处理
                    var mergedKey = key.trim();
                    // Whether treat child as root. In most case it is false.
                    var nextRoot = false;
                    // 拆分多个选择器
                    if ((root || injectHash) && hashId) {
                        if (mergedKey.startsWith('@')) {
                            // 略过媒体查询，交给子节点继续插入 hashId
                            subInjectHash = true;
                        } else if (mergedKey === '&') {
                            // 抹掉 root selector 上的单个 &
                            mergedKey = injectSelectorHash('', hashId, hashPriority);
                        } else {
                            // 注入 hashId
                            mergedKey = injectSelectorHash(key, hashId, hashPriority);
                        }
                    } else if (root && !hashId && (mergedKey === '&' || mergedKey === '')) {
                        // In case of `{ '&': { a: { color: 'red' } } }` or `{ '': { a: { color: 'red' } } }` without hashId,
                        // we will get `&{a:{color:red;}}` or `{a:{color:red;}}` string for stylis to compile.
                        // But it does not conform to stylis syntax,
                        // and finally we will get `{color:red;}` as css, which is wrong.
                        // So we need to remove key in root, and treat child `{ a: { color: 'red' } }` as root.
                        mergedKey = '';
                        nextRoot = true;
                    }
                    var _parseStyle3 = parseStyle(value, config, {
                        root: nextRoot,
                        injectHash: subInjectHash,
                        parentSelectors: [].concat(_toConsumableArray(parentSelectors), [
                            mergedKey
                        ])
                    }), _parseStyle4 = _slicedToArray(_parseStyle3, 2), _parsedStr2 = _parseStyle4[0], childEffectStyle = _parseStyle4[1];
                    effectStyle = _objectSpread2(_objectSpread2({}, effectStyle), childEffectStyle);
                    styleStr += "".concat(mergedKey).concat(_parsedStr2);
                } else {
                    var _value;
                    function appendStyle(cssKey, cssValue) {
                        if (("TURBOPACK compile-time value", "production") !== 'production' && (_typeof(value) !== 'object' || !(value !== null && value !== void 0 && value[SKIP_CHECK]))) //TURBOPACK unreachable
                        ;
                        // 如果是样式则直接插入
                        var styleName = cssKey.replace(/[A-Z]/g, function(match) {
                            return "-".concat(match.toLowerCase());
                        });
                        // Auto suffix with px
                        var formatValue = cssValue;
                        if (!__TURBOPACK__default__export__22[cssKey] && typeof formatValue === 'number' && formatValue !== 0) {
                            formatValue = "".concat(formatValue, "px");
                        }
                        // handle animationName & Keyframe value
                        if (cssKey === 'animationName' && cssValue !== null && cssValue !== void 0 && cssValue._keyframe) {
                            parseKeyframes(cssValue);
                            formatValue = cssValue.getName(hashId);
                        }
                        styleStr += "".concat(styleName, ":").concat(formatValue, ";");
                    }
                    var actualValue = (_value = value === null || value === void 0 ? void 0 : value.value) !== null && _value !== void 0 ? _value : value;
                    if (_typeof(value) === 'object' && value !== null && value !== void 0 && value[MULTI_VALUE] && Array.isArray(actualValue)) {
                        actualValue.forEach(function(item) {
                            appendStyle(key, item);
                        });
                    } else {
                        appendStyle(key, actualValue);
                    }
                }
            });
        }
    });
    if (!root) {
        styleStr = "{".concat(styleStr, "}");
    } else if (layer) {
        // fixme: https://github.com/thysultan/stylis/pull/339
        if (styleStr) {
            styleStr = "@layer ".concat(layer.name, " {").concat(styleStr, "}");
        }
        if (layer.dependencies) {
            effectStyle["@layer ".concat(layer.name)] = layer.dependencies.map(function(deps) {
                return "@layer ".concat(deps, ", ").concat(layer.name, ";");
            }).join('\n');
        }
    }
    return [
        styleStr,
        effectStyle
    ];
};
function uniqueHash(path, styleStr) {
    return __TURBOPACK__default__export__12("".concat(path.join('%')).concat(styleStr));
}
function Empty() {
    return null;
}
var STYLE_PREFIX = 'style';
function useStyleRegister(info, styleFn) {
    var token = info.token, path = info.path, hashId = info.hashId, layer = info.layer, nonce = info.nonce, clientOnly = info.clientOnly, _info$order = info.order, order = _info$order === void 0 ? 0 : _info$order;
    var _React$useContext = __TURBOPACK__imported__module__2211__17["useContext"](__TURBOPACK__default__export__15), autoClear = _React$useContext.autoClear, mock = _React$useContext.mock, defaultCache = _React$useContext.defaultCache, hashPriority = _React$useContext.hashPriority, container = _React$useContext.container, ssrInline = _React$useContext.ssrInline, transformers = _React$useContext.transformers, linters = _React$useContext.linters, cache = _React$useContext.cache, enableLayer = _React$useContext.layer;
    var tokenKey = token._tokenKey;
    var fullPath = [
        tokenKey
    ];
    if (enableLayer) {
        fullPath.push('layer');
    }
    fullPath.push.apply(fullPath, _toConsumableArray(path));
    // Check if need insert style
    var isMergedClientSide = isClientSide;
    if (("TURBOPACK compile-time value", "production") !== 'production' && mock !== undefined) {
        isMergedClientSide = mock === 'client';
    }
    var _useGlobalCache = useGlobalCache(STYLE_PREFIX, fullPath, // Create cache if needed
    function() {
        var cachePath = fullPath.join('|');
        // Get style from SSR inline style directly
        if (existPath(cachePath)) {
            var _getStyleAndHash = getStyleAndHash(cachePath), _getStyleAndHash2 = _slicedToArray(_getStyleAndHash, 2), inlineCacheStyleStr = _getStyleAndHash2[0], styleHash = _getStyleAndHash2[1];
            if (inlineCacheStyleStr) {
                return [
                    inlineCacheStyleStr,
                    tokenKey,
                    styleHash,
                    {},
                    clientOnly,
                    order
                ];
            }
        }
        // Generate style
        var styleObj = styleFn();
        var _parseStyle5 = parseStyle(styleObj, {
            hashId: hashId,
            hashPriority: hashPriority,
            layer: enableLayer ? layer : undefined,
            path: path.join('-'),
            transformers: transformers,
            linters: linters
        }), _parseStyle6 = _slicedToArray(_parseStyle5, 2), parsedStyle = _parseStyle6[0], effectStyle = _parseStyle6[1];
        var styleStr = normalizeStyle(parsedStyle);
        var styleId = uniqueHash(fullPath, styleStr);
        return [
            styleStr,
            tokenKey,
            styleId,
            effectStyle,
            clientOnly,
            order
        ];
    }, // Remove cache if no need
    function(_ref2, fromHMR) {
        var _ref3 = _slicedToArray(_ref2, 3), styleId = _ref3[2];
        if ((fromHMR || autoClear) && isClientSide) {
            removeCSS(styleId, {
                mark: ATTR_MARK,
                attachTo: container
            });
        }
    }, // Effect: Inject style here
    function(_ref4) {
        var _ref5 = _slicedToArray(_ref4, 4), styleStr = _ref5[0], _ = _ref5[1], styleId = _ref5[2], effectStyle = _ref5[3];
        if (isMergedClientSide && styleStr !== CSS_FILE_STYLE) {
            var mergedCSSConfig = {
                mark: ATTR_MARK,
                prepend: enableLayer ? false : 'queue',
                attachTo: container,
                priority: order
            };
            var nonceStr = typeof nonce === 'function' ? nonce() : nonce;
            if (nonceStr) {
                mergedCSSConfig.csp = {
                    nonce: nonceStr
                };
            }
            // ================= Split Effect Style =================
            // We will split effectStyle here since @layer should be at the top level
            var effectLayerKeys = [];
            var effectRestKeys = [];
            Object.keys(effectStyle).forEach(function(key) {
                if (key.startsWith('@layer')) {
                    effectLayerKeys.push(key);
                } else {
                    effectRestKeys.push(key);
                }
            });
            // ================= Inject Layer Style =================
            // Inject layer style
            effectLayerKeys.forEach(function(effectKey) {
                updateCSS(normalizeStyle(effectStyle[effectKey]), "_layer-".concat(effectKey), _objectSpread2(_objectSpread2({}, mergedCSSConfig), {}, {
                    prepend: true
                }));
            });
            // ==================== Inject Style ====================
            // Inject style
            var style = updateCSS(styleStr, styleId, mergedCSSConfig);
            style[CSS_IN_JS_INSTANCE] = cache.instanceId;
            // Used for `useCacheToken` to remove on batch when token removed
            style.setAttribute(ATTR_TOKEN, tokenKey);
            // Debug usage. Dev only
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // ================ Inject Effect Style =================
            // Inject client side effect style
            effectRestKeys.forEach(function(effectKey) {
                updateCSS(normalizeStyle(effectStyle[effectKey]), "_effect-".concat(effectKey), mergedCSSConfig);
            });
        }
    }), _useGlobalCache2 = _slicedToArray(_useGlobalCache, 3), cachedStyleStr = _useGlobalCache2[0], cachedTokenKey = _useGlobalCache2[1], cachedStyleId = _useGlobalCache2[2];
    return function(node) {
        var styleNode;
        if (!ssrInline || isMergedClientSide || !defaultCache) {
            styleNode = /*#__PURE__*/ __TURBOPACK__imported__module__2211__17["createElement"](Empty, null);
        } else {
            styleNode = /*#__PURE__*/ __TURBOPACK__imported__module__2211__17["createElement"]("style", _extends({}, _defineProperty(_defineProperty({}, ATTR_TOKEN, cachedTokenKey), ATTR_MARK, cachedStyleId), {
                dangerouslySetInnerHTML: {
                    __html: cachedStyleStr
                }
            }));
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__2211__17["createElement"](__TURBOPACK__imported__module__2211__17["Fragment"], null, styleNode, node);
    };
}
var extract1 = function extract(cache, effectStyles, options) {
    var _cache = _slicedToArray(cache, 6), styleStr = _cache[0], tokenKey = _cache[1], styleId = _cache[2], effectStyle = _cache[3], clientOnly = _cache[4], order = _cache[5];
    var _ref7 = options || {}, plain = _ref7.plain;
    // Skip client only style
    if (clientOnly) {
        return null;
    }
    var keyStyleText = styleStr;
    // ====================== Share ======================
    // Used for rc-util
    var sharedAttrs = {
        'data-rc-order': 'prependQueue',
        'data-rc-priority': "".concat(order)
    };
    // ====================== Style ======================
    keyStyleText = toStyleStr(styleStr, tokenKey, styleId, sharedAttrs, plain);
    // =============== Create effect style ===============
    if (effectStyle) {
        Object.keys(effectStyle).forEach(function(effectKey) {
            // Effect style can be reused
            if (!effectStyles[effectKey]) {
                effectStyles[effectKey] = true;
                var effectStyleStr = normalizeStyle(effectStyle[effectKey]);
                var effectStyleHTML = toStyleStr(effectStyleStr, tokenKey, "_effect-".concat(effectKey), sharedAttrs, plain);
                if (effectKey.startsWith('@layer')) {
                    keyStyleText = effectStyleHTML + keyStyleText;
                } else {
                    keyStyleText += effectStyleHTML;
                }
            }
        });
    }
    return [
        order,
        styleId,
        keyStyleText
    ];
};
;
;
;
;
;
;
;
;
;
var CSS_VAR_PREFIX = 'cssVar';
var useCSSVarRegister = function useCSSVarRegister(config, fn) {
    var key = config.key, prefix = config.prefix, unitless = config.unitless, ignore = config.ignore, token = config.token, _config$scope = config.scope, scope = _config$scope === void 0 ? '' : _config$scope;
    var _useContext = (0, __TURBOPACK__imported__module__2211__16["useContext"])(__TURBOPACK__default__export__15), instanceId = _useContext.cache.instanceId, container = _useContext.container;
    var tokenKey = token._tokenKey;
    var stylePath = [].concat(_toConsumableArray(config.path), [
        key,
        scope,
        tokenKey
    ]);
    var cache = useGlobalCache(CSS_VAR_PREFIX, stylePath, function() {
        var originToken = fn();
        var _transformToken = transformToken(originToken, key, {
            prefix: prefix,
            unitless: unitless,
            ignore: ignore,
            scope: scope
        }), _transformToken2 = _slicedToArray(_transformToken, 2), mergedToken = _transformToken2[0], cssVarsStr = _transformToken2[1];
        var styleId = uniqueHash(stylePath, cssVarsStr);
        return [
            mergedToken,
            cssVarsStr,
            styleId,
            key
        ];
    }, function(_ref) {
        var _ref2 = _slicedToArray(_ref, 3), styleId = _ref2[2];
        if (isClientSide) {
            removeCSS(styleId, {
                mark: ATTR_MARK,
                attachTo: container
            });
        }
    }, function(_ref3) {
        var _ref4 = _slicedToArray(_ref3, 3), cssVarsStr = _ref4[1], styleId = _ref4[2];
        if (!cssVarsStr) {
            return;
        }
        var style = updateCSS(cssVarsStr, styleId, {
            mark: ATTR_MARK,
            prepend: 'queue',
            attachTo: container,
            priority: -999
        });
        style[CSS_IN_JS_INSTANCE] = instanceId;
        // Used for `useCacheToken` to remove on batch when token removed
        style.setAttribute(ATTR_TOKEN, key);
    });
    return cache;
};
var extract2 = function extract(cache, effectStyles, options) {
    var _cache = _slicedToArray(cache, 4), styleStr = _cache[1], styleId = _cache[2], cssVarKey = _cache[3];
    var _ref5 = options || {}, plain = _ref5.plain;
    if (!styleStr) {
        return null;
    }
    var order = -999;
    // ====================== Style ======================
    // Used for rc-util
    var sharedAttrs = {
        'data-rc-order': 'prependQueue',
        'data-rc-priority': "".concat(order)
    };
    var styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
    return [
        order,
        styleId,
        styleText
    ];
};
const __TURBOPACK__default__export__29 = useCSSVarRegister;
;
;
;
;
;
;
;
var ExtractStyleFns = _defineProperty(_defineProperty(_defineProperty({}, STYLE_PREFIX, extract1), TOKEN_PREFIX, extract), CSS_VAR_PREFIX, extract2);
function isNotNull(value) {
    return value !== null;
}
function extractStyle(cache, options) {
    var _ref = typeof options === 'boolean' ? {
        plain: options
    } : options || {}, _ref$plain = _ref.plain, plain = _ref$plain === void 0 ? false : _ref$plain, _ref$types = _ref.types, types = _ref$types === void 0 ? [
        'style',
        'token',
        'cssVar'
    ] : _ref$types, _ref$once = _ref.once, once = _ref$once === void 0 ? false : _ref$once;
    var matchPrefixRegexp = new RegExp("^(".concat((typeof types === 'string' ? [
        types
    ] : types).join('|'), ")%"));
    // prefix with `style` is used for `useStyleRegister` to cache style context
    var styleKeys = Array.from(cache.cache.keys()).filter(function(key) {
        return matchPrefixRegexp.test(key);
    });
    // Common effect styles like animation
    var effectStyles = {};
    // Mapping of cachePath to style hash
    var cachePathMap = {};
    var styleText = '';
    styleKeys.map(function(key) {
        if (once && cache.extracted.has(key)) {
            return null; // Skip if already extracted
        }
        var cachePath = key.replace(matchPrefixRegexp, '').replace(/%/g, '|');
        var _key$split = key.split('%'), _key$split2 = _slicedToArray(_key$split, 1), prefix = _key$split2[0];
        var extractFn = ExtractStyleFns[prefix];
        var extractedStyle = extractFn(cache.cache.get(key)[1], effectStyles, {
            plain: plain
        });
        if (!extractedStyle) {
            return null;
        }
        var _extractedStyle = _slicedToArray(extractedStyle, 3), order = _extractedStyle[0], styleId = _extractedStyle[1], styleStr = _extractedStyle[2];
        if (key.startsWith('style')) {
            cachePathMap[cachePath] = styleId;
        }
        // record that this style has been extracted
        cache.extracted.add(key);
        return [
            order,
            styleStr
        ];
    }).filter(isNotNull).sort(function(_ref2, _ref3) {
        var _ref4 = _slicedToArray(_ref2, 1), o1 = _ref4[0];
        var _ref5 = _slicedToArray(_ref3, 1), o2 = _ref5[0];
        return o1 - o2;
    }).forEach(function(_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2), style = _ref7[1];
        styleText += style;
    });
    // ==================== Fill Cache Path ====================
    styleText += toStyleStr(".".concat(ATTR_CACHE_MAP, "{content:\"").concat(serialize1(cachePathMap), "\";}"), undefined, undefined, _defineProperty({}, ATTR_CACHE_MAP, ATTR_CACHE_MAP), plain);
    return styleText;
}
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/Keyframes.js [library] (ecmascript)
;
;
;
;
var Keyframe = /*#__PURE__*/ function() {
    function Keyframe(name, style) {
        _classCallCheck(this, Keyframe);
        _defineProperty(this, "name", void 0);
        _defineProperty(this, "style", void 0);
        _defineProperty(this, "_keyframe", true);
        this.name = name;
        this.style = style;
    }
    _createClass(Keyframe, [
        {
            key: "getName",
            value: function getName() {
                var hashId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                return hashId ? "".concat(hashId, "-").concat(this.name) : this.name;
            }
        }
    ]);
    return Keyframe;
}();
const __TURBOPACK__default__export__30 = Keyframe;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/transformers/legacyLogicalProperties.js [library] (ecmascript)
;
;
function splitValues(value) {
    if (typeof value === 'number') {
        return [
            [
                value
            ],
            false
        ];
    }
    var rawStyle = String(value).trim();
    var importantCells = rawStyle.match(/(.*)(!important)/);
    var splitStyle = (importantCells ? importantCells[1] : rawStyle).trim().split(/\s+/);
    // Combine styles split in brackets, like `calc(1px + 2px)`
    var temp = [];
    var brackets = 0;
    return [
        splitStyle.reduce(function(list, item) {
            if (item.includes('(') || item.includes(')')) {
                var left = item.split('(').length - 1;
                var right = item.split(')').length - 1;
                brackets += left - right;
            }
            if (brackets >= 0) temp.push(item);
            if (brackets === 0) {
                list.push(temp.join(' '));
                temp = [];
            }
            return list;
        }, []),
        !!importantCells
    ];
}
function noSplit(list) {
    list.notSplit = true;
    return list;
}
var keyMap = {
    // Inset
    inset: [
        'top',
        'right',
        'bottom',
        'left'
    ],
    insetBlock: [
        'top',
        'bottom'
    ],
    insetBlockStart: [
        'top'
    ],
    insetBlockEnd: [
        'bottom'
    ],
    insetInline: [
        'left',
        'right'
    ],
    insetInlineStart: [
        'left'
    ],
    insetInlineEnd: [
        'right'
    ],
    // Margin
    marginBlock: [
        'marginTop',
        'marginBottom'
    ],
    marginBlockStart: [
        'marginTop'
    ],
    marginBlockEnd: [
        'marginBottom'
    ],
    marginInline: [
        'marginLeft',
        'marginRight'
    ],
    marginInlineStart: [
        'marginLeft'
    ],
    marginInlineEnd: [
        'marginRight'
    ],
    // Padding
    paddingBlock: [
        'paddingTop',
        'paddingBottom'
    ],
    paddingBlockStart: [
        'paddingTop'
    ],
    paddingBlockEnd: [
        'paddingBottom'
    ],
    paddingInline: [
        'paddingLeft',
        'paddingRight'
    ],
    paddingInlineStart: [
        'paddingLeft'
    ],
    paddingInlineEnd: [
        'paddingRight'
    ],
    // Border
    borderBlock: noSplit([
        'borderTop',
        'borderBottom'
    ]),
    borderBlockStart: noSplit([
        'borderTop'
    ]),
    borderBlockEnd: noSplit([
        'borderBottom'
    ]),
    borderInline: noSplit([
        'borderLeft',
        'borderRight'
    ]),
    borderInlineStart: noSplit([
        'borderLeft'
    ]),
    borderInlineEnd: noSplit([
        'borderRight'
    ]),
    // Border width
    borderBlockWidth: [
        'borderTopWidth',
        'borderBottomWidth'
    ],
    borderBlockStartWidth: [
        'borderTopWidth'
    ],
    borderBlockEndWidth: [
        'borderBottomWidth'
    ],
    borderInlineWidth: [
        'borderLeftWidth',
        'borderRightWidth'
    ],
    borderInlineStartWidth: [
        'borderLeftWidth'
    ],
    borderInlineEndWidth: [
        'borderRightWidth'
    ],
    // Border style
    borderBlockStyle: [
        'borderTopStyle',
        'borderBottomStyle'
    ],
    borderBlockStartStyle: [
        'borderTopStyle'
    ],
    borderBlockEndStyle: [
        'borderBottomStyle'
    ],
    borderInlineStyle: [
        'borderLeftStyle',
        'borderRightStyle'
    ],
    borderInlineStartStyle: [
        'borderLeftStyle'
    ],
    borderInlineEndStyle: [
        'borderRightStyle'
    ],
    // Border color
    borderBlockColor: [
        'borderTopColor',
        'borderBottomColor'
    ],
    borderBlockStartColor: [
        'borderTopColor'
    ],
    borderBlockEndColor: [
        'borderBottomColor'
    ],
    borderInlineColor: [
        'borderLeftColor',
        'borderRightColor'
    ],
    borderInlineStartColor: [
        'borderLeftColor'
    ],
    borderInlineEndColor: [
        'borderRightColor'
    ],
    // Border radius
    borderStartStartRadius: [
        'borderTopLeftRadius'
    ],
    borderStartEndRadius: [
        'borderTopRightRadius'
    ],
    borderEndStartRadius: [
        'borderBottomLeftRadius'
    ],
    borderEndEndRadius: [
        'borderBottomRightRadius'
    ]
};
function wrapImportantAndSkipCheck(value, important) {
    var parsedValue = value;
    if (important) {
        parsedValue = "".concat(parsedValue, " !important");
    }
    return {
        _skip_check_: true,
        value: parsedValue
    };
}
/**
 * Convert css logical properties to legacy properties.
 * Such as: `margin-block-start` to `margin-top`.
 * Transform list:
 * - inset
 * - margin
 * - padding
 * - border
 */ var transform = {
    visit: function visit(cssObj) {
        var clone = {};
        Object.keys(cssObj).forEach(function(key) {
            var value = cssObj[key];
            var matchValue = keyMap[key];
            if (matchValue && (typeof value === 'number' || typeof value === 'string')) {
                var _splitValues = splitValues(value), _splitValues2 = _slicedToArray(_splitValues, 2), _values = _splitValues2[0], _important = _splitValues2[1];
                if (matchValue.length && matchValue.notSplit) {
                    // not split means always give same value like border
                    matchValue.forEach(function(matchKey) {
                        clone[matchKey] = wrapImportantAndSkipCheck(value, _important);
                    });
                } else if (matchValue.length === 1) {
                    // Handle like `marginBlockStart` => `marginTop`
                    clone[matchValue[0]] = wrapImportantAndSkipCheck(_values[0], _important);
                } else if (matchValue.length === 2) {
                    // Handle like `marginBlock` => `marginTop` & `marginBottom`
                    matchValue.forEach(function(matchKey, index) {
                        var _values$index;
                        clone[matchKey] = wrapImportantAndSkipCheck((_values$index = _values[index]) !== null && _values$index !== void 0 ? _values$index : _values[0], _important);
                    });
                } else if (matchValue.length === 4) {
                    // Handle like `inset` => `top` & `right` & `bottom` & `left`
                    matchValue.forEach(function(matchKey, index) {
                        var _ref, _values$index2;
                        clone[matchKey] = wrapImportantAndSkipCheck((_ref = (_values$index2 = _values[index]) !== null && _values$index2 !== void 0 ? _values$index2 : _values[index - 2]) !== null && _ref !== void 0 ? _ref : _values[0], _important);
                    });
                } else {
                    clone[key] = value;
                }
            } else {
                clone[key] = value;
            }
        });
        return clone;
    }
};
const __TURBOPACK__default__export__31 = transform;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/transformers/px2rem.js [library] (ecmascript)
;
;
;
;
var pxRegex = /url\([^)]+\)|var\([^)]+\)|(\d*\.?\d+)px/g;
function toFixed(number, precision) {
    var multiplier = Math.pow(10, precision + 1), wholeNumber = Math.floor(number * multiplier);
    return Math.round(wholeNumber / 10) * 10 / multiplier;
}
var transform1 = function transform() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _options$rootValue = options.rootValue, rootValue = _options$rootValue === void 0 ? 16 : _options$rootValue, _options$precision = options.precision, precision = _options$precision === void 0 ? 5 : _options$precision, _options$mediaQuery = options.mediaQuery, mediaQuery = _options$mediaQuery === void 0 ? false : _options$mediaQuery;
    var pxReplace = function pxReplace(m, $1) {
        if (!$1) return m;
        var pixels = parseFloat($1);
        // covenant: pixels <= 1, not transform to rem @zombieJ
        if (pixels <= 1) return m;
        var fixedVal = toFixed(pixels / rootValue, precision);
        return "".concat(fixedVal, "rem");
    };
    var visit = function visit(cssObj) {
        var clone = _objectSpread2({}, cssObj);
        Object.entries(cssObj).forEach(function(_ref) {
            var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
            if (typeof value === 'string' && value.includes('px')) {
                var newValue = value.replace(pxRegex, pxReplace);
                clone[key] = newValue;
            }
            // no unit
            if (!__TURBOPACK__default__export__22[key] && typeof value === 'number' && value !== 0) {
                clone[key] = "".concat(value, "px").replace(pxRegex, pxReplace);
            }
            // Media queries
            var mergedKey = key.trim();
            if (mergedKey.startsWith('@') && mergedKey.includes('px') && mediaQuery) {
                var newKey = key.replace(pxRegex, pxReplace);
                clone[newKey] = clone[key];
                delete clone[key];
            }
        });
        return clone;
    };
    return {
        visit: visit
    };
};
const __TURBOPACK__default__export__32 = transform1;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/index.js [library] (ecmascript) <locals>
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/linters/legacyNotSelectorLinter.js [library] (ecmascript) <export default as legacyNotSelectorLinter>
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/linters/logicalPropertiesLinter.js [library] (ecmascript) <export default as logicalPropertiesLinter>
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/linters/NaNLinter.js [library] (ecmascript) <export default as NaNLinter>
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/linters/parentSelectorLinter.js [library] (ecmascript) <export default as parentSelectorLinter>
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/theme/createTheme.js [library] (ecmascript) <export default as createTheme>
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/theme/calc/index.js [library] (ecmascript) <export default as genCalc>
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var _experimental = {
    supportModernCSS: function supportModernCSS() {
        return supportWhere() && supportLogicProps();
    }
};
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/hooks/useCSSVarRegister.js [library] (ecmascript) <export default as useCSSVarRegister>
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/hooks/useStyleRegister.js [library] (ecmascript) <export default as useStyleRegister>
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs-utils/es/util/calc/index.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs-utils/es/util/calc/CSSCalculator.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs-utils/es/util/calc/calculator.js [library] (ecmascript)
;
;
;
var AbstractCalculator1 = /*#__PURE__*/ _createClass(function AbstractCalculator() {
    _classCallCheck(this, AbstractCalculator);
});
const __TURBOPACK__default__export__33 = AbstractCalculator1;
;
;
;
;
;
;
;
;
var CALC_UNIT1 = 'CALC_UNIT';
var regexp1 = new RegExp(CALC_UNIT1, 'g');
function unit2(value) {
    if (typeof value === 'number') {
        return "".concat(value).concat(CALC_UNIT1);
    }
    return value;
}
var CSSCalculator1 = /*#__PURE__*/ function(_AbstractCalculator) {
    _inherits(CSSCalculator, _AbstractCalculator);
    var _super = _createSuper(CSSCalculator);
    function CSSCalculator(num, unitlessCssVar) {
        var _this;
        _classCallCheck(this, CSSCalculator);
        _this = _super.call(this);
        _defineProperty(_assertThisInitialized(_this), "result", '');
        _defineProperty(_assertThisInitialized(_this), "unitlessCssVar", void 0);
        _defineProperty(_assertThisInitialized(_this), "lowPriority", void 0);
        var numType = _typeof(num);
        _this.unitlessCssVar = unitlessCssVar;
        if (num instanceof CSSCalculator) {
            _this.result = "(".concat(num.result, ")");
        } else if (numType === 'number') {
            _this.result = unit2(num);
        } else if (numType === 'string') {
            _this.result = num;
        }
        return _this;
    }
    _createClass(CSSCalculator, [
        {
            key: "add",
            value: function add(num) {
                if (num instanceof CSSCalculator) {
                    this.result = "".concat(this.result, " + ").concat(num.getResult());
                } else if (typeof num === 'number' || typeof num === 'string') {
                    this.result = "".concat(this.result, " + ").concat(unit2(num));
                }
                this.lowPriority = true;
                return this;
            }
        },
        {
            key: "sub",
            value: function sub(num) {
                if (num instanceof CSSCalculator) {
                    this.result = "".concat(this.result, " - ").concat(num.getResult());
                } else if (typeof num === 'number' || typeof num === 'string') {
                    this.result = "".concat(this.result, " - ").concat(unit2(num));
                }
                this.lowPriority = true;
                return this;
            }
        },
        {
            key: "mul",
            value: function mul(num) {
                if (this.lowPriority) {
                    this.result = "(".concat(this.result, ")");
                }
                if (num instanceof CSSCalculator) {
                    this.result = "".concat(this.result, " * ").concat(num.getResult(true));
                } else if (typeof num === 'number' || typeof num === 'string') {
                    this.result = "".concat(this.result, " * ").concat(num);
                }
                this.lowPriority = false;
                return this;
            }
        },
        {
            key: "div",
            value: function div(num) {
                if (this.lowPriority) {
                    this.result = "(".concat(this.result, ")");
                }
                if (num instanceof CSSCalculator) {
                    this.result = "".concat(this.result, " / ").concat(num.getResult(true));
                } else if (typeof num === 'number' || typeof num === 'string') {
                    this.result = "".concat(this.result, " / ").concat(num);
                }
                this.lowPriority = false;
                return this;
            }
        },
        {
            key: "getResult",
            value: function getResult(force) {
                return this.lowPriority || force ? "(".concat(this.result, ")") : this.result;
            }
        },
        {
            key: "equal",
            value: function equal(options) {
                var _this2 = this;
                var _ref = options || {}, cssUnit = _ref.unit;
                var mergedUnit = true;
                if (typeof cssUnit === 'boolean') {
                    mergedUnit = cssUnit;
                } else if (Array.from(this.unitlessCssVar).some(function(cssVar) {
                    return _this2.result.includes(cssVar);
                })) {
                    mergedUnit = false;
                }
                this.result = this.result.replace(regexp1, mergedUnit ? 'px' : '');
                if (typeof this.lowPriority !== 'undefined') {
                    return "calc(".concat(this.result, ")");
                }
                return this.result;
            }
        }
    ]);
    return CSSCalculator;
}(__TURBOPACK__default__export__33);
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs-utils/es/util/calc/NumCalculator.js [library] (ecmascript)
;
;
;
;
;
;
;
;
var NumCalculator1 = /*#__PURE__*/ function(_AbstractCalculator) {
    _inherits(NumCalculator, _AbstractCalculator);
    var _super = _createSuper(NumCalculator);
    function NumCalculator(num) {
        var _this;
        _classCallCheck(this, NumCalculator);
        _this = _super.call(this);
        _defineProperty(_assertThisInitialized(_this), "result", 0);
        if (num instanceof NumCalculator) {
            _this.result = num.result;
        } else if (typeof num === 'number') {
            _this.result = num;
        }
        return _this;
    }
    _createClass(NumCalculator, [
        {
            key: "add",
            value: function add(num) {
                if (num instanceof NumCalculator) {
                    this.result += num.result;
                } else if (typeof num === 'number') {
                    this.result += num;
                }
                return this;
            }
        },
        {
            key: "sub",
            value: function sub(num) {
                if (num instanceof NumCalculator) {
                    this.result -= num.result;
                } else if (typeof num === 'number') {
                    this.result -= num;
                }
                return this;
            }
        },
        {
            key: "mul",
            value: function mul(num) {
                if (num instanceof NumCalculator) {
                    this.result *= num.result;
                } else if (typeof num === 'number') {
                    this.result *= num;
                }
                return this;
            }
        },
        {
            key: "div",
            value: function div(num) {
                if (num instanceof NumCalculator) {
                    this.result /= num.result;
                } else if (typeof num === 'number') {
                    this.result /= num;
                }
                return this;
            }
        },
        {
            key: "equal",
            value: function equal() {
                return this.result;
            }
        }
    ]);
    return NumCalculator;
}(__TURBOPACK__default__export__33);
const __TURBOPACK__default__export__34 = NumCalculator1;
;
;
var genCalc1 = function genCalc(type, unitlessCssVar) {
    var Calculator = type === 'css' ? CSSCalculator1 : __TURBOPACK__default__export__34;
    return function(num) {
        return new Calculator(num, unitlessCssVar);
    };
};
const __TURBOPACK__default__export__35 = genCalc1;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs-utils/es/util/getCompVarPrefix.js [library] (ecmascript)
;
var getCompVarPrefix = function getCompVarPrefix(component, prefix) {
    return "".concat([
        prefix,
        component.replace(/([A-Z]+)([A-Z][a-z]+)/g, '$1-$2').replace(/([a-z])([A-Z])/g, '$1-$2')
    ].filter(Boolean).join('-'));
};
const __TURBOPACK__default__export__36 = getCompVarPrefix;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs-utils/es/util/getComponentToken.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/rc-util/es/index.js [library] (ecmascript) <module evaluation>
;
// MERGED MODULE: [project]/node_modules/rc-util/es/hooks/useEvent.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__18 = __TURBOPACK__imported__module__2211__;
;
function useEvent(callback) {
    var fnRef = __TURBOPACK__imported__module__2211__18["useRef"]();
    fnRef.current = callback;
    var memoFn = __TURBOPACK__imported__module__2211__18["useCallback"](function() {
        var _fnRef$current;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [
            fnRef
        ].concat(args));
    }, []);
    return memoFn;
}
// MERGED MODULE: [project]/node_modules/rc-util/es/hooks/useMergedState.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/rc-util/es/hooks/useState.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__19 = __TURBOPACK__imported__module__2211__;
;
;
function useSafeState(defaultValue) {
    var destroyRef = __TURBOPACK__imported__module__2211__19["useRef"](false);
    var _React$useState = __TURBOPACK__imported__module__2211__19["useState"](defaultValue), _React$useState2 = _slicedToArray(_React$useState, 2), value = _React$useState2[0], setValue = _React$useState2[1];
    __TURBOPACK__imported__module__2211__19["useEffect"](function() {
        destroyRef.current = false;
        return function() {
            destroyRef.current = true;
        };
    }, []);
    function safeSetState(updater, ignoreDestroy) {
        if (ignoreDestroy && destroyRef.current) {
            return;
        }
        setValue(updater);
    }
    return [
        value,
        safeSetState
    ];
}
;
;
;
;
/** We only think `undefined` is empty */ function hasValue(value) {
    return value !== undefined;
}
function useMergedState(defaultStateValue, option) {
    var _ref = option || {}, defaultValue = _ref.defaultValue, value = _ref.value, onChange = _ref.onChange, postState = _ref.postState;
    // ======================= Init =======================
    var _useState = useSafeState(function() {
        if (hasValue(value)) {
            return value;
        } else if (hasValue(defaultValue)) {
            return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        } else {
            return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
        }
    }), _useState2 = _slicedToArray(_useState, 2), innerValue = _useState2[0], setInnerValue = _useState2[1];
    var mergedValue = value !== undefined ? value : innerValue;
    var postMergedValue = postState ? postState(mergedValue) : mergedValue;
    // ====================== Change ======================
    var onChangeFn = useEvent(onChange);
    var _useState3 = useSafeState([
        mergedValue
    ]), _useState4 = _slicedToArray(_useState3, 2), prevValue = _useState4[0], setPrevValue = _useState4[1];
    useLayoutUpdateEffect(function() {
        var prev = prevValue[0];
        if (innerValue !== prev) {
            onChangeFn(innerValue, prev);
        }
    }, [
        prevValue
    ]);
    // Sync value back to `undefined` when it from control to un-control
    useLayoutUpdateEffect(function() {
        if (!hasValue(value)) {
            setInnerValue(value);
        }
    }, [
        value
    ]);
    // ====================== Update ======================
    var triggerChange = useEvent(function(updater, ignoreDestroy) {
        setInnerValue(updater, ignoreDestroy);
        setPrevValue([
            mergedValue
        ], ignoreDestroy);
    });
    return [
        postMergedValue,
        triggerChange
    ];
}
// MERGED MODULE: [project]/node_modules/rc-util/es/ref.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__20 = __TURBOPACK__imported__module__2211__;
var __TURBOPACK__imported__module__4354__ = __turbopack_context__.i(4354);
// MERGED MODULE: [project]/node_modules/rc-util/es/React/isFragment.js [library] (ecmascript)
;
;
var REACT_ELEMENT_TYPE_18 = Symbol.for('react.element');
var REACT_ELEMENT_TYPE_19 = Symbol.for('react.transitional.element');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
function isFragment(object) {
    return(// Base object type
    object && _typeof(object) === 'object' && (// React Element type
    object.$$typeof === REACT_ELEMENT_TYPE_18 || object.$$typeof === REACT_ELEMENT_TYPE_19) && // React Fragment type
    object.type === REACT_FRAGMENT_TYPE);
}
;
;
;
;
;
var ReactMajorVersion = Number(__TURBOPACK__imported__module__2211__20["version"].split('.')[0]);
var fillRef = function fillRef(ref, node) {
    if (typeof ref === 'function') {
        ref(node);
    } else if (_typeof(ref) === 'object' && ref && 'current' in ref) {
        ref.current = node;
    }
};
var composeRef = function composeRef() {
    for(var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++){
        refs[_key] = arguments[_key];
    }
    var refList = refs.filter(Boolean);
    if (refList.length <= 1) {
        return refList[0];
    }
    return function(node) {
        refs.forEach(function(ref) {
            fillRef(ref, node);
        });
    };
};
var useComposeRef = function useComposeRef() {
    for(var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
        refs[_key2] = arguments[_key2];
    }
    return useMemo(function() {
        return composeRef.apply(void 0, refs);
    }, refs, function(prev, next) {
        return prev.length !== next.length || prev.every(function(ref, i) {
            return ref !== next[i];
        });
    });
};
var supportRef = function supportRef(nodeOrComponent) {
    var _type$prototype, _nodeOrComponent$prot;
    if (!nodeOrComponent) {
        return false;
    }
    // React 19 no need `forwardRef` anymore. So just pass if is a React element.
    if (isReactElement(nodeOrComponent) && ReactMajorVersion >= 19) {
        return true;
    }
    var type = (0, __TURBOPACK__imported__module__4354__["isMemo"])(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;
    // Function component node
    if (typeof type === 'function' && !((_type$prototype = type.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render) && type.$$typeof !== __TURBOPACK__imported__module__4354__["ForwardRef"]) {
        return false;
    }
    // Class component
    if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render) && nodeOrComponent.$$typeof !== __TURBOPACK__imported__module__4354__["ForwardRef"]) {
        return false;
    }
    return true;
};
function isReactElement(node) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__2211__20["isValidElement"])(node) && !isFragment(node);
}
var supportNodeRef = function supportNodeRef(node) {
    return isReactElement(node) && supportRef(node);
};
var getNodeRef = function getNodeRef(node) {
    if (node && isReactElement(node)) {
        var ele = node;
        // Source from:
        // https://github.com/mui/material-ui/blob/master/packages/mui-utils/src/getReactNodeRef/getReactNodeRef.ts
        return ele.props.propertyIsEnumerable('ref') ? ele.props.ref : ele.ref;
    }
    return null;
};
// MERGED MODULE: [project]/node_modules/rc-util/es/utils/get.js [library] (ecmascript)
;
function get(entity, path) {
    var current = entity;
    for(var i = 0; i < path.length; i += 1){
        if (current === null || current === undefined) {
            return undefined;
        }
        current = current[path[i]];
    }
    return current;
}
// MERGED MODULE: [project]/node_modules/rc-util/es/utils/set.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@babel/runtime/helpers/esm/toArray.js [library] (ecmascript)
;
;
;
;
;
function _toArray(r) {
    return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest();
}
;
;
;
;
;
;
function internalSet(entity, paths, value, removeIfUndefined) {
    if (!paths.length) {
        return value;
    }
    var _paths = _toArray(paths), path = _paths[0], restPath = _paths.slice(1);
    var clone;
    if (!entity && typeof path === 'number') {
        clone = [];
    } else if (Array.isArray(entity)) {
        clone = _toConsumableArray(entity);
    } else {
        clone = _objectSpread2({}, entity);
    }
    // Delete prop if `removeIfUndefined` and value is undefined
    if (removeIfUndefined && value === undefined && restPath.length === 1) {
        delete clone[path][restPath[0]];
    } else {
        clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
    }
    return clone;
}
function set(entity, paths, value) {
    var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    // Do nothing if `removeIfUndefined` and parent object not exist
    if (paths.length && removeIfUndefined && value === undefined && !get(entity, paths.slice(0, -1))) {
        return entity;
    }
    return internalSet(entity, paths, value, removeIfUndefined);
}
function isObject(obj) {
    return _typeof(obj) === 'object' && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
function createEmpty(source) {
    return Array.isArray(source) ? [] : {};
}
var keys = typeof Reflect === 'undefined' ? Object.keys : Reflect.ownKeys;
function merge() {
    for(var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++){
        sources[_key] = arguments[_key];
    }
    var clone = createEmpty(sources[0]);
    sources.forEach(function(src) {
        function internalMerge(path, parentLoopSet) {
            var loopSet = new Set(parentLoopSet);
            var value = get(src, path);
            var isArr = Array.isArray(value);
            if (isArr || isObject(value)) {
                // Only add not loop obj
                if (!loopSet.has(value)) {
                    loopSet.add(value);
                    var originValue = get(clone, path);
                    if (isArr) {
                        // Array will always be override
                        clone = set(clone, path, []);
                    } else if (!originValue || _typeof(originValue) !== 'object') {
                        // Init container if not exist
                        clone = set(clone, path, createEmpty(value));
                    }
                    keys(value).forEach(function(key) {
                        internalMerge([].concat(_toConsumableArray(path), [
                            key
                        ]), loopSet);
                    });
                }
            } else {
                clone = set(clone, path, value);
            }
        }
        internalMerge([]);
    });
    return clone;
}
// MERGED MODULE: [project]/node_modules/rc-util/es/index.js [library] (ecmascript) <locals>
;
;
;
;
;
;
;
;
;
;
function getComponentToken(component, token, defaultToken, options) {
    var customToken = _objectSpread2({}, token[component]);
    if (options !== null && options !== void 0 && options.deprecatedTokens) {
        var deprecatedTokens = options.deprecatedTokens;
        deprecatedTokens.forEach(function(_ref) {
            var _ref2 = _slicedToArray(_ref, 2), oldTokenKey = _ref2[0], newTokenKey = _ref2[1];
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Should wrap with `if` clause, or there will be `undefined` in object.
            if (customToken !== null && customToken !== void 0 && customToken[oldTokenKey] || customToken !== null && customToken !== void 0 && customToken[newTokenKey]) {
                var _customToken$newToken;
                (_customToken$newToken = customToken[newTokenKey]) !== null && _customToken$newToken !== void 0 ? _customToken$newToken : customToken[newTokenKey] = customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey];
            }
        });
    }
    var mergedToken = _objectSpread2(_objectSpread2({}, defaultToken), customToken);
    // Remove same value as global token to minimize size
    Object.keys(mergedToken).forEach(function(key) {
        if (mergedToken[key] === token[key]) {
            delete mergedToken[key];
        }
    });
    return mergedToken;
}
const __TURBOPACK__default__export__37 = getComponentToken;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs-utils/es/util/getDefaultComponentToken.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [library] (ecmascript)
;
;
;
var enableStatistic = ("TURBOPACK compile-time value", "production") !== 'production' || typeof CSSINJS_STATISTIC !== 'undefined';
var recording = true;
function merge1() {
    for(var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++){
        objs[_key] = arguments[_key];
    }
    /* istanbul ignore next */ if (!enableStatistic) {
        return Object.assign.apply(Object, [
            {}
        ].concat(objs));
    }
    recording = false;
    var ret = {};
    objs.forEach(function(obj) {
        if (_typeof(obj) !== 'object') {
            return;
        }
        var keys = Object.keys(obj);
        keys.forEach(function(key) {
            Object.defineProperty(ret, key, {
                configurable: true,
                enumerable: true,
                get: function get() {
                    return obj[key];
                }
            });
        });
    });
    recording = true;
    return ret;
}
var statistic = {};
var _statistic_build_ = {};
/* istanbul ignore next */ function noop() {}
/** Statistic token usage case. Should use `merge` function if you do not want spread record. */ var statisticToken = function statisticToken(token) {
    var tokenKeys;
    var proxy = token;
    var flush = noop;
    if (enableStatistic && typeof Proxy !== 'undefined') {
        tokenKeys = new Set();
        proxy = new Proxy(token, {
            get: function get(obj, prop) {
                if (recording) {
                    var _tokenKeys;
                    (_tokenKeys = tokenKeys) === null || _tokenKeys === void 0 || _tokenKeys.add(prop);
                }
                return obj[prop];
            }
        });
        flush = function flush(componentName, componentToken) {
            var _statistic$componentN;
            statistic[componentName] = {
                global: Array.from(tokenKeys),
                component: _objectSpread2(_objectSpread2({}, (_statistic$componentN = statistic[componentName]) === null || _statistic$componentN === void 0 ? void 0 : _statistic$componentN.component), componentToken)
            };
        };
    }
    return {
        token: proxy,
        keys: tokenKeys,
        flush: flush
    };
};
const __TURBOPACK__default__export__38 = statisticToken;
;
function getDefaultComponentToken(component, token, getDefaultToken) {
    if (typeof getDefaultToken === 'function') {
        var _token$component;
        return getDefaultToken(merge1(token, (_token$component = token[component]) !== null && _token$component !== void 0 ? _token$component : {}));
    }
    return getDefaultToken !== null && getDefaultToken !== void 0 ? getDefaultToken : {};
}
const __TURBOPACK__default__export__39 = getDefaultComponentToken;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs-utils/es/util/maxmin.js [library] (ecmascript)
;
;
function genMaxMin(type) {
    if (type === 'js') {
        return {
            max: Math.max,
            min: Math.min
        };
    }
    return {
        max: function max() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return "max(".concat(args.map(function(value) {
                return unit1(value);
            }).join(','), ")");
        },
        min: function min() {
            for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
                args[_key2] = arguments[_key2];
            }
            return "min(".concat(args.map(function(value) {
                return unit1(value);
            }).join(','), ")");
        }
    };
}
const __TURBOPACK__default__export__40 = genMaxMin;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs-utils/es/_util/hooks/useUniqueMemo.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__21 = __TURBOPACK__imported__module__2211__;
;
;
;
;
;
var BEAT_LIMIT = 1000 * 60 * 10;
/**
 * A helper class to map keys to values.
 * It supports both primitive keys and object keys.
 */ var ArrayKeyMap = /*#__PURE__*/ function() {
    function ArrayKeyMap() {
        _classCallCheck(this, ArrayKeyMap);
        _defineProperty(this, "map", new Map());
        // Use WeakMap to avoid memory leak
        _defineProperty(this, "objectIDMap", new WeakMap());
        _defineProperty(this, "nextID", 0);
        _defineProperty(this, "lastAccessBeat", new Map());
        // We will clean up the cache when reach the limit
        _defineProperty(this, "accessBeat", 0);
    }
    _createClass(ArrayKeyMap, [
        {
            key: "set",
            value: function set(keys, value) {
                // New set will trigger clear
                this.clear();
                // Set logic
                var compositeKey = this.getCompositeKey(keys);
                this.map.set(compositeKey, value);
                this.lastAccessBeat.set(compositeKey, Date.now());
            }
        },
        {
            key: "get",
            value: function get(keys) {
                var compositeKey = this.getCompositeKey(keys);
                var cache = this.map.get(compositeKey);
                this.lastAccessBeat.set(compositeKey, Date.now());
                this.accessBeat += 1;
                return cache;
            }
        },
        {
            key: "getCompositeKey",
            value: function getCompositeKey(keys) {
                var _this = this;
                var ids = keys.map(function(key) {
                    if (key && _typeof(key) === 'object') {
                        return "obj_".concat(_this.getObjectID(key));
                    }
                    return "".concat(_typeof(key), "_").concat(key);
                });
                return ids.join('|');
            }
        },
        {
            key: "getObjectID",
            value: function getObjectID(obj) {
                if (this.objectIDMap.has(obj)) {
                    return this.objectIDMap.get(obj);
                }
                var id = this.nextID;
                this.objectIDMap.set(obj, id);
                this.nextID += 1;
                return id;
            }
        },
        {
            key: "clear",
            value: function clear() {
                var _this2 = this;
                if (this.accessBeat > 10000) {
                    var now = Date.now();
                    this.lastAccessBeat.forEach(function(beat, key) {
                        if (now - beat > BEAT_LIMIT) {
                            _this2.map.delete(key);
                            _this2.lastAccessBeat.delete(key);
                        }
                    });
                    this.accessBeat = 0;
                }
            }
        }
    ]);
    return ArrayKeyMap;
}();
var uniqueMap = new ArrayKeyMap();
/**
 * Like `useMemo`, but this hook result will be shared across all instances.
 */ function useUniqueMemo(memoFn, deps) {
    return __TURBOPACK__imported__module__2211__21["default"].useMemo(function() {
        var cachedValue = uniqueMap.get(deps);
        if (cachedValue) {
            return cachedValue;
        }
        var newValue = memoFn();
        uniqueMap.set(deps, newValue);
        return newValue;
    }, deps);
}
const __TURBOPACK__default__export__41 = useUniqueMemo;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs-utils/es/hooks/useCSP.js [library] (ecmascript)
;
/**
 * Provide a default hook since not everyone needs to config this.
 */ var useDefaultCSP = function useDefaultCSP() {
    return {};
};
const __TURBOPACK__default__export__42 = useDefaultCSP;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function genStyleUtils(config) {
    // Dependency inversion for preparing basic config.
    var _config$useCSP = config.useCSP, useCSP = _config$useCSP === void 0 ? __TURBOPACK__default__export__42 : _config$useCSP, useToken = config.useToken, usePrefix = config.usePrefix, getResetStyles = config.getResetStyles, getCommonStyle = config.getCommonStyle, getCompUnitless = config.getCompUnitless;
    function genStyleHooks(component, styleFn, getDefaultToken, options) {
        var componentName = Array.isArray(component) ? component[0] : component;
        function prefixToken(key) {
            return "".concat(String(componentName)).concat(key.slice(0, 1).toUpperCase()).concat(key.slice(1));
        }
        // Fill unitless
        var originUnitless = (options === null || options === void 0 ? void 0 : options.unitless) || {};
        var originCompUnitless = typeof getCompUnitless === 'function' ? getCompUnitless(component) : {};
        var compUnitless = _objectSpread2(_objectSpread2({}, originCompUnitless), {}, _defineProperty({}, prefixToken('zIndexPopup'), true));
        Object.keys(originUnitless).forEach(function(key) {
            compUnitless[prefixToken(key)] = originUnitless[key];
        });
        // Options
        var mergedOptions = _objectSpread2(_objectSpread2({}, options), {}, {
            unitless: compUnitless,
            prefixToken: prefixToken
        });
        // Hooks
        var useStyle = genComponentStyleHook(component, styleFn, getDefaultToken, mergedOptions);
        var useCSSVar = genCSSVarRegister(componentName, getDefaultToken, mergedOptions);
        return function(prefixCls) {
            var rootCls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : prefixCls;
            var _useStyle = useStyle(prefixCls, rootCls), _useStyle2 = _slicedToArray(_useStyle, 2), hashId = _useStyle2[1];
            var _useCSSVar = useCSSVar(rootCls), _useCSSVar2 = _slicedToArray(_useCSSVar, 2), wrapCSSVar = _useCSSVar2[0], cssVarCls = _useCSSVar2[1];
            return [
                wrapCSSVar,
                hashId,
                cssVarCls
            ];
        };
    }
    function genCSSVarRegister(component, getDefaultToken, options) {
        var compUnitless = options.unitless, _options$injectStyle = options.injectStyle, injectStyle = _options$injectStyle === void 0 ? true : _options$injectStyle, prefixToken = options.prefixToken, ignore = options.ignore;
        var CSSVarRegister = function CSSVarRegister(_ref) {
            var rootCls = _ref.rootCls, _ref$cssVar = _ref.cssVar, cssVar = _ref$cssVar === void 0 ? {} : _ref$cssVar;
            var _useToken = useToken(), realToken = _useToken.realToken;
            __TURBOPACK__default__export__29({
                path: [
                    component
                ],
                prefix: cssVar.prefix,
                key: cssVar.key,
                unitless: compUnitless,
                ignore: ignore,
                token: realToken,
                scope: rootCls
            }, function() {
                var defaultToken = __TURBOPACK__default__export__39(component, realToken, getDefaultToken);
                var componentToken = __TURBOPACK__default__export__37(component, realToken, defaultToken, {
                    deprecatedTokens: options === null || options === void 0 ? void 0 : options.deprecatedTokens
                });
                Object.keys(defaultToken).forEach(function(key) {
                    componentToken[prefixToken(key)] = componentToken[key];
                    delete componentToken[key];
                });
                return componentToken;
            });
            return null;
        };
        var useCSSVar = function useCSSVar(rootCls) {
            var _useToken2 = useToken(), cssVar = _useToken2.cssVar;
            return [
                function(node) {
                    return injectStyle && cssVar ? /*#__PURE__*/ __TURBOPACK__imported__module__2211__8["default"].createElement(__TURBOPACK__imported__module__2211__8["default"].Fragment, null, /*#__PURE__*/ __TURBOPACK__imported__module__2211__8["default"].createElement(CSSVarRegister, {
                        rootCls: rootCls,
                        cssVar: cssVar,
                        component: component
                    }), node) : node;
                },
                cssVar === null || cssVar === void 0 ? void 0 : cssVar.key
            ];
        };
        return useCSSVar;
    }
    function genComponentStyleHook(componentName, styleFn, getDefaultToken) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var cells = Array.isArray(componentName) ? componentName : [
            componentName,
            componentName
        ];
        var _cells = _slicedToArray(cells, 1), component = _cells[0];
        var concatComponent = cells.join('-');
        var mergedLayer = config.layer || {
            name: 'antd'
        };
        // Return new style hook
        return function(prefixCls) {
            var rootCls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : prefixCls;
            var _useToken3 = useToken(), theme = _useToken3.theme, realToken = _useToken3.realToken, hashId = _useToken3.hashId, token = _useToken3.token, cssVar = _useToken3.cssVar;
            var _usePrefix = usePrefix(), rootPrefixCls = _usePrefix.rootPrefixCls, iconPrefixCls = _usePrefix.iconPrefixCls;
            var csp = useCSP();
            var type = cssVar ? 'css' : 'js';
            // Use unique memo to share the result across all instances
            var calc = __TURBOPACK__default__export__41(function() {
                var unitlessCssVar = new Set();
                if (cssVar) {
                    Object.keys(options.unitless || {}).forEach(function(key) {
                        // Some component proxy the AliasToken (e.g. Image) and some not (e.g. Modal)
                        // We should both pass in `unitlessCssVar` to make sure the CSSVar can be unitless.
                        unitlessCssVar.add(token2CSSVar(key, cssVar.prefix));
                        unitlessCssVar.add(token2CSSVar(key, __TURBOPACK__default__export__36(component, cssVar.prefix)));
                    });
                }
                return __TURBOPACK__default__export__35(type, unitlessCssVar);
            }, [
                type,
                component,
                cssVar === null || cssVar === void 0 ? void 0 : cssVar.prefix
            ]);
            var _genMaxMin = __TURBOPACK__default__export__40(type), max = _genMaxMin.max, min = _genMaxMin.min;
            // Shared config
            var sharedConfig = {
                theme: theme,
                token: token,
                hashId: hashId,
                nonce: function nonce() {
                    return csp.nonce;
                },
                clientOnly: options.clientOnly,
                layer: mergedLayer,
                // antd is always at top of styles
                order: options.order || -999
            };
            // This if statement is safe, as it will only be used if the generator has the function. It's not dynamic.
            if (typeof getResetStyles === 'function') {
                // Generate style for all need reset tags.
                useStyleRegister(_objectSpread2(_objectSpread2({}, sharedConfig), {}, {
                    clientOnly: false,
                    path: [
                        'Shared',
                        rootPrefixCls
                    ]
                }), function() {
                    return getResetStyles(token, {
                        prefix: {
                            rootPrefixCls: rootPrefixCls,
                            iconPrefixCls: iconPrefixCls
                        },
                        csp: csp
                    });
                });
            }
            var wrapSSR = useStyleRegister(_objectSpread2(_objectSpread2({}, sharedConfig), {}, {
                path: [
                    concatComponent,
                    prefixCls,
                    iconPrefixCls
                ]
            }), function() {
                if (options.injectStyle === false) {
                    return [];
                }
                var _statisticToken = __TURBOPACK__default__export__38(token), proxyToken = _statisticToken.token, flush = _statisticToken.flush;
                var defaultComponentToken = __TURBOPACK__default__export__39(component, realToken, getDefaultToken);
                var componentCls = ".".concat(prefixCls);
                var componentToken = __TURBOPACK__default__export__37(component, realToken, defaultComponentToken, {
                    deprecatedTokens: options.deprecatedTokens
                });
                if (cssVar && defaultComponentToken && _typeof(defaultComponentToken) === 'object') {
                    Object.keys(defaultComponentToken).forEach(function(key) {
                        defaultComponentToken[key] = "var(".concat(token2CSSVar(key, __TURBOPACK__default__export__36(component, cssVar.prefix)), ")");
                    });
                }
                var mergedToken = merge1(proxyToken, {
                    componentCls: componentCls,
                    prefixCls: prefixCls,
                    iconCls: ".".concat(iconPrefixCls),
                    antCls: ".".concat(rootPrefixCls),
                    calc: calc,
                    // @ts-ignore
                    max: max,
                    // @ts-ignore
                    min: min
                }, cssVar ? defaultComponentToken : componentToken);
                var styleInterpolation = styleFn(mergedToken, {
                    hashId: hashId,
                    prefixCls: prefixCls,
                    rootPrefixCls: rootPrefixCls,
                    iconPrefixCls: iconPrefixCls
                });
                flush(component, componentToken);
                var commonStyle = typeof getCommonStyle === 'function' ? getCommonStyle(mergedToken, prefixCls, rootCls, options.resetFont) : null;
                return [
                    options.resetStyle === false ? null : commonStyle,
                    styleInterpolation
                ];
            });
            return [
                wrapSSR,
                hashId
            ];
        };
    }
    function genSubStyleComponent(componentName, styleFn, getDefaultToken) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var useStyle = genComponentStyleHook(componentName, styleFn, getDefaultToken, _objectSpread2({
            resetStyle: false,
            // Sub Style should default after root one
            order: -998
        }, options));
        var StyledComponent = function StyledComponent(_ref2) {
            var prefixCls = _ref2.prefixCls, _ref2$rootCls = _ref2.rootCls, rootCls = _ref2$rootCls === void 0 ? prefixCls : _ref2$rootCls;
            useStyle(prefixCls, rootCls);
            return null;
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return StyledComponent;
    }
    return {
        genStyleHooks: genStyleHooks,
        genSubStyleComponent: genSubStyleComponent,
        genComponentStyleHook: genComponentStyleHook
    };
}
const __TURBOPACK__default__export__43 = genStyleUtils;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs-utils/es/index.js [library] (ecmascript) <locals>
;
;
;
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [library] (ecmascript) <export merge as mergeToken>
;
// MERGED MODULE: [project]/components/theme/genStyleUtils.ts [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs-utils/es/util/genStyleUtils.js [library] (ecmascript) <export default as genStyleUtils>
;
// MERGED MODULE: [project]/components/theme/useToken.ts [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/hooks/useCacheToken.js [library] (ecmascript) <export default as useCacheToken>
;
var __TURBOPACK__imported__module__7454__3 = __TURBOPACK__imported__module__7454__;
// MERGED MODULE: [project]/node_modules/antd/es/theme/useToken.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__22 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/antd/es/version/index.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/antd/es/version/version.js [library] (ecmascript)
;
const __TURBOPACK__default__export__44 = '5.27.3';
"use client";
;
const __TURBOPACK__default__export__45 = __TURBOPACK__default__export__44;
// MERGED MODULE: [project]/node_modules/antd/es/theme/themes/default/theme.js [library] (ecmascript) <export default as defaultTheme>
;
// MERGED MODULE: [project]/node_modules/antd/es/theme/themes/default/theme.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/antd/es/theme/themes/default/index.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/antd/es/theme/themes/seed.js [library] (ecmascript)
;
const defaultPresetColors = {
    blue: '#1677FF',
    purple: '#722ED1',
    cyan: '#13C2C2',
    green: '#52C41A',
    magenta: '#EB2F96',
    /**
   * @deprecated Use magenta instead
   */ pink: '#EB2F96',
    red: '#F5222D',
    orange: '#FA8C16',
    yellow: '#FADB14',
    volcano: '#FA541C',
    geekblue: '#2F54EB',
    gold: '#FAAD14',
    lime: '#A0D911'
};
const seedToken = Object.assign(Object.assign({}, defaultPresetColors), {
    // Color
    colorPrimary: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    colorLink: '',
    colorTextBase: '',
    colorBgBase: '',
    // Font
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
    fontSize: 14,
    // Line
    lineWidth: 1,
    lineType: 'solid',
    // Motion
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    // Radius
    borderRadius: 6,
    // Size
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    // Control Base
    controlHeight: 32,
    // zIndex
    zIndexBase: 0,
    zIndexPopupBase: 1000,
    // Image
    opacityImage: 1,
    // Wireframe
    wireframe: false,
    // Motion
    motion: true
});
const __TURBOPACK__default__export__46 = seedToken;
// MERGED MODULE: [project]/node_modules/antd/es/theme/themes/shared/genColorMapToken.js [library] (ecmascript)
;
;
function genColorMapToken(seed, { generateColorPalettes, generateNeutralColorPalettes }) {
    const { colorSuccess: colorSuccessBase, colorWarning: colorWarningBase, colorError: colorErrorBase, colorInfo: colorInfoBase, colorPrimary: colorPrimaryBase, colorBgBase, colorTextBase } = seed;
    const primaryColors = generateColorPalettes(colorPrimaryBase);
    const successColors = generateColorPalettes(colorSuccessBase);
    const warningColors = generateColorPalettes(colorWarningBase);
    const errorColors = generateColorPalettes(colorErrorBase);
    const infoColors = generateColorPalettes(colorInfoBase);
    const neutralColors = generateNeutralColorPalettes(colorBgBase, colorTextBase);
    // Color Link
    const colorLink = seed.colorLink || seed.colorInfo;
    const linkColors = generateColorPalettes(colorLink);
    const colorErrorBgFilledHover = new FastColor(errorColors[1]).mix(new FastColor(errorColors[3]), 50).toHexString();
    return Object.assign(Object.assign({}, neutralColors), {
        colorPrimaryBg: primaryColors[1],
        colorPrimaryBgHover: primaryColors[2],
        colorPrimaryBorder: primaryColors[3],
        colorPrimaryBorderHover: primaryColors[4],
        colorPrimaryHover: primaryColors[5],
        colorPrimary: primaryColors[6],
        colorPrimaryActive: primaryColors[7],
        colorPrimaryTextHover: primaryColors[8],
        colorPrimaryText: primaryColors[9],
        colorPrimaryTextActive: primaryColors[10],
        colorSuccessBg: successColors[1],
        colorSuccessBgHover: successColors[2],
        colorSuccessBorder: successColors[3],
        colorSuccessBorderHover: successColors[4],
        colorSuccessHover: successColors[4],
        colorSuccess: successColors[6],
        colorSuccessActive: successColors[7],
        colorSuccessTextHover: successColors[8],
        colorSuccessText: successColors[9],
        colorSuccessTextActive: successColors[10],
        colorErrorBg: errorColors[1],
        colorErrorBgHover: errorColors[2],
        colorErrorBgFilledHover,
        colorErrorBgActive: errorColors[3],
        colorErrorBorder: errorColors[3],
        colorErrorBorderHover: errorColors[4],
        colorErrorHover: errorColors[5],
        colorError: errorColors[6],
        colorErrorActive: errorColors[7],
        colorErrorTextHover: errorColors[8],
        colorErrorText: errorColors[9],
        colorErrorTextActive: errorColors[10],
        colorWarningBg: warningColors[1],
        colorWarningBgHover: warningColors[2],
        colorWarningBorder: warningColors[3],
        colorWarningBorderHover: warningColors[4],
        colorWarningHover: warningColors[4],
        colorWarning: warningColors[6],
        colorWarningActive: warningColors[7],
        colorWarningTextHover: warningColors[8],
        colorWarningText: warningColors[9],
        colorWarningTextActive: warningColors[10],
        colorInfoBg: infoColors[1],
        colorInfoBgHover: infoColors[2],
        colorInfoBorder: infoColors[3],
        colorInfoBorderHover: infoColors[4],
        colorInfoHover: infoColors[4],
        colorInfo: infoColors[6],
        colorInfoActive: infoColors[7],
        colorInfoTextHover: infoColors[8],
        colorInfoText: infoColors[9],
        colorInfoTextActive: infoColors[10],
        colorLinkHover: linkColors[4],
        colorLink: linkColors[6],
        colorLinkActive: linkColors[7],
        colorBgMask: new FastColor('#000').setA(0.45).toRgbString(),
        colorWhite: '#fff'
    });
}
// MERGED MODULE: [project]/node_modules/antd/es/theme/themes/shared/genCommonMapToken.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/antd/es/theme/themes/shared/genRadius.js [library] (ecmascript)
;
const genRadius = (radiusBase)=>{
    let radiusLG = radiusBase;
    let radiusSM = radiusBase;
    let radiusXS = radiusBase;
    let radiusOuter = radiusBase;
    // radiusLG
    if (radiusBase < 6 && radiusBase >= 5) {
        radiusLG = radiusBase + 1;
    } else if (radiusBase < 16 && radiusBase >= 6) {
        radiusLG = radiusBase + 2;
    } else if (radiusBase >= 16) {
        radiusLG = 16;
    }
    // radiusSM
    if (radiusBase < 7 && radiusBase >= 5) {
        radiusSM = 4;
    } else if (radiusBase < 8 && radiusBase >= 7) {
        radiusSM = 5;
    } else if (radiusBase < 14 && radiusBase >= 8) {
        radiusSM = 6;
    } else if (radiusBase < 16 && radiusBase >= 14) {
        radiusSM = 7;
    } else if (radiusBase >= 16) {
        radiusSM = 8;
    }
    // radiusXS
    if (radiusBase < 6 && radiusBase >= 2) {
        radiusXS = 1;
    } else if (radiusBase >= 6) {
        radiusXS = 2;
    }
    // radiusOuter
    if (radiusBase > 4 && radiusBase < 8) {
        radiusOuter = 4;
    } else if (radiusBase >= 8) {
        radiusOuter = 6;
    }
    return {
        borderRadius: radiusBase,
        borderRadiusXS: radiusXS,
        borderRadiusSM: radiusSM,
        borderRadiusLG: radiusLG,
        borderRadiusOuter: radiusOuter
    };
};
const __TURBOPACK__default__export__47 = genRadius;
;
function genCommonMapToken(token) {
    const { motionUnit, motionBase, borderRadius, lineWidth } = token;
    return Object.assign({
        // motion
        motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
        motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
        motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
        // line
        lineWidthBold: lineWidth + 1
    }, __TURBOPACK__default__export__47(borderRadius));
}
// MERGED MODULE: [project]/node_modules/antd/es/theme/themes/shared/genControlHeight.js [library] (ecmascript)
;
const genControlHeight = (token)=>{
    const { controlHeight } = token;
    return {
        controlHeightSM: controlHeight * 0.75,
        controlHeightXS: controlHeight * 0.5,
        controlHeightLG: controlHeight * 1.25
    };
};
const __TURBOPACK__default__export__48 = genControlHeight;
// MERGED MODULE: [project]/node_modules/antd/es/theme/themes/shared/genFontMapToken.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/antd/es/theme/themes/shared/genFontSizes.js [library] (ecmascript)
;
function getLineHeight(fontSize) {
    return (fontSize + 8) / fontSize;
}
function getFontSizes(base) {
    const fontSizes = Array.from({
        length: 10
    }).map((_, index)=>{
        const i = index - 1;
        const baseSize = base * Math.pow(Math.E, i / 5);
        const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
        // Convert to even
        return Math.floor(intSize / 2) * 2;
    });
    fontSizes[1] = base;
    return fontSizes.map((size)=>({
            size,
            lineHeight: getLineHeight(size)
        }));
}
;
const genFontMapToken = (fontSize)=>{
    const fontSizePairs = getFontSizes(fontSize);
    const fontSizes = fontSizePairs.map((pair)=>pair.size);
    const lineHeights = fontSizePairs.map((pair)=>pair.lineHeight);
    const fontSizeMD = fontSizes[1];
    const fontSizeSM = fontSizes[0];
    const fontSizeLG = fontSizes[2];
    const lineHeight = lineHeights[1];
    const lineHeightSM = lineHeights[0];
    const lineHeightLG = lineHeights[2];
    return {
        fontSizeSM,
        fontSize: fontSizeMD,
        fontSizeLG,
        fontSizeXL: fontSizes[3],
        fontSizeHeading1: fontSizes[6],
        fontSizeHeading2: fontSizes[5],
        fontSizeHeading3: fontSizes[4],
        fontSizeHeading4: fontSizes[3],
        fontSizeHeading5: fontSizes[2],
        lineHeight,
        lineHeightLG,
        lineHeightSM,
        fontHeight: Math.round(lineHeight * fontSizeMD),
        fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
        fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
        lineHeightHeading1: lineHeights[6],
        lineHeightHeading2: lineHeights[5],
        lineHeightHeading3: lineHeights[4],
        lineHeightHeading4: lineHeights[3],
        lineHeightHeading5: lineHeights[2]
    };
};
const __TURBOPACK__default__export__49 = genFontMapToken;
// MERGED MODULE: [project]/node_modules/antd/es/theme/themes/shared/genSizeMapToken.js [library] (ecmascript)
;
function genSizeMapToken(token) {
    const { sizeUnit, sizeStep } = token;
    return {
        sizeXXL: sizeUnit * (sizeStep + 8),
        // 48
        sizeXL: sizeUnit * (sizeStep + 4),
        // 32
        sizeLG: sizeUnit * (sizeStep + 2),
        // 24
        sizeMD: sizeUnit * (sizeStep + 1),
        // 20
        sizeMS: sizeUnit * sizeStep,
        // 16
        size: sizeUnit * sizeStep,
        // 16
        sizeSM: sizeUnit * (sizeStep - 1),
        // 12
        sizeXS: sizeUnit * (sizeStep - 2),
        // 8
        sizeXXS: sizeUnit * (sizeStep - 3) // 4
    };
}
// MERGED MODULE: [project]/node_modules/antd/es/theme/themes/default/colors.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/antd/es/theme/themes/default/colorAlgorithm.js [library] (ecmascript)
;
;
const getAlphaColor = (baseColor, alpha)=>new FastColor(baseColor).setA(alpha).toRgbString();
const getSolidColor = (baseColor, brightness)=>{
    const instance = new FastColor(baseColor);
    return instance.darken(brightness).toHexString();
};
;
;
const generateColorPalettes = (baseColor)=>{
    const colors = generate(baseColor);
    return {
        1: colors[0],
        2: colors[1],
        3: colors[2],
        4: colors[3],
        5: colors[4],
        6: colors[5],
        7: colors[6],
        8: colors[4],
        9: colors[5],
        10: colors[6]
    };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor)=>{
    const colorBgBase = bgBaseColor || '#fff';
    const colorTextBase = textBaseColor || '#000';
    return {
        colorBgBase,
        colorTextBase,
        colorText: getAlphaColor(colorTextBase, 0.88),
        colorTextSecondary: getAlphaColor(colorTextBase, 0.65),
        colorTextTertiary: getAlphaColor(colorTextBase, 0.45),
        colorTextQuaternary: getAlphaColor(colorTextBase, 0.25),
        colorFill: getAlphaColor(colorTextBase, 0.15),
        colorFillSecondary: getAlphaColor(colorTextBase, 0.06),
        colorFillTertiary: getAlphaColor(colorTextBase, 0.04),
        colorFillQuaternary: getAlphaColor(colorTextBase, 0.02),
        colorBgSolid: getAlphaColor(colorTextBase, 1),
        colorBgSolidHover: getAlphaColor(colorTextBase, 0.75),
        colorBgSolidActive: getAlphaColor(colorTextBase, 0.95),
        colorBgLayout: getSolidColor(colorBgBase, 4),
        colorBgContainer: getSolidColor(colorBgBase, 0),
        colorBgElevated: getSolidColor(colorBgBase, 0),
        colorBgSpotlight: getAlphaColor(colorTextBase, 0.85),
        colorBgBlur: 'transparent',
        colorBorder: getSolidColor(colorBgBase, 15),
        colorBorderSecondary: getSolidColor(colorBgBase, 6)
    };
};
;
;
;
;
;
;
;
;
function derivative(token) {
    // pink is deprecated name of magenta, keep this for backwards compatibility
    presetPrimaryColors.pink = presetPrimaryColors.magenta;
    presetPalettes.pink = presetPalettes.magenta;
    const colorPalettes = Object.keys(defaultPresetColors).map((colorKey)=>{
        const colors = token[colorKey] === presetPrimaryColors[colorKey] ? presetPalettes[colorKey] : generate(token[colorKey]);
        return Array.from({
            length: 10
        }, ()=>1).reduce((prev, _, i)=>{
            prev[`${colorKey}-${i + 1}`] = colors[i];
            prev[`${colorKey}${i + 1}`] = colors[i];
            return prev;
        }, {});
    }).reduce((prev, cur)=>{
        prev = Object.assign(Object.assign({}, prev), cur);
        return prev;
    }, {});
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, token), colorPalettes), genColorMapToken(token, {
        generateColorPalettes: generateColorPalettes,
        generateNeutralColorPalettes: generateNeutralColorPalettes
    })), __TURBOPACK__default__export__49(token.fontSize)), genSizeMapToken(token)), __TURBOPACK__default__export__48(token)), genCommonMapToken(token));
}
;
;
const defaultTheme = createTheme(derivative);
const __TURBOPACK__default__export__50 = defaultTheme;
// MERGED MODULE: [project]/node_modules/antd/es/theme/context.js [library] (ecmascript) <locals>
;
var __TURBOPACK__imported__module__2211__23 = __TURBOPACK__imported__module__2211__;
;
;
;
const defaultConfig = {
    token: __TURBOPACK__default__export__46,
    override: {
        override: __TURBOPACK__default__export__46
    },
    hashed: true
};
const DesignTokenContext = /*#__PURE__*/ __TURBOPACK__imported__module__2211__23["default"].createContext(defaultConfig);
// MERGED MODULE: [project]/node_modules/antd/es/theme/util/alias.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/antd/es/theme/util/getAlphaColor.js [library] (ecmascript)
;
;
function isStableColor(color) {
    return color >= 0 && color <= 255;
}
function getAlphaColor1(frontColor, backgroundColor) {
    const { r: fR, g: fG, b: fB, a: originAlpha } = new FastColor(frontColor).toRgb();
    if (originAlpha < 1) {
        return frontColor;
    }
    const { r: bR, g: bG, b: bB } = new FastColor(backgroundColor).toRgb();
    for(let fA = 0.01; fA <= 1; fA += 0.01){
        const r = Math.round((fR - bR * (1 - fA)) / fA);
        const g = Math.round((fG - bG * (1 - fA)) / fA);
        const b = Math.round((fB - bB * (1 - fA)) / fA);
        if (isStableColor(r) && isStableColor(g) && isStableColor(b)) {
            return new FastColor({
                r,
                g,
                b,
                a: Math.round(fA * 100) / 100
            }).toRgbString();
        }
    }
    // fallback
    /* istanbul ignore next */ return new FastColor({
        r: fR,
        g: fG,
        b: fB,
        a: 1
    }).toRgbString();
}
const __TURBOPACK__default__export__51 = getAlphaColor1;
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
function formatToken(derivativeToken) {
    const { override } = derivativeToken, restToken = __rest(derivativeToken, [
        "override"
    ]);
    const overrideTokens = Object.assign({}, override);
    Object.keys(__TURBOPACK__default__export__46).forEach((token)=>{
        delete overrideTokens[token];
    });
    const mergedToken = Object.assign(Object.assign({}, restToken), overrideTokens);
    const screenXS = 480;
    const screenSM = 576;
    const screenMD = 768;
    const screenLG = 992;
    const screenXL = 1200;
    const screenXXL = 1600;
    // Motion
    if (mergedToken.motion === false) {
        const fastDuration = '0s';
        mergedToken.motionDurationFast = fastDuration;
        mergedToken.motionDurationMid = fastDuration;
        mergedToken.motionDurationSlow = fastDuration;
    }
    // Generate alias token
    const aliasToken = Object.assign(Object.assign(Object.assign({}, mergedToken), {
        // ============== Background ============== //
        colorFillContent: mergedToken.colorFillSecondary,
        colorFillContentHover: mergedToken.colorFill,
        colorFillAlter: mergedToken.colorFillQuaternary,
        colorBgContainerDisabled: mergedToken.colorFillTertiary,
        // ============== Split ============== //
        colorBorderBg: mergedToken.colorBgContainer,
        colorSplit: __TURBOPACK__default__export__51(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
        // ============== Text ============== //
        colorTextPlaceholder: mergedToken.colorTextQuaternary,
        colorTextDisabled: mergedToken.colorTextQuaternary,
        colorTextHeading: mergedToken.colorText,
        colorTextLabel: mergedToken.colorTextSecondary,
        colorTextDescription: mergedToken.colorTextTertiary,
        colorTextLightSolid: mergedToken.colorWhite,
        colorHighlight: mergedToken.colorError,
        colorBgTextHover: mergedToken.colorFillSecondary,
        colorBgTextActive: mergedToken.colorFill,
        colorIcon: mergedToken.colorTextTertiary,
        colorIconHover: mergedToken.colorText,
        colorErrorOutline: __TURBOPACK__default__export__51(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
        colorWarningOutline: __TURBOPACK__default__export__51(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
        // Font
        fontSizeIcon: mergedToken.fontSizeSM,
        // Line
        lineWidthFocus: mergedToken.lineWidth * 3,
        // Control
        lineWidth: mergedToken.lineWidth,
        controlOutlineWidth: mergedToken.lineWidth * 2,
        // Checkbox size and expand icon size
        controlInteractiveSize: mergedToken.controlHeight / 2,
        controlItemBgHover: mergedToken.colorFillTertiary,
        controlItemBgActive: mergedToken.colorPrimaryBg,
        controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
        controlItemBgActiveDisabled: mergedToken.colorFill,
        controlTmpOutline: mergedToken.colorFillQuaternary,
        controlOutline: __TURBOPACK__default__export__51(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
        lineType: mergedToken.lineType,
        borderRadius: mergedToken.borderRadius,
        borderRadiusXS: mergedToken.borderRadiusXS,
        borderRadiusSM: mergedToken.borderRadiusSM,
        borderRadiusLG: mergedToken.borderRadiusLG,
        fontWeightStrong: 600,
        opacityLoading: 0.65,
        linkDecoration: 'none',
        linkHoverDecoration: 'none',
        linkFocusDecoration: 'none',
        controlPaddingHorizontal: 12,
        controlPaddingHorizontalSM: 8,
        paddingXXS: mergedToken.sizeXXS,
        paddingXS: mergedToken.sizeXS,
        paddingSM: mergedToken.sizeSM,
        padding: mergedToken.size,
        paddingMD: mergedToken.sizeMD,
        paddingLG: mergedToken.sizeLG,
        paddingXL: mergedToken.sizeXL,
        paddingContentHorizontalLG: mergedToken.sizeLG,
        paddingContentVerticalLG: mergedToken.sizeMS,
        paddingContentHorizontal: mergedToken.sizeMS,
        paddingContentVertical: mergedToken.sizeSM,
        paddingContentHorizontalSM: mergedToken.size,
        paddingContentVerticalSM: mergedToken.sizeXS,
        marginXXS: mergedToken.sizeXXS,
        marginXS: mergedToken.sizeXS,
        marginSM: mergedToken.sizeSM,
        margin: mergedToken.size,
        marginMD: mergedToken.sizeMD,
        marginLG: mergedToken.sizeLG,
        marginXL: mergedToken.sizeXL,
        marginXXL: mergedToken.sizeXXL,
        boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
        screenXS,
        screenXSMin: screenXS,
        screenXSMax: screenSM - 1,
        screenSM,
        screenSMMin: screenSM,
        screenSMMax: screenMD - 1,
        screenMD,
        screenMDMin: screenMD,
        screenMDMax: screenLG - 1,
        screenLG,
        screenLGMin: screenLG,
        screenLGMax: screenXL - 1,
        screenXL,
        screenXLMin: screenXL,
        screenXLMax: screenXXL - 1,
        screenXXL,
        screenXXLMin: screenXXL,
        boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
        boxShadowCard: `
      0 1px 2px -2px ${new FastColor('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new FastColor('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new FastColor('rgba(0, 0, 0, 0.09)').toRgbString()}
    `,
        boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)'
    }), overrideTokens);
    return aliasToken;
}
var __rest1 = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
;
;
const unitless = {
    lineHeight: true,
    lineHeightSM: true,
    lineHeightLG: true,
    lineHeightHeading1: true,
    lineHeightHeading2: true,
    lineHeightHeading3: true,
    lineHeightHeading4: true,
    lineHeightHeading5: true,
    opacityLoading: true,
    fontWeightStrong: true,
    zIndexPopupBase: true,
    zIndexBase: true,
    opacityImage: true
};
const ignore = {
    motionBase: true,
    motionUnit: true
};
const preserve = {
    screenXS: true,
    screenXSMin: true,
    screenXSMax: true,
    screenSM: true,
    screenSMMin: true,
    screenSMMax: true,
    screenMD: true,
    screenMDMin: true,
    screenMDMax: true,
    screenLG: true,
    screenLGMin: true,
    screenLGMax: true,
    screenXL: true,
    screenXLMin: true,
    screenXLMax: true,
    screenXXL: true,
    screenXXLMin: true
};
const getComputedToken1 = (originToken, overrideToken, theme)=>{
    const derivativeToken = theme.getDerivativeToken(originToken);
    const { override } = overrideToken, components = __rest1(overrideToken, [
        "override"
    ]);
    // Merge with override
    let mergedDerivativeToken = Object.assign(Object.assign({}, derivativeToken), {
        override
    });
    // Format if needed
    mergedDerivativeToken = formatToken(mergedDerivativeToken);
    if (components) {
        Object.entries(components).forEach(([key, value])=>{
            const { theme: componentTheme } = value, componentTokens = __rest1(value, [
                "theme"
            ]);
            let mergedComponentToken = componentTokens;
            if (componentTheme) {
                mergedComponentToken = getComputedToken1(Object.assign(Object.assign({}, mergedDerivativeToken), componentTokens), {
                    override: componentTokens
                }, componentTheme);
            }
            mergedDerivativeToken[key] = mergedComponentToken;
        });
    }
    return mergedDerivativeToken;
};
function useToken() {
    const { token: rootDesignToken, hashed, theme, override, cssVar } = __TURBOPACK__imported__module__2211__22["default"].useContext(DesignTokenContext);
    const salt = `${__TURBOPACK__default__export__45}-${hashed || ''}`;
    const mergedTheme = theme || __TURBOPACK__default__export__50;
    const [token, hashId, realToken] = useCacheToken(mergedTheme, [
        __TURBOPACK__default__export__46,
        rootDesignToken
    ], {
        salt,
        override,
        getComputedToken: getComputedToken1,
        // formatToken will not be consumed after 1.15.0 with getComputedToken.
        // But token will break if @ant-design/cssinjs is under 1.15.0 without it
        formatToken: formatToken,
        cssVar: cssVar && {
            prefix: cssVar.prefix,
            key: cssVar.key,
            unitless,
            ignore,
            preserve
        }
    });
    return [
        mergedTheme,
        realToken,
        hashed ? hashId : '',
        token,
        cssVar
    ];
}
var __TURBOPACK__imported__module__2211__24 = __TURBOPACK__imported__module__2211__;
;
;
;
;
;
;
const defaultTheme1 = createTheme(__TURBOPACK__imported__module__7454__3["theme"].defaultAlgorithm);
const preserve1 = {
    screenXS: true,
    screenXSMin: true,
    screenXSMax: true,
    screenSM: true,
    screenSMMin: true,
    screenSMMax: true,
    screenMD: true,
    screenMDMin: true,
    screenMDMax: true,
    screenLG: true,
    screenLGMin: true,
    screenLGMax: true,
    screenXL: true,
    screenXLMin: true,
    screenXLMax: true,
    screenXXL: true,
    screenXXLMin: true
};
const getComputedToken2 = (originToken, overrideToken, theme)=>{
    const derivativeToken = theme.getDerivativeToken(originToken);
    const { override, ...components } = overrideToken;
    // Merge with override
    let mergedDerivativeToken = {
        ...derivativeToken,
        override
    };
    // Format if needed
    mergedDerivativeToken = formatToken(mergedDerivativeToken);
    if (components) {
        Object.entries(components).forEach(([key, value])=>{
            const { theme: componentTheme, ...componentTokens } = value;
            let mergedComponentToken = componentTokens;
            if (componentTheme) {
                mergedComponentToken = getComputedToken2({
                    ...mergedDerivativeToken,
                    ...componentTokens
                }, {
                    override: componentTokens
                }, componentTheme);
            }
            mergedDerivativeToken[key] = mergedComponentToken;
        });
    }
    return mergedDerivativeToken;
};
function useInternalToken() {
    const { token: rootDesignToken, hashed, theme = defaultTheme1, override, cssVar } = __TURBOPACK__imported__module__2211__24["default"].useContext(__TURBOPACK__imported__module__7454__3["theme"]._internalContext);
    const [token, hashId, realToken] = useCacheToken(theme, [
        __TURBOPACK__imported__module__7454__3["theme"].defaultSeed,
        rootDesignToken
    ], {
        salt: `${__TURBOPACK__default__export__1}-${hashed || ''}`,
        override,
        getComputedToken: getComputedToken2,
        cssVar: cssVar && {
            prefix: cssVar.prefix,
            key: cssVar.key,
            unitless: unitless,
            ignore: ignore,
            preserve: preserve1
        }
    });
    return [
        theme,
        realToken,
        hashed ? hashId : '',
        token,
        cssVar
    ];
}
function useToken1() {
    const [theme, token, hashId] = useInternalToken();
    return {
        theme,
        token,
        hashId
    };
}
;
;
;
const { genStyleHooks, genComponentStyleHook, genSubStyleComponent } = __TURBOPACK__default__export__43({
    usePrefix: ()=>{
        const { getPrefixCls, iconPrefixCls } = __TURBOPACK__default__export__4();
        return {
            iconPrefixCls,
            rootPrefixCls: getPrefixCls()
        };
    },
    useToken: ()=>{
        const [theme, realToken, hashId, token, cssVar] = useInternalToken();
        return {
            theme,
            realToken,
            hashId,
            token,
            cssVar
        };
    },
    useCSP: ()=>{
        const { csp } = __TURBOPACK__default__export__4();
        return csp ?? {};
    },
    layer: {
        name: 'antdx',
        dependencies: [
            'antd'
        ]
    }
});
;
;
const genActionsStyle = (token)=>{
    const { componentCls, calc } = token;
    return {
        [componentCls]: {
            [`&${componentCls}-rtl`]: {
                direction: 'rtl'
            },
            [`${componentCls}-list`]: {
                display: 'inline-flex',
                flexDirection: 'row',
                gap: token.paddingXS,
                color: token.colorTextDescription,
                '&-item, &-sub-item': {
                    cursor: 'pointer',
                    padding: token.paddingXXS,
                    borderRadius: token.borderRadius,
                    height: token.controlHeightSM,
                    width: token.controlHeightSM,
                    boxSizing: 'border-box',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&-icon': {
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: token.fontSize,
                        width: '100%',
                        height: '100%'
                    },
                    '&:hover': {
                        background: token.colorBgTextHover
                    }
                }
            },
            '& .border': {
                padding: `${token.paddingXS} ${token.paddingSM}`,
                gap: token.paddingSM,
                borderRadius: calc(token.borderRadiusLG).mul(1.5).equal(),
                backgroundColor: token.colorBorderSecondary,
                color: token.colorTextSecondary,
                [`${componentCls}-list-item, ${componentCls}-list-sub-item`]: {
                    padding: 0,
                    lineHeight: token.lineHeight,
                    '&-icon': {
                        fontSize: token.fontSizeLG
                    },
                    '&:hover': {
                        opacity: 0.8
                    }
                }
            },
            '& .block': {
                display: 'flex'
            }
        }
    };
};
const prepareComponentToken = ()=>({});
const __TURBOPACK__default__export__52 = genStyleHooks('Actions', (token)=>{
    const compToken = merge1(token, {});
    return [
        genActionsStyle(compToken)
    ];
}, prepareComponentToken);
;
;
;
;
;
;
;
;
const Actions = (props)=>{
    const { prefixCls: customizePrefixCls, rootClassName = {}, style = {}, variant = 'borderless', block = false, onClick, items = [], ...otherHtmlProps } = props;
    const domProps = (0, __TURBOPACK__imported__module__9394__["default"])(otherHtmlProps, {
        attr: true,
        aria: true,
        data: true
    });
    // ============================ PrefixCls ============================
    const { getPrefixCls, direction } = __TURBOPACK__default__export__4();
    const prefixCls = getPrefixCls('actions', customizePrefixCls);
    // ======================= Component Config =======================
    const contextConfig = __TURBOPACK__default__export__3('actions');
    // ============================ Styles ============================
    const [wrapCSSVar, hashId, cssVarCls] = __TURBOPACK__default__export__52(prefixCls);
    const mergedCls = (0, __TURBOPACK__imported__module__1446__["default"])(prefixCls, contextConfig.className, rootClassName, cssVarCls, hashId, {
        [`${prefixCls}-rtl`]: direction === 'rtl'
    });
    const mergedStyle = {
        ...contextConfig.style,
        ...style
    };
    const getTooltipNode = (node, title, tooltipProps)=>{
        if (title) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__["jsx"])(__TURBOPACK__imported__module__7454__["Tooltip"], {
                ...tooltipProps,
                title: title,
                children: node
            });
        }
        return node;
    };
    const handleItemClick = (key, item, domEvent)=>{
        if (item.onItemClick) {
            item.onItemClick(item);
            return;
        }
        onClick?.({
            key,
            item,
            keyPath: [
                key
            ],
            domEvent
        });
    };
    const renderSingleItem = (item)=>{
        const { icon, label, key } = item;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__["jsx"])("div", {
            className: (0, __TURBOPACK__imported__module__1446__["default"])(`${prefixCls}-list-item`),
            onClick: (domEvent)=>handleItemClick(key, item, domEvent),
            children: getTooltipNode(/*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__["jsx"])("div", {
                className: `${prefixCls}-list-item-icon`,
                children: icon
            }), label)
        }, key);
    };
    return wrapCSSVar(/*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__["jsx"])("div", {
        className: mergedCls,
        ...domProps,
        style: mergedStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__["jsx"])("div", {
            className: (0, __TURBOPACK__imported__module__1446__["default"])(`${prefixCls}-list`, variant, block),
            children: items.map((item)=>{
                if ('children' in item) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__["jsx"])(__TURBOPACK__default__export__11, {
                        item: item,
                        prefixCls: prefixCls,
                        onClick: onClick
                    }, item.key);
                }
                return renderSingleItem(item);
            })
        })
    }));
};
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__53 = Actions;
// MERGED MODULE: [project]/components/attachments/index.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__2 = __TURBOPACK__imported__module__7084__;
var __TURBOPACK__imported__module__1446__2 = __TURBOPACK__imported__module__1446__;
// MERGED MODULE: [project]/node_modules/rc-util/es/hooks/useEvent.js [library] (ecmascript) <export default as useEvent>
;
// MERGED MODULE: [project]/node_modules/rc-util/es/hooks/useMergedState.js [library] (ecmascript) <export default as useMergedState>
;
var __TURBOPACK__imported__module__2211__25 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/components/attachments/context.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__26 = __TURBOPACK__imported__module__2211__;
;
const AttachmentContext = /*#__PURE__*/ __TURBOPACK__imported__module__2211__26["default"].createContext(null);
// MERGED MODULE: [project]/components/attachments/DropArea.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__3 = __TURBOPACK__imported__module__7084__;
var __TURBOPACK__imported__module__1446__3 = __TURBOPACK__imported__module__1446__;
var __TURBOPACK__imported__module__2211__27 = __TURBOPACK__imported__module__2211__;
var __TURBOPACK__imported__module__6115__ = __turbopack_context__.i(6115);
;
;
;
;
;
function DropArea(props) {
    const { getDropContainer, className, prefixCls, children } = props;
    const { disabled } = __TURBOPACK__imported__module__2211__27["default"].useContext(AttachmentContext);
    const [container, setContainer] = __TURBOPACK__imported__module__2211__27["default"].useState();
    const [showArea, setShowArea] = __TURBOPACK__imported__module__2211__27["default"].useState(null);
    // ========================== Container ===========================
    __TURBOPACK__imported__module__2211__27["default"].useEffect(()=>{
        const nextContainer = getDropContainer?.();
        if (container !== nextContainer) {
            setContainer(nextContainer);
        }
    }, [
        getDropContainer
    ]);
    // ============================= Drop =============================
    __TURBOPACK__imported__module__2211__27["default"].useEffect(()=>{
        // Add global drop event
        if (container) {
            const onDragEnter = ()=>{
                setShowArea(true);
            };
            // Should prevent default to make drop event work
            const onDragOver = (e)=>{
                e.preventDefault();
            };
            const onDragLeave = (e)=>{
                if (!e.relatedTarget) {
                    setShowArea(false);
                }
            };
            const onDrop = (e)=>{
                setShowArea(false);
                e.preventDefault();
            };
            document.addEventListener('dragenter', onDragEnter);
            document.addEventListener('dragover', onDragOver);
            document.addEventListener('dragleave', onDragLeave);
            document.addEventListener('drop', onDrop);
            return ()=>{
                document.removeEventListener('dragenter', onDragEnter);
                document.removeEventListener('dragover', onDragOver);
                document.removeEventListener('dragleave', onDragLeave);
                document.removeEventListener('drop', onDrop);
            };
        }
    }, [
        !!container
    ]);
    // =========================== Visible ============================
    const showDropdown = getDropContainer && container && !disabled;
    // ============================ Render ============================
    if (!showDropdown) {
        return null;
    }
    const areaCls = `${prefixCls}-drop-area`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__6115__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__3["jsx"])("div", {
        className: (0, __TURBOPACK__imported__module__1446__3["default"])(areaCls, className, {
            [`${areaCls}-on-body`]: container.tagName === 'BODY'
        }),
        style: {
            display: showArea ? 'block' : 'none'
        },
        children: children
    }), container);
}
// MERGED MODULE: [project]/components/attachments/FileList/index.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__4 = __TURBOPACK__imported__module__7084__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/LeftOutlined.js [library] (ecmascript) <export default as LeftOutlined>
;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/LeftOutlined.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__28 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons-svg/es/asn/LeftOutlined.js [library] (ecmascript)
;
// This icon file is generated automatically.
var LeftOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
                }
            }
        ]
    },
    "name": "left",
    "theme": "outlined"
};
const __TURBOPACK__default__export__54 = LeftOutlined;
;
;
;
;
var LeftOutlined1 = function LeftOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__28["createElement"](__TURBOPACK__default__export__9, _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__default__export__54
    }));
};
/**![left](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcyNCAyMTguM1YxNDFjMC02LjctNy43LTEwLjQtMTIuOS02LjNMMjYwLjMgNDg2LjhhMzEuODYgMzEuODYgMCAwMDAgNTAuM2w0NTAuOCAzNTIuMWM1LjMgNC4xIDEyLjkuNCAxMi45LTYuM3YtNzcuM2MwLTQuOS0yLjMtOS42LTYuMS0xMi42bC0zNjAtMjgxIDM2MC0yODEuMWMzLjgtMyA2LjEtNy43IDYuMS0xMi42eiIgLz48L3N2Zz4=) */ var RefIcon1 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__28["forwardRef"](LeftOutlined1);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__55 = RefIcon1;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/PlusOutlined.js [library] (ecmascript) <export default as PlusOutlined>
;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/PlusOutlined.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__29 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons-svg/es/asn/PlusOutlined.js [library] (ecmascript)
;
// This icon file is generated automatically.
var PlusOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"
                }
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"
                }
            }
        ]
    },
    "name": "plus",
    "theme": "outlined"
};
const __TURBOPACK__default__export__56 = PlusOutlined;
;
;
;
;
var PlusOutlined1 = function PlusOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__29["createElement"](__TURBOPACK__default__export__9, _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__default__export__56
    }));
};
/**![plus](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQ4MiAxNTJoNjBxOCAwIDggOHY3MDRxMCA4LTggOGgtNjBxLTggMC04LThWMTYwcTAtOCA4LTh6IiAvPjxwYXRoIGQ9Ik0xOTIgNDc0aDY3MnE4IDAgOCA4djYwcTAgOC04IDhIMTYwcS04IDAtOC04di02MHEwLTggOC04eiIgLz48L3N2Zz4=) */ var RefIcon2 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__29["forwardRef"](PlusOutlined1);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__57 = RefIcon2;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/RightOutlined.js [library] (ecmascript) <export default as RightOutlined>
;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/RightOutlined.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__30 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons-svg/es/asn/RightOutlined.js [library] (ecmascript)
;
// This icon file is generated automatically.
var RightOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                }
            }
        ]
    },
    "name": "right",
    "theme": "outlined"
};
const __TURBOPACK__default__export__58 = RightOutlined;
;
;
;
;
var RightOutlined1 = function RightOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__30["createElement"](__TURBOPACK__default__export__9, _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__default__export__58
    }));
};
/**![right](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTc2NS43IDQ4Ni44TDMxNC45IDEzNC43QTcuOTcgNy45NyAwIDAwMzAyIDE0MXY3Ny4zYzAgNC45IDIuMyA5LjYgNi4xIDEyLjZsMzYwIDI4MS4xLTM2MCAyODEuMWMtMy45IDMtNi4xIDcuNy02LjEgMTIuNlY4ODNjMCA2LjcgNy43IDEwLjQgMTIuOSA2LjNsNDUwLjgtMzUyLjFhMzEuOTYgMzEuOTYgMCAwMDAtNTAuNHoiIC8+PC9zdmc+) */ var RefIcon3 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__30["forwardRef"](RightOutlined1);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__59 = RefIcon3;
var __TURBOPACK__imported__module__7454__4 = __TURBOPACK__imported__module__7454__;
var __TURBOPACK__imported__module__1446__4 = __TURBOPACK__imported__module__1446__;
// MERGED MODULE: [project]/node_modules/rc-motion/es/index.js [library] (ecmascript) <module evaluation>
;
// MERGED MODULE: [project]/node_modules/rc-motion/es/CSSMotion.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__1446__5 = __TURBOPACK__imported__module__1446__;
// MERGED MODULE: [project]/node_modules/rc-util/es/Dom/findDOMNode.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__31 = __TURBOPACK__imported__module__2211__;
var __TURBOPACK__imported__module__6115__1 = __TURBOPACK__imported__module__6115__;
;
;
;
function isDOM(node) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element
    // Since XULElement is also subclass of Element, we only need HTMLElement and SVGElement
    return node instanceof HTMLElement || node instanceof SVGElement;
}
function getDOM(node) {
    if (node && _typeof(node) === 'object' && isDOM(node.nativeElement)) {
        return node.nativeElement;
    }
    if (isDOM(node)) {
        return node;
    }
    return null;
}
function findDOMNode(node) {
    var domNode = getDOM(node);
    if (domNode) {
        return domNode;
    }
    if (node instanceof __TURBOPACK__imported__module__2211__31["default"].Component) {
        var _ReactDOM$findDOMNode;
        return (_ReactDOM$findDOMNode = __TURBOPACK__imported__module__6115__1["default"].findDOMNode) === null || _ReactDOM$findDOMNode === void 0 ? void 0 : _ReactDOM$findDOMNode.call(__TURBOPACK__imported__module__6115__1["default"], node);
    }
    return null;
}
var __TURBOPACK__imported__module__2211__32 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/rc-motion/es/context.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__33 = __TURBOPACK__imported__module__2211__;
;
var _excluded3 = [
    "children"
];
;
var Context = /*#__PURE__*/ __TURBOPACK__imported__module__2211__33["createContext"]({});
function MotionProvider(_ref) {
    var children = _ref.children, props = _objectWithoutProperties(_ref, _excluded3);
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__33["createElement"](Context.Provider, {
        value: props
    }, children);
}
// MERGED MODULE: [project]/node_modules/rc-motion/es/DomWrapper.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__34 = __TURBOPACK__imported__module__2211__;
;
;
;
;
;
var DomWrapper = /*#__PURE__*/ function(_React$Component) {
    _inherits(DomWrapper, _React$Component);
    var _super = _createSuper(DomWrapper);
    function DomWrapper() {
        _classCallCheck(this, DomWrapper);
        return _super.apply(this, arguments);
    }
    _createClass(DomWrapper, [
        {
            key: "render",
            value: function render() {
                return this.props.children;
            }
        }
    ]);
    return DomWrapper;
}(__TURBOPACK__imported__module__2211__34["Component"]);
const __TURBOPACK__default__export__60 = DomWrapper;
// MERGED MODULE: [project]/node_modules/rc-motion/es/hooks/useStatus.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/rc-util/es/hooks/useSyncState.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__35 = __TURBOPACK__imported__module__2211__;
;
;
;
function useSyncState(defaultValue) {
    var _React$useReducer = __TURBOPACK__imported__module__2211__35["useReducer"](function(x) {
        return x + 1;
    }, 0), _React$useReducer2 = _slicedToArray(_React$useReducer, 2), forceUpdate = _React$useReducer2[1];
    var currentValueRef = __TURBOPACK__imported__module__2211__35["useRef"](defaultValue);
    var getValue = useEvent(function() {
        return currentValueRef.current;
    });
    var setValue = useEvent(function(updater) {
        currentValueRef.current = typeof updater === 'function' ? updater(currentValueRef.current) : updater;
        forceUpdate();
    });
    return [
        getValue,
        setValue
    ];
}
var __TURBOPACK__imported__module__2211__36 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/rc-motion/es/interface.js [library] (ecmascript)
;
var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';
var STEP_NONE = 'none';
var STEP_PREPARE = 'prepare';
var STEP_START = 'start';
var STEP_ACTIVE = 'active';
var STEP_ACTIVATED = 'end';
var STEP_PREPARED = 'prepared';
// MERGED MODULE: [project]/node_modules/rc-motion/es/hooks/useDomMotionEvents.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__37 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/rc-motion/es/util/motion.js [library] (ecmascript)
;
;
;
// ================= Transition =================
// Event wrapper. Copy from react source code
function makePrefixMap(styleProp, eventName) {
    var prefixes = {};
    prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
    prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
    prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
    prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
    prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
    return prefixes;
}
function getVendorPrefixes(domSupport, win) {
    var prefixes = {
        animationend: makePrefixMap('Animation', 'AnimationEnd'),
        transitionend: makePrefixMap('Transition', 'TransitionEnd')
    };
    if (domSupport) {
        if (!('AnimationEvent' in win)) {
            delete prefixes.animationend.animation;
        }
        if (!('TransitionEvent' in win)) {
            delete prefixes.transitionend.transition;
        }
    }
    return prefixes;
}
var vendorPrefixes = getVendorPrefixes(canUseDom(), typeof window !== 'undefined' ? window : {});
var style = {};
if (canUseDom()) {
    var _document$createEleme = document.createElement('div');
    style = _document$createEleme.style;
}
var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
    if (prefixedEventNames[eventName]) {
        return prefixedEventNames[eventName];
    }
    var prefixMap = vendorPrefixes[eventName];
    if (prefixMap) {
        var stylePropList = Object.keys(prefixMap);
        var len = stylePropList.length;
        for(var i = 0; i < len; i += 1){
            var styleProp = stylePropList[i];
            if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
                prefixedEventNames[eventName] = prefixMap[styleProp];
                return prefixedEventNames[eventName];
            }
        }
    }
    return '';
}
var internalAnimationEndName = getVendorPrefixedEventName('animationend');
var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || 'animationend';
var transitionEndName = internalTransitionEndName || 'transitionend';
function getTransitionName(transitionName, transitionType) {
    if (!transitionName) return null;
    if (_typeof(transitionName) === 'object') {
        var type = transitionType.replace(/-\w/g, function(match) {
            return match[1].toUpperCase();
        });
        return transitionName[type];
    }
    return "".concat(transitionName, "-").concat(transitionType);
}
;
;
;
const __TURBOPACK__default__export__61 = function(onInternalMotionEnd) {
    var cacheElementRef = (0, __TURBOPACK__imported__module__2211__37["useRef"])();
    // Remove events
    function removeMotionEvents(element) {
        if (element) {
            element.removeEventListener(transitionEndName, onInternalMotionEnd);
            element.removeEventListener(animationEndName, onInternalMotionEnd);
        }
    }
    // Patch events
    function patchMotionEvents(element) {
        if (cacheElementRef.current && cacheElementRef.current !== element) {
            removeMotionEvents(cacheElementRef.current);
        }
        if (element && element !== cacheElementRef.current) {
            element.addEventListener(transitionEndName, onInternalMotionEnd);
            element.addEventListener(animationEndName, onInternalMotionEnd);
            // Save as cache in case dom removed trigger by `motionDeadline`
            cacheElementRef.current = element;
        }
    }
    // Clean up when removed
    __TURBOPACK__imported__module__2211__37["useEffect"](function() {
        return function() {
            removeMotionEvents(cacheElementRef.current);
        };
    }, []);
    return [
        patchMotionEvents,
        removeMotionEvents
    ];
};
// MERGED MODULE: [project]/node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__38 = __TURBOPACK__imported__module__2211__;
;
;
// It's safe to use `useLayoutEffect` but the warning is annoying
var useIsomorphicLayoutEffect = canUseDom() ? __TURBOPACK__imported__module__2211__38["useLayoutEffect"] : __TURBOPACK__imported__module__2211__38["useEffect"];
const __TURBOPACK__default__export__62 = useIsomorphicLayoutEffect;
// MERGED MODULE: [project]/node_modules/rc-motion/es/hooks/useStepQueue.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__39 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/rc-motion/es/hooks/useNextFrame.js [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/rc-util/es/raf.js [library] (ecmascript)
;
var raf = function raf(callback) {
    return +setTimeout(callback, 16);
};
var caf = function caf(num) {
    return clearTimeout(num);
};
if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
    raf = function raf(callback) {
        return window.requestAnimationFrame(callback);
    };
    caf = function caf(handle) {
        return window.cancelAnimationFrame(handle);
    };
}
var rafUUID = 0;
var rafIds = new Map();
function cleanup(id) {
    rafIds.delete(id);
}
var wrapperRaf = function wrapperRaf(callback) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    rafUUID += 1;
    var id = rafUUID;
    function callRef(leftTimes) {
        if (leftTimes === 0) {
            // Clean up
            cleanup(id);
            // Trigger
            callback();
        } else {
            // Next raf
            var realId = raf(function() {
                callRef(leftTimes - 1);
            });
            // Bind real raf id
            rafIds.set(id, realId);
        }
    }
    callRef(times);
    return id;
};
wrapperRaf.cancel = function(id) {
    var realId = rafIds.get(id);
    cleanup(id);
    return caf(realId);
};
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__63 = wrapperRaf;
var __TURBOPACK__imported__module__2211__40 = __TURBOPACK__imported__module__2211__;
;
;
const __TURBOPACK__default__export__64 = function() {
    var nextFrameRef = __TURBOPACK__imported__module__2211__40["useRef"](null);
    function cancelNextFrame() {
        __TURBOPACK__default__export__63.cancel(nextFrameRef.current);
    }
    function nextFrame(callback) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        cancelNextFrame();
        var nextFrameId = __TURBOPACK__default__export__63(function() {
            if (delay <= 1) {
                callback({
                    isCanceled: function isCanceled() {
                        return nextFrameId !== nextFrameRef.current;
                    }
                });
            } else {
                nextFrame(callback, delay - 1);
            }
        });
        nextFrameRef.current = nextFrameId;
    }
    __TURBOPACK__imported__module__2211__40["useEffect"](function() {
        return function() {
            cancelNextFrame();
        };
    }, []);
    return [
        nextFrame,
        cancelNextFrame
    ];
};
;
;
;
;
;
;
var FULL_STEP_QUEUE = [
    STEP_PREPARE,
    STEP_START,
    STEP_ACTIVE,
    STEP_ACTIVATED
];
var SIMPLE_STEP_QUEUE = [
    STEP_PREPARE,
    STEP_PREPARED
];
var SkipStep = false;
var DoStep = true;
function isActive(step) {
    return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
const __TURBOPACK__default__export__65 = function(status, prepareOnly, callback) {
    var _useState = useSafeState(STEP_NONE), _useState2 = _slicedToArray(_useState, 2), step = _useState2[0], setStep = _useState2[1];
    var _useNextFrame = __TURBOPACK__default__export__64(), _useNextFrame2 = _slicedToArray(_useNextFrame, 2), nextFrame = _useNextFrame2[0], cancelNextFrame = _useNextFrame2[1];
    function startQueue() {
        setStep(STEP_PREPARE, true);
    }
    var STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
    __TURBOPACK__default__export__62(function() {
        if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
            var index = STEP_QUEUE.indexOf(step);
            var nextStep = STEP_QUEUE[index + 1];
            var result = callback(step);
            if (result === SkipStep) {
                // Skip when no needed
                setStep(nextStep, true);
            } else if (nextStep) {
                // Do as frame for step update
                nextFrame(function(info) {
                    function doNext() {
                        // Skip since current queue is ood
                        if (info.isCanceled()) return;
                        setStep(nextStep, true);
                    }
                    if (result === true) {
                        doNext();
                    } else {
                        // Only promise should be async
                        Promise.resolve(result).then(doNext);
                    }
                });
            }
        }
    }, [
        status,
        step
    ]);
    __TURBOPACK__imported__module__2211__39["useEffect"](function() {
        return function() {
            cancelNextFrame();
        };
    }, []);
    return [
        startQueue,
        step
    ];
};
;
;
;
;
;
;
;
;
;
;
;
;
function useStatus(supportMotion, visible, getElement, _ref) {
    var _ref$motionEnter = _ref.motionEnter, motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter, _ref$motionAppear = _ref.motionAppear, motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear, _ref$motionLeave = _ref.motionLeave, motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave, motionDeadline = _ref.motionDeadline, motionLeaveImmediately = _ref.motionLeaveImmediately, onAppearPrepare = _ref.onAppearPrepare, onEnterPrepare = _ref.onEnterPrepare, onLeavePrepare = _ref.onLeavePrepare, onAppearStart = _ref.onAppearStart, onEnterStart = _ref.onEnterStart, onLeaveStart = _ref.onLeaveStart, onAppearActive = _ref.onAppearActive, onEnterActive = _ref.onEnterActive, onLeaveActive = _ref.onLeaveActive, onAppearEnd = _ref.onAppearEnd, onEnterEnd = _ref.onEnterEnd, onLeaveEnd = _ref.onLeaveEnd, onVisibleChanged = _ref.onVisibleChanged;
    // Used for outer render usage to avoid `visible: false & status: none` to render nothing
    var _useState = useSafeState(), _useState2 = _slicedToArray(_useState, 2), asyncVisible = _useState2[0], setAsyncVisible = _useState2[1];
    var _useSyncState = useSyncState(STATUS_NONE), _useSyncState2 = _slicedToArray(_useSyncState, 2), getStatus = _useSyncState2[0], setStatus = _useSyncState2[1];
    var _useState3 = useSafeState(null), _useState4 = _slicedToArray(_useState3, 2), style = _useState4[0], setStyle = _useState4[1];
    var currentStatus = getStatus();
    var mountedRef = (0, __TURBOPACK__imported__module__2211__36["useRef"])(false);
    var deadlineRef = (0, __TURBOPACK__imported__module__2211__36["useRef"])(null);
    // =========================== Dom Node ===========================
    function getDomElement() {
        return getElement();
    }
    // ========================== Motion End ==========================
    var activeRef = (0, __TURBOPACK__imported__module__2211__36["useRef"])(false);
    /**
   * Clean up status & style
   */ function updateMotionEndStatus() {
        setStatus(STATUS_NONE);
        setStyle(null, true);
    }
    var onInternalMotionEnd = useEvent(function(event) {
        var status = getStatus();
        // Do nothing since not in any transition status.
        // This may happen when `motionDeadline` trigger.
        if (status === STATUS_NONE) {
            return;
        }
        var element = getDomElement();
        if (event && !event.deadline && event.target !== element) {
            // event exists
            // not initiated by deadline
            // transitionEnd not fired by inner elements
            return;
        }
        var currentActive = activeRef.current;
        var canEnd;
        if (status === STATUS_APPEAR && currentActive) {
            canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
        } else if (status === STATUS_ENTER && currentActive) {
            canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
        } else if (status === STATUS_LEAVE && currentActive) {
            canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
        }
        // Only update status when `canEnd` and not destroyed
        if (currentActive && canEnd !== false) {
            updateMotionEndStatus();
        }
    });
    var _useDomMotionEvents = __TURBOPACK__default__export__61(onInternalMotionEnd), _useDomMotionEvents2 = _slicedToArray(_useDomMotionEvents, 1), patchMotionEvents = _useDomMotionEvents2[0];
    // ============================= Step =============================
    var getEventHandlers = function getEventHandlers(targetStatus) {
        switch(targetStatus){
            case STATUS_APPEAR:
                return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onAppearPrepare), STEP_START, onAppearStart), STEP_ACTIVE, onAppearActive);
            case STATUS_ENTER:
                return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onEnterPrepare), STEP_START, onEnterStart), STEP_ACTIVE, onEnterActive);
            case STATUS_LEAVE:
                return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onLeavePrepare), STEP_START, onLeaveStart), STEP_ACTIVE, onLeaveActive);
            default:
                return {};
        }
    };
    var eventHandlers = __TURBOPACK__imported__module__2211__36["useMemo"](function() {
        return getEventHandlers(currentStatus);
    }, [
        currentStatus
    ]);
    var _useStepQueue = __TURBOPACK__default__export__65(currentStatus, !supportMotion, function(newStep) {
        // Only prepare step can be skip
        if (newStep === STEP_PREPARE) {
            var onPrepare = eventHandlers[STEP_PREPARE];
            if (!onPrepare) {
                return SkipStep;
            }
            return onPrepare(getDomElement());
        }
        // Rest step is sync update
        if (step in eventHandlers) {
            var _eventHandlers$step;
            setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
        }
        if (step === STEP_ACTIVE && currentStatus !== STATUS_NONE) {
            // Patch events when motion needed
            patchMotionEvents(getDomElement());
            if (motionDeadline > 0) {
                clearTimeout(deadlineRef.current);
                deadlineRef.current = setTimeout(function() {
                    onInternalMotionEnd({
                        deadline: true
                    });
                }, motionDeadline);
            }
        }
        if (step === STEP_PREPARED) {
            updateMotionEndStatus();
        }
        return DoStep;
    }), _useStepQueue2 = _slicedToArray(_useStepQueue, 2), startStep = _useStepQueue2[0], step = _useStepQueue2[1];
    var active = isActive(step);
    activeRef.current = active;
    // ============================ Status ============================
    var visibleRef = (0, __TURBOPACK__imported__module__2211__36["useRef"])(null);
    // Update with new status
    __TURBOPACK__default__export__62(function() {
        // When use Suspense, the `visible` will repeat trigger,
        // But not real change of the `visible`, we need to skip it.
        // https://github.com/ant-design/ant-design/issues/44379
        if (mountedRef.current && visibleRef.current === visible) {
            return;
        }
        setAsyncVisible(visible);
        var isMounted = mountedRef.current;
        mountedRef.current = true;
        // if (!supportMotion) {
        //   return;
        // }
        var nextStatus;
        // Appear
        if (!isMounted && visible && motionAppear) {
            nextStatus = STATUS_APPEAR;
        }
        // Enter
        if (isMounted && visible && motionEnter) {
            nextStatus = STATUS_ENTER;
        }
        // Leave
        if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
            nextStatus = STATUS_LEAVE;
        }
        var nextEventHandlers = getEventHandlers(nextStatus);
        // Update to next status
        if (nextStatus && (supportMotion || nextEventHandlers[STEP_PREPARE])) {
            setStatus(nextStatus);
            startStep();
        } else {
            // Set back in case no motion but prev status has prepare step
            setStatus(STATUS_NONE);
        }
        visibleRef.current = visible;
    }, [
        visible
    ]);
    // ============================ Effect ============================
    // Reset when motion changed
    (0, __TURBOPACK__imported__module__2211__36["useEffect"])(function() {
        if (// Cancel appear
        currentStatus === STATUS_APPEAR && !motionAppear || // Cancel enter
        currentStatus === STATUS_ENTER && !motionEnter || // Cancel leave
        currentStatus === STATUS_LEAVE && !motionLeave) {
            setStatus(STATUS_NONE);
        }
    }, [
        motionAppear,
        motionEnter,
        motionLeave
    ]);
    (0, __TURBOPACK__imported__module__2211__36["useEffect"])(function() {
        return function() {
            mountedRef.current = false;
            clearTimeout(deadlineRef.current);
        };
    }, []);
    // Trigger `onVisibleChanged`
    var firstMountChangeRef = __TURBOPACK__imported__module__2211__36["useRef"](false);
    (0, __TURBOPACK__imported__module__2211__36["useEffect"])(function() {
        // [visible & motion not end] => [!visible & motion end] still need trigger onVisibleChanged
        if (asyncVisible) {
            firstMountChangeRef.current = true;
        }
        if (asyncVisible !== undefined && currentStatus === STATUS_NONE) {
            // Skip first render is invisible since it's nothing changed
            if (firstMountChangeRef.current || asyncVisible) {
                onVisibleChanged === null || onVisibleChanged === void 0 || onVisibleChanged(asyncVisible);
            }
            firstMountChangeRef.current = true;
        }
    }, [
        asyncVisible,
        currentStatus
    ]);
    // ============================ Styles ============================
    var mergedStyle = style;
    if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
        mergedStyle = _objectSpread2({
            transition: 'none'
        }, mergedStyle);
    }
    return [
        currentStatus,
        step,
        mergedStyle,
        asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible
    ];
}
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function genCSSMotion(config) {
    var transitionSupport = config;
    if (_typeof(config) === 'object') {
        transitionSupport = config.transitionSupport;
    }
    function isSupportTransition(props, contextMotion) {
        return !!(props.motionName && transitionSupport && contextMotion !== false);
    }
    var CSSMotion = /*#__PURE__*/ __TURBOPACK__imported__module__2211__32["forwardRef"](function(props, ref) {
        var _props$visible = props.visible, visible = _props$visible === void 0 ? true : _props$visible, _props$removeOnLeave = props.removeOnLeave, removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave, forceRender = props.forceRender, children = props.children, motionName = props.motionName, leavedClassName = props.leavedClassName, eventProps = props.eventProps;
        var _React$useContext = __TURBOPACK__imported__module__2211__32["useContext"](Context), contextMotion = _React$useContext.motion;
        var supportMotion = isSupportTransition(props, contextMotion);
        // Ref to the react node, it may be a HTMLElement
        var nodeRef = (0, __TURBOPACK__imported__module__2211__32["useRef"])();
        // Ref to the dom wrapper in case ref can not pass to HTMLElement
        var wrapperNodeRef = (0, __TURBOPACK__imported__module__2211__32["useRef"])();
        function getDomElement() {
            try {
                // Here we're avoiding call for findDOMNode since it's deprecated
                // in strict mode. We're calling it only when node ref is not
                // an instance of DOM HTMLElement. Otherwise use
                // findDOMNode as a final resort
                return nodeRef.current instanceof HTMLElement ? nodeRef.current : findDOMNode(wrapperNodeRef.current);
            } catch (e) {
                // Only happen when `motionDeadline` trigger but element removed.
                return null;
            }
        }
        var _useStatus = useStatus(supportMotion, visible, getDomElement, props), _useStatus2 = _slicedToArray(_useStatus, 4), status = _useStatus2[0], statusStep = _useStatus2[1], statusStyle = _useStatus2[2], mergedVisible = _useStatus2[3];
        // Record whether content has rendered
        // Will return null for un-rendered even when `removeOnLeave={false}`
        var renderedRef = __TURBOPACK__imported__module__2211__32["useRef"](mergedVisible);
        if (mergedVisible) {
            renderedRef.current = true;
        }
        // ====================== Refs ======================
        var setNodeRef = __TURBOPACK__imported__module__2211__32["useCallback"](function(node) {
            nodeRef.current = node;
            fillRef(ref, node);
        }, [
            ref
        ]);
        // ===================== Render =====================
        var motionChildren;
        var mergedProps = _objectSpread2(_objectSpread2({}, eventProps), {}, {
            visible: visible
        });
        if (!children) {
            // No children
            motionChildren = null;
        } else if (status === STATUS_NONE) {
            // Stable children
            if (mergedVisible) {
                motionChildren = children(_objectSpread2({}, mergedProps), setNodeRef);
            } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
                motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
                    className: leavedClassName
                }), setNodeRef);
            } else if (forceRender || !removeOnLeave && !leavedClassName) {
                motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
                    style: {
                        display: 'none'
                    }
                }), setNodeRef);
            } else {
                motionChildren = null;
            }
        } else {
            // In motion
            var statusSuffix;
            if (statusStep === STEP_PREPARE) {
                statusSuffix = 'prepare';
            } else if (isActive(statusStep)) {
                statusSuffix = 'active';
            } else if (statusStep === STEP_START) {
                statusSuffix = 'start';
            }
            var motionCls = getTransitionName(motionName, "".concat(status, "-").concat(statusSuffix));
            motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
                className: (0, __TURBOPACK__imported__module__1446__5["default"])(getTransitionName(motionName, status), _defineProperty(_defineProperty({}, motionCls, motionCls && statusSuffix), motionName, typeof motionName === 'string')),
                style: statusStyle
            }), setNodeRef);
        }
        // Auto inject ref if child node not have `ref` props
        if (/*#__PURE__*/ __TURBOPACK__imported__module__2211__32["isValidElement"](motionChildren) && supportRef(motionChildren)) {
            var originNodeRef = getNodeRef(motionChildren);
            if (!originNodeRef) {
                motionChildren = /*#__PURE__*/ __TURBOPACK__imported__module__2211__32["cloneElement"](motionChildren, {
                    ref: setNodeRef
                });
            }
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__2211__32["createElement"](__TURBOPACK__default__export__60, {
            ref: wrapperNodeRef
        }, motionChildren);
    });
    CSSMotion.displayName = 'CSSMotion';
    return CSSMotion;
}
const __TURBOPACK__default__export__66 = genCSSMotion(supportTransition);
// MERGED MODULE: [project]/node_modules/rc-motion/es/CSSMotionList.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__41 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/rc-motion/es/util/diff.js [library] (ecmascript)
;
;
;
var STATUS_ADD = 'add';
var STATUS_KEEP = 'keep';
var STATUS_REMOVE = 'remove';
var STATUS_REMOVED = 'removed';
function wrapKeyToObject(key) {
    var keyObj;
    if (key && _typeof(key) === 'object' && 'key' in key) {
        keyObj = key;
    } else {
        keyObj = {
            key: key
        };
    }
    return _objectSpread2(_objectSpread2({}, keyObj), {}, {
        key: String(keyObj.key)
    });
}
function parseKeys() {
    var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return keys.map(wrapKeyToObject);
}
function diffKeys() {
    var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var list = [];
    var currentIndex = 0;
    var currentLen = currentKeys.length;
    var prevKeyObjects = parseKeys(prevKeys);
    var currentKeyObjects = parseKeys(currentKeys);
    // Check prev keys to insert or keep
    prevKeyObjects.forEach(function(keyObj) {
        var hit = false;
        for(var i = currentIndex; i < currentLen; i += 1){
            var currentKeyObj = currentKeyObjects[i];
            if (currentKeyObj.key === keyObj.key) {
                // New added keys should add before current key
                if (currentIndex < i) {
                    list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function(obj) {
                        return _objectSpread2(_objectSpread2({}, obj), {}, {
                            status: STATUS_ADD
                        });
                    }));
                    currentIndex = i;
                }
                list.push(_objectSpread2(_objectSpread2({}, currentKeyObj), {}, {
                    status: STATUS_KEEP
                }));
                currentIndex += 1;
                hit = true;
                break;
            }
        }
        // If not hit, it means key is removed
        if (!hit) {
            list.push(_objectSpread2(_objectSpread2({}, keyObj), {}, {
                status: STATUS_REMOVE
            }));
        }
    });
    // Add rest to the list
    if (currentIndex < currentLen) {
        list = list.concat(currentKeyObjects.slice(currentIndex).map(function(obj) {
            return _objectSpread2(_objectSpread2({}, obj), {}, {
                status: STATUS_ADD
            });
        }));
    }
    /**
   * Merge same key when it remove and add again:
   *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
   */ var keys = {};
    list.forEach(function(_ref) {
        var key = _ref.key;
        keys[key] = (keys[key] || 0) + 1;
    });
    var duplicatedKeys = Object.keys(keys).filter(function(key) {
        return keys[key] > 1;
    });
    duplicatedKeys.forEach(function(matchKey) {
        // Remove `STATUS_REMOVE` node.
        list = list.filter(function(_ref2) {
            var key = _ref2.key, status = _ref2.status;
            return key !== matchKey || status !== STATUS_REMOVE;
        });
        // Update `STATUS_ADD` to `STATUS_KEEP`
        list.forEach(function(node) {
            if (node.key === matchKey) {
                // eslint-disable-next-line no-param-reassign
                node.status = STATUS_KEEP;
            }
        });
    });
    return list;
}
;
;
;
;
;
;
;
;
;
var _excluded4 = [
    "component",
    "children",
    "onVisibleChanged",
    "onAllRemoved"
], _excluded21 = [
    "status"
];
;
;
;
;
var MOTION_PROP_NAMES = [
    'eventProps',
    'visible',
    'children',
    'motionName',
    'motionAppear',
    'motionEnter',
    'motionLeave',
    'motionLeaveImmediately',
    'motionDeadline',
    'removeOnLeave',
    'leavedClassName',
    'onAppearPrepare',
    'onAppearStart',
    'onAppearActive',
    'onAppearEnd',
    'onEnterStart',
    'onEnterActive',
    'onEnterEnd',
    'onLeaveStart',
    'onLeaveActive',
    'onLeaveEnd'
];
function genCSSMotionList(transitionSupport) {
    var CSSMotion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __TURBOPACK__default__export__66;
    var CSSMotionList = /*#__PURE__*/ function(_React$Component) {
        _inherits(CSSMotionList, _React$Component);
        var _super = _createSuper(CSSMotionList);
        function CSSMotionList() {
            var _this;
            _classCallCheck(this, CSSMotionList);
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [
                this
            ].concat(args));
            _defineProperty(_assertThisInitialized(_this), "state", {
                keyEntities: []
            });
            // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
            _defineProperty(_assertThisInitialized(_this), "removeKey", function(removeKey) {
                _this.setState(function(prevState) {
                    var nextKeyEntities = prevState.keyEntities.map(function(entity) {
                        if (entity.key !== removeKey) return entity;
                        return _objectSpread2(_objectSpread2({}, entity), {}, {
                            status: STATUS_REMOVED
                        });
                    });
                    return {
                        keyEntities: nextKeyEntities
                    };
                }, function() {
                    var keyEntities = _this.state.keyEntities;
                    var restKeysCount = keyEntities.filter(function(_ref) {
                        var status = _ref.status;
                        return status !== STATUS_REMOVED;
                    }).length;
                    if (restKeysCount === 0 && _this.props.onAllRemoved) {
                        _this.props.onAllRemoved();
                    }
                });
            });
            return _this;
        }
        _createClass(CSSMotionList, [
            {
                key: "render",
                value: function render() {
                    var _this2 = this;
                    var keyEntities = this.state.keyEntities;
                    var _this$props = this.props, component = _this$props.component, children = _this$props.children, _onVisibleChanged = _this$props.onVisibleChanged, onAllRemoved = _this$props.onAllRemoved, restProps = _objectWithoutProperties(_this$props, _excluded4);
                    var Component = component || __TURBOPACK__imported__module__2211__41["Fragment"];
                    var motionProps = {};
                    MOTION_PROP_NAMES.forEach(function(prop) {
                        motionProps[prop] = restProps[prop];
                        delete restProps[prop];
                    });
                    delete restProps.keys;
                    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__41["createElement"](Component, restProps, keyEntities.map(function(_ref2, index) {
                        var status = _ref2.status, eventProps = _objectWithoutProperties(_ref2, _excluded21);
                        var visible = status === STATUS_ADD || status === STATUS_KEEP;
                        return /*#__PURE__*/ __TURBOPACK__imported__module__2211__41["createElement"](CSSMotion, _extends({}, motionProps, {
                            key: eventProps.key,
                            visible: visible,
                            eventProps: eventProps,
                            onVisibleChanged: function onVisibleChanged(changedVisible) {
                                _onVisibleChanged === null || _onVisibleChanged === void 0 || _onVisibleChanged(changedVisible, {
                                    key: eventProps.key
                                });
                                if (!changedVisible) {
                                    _this2.removeKey(eventProps.key);
                                }
                            }
                        }), function(props, ref) {
                            return children(_objectSpread2(_objectSpread2({}, props), {}, {
                                index: index
                            }), ref);
                        });
                    }));
                }
            }
        ], [
            {
                key: "getDerivedStateFromProps",
                value: function getDerivedStateFromProps(_ref3, _ref4) {
                    var keys = _ref3.keys;
                    var keyEntities = _ref4.keyEntities;
                    var parsedKeyObjects = parseKeys(keys);
                    var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
                    return {
                        keyEntities: mixedKeyEntities.filter(function(entity) {
                            var prevEntity = keyEntities.find(function(_ref5) {
                                var key = _ref5.key;
                                return entity.key === key;
                            });
                            // Remove if already mark as removed
                            if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
                                return false;
                            }
                            return true;
                        })
                    };
                }
            }
        ]);
        return CSSMotionList;
    }(__TURBOPACK__imported__module__2211__41["Component"]);
    _defineProperty(CSSMotionList, "defaultProps", {
        component: 'div'
    });
    return CSSMotionList;
}
const __TURBOPACK__default__export__67 = genCSSMotionList(supportTransition);
// MERGED MODULE: [project]/node_modules/rc-motion/es/index.js [library] (ecmascript) <locals>
;
;
;
;
;
const __TURBOPACK__default__export__68 = __TURBOPACK__default__export__66;
// MERGED MODULE: [project]/node_modules/rc-motion/es/CSSMotionList.js [library] (ecmascript) <export default as CSSMotionList>
;
var __TURBOPACK__imported__module__2211__42 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/components/attachments/SilentUploader.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__5 = __TURBOPACK__imported__module__7084__;
var __TURBOPACK__imported__module__7454__5 = __TURBOPACK__imported__module__7454__;
var __TURBOPACK__imported__module__2211__43 = __TURBOPACK__imported__module__2211__;
;
;
;
/**
 * SilentUploader is only wrap children with antd Upload component.
 */ function SilentUploader(props, ref) {
    const { children, upload, rootClassName } = props;
    const uploadRef = __TURBOPACK__imported__module__2211__43["default"].useRef(null);
    __TURBOPACK__imported__module__2211__43["default"].useImperativeHandle(ref, ()=>uploadRef.current);
    // ============================ Render ============================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__5["jsx"])(__TURBOPACK__imported__module__7454__5["Upload"], {
        ...upload,
        showUploadList: false,
        rootClassName: rootClassName,
        ref: uploadRef,
        children: children
    });
}
const __TURBOPACK__default__export__69 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__43["default"].forwardRef(SilentUploader);
// MERGED MODULE: [project]/components/attachments/FileList/FileListCard.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__6 = __TURBOPACK__imported__module__7084__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js [library] (ecmascript) <export default as CloseCircleFilled>
;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__44 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons-svg/es/asn/CloseCircleFilled.js [library] (ecmascript)
;
// This icon file is generated automatically.
var CloseCircleFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "fill-rule": "evenodd",
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"
                }
            }
        ]
    },
    "name": "close-circle",
    "theme": "filled"
};
const __TURBOPACK__default__export__70 = CloseCircleFilled;
;
;
;
;
var CloseCircleFilled1 = function CloseCircleFilled(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__44["createElement"](__TURBOPACK__default__export__9, _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__default__export__70
    }));
};
/**![close-circle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdmlld0JveD0iNjQgNjQgODk2IDg5NiIgZm9jdXNhYmxlPSJmYWxzZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTEyIDY0YzI0Ny40IDAgNDQ4IDIwMC42IDQ0OCA0NDhTNzU5LjQgOTYwIDUxMiA5NjAgNjQgNzU5LjQgNjQgNTEyIDI2NC42IDY0IDUxMiA2NHptMTI3Ljk4IDI3NC44MmgtLjA0bC0uMDguMDZMNTEyIDQ2Ni43NSAzODQuMTQgMzM4Ljg4Yy0uMDQtLjA1LS4wNi0uMDYtLjA4LS4wNmEuMTIuMTIgMCAwMC0uMDcgMGMtLjAzIDAtLjA1LjAxLS4wOS4wNWwtNDUuMDIgNDUuMDJhLjIuMiAwIDAwLS4wNS4wOS4xMi4xMiAwIDAwMCAuMDd2LjAyYS4yNy4yNyAwIDAwLjA2LjA2TDQ2Ni43NSA1MTIgMzM4Ljg4IDYzOS44NmMtLjA1LjA0LS4wNi4wNi0uMDYuMDhhLjEyLjEyIDAgMDAwIC4wN2MwIC4wMy4wMS4wNS4wNS4wOWw0NS4wMiA0NS4wMmEuMi4yIDAgMDAuMDkuMDUuMTIuMTIgMCAwMC4wNyAwYy4wMiAwIC4wNC0uMDEuMDgtLjA1TDUxMiA1NTcuMjVsMTI3Ljg2IDEyNy44N2MuMDQuMDQuMDYuMDUuMDguMDVhLjEyLjEyIDAgMDAuMDcgMGMuMDMgMCAuMDUtLjAxLjA5LS4wNWw0NS4wMi00NS4wMmEuMi4yIDAgMDAuMDUtLjA5LjEyLjEyIDAgMDAwLS4wN3YtLjAyYS4yNy4yNyAwIDAwLS4wNS0uMDZMNTU3LjI1IDUxMmwxMjcuODctMTI3Ljg2Yy4wNC0uMDQuMDUtLjA2LjA1LS4wOGEuMTIuMTIgMCAwMDAtLjA3YzAtLjAzLS4wMS0uMDUtLjA1LS4wOWwtNDUuMDItNDUuMDJhLjIuMiAwIDAwLS4wOS0uMDUuMTIuMTIgMCAwMC0uMDcgMHoiIC8+PC9zdmc+) */ var RefIcon4 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__44["forwardRef"](CloseCircleFilled1);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__71 = RefIcon4;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/FileExcelFilled.js [library] (ecmascript) <export default as FileExcelFilled>
;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/FileExcelFilled.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__45 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons-svg/es/asn/FileExcelFilled.js [library] (ecmascript)
;
// This icon file is generated automatically.
var FileExcelFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM575.34 477.84l-61.22 102.3L452.3 477.8a12 12 0 00-10.27-5.79h-38.44a12 12 0 00-6.4 1.85 12 12 0 00-3.75 16.56l82.34 130.42-83.45 132.78a12 12 0 00-1.84 6.39 12 12 0 0012 12h34.46a12 12 0 0010.21-5.7l62.7-101.47 62.3 101.45a12 12 0 0010.23 5.72h37.48a12 12 0 006.48-1.9 12 12 0 003.62-16.58l-83.83-130.55 85.3-132.47a12 12 0 001.9-6.5 12 12 0 00-12-12h-35.7a12 12 0 00-10.29 5.84z"
                }
            }
        ]
    },
    "name": "file-excel",
    "theme": "filled"
};
const __TURBOPACK__default__export__72 = FileExcelFilled;
;
;
;
;
var FileExcelFilled1 = function FileExcelFilled(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__45["createElement"](__TURBOPACK__default__export__9, _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__default__export__72
    }));
};
/**![file-excel](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg1NC42IDI4OC43YzYgNiA5LjQgMTQuMSA5LjQgMjIuNlY5MjhjMCAxNy43LTE0LjMgMzItMzIgMzJIMTkyYy0xNy43IDAtMzItMTQuMy0zMi0zMlY5NmMwLTE3LjcgMTQuMy0zMiAzMi0zMmg0MjQuN2M4LjUgMCAxNi43IDMuNCAyMi43IDkuNGwyMTUuMiAyMTUuM3pNNzkwLjIgMzI2TDYwMiAxMzcuOFYzMjZoMTg4LjJ6TTU3NS4zNCA0NzcuODRsLTYxLjIyIDEwMi4zTDQ1Mi4zIDQ3Ny44YTEyIDEyIDAgMDAtMTAuMjctNS43OWgtMzguNDRhMTIgMTIgMCAwMC02LjQgMS44NSAxMiAxMiAwIDAwLTMuNzUgMTYuNTZsODIuMzQgMTMwLjQyLTgzLjQ1IDEzMi43OGExMiAxMiAwIDAwLTEuODQgNi4zOSAxMiAxMiAwIDAwMTIgMTJoMzQuNDZhMTIgMTIgMCAwMDEwLjIxLTUuN2w2Mi43LTEwMS40NyA2Mi4zIDEwMS40NWExMiAxMiAwIDAwMTAuMjMgNS43MmgzNy40OGExMiAxMiAwIDAwNi40OC0xLjkgMTIgMTIgMCAwMDMuNjItMTYuNThsLTgzLjgzLTEzMC41NSA4NS4zLTEzMi40N2ExMiAxMiAwIDAwMS45LTYuNSAxMiAxMiAwIDAwLTEyLTEyaC0zNS43YTEyIDEyIDAgMDAtMTAuMjkgNS44NHoiIC8+PC9zdmc+) */ var RefIcon5 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__45["forwardRef"](FileExcelFilled1);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__73 = RefIcon5;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/FileImageFilled.js [library] (ecmascript) <export default as FileImageFilled>
;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/FileImageFilled.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__46 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons-svg/es/asn/FileImageFilled.js [library] (ecmascript)
;
// This icon file is generated automatically.
var FileImageFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M854.6 288.7L639.4 73.4c-6-6-14.2-9.4-22.7-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.6-9.4-22.6zM400 402c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm296 294H328c-6.7 0-10.4-7.7-6.3-12.9l99.8-127.2a8 8 0 0112.6 0l41.1 52.4 77.8-99.2a8 8 0 0112.6 0l136.5 174c4.3 5.2.5 12.9-6.1 12.9zm-94-370V137.8L790.2 326H602z"
                }
            }
        ]
    },
    "name": "file-image",
    "theme": "filled"
};
const __TURBOPACK__default__export__74 = FileImageFilled;
;
;
;
;
var FileImageFilled1 = function FileImageFilled(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__46["createElement"](__TURBOPACK__default__export__9, _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__default__export__74
    }));
};
/**![file-image](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg1NC42IDI4OC43TDYzOS40IDczLjRjLTYtNi0xNC4yLTkuNC0yMi43LTkuNEgxOTJjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjgzMmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg2NDBjMTcuNyAwIDMyLTE0LjMgMzItMzJWMzExLjNjMC04LjUtMy40LTE2LjYtOS40LTIyLjZ6TTQwMCA0MDJjMjIuMSAwIDQwIDE3LjkgNDAgNDBzLTE3LjkgNDAtNDAgNDAtNDAtMTcuOS00MC00MCAxNy45LTQwIDQwLTQwem0yOTYgMjk0SDMyOGMtNi43IDAtMTAuNC03LjctNi4zLTEyLjlsOTkuOC0xMjcuMmE4IDggMCAwMTEyLjYgMGw0MS4xIDUyLjQgNzcuOC05OS4yYTggOCAwIDAxMTIuNiAwbDEzNi41IDE3NGM0LjMgNS4yLjUgMTIuOS02LjEgMTIuOXptLTk0LTM3MFYxMzcuOEw3OTAuMiAzMjZINjAyeiIgLz48L3N2Zz4=) */ var RefIcon6 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__46["forwardRef"](FileImageFilled1);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__75 = RefIcon6;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/FileMarkdownFilled.js [library] (ecmascript) <export default as FileMarkdownFilled>
;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/FileMarkdownFilled.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__47 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons-svg/es/asn/FileMarkdownFilled.js [library] (ecmascript)
;
// This icon file is generated automatically.
var FileMarkdownFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM426.13 600.93l59.11 132.97a16 16 0 0014.62 9.5h24.06a16 16 0 0014.63-9.51l59.1-133.35V758a16 16 0 0016.01 16H641a16 16 0 0016-16V486a16 16 0 00-16-16h-34.75a16 16 0 00-14.67 9.62L512.1 662.2l-79.48-182.59a16 16 0 00-14.67-9.61H383a16 16 0 00-16 16v272a16 16 0 0016 16h27.13a16 16 0 0016-16V600.93z"
                }
            }
        ]
    },
    "name": "file-markdown",
    "theme": "filled"
};
const __TURBOPACK__default__export__76 = FileMarkdownFilled;
;
;
;
;
var FileMarkdownFilled1 = function FileMarkdownFilled(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__47["createElement"](__TURBOPACK__default__export__9, _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__default__export__76
    }));
};
/**![file-markdown](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg1NC42IDI4OC43YzYgNiA5LjQgMTQuMSA5LjQgMjIuNlY5MjhjMCAxNy43LTE0LjMgMzItMzIgMzJIMTkyYy0xNy43IDAtMzItMTQuMy0zMi0zMlY5NmMwLTE3LjcgMTQuMy0zMiAzMi0zMmg0MjQuN2M4LjUgMCAxNi43IDMuNCAyMi43IDkuNGwyMTUuMiAyMTUuM3pNNzkwLjIgMzI2TDYwMiAxMzcuOFYzMjZoMTg4LjJ6TTQyNi4xMyA2MDAuOTNsNTkuMTEgMTMyLjk3YTE2IDE2IDAgMDAxNC42MiA5LjVoMjQuMDZhMTYgMTYgMCAwMDE0LjYzLTkuNTFsNTkuMS0xMzMuMzVWNzU4YTE2IDE2IDAgMDAxNi4wMSAxNkg2NDFhMTYgMTYgMCAwMDE2LTE2VjQ4NmExNiAxNiAwIDAwLTE2LTE2aC0zNC43NWExNiAxNiAwIDAwLTE0LjY3IDkuNjJMNTEyLjEgNjYyLjJsLTc5LjQ4LTE4Mi41OWExNiAxNiAwIDAwLTE0LjY3LTkuNjFIMzgzYTE2IDE2IDAgMDAtMTYgMTZ2MjcyYTE2IDE2IDAgMDAxNiAxNmgyNy4xM2ExNiAxNiAwIDAwMTYtMTZWNjAwLjkzeiIgLz48L3N2Zz4=) */ var RefIcon7 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__47["forwardRef"](FileMarkdownFilled1);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__77 = RefIcon7;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/FilePdfFilled.js [library] (ecmascript) <export default as FilePdfFilled>
;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/FilePdfFilled.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__48 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons-svg/es/asn/FilePdfFilled.js [library] (ecmascript)
;
// This icon file is generated automatically.
var FilePdfFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM633.22 637.26c-15.18-.5-31.32.67-49.65 2.96-24.3-14.99-40.66-35.58-52.28-65.83l1.07-4.38 1.24-5.18c4.3-18.13 6.61-31.36 7.3-44.7.52-10.07-.04-19.36-1.83-27.97-3.3-18.59-16.45-29.46-33.02-30.13-15.45-.63-29.65 8-33.28 21.37-5.91 21.62-2.45 50.07 10.08 98.59-15.96 38.05-37.05 82.66-51.2 107.54-18.89 9.74-33.6 18.6-45.96 28.42-16.3 12.97-26.48 26.3-29.28 40.3-1.36 6.49.69 14.97 5.36 21.92 5.3 7.88 13.28 13 22.85 13.74 24.15 1.87 53.83-23.03 86.6-79.26 3.29-1.1 6.77-2.26 11.02-3.7l11.9-4.02c7.53-2.54 12.99-4.36 18.39-6.11 23.4-7.62 41.1-12.43 57.2-15.17 27.98 14.98 60.32 24.8 82.1 24.8 17.98 0 30.13-9.32 34.52-23.99 3.85-12.88.8-27.82-7.48-36.08-8.56-8.41-24.3-12.43-45.65-13.12zM385.23 765.68v-.36l.13-.34a54.86 54.86 0 015.6-10.76c4.28-6.58 10.17-13.5 17.47-20.87 3.92-3.95 8-7.8 12.79-12.12 1.07-.96 7.91-7.05 9.19-8.25l11.17-10.4-8.12 12.93c-12.32 19.64-23.46 33.78-33 43-3.51 3.4-6.6 5.9-9.1 7.51a16.43 16.43 0 01-2.61 1.42c-.41.17-.77.27-1.13.3a2.2 2.2 0 01-1.12-.15 2.07 2.07 0 01-1.27-1.91zM511.17 547.4l-2.26 4-1.4-4.38c-3.1-9.83-5.38-24.64-6.01-38-.72-15.2.49-24.32 5.29-24.32 6.74 0 9.83 10.8 10.07 27.05.22 14.28-2.03 29.14-5.7 35.65zm-5.81 58.46l1.53-4.05 2.09 3.8c11.69 21.24 26.86 38.96 43.54 51.31l3.6 2.66-4.39.9c-16.33 3.38-31.54 8.46-52.34 16.85 2.17-.88-21.62 8.86-27.64 11.17l-5.25 2.01 2.8-4.88c12.35-21.5 23.76-47.32 36.05-79.77zm157.62 76.26c-7.86 3.1-24.78.33-54.57-12.39l-7.56-3.22 8.2-.6c23.3-1.73 39.8-.45 49.42 3.07 4.1 1.5 6.83 3.39 8.04 5.55a4.64 4.64 0 01-1.36 6.31 6.7 6.7 0 01-2.17 1.28z"
                }
            }
        ]
    },
    "name": "file-pdf",
    "theme": "filled"
};
const __TURBOPACK__default__export__78 = FilePdfFilled;
;
;
;
;
var FilePdfFilled1 = function FilePdfFilled(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__48["createElement"](__TURBOPACK__default__export__9, _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__default__export__78
    }));
};
/**![file-pdf](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg1NC42IDI4OC43YzYgNiA5LjQgMTQuMSA5LjQgMjIuNlY5MjhjMCAxNy43LTE0LjMgMzItMzIgMzJIMTkyYy0xNy43IDAtMzItMTQuMy0zMi0zMlY5NmMwLTE3LjcgMTQuMy0zMiAzMi0zMmg0MjQuN2M4LjUgMCAxNi43IDMuNCAyMi43IDkuNGwyMTUuMiAyMTUuM3pNNzkwLjIgMzI2TDYwMiAxMzcuOFYzMjZoMTg4LjJ6TTYzMy4yMiA2MzcuMjZjLTE1LjE4LS41LTMxLjMyLjY3LTQ5LjY1IDIuOTYtMjQuMy0xNC45OS00MC42Ni0zNS41OC01Mi4yOC02NS44M2wxLjA3LTQuMzggMS4yNC01LjE4YzQuMy0xOC4xMyA2LjYxLTMxLjM2IDcuMy00NC43LjUyLTEwLjA3LS4wNC0xOS4zNi0xLjgzLTI3Ljk3LTMuMy0xOC41OS0xNi40NS0yOS40Ni0zMy4wMi0zMC4xMy0xNS40NS0uNjMtMjkuNjUgOC0zMy4yOCAyMS4zNy01LjkxIDIxLjYyLTIuNDUgNTAuMDcgMTAuMDggOTguNTktMTUuOTYgMzguMDUtMzcuMDUgODIuNjYtNTEuMiAxMDcuNTQtMTguODkgOS43NC0zMy42IDE4LjYtNDUuOTYgMjguNDItMTYuMyAxMi45Ny0yNi40OCAyNi4zLTI5LjI4IDQwLjMtMS4zNiA2LjQ5LjY5IDE0Ljk3IDUuMzYgMjEuOTIgNS4zIDcuODggMTMuMjggMTMgMjIuODUgMTMuNzQgMjQuMTUgMS44NyA1My44My0yMy4wMyA4Ni42LTc5LjI2IDMuMjktMS4xIDYuNzctMi4yNiAxMS4wMi0zLjdsMTEuOS00LjAyYzcuNTMtMi41NCAxMi45OS00LjM2IDE4LjM5LTYuMTEgMjMuNC03LjYyIDQxLjEtMTIuNDMgNTcuMi0xNS4xNyAyNy45OCAxNC45OCA2MC4zMiAyNC44IDgyLjEgMjQuOCAxNy45OCAwIDMwLjEzLTkuMzIgMzQuNTItMjMuOTkgMy44NS0xMi44OC44LTI3LjgyLTcuNDgtMzYuMDgtOC41Ni04LjQxLTI0LjMtMTIuNDMtNDUuNjUtMTMuMTJ6TTM4NS4yMyA3NjUuNjh2LS4zNmwuMTMtLjM0YTU0Ljg2IDU0Ljg2IDAgMDE1LjYtMTAuNzZjNC4yOC02LjU4IDEwLjE3LTEzLjUgMTcuNDctMjAuODcgMy45Mi0zLjk1IDgtNy44IDEyLjc5LTEyLjEyIDEuMDctLjk2IDcuOTEtNy4wNSA5LjE5LTguMjVsMTEuMTctMTAuNC04LjEyIDEyLjkzYy0xMi4zMiAxOS42NC0yMy40NiAzMy43OC0zMyA0My0zLjUxIDMuNC02LjYgNS45LTkuMSA3LjUxYTE2LjQzIDE2LjQzIDAgMDEtMi42MSAxLjQyYy0uNDEuMTctLjc3LjI3LTEuMTMuM2EyLjIgMi4yIDAgMDEtMS4xMi0uMTUgMi4wNyAyLjA3IDAgMDEtMS4yNy0xLjkxek01MTEuMTcgNTQ3LjRsLTIuMjYgNC0xLjQtNC4zOGMtMy4xLTkuODMtNS4zOC0yNC42NC02LjAxLTM4LS43Mi0xNS4yLjQ5LTI0LjMyIDUuMjktMjQuMzIgNi43NCAwIDkuODMgMTAuOCAxMC4wNyAyNy4wNS4yMiAxNC4yOC0yLjAzIDI5LjE0LTUuNyAzNS42NXptLTUuODEgNTguNDZsMS41My00LjA1IDIuMDkgMy44YzExLjY5IDIxLjI0IDI2Ljg2IDM4Ljk2IDQzLjU0IDUxLjMxbDMuNiAyLjY2LTQuMzkuOWMtMTYuMzMgMy4zOC0zMS41NCA4LjQ2LTUyLjM0IDE2Ljg1IDIuMTctLjg4LTIxLjYyIDguODYtMjcuNjQgMTEuMTdsLTUuMjUgMi4wMSAyLjgtNC44OGMxMi4zNS0yMS41IDIzLjc2LTQ3LjMyIDM2LjA1LTc5Ljc3em0xNTcuNjIgNzYuMjZjLTcuODYgMy4xLTI0Ljc4LjMzLTU0LjU3LTEyLjM5bC03LjU2LTMuMjIgOC4yLS42YzIzLjMtMS43MyAzOS44LS40NSA0OS40MiAzLjA3IDQuMSAxLjUgNi44MyAzLjM5IDguMDQgNS41NWE0LjY0IDQuNjQgMCAwMS0xLjM2IDYuMzEgNi43IDYuNyAwIDAxLTIuMTcgMS4yOHoiIC8+PC9zdmc+) */ var RefIcon8 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__48["forwardRef"](FilePdfFilled1);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__79 = RefIcon8;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/FilePptFilled.js [library] (ecmascript) <export default as FilePptFilled>
;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/FilePptFilled.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__49 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons-svg/es/asn/FilePptFilled.js [library] (ecmascript)
;
// This icon file is generated automatically.
var FilePptFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM468.53 760v-91.54h59.27c60.57 0 100.2-39.65 100.2-98.12 0-58.22-39.58-98.34-99.98-98.34H424a12 12 0 00-12 12v276a12 12 0 0012 12h32.53a12 12 0 0012-12zm0-139.33h34.9c47.82 0 67.19-12.93 67.19-50.33 0-32.05-18.12-50.12-49.87-50.12h-52.22v100.45z"
                }
            }
        ]
    },
    "name": "file-ppt",
    "theme": "filled"
};
const __TURBOPACK__default__export__80 = FilePptFilled;
;
;
;
;
var FilePptFilled1 = function FilePptFilled(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__49["createElement"](__TURBOPACK__default__export__9, _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__default__export__80
    }));
};
/**![file-ppt](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg1NC42IDI4OC43YzYgNiA5LjQgMTQuMSA5LjQgMjIuNlY5MjhjMCAxNy43LTE0LjMgMzItMzIgMzJIMTkyYy0xNy43IDAtMzItMTQuMy0zMi0zMlY5NmMwLTE3LjcgMTQuMy0zMiAzMi0zMmg0MjQuN2M4LjUgMCAxNi43IDMuNCAyMi43IDkuNGwyMTUuMiAyMTUuM3pNNzkwLjIgMzI2TDYwMiAxMzcuOFYzMjZoMTg4LjJ6TTQ2OC41MyA3NjB2LTkxLjU0aDU5LjI3YzYwLjU3IDAgMTAwLjItMzkuNjUgMTAwLjItOTguMTIgMC01OC4yMi0zOS41OC05OC4zNC05OS45OC05OC4zNEg0MjRhMTIgMTIgMCAwMC0xMiAxMnYyNzZhMTIgMTIgMCAwMDEyIDEyaDMyLjUzYTEyIDEyIDAgMDAxMi0xMnptMC0xMzkuMzNoMzQuOWM0Ny44MiAwIDY3LjE5LTEyLjkzIDY3LjE5LTUwLjMzIDAtMzIuMDUtMTguMTItNTAuMTItNDkuODctNTAuMTJoLTUyLjIydjEwMC40NXoiIC8+PC9zdmc+) */ var RefIcon9 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__49["forwardRef"](FilePptFilled1);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__81 = RefIcon9;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/FileTextFilled.js [library] (ecmascript) <export default as FileTextFilled>
;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/FileTextFilled.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__50 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons-svg/es/asn/FileTextFilled.js [library] (ecmascript)
;
// This icon file is generated automatically.
var FileTextFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM320 482a8 8 0 00-8 8v48a8 8 0 008 8h384a8 8 0 008-8v-48a8 8 0 00-8-8H320zm0 136a8 8 0 00-8 8v48a8 8 0 008 8h184a8 8 0 008-8v-48a8 8 0 00-8-8H320z"
                }
            }
        ]
    },
    "name": "file-text",
    "theme": "filled"
};
const __TURBOPACK__default__export__82 = FileTextFilled;
;
;
;
;
var FileTextFilled1 = function FileTextFilled(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__50["createElement"](__TURBOPACK__default__export__9, _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__default__export__82
    }));
};
/**![file-text](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg1NC42IDI4OC43YzYgNiA5LjQgMTQuMSA5LjQgMjIuNlY5MjhjMCAxNy43LTE0LjMgMzItMzIgMzJIMTkyYy0xNy43IDAtMzItMTQuMy0zMi0zMlY5NmMwLTE3LjcgMTQuMy0zMiAzMi0zMmg0MjQuN2M4LjUgMCAxNi43IDMuNCAyMi43IDkuNGwyMTUuMiAyMTUuM3pNNzkwLjIgMzI2TDYwMiAxMzcuOFYzMjZoMTg4LjJ6TTMyMCA0ODJhOCA4IDAgMDAtOCA4djQ4YTggOCAwIDAwOCA4aDM4NGE4IDggMCAwMDgtOHYtNDhhOCA4IDAgMDAtOC04SDMyMHptMCAxMzZhOCA4IDAgMDAtOCA4djQ4YTggOCAwIDAwOCA4aDE4NGE4IDggMCAwMDgtOHYtNDhhOCA4IDAgMDAtOC04SDMyMHoiIC8+PC9zdmc+) */ var RefIcon10 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__50["forwardRef"](FileTextFilled1);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__83 = RefIcon10;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/FileWordFilled.js [library] (ecmascript) <export default as FileWordFilled>
;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/FileWordFilled.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__51 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons-svg/es/asn/FileWordFilled.js [library] (ecmascript)
;
// This icon file is generated automatically.
var FileWordFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM512 566.1l52.81 197a12 12 0 0011.6 8.9h31.77a12 12 0 0011.6-8.88l74.37-276a12 12 0 00.4-3.12 12 12 0 00-12-12h-35.57a12 12 0 00-11.7 9.31l-45.78 199.1-49.76-199.32A12 12 0 00528.1 472h-32.2a12 12 0 00-11.64 9.1L434.6 680.01 388.5 481.3a12 12 0 00-11.68-9.29h-35.39a12 12 0 00-3.11.41 12 12 0 00-8.47 14.7l74.17 276A12 12 0 00415.6 772h31.99a12 12 0 0011.59-8.9l52.81-197z"
                }
            }
        ]
    },
    "name": "file-word",
    "theme": "filled"
};
const __TURBOPACK__default__export__84 = FileWordFilled;
;
;
;
;
var FileWordFilled1 = function FileWordFilled(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__51["createElement"](__TURBOPACK__default__export__9, _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__default__export__84
    }));
};
/**![file-word](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg1NC42IDI4OC43YzYgNiA5LjQgMTQuMSA5LjQgMjIuNlY5MjhjMCAxNy43LTE0LjMgMzItMzIgMzJIMTkyYy0xNy43IDAtMzItMTQuMy0zMi0zMlY5NmMwLTE3LjcgMTQuMy0zMiAzMi0zMmg0MjQuN2M4LjUgMCAxNi43IDMuNCAyMi43IDkuNGwyMTUuMiAyMTUuM3pNNzkwLjIgMzI2TDYwMiAxMzcuOFYzMjZoMTg4LjJ6TTUxMiA1NjYuMWw1Mi44MSAxOTdhMTIgMTIgMCAwMDExLjYgOC45aDMxLjc3YTEyIDEyIDAgMDAxMS42LTguODhsNzQuMzctMjc2YTEyIDEyIDAgMDAuNC0zLjEyIDEyIDEyIDAgMDAtMTItMTJoLTM1LjU3YTEyIDEyIDAgMDAtMTEuNyA5LjMxbC00NS43OCAxOTkuMS00OS43Ni0xOTkuMzJBMTIgMTIgMCAwMDUyOC4xIDQ3MmgtMzIuMmExMiAxMiAwIDAwLTExLjY0IDkuMUw0MzQuNiA2ODAuMDEgMzg4LjUgNDgxLjNhMTIgMTIgMCAwMC0xMS42OC05LjI5aC0zNS4zOWExMiAxMiAwIDAwLTMuMTEuNDEgMTIgMTIgMCAwMC04LjQ3IDE0LjdsNzQuMTcgMjc2QTEyIDEyIDAgMDA0MTUuNiA3NzJoMzEuOTlhMTIgMTIgMCAwMDExLjU5LTguOWw1Mi44MS0xOTd6IiAvPjwvc3ZnPg==) */ var RefIcon11 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__51["forwardRef"](FileWordFilled1);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__85 = RefIcon11;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/FileZipFilled.js [library] (ecmascript) <export default as FileZipFilled>
;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/FileZipFilled.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__52 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons-svg/es/asn/FileZipFilled.js [library] (ecmascript)
;
// This icon file is generated automatically.
var FileZipFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM296 136v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm0 64v160h128V584H296zm48 48h32v64h-32v-64z"
                }
            }
        ]
    },
    "name": "file-zip",
    "theme": "filled"
};
const __TURBOPACK__default__export__86 = FileZipFilled;
;
;
;
;
var FileZipFilled1 = function FileZipFilled(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__52["createElement"](__TURBOPACK__default__export__9, _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__default__export__86
    }));
};
/**![file-zip](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg1NC42IDI4OC43YzYgNiA5LjQgMTQuMSA5LjQgMjIuNlY5MjhjMCAxNy43LTE0LjMgMzItMzIgMzJIMTkyYy0xNy43IDAtMzItMTQuMy0zMi0zMlY5NmMwLTE3LjcgMTQuMy0zMiAzMi0zMmg0MjQuN2M4LjUgMCAxNi43IDMuNCAyMi43IDkuNGwyMTUuMiAyMTUuM3pNNzkwLjIgMzI2TDYwMiAxMzcuOFYzMjZoMTg4LjJ6TTI5NiAxMzZ2NjRoNjR2LTY0aC02NHptNjQgNjR2NjRoNjR2LTY0aC02NHptLTY0IDY0djY0aDY0di02NGgtNjR6bTY0IDY0djY0aDY0di02NGgtNjR6bS02NCA2NHY2NGg2NHYtNjRoLTY0em02NCA2NHY2NGg2NHYtNjRoLTY0em0tNjQgNjR2NjRoNjR2LTY0aC02NHptMCA2NHYxNjBoMTI4VjU4NEgyOTZ6bTQ4IDQ4aDMydjY0aC0zMnYtNjR6IiAvPjwvc3ZnPg==) */ var RefIcon12 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__52["forwardRef"](FileZipFilled1);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__87 = RefIcon12;
var __TURBOPACK__imported__module__7454__6 = __TURBOPACK__imported__module__7454__;
var __TURBOPACK__imported__module__1446__6 = __TURBOPACK__imported__module__1446__;
var __TURBOPACK__imported__module__2211__53 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/components/attachments/style/index.ts [library] (ecmascript)
;
// MERGED MODULE: [project]/components/attachments/style/fileCard.ts [library] (ecmascript)
;
const genFileCardStyle = (token)=>{
    const { componentCls, antCls, calc } = token;
    const cardCls = `${componentCls}-list-card`;
    const cardHeight = calc(token.fontSize).mul(token.lineHeight).mul(2).add(token.paddingSM).add(token.paddingSM).equal();
    return {
        [cardCls]: {
            borderRadius: token.borderRadius,
            position: 'relative',
            background: token.colorFillContent,
            borderWidth: token.lineWidth,
            borderStyle: 'solid',
            borderColor: 'transparent',
            flex: 'none',
            // =============================== Desc ================================
            [`${cardCls}-name,${cardCls}-desc`]: {
                display: 'flex',
                flexWrap: 'nowrap',
                maxWidth: '100%'
            },
            [`${cardCls}-ellipsis-prefix`]: {
                flex: '0 1 auto',
                minWidth: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
            },
            [`${cardCls}-ellipsis-suffix`]: {
                flex: 'none'
            },
            // ============================= Overview ==============================
            '&-type-overview': {
                padding: calc(token.paddingSM).sub(token.lineWidth).equal(),
                paddingInlineStart: calc(token.padding).add(token.lineWidth).equal(),
                display: 'flex',
                flexWrap: 'nowrap',
                gap: token.paddingXS,
                alignItems: 'flex-start',
                width: 236,
                // Icon
                [`${cardCls}-icon`]: {
                    fontSize: calc(token.fontSizeLG).mul(2).equal(),
                    lineHeight: 1,
                    paddingTop: calc(token.paddingXXS).mul(1.5).equal(),
                    flex: 'none'
                },
                // Content
                [`${cardCls}-content`]: {
                    flex: 'auto',
                    minWidth: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch'
                },
                [`${cardCls}-desc`]: {
                    color: token.colorTextTertiary
                }
            },
            // ============================== Preview ==============================
            '&-type-preview': {
                width: cardHeight,
                height: cardHeight,
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                [`&:not(${cardCls}-status-error)`]: {
                    border: 0
                },
                // Img
                [`${antCls}-image`]: {
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                    position: 'relative',
                    overflow: 'hidden',
                    img: {
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: 'inherit'
                    }
                },
                // Mask
                [`${cardCls}-img-mask`]: {
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 'inherit',
                    background: `rgba(0, 0, 0, ${token.opacityLoading})`
                },
                // Error
                [`&${cardCls}-status-error`]: {
                    borderRadius: 'inherit',
                    [`img, ${cardCls}-img-mask`]: {
                        borderRadius: calc(token.borderRadius).sub(token.lineWidth).equal()
                    },
                    [`${cardCls}-desc`]: {
                        paddingInline: token.paddingXXS
                    }
                },
                // Progress
                [`${cardCls}-progress`]: {}
            },
            // ============================ Remove Icon ============================
            [`${cardCls}-remove`]: {
                position: 'absolute',
                top: 0,
                insetInlineEnd: 0,
                border: 0,
                padding: token.paddingXXS,
                background: 'transparent',
                lineHeight: 1,
                transform: 'translate(50%, -50%)',
                fontSize: token.fontSize,
                cursor: 'pointer',
                opacity: token.opacityLoading,
                display: 'none',
                '&:dir(rtl)': {
                    transform: 'translate(-50%, -50%)'
                },
                '&:hover': {
                    opacity: 1
                },
                '&:active': {
                    opacity: token.opacityLoading
                }
            },
            [`&:hover ${cardCls}-remove`]: {
                display: 'block'
            },
            // ============================== Status ===============================
            '&-status-error': {
                borderColor: token.colorError,
                [`${cardCls}-desc`]: {
                    color: token.colorError
                }
            },
            // ============================== Motion ===============================
            '&-motion': {
                transition: [
                    'opacity',
                    'width',
                    'margin',
                    'padding'
                ].map((prop)=>`${prop} ${token.motionDurationSlow}`).join(','),
                '&-appear-start': {
                    width: 0,
                    transition: 'none'
                },
                '&-leave-active': {
                    opacity: 0,
                    width: 0,
                    paddingInline: 0,
                    borderInlineWidth: 0,
                    marginInlineEnd: calc(token.paddingSM).mul(-1).equal()
                }
            }
        }
    };
};
const __TURBOPACK__default__export__88 = genFileCardStyle;
;
;
;
;
const anyBoxSizing = {
    '&, *': {
        boxSizing: 'border-box'
    }
};
const genAttachmentsStyle = (token)=>{
    const { componentCls, calc, antCls } = token;
    const dropAreaCls = `${componentCls}-drop-area`;
    const placeholderCls = `${componentCls}-placeholder`;
    return {
        // ============================== Full Screen ==============================
        [dropAreaCls]: {
            position: 'absolute',
            inset: 0,
            zIndex: token.zIndexPopupBase,
            ...anyBoxSizing,
            '&-on-body': {
                position: 'fixed',
                inset: 0
            },
            '&-hide-placement': {
                [`${placeholderCls}-inner`]: {
                    display: 'none'
                }
            },
            [placeholderCls]: {
                padding: 0
            }
        },
        '&': {
            // ============================= Placeholder =============================
            [placeholderCls]: {
                height: '100%',
                borderRadius: token.borderRadius,
                borderWidth: token.lineWidthBold,
                borderStyle: 'dashed',
                borderColor: 'transparent',
                padding: token.padding,
                position: 'relative',
                backdropFilter: 'blur(10px)',
                background: token.colorBgPlaceholderHover,
                ...anyBoxSizing,
                [`${antCls}-upload-wrapper ${antCls}-upload${antCls}-upload-btn`]: {
                    padding: 0
                },
                [`&${placeholderCls}-drag-in`]: {
                    borderColor: token.colorPrimaryHover
                },
                [`&${placeholderCls}-disabled`]: {
                    opacity: 0.25,
                    pointerEvents: 'none'
                },
                [`${placeholderCls}-inner`]: {
                    gap: calc(token.paddingXXS).div(2).equal()
                },
                [`${placeholderCls}-icon`]: {
                    fontSize: token.fontSizeHeading2,
                    lineHeight: 1
                },
                [`${placeholderCls}-title${placeholderCls}-title`]: {
                    margin: 0,
                    fontSize: token.fontSize,
                    lineHeight: token.lineHeight
                },
                [`${placeholderCls}-description`]: {}
            }
        }
    };
};
const genFileListStyle = (token)=>{
    const { componentCls, calc } = token;
    const fileListCls = `${componentCls}-list`;
    const cardHeight = calc(token.fontSize).mul(token.lineHeight).mul(2).add(token.paddingSM).add(token.paddingSM).equal();
    return {
        [componentCls]: {
            position: 'relative',
            width: '100%',
            ...anyBoxSizing,
            // =============================== File List ===============================
            [fileListCls]: {
                display: 'flex',
                flexWrap: 'wrap',
                gap: token.paddingSM,
                fontSize: token.fontSize,
                lineHeight: token.lineHeight,
                color: token.colorText,
                paddingBlock: token.paddingSM,
                paddingInline: token.padding,
                width: '100%',
                background: token.colorBgContainer,
                // Hide scrollbar
                scrollbarWidth: 'none',
                '-ms-overflow-style': 'none',
                '&::-webkit-scrollbar': {
                    display: 'none'
                },
                // Scroll
                '&-overflow-scrollX, &-overflow-scrollY': {
                    '&:before, &:after': {
                        content: '""',
                        position: 'absolute',
                        opacity: 0,
                        transition: `opacity ${token.motionDurationSlow}`,
                        zIndex: 1
                    }
                },
                '&-overflow-ping-start:before': {
                    opacity: 1
                },
                '&-overflow-ping-end:after': {
                    opacity: 1
                },
                '&-overflow-scrollX': {
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    flexWrap: 'nowrap',
                    '&:before, &:after': {
                        insetBlock: 0,
                        width: 8
                    },
                    '&:before': {
                        insetInlineStart: 0,
                        background: `linear-gradient(to right, rgba(0,0,0,0.06), rgba(0,0,0,0));`
                    },
                    '&:after': {
                        insetInlineEnd: 0,
                        background: `linear-gradient(to left, rgba(0,0,0,0.06), rgba(0,0,0,0));`
                    },
                    '&:dir(rtl)': {
                        '&:before': {
                            background: `linear-gradient(to left, rgba(0,0,0,0.06), rgba(0,0,0,0));`
                        },
                        '&:after': {
                            background: `linear-gradient(to right, rgba(0,0,0,0.06), rgba(0,0,0,0));`
                        }
                    }
                },
                '&-overflow-scrollY': {
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    maxHeight: calc(cardHeight).mul(3).equal(),
                    '&:before, &:after': {
                        insetInline: 0,
                        height: 8
                    },
                    '&:before': {
                        insetBlockStart: 0,
                        background: `linear-gradient(to bottom, rgba(0,0,0,0.06), rgba(0,0,0,0));`
                    },
                    '&:after': {
                        insetBlockEnd: 0,
                        background: `linear-gradient(to top, rgba(0,0,0,0.06), rgba(0,0,0,0));`
                    }
                },
                // ======================================================================
                // ==                              Upload                              ==
                // ======================================================================
                '&-upload-btn': {
                    width: cardHeight,
                    height: cardHeight,
                    fontSize: token.fontSizeHeading2,
                    color: '#999'
                },
                // ======================================================================
                // ==                             PrevNext                             ==
                // ======================================================================
                '&-prev-btn, &-next-btn': {
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    boxShadow: token.boxShadowTertiary,
                    opacity: 0,
                    pointerEvents: 'none'
                },
                '&-prev-btn': {
                    left: {
                        _skip_check_: true,
                        value: token.padding
                    }
                },
                '&-next-btn': {
                    right: {
                        _skip_check_: true,
                        value: token.padding
                    }
                },
                '&:dir(ltr)': {
                    [`&${fileListCls}-overflow-ping-start ${fileListCls}-prev-btn`]: {
                        opacity: 1,
                        pointerEvents: 'auto'
                    },
                    [`&${fileListCls}-overflow-ping-end ${fileListCls}-next-btn`]: {
                        opacity: 1,
                        pointerEvents: 'auto'
                    }
                },
                '&:dir(rtl)': {
                    [`&${fileListCls}-overflow-ping-end ${fileListCls}-prev-btn`]: {
                        opacity: 1,
                        pointerEvents: 'auto'
                    },
                    [`&${fileListCls}-overflow-ping-start ${fileListCls}-next-btn`]: {
                        opacity: 1,
                        pointerEvents: 'auto'
                    }
                }
            }
        }
    };
};
const prepareComponentToken1 = (token)=>{
    const { colorBgContainer } = token;
    const colorBgPlaceholderHover = new FastColor(colorBgContainer).setA(0.85);
    return {
        colorBgPlaceholderHover: colorBgPlaceholderHover.toRgbString()
    };
};
const __TURBOPACK__default__export__89 = genStyleHooks('Attachments', (token)=>{
    const compToken = merge1(token, {});
    return [
        genAttachmentsStyle(compToken),
        genFileListStyle(compToken),
        __TURBOPACK__default__export__88(compToken)
    ];
}, prepareComponentToken1);
// MERGED MODULE: [project]/components/attachments/util.ts [library] (ecmascript)
;
const isImageFileType = (type)=>type.indexOf('image/') === 0;
const MEASURE_SIZE = 200;
function previewImage(file) {
    return new Promise((resolve)=>{
        if (!file || !file.type || !isImageFileType(file.type)) {
            resolve('');
            return;
        }
        const img = new Image();
        img.onload = ()=>{
            const { width, height } = img;
            const ratio = width / height;
            const MEASURE_SIZE_WIDTH = ratio > 1 ? MEASURE_SIZE : MEASURE_SIZE * ratio;
            const MEASURE_SIZE_HEIGHT = ratio > 1 ? MEASURE_SIZE / ratio : MEASURE_SIZE;
            const canvas = document.createElement('canvas');
            canvas.width = MEASURE_SIZE_WIDTH;
            canvas.height = MEASURE_SIZE_HEIGHT;
            canvas.style.cssText = `position: fixed; left: 0; top: 0; width: ${MEASURE_SIZE_WIDTH}px; height: ${MEASURE_SIZE_HEIGHT}px; z-index: 9999; display: none;`;
            document.body.appendChild(canvas);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, MEASURE_SIZE_WIDTH, MEASURE_SIZE_HEIGHT);
            const dataURL = canvas.toDataURL();
            document.body.removeChild(canvas);
            window.URL.revokeObjectURL(img.src);
            resolve(dataURL);
        };
        img.crossOrigin = 'anonymous';
        if (file.type.startsWith('image/svg+xml')) {
            const reader = new FileReader();
            reader.onload = ()=>{
                if (reader.result && typeof reader.result === 'string') {
                    img.src = reader.result;
                }
            };
            reader.readAsDataURL(file);
        } else if (file.type.startsWith('image/gif')) {
            const reader = new FileReader();
            reader.onload = ()=>{
                if (reader.result) {
                    resolve(reader.result);
                }
            };
            reader.readAsDataURL(file);
        } else {
            img.src = window.URL.createObjectURL(file);
        }
    });
}
// MERGED MODULE: [project]/components/attachments/FileList/AudioIcon.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__7 = __TURBOPACK__imported__module__7084__;
;
function AudioIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__7["jsxs"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 16 16",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__7["jsx"])("title", {
                children: "audio"
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__7["jsx"])("g", {
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__7["jsx"])("path", {
                    d: "M14.1178571,4.0125 C14.225,4.11964286 14.2857143,4.26428571 14.2857143,4.41607143 L14.2857143,15.4285714 C14.2857143,15.7446429 14.0303571,16 13.7142857,16 L2.28571429,16 C1.96964286,16 1.71428571,15.7446429 1.71428571,15.4285714 L1.71428571,0.571428571 C1.71428571,0.255357143 1.96964286,0 2.28571429,0 L9.86964286,0 C10.0214286,0 10.1678571,0.0607142857 10.275,0.167857143 L14.1178571,4.0125 Z M10.7315824,7.11216117 C10.7428131,7.15148751 10.7485063,7.19218979 10.7485063,7.23309113 L10.7485063,8.07742614 C10.7484199,8.27364959 10.6183424,8.44607275 10.4296853,8.50003683 L8.32984514,9.09986306 L8.32984514,11.7071803 C8.32986605,12.5367078 7.67249692,13.217028 6.84345686,13.2454634 L6.79068592,13.2463395 C6.12766108,13.2463395 5.53916361,12.8217001 5.33010655,12.1924966 C5.1210495,11.563293 5.33842118,10.8709227 5.86959669,10.4741173 C6.40077221,10.0773119 7.12636292,10.0652587 7.67042486,10.4442027 L7.67020842,7.74937024 L7.68449368,7.74937024 C7.72405122,7.59919041 7.83988806,7.48101083 7.98924584,7.4384546 L10.1880418,6.81004755 C10.42156,6.74340323 10.6648954,6.87865515 10.7315824,7.11216117 Z M9.60714286,1.31785714 L12.9678571,4.67857143 L9.60714286,4.67857143 L9.60714286,1.31785714 Z",
                    fill: "currentColor"
                })
            })
        ]
    });
}
// MERGED MODULE: [project]/components/attachments/FileList/Progress.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__8 = __TURBOPACK__imported__module__7084__;
var __TURBOPACK__imported__module__7454__7 = __TURBOPACK__imported__module__7454__;
;
;
function Progress(props) {
    const { percent } = props;
    const { token } = __TURBOPACK__imported__module__7454__7["theme"].useToken();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__8["jsx"])(__TURBOPACK__imported__module__7454__7["Progress"], {
        type: "circle",
        percent: percent,
        size: token.fontSizeHeading2 * 2,
        strokeColor: "#FFF",
        trailColor: "rgba(255, 255, 255, 0.3)",
        format: (ptg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__8["jsxs"])("span", {
                style: {
                    color: '#FFF'
                },
                children: [
                    (ptg || 0).toFixed(0),
                    "%"
                ]
            })
    });
}
// MERGED MODULE: [project]/components/attachments/FileList/VideoIcon.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__9 = __TURBOPACK__imported__module__7084__;
;
function VideoIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__9["jsxs"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 16 16",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__9["jsx"])("title", {
                children: "video"
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__9["jsx"])("g", {
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__9["jsx"])("path", {
                    d: "M14.1178571,4.0125 C14.225,4.11964286 14.2857143,4.26428571 14.2857143,4.41607143 L14.2857143,15.4285714 C14.2857143,15.7446429 14.0303571,16 13.7142857,16 L2.28571429,16 C1.96964286,16 1.71428571,15.7446429 1.71428571,15.4285714 L1.71428571,0.571428571 C1.71428571,0.255357143 1.96964286,0 2.28571429,0 L9.86964286,0 C10.0214286,0 10.1678571,0.0607142857 10.275,0.167857143 L14.1178571,4.0125 Z M12.9678571,4.67857143 L9.60714286,1.31785714 L9.60714286,4.67857143 L12.9678571,4.67857143 Z M10.5379461,10.3101106 L6.68957555,13.0059749 C6.59910784,13.0693494 6.47439406,13.0473861 6.41101953,12.9569184 C6.3874624,12.9232903 6.37482581,12.8832269 6.37482581,12.8421686 L6.37482581,7.45043999 C6.37482581,7.33998304 6.46436886,7.25043999 6.57482581,7.25043999 C6.61588409,7.25043999 6.65594753,7.26307658 6.68957555,7.28663371 L10.5379461,9.98249803 C10.6284138,10.0458726 10.6503772,10.1705863 10.5870027,10.2610541 C10.5736331,10.2801392 10.5570312,10.2967411 10.5379461,10.3101106 Z",
                    fill: "currentColor"
                })
            })
        ]
    });
}
;
;
;
;
;
;
;
;
;
;
;
;
const EMPTY = '\u00A0';
const DEFAULT_ICON_COLOR = '#8c8c8c';
const IMG_EXTS = [
    'png',
    'jpg',
    'jpeg',
    'gif',
    'bmp',
    'webp',
    'svg'
];
const PRESET_FILE_ICONS = [
    {
        key: 'default',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])(__TURBOPACK__default__export__83, {}),
        color: DEFAULT_ICON_COLOR,
        ext: []
    },
    {
        key: 'excel',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])(__TURBOPACK__default__export__73, {}),
        color: '#22b35e',
        ext: [
            'xlsx',
            'xls'
        ]
    },
    {
        key: 'image',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])(__TURBOPACK__default__export__75, {}),
        color: DEFAULT_ICON_COLOR,
        ext: IMG_EXTS
    },
    {
        key: 'markdown',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])(__TURBOPACK__default__export__77, {}),
        color: DEFAULT_ICON_COLOR,
        ext: [
            'md',
            'mdx'
        ]
    },
    {
        key: 'pdf',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])(__TURBOPACK__default__export__79, {}),
        color: '#ff4d4f',
        ext: [
            'pdf'
        ]
    },
    {
        key: 'ppt',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])(__TURBOPACK__default__export__81, {}),
        color: '#ff6e31',
        ext: [
            'ppt',
            'pptx'
        ]
    },
    {
        key: 'word',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])(__TURBOPACK__default__export__85, {}),
        color: '#1677ff',
        ext: [
            'doc',
            'docx'
        ]
    },
    {
        key: 'zip',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])(__TURBOPACK__default__export__87, {}),
        color: '#fab714',
        ext: [
            'zip',
            'rar',
            '7z',
            'tar',
            'gz'
        ]
    },
    {
        key: 'video',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])(VideoIcon, {}),
        color: '#ff4d4f',
        ext: [
            'mp4',
            'avi',
            'mov',
            'wmv',
            'flv',
            'mkv'
        ]
    },
    {
        key: 'audio',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])(AudioIcon, {}),
        color: '#8c8c8c',
        ext: [
            'mp3',
            'wav',
            'flac',
            'ape',
            'aac',
            'ogg'
        ]
    }
];
function matchExt(suffix, ext) {
    return ext.some((e)=>suffix.toLowerCase() === `.${e}`);
}
function getSize(size) {
    let retSize = size;
    const units = [
        'B',
        'KB',
        'MB',
        'GB',
        'TB',
        'PB',
        'EB'
    ];
    let unitIndex = 0;
    while(retSize >= 1024 && unitIndex < units.length - 1){
        retSize /= 1024;
        unitIndex++;
    }
    return `${retSize.toFixed(0)} ${units[unitIndex]}`;
}
function FileListCard(props, ref) {
    const { prefixCls: customizePrefixCls, item, onRemove, className, style, imageProps, type, icon } = props;
    const context = __TURBOPACK__imported__module__2211__53["default"].useContext(AttachmentContext);
    const { disabled } = context || {};
    const { name, size, percent, status = 'done', description } = item;
    // ============================= Prefix =============================
    const { getPrefixCls } = __TURBOPACK__default__export__4();
    const prefixCls = getPrefixCls('attachment', customizePrefixCls);
    const cardCls = `${prefixCls}-list-card`;
    // ============================= Style ==============================
    const [wrapCSSVar, hashId, cssVarCls] = __TURBOPACK__default__export__89(prefixCls);
    // ============================== Name ==============================
    const [namePrefix, nameSuffix] = __TURBOPACK__imported__module__2211__53["default"].useMemo(()=>{
        const nameStr = name || '';
        const match = nameStr.match(/^(.*)\.[^.]+$/);
        return match ? [
            match[1],
            nameStr.slice(match[1].length)
        ] : [
            nameStr,
            ''
        ];
    }, [
        name
    ]);
    const isImg = __TURBOPACK__imported__module__2211__53["default"].useMemo(()=>matchExt(nameSuffix, IMG_EXTS), [
        nameSuffix
    ]);
    // ============================== Desc ==============================
    const desc = __TURBOPACK__imported__module__2211__53["default"].useMemo(()=>{
        if (description) {
            return description;
        }
        if (status === 'uploading') {
            return `${percent || 0}%`;
        }
        if (status === 'error') {
            return item.response || EMPTY;
        }
        return size ? getSize(size) : EMPTY;
    }, [
        status,
        percent
    ]);
    // ============================== Icon ==============================
    const [finalIcon, iconColor] = __TURBOPACK__imported__module__2211__53["default"].useMemo(()=>{
        if (icon) {
            if (typeof icon === 'string') {
                const presetIcon = PRESET_FILE_ICONS.find((preset)=>preset.key === icon);
                if (presetIcon) {
                    return [
                        presetIcon.icon,
                        presetIcon.color
                    ];
                }
            } else {
                return [
                    icon,
                    undefined
                ];
            }
        }
        for (const { ext, icon: presetIcon, color } of PRESET_FILE_ICONS){
            if (matchExt(nameSuffix, ext)) {
                return [
                    presetIcon,
                    color
                ];
            }
        }
        return [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])(__TURBOPACK__default__export__83, {}, "defaultIcon"),
            DEFAULT_ICON_COLOR
        ];
    }, [
        nameSuffix,
        icon
    ]);
    // ========================== ImagePreview ==========================
    const [previewImg, setPreviewImg] = __TURBOPACK__imported__module__2211__53["default"].useState();
    __TURBOPACK__imported__module__2211__53["default"].useEffect(()=>{
        if (item.originFileObj) {
            let synced = true;
            previewImage(item.originFileObj).then((url)=>{
                if (synced) {
                    setPreviewImg(url);
                }
            });
            return ()=>{
                synced = false;
            };
        }
        setPreviewImg(undefined);
    }, [
        item.originFileObj
    ]);
    // ============================= Render =============================
    let content = null;
    const previewUrl = item.thumbUrl || item.url || previewImg;
    // 根据 type 属性或文件类型决定是否显示图片预览
    const shouldShowImagePreview = type === 'image' || type !== 'file' && isImg && (item.originFileObj || previewUrl);
    if (shouldShowImagePreview) {
        // Preview Image style
        content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsxs"])(__TURBOPACK__imported__module__7084__6["Fragment"], {
            children: [
                previewUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])(__TURBOPACK__imported__module__7454__6["Image"], {
                    alt: "preview",
                    src: previewUrl,
                    ...imageProps
                }),
                status !== 'done' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsxs"])("div", {
                    className: `${cardCls}-img-mask`,
                    children: [
                        status === 'uploading' && percent !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])(Progress, {
                            percent: percent,
                            prefixCls: cardCls
                        }),
                        status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])("div", {
                            className: `${cardCls}-desc`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])("div", {
                                className: `${cardCls}-ellipsis-prefix`,
                                children: desc
                            })
                        })
                    ]
                })
            ]
        });
    } else {
        // Preview Card style
        content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsxs"])(__TURBOPACK__imported__module__7084__6["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])("div", {
                    className: `${cardCls}-icon`,
                    style: iconColor ? {
                        color: iconColor
                    } : undefined,
                    children: finalIcon
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsxs"])("div", {
                    className: `${cardCls}-content`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsxs"])("div", {
                            className: `${cardCls}-name`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])("div", {
                                    className: `${cardCls}-ellipsis-prefix`,
                                    children: namePrefix ?? EMPTY
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])("div", {
                                    className: `${cardCls}-ellipsis-suffix`,
                                    children: nameSuffix
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])("div", {
                            className: `${cardCls}-desc`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])("div", {
                                className: `${cardCls}-ellipsis-prefix`,
                                children: desc
                            })
                        })
                    ]
                })
            ]
        });
    }
    return wrapCSSVar(/*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsxs"])("div", {
        className: (0, __TURBOPACK__imported__module__1446__6["default"])(cardCls, {
            [`${cardCls}-status-${status}`]: status,
            [`${cardCls}-type-preview`]: shouldShowImagePreview,
            [`${cardCls}-type-overview`]: !shouldShowImagePreview
        }, className, hashId, cssVarCls),
        style: style,
        ref: ref,
        children: [
            content,
            !disabled && onRemove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])("button", {
                type: "button",
                className: `${cardCls}-remove`,
                onClick: ()=>{
                    onRemove(item);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__6["jsx"])(__TURBOPACK__default__export__71, {})
            })
        ]
    }));
}
const __TURBOPACK__default__export__90 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__53["default"].forwardRef(FileListCard);
;
;
;
;
;
;
;
;
;
const TOLERANCE = 1;
function FileList(props) {
    const { prefixCls, items, onRemove, overflow, upload, listClassName, listStyle, itemClassName, uploadClassName, uploadStyle, itemStyle, imageProps } = props;
    const listCls = `${prefixCls}-list`;
    const containerRef = __TURBOPACK__imported__module__2211__42["default"].useRef(null);
    const [firstMount, setFirstMount] = __TURBOPACK__imported__module__2211__42["default"].useState(false);
    const { disabled } = __TURBOPACK__imported__module__2211__42["default"].useContext(AttachmentContext);
    __TURBOPACK__imported__module__2211__42["default"].useEffect(()=>{
        setFirstMount(true);
        return ()=>{
            setFirstMount(false);
        };
    }, []);
    // ================================= Scroll =================================
    const [pingStart, setPingStart] = __TURBOPACK__imported__module__2211__42["default"].useState(false);
    const [pingEnd, setPingEnd] = __TURBOPACK__imported__module__2211__42["default"].useState(false);
    const checkPing = ()=>{
        const containerEle = containerRef.current;
        if (!containerEle) {
            return;
        }
        if (overflow === 'scrollX') {
            setPingStart(Math.abs(containerEle.scrollLeft) >= TOLERANCE);
            setPingEnd(containerEle.scrollWidth - containerEle.clientWidth - Math.abs(containerEle.scrollLeft) >= TOLERANCE);
        } else if (overflow === 'scrollY') {
            setPingStart(containerEle.scrollTop !== 0);
            setPingEnd(containerEle.scrollHeight - containerEle.clientHeight !== containerEle.scrollTop);
        }
    };
    __TURBOPACK__imported__module__2211__42["default"].useEffect(()=>{
        checkPing();
    }, [
        overflow,
        items.length
    ]);
    const onScrollOffset = (offset)=>{
        const containerEle = containerRef.current;
        if (containerEle) {
            containerEle.scrollTo({
                left: containerEle.scrollLeft + offset * containerEle.clientWidth,
                behavior: 'smooth'
            });
        }
    };
    const onScrollLeft = ()=>{
        onScrollOffset(-1);
    };
    const onScrollRight = ()=>{
        onScrollOffset(1);
    };
    // ================================= Render =================================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__4["jsxs"])("div", {
        className: (0, __TURBOPACK__imported__module__1446__4["default"])(listCls, {
            [`${listCls}-overflow-${props.overflow}`]: overflow,
            [`${listCls}-overflow-ping-start`]: pingStart,
            [`${listCls}-overflow-ping-end`]: pingEnd
        }, listClassName),
        ref: containerRef,
        onScroll: checkPing,
        style: listStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__4["jsx"])(__TURBOPACK__default__export__67, {
                keys: items.map((item)=>({
                        key: item.uid,
                        item
                    })),
                motionName: `${listCls}-card-motion`,
                component: false,
                motionAppear: firstMount,
                motionLeave: true,
                motionEnter: true,
                children: ({ key, item, className: motionCls, style: motionStyle })=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__4["jsx"])(__TURBOPACK__default__export__90, {
                        prefixCls: prefixCls,
                        item: item,
                        onRemove: onRemove,
                        className: (0, __TURBOPACK__imported__module__1446__4["default"])(motionCls, itemClassName),
                        imageProps: imageProps,
                        style: {
                            ...motionStyle,
                            ...itemStyle
                        }
                    }, key);
                }
            }),
            !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__4["jsx"])(__TURBOPACK__default__export__69, {
                upload: upload,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__4["jsx"])(__TURBOPACK__imported__module__7454__4["Button"], {
                    className: (0, __TURBOPACK__imported__module__1446__4["default"])(uploadClassName, `${listCls}-upload-btn`),
                    style: uploadStyle,
                    type: "dashed",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__4["jsx"])(__TURBOPACK__default__export__57, {
                        className: `${listCls}-upload-btn-icon`
                    })
                })
            }),
            overflow === 'scrollX' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__4["jsxs"])(__TURBOPACK__imported__module__7084__4["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__4["jsx"])(__TURBOPACK__imported__module__7454__4["Button"], {
                        size: "small",
                        shape: "circle",
                        className: `${listCls}-prev-btn`,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__4["jsx"])(__TURBOPACK__default__export__55, {}),
                        onClick: onScrollLeft
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__4["jsx"])(__TURBOPACK__imported__module__7454__4["Button"], {
                        size: "small",
                        shape: "circle",
                        className: `${listCls}-next-btn`,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__4["jsx"])(__TURBOPACK__default__export__59, {}),
                        onClick: onScrollRight
                    })
                ]
            })
        ]
    });
}
// MERGED MODULE: [project]/components/attachments/PlaceholderUploader.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__10 = __TURBOPACK__imported__module__7084__;
var __TURBOPACK__imported__module__7454__8 = __TURBOPACK__imported__module__7454__;
var __TURBOPACK__imported__module__1446__7 = __TURBOPACK__imported__module__1446__;
var __TURBOPACK__imported__module__2211__54 = __TURBOPACK__imported__module__2211__;
;
;
;
;
;
function Placeholder(props, ref) {
    const { prefixCls, placeholder = {}, upload, className, style } = props;
    const placeholderCls = `${prefixCls}-placeholder`;
    const placeholderConfig = placeholder || {};
    const { disabled } = __TURBOPACK__imported__module__2211__54["default"].useContext(AttachmentContext);
    // ============================= Drag =============================
    const [dragIn, setDragIn] = __TURBOPACK__imported__module__2211__54["default"].useState(false);
    const onDragEnter = ()=>{
        setDragIn(true);
    };
    const onDragLeave = (e)=>{
        // Leave the div should end
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setDragIn(false);
        }
    };
    const onDrop = ()=>{
        setDragIn(false);
    };
    // ============================ Render ============================
    const node = /*#__PURE__*/ __TURBOPACK__imported__module__2211__54["default"].isValidElement(placeholder) ? placeholder : /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__10["jsxs"])(__TURBOPACK__imported__module__7454__8["Flex"], {
        align: "center",
        justify: "center",
        vertical: true,
        className: `${placeholderCls}-inner`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__10["jsx"])(__TURBOPACK__imported__module__7454__8["Typography"].Text, {
                className: `${placeholderCls}-icon`,
                children: placeholderConfig.icon
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__10["jsx"])(__TURBOPACK__imported__module__7454__8["Typography"].Title, {
                className: `${placeholderCls}-title`,
                level: 5,
                children: placeholderConfig.title
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__10["jsx"])(__TURBOPACK__imported__module__7454__8["Typography"].Text, {
                className: `${placeholderCls}-description`,
                type: "secondary",
                children: placeholderConfig.description
            })
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__10["jsx"])("div", {
        className: (0, __TURBOPACK__imported__module__1446__7["default"])(placeholderCls, {
            [`${placeholderCls}-drag-in`]: dragIn,
            [`${placeholderCls}-disabled`]: disabled
        }, className),
        onDragEnter: onDragEnter,
        onDragLeave: onDragLeave,
        onDrop: onDrop,
        "aria-hidden": disabled,
        style: style,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__10["jsx"])(__TURBOPACK__imported__module__7454__8["Upload"].Dragger, {
            showUploadList: false,
            ...upload,
            ref: ref,
            style: {
                padding: 0,
                border: 0,
                background: 'transparent'
            },
            children: node
        })
    });
}
const __TURBOPACK__default__export__91 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__54["default"].forwardRef(Placeholder);
;
;
;
;
;
;
;
;
;
;
;
;
;
function Attachments(props, ref) {
    const { prefixCls: customizePrefixCls, rootClassName, rootStyle, className, style, items, children, getDropContainer, placeholder, onChange, onRemove, overflow, imageProps, disabled, maxCount, classNames = {}, styles = {}, ...uploadProps } = props;
    // ============================ PrefixCls ============================
    const { getPrefixCls, direction } = __TURBOPACK__default__export__4();
    const prefixCls = getPrefixCls('attachment', customizePrefixCls);
    // ===================== Component Config =========================
    const contextConfig = __TURBOPACK__default__export__3('attachments');
    const { classNames: contextClassNames, styles: contextStyles } = contextConfig;
    // ============================= Ref =============================
    const containerRef = __TURBOPACK__imported__module__2211__25["default"].useRef(null);
    const uploadRef = __TURBOPACK__imported__module__2211__25["default"].useRef(null);
    __TURBOPACK__imported__module__2211__25["default"].useImperativeHandle(ref, ()=>({
            nativeElement: containerRef.current,
            upload: (file)=>{
                const fileInput = uploadRef.current?.nativeElement?.querySelector('input[type="file"]');
                // Trigger native change event
                if (fileInput) {
                    const dataTransfer = new DataTransfer();
                    dataTransfer.items.add(file);
                    fileInput.files = dataTransfer.files;
                    fileInput.dispatchEvent(new Event('change', {
                        bubbles: true
                    }));
                }
            }
        }));
    // ============================ Style ============================
    const [wrapCSSVar, hashId, cssVarCls] = __TURBOPACK__default__export__89(prefixCls);
    const cssinjsCls = (0, __TURBOPACK__imported__module__1446__2["default"])(hashId, cssVarCls);
    // ============================ Upload ============================
    const [fileList, setFileList] = useMergedState([], {
        value: items
    });
    const triggerChange = useEvent((info)=>{
        setFileList(info.fileList);
        onChange?.(info);
    });
    const mergedUploadProps = {
        ...uploadProps,
        fileList,
        maxCount,
        onChange: triggerChange
    };
    const onItemRemove = (item)=>Promise.resolve(typeof onRemove === 'function' ? onRemove(item) : onRemove).then((ret)=>{
            // Prevent removing file
            if (ret === false) {
                return;
            }
            const newFileList = fileList.filter((fileItem)=>fileItem.uid !== item.uid);
            triggerChange({
                file: {
                    ...item,
                    status: 'removed'
                },
                fileList: newFileList
            });
        });
    // ============================ Render ============================
    let renderChildren;
    const getPlaceholderNode = (type, props, ref)=>{
        const placeholderContent = typeof placeholder === 'function' ? placeholder(type) : placeholder;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__2["jsx"])(__TURBOPACK__default__export__91, {
            placeholder: placeholderContent,
            upload: mergedUploadProps,
            prefixCls: prefixCls,
            className: (0, __TURBOPACK__imported__module__1446__2["default"])(contextClassNames.placeholder, classNames.placeholder),
            style: {
                ...contextStyles.placeholder,
                ...styles.placeholder,
                ...props?.style
            },
            ref: ref
        });
    };
    if (children) {
        renderChildren = /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__2["jsxs"])(__TURBOPACK__imported__module__7084__2["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__2["jsx"])(__TURBOPACK__default__export__69, {
                    upload: mergedUploadProps,
                    rootClassName: rootClassName,
                    ref: uploadRef,
                    children: children
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__2["jsx"])(DropArea, {
                    getDropContainer: getDropContainer,
                    prefixCls: prefixCls,
                    className: (0, __TURBOPACK__imported__module__1446__2["default"])(cssinjsCls, rootClassName),
                    children: getPlaceholderNode('drop')
                })
            ]
        });
    } else {
        const hasFileList = fileList.length > 0;
        renderChildren = /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__2["jsxs"])("div", {
            className: (0, __TURBOPACK__imported__module__1446__2["default"])(prefixCls, cssinjsCls, {
                [`${prefixCls}-rtl`]: direction === 'rtl'
            }, className, rootClassName),
            style: {
                ...rootStyle,
                ...style
            },
            dir: direction || 'ltr',
            ref: containerRef,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__2["jsx"])(FileList, {
                    prefixCls: prefixCls,
                    items: fileList,
                    onRemove: onItemRemove,
                    overflow: overflow,
                    upload: mergedUploadProps,
                    listClassName: (0, __TURBOPACK__imported__module__1446__2["default"])(contextClassNames.list, classNames.list),
                    listStyle: {
                        ...contextStyles.list,
                        ...styles.list,
                        ...!hasFileList && {
                            display: 'none'
                        }
                    },
                    uploadClassName: (0, __TURBOPACK__imported__module__1446__2["default"])(contextClassNames.upload, classNames.upload),
                    uploadStyle: {
                        ...contextStyles.upload,
                        ...styles.upload
                    },
                    itemClassName: (0, __TURBOPACK__imported__module__1446__2["default"])(contextClassNames.item, classNames.item),
                    itemStyle: {
                        ...contextStyles.item,
                        ...styles.item
                    },
                    imageProps: imageProps
                }),
                getPlaceholderNode('inline', hasFileList ? {
                    style: {
                        display: 'none'
                    }
                } : {}, uploadRef),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__2["jsx"])(DropArea, {
                    getDropContainer: getDropContainer || (()=>containerRef.current),
                    prefixCls: prefixCls,
                    className: cssinjsCls,
                    children: getPlaceholderNode('drop')
                })
            ]
        });
    }
    return wrapCSSVar(/*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__2["jsx"])(AttachmentContext.Provider, {
        value: {
            disabled
        },
        children: renderChildren
    }));
}
const ForwardAttachments = /*#__PURE__*/ __TURBOPACK__imported__module__2211__25["default"].forwardRef(Attachments);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
ForwardAttachments.FileCard = __TURBOPACK__default__export__90;
const __TURBOPACK__default__export__92 = ForwardAttachments;
// MERGED MODULE: [project]/components/sender/index.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__11 = __TURBOPACK__imported__module__7084__;
var __TURBOPACK__imported__module__7454__9 = __TURBOPACK__imported__module__7454__;
var __TURBOPACK__imported__module__1446__8 = __TURBOPACK__imported__module__1446__;
var __TURBOPACK__imported__module__9394__1 = __TURBOPACK__imported__module__9394__;
var __TURBOPACK__imported__module__1229__ = __turbopack_context__.i(1229);
var __TURBOPACK__imported__module__2211__55 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/components/_util/hooks/use-proxy-imperative-handle.ts [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__56 = __TURBOPACK__imported__module__2211__;
;
function useProxyImperativeHandle(ref, init) {
    return (0, __TURBOPACK__imported__module__2211__56["useImperativeHandle"])(ref, ()=>{
        const refObj = init();
        const { nativeElement } = refObj;
        return new Proxy(nativeElement, {
            get (obj, prop) {
                if (refObj[prop]) {
                    return refObj[prop];
                }
                return Reflect.get(obj, prop);
            }
        });
    });
}
// MERGED MODULE: [project]/components/sender/SenderHeader.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__12 = __TURBOPACK__imported__module__7084__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [library] (ecmascript) <export default as CloseOutlined>
;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__57 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons-svg/es/asn/CloseOutlined.js [library] (ecmascript)
;
// This icon file is generated automatically.
var CloseOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "fill-rule": "evenodd",
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"
                }
            }
        ]
    },
    "name": "close",
    "theme": "outlined"
};
const __TURBOPACK__default__export__93 = CloseOutlined;
;
;
;
;
var CloseOutlined1 = function CloseOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__57["createElement"](__TURBOPACK__default__export__9, _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__default__export__93
    }));
};
/**![close](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdmlld0JveD0iNjQgNjQgODk2IDg5NiIgZm9jdXNhYmxlPSJmYWxzZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNzk5Ljg2IDE2Ni4zMWMuMDIgMCAuMDQuMDIuMDguMDZsNTcuNjkgNTcuN2MuMDQuMDMuMDUuMDUuMDYuMDhhLjEyLjEyIDAgMDEwIC4wNmMwIC4wMy0uMDIuMDUtLjA2LjA5TDU2OS45MyA1MTJsMjg3LjcgMjg3LjdjLjA0LjA0LjA1LjA2LjA2LjA5YS4xMi4xMiAwIDAxMCAuMDdjMCAuMDItLjAyLjA0LS4wNi4wOGwtNTcuNyA1Ny42OWMtLjAzLjA0LS4wNS4wNS0uMDcuMDZhLjEyLjEyIDAgMDEtLjA3IDBjLS4wMyAwLS4wNS0uMDItLjA5LS4wNkw1MTIgNTY5LjkzbC0yODcuNyAyODcuN2MtLjA0LjA0LS4wNi4wNS0uMDkuMDZhLjEyLjEyIDAgMDEtLjA3IDBjLS4wMiAwLS4wNC0uMDItLjA4LS4wNmwtNTcuNjktNTcuN2MtLjA0LS4wMy0uMDUtLjA1LS4wNi0uMDdhLjEyLjEyIDAgMDEwLS4wN2MwLS4wMy4wMi0uMDUuMDYtLjA5TDQ1NC4wNyA1MTJsLTI4Ny43LTI4Ny43Yy0uMDQtLjA0LS4wNS0uMDYtLjA2LS4wOWEuMTIuMTIgMCAwMTAtLjA3YzAtLjAyLjAyLS4wNC4wNi0uMDhsNTcuNy01Ny42OWMuMDMtLjA0LjA1LS4wNS4wNy0uMDZhLjEyLjEyIDAgMDEuMDcgMGMuMDMgMCAuMDUuMDIuMDkuMDZMNTEyIDQ1NC4wN2wyODcuNy0yODcuN2MuMDQtLjA0LjA2LS4wNS4wOS0uMDZhLjEyLjEyIDAgMDEuMDcgMHoiIC8+PC9zdmc+) */ var RefIcon13 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__57["forwardRef"](CloseOutlined1);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__94 = RefIcon13;
var __TURBOPACK__imported__module__7454__10 = __TURBOPACK__imported__module__7454__;
var __TURBOPACK__imported__module__1446__9 = __TURBOPACK__imported__module__1446__;
var __TURBOPACK__imported__module__2211__58 = __TURBOPACK__imported__module__2211__;
;
;
;
;
;
;
const SendHeaderContext = /*#__PURE__*/ __TURBOPACK__imported__module__2211__58["createContext"]({});
const collapseHeight = ()=>({
        height: 0
    });
const expandedHeight = (ele)=>({
        height: ele.scrollHeight
    });
function SenderHeader(props) {
    const { title, onOpenChange, open, children, className, style, classNames: classes = {}, styles = {}, closable, forceRender } = props;
    const { prefixCls } = __TURBOPACK__imported__module__2211__58["useContext"](SendHeaderContext);
    const headerCls = `${prefixCls}-header`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__12["jsx"])(__TURBOPACK__default__export__68, {
        motionEnter: true,
        motionLeave: true,
        motionName: `${headerCls}-motion`,
        leavedClassName: `${headerCls}-motion-hidden`,
        onEnterStart: collapseHeight,
        onEnterActive: expandedHeight,
        onLeaveStart: expandedHeight,
        onLeaveActive: collapseHeight,
        visible: open,
        forceRender: forceRender,
        children: ({ className: motionClassName, style: motionStyle })=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__12["jsxs"])("div", {
                className: (0, __TURBOPACK__imported__module__1446__9["default"])(headerCls, motionClassName, className),
                style: {
                    ...motionStyle,
                    ...style
                },
                children: [
                    (closable !== false || title) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__12["jsxs"])("div", {
                        className: // We follow antd naming standard here.
                        // So the header part is use `-header` suffix.
                        // Though its little bit weird for double `-header`.
                        (0, __TURBOPACK__imported__module__1446__9["default"])(`${headerCls}-header`, classes.header),
                        style: {
                            ...styles.header
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__12["jsx"])("div", {
                                className: `${headerCls}-title`,
                                children: title
                            }),
                            closable !== false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__12["jsx"])("div", {
                                className: `${headerCls}-close`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__12["jsx"])(__TURBOPACK__imported__module__7454__10["Button"], {
                                    type: "text",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__12["jsx"])(__TURBOPACK__default__export__94, {}),
                                    size: "small",
                                    onClick: ()=>{
                                        onOpenChange?.(!open);
                                    }
                                })
                            })
                        ]
                    }),
                    children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__12["jsx"])("div", {
                        className: (0, __TURBOPACK__imported__module__1446__9["default"])(`${headerCls}-content`, classes.content),
                        style: {
                            ...styles.content
                        },
                        children: children
                    })
                ]
            });
        }
    });
}
// MERGED MODULE: [project]/components/sender/components/ActionButton.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__13 = __TURBOPACK__imported__module__7084__;
var __TURBOPACK__imported__module__7454__11 = __TURBOPACK__imported__module__7454__;
var __TURBOPACK__imported__module__1446__10 = __TURBOPACK__imported__module__1446__;
var __TURBOPACK__imported__module__2211__59 = __TURBOPACK__imported__module__2211__;
;
;
;
;
const ActionButtonContext = /*#__PURE__*/ __TURBOPACK__imported__module__2211__59["createContext"](null);
function ActionButton(props, ref) {
    const { className, action, onClick, ...restProps } = props;
    const context = __TURBOPACK__imported__module__2211__59["useContext"](ActionButtonContext);
    const { prefixCls, disabled: rootDisabled } = context;
    const mergedDisabled = restProps.disabled ?? rootDisabled ?? context[`${action}Disabled`];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__13["jsx"])(__TURBOPACK__imported__module__7454__11["Button"], {
        type: "text",
        ...restProps,
        ref: ref,
        onClick: (e)=>{
            if (mergedDisabled) {
                return;
            }
            context[action]?.();
            onClick?.(e);
        },
        className: (0, __TURBOPACK__imported__module__1446__10["default"])(prefixCls, className, {
            [`${prefixCls}-disabled`]: mergedDisabled
        })
    });
}
const __TURBOPACK__default__export__95 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__59["forwardRef"](ActionButton);
// MERGED MODULE: [project]/components/sender/components/ClearButton.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__14 = __TURBOPACK__imported__module__7084__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/ClearOutlined.js [library] (ecmascript) <export default as ClearOutlined>
;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/ClearOutlined.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__60 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons-svg/es/asn/ClearOutlined.js [library] (ecmascript)
;
// This icon file is generated automatically.
var ClearOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "defs",
                "attrs": {},
                "children": [
                    {
                        "tag": "style",
                        "attrs": {}
                    }
                ]
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"
                }
            }
        ]
    },
    "name": "clear",
    "theme": "outlined"
};
const __TURBOPACK__default__export__96 = ClearOutlined;
;
;
;
;
var ClearOutlined1 = function ClearOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__60["createElement"](__TURBOPACK__default__export__9, _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__default__export__96
    }));
};
/**![clear](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlIC8+PC9kZWZzPjxwYXRoIGQ9Ik04OTkuMSA4NjkuNmwtNTMtMzA1LjZIODY0YzE0LjQgMCAyNi0xMS42IDI2LTI2VjM0NmMwLTE0LjQtMTEuNi0yNi0yNi0yNkg2MThWMTM4YzAtMTQuNC0xMS42LTI2LTI2LTI2SDQzMmMtMTQuNCAwLTI2IDExLjYtMjYgMjZ2MTgySDE2MGMtMTQuNCAwLTI2IDExLjYtMjYgMjZ2MTkyYzAgMTQuNCAxMS42IDI2IDI2IDI2aDE3LjlsLTUzIDMwNS42YTI1Ljk1IDI1Ljk1IDAgMDAyNS42IDMwLjRoNzIzYzEuNSAwIDMtLjEgNC40LS40YTI1Ljg4IDI1Ljg4IDAgMDAyMS4yLTMwek0yMDQgMzkwaDI3MlYxODJoNzJ2MjA4aDI3MnYxMDRIMjA0VjM5MHptNDY4IDQ0MFY2NzRjMC00LjQtMy42LTgtOC04aC00OGMtNC40IDAtOCAzLjYtOCA4djE1Nkg0MTZWNjc0YzAtNC40LTMuNi04LTgtOGgtNDhjLTQuNCAwLTggMy42LTggOHYxNTZIMjAyLjhsNDUuMS0yNjBINzc2bDQ1LjEgMjYwSDY3MnoiIC8+PC9zdmc+) */ var RefIcon14 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__60["forwardRef"](ClearOutlined1);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__97 = RefIcon14;
var __TURBOPACK__imported__module__2211__61 = __TURBOPACK__imported__module__2211__;
;
;
;
;
function ClearButton(props, ref) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__14["jsx"])(__TURBOPACK__default__export__95, {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__14["jsx"])(__TURBOPACK__default__export__97, {}),
        ...props,
        action: "onClear",
        ref: ref
    });
}
const __TURBOPACK__default__export__98 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__61["forwardRef"](ClearButton);
// MERGED MODULE: [project]/components/sender/components/LoadingButton.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__15 = __TURBOPACK__imported__module__7084__;
var __TURBOPACK__imported__module__1446__11 = __TURBOPACK__imported__module__1446__;
var __TURBOPACK__imported__module__2211__62 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/components/sender/StopLoading.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__16 = __TURBOPACK__imported__module__7084__;
var __TURBOPACK__imported__module__2211__63 = __TURBOPACK__imported__module__2211__;
;
;
const StopLoadingIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__2211__63["memo"])((props)=>{
    const { className } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__16["jsxs"])("svg", {
        color: "currentColor",
        viewBox: "0 0 1000 1000",
        xmlns: "http://www.w3.org/2000/svg",
        //xmlnsXlink="http://www.w3.org/1999/xlink"
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__16["jsx"])("title", {
                children: "Stop Loading"
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__16["jsx"])("rect", {
                fill: "currentColor",
                height: "250",
                rx: "24",
                ry: "24",
                width: "250",
                x: "375",
                y: "375"
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__16["jsx"])("circle", {
                cx: "500",
                cy: "500",
                fill: "none",
                r: "450",
                stroke: "currentColor",
                strokeWidth: "100",
                opacity: "0.45"
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__16["jsx"])("circle", {
                cx: "500",
                cy: "500",
                fill: "none",
                r: "450",
                stroke: "currentColor",
                strokeWidth: "100",
                strokeDasharray: "600 9999999",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__16["jsx"])("animateTransform", {
                    attributeName: "transform",
                    dur: "1s",
                    from: "0 500 500",
                    repeatCount: "indefinite",
                    to: "360 500 500",
                    type: "rotate"
                })
            })
        ]
    });
});
const __TURBOPACK__default__export__99 = StopLoadingIcon;
;
;
;
;
;
function LoadingButton(props, ref) {
    const { prefixCls } = __TURBOPACK__imported__module__2211__62["useContext"](ActionButtonContext);
    const { className } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__15["jsx"])(__TURBOPACK__default__export__95, {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__15["jsx"])(__TURBOPACK__default__export__99, {
            className: `${prefixCls}-loading-icon`
        }),
        color: "primary",
        variant: "text",
        shape: "circle",
        ...props,
        className: (0, __TURBOPACK__imported__module__1446__11["default"])(className, `${prefixCls}-loading-button`),
        action: "onCancel",
        ref: ref
    });
}
const __TURBOPACK__default__export__100 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__62["forwardRef"](LoadingButton);
// MERGED MODULE: [project]/components/sender/components/SendButton.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__17 = __TURBOPACK__imported__module__7084__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/ArrowUpOutlined.js [library] (ecmascript) <export default as ArrowUpOutlined>
;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/ArrowUpOutlined.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__64 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons-svg/es/asn/ArrowUpOutlined.js [library] (ecmascript)
;
// This icon file is generated automatically.
var ArrowUpOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"
                }
            }
        ]
    },
    "name": "arrow-up",
    "theme": "outlined"
};
const __TURBOPACK__default__export__101 = ArrowUpOutlined;
;
;
;
;
var ArrowUpOutlined1 = function ArrowUpOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__64["createElement"](__TURBOPACK__default__export__9, _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__default__export__101
    }));
};
/**![arrow-up](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg2OCA1NDUuNUw1MzYuMSAxNjNhMzEuOTYgMzEuOTYgMCAwMC00OC4zIDBMMTU2IDU0NS41YTcuOTcgNy45NyAwIDAwNiAxMy4yaDgxYzQuNiAwIDktMiAxMi4xLTUuNUw0NzQgMzAwLjlWODY0YzAgNC40IDMuNiA4IDggOGg2MGM0LjQgMCA4LTMuNiA4LThWMzAwLjlsMjE4LjkgMjUyLjNjMyAzLjUgNy40IDUuNSAxMi4xIDUuNWg4MWM2LjggMCAxMC41LTggNi0xMy4yeiIgLz48L3N2Zz4=) */ var RefIcon15 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__64["forwardRef"](ArrowUpOutlined1);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__102 = RefIcon15;
var __TURBOPACK__imported__module__2211__65 = __TURBOPACK__imported__module__2211__;
;
;
;
;
function SendButton(props, ref) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__17["jsx"])(__TURBOPACK__default__export__95, {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__17["jsx"])(__TURBOPACK__default__export__102, {}),
        type: "primary",
        shape: "circle",
        ...props,
        action: "onSend",
        ref: ref
    });
}
const __TURBOPACK__default__export__103 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__65["forwardRef"](SendButton);
// MERGED MODULE: [project]/components/sender/components/SpeechButton/index.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__18 = __TURBOPACK__imported__module__7084__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/AudioMutedOutlined.js [library] (ecmascript) <export default as AudioMutedOutlined>
;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/AudioMutedOutlined.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__66 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons-svg/es/asn/AudioMutedOutlined.js [library] (ecmascript)
;
// This icon file is generated automatically.
var AudioMutedOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "defs",
                "attrs": {},
                "children": [
                    {
                        "tag": "style",
                        "attrs": {}
                    }
                ]
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M682 455V311l-76 76v68c-.1 50.7-42 92.1-94 92a95.8 95.8 0 01-52-15l-54 55c29.1 22.4 65.9 36 106 36 93.8 0 170-75.1 170-168z"
                }
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M833 446h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254-63 0-120.7-23-165-61l-54 54a334.01 334.01 0 00179 81v102H326c-13.9 0-24.9 14.3-25 32v36c.1 4.4 2.9 8 6 8h408c3.2 0 6-3.6 6-8v-36c0-17.7-11-32-25-32H547V782c165.3-17.9 294-157.9 294-328 0-4.4-3.6-8-8-8zm13.1-377.7l-43.5-41.9a8 8 0 00-11.2.1l-129 129C634.3 101.2 577 64 511 64c-93.9 0-170 75.3-170 168v224c0 6.7.4 13.3 1.2 19.8l-68 68A252.33 252.33 0 01258 454c-.2-4.4-3.8-8-8-8h-60c-4.4 0-8 3.6-8 8 0 53 12.5 103 34.6 147.4l-137 137a8.03 8.03 0 000 11.3l42.7 42.7c3.1 3.1 8.2 3.1 11.3 0L846.2 79.8l.1-.1c3.1-3.2 3-8.3-.2-11.4zM417 401V232c0-50.6 41.9-92 94-92 46 0 84.1 32.3 92.3 74.7L417 401z"
                }
            }
        ]
    },
    "name": "audio-muted",
    "theme": "outlined"
};
const __TURBOPACK__default__export__104 = AudioMutedOutlined;
;
;
;
;
var AudioMutedOutlined1 = function AudioMutedOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__66["createElement"](__TURBOPACK__default__export__9, _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__default__export__104
    }));
};
/**![audio-muted](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlIC8+PC9kZWZzPjxwYXRoIGQ9Ik02ODIgNDU1VjMxMWwtNzYgNzZ2NjhjLS4xIDUwLjctNDIgOTIuMS05NCA5MmE5NS44IDk1LjggMCAwMS01Mi0xNWwtNTQgNTVjMjkuMSAyMi40IDY1LjkgMzYgMTA2IDM2IDkzLjggMCAxNzAtNzUuMSAxNzAtMTY4eiIgLz48cGF0aCBkPSJNODMzIDQ0NmgtNjBjLTQuNCAwLTggMy42LTggOCAwIDE0MC4zLTExMy43IDI1NC0yNTQgMjU0LTYzIDAtMTIwLjctMjMtMTY1LTYxbC01NCA1NGEzMzQuMDEgMzM0LjAxIDAgMDAxNzkgODF2MTAySDMyNmMtMTMuOSAwLTI0LjkgMTQuMy0yNSAzMnYzNmMuMSA0LjQgMi45IDggNiA4aDQwOGMzLjIgMCA2LTMuNiA2LTh2LTM2YzAtMTcuNy0xMS0zMi0yNS0zMkg1NDdWNzgyYzE2NS4zLTE3LjkgMjk0LTE1Ny45IDI5NC0zMjggMC00LjQtMy42LTgtOC04em0xMy4xLTM3Ny43bC00My41LTQxLjlhOCA4IDAgMDAtMTEuMi4xbC0xMjkgMTI5QzYzNC4zIDEwMS4yIDU3NyA2NCA1MTEgNjRjLTkzLjkgMC0xNzAgNzUuMy0xNzAgMTY4djIyNGMwIDYuNy40IDEzLjMgMS4yIDE5LjhsLTY4IDY4QTI1Mi4zMyAyNTIuMzMgMCAwMTI1OCA0NTRjLS4yLTQuNC0zLjgtOC04LThoLTYwYy00LjQgMC04IDMuNi04IDggMCA1MyAxMi41IDEwMyAzNC42IDE0Ny40bC0xMzcgMTM3YTguMDMgOC4wMyAwIDAwMCAxMS4zbDQyLjcgNDIuN2MzLjEgMy4xIDguMiAzLjEgMTEuMyAwTDg0Ni4yIDc5LjhsLjEtLjFjMy4xLTMuMiAzLTguMy0uMi0xMS40ek00MTcgNDAxVjIzMmMwLTUwLjYgNDEuOS05MiA5NC05MiA0NiAwIDg0LjEgMzIuMyA5Mi4zIDc0LjdMNDE3IDQwMXoiIC8+PC9zdmc+) */ var RefIcon16 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__66["forwardRef"](AudioMutedOutlined1);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__105 = RefIcon16;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/AudioOutlined.js [library] (ecmascript) <export default as AudioOutlined>
;
// MERGED MODULE: [project]/node_modules/@ant-design/icons/es/icons/AudioOutlined.js [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__67 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/node_modules/@ant-design/icons-svg/es/asn/AudioOutlined.js [library] (ecmascript)
;
// This icon file is generated automatically.
var AudioOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z"
                }
            }
        ]
    },
    "name": "audio",
    "theme": "outlined"
};
const __TURBOPACK__default__export__106 = AudioOutlined;
;
;
;
;
var AudioOutlined1 = function AudioOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__2211__67["createElement"](__TURBOPACK__default__export__9, _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__default__export__106
    }));
};
/**![audio](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg0MiA0NTRjMC00LjQtMy42LTgtOC04aC02MGMtNC40IDAtOCAzLjYtOCA4IDAgMTQwLjMtMTEzLjcgMjU0LTI1NCAyNTRTMjU4IDU5NC4zIDI1OCA0NTRjMC00LjQtMy42LTgtOC04aC02MGMtNC40IDAtOCAzLjYtOCA4IDAgMTY4LjcgMTI2LjYgMzA3LjkgMjkwIDMyNy42Vjg4NEgzMjYuN2MtMTMuNyAwLTI0LjcgMTQuMy0yNC43IDMydjM2YzAgNC40IDIuOCA4IDYuMiA4aDQwNy42YzMuNCAwIDYuMi0zLjYgNi4yLTh2LTM2YzAtMTcuNy0xMS0zMi0yNC43LTMySDU0OFY3ODIuMWMxNjUuMy0xOCAyOTQtMTU4IDI5NC0zMjguMXpNNTEyIDYyNGM5My45IDAgMTcwLTc1LjIgMTcwLTE2OFYyMzJjMC05Mi44LTc2LjEtMTY4LTE3MC0xNjhzLTE3MCA3NS4yLTE3MCAxNjh2MjI0YzAgOTIuOCA3Ni4xIDE2OCAxNzAgMTY4em0tOTQtMzkyYzAtNTAuNiA0MS45LTkyIDk0LTkyczk0IDQxLjQgOTQgOTJ2MjI0YzAgNTAuNi00MS45IDkyLTk0IDkycy05NC00MS40LTk0LTkyVjIzMnoiIC8+PC9zdmc+) */ var RefIcon17 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__67["forwardRef"](AudioOutlined1);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__107 = RefIcon17;
var __TURBOPACK__imported__module__2211__68 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/components/sender/components/SpeechButton/RecordingIcon.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__19 = __TURBOPACK__imported__module__7084__;
;
const SIZE = 1000;
const COUNT = 4;
const RECT_WIDTH = 140;
const RECT_RADIUS = RECT_WIDTH / 2;
const RECT_HEIGHT_MIN = 250;
const RECT_HEIGHT_MAX = 500;
const DURATION = 0.8;
function RecordingIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__19["jsxs"])("svg", {
        color: "currentColor",
        viewBox: `0 0 ${SIZE} ${SIZE}`,
        xmlns: "http://www.w3.org/2000/svg",
        // xmlnsXlink="http://www.w3.org/1999/xlink"
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__19["jsx"])("title", {
                children: "Speech Recording"
            }),
            Array.from({
                length: COUNT
            }).map((_, index)=>{
                const dest = (SIZE - RECT_WIDTH * COUNT) / (COUNT - 1);
                const x = index * (dest + RECT_WIDTH);
                const yMin = SIZE / 2 - RECT_HEIGHT_MIN / 2;
                const yMax = SIZE / 2 - RECT_HEIGHT_MAX / 2;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__19["jsxs"])("rect", {
                    fill: "currentColor",
                    rx: RECT_RADIUS,
                    ry: RECT_RADIUS,
                    height: RECT_HEIGHT_MIN,
                    width: RECT_WIDTH,
                    x: x,
                    y: yMin,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__19["jsx"])("animate", {
                            attributeName: "height",
                            values: `${RECT_HEIGHT_MIN}; ${RECT_HEIGHT_MAX}; ${RECT_HEIGHT_MIN}`,
                            keyTimes: "0; 0.5; 1",
                            dur: `${DURATION}s`,
                            begin: `${DURATION / COUNT * index}s`,
                            repeatCount: "indefinite"
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__19["jsx"])("animate", {
                            attributeName: "y",
                            values: `${yMin}; ${yMax}; ${yMin}`,
                            keyTimes: "0; 0.5; 1",
                            dur: `${DURATION}s`,
                            begin: `${DURATION / COUNT * index}s`,
                            repeatCount: "indefinite"
                        })
                    ]
                }, index);
            })
        ]
    });
}
;
;
;
;
;
function SpeechButton(props, ref) {
    const { speechRecording, onSpeechDisabled, prefixCls } = __TURBOPACK__imported__module__2211__68["useContext"](ActionButtonContext);
    let icon = null;
    if (speechRecording) {
        icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__18["jsx"])(RecordingIcon, {
            className: `${prefixCls}-recording-icon`
        });
    } else if (onSpeechDisabled) {
        icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__18["jsx"])(__TURBOPACK__default__export__105, {});
    } else {
        icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__18["jsx"])(__TURBOPACK__default__export__107, {});
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__18["jsx"])(__TURBOPACK__default__export__95, {
        icon: icon,
        color: "primary",
        variant: "text",
        ...props,
        action: "onSpeech",
        ref: ref
    });
}
const __TURBOPACK__default__export__108 = /*#__PURE__*/ __TURBOPACK__imported__module__2211__68["forwardRef"](SpeechButton);
// MERGED MODULE: [project]/components/sender/style/index.ts [library] (ecmascript)
;
// MERGED MODULE: [project]/components/sender/style/header.ts [library] (ecmascript)
;
const genSenderHeaderStyle = (token)=>{
    const { componentCls, calc } = token;
    const headerCls = `${componentCls}-header`;
    return {
        [componentCls]: {
            [headerCls]: {
                borderBottomWidth: token.lineWidth,
                borderBottomStyle: 'solid',
                borderBottomColor: token.colorBorder,
                // ======================== Header ========================
                '&-header': {
                    background: token.colorFillAlter,
                    fontSize: token.fontSize,
                    lineHeight: token.lineHeight,
                    paddingBlock: calc(token.paddingSM).sub(token.lineWidthBold).equal(),
                    paddingInlineStart: token.padding,
                    paddingInlineEnd: token.paddingXS,
                    display: 'flex',
                    borderRadius: {
                        _skip_check_: true,
                        value: calc(token.borderRadius).mul(2).equal()
                    },
                    borderEndStartRadius: 0,
                    borderEndEndRadius: 0,
                    [`${headerCls}-title`]: {
                        flex: 'auto'
                    }
                },
                // ======================= Content ========================
                '&-content': {
                    padding: token.padding
                },
                // ======================== Motion ========================
                '&-motion': {
                    transition: [
                        'height',
                        'border'
                    ].map((prop)=>`${prop} ${token.motionDurationSlow}`).join(','),
                    overflow: 'hidden',
                    '&-enter-start, &-leave-active': {
                        borderBottomColor: 'transparent'
                    },
                    '&-hidden': {
                        display: 'none'
                    }
                }
            }
        }
    };
};
const __TURBOPACK__default__export__109 = genSenderHeaderStyle;
;
;
;
;
const genSenderStyle = (token)=>{
    const { componentCls, padding, paddingSM, paddingXS, paddingXXS, lineWidth, lineWidthBold, calc } = token;
    return {
        [componentCls]: {
            position: 'relative',
            width: '100%',
            boxSizing: 'border-box',
            boxShadow: `${token.boxShadowTertiary}`,
            transition: `background ${token.motionDurationSlow}`,
            // Border
            borderRadius: {
                _skip_check_: true,
                value: calc(token.borderRadius).mul(2).equal()
            },
            borderColor: token.colorBorder,
            borderWidth: 0,
            borderStyle: 'solid',
            // Border
            '&:after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                transition: `border-color ${token.motionDurationSlow}`,
                borderRadius: {
                    _skip_check_: true,
                    value: 'inherit'
                },
                borderStyle: 'inherit',
                borderColor: 'inherit',
                borderWidth: lineWidth
            },
            // Focus
            '&:focus-within': {
                boxShadow: `${token.boxShadowSecondary}`,
                borderColor: token.colorPrimary,
                '&:after': {
                    borderWidth: lineWidthBold
                }
            },
            '&-disabled': {
                background: token.colorBgContainerDisabled
            },
            // ============================== RTL ==============================
            [`&${componentCls}-rtl`]: {
                direction: 'rtl'
            },
            // ============================ Content ============================
            [`${componentCls}-content`]: {
                display: 'flex',
                gap: paddingXS,
                width: '100%',
                paddingBlock: paddingSM,
                paddingInlineStart: padding,
                paddingInlineEnd: paddingSM,
                boxSizing: 'border-box',
                alignItems: 'flex-end'
            },
            // ============================ Prefix =============================
            [`${componentCls}-prefix`]: {
                flex: 'none'
            },
            // ============================= Input =============================
            [`${componentCls}-input`]: {
                padding: 0,
                borderRadius: 0,
                flex: 'auto',
                alignSelf: 'center',
                minHeight: 'auto'
            },
            // ============================ Actions ============================
            [`${componentCls}-actions-list`]: {
                flex: 'none',
                display: 'flex',
                '&-presets': {
                    gap: token.paddingXS
                }
            },
            [`${componentCls}-actions-btn`]: {
                '&-disabled': {
                    opacity: 0.45
                },
                '&-loading-button': {
                    padding: 0,
                    border: 0
                },
                '&-loading-icon': {
                    height: token.controlHeight,
                    width: token.controlHeight,
                    verticalAlign: 'top'
                },
                '&-recording-icon': {
                    height: '1.2em',
                    width: '1.2em',
                    verticalAlign: 'top'
                }
            },
            // ============================ Footer =============================
            [`${componentCls}-footer`]: {
                paddingInlineStart: padding,
                paddingInlineEnd: paddingSM,
                paddingBlockEnd: paddingSM,
                paddingBlockStart: paddingXXS,
                boxSizing: 'border-box'
            }
        }
    };
};
const prepareComponentToken2 = ()=>({});
const __TURBOPACK__default__export__110 = genStyleHooks('Sender', (token)=>{
    const { paddingXS, calc } = token;
    const SenderToken = merge1(token, {
        SenderContentMaxWidth: `calc(100% - ${unit1(calc(paddingXS).add(32).equal())})`
    });
    return [
        genSenderStyle(SenderToken),
        __TURBOPACK__default__export__109(SenderToken)
    ];
}, prepareComponentToken2);
// MERGED MODULE: [project]/components/sender/useSpeech.ts [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__69 = __TURBOPACK__imported__module__2211__;
;
;
// Ensure that the SpeechRecognition API is available in the browser
let SpeechRecognition;
if (!SpeechRecognition && "object" !== 'undefined') {
    SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
}
function useSpeech(onSpeech, allowSpeech) {
    const onEventSpeech = useEvent(onSpeech);
    // ========================== Speech Config ==========================
    const [controlledRecording, onControlledRecordingChange, speechInControlled] = __TURBOPACK__imported__module__2211__69["default"].useMemo(()=>{
        if (typeof allowSpeech === 'object') {
            return [
                allowSpeech.recording,
                allowSpeech.onRecordingChange,
                typeof allowSpeech.recording === 'boolean'
            ];
        }
        return [
            undefined,
            undefined,
            false
        ];
    }, [
        allowSpeech
    ]);
    // ======================== Speech Permission ========================
    const [permissionState, setPermissionState] = __TURBOPACK__imported__module__2211__69["default"].useState(null);
    __TURBOPACK__imported__module__2211__69["default"].useEffect(()=>{
        if (typeof navigator !== 'undefined' && 'permissions' in navigator) {
            let lastPermission = null;
            navigator.permissions.query({
                name: 'microphone'
            }).then((permissionStatus)=>{
                setPermissionState(permissionStatus.state);
                // Keep the last permission status.
                permissionStatus.onchange = function() {
                    setPermissionState(this.state);
                };
                lastPermission = permissionStatus;
            });
            return ()=>{
                // Avoid memory leaks
                if (lastPermission) {
                    lastPermission.onchange = null;
                }
            };
        }
    }, []);
    // Convert permission state to a simple type
    const mergedAllowSpeech = SpeechRecognition && permissionState !== 'denied';
    // ========================== Speech Events ==========================
    const recognitionRef = __TURBOPACK__imported__module__2211__69["default"].useRef(null);
    const [recording, setRecording] = useMergedState(false, {
        value: controlledRecording
    });
    const forceBreakRef = __TURBOPACK__imported__module__2211__69["default"].useRef(false);
    const ensureRecognition = ()=>{
        if (mergedAllowSpeech && !recognitionRef.current) {
            const recognition = new SpeechRecognition();
            recognition.onstart = ()=>{
                setRecording(true);
            };
            recognition.onend = ()=>{
                setRecording(false);
            };
            recognition.onresult = (event)=>{
                if (!forceBreakRef.current) {
                    const transcript = event.results?.[0]?.[0]?.transcript;
                    onEventSpeech(transcript);
                }
                forceBreakRef.current = false;
            };
            recognitionRef.current = recognition;
        }
    };
    const triggerSpeech = useEvent((forceBreak)=>{
        // Ignore if `forceBreak` but is not recording
        if (forceBreak && !recording) {
            return;
        }
        forceBreakRef.current = forceBreak;
        if (speechInControlled) {
            // If in controlled mode, do nothing
            onControlledRecordingChange?.(!recording);
        } else {
            ensureRecognition();
            if (recognitionRef.current) {
                if (recording) {
                    recognitionRef.current.stop();
                    onControlledRecordingChange?.(false);
                } else {
                    recognitionRef.current.start();
                    onControlledRecordingChange?.(true);
                }
            }
        }
    });
    return [
        mergedAllowSpeech,
        triggerSpeech,
        recording
    ];
}
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function getComponent(components, path, defaultComponent) {
    return (0, __TURBOPACK__imported__module__1229__["default"])(components, path) || defaultComponent;
}
/** Used for actions render needed components */ const sharedRenderComponents = {
    SendButton: __TURBOPACK__default__export__103,
    ClearButton: __TURBOPACK__default__export__98,
    LoadingButton: __TURBOPACK__default__export__100,
    SpeechButton: __TURBOPACK__default__export__108
};
const ForwardSender = /*#__PURE__*/ __TURBOPACK__imported__module__2211__55["default"].forwardRef((props, ref)=>{
    const { prefixCls: customizePrefixCls, styles = {}, classNames = {}, className, rootClassName, style, defaultValue, value, readOnly, submitType = 'enter', onSubmit, loading, components, onCancel, onChange, actions, onKeyPress, onKeyDown, disabled, allowSpeech, prefix, footer, header, onPaste, onPasteFile, autoSize = {
        maxRows: 8
    }, ...rest } = props;
    // ============================= MISC =============================
    const { direction, getPrefixCls } = __TURBOPACK__default__export__4();
    const prefixCls = getPrefixCls('sender', customizePrefixCls);
    // ============================= Refs =============================
    const containerRef = __TURBOPACK__imported__module__2211__55["default"].useRef(null);
    const inputRef = __TURBOPACK__imported__module__2211__55["default"].useRef(null);
    useProxyImperativeHandle(ref, ()=>({
            nativeElement: containerRef.current,
            focus: inputRef.current?.focus,
            blur: inputRef.current?.blur
        }));
    // ======================= Component Config =======================
    const contextConfig = __TURBOPACK__default__export__3('sender');
    const inputCls = `${prefixCls}-input`;
    // ============================ Styles ============================
    const [wrapCSSVar, hashId, cssVarCls] = __TURBOPACK__default__export__110(prefixCls);
    const mergedCls = (0, __TURBOPACK__imported__module__1446__8["default"])(prefixCls, contextConfig.className, className, rootClassName, hashId, cssVarCls, {
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-disabled`]: disabled
    });
    const actionBtnCls = `${prefixCls}-actions-btn`;
    const actionListCls = `${prefixCls}-actions-list`;
    // ============================ Value =============================
    const [innerValue, setInnerValue] = useMergedState(defaultValue || '', {
        value
    });
    const triggerValueChange = (nextValue, event)=>{
        setInnerValue(nextValue);
        if (onChange) {
            onChange(nextValue, event);
        }
    };
    // ============================ Speech ============================
    const [speechPermission, triggerSpeech, speechRecording] = useSpeech((transcript)=>{
        triggerValueChange(`${innerValue} ${transcript}`);
    }, allowSpeech);
    // ========================== Components ==========================
    const InputTextArea = getComponent(components, [
        'input'
    ], __TURBOPACK__imported__module__7454__9["Input"].TextArea);
    const domProps = (0, __TURBOPACK__imported__module__9394__1["default"])(rest, {
        attr: true,
        aria: true,
        data: true
    });
    const inputProps = {
        ...domProps,
        ref: inputRef
    };
    // ============================ Events ============================
    const triggerSend = ()=>{
        if (innerValue && onSubmit && !loading) {
            onSubmit(innerValue);
        }
    };
    const triggerClear = ()=>{
        triggerValueChange('');
    };
    // ============================ Submit ============================
    const isCompositionRef = __TURBOPACK__imported__module__2211__55["default"].useRef(false);
    const onInternalCompositionStart = ()=>{
        isCompositionRef.current = true;
    };
    const onInternalCompositionEnd = ()=>{
        isCompositionRef.current = false;
    };
    const onInternalKeyPress = (e)=>{
        const canSubmit = e.key === 'Enter' && !isCompositionRef.current;
        // Check for `submitType` to submit
        switch(submitType){
            case 'enter':
                if (canSubmit && !e.shiftKey) {
                    e.preventDefault();
                    triggerSend();
                }
                break;
            case 'shiftEnter':
                if (canSubmit && e.shiftKey) {
                    e.preventDefault();
                    triggerSend();
                }
                break;
        }
        onKeyPress?.(e);
    };
    // ============================ Paste =============================
    const onInternalPaste = (e)=>{
        // Get files
        const files = e.clipboardData?.files;
        if (files?.length && onPasteFile) {
            onPasteFile(files[0], files);
            e.preventDefault();
        }
        onPaste?.(e);
    };
    // ============================ Focus =============================
    const onContentMouseDown = (e)=>{
        // If input focused but click on the container,
        // input will lose focus.
        // We call `preventDefault` to prevent this behavior
        if (e.target !== containerRef.current?.querySelector(`.${inputCls}`)) {
            e.preventDefault();
        }
        inputRef.current?.focus();
    };
    // ============================ Action ============================
    let actionNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__11["jsxs"])(__TURBOPACK__imported__module__7454__9["Flex"], {
        className: `${actionListCls}-presets`,
        children: [
            allowSpeech && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__11["jsx"])(__TURBOPACK__default__export__108, {}),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__11["jsx"])(__TURBOPACK__default__export__100, {}) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__11["jsx"])(__TURBOPACK__default__export__103, {})
        ]
    });
    // Custom actions
    if (typeof actions === 'function') {
        actionNode = actions(actionNode, {
            components: sharedRenderComponents
        });
    } else if (actions || actions === false) {
        actionNode = actions;
    }
    // Custom actions context props
    const actionsButtonContextProps = {
        prefixCls: actionBtnCls,
        onSend: triggerSend,
        onSendDisabled: !innerValue,
        onClear: triggerClear,
        onClearDisabled: !innerValue,
        onCancel,
        onCancelDisabled: !loading,
        onSpeech: ()=>triggerSpeech(false),
        onSpeechDisabled: !speechPermission,
        speechRecording,
        disabled
    };
    // ============================ Footer ============================
    const footerNode = typeof footer === 'function' ? footer({
        components: sharedRenderComponents
    }) : footer || null;
    // ============================ Render ============================
    return wrapCSSVar(/*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__11["jsxs"])("div", {
        ref: containerRef,
        className: mergedCls,
        style: {
            ...contextConfig.style,
            ...style
        },
        children: [
            header && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__11["jsx"])(SendHeaderContext.Provider, {
                value: {
                    prefixCls
                },
                children: header
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__11["jsxs"])(ActionButtonContext.Provider, {
                value: actionsButtonContextProps,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__11["jsxs"])("div", {
                        className: (0, __TURBOPACK__imported__module__1446__8["default"])(`${prefixCls}-content`, contextConfig.classNames.content, classNames.content),
                        style: {
                            ...contextConfig.styles.content,
                            ...styles.content
                        },
                        onMouseDown: onContentMouseDown,
                        children: [
                            prefix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__11["jsx"])("div", {
                                className: (0, __TURBOPACK__imported__module__1446__8["default"])(`${prefixCls}-prefix`, contextConfig.classNames.prefix, classNames.prefix),
                                style: {
                                    ...contextConfig.styles.prefix,
                                    ...styles.prefix
                                },
                                children: prefix
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__11["jsx"])(InputTextArea, {
                                ...inputProps,
                                disabled: disabled,
                                style: {
                                    ...contextConfig.styles.input,
                                    ...styles.input
                                },
                                className: (0, __TURBOPACK__imported__module__1446__8["default"])(inputCls, contextConfig.classNames.input, classNames.input),
                                autoSize: autoSize,
                                value: innerValue,
                                onChange: (event)=>{
                                    triggerValueChange(event.target.value, event);
                                    triggerSpeech(true);
                                },
                                onPressEnter: onInternalKeyPress,
                                onCompositionStart: onInternalCompositionStart,
                                onCompositionEnd: onInternalCompositionEnd,
                                onKeyDown: onKeyDown,
                                onPaste: onInternalPaste,
                                variant: "borderless",
                                readOnly: readOnly
                            }),
                            actionNode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__11["jsx"])("div", {
                                className: (0, __TURBOPACK__imported__module__1446__8["default"])(actionListCls, contextConfig.classNames.actions, classNames.actions),
                                style: {
                                    ...contextConfig.styles.actions,
                                    ...styles.actions
                                },
                                children: actionNode
                            })
                        ]
                    }),
                    footerNode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__11["jsx"])("div", {
                        className: (0, __TURBOPACK__imported__module__1446__8["default"])(`${prefixCls}-footer`, contextConfig.classNames.footer, classNames.footer),
                        style: {
                            ...contextConfig.styles.footer,
                            ...styles.footer
                        },
                        children: footerNode
                    })
                ]
            })
        ]
    }));
});
const Sender = ForwardSender;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
Sender.Header = SenderHeader;
const __TURBOPACK__default__export__111 = Sender;
// MERGED MODULE: [project]/components/bubble/index.tsx [library] (ecmascript)
;
// MERGED MODULE: [project]/components/bubble/Bubble.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__20 = __TURBOPACK__imported__module__7084__;
var __TURBOPACK__imported__module__1446__12 = __TURBOPACK__imported__module__1446__;
var __TURBOPACK__imported__module__2211__70 = __TURBOPACK__imported__module__2211__;
var __TURBOPACK__imported__module__7454__12 = __TURBOPACK__imported__module__7454__;
// MERGED MODULE: [project]/components/bubble/hooks/useTypedEffect.ts [library] (ecmascript)
;
var __TURBOPACK__imported__module__7087__ = __turbopack_context__.i(7087);
var __TURBOPACK__imported__module__2211__71 = __TURBOPACK__imported__module__2211__;
;
;
function isString(str) {
    return typeof str === 'string';
}
/**
 * Find the longest common prefix between two strings
 */ function findCommonPrefix(str1, str2) {
    let i = 0;
    const minLength = Math.min(str1.length, str2.length);
    while(i < minLength && str1[i] === str2[i]){
        i++;
    }
    return i;
}
/**
 * Return typed content and typing status when typing is enabled.
 * Or return content directly.
 */ const useTypedEffect = (content, typingEnabled, typingStep, typingInterval)=>{
    const prevContentRef = __TURBOPACK__imported__module__2211__71["useRef"]('');
    const [typingIndex, setTypingIndex] = __TURBOPACK__imported__module__2211__71["useState"](1);
    const mergedTypingEnabled = typingEnabled && isString(content);
    // Reset typing index when content changed
    (0, __TURBOPACK__imported__module__7087__["default"])(()=>{
        if (!mergedTypingEnabled && isString(content)) {
            setTypingIndex(content.length);
        } else if (isString(content) && isString(prevContentRef.current) && content.indexOf(prevContentRef.current) !== 0) {
            // Handle empty strings
            if (!content || !prevContentRef.current) {
                setTypingIndex(1);
                return;
            }
            // Find the longest common prefix between new and old content
            const commonPrefixLength = findCommonPrefix(content, prevContentRef.current);
            // If there's no common prefix, start from beginning
            // If there's a common prefix, start from the point where they differ
            if (commonPrefixLength === 0) {
                // Scenario 1: No common prefix, start from the beginning (AI completely changes the thinking process of the answer).
                setTypingIndex(1);
            } else {
                // Scenario 2: There is a common prefix, start from the point where they differ (common streaming output scenario)
                setTypingIndex(commonPrefixLength + 1);
            }
        }
        prevContentRef.current = content;
    }, [
        content
    ]);
    // Start typing
    __TURBOPACK__imported__module__2211__71["useEffect"](()=>{
        if (mergedTypingEnabled && typingIndex < content.length) {
            const id = setTimeout(()=>{
                setTypingIndex((prev)=>prev + typingStep);
            }, typingInterval);
            return ()=>{
                clearTimeout(id);
            };
        }
    }, [
        typingIndex,
        typingEnabled,
        content
    ]);
    const mergedTypingContent = mergedTypingEnabled ? content.slice(0, typingIndex) : content;
    return [
        mergedTypingContent,
        mergedTypingEnabled && typingIndex < content.length
    ];
};
const __TURBOPACK__default__export__112 = useTypedEffect;
// MERGED MODULE: [project]/components/bubble/hooks/useTypingConfig.ts [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__72 = __TURBOPACK__imported__module__2211__;
;
function useTypingConfig(typing) {
    return __TURBOPACK__imported__module__2211__72["useMemo"](()=>{
        if (!typing) {
            return [
                false,
                0,
                0,
                null
            ];
        }
        let baseConfig = {
            step: 1,
            interval: 50,
            // set default suffix is empty
            suffix: null
        };
        if (typeof typing === 'object') {
            baseConfig = {
                ...baseConfig,
                ...typing
            };
        }
        return [
            true,
            baseConfig.step,
            baseConfig.interval,
            baseConfig.suffix
        ];
    }, [
        typing
    ]);
}
const __TURBOPACK__default__export__113 = useTypingConfig;
// MERGED MODULE: [project]/components/bubble/loading.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__21 = __TURBOPACK__imported__module__7084__;
;
const Loading = ({ prefixCls })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__21["jsxs"])("span", {
        className: `${prefixCls}-dot`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__21["jsx"])("i", {
                className: `${prefixCls}-dot-item`
            }, `item-${1}`),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__21["jsx"])("i", {
                className: `${prefixCls}-dot-item`
            }, `item-${2}`),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__21["jsx"])("i", {
                className: `${prefixCls}-dot-item`
            }, `item-${3}`)
        ]
    });
const __TURBOPACK__default__export__114 = Loading;
// MERGED MODULE: [project]/components/bubble/style/index.ts [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/@ant-design/cssinjs/es/Keyframes.js [library] (ecmascript) <export default as Keyframes>
;
// MERGED MODULE: [project]/components/bubble/style/content.ts [library] (ecmascript)
;
;
const genVariantStyle = (token)=>{
    const { componentCls, paddingSM, padding } = token;
    return {
        [componentCls]: {
            [`${componentCls}-content`]: {
                // Shared: filled, outlined, shadow
                '&-filled,&-outlined,&-shadow': {
                    padding: `${unit1(paddingSM)} ${unit1(padding)}`,
                    borderRadius: token.borderRadiusLG
                },
                // Filled:
                '&-filled': {
                    backgroundColor: token.colorFillContent
                },
                // Outlined:
                '&-outlined': {
                    border: `1px solid ${token.colorBorderSecondary}`
                },
                // Shadow:
                '&-shadow': {
                    boxShadow: token.boxShadowTertiary
                }
            }
        }
    };
};
const genShapeStyle = (token)=>{
    const { componentCls, fontSize, lineHeight, paddingSM, padding, calc } = token;
    const halfRadius = calc(fontSize).mul(lineHeight).div(2).add(paddingSM).equal();
    const contentCls = `${componentCls}-content`;
    return {
        [componentCls]: {
            [contentCls]: {
                // round:
                '&-round': {
                    borderRadius: {
                        _skip_check_: true,
                        value: halfRadius
                    },
                    paddingInline: calc(padding).mul(1.25).equal()
                }
            },
            // corner:
            [`&-start ${contentCls}-corner`]: {
                borderStartStartRadius: token.borderRadiusXS
            },
            [`&-end ${contentCls}-corner`]: {
                borderStartEndRadius: token.borderRadiusXS
            }
        }
    };
};
// MERGED MODULE: [project]/components/bubble/style/list.ts [library] (ecmascript)
;
const genBubbleListStyle = (token)=>{
    const { componentCls, padding } = token;
    return {
        [`${componentCls}-list`]: {
            display: 'flex',
            flexDirection: 'column',
            gap: padding,
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
                width: 8,
                backgroundColor: 'transparent'
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: token.colorTextTertiary,
                borderRadius: token.borderRadiusSM
            },
            // For Firefox
            '&': {
                scrollbarWidth: 'thin',
                scrollbarColor: `${token.colorTextTertiary} transparent`
            }
        }
    };
};
const __TURBOPACK__default__export__115 = genBubbleListStyle;
;
;
;
;
;
const loadingMove = new __TURBOPACK__default__export__30('loadingMove', {
    '0%': {
        transform: 'translateY(0)'
    },
    '10%': {
        transform: 'translateY(4px)'
    },
    '20%': {
        transform: 'translateY(0)'
    },
    '30%': {
        transform: 'translateY(-4px)'
    },
    '40%': {
        transform: 'translateY(0)'
    }
});
const cursorBlink = new __TURBOPACK__default__export__30('cursorBlink', {
    '0%': {
        opacity: 1
    },
    '50%': {
        opacity: 0
    },
    '100%': {
        opacity: 1
    }
});
const genBubbleStyle = (token)=>{
    const { componentCls, fontSize, lineHeight, paddingSM, colorText, calc } = token;
    return {
        [componentCls]: {
            display: 'flex',
            columnGap: paddingSM,
            [`&${componentCls}-end`]: {
                justifyContent: 'end',
                flexDirection: 'row-reverse',
                [`& ${componentCls}-content-wrapper`]: {
                    alignItems: 'flex-end'
                }
            },
            [`&${componentCls}-rtl`]: {
                direction: 'rtl'
            },
            [`&${componentCls}-typing ${componentCls}-content:last-child::after`]: {
                content: '"|"',
                fontWeight: 900,
                userSelect: 'none',
                opacity: 1,
                marginInlineStart: '0.1em',
                animationName: cursorBlink,
                animationDuration: '0.8s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear'
            },
            // ============================ Avatar =============================
            [`& ${componentCls}-avatar`]: {
                display: 'inline-flex',
                justifyContent: 'center',
                alignSelf: 'flex-start'
            },
            // ======================== Header & Footer ========================
            [`& ${componentCls}-header, & ${componentCls}-footer`]: {
                fontSize: fontSize,
                lineHeight: lineHeight,
                color: token.colorText
            },
            [`& ${componentCls}-header`]: {
                marginBottom: token.paddingXXS
            },
            [`& ${componentCls}-footer`]: {
                marginTop: paddingSM
            },
            // =========================== Content =============================
            [`& ${componentCls}-content-wrapper`]: {
                flex: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                minWidth: 0,
                maxWidth: '100%'
            },
            [`& ${componentCls}-content`]: {
                position: 'relative',
                boxSizing: 'border-box',
                minWidth: 0,
                maxWidth: '100%',
                color: colorText,
                fontSize: token.fontSize,
                lineHeight: token.lineHeight,
                minHeight: calc(paddingSM).mul(2).add(calc(lineHeight).mul(fontSize)).equal(),
                wordBreak: 'break-word',
                [`& ${componentCls}-dot`]: {
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: token.marginXS,
                    padding: `0 ${unit1(token.paddingXXS)}`,
                    '&-item': {
                        backgroundColor: token.colorPrimary,
                        borderRadius: '100%',
                        width: 4,
                        height: 4,
                        animationName: loadingMove,
                        animationDuration: '2s',
                        animationIterationCount: 'infinite',
                        animationTimingFunction: 'linear',
                        '&:nth-child(1)': {
                            animationDelay: '0s'
                        },
                        '&:nth-child(2)': {
                            animationDelay: '0.2s'
                        },
                        '&:nth-child(3)': {
                            animationDelay: '0.4s'
                        }
                    }
                }
            }
        }
    };
};
const prepareComponentToken3 = ()=>({});
const __TURBOPACK__default__export__116 = genStyleHooks('Bubble', (token)=>{
    const bubbleToken = merge1(token, {});
    return [
        genBubbleStyle(bubbleToken),
        __TURBOPACK__default__export__115(bubbleToken),
        genVariantStyle(bubbleToken),
        genShapeStyle(bubbleToken)
    ];
}, prepareComponentToken3);
;
;
;
;
;
;
;
;
;
;
const BubbleContext = /*#__PURE__*/ __TURBOPACK__imported__module__2211__70["default"].createContext({});
const Bubble = (props, ref)=>{
    const { prefixCls: customizePrefixCls, className, rootClassName, style, classNames = {}, styles = {}, avatar, placement = 'start', loading = false, loadingRender, typing, content = '', messageRender, variant = 'filled', shape, onTypingComplete, header, footer, _key, ...otherHtmlProps } = props;
    const { onUpdate } = __TURBOPACK__imported__module__2211__70["default"].useContext(BubbleContext);
    // ============================= Refs =============================
    const divRef = __TURBOPACK__imported__module__2211__70["default"].useRef(null);
    __TURBOPACK__imported__module__2211__70["default"].useImperativeHandle(ref, ()=>({
            nativeElement: divRef.current
        }));
    // ============================ Prefix ============================
    const { direction, getPrefixCls } = __TURBOPACK__default__export__4();
    const prefixCls = getPrefixCls('bubble', customizePrefixCls);
    // ===================== Component Config =========================
    const contextConfig = __TURBOPACK__default__export__3('bubble');
    // ============================ Typing ============================
    const [typingEnabled, typingStep, typingInterval, customSuffix] = __TURBOPACK__default__export__113(typing);
    const [typedContent, isTyping] = __TURBOPACK__default__export__112(content, typingEnabled, typingStep, typingInterval);
    __TURBOPACK__imported__module__2211__70["default"].useEffect(()=>{
        onUpdate?.();
    }, [
        typedContent
    ]);
    const triggerTypingCompleteRef = __TURBOPACK__imported__module__2211__70["default"].useRef(false);
    __TURBOPACK__imported__module__2211__70["default"].useEffect(()=>{
        if (!isTyping && !loading) {
            // StrictMode will trigger this twice,
            // So we need a flag to avoid that
            if (!triggerTypingCompleteRef.current) {
                triggerTypingCompleteRef.current = true;
                onTypingComplete?.();
            }
        } else {
            triggerTypingCompleteRef.current = false;
        }
    }, [
        isTyping,
        loading
    ]);
    // ============================ Styles ============================
    const [wrapCSSVar, hashId, cssVarCls] = __TURBOPACK__default__export__116(prefixCls);
    const mergedCls = (0, __TURBOPACK__imported__module__1446__12["default"])(prefixCls, rootClassName, contextConfig.className, className, hashId, cssVarCls, `${prefixCls}-${placement}`, {
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-typing`]: isTyping && !loading && !messageRender && !customSuffix
    });
    // ============================ Avatar ============================
    const avatarNode = __TURBOPACK__imported__module__2211__70["default"].useMemo(()=>/*#__PURE__*/ __TURBOPACK__imported__module__2211__70["default"].isValidElement(avatar) ? avatar : /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__20["jsx"])(__TURBOPACK__imported__module__7454__12["Avatar"], {
            ...avatar
        }), [
        avatar
    ]);
    // =========================== Content ============================
    const mergedContent = __TURBOPACK__imported__module__2211__70["default"].useMemo(()=>messageRender ? messageRender(typedContent) : typedContent, [
        typedContent,
        messageRender
    ]);
    const renderSlot = (node)=>typeof node === 'function' ? node(typedContent, {
            key: _key
        }) : node;
    // ============================ Render ============================
    let contentNode;
    if (loading) {
        contentNode = loadingRender ? loadingRender() : /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__20["jsx"])(__TURBOPACK__default__export__114, {
            prefixCls: prefixCls
        });
    } else {
        contentNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__20["jsxs"])(__TURBOPACK__imported__module__7084__20["Fragment"], {
            children: [
                mergedContent,
                isTyping && customSuffix
            ]
        });
    }
    let fullContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__20["jsx"])("div", {
        style: {
            ...contextConfig.styles.content,
            ...styles.content
        },
        className: (0, __TURBOPACK__imported__module__1446__12["default"])(`${prefixCls}-content`, `${prefixCls}-content-${variant}`, shape && `${prefixCls}-content-${shape}`, contextConfig.classNames.content, classNames.content),
        children: contentNode
    });
    if (header || footer) {
        fullContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__20["jsxs"])("div", {
            className: `${prefixCls}-content-wrapper`,
            children: [
                header && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__20["jsx"])("div", {
                    className: (0, __TURBOPACK__imported__module__1446__12["default"])(`${prefixCls}-header`, contextConfig.classNames.header, classNames.header),
                    style: {
                        ...contextConfig.styles.header,
                        ...styles.header
                    },
                    children: renderSlot(header)
                }),
                fullContent,
                footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__20["jsx"])("div", {
                    className: (0, __TURBOPACK__imported__module__1446__12["default"])(`${prefixCls}-footer`, contextConfig.classNames.footer, classNames.footer),
                    style: {
                        ...contextConfig.styles.footer,
                        ...styles.footer
                    },
                    children: renderSlot(footer)
                })
            ]
        });
    }
    return wrapCSSVar(/*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__20["jsxs"])("div", {
        style: {
            ...contextConfig.style,
            ...style
        },
        className: mergedCls,
        ...otherHtmlProps,
        ref: divRef,
        children: [
            avatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__20["jsx"])("div", {
                style: {
                    ...contextConfig.styles.avatar,
                    ...styles.avatar
                },
                className: (0, __TURBOPACK__imported__module__1446__12["default"])(`${prefixCls}-avatar`, contextConfig.classNames.avatar, classNames.avatar),
                children: avatarNode
            }),
            fullContent
        ]
    }));
};
const ForwardBubble = /*#__PURE__*/ __TURBOPACK__imported__module__2211__70["default"].forwardRef(Bubble);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__117 = ForwardBubble;
// MERGED MODULE: [project]/components/bubble/BubbleList.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__22 = __TURBOPACK__imported__module__7084__;
var __TURBOPACK__imported__module__2211__73 = __TURBOPACK__imported__module__2211__;
var __TURBOPACK__imported__module__1446__13 = __TURBOPACK__imported__module__1446__;
var __TURBOPACK__imported__module__9394__2 = __TURBOPACK__imported__module__9394__;
// MERGED MODULE: [project]/components/bubble/hooks/useListData.ts [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__74 = __TURBOPACK__imported__module__2211__;
;
function useListData(items, roles) {
    const getRoleBubbleProps = __TURBOPACK__imported__module__2211__74["useCallback"]((bubble, index)=>{
        if (typeof roles === 'function') {
            return roles(bubble, index);
        }
        if (roles) {
            return roles[bubble.role] || {};
        }
        return {};
    }, [
        roles
    ]);
    return __TURBOPACK__imported__module__2211__74["useMemo"](()=>(items || []).map((bubbleData, i)=>{
            const mergedKey = bubbleData.key ?? `preset_${i}`;
            return {
                ...getRoleBubbleProps(bubbleData, i),
                ...bubbleData,
                key: mergedKey
            };
        }), [
        items,
        getRoleBubbleProps
    ]);
}
;
;
;
;
;
;
;
;
;
;
const BubbleListItem = ({ _key, ...restProps }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__22["jsx"])(__TURBOPACK__default__export__117, {
        ...restProps,
        _key: _key,
        ref: (node)=>{
            if (node) {
                ref.current[_key] = node;
            } else {
                delete ref.current?.[_key];
            }
        }
    });
const MemoBubbleListItem = /*#__PURE__*/ __TURBOPACK__imported__module__2211__73["memo"](/*#__PURE__*/ __TURBOPACK__imported__module__2211__73["forwardRef"](BubbleListItem));
const TOLERANCE1 = 1;
const BubbleList = (props, ref)=>{
    const { prefixCls: customizePrefixCls, rootClassName, className, items, autoScroll = true, roles, onScroll, ...restProps } = props;
    const domProps = (0, __TURBOPACK__imported__module__9394__2["default"])(restProps, {
        attr: true,
        aria: true
    });
    // ============================= Refs =============================
    const listRef = __TURBOPACK__imported__module__2211__73["useRef"](null);
    const bubbleRefs = __TURBOPACK__imported__module__2211__73["useRef"]({});
    // ============================ Prefix ============================
    const { getPrefixCls } = __TURBOPACK__default__export__4();
    const prefixCls = getPrefixCls('bubble', customizePrefixCls);
    const listPrefixCls = `${prefixCls}-list`;
    const [wrapCSSVar, hashId, cssVarCls] = __TURBOPACK__default__export__116(prefixCls);
    // ============================ Typing ============================
    const [initialized, setInitialized] = __TURBOPACK__imported__module__2211__73["useState"](false);
    __TURBOPACK__imported__module__2211__73["useEffect"](()=>{
        setInitialized(true);
        return ()=>{
            setInitialized(false);
        };
    }, []);
    // ============================= Data =============================
    const mergedData = useListData(items, roles);
    // ============================ Scroll ============================
    // Is current scrollTop at the end. User scroll will make this false.
    const [scrollReachEnd, setScrollReachEnd] = __TURBOPACK__imported__module__2211__73["useState"](true);
    const [updateCount, setUpdateCount] = __TURBOPACK__imported__module__2211__73["useState"](0);
    const onInternalScroll = (e)=>{
        const target = e.target;
        setScrollReachEnd(target.scrollHeight - Math.abs(target.scrollTop) - target.clientHeight <= TOLERANCE1);
        onScroll?.(e);
    };
    __TURBOPACK__imported__module__2211__73["useEffect"](()=>{
        if (autoScroll && listRef.current && scrollReachEnd) {
            listRef.current.scrollTo({
                top: listRef.current.scrollHeight
            });
        }
    }, [
        updateCount
    ]);
    // Always scroll to bottom when data change
    __TURBOPACK__imported__module__2211__73["useEffect"](()=>{
        if (autoScroll) {
            // New date come, the origin last one is the second last one
            const lastItemKey = mergedData[mergedData.length - 2]?.key;
            const bubbleInst = bubbleRefs.current[lastItemKey];
            // Auto scroll if last 2 item is visible
            if (bubbleInst) {
                const { nativeElement } = bubbleInst;
                const { top, bottom } = nativeElement.getBoundingClientRect();
                const { top: listTop, bottom: listBottom } = listRef.current.getBoundingClientRect();
                const isVisible = top < listBottom && bottom > listTop;
                if (isVisible) {
                    setUpdateCount((c)=>c + 1);
                    setScrollReachEnd(true);
                }
            }
        }
    }, [
        mergedData.length
    ]);
    // ========================== Outer Ref ===========================
    __TURBOPACK__imported__module__2211__73["useImperativeHandle"](ref, ()=>({
            nativeElement: listRef.current,
            scrollTo: ({ key, offset, behavior = 'smooth', block })=>{
                if (typeof offset === 'number') {
                    // Offset scroll
                    listRef.current.scrollTo({
                        top: offset,
                        behavior
                    });
                } else if (key !== undefined) {
                    // Key scroll
                    const bubbleInst = bubbleRefs.current[key];
                    if (bubbleInst) {
                        // Block current auto scrolling
                        const index = mergedData.findIndex((dataItem)=>dataItem.key === key);
                        setScrollReachEnd(index === mergedData.length - 1);
                        // Do native scroll
                        bubbleInst.nativeElement.scrollIntoView({
                            behavior,
                            block
                        });
                    }
                }
            }
        }));
    // =========================== Context ============================
    // When bubble content update, we try to trigger `autoScroll` for sync
    const onBubbleUpdate = useEvent(()=>{
        if (autoScroll) {
            setUpdateCount((c)=>c + 1);
        }
    });
    const context = __TURBOPACK__imported__module__2211__73["useMemo"](()=>({
            onUpdate: onBubbleUpdate
        }), []);
    // ============================ Render ============================
    return wrapCSSVar(/*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__22["jsx"])(BubbleContext.Provider, {
        value: context,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__22["jsx"])("div", {
            ...domProps,
            className: (0, __TURBOPACK__imported__module__1446__13["default"])(listPrefixCls, rootClassName, className, hashId, cssVarCls, {
                [`${listPrefixCls}-reach-end`]: scrollReachEnd
            }),
            ref: listRef,
            onScroll: onInternalScroll,
            children: mergedData.map(({ key, ...bubble })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__2211__73["createElement"])(MemoBubbleListItem, {
                    ...bubble,
                    key: key,
                    _key: key,
                    ref: bubbleRefs,
                    typing: initialized ? bubble.typing : false
                }))
        })
    }));
};
const ForwardBubbleList = /*#__PURE__*/ __TURBOPACK__imported__module__2211__73["forwardRef"](BubbleList);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__118 = ForwardBubbleList;
;
;
__TURBOPACK__default__export__117.List = __TURBOPACK__default__export__118;
const __TURBOPACK__default__export__119 = __TURBOPACK__default__export__117;
// MERGED MODULE: [project]/components/conversations/index.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__23 = __TURBOPACK__imported__module__7084__;
var __TURBOPACK__imported__module__2211__75 = __TURBOPACK__imported__module__2211__;
var __TURBOPACK__imported__module__1446__14 = __TURBOPACK__imported__module__1446__;
// MERGED MODULE: [project]/components/conversations/GroupTitle.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__24 = __TURBOPACK__imported__module__7084__;
var __TURBOPACK__imported__module__7454__13 = __TURBOPACK__imported__module__7454__;
var __TURBOPACK__imported__module__1446__15 = __TURBOPACK__imported__module__1446__;
var __TURBOPACK__imported__module__2211__76 = __TURBOPACK__imported__module__2211__;
;
;
;
;
const GroupTitleContext = /*#__PURE__*/ __TURBOPACK__imported__module__2211__76["default"].createContext(null);
const GroupTitle = ({ children })=>{
    const { prefixCls } = __TURBOPACK__imported__module__2211__76["default"].useContext(GroupTitleContext);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__24["jsx"])("div", {
        className: (0, __TURBOPACK__imported__module__1446__15["default"])(`${prefixCls}-group-title`),
        children: children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__24["jsx"])(__TURBOPACK__imported__module__7454__13["Typography"].Text, {
            children: children
        })
    });
};
const __TURBOPACK__default__export__120 = GroupTitle;
// MERGED MODULE: [project]/components/conversations/Item.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__25 = __TURBOPACK__imported__module__7084__;
var __TURBOPACK__imported__module__7454__14 = __TURBOPACK__imported__module__7454__;
var __TURBOPACK__imported__module__1446__16 = __TURBOPACK__imported__module__1446__;
var __TURBOPACK__imported__module__9394__3 = __TURBOPACK__imported__module__9394__;
;
;
;
;
;
const stopPropagation = (e)=>{
    e.stopPropagation();
};
const ConversationsItem = (props)=>{
    const { prefixCls, info, className, direction, onClick, active, menu, ...restProps } = props;
    const domProps = (0, __TURBOPACK__imported__module__9394__3["default"])(restProps, {
        aria: true,
        data: true,
        attr: true
    });
    // ============================= MISC =============================
    const { disabled } = info;
    // ============================ Style =============================
    const mergedCls = (0, __TURBOPACK__imported__module__1446__16["default"])(className, `${prefixCls}-item`, {
        [`${prefixCls}-item-active`]: active && !disabled
    }, {
        [`${prefixCls}-item-disabled`]: disabled
    });
    // ============================ Events ============================
    const onInternalClick = ()=>{
        if (!disabled && onClick) {
            onClick(info);
        }
    };
    // ============================ Menu ============================
    const { trigger, ...dropdownMenu } = menu || {};
    const getPopupContainer = dropdownMenu?.getPopupContainer;
    const renderMenuTrigger = (conversation)=>{
        const originTriggerNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__25["jsx"])(__TURBOPACK__default__export__10, {
            onClick: stopPropagation,
            className: `${prefixCls}-menu-icon`
        });
        if (trigger) {
            return typeof trigger === 'function' ? trigger(conversation, {
                originNode: originTriggerNode
            }) : trigger;
        }
        return originTriggerNode;
    };
    // ============================ Render ============================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__25["jsxs"])("li", {
        title: typeof info.label === 'object' ? undefined : `${info.label}`,
        ...domProps,
        className: mergedCls,
        onClick: onInternalClick,
        children: [
            info.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__25["jsx"])("div", {
                className: `${prefixCls}-icon`,
                children: info.icon
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__25["jsx"])(__TURBOPACK__imported__module__7454__14["Typography"].Text, {
                className: `${prefixCls}-label`,
                children: info.label
            }),
            !disabled && menu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__25["jsx"])("div", {
                onClick: stopPropagation,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__25["jsx"])(__TURBOPACK__imported__module__7454__14["Dropdown"], {
                    menu: dropdownMenu,
                    placement: direction === 'rtl' ? 'bottomLeft' : 'bottomRight',
                    trigger: [
                        'click'
                    ],
                    disabled: disabled,
                    getPopupContainer: getPopupContainer,
                    children: renderMenuTrigger(info)
                })
            })
        ]
    });
};
const __TURBOPACK__default__export__121 = ConversationsItem;
var __TURBOPACK__imported__module__3717__ = __turbopack_context__.i(3717);
// MERGED MODULE: [project]/components/conversations/hooks/useGroupable.ts [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__77 = __TURBOPACK__imported__module__2211__;
;
/**
 * 🔥 Only for handling ungrouped data. Do not use it for any other purpose! 🔥
 */ const __UNGROUPED = '__ungrouped';
const useGroupable = (groupable, items = [])=>{
    const [enableGroup, sort, title] = __TURBOPACK__imported__module__2211__77["default"].useMemo(()=>{
        if (!groupable) {
            return [
                false,
                undefined,
                undefined
            ];
        }
        let baseConfig = {
            sort: undefined,
            title: undefined
        };
        if (typeof groupable === 'object') {
            baseConfig = {
                ...baseConfig,
                ...groupable
            };
        }
        return [
            true,
            baseConfig.sort,
            baseConfig.title
        ];
    }, [
        groupable
    ]);
    return __TURBOPACK__imported__module__2211__77["default"].useMemo(()=>{
        // 未开启分组模式直接返回
        if (!enableGroup) {
            const groupList = [
                {
                    name: __UNGROUPED,
                    data: items,
                    title: undefined
                }
            ];
            return [
                groupList,
                enableGroup
            ];
        }
        // 1. 将 data 做数据分组，填充 groupMap
        const groupMap = items.reduce((acc, item)=>{
            const group = item.group || __UNGROUPED;
            if (!acc[group]) {
                acc[group] = [];
            }
            acc[group].push(item);
            return acc;
        }, {});
        // 2. 存在 sort 时对 groupKeys 排序
        const groupKeys = sort ? Object.keys(groupMap).sort(sort) : Object.keys(groupMap);
        // 3. groupMap 转 groupList
        const groupList = groupKeys.map((group)=>({
                name: group === __UNGROUPED ? undefined : group,
                title,
                data: groupMap[group]
            }));
        return [
            groupList,
            enableGroup
        ];
    }, [
        items,
        groupable
    ]);
};
const __TURBOPACK__default__export__122 = useGroupable;
// MERGED MODULE: [project]/components/conversations/style/index.ts [library] (ecmascript)
;
;
;
;
const genConversationsStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: {
            display: 'flex',
            flexDirection: 'column',
            gap: token.paddingXXS,
            overflowY: 'auto',
            padding: token.paddingSM,
            margin: 0,
            listStyle: 'none',
            'ul, ol': {
                margin: 0,
                padding: 0,
                listStyle: 'none'
            },
            [`&${componentCls}-rtl`]: {
                direction: 'rtl'
            },
            // 会话列表
            [`& ${componentCls}-list`]: {
                display: 'flex',
                gap: token.paddingXXS,
                flexDirection: 'column',
                [`& ${componentCls}-item`]: {
                    paddingInlineStart: token.paddingXL
                },
                [`& ${componentCls}-label`]: {
                    color: token.colorTextDescription,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }
            },
            // 会话列表项
            [`& ${componentCls}-item`]: {
                display: 'flex',
                height: token.controlHeightLG,
                minHeight: token.controlHeightLG,
                gap: token.paddingXS,
                padding: `0 ${unit1(token.paddingXS)}`,
                alignItems: 'center',
                borderRadius: token.borderRadiusLG,
                cursor: 'pointer',
                transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
                // 悬浮样式
                '&:hover': {
                    backgroundColor: token.colorBgTextHover
                },
                // 选中样式
                '&-active': {
                    backgroundColor: token.colorBgTextHover,
                    [`& ${componentCls}-label, ${componentCls}-menu-icon`]: {
                        color: token.colorText
                    }
                },
                // 禁用样式
                '&-disabled': {
                    cursor: 'not-allowed',
                    [`& ${componentCls}-label`]: {
                        color: token.colorTextDisabled
                    }
                },
                // 悬浮、选中时激活操作菜单
                '&:hover, &-active': {
                    [`& ${componentCls}-menu-icon`]: {
                        opacity: 0.6
                    }
                },
                [`${componentCls}-menu-icon:hover`]: {
                    opacity: 1
                }
            },
            // 会话名
            [`& ${componentCls}-label`]: {
                flex: 1,
                color: token.colorText,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
            },
            // 会话操作菜单
            [`& ${componentCls}-menu-icon`]: {
                opacity: 0,
                fontSize: token.fontSizeXL
            },
            // 会话图标
            [`& ${componentCls}-group-title`]: {
                display: 'flex',
                alignItems: 'center',
                height: token.controlHeightLG,
                minHeight: token.controlHeightLG,
                padding: `0 ${unit1(token.paddingXS)}`
            }
        }
    };
};
const prepareComponentToken4 = ()=>({});
const __TURBOPACK__default__export__123 = genStyleHooks('Conversations', (token)=>{
    const compToken = merge1(token, {});
    return genConversationsStyle(compToken);
}, prepareComponentToken4);
var __TURBOPACK__imported__module__9394__4 = __TURBOPACK__imported__module__9394__;
;
;
;
;
;
;
;
;
;
;
;
const Conversations = (props)=>{
    const { prefixCls: customizePrefixCls, rootClassName, items, activeKey, defaultActiveKey, onActiveChange, menu, styles = {}, classNames = {}, groupable, className, style, ...restProps } = props;
    const domProps = (0, __TURBOPACK__imported__module__9394__4["default"])(restProps, {
        attr: true,
        aria: true,
        data: true
    });
    // ============================ ActiveKey ============================
    const [mergedActiveKey, setMergedActiveKey] = (0, __TURBOPACK__imported__module__3717__["default"])(defaultActiveKey, {
        value: activeKey
    });
    // ============================ Groupable ============================
    const [groupList, enableGroup] = __TURBOPACK__default__export__122(groupable, items);
    // ============================ Prefix ============================
    const { getPrefixCls, direction } = __TURBOPACK__default__export__4();
    const prefixCls = getPrefixCls('conversations', customizePrefixCls);
    // ===================== Component Config =========================
    const contextConfig = __TURBOPACK__default__export__3('conversations');
    // ============================ Style ============================
    const [wrapCSSVar, hashId, cssVarCls] = __TURBOPACK__default__export__123(prefixCls);
    const mergedCls = (0, __TURBOPACK__imported__module__1446__14["default"])(prefixCls, contextConfig.className, className, rootClassName, hashId, cssVarCls, {
        [`${prefixCls}-rtl`]: direction === 'rtl'
    });
    // ============================ Events ============================
    const onConversationItemClick = (info)=>{
        setMergedActiveKey(info.key);
        if (onActiveChange) {
            onActiveChange(info.key);
        }
    };
    // ============================ Render ============================
    return wrapCSSVar(/*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__23["jsx"])("ul", {
        ...domProps,
        style: {
            ...contextConfig.style,
            ...style
        },
        className: mergedCls,
        children: groupList.map((groupInfo, groupIndex)=>{
            const convItems = groupInfo.data.map((convInfo, convIndex)=>{
                const { label: _, disabled: __, icon: ___, ...restInfo } = convInfo;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__2211__75["createElement"])(__TURBOPACK__default__export__121, {
                    ...restInfo,
                    key: convInfo.key || `key-${convIndex}`,
                    info: convInfo,
                    prefixCls: prefixCls,
                    direction: direction,
                    className: (0, __TURBOPACK__imported__module__1446__14["default"])(classNames.item, contextConfig.classNames.item, convInfo.className),
                    style: {
                        ...contextConfig.styles.item,
                        ...styles.item,
                        ...convInfo.style
                    },
                    menu: typeof menu === 'function' ? menu(convInfo) : menu,
                    active: mergedActiveKey === convInfo.key,
                    onClick: onConversationItemClick
                });
            });
            // With group to show the title
            if (enableGroup) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__23["jsxs"])("li", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__23["jsx"])(GroupTitleContext.Provider, {
                            value: {
                                prefixCls
                            },
                            children: groupInfo.title?.(groupInfo.name, {
                                components: {
                                    GroupTitle: __TURBOPACK__default__export__120
                                }
                            }) || /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__23["jsx"])(__TURBOPACK__default__export__120, {
                                children: groupInfo.name
                            }, groupInfo.name)
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__23["jsx"])("ul", {
                            className: `${prefixCls}-list`,
                            children: convItems
                        })
                    ]
                }, groupInfo.name || `key-${groupIndex}`);
            }
            return convItems;
        })
    }));
};
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__124 = Conversations;
// MERGED MODULE: [project]/components/prompts/index.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__26 = __TURBOPACK__imported__module__7084__;
var __TURBOPACK__imported__module__7454__15 = __TURBOPACK__imported__module__7454__;
var __TURBOPACK__imported__module__1446__17 = __TURBOPACK__imported__module__1446__;
// MERGED MODULE: [project]/components/prompts/style/index.ts [library] (ecmascript)
;
;
;
;
const genPromptsStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: {
            // ======================== Prompt ========================
            '&, & *': {
                boxSizing: 'border-box'
            },
            maxWidth: '100%',
            [`&${componentCls}-rtl`]: {
                direction: 'rtl'
            },
            [`& ${componentCls}-title`]: {
                marginBlockStart: 0,
                fontWeight: 'normal',
                color: token.colorTextTertiary
            },
            [`& ${componentCls}-list`]: {
                display: 'flex',
                gap: token.paddingSM,
                overflowX: 'auto',
                // Hide scrollbar
                scrollbarWidth: 'none',
                '-ms-overflow-style': 'none',
                '&::-webkit-scrollbar': {
                    display: 'none'
                },
                listStyle: 'none',
                paddingInlineStart: 0,
                marginBlock: 0,
                alignItems: 'stretch',
                '&-wrap': {
                    flexWrap: 'wrap'
                },
                '&-vertical': {
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }
            },
            // ========================= Item =========================
            [`${componentCls}-item`]: {
                flex: 'none',
                display: 'flex',
                gap: token.paddingXS,
                height: 'auto',
                paddingBlock: token.paddingSM,
                paddingInline: token.padding,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                background: token.colorBgContainer,
                borderRadius: token.borderRadiusLG,
                transition: [
                    'border',
                    'background'
                ].map((p)=>`${p} ${token.motionDurationSlow}`).join(','),
                border: `${unit1(token.lineWidth)} ${token.lineType} ${token.colorBorderSecondary}`,
                [`&:not(${componentCls}-item-has-nest)`]: {
                    '&:hover': {
                        cursor: 'pointer',
                        background: token.colorFillTertiary
                    },
                    '&:active': {
                        background: token.colorFill
                    }
                },
                [`${componentCls}-content`]: {
                    flex: 'auto',
                    minWidth: 0,
                    display: 'flex',
                    gap: token.paddingXXS,
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                },
                [`${componentCls}-icon, ${componentCls}-label, ${componentCls}-desc`]: {
                    margin: 0,
                    padding: 0,
                    fontSize: token.fontSize,
                    lineHeight: token.lineHeight,
                    textAlign: 'start',
                    whiteSpace: 'normal'
                },
                [`${componentCls}-label`]: {
                    color: token.colorTextHeading,
                    fontWeight: 500
                },
                [`${componentCls}-label + ${componentCls}-desc`]: {
                    color: token.colorTextTertiary
                },
                // Disabled
                [`&${componentCls}-item-disabled`]: {
                    pointerEvents: 'none',
                    background: token.colorBgContainerDisabled,
                    [`${componentCls}-label, ${componentCls}-desc`]: {
                        color: token.colorTextTertiary
                    }
                }
            }
        }
    };
};
const genNestStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: {
            // ========================= Parent =========================
            [`${componentCls}-item-has-nest`]: {
                [`> ${componentCls}-content`]: {
                    // gap: token.paddingSM,
                    [`> ${componentCls}-label`]: {
                        fontSize: token.fontSizeLG,
                        lineHeight: token.lineHeightLG
                    }
                }
            },
            // ========================= Nested =========================
            [`&${componentCls}-nested`]: {
                marginTop: token.paddingXS,
                // ======================== Prompt ========================
                alignSelf: 'stretch',
                [`${componentCls}-list`]: {
                    alignItems: 'stretch'
                },
                // ========================= Item =========================
                [`${componentCls}-item`]: {
                    border: 0,
                    background: token.colorFillQuaternary
                }
            }
        }
    };
};
const prepareComponentToken5 = ()=>({});
const __TURBOPACK__default__export__125 = genStyleHooks('Prompts', (token)=>{
    const compToken = merge1(token, {});
    return [
        genPromptsStyle(compToken),
        genNestStyle(compToken)
    ];
}, prepareComponentToken5);
;
;
;
;
;
;
const Prompts = (props)=>{
    const { prefixCls: customizePrefixCls, title, className, items, onItemClick, vertical, wrap, rootClassName, styles = {}, classNames = {}, style, ...htmlProps } = props;
    // ============================ PrefixCls ============================
    const { getPrefixCls, direction } = __TURBOPACK__default__export__4();
    const prefixCls = getPrefixCls('prompts', customizePrefixCls);
    // ===================== Component Config =========================
    const contextConfig = __TURBOPACK__default__export__3('prompts');
    // ============================ Style ============================
    const [wrapCSSVar, hashId, cssVarCls] = __TURBOPACK__default__export__125(prefixCls);
    const mergedCls = (0, __TURBOPACK__imported__module__1446__17["default"])(prefixCls, contextConfig.className, className, rootClassName, hashId, cssVarCls, {
        [`${prefixCls}-rtl`]: direction === 'rtl'
    });
    const mergedListCls = (0, __TURBOPACK__imported__module__1446__17["default"])(`${prefixCls}-list`, contextConfig.classNames.list, classNames.list, {
        [`${prefixCls}-list-wrap`]: wrap
    }, {
        [`${prefixCls}-list-vertical`]: vertical
    });
    // ============================ Render ============================
    return wrapCSSVar(/*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__26["jsxs"])("div", {
        ...htmlProps,
        className: mergedCls,
        style: {
            ...style,
            ...contextConfig.style
        },
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__26["jsx"])(__TURBOPACK__imported__module__7454__15["Typography"].Title, {
                level: 5,
                className: (0, __TURBOPACK__imported__module__1446__17["default"])(`${prefixCls}-title`, contextConfig.classNames.title, classNames.title),
                style: {
                    ...contextConfig.styles.title,
                    ...styles.title
                },
                children: title
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__26["jsx"])("div", {
                className: mergedListCls,
                style: {
                    ...contextConfig.styles.list,
                    ...styles.list
                },
                children: items?.map((info, index)=>{
                    const isNest = info.children && info.children.length > 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__26["jsxs"])("div", {
                        style: {
                            ...contextConfig.styles.item,
                            ...styles.item
                        },
                        className: (0, __TURBOPACK__imported__module__1446__17["default"])(`${prefixCls}-item`, contextConfig.classNames.item, classNames.item, {
                            [`${prefixCls}-item-disabled`]: info.disabled,
                            [`${prefixCls}-item-has-nest`]: isNest
                        }),
                        onClick: ()=>{
                            if (!isNest && onItemClick) {
                                onItemClick({
                                    data: info
                                });
                            }
                        },
                        children: [
                            info.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__26["jsx"])("div", {
                                className: `${prefixCls}-icon`,
                                children: info.icon
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__26["jsxs"])("div", {
                                className: (0, __TURBOPACK__imported__module__1446__17["default"])(`${prefixCls}-content`, contextConfig.classNames.itemContent, classNames.itemContent),
                                style: {
                                    ...contextConfig.styles.itemContent,
                                    ...styles.itemContent
                                },
                                children: [
                                    info.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__26["jsx"])("h6", {
                                        className: `${prefixCls}-label`,
                                        children: info.label
                                    }),
                                    info.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__26["jsx"])("p", {
                                        className: `${prefixCls}-desc`,
                                        children: info.description
                                    }),
                                    isNest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__26["jsx"])(Prompts, {
                                        className: `${prefixCls}-nested`,
                                        items: info.children,
                                        vertical: true,
                                        onItemClick: onItemClick,
                                        classNames: {
                                            list: classNames.subList,
                                            item: classNames.subItem
                                        },
                                        styles: {
                                            list: styles.subList,
                                            item: styles.subItem
                                        }
                                    })
                                ]
                            })
                        ]
                    }, info.key || `key_${index}`);
                })
            })
        ]
    }));
};
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__126 = Prompts;
// MERGED MODULE: [project]/components/thought-chain/index.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__27 = __TURBOPACK__imported__module__7084__;
var __TURBOPACK__imported__module__1446__18 = __TURBOPACK__imported__module__1446__;
var __TURBOPACK__imported__module__9394__5 = __TURBOPACK__imported__module__9394__;
// MERGED MODULE: [project]/components/thought-chain/hooks/useCollapsible.ts [library] (ecmascript)
;
var __TURBOPACK__imported__module__3717__1 = __TURBOPACK__imported__module__3717__;
var __TURBOPACK__imported__module__2211__78 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/components/_util/motion.ts [library] (ecmascript)
;
;
// ================== Collapse Motion ==================
const getCollapsedHeight = ()=>({
        height: 0,
        opacity: 0
    });
const getRealHeight = (node)=>{
    const { scrollHeight } = node;
    return {
        height: scrollHeight,
        opacity: 1
    };
};
const getCurrentHeight = (node)=>({
        height: node ? node.offsetHeight : 0
    });
const skipOpacityTransition = (_, event)=>event?.deadline === true || event.propertyName === 'height';
const initCollapseMotion = (rootCls = defaultPrefixCls)=>({
        motionName: `${rootCls}-motion-collapse`,
        onAppearStart: getCollapsedHeight,
        onEnterStart: getCollapsedHeight,
        onAppearActive: getRealHeight,
        onEnterActive: getRealHeight,
        onLeaveStart: getCurrentHeight,
        onLeaveActive: getCollapsedHeight,
        onAppearEnd: skipOpacityTransition,
        onEnterEnd: skipOpacityTransition,
        onLeaveEnd: skipOpacityTransition,
        motionDeadline: 500
    });
const __TURBOPACK__default__export__127 = initCollapseMotion;
;
;
;
const useCollapsible = (collapsible, prefixCls, rootPrefixCls)=>{
    const isThoughtChainUnControlled = typeof collapsible === 'boolean' || collapsible?.expandedKeys === undefined;
    // ============================ Collapsible ============================
    const [enableCollapse, customizeExpandedKeys, customizeOnExpand] = __TURBOPACK__imported__module__2211__78["default"].useMemo(()=>{
        let baseConfig = {
            expandedKeys: [],
            onExpand: ()=>{}
        };
        if (!collapsible) {
            return [
                false,
                baseConfig.expandedKeys,
                baseConfig.onExpand
            ];
        }
        if (typeof collapsible === 'object') {
            baseConfig = {
                ...baseConfig,
                ...collapsible
            };
        }
        return [
            true,
            baseConfig.expandedKeys,
            baseConfig.onExpand
        ];
    }, [
        collapsible
    ]);
    // ============================ ExpandedKeys ============================
    const [mergedExpandedKeys, setMergedExpandedKeys] = (0, __TURBOPACK__imported__module__3717__1["default"])(customizeExpandedKeys, {
        value: isThoughtChainUnControlled ? undefined : customizeExpandedKeys,
        onChange: customizeOnExpand
    });
    // ============================ Event ============================
    const onItemExpand = (curKey)=>{
        setMergedExpandedKeys((preKeys)=>{
            const targetPreKeys = isThoughtChainUnControlled ? preKeys : customizeExpandedKeys;
            const keys = targetPreKeys.includes(curKey) ? targetPreKeys.filter((key)=>key !== curKey) : [
                ...targetPreKeys,
                curKey
            ];
            customizeOnExpand?.(keys);
            return keys;
        });
    };
    // ============================ Motion ============================
    const collapseMotion = __TURBOPACK__imported__module__2211__78["default"].useMemo(()=>{
        if (!enableCollapse) return {};
        return {
            ...__TURBOPACK__default__export__127(rootPrefixCls),
            motionAppear: false,
            leavedClassName: `${prefixCls}-content-hidden`
        };
    }, [
        rootPrefixCls,
        prefixCls,
        enableCollapse
    ]);
    // ============================ Return ============================
    return [
        enableCollapse,
        mergedExpandedKeys,
        enableCollapse ? onItemExpand : undefined,
        collapseMotion
    ];
};
const __TURBOPACK__default__export__128 = useCollapsible;
// MERGED MODULE: [project]/components/thought-chain/style/index.ts [library] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/antd/es/style/motion/collapse.js [library] (ecmascript) <export default as genCollapseMotion>
;
// MERGED MODULE: [project]/node_modules/antd/es/style/motion/collapse.js [library] (ecmascript)
;
const genCollapseMotion = (token)=>({
        [token.componentCls]: {
            // For common/openAnimation
            [`${token.antCls}-motion-collapse-legacy`]: {
                overflow: 'hidden',
                '&-active': {
                    transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
                }
            },
            [`${token.antCls}-motion-collapse`]: {
                overflow: 'hidden',
                transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
            }
        }
    });
const __TURBOPACK__default__export__129 = genCollapseMotion;
// MERGED MODULE: [project]/components/thought-chain/Item.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__28 = __TURBOPACK__imported__module__7084__;
var __TURBOPACK__imported__module__7454__16 = __TURBOPACK__imported__module__7454__;
var __TURBOPACK__imported__module__1446__19 = __TURBOPACK__imported__module__1446__;
var __TURBOPACK__imported__module__9394__6 = __TURBOPACK__imported__module__9394__;
var __TURBOPACK__imported__module__2211__79 = __TURBOPACK__imported__module__2211__;
;
;
;
;
;
;
;
var THOUGHT_CHAIN_ITEM_STATUS = function(THOUGHT_CHAIN_ITEM_STATUS) {
    /**
   * @desc 等待状态
   */ THOUGHT_CHAIN_ITEM_STATUS["PENDING"] = "pending";
    /**
   * @desc 成功状态
   */ THOUGHT_CHAIN_ITEM_STATUS["SUCCESS"] = "success";
    /**
   * @desc 错误状态
   */ THOUGHT_CHAIN_ITEM_STATUS["ERROR"] = "error";
    return THOUGHT_CHAIN_ITEM_STATUS;
}({});
const ThoughtChainNodeContext = /*#__PURE__*/ __TURBOPACK__imported__module__2211__79["default"].createContext(null);
const ThoughtChainNode = (props)=>{
    const { info = {}, nextStatus, onClick, ...restProps } = props;
    const domProps = (0, __TURBOPACK__imported__module__9394__6["default"])(restProps, {
        attr: true,
        aria: true,
        data: true
    });
    // ================= ThoughtChainNodeContext ====================
    const { prefixCls, collapseMotion, enableCollapse, expandedKeys, direction, classNames = {}, styles = {} } = __TURBOPACK__imported__module__2211__79["default"].useContext(ThoughtChainNodeContext);
    // ============================ Info ============================
    const id = __TURBOPACK__imported__module__2211__79["default"].useId();
    const { key = id, icon, title, extra, content, footer, status, description } = info;
    // ============================ Tooltip State ============================
    const [showTooltip, setShowTooltip] = __TURBOPACK__imported__module__2211__79["default"].useState(false);
    const textRef = __TURBOPACK__imported__module__2211__79["default"].useRef(null);
    __TURBOPACK__imported__module__2211__79["default"].useEffect(()=>{
        const checkTextOverflow = ()=>{
            if (textRef.current) {
                setShowTooltip(textRef.current.scrollWidth > textRef.current.clientWidth);
            }
        };
        checkTextOverflow();
        const resizeObserver = new ResizeObserver(checkTextOverflow);
        if (textRef.current) {
            resizeObserver.observe(textRef.current);
        }
        return ()=>{
            resizeObserver.disconnect();
        };
    }, [
        title
    ]);
    // ============================ Style ============================
    const itemCls = `${prefixCls}-item`;
    // ============================ Event ============================
    const onThoughtChainNodeClick = ()=>onClick?.(key);
    // ============================ Content Open ============================
    const contentOpen = expandedKeys?.includes(key);
    // ============================ Render ============================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__28["jsxs"])("div", {
        ...domProps,
        className: (0, __TURBOPACK__imported__module__1446__19["default"])(itemCls, {
            [`${itemCls}-${status}${nextStatus ? `-${nextStatus}` : ''}`]: status
        }, props.className),
        style: props.style,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__28["jsxs"])("div", {
                className: (0, __TURBOPACK__imported__module__1446__19["default"])(`${itemCls}-header`, classNames.itemHeader),
                style: styles.itemHeader,
                onClick: onThoughtChainNodeClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__28["jsx"])(__TURBOPACK__imported__module__7454__16["Avatar"], {
                        icon: icon,
                        className: `${itemCls}-icon`
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__28["jsxs"])("div", {
                        className: (0, __TURBOPACK__imported__module__1446__19["default"])(`${itemCls}-header-box`, {
                            [`${itemCls}-collapsible`]: enableCollapse && content
                        }),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__28["jsx"])(__TURBOPACK__imported__module__7454__16["Tooltip"], {
                                title: showTooltip ? title : undefined,
                                placement: direction === 'rtl' ? 'topRight' : 'topLeft',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__28["jsxs"])("div", {
                                    className: `${itemCls}-title`,
                                    children: [
                                        enableCollapse && content && (direction === 'rtl' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__28["jsx"])(__TURBOPACK__default__export__55, {
                                            className: `${itemCls}-collapse-icon`,
                                            rotate: contentOpen ? -90 : 0
                                        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__28["jsx"])(__TURBOPACK__default__export__59, {
                                            className: `${itemCls}-collapse-icon`,
                                            rotate: contentOpen ? 90 : 0
                                        })),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__28["jsx"])("div", {
                                            ref: textRef,
                                            className: `${itemCls}-title-content`,
                                            children: title
                                        })
                                    ]
                                })
                            }),
                            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__28["jsx"])(__TURBOPACK__imported__module__7454__16["Typography"].Text, {
                                className: `${itemCls}-desc`,
                                ellipsis: {
                                    tooltip: {
                                        placement: direction === 'rtl' ? 'topRight' : 'topLeft',
                                        title: description
                                    }
                                },
                                type: "secondary",
                                children: description
                            })
                        ]
                    }),
                    extra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__28["jsx"])("div", {
                        className: `${itemCls}-extra`,
                        children: extra
                    })
                ]
            }),
            content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__28["jsx"])(__TURBOPACK__default__export__68, {
                ...collapseMotion,
                visible: enableCollapse ? contentOpen : true,
                children: ({ className: motionClassName, style }, motionRef)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__28["jsx"])("div", {
                        className: (0, __TURBOPACK__imported__module__1446__19["default"])(`${itemCls}-content`, motionClassName),
                        ref: motionRef,
                        style: style,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__28["jsx"])("div", {
                            className: (0, __TURBOPACK__imported__module__1446__19["default"])(`${itemCls}-content-box`, classNames.itemContent),
                            style: styles.itemContent,
                            children: content
                        })
                    })
            }),
            footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__28["jsx"])("div", {
                className: (0, __TURBOPACK__imported__module__1446__19["default"])(`${itemCls}-footer`, classNames.itemFooter),
                style: styles.itemFooter,
                children: footer
            })
        ]
    });
};
const __TURBOPACK__default__export__130 = ThoughtChainNode;
;
;
;
;
;
const genThoughtChainItemStatusStyle = (token)=>{
    const { componentCls } = token;
    const itemCls = `${componentCls}-item`;
    const colors = {
        [THOUGHT_CHAIN_ITEM_STATUS.PENDING]: token.colorPrimaryText,
        [THOUGHT_CHAIN_ITEM_STATUS.SUCCESS]: token.colorSuccessText,
        [THOUGHT_CHAIN_ITEM_STATUS.ERROR]: token.colorErrorText
    };
    const statuses = Object.keys(colors);
    return statuses.reduce((acc, status)=>{
        const statusColor = colors[status];
        statuses.forEach((nextStatus)=>{
            const itemStatusCls = `& ${itemCls}-${status}-${nextStatus}`;
            const lastBeforePseudoStyle = status === nextStatus ? {} : {
                backgroundColor: 'none !important',
                backgroundImage: `linear-gradient(${statusColor}, ${colors[nextStatus]})`
            };
            acc[itemStatusCls] = {
                [`& ${itemCls}-icon, & > *::before`]: {
                    backgroundColor: `${statusColor} !important`
                },
                '& > :last-child::before': lastBeforePseudoStyle
            };
        });
        return acc;
    }, {});
};
const genThoughtChainItemBeforePseudoStyle = (token)=>{
    const { calc, componentCls } = token;
    const itemCls = `${componentCls}-item`;
    const beforePseudoBaseStyle = {
        content: '""',
        width: calc(token.lineWidth).mul(2).equal(),
        display: 'block',
        position: 'absolute',
        insetInlineEnd: 'none',
        backgroundColor: token.colorTextPlaceholder
    };
    return {
        '& > :last-child > :last-child': {
            '&::before': {
                display: 'none !important'
            },
            [`&${itemCls}-footer`]: {
                '&::before': {
                    display: 'block !important',
                    bottom: 0
                }
            }
        },
        [`& > ${itemCls}`]: {
            [`& ${itemCls}-header, & ${itemCls}-content, & ${itemCls}-footer`]: {
                position: 'relative',
                '&::before': {
                    bottom: calc(token.itemGap).mul(-1).equal()
                }
            },
            [`& ${itemCls}-header, & ${itemCls}-content`]: {
                marginInlineStart: calc(token.itemSize).mul(-1).equal(),
                '&::before': {
                    ...beforePseudoBaseStyle,
                    insetInlineStart: calc(token.itemSize).div(2).sub(token.lineWidth).equal()
                }
            },
            [`& ${itemCls}-header::before`]: {
                top: token.itemSize,
                bottom: calc(token.itemGap).mul(-2).equal()
            },
            [`& ${itemCls}-content::before`]: {
                top: '100%'
            },
            [`& ${itemCls}-footer::before`]: {
                ...beforePseudoBaseStyle,
                top: 0,
                insetInlineStart: calc(token.itemSize).div(-2).sub(token.lineWidth).equal()
            }
        }
    };
};
const genThoughtChainItemStyle = (token)=>{
    const { componentCls } = token;
    const itemCls = `${componentCls}-item`;
    return {
        [itemCls]: {
            display: 'flex',
            flexDirection: 'column',
            [`& ${itemCls}-collapsible`]: {
                cursor: 'pointer'
            },
            [`& ${itemCls}-header`]: {
                display: 'flex',
                marginBottom: token.itemGap,
                gap: token.itemGap,
                alignItems: 'flex-start',
                [`& ${itemCls}-icon`]: {
                    height: token.itemSize,
                    width: token.itemSize,
                    fontSize: token.itemFontSize
                },
                [`& ${itemCls}-extra`]: {
                    height: token.itemSize,
                    maxHeight: token.itemSize
                },
                [`& ${itemCls}-header-box`]: {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    [`& ${itemCls}-title`]: {
                        height: token.itemSize,
                        lineHeight: `${unit1(token.itemSize)}`,
                        maxHeight: token.itemSize,
                        fontSize: token.itemFontSize,
                        display: 'flex',
                        alignItems: 'center',
                        [`& ${itemCls}-collapse-icon`]: {
                            marginInlineEnd: token.marginXS,
                            flexShrink: 0
                        },
                        [`& ${itemCls}-title-content`]: {
                            flex: 1,
                            minWidth: 0,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            fontWeight: token.fontWeightStrong
                        }
                    },
                    [`& ${itemCls}-desc`]: {
                        fontSize: token.itemFontSize
                    }
                }
            },
            [`& ${itemCls}-content`]: {
                [`& ${itemCls}-content-hidden`]: {
                    display: 'none'
                },
                [`& ${itemCls}-content-box`]: {
                    padding: token.itemGap,
                    display: 'inline-block',
                    maxWidth: `calc(100% - ${token.itemSize})`,
                    borderRadius: token.borderRadiusLG,
                    backgroundColor: token.colorBgContainer,
                    border: `${unit1(token.lineWidth)} ${token.lineType} ${token.colorBorderSecondary}`
                }
            },
            [`& ${itemCls}-footer`]: {
                marginTop: token.itemGap,
                display: 'inline-flex'
            }
        }
    };
};
const genThoughtChainSizeStyle = (token, size = 'middle')=>{
    const { componentCls } = token;
    const sizeTokens = {
        large: {
            itemSize: token.itemSizeLG,
            itemGap: token.itemGapLG,
            itemFontSize: token.itemFontSizeLG
        },
        middle: {
            itemSize: token.itemSize,
            itemGap: token.itemGap,
            itemFontSize: token.itemFontSize
        },
        small: {
            itemSize: token.itemSizeSM,
            itemGap: token.itemGapSM,
            itemFontSize: token.itemFontSizeSM
        }
    }[size];
    return {
        [`&${componentCls}-${size}`]: {
            paddingInlineStart: sizeTokens.itemSize,
            gap: sizeTokens.itemGap,
            ...genThoughtChainItemStyle({
                ...token,
                ...sizeTokens
            }),
            ...genThoughtChainItemBeforePseudoStyle({
                ...token,
                ...sizeTokens
            })
        }
    };
};
const genThoughtChainStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: {
            display: 'flex',
            flexDirection: 'column',
            ...genThoughtChainItemStatusStyle(token),
            ...genThoughtChainSizeStyle(token),
            ...genThoughtChainSizeStyle(token, 'large'),
            ...genThoughtChainSizeStyle(token, 'small'),
            [`&${componentCls}-rtl`]: {
                direction: 'rtl'
            }
        }
    };
};
const __TURBOPACK__default__export__131 = genStyleHooks('ThoughtChain', (token)=>{
    const compToken = merge1(token, {
        // small size tokens
        itemFontSizeSM: token.fontSizeSM,
        itemSizeSM: token.calc(token.controlHeightXS).add(token.controlHeightSM).div(2).equal(),
        itemGapSM: token.marginSM,
        // default size tokens
        itemFontSize: token.fontSize,
        itemSize: token.calc(token.controlHeightSM).add(token.controlHeight).div(2).equal(),
        itemGap: token.margin,
        // large size tokens
        itemFontSizeLG: token.fontSizeLG,
        itemSizeLG: token.calc(token.controlHeight).add(token.controlHeightLG).div(2).equal(),
        itemGapLG: token.marginLG
    });
    return [
        genThoughtChainStyle(compToken),
        __TURBOPACK__default__export__129(compToken)
    ];
});
;
;
;
;
;
;
;
;
const ThoughtChain = (props)=>{
    const { prefixCls: customizePrefixCls, rootClassName, className, items, collapsible, styles = {}, style, classNames = {}, size = 'middle', ...restProps } = props;
    const domProps = (0, __TURBOPACK__imported__module__9394__5["default"])(restProps, {
        attr: true,
        aria: true,
        data: true
    });
    // ============================ Prefix ============================
    const { getPrefixCls, direction } = __TURBOPACK__default__export__4();
    const rootPrefixCls = getPrefixCls();
    const prefixCls = getPrefixCls('thought-chain', customizePrefixCls);
    // ===================== Component Config =========================
    const contextConfig = __TURBOPACK__default__export__3('thoughtChain');
    // ============================ UseCollapsible ============================
    const [enableCollapse, expandedKeys, onItemExpand, collapseMotion] = __TURBOPACK__default__export__128(collapsible, prefixCls, rootPrefixCls);
    // ============================ Style ============================
    const [wrapCSSVar, hashId, cssVarCls] = __TURBOPACK__default__export__131(prefixCls);
    const mergedCls = (0, __TURBOPACK__imported__module__1446__18["default"])(className, rootClassName, prefixCls, contextConfig.className, hashId, cssVarCls, {
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, `${prefixCls}-${size}`);
    // ============================ Render ============================
    return wrapCSSVar(/*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__27["jsx"])("div", {
        ...domProps,
        className: mergedCls,
        style: {
            ...contextConfig.style,
            ...style
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__27["jsx"])(ThoughtChainNodeContext.Provider, {
            value: {
                prefixCls,
                enableCollapse,
                collapseMotion,
                expandedKeys,
                direction,
                classNames: {
                    itemHeader: (0, __TURBOPACK__imported__module__1446__18["default"])(contextConfig.classNames.itemHeader, classNames.itemHeader),
                    itemContent: (0, __TURBOPACK__imported__module__1446__18["default"])(contextConfig.classNames.itemContent, classNames.itemContent),
                    itemFooter: (0, __TURBOPACK__imported__module__1446__18["default"])(contextConfig.classNames.itemFooter, classNames.itemFooter)
                },
                styles: {
                    itemHeader: {
                        ...contextConfig.styles.itemHeader,
                        ...styles.itemHeader
                    },
                    itemContent: {
                        ...contextConfig.styles.itemContent,
                        ...styles.itemContent
                    },
                    itemFooter: {
                        ...contextConfig.styles.itemFooter,
                        ...styles.itemFooter
                    }
                }
            },
            children: items?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__27["jsx"])(__TURBOPACK__default__export__130, {
                    className: (0, __TURBOPACK__imported__module__1446__18["default"])(contextConfig.classNames.item, classNames.item),
                    style: {
                        ...contextConfig.styles.item,
                        ...styles.item
                    },
                    info: {
                        ...item,
                        icon: item.icon || index + 1
                    },
                    onClick: onItemExpand,
                    nextStatus: items[index + 1]?.status || item.status
                }, item.key || `key_${index}`))
        })
    }));
};
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__132 = ThoughtChain;
// MERGED MODULE: [project]/components/suggestion/index.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__29 = __TURBOPACK__imported__module__7084__;
var __TURBOPACK__imported__module__7454__17 = __TURBOPACK__imported__module__7454__;
var __TURBOPACK__imported__module__1446__20 = __TURBOPACK__imported__module__1446__;
var __TURBOPACK__imported__module__2211__80 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/components/suggestion/style/index.ts [library] (ecmascript)
;
;
;
const genSuggestionStyle = (token)=>{
    const { componentCls, antCls } = token;
    return {
        [componentCls]: {
            [`${antCls}-cascader-menus ${antCls}-cascader-menu`]: {
                height: 'auto'
            },
            [`${componentCls}-item`]: {
                '&-icon': {
                    marginInlineEnd: token.paddingXXS
                },
                '&-extra': {
                    marginInlineStart: token.padding
                }
            },
            [`&${componentCls}-block`]: {
                [`${componentCls}-item-extra`]: {
                    marginInlineStart: 'auto'
                }
            }
        }
    };
};
const prepareComponentToken6 = ()=>({});
const __TURBOPACK__default__export__133 = genStyleHooks('Suggestion', (token)=>{
    const SuggestionToken = merge1(token, {});
    return genSuggestionStyle(SuggestionToken);
}, prepareComponentToken6);
// MERGED MODULE: [project]/components/suggestion/useActive.ts [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__81 = __TURBOPACK__imported__module__2211__;
;
;
function useActive(items, open, rtl, onSelect, onCancel) {
    const [activePaths, setActivePaths] = __TURBOPACK__imported__module__2211__81["default"].useState([]);
    /** Get items by column index */ const getItems = (colIndex, paths = activePaths)=>{
        let currentItems = items;
        for(let i = 0; i < colIndex - 1; i += 1){
            const activePath = paths[i];
            const activeItem = currentItems.find((item)=>item.value === activePath);
            if (!activeItem) {
                break;
            }
            currentItems = activeItem.children || [];
        }
        return currentItems;
    };
    const getValues = (paths)=>{
        return paths.map((path, index)=>{
            const currentItems = getItems(index + 1, paths);
            const currentItem = currentItems.find((item)=>item.value === path);
            return currentItem?.value;
        });
    };
    const offsetRow = (offset)=>{
        const currentColIndex = activePaths.length || 1;
        const currentItems = getItems(currentColIndex);
        const currentRowIndex = currentItems.findIndex((item)=>item.value === activePaths[currentColIndex - 1]);
        const itemCount = currentItems.length;
        const nextItem = currentItems[(currentRowIndex + offset + itemCount) % itemCount];
        setActivePaths([
            ...activePaths.slice(0, currentColIndex - 1),
            nextItem.value
        ]);
    };
    const offsetPrev = ()=>{
        if (activePaths.length > 1) {
            setActivePaths(activePaths.slice(0, activePaths.length - 1));
        }
    };
    const offsetNext = ()=>{
        const nextItems = getItems(activePaths.length + 1);
        if (nextItems.length) {
            setActivePaths([
                ...activePaths,
                nextItems[0].value
            ]);
        }
    };
    const onKeyDown = useEvent((e)=>{
        if (!open) {
            return;
        }
        switch(e.key){
            case 'ArrowDown':
                offsetRow(1);
                e.preventDefault();
                break;
            case 'ArrowUp':
                offsetRow(-1);
                e.preventDefault();
                break;
            case 'ArrowRight':
                if (rtl) {
                    offsetPrev();
                } else {
                    offsetNext();
                }
                e.preventDefault();
                break;
            case 'ArrowLeft':
                if (rtl) {
                    offsetNext();
                } else {
                    offsetPrev();
                }
                e.preventDefault();
                break;
            case 'Enter':
                // Submit if not have children
                if (!getItems(activePaths.length + 1).length) {
                    onSelect(getValues(activePaths));
                }
                e.preventDefault();
                break;
            case 'Escape':
                onCancel();
                e.preventDefault();
                break;
        }
    });
    __TURBOPACK__imported__module__2211__81["default"].useEffect(()=>{
        // 确保 items 是一个数组且至少有一个元素
        if (open && Array.isArray(items) && items.length > 0) {
            setActivePaths([
                items[0].value
            ]);
        }
    }, [
        open
    ]);
    return [
        activePaths,
        onKeyDown
    ];
}
;
;
;
;
;
;
;
;
;
const antdVersionCells = __TURBOPACK__imported__module__7454__17["version"].split('.').map(Number);
const isNewAPI = antdVersionCells[0] > 5 || antdVersionCells[0] === 5 && antdVersionCells[1] >= 25;
function Suggestion(props) {
    const { prefixCls: customizePrefixCls, className, rootClassName, style, children, open, onOpenChange, items, onSelect, block } = props;
    // ============================= MISC =============================
    const { direction, getPrefixCls } = __TURBOPACK__default__export__4();
    const prefixCls = getPrefixCls('suggestion', customizePrefixCls);
    const itemCls = `${prefixCls}-item`;
    const isRTL = direction === 'rtl';
    // ===================== Component Config =========================
    const contextConfig = __TURBOPACK__default__export__3('suggestion');
    // ============================ Styles ============================
    const [wrapCSSVar, hashId, cssVarCls] = __TURBOPACK__default__export__133(prefixCls);
    // =========================== Trigger ============================
    const [mergedOpen, setOpen] = useMergedState(false, {
        value: open
    });
    const [info, setInfo] = (0, __TURBOPACK__imported__module__2211__80["useState"])();
    const triggerOpen = (nextOpen)=>{
        setOpen(nextOpen);
        onOpenChange?.(nextOpen);
    };
    const onTrigger = useEvent((nextInfo)=>{
        if (nextInfo === false) {
            triggerOpen(false);
        } else {
            setInfo(nextInfo);
            triggerOpen(true);
        }
    });
    const onClose = ()=>{
        triggerOpen(false);
    };
    // ============================ Items =============================
    const itemList = __TURBOPACK__imported__module__2211__80["default"].useMemo(()=>typeof items === 'function' ? items(info) : items, [
        items,
        info
    ]);
    // =========================== Cascader ===========================
    const optionRender = (node)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__29["jsxs"])(__TURBOPACK__imported__module__7454__17["Flex"], {
            className: itemCls,
            children: [
                node.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__29["jsx"])("div", {
                    className: `${itemCls}-icon`,
                    children: node.icon
                }),
                node.label,
                node.extra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__29["jsx"])("div", {
                    className: `${itemCls}-extra`,
                    children: node.extra
                })
            ]
        });
    };
    const onInternalChange = (valuePath)=>{
        if (onSelect) {
            onSelect(valuePath[valuePath.length - 1]);
        }
        triggerOpen(false);
    };
    // ============================= a11y =============================
    const [activePath, onKeyDown] = useActive(itemList, mergedOpen, isRTL, onInternalChange, onClose);
    // =========================== Children ===========================
    const childNode = children?.({
        onTrigger,
        onKeyDown
    });
    // ============================ Render ============================
    const onInternalOpenChange = (nextOpen)=>{
        if (!nextOpen) {
            onClose();
        }
    };
    const compatibleProps = {};
    /* istanbul ignore else */ if (isNewAPI) {
        compatibleProps.onOpenChange = onInternalOpenChange;
    } else {
        compatibleProps.onDropdownVisibleChange = onInternalOpenChange;
    }
    return wrapCSSVar(/*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__29["jsx"])(__TURBOPACK__imported__module__7454__17["Cascader"], {
        options: itemList,
        open: mergedOpen,
        value: activePath,
        placement: isRTL ? 'topRight' : 'topLeft',
        ...compatibleProps,
        optionRender: optionRender,
        rootClassName: (0, __TURBOPACK__imported__module__1446__20["default"])(rootClassName, prefixCls, hashId, cssVarCls, {
            [`${prefixCls}-block`]: block
        }),
        onChange: onInternalChange,
        dropdownMatchSelectWidth: block,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__29["jsx"])("div", {
            className: (0, __TURBOPACK__imported__module__1446__20["default"])(prefixCls, contextConfig.className, rootClassName, className, `${prefixCls}-wrapper`, hashId, cssVarCls),
            style: {
                ...contextConfig.style,
                ...style
            },
            children: childNode
        })
    }));
}
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__134 = Suggestion;
// MERGED MODULE: [project]/components/welcome/index.tsx [library] (ecmascript)
;
var __TURBOPACK__imported__module__7084__30 = __TURBOPACK__imported__module__7084__;
var __TURBOPACK__imported__module__7454__18 = __TURBOPACK__imported__module__7454__;
var __TURBOPACK__imported__module__1446__21 = __TURBOPACK__imported__module__1446__;
var __TURBOPACK__imported__module__2211__82 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/components/welcome/style/index.ts [library] (ecmascript)
;
;
;
const genWelcomeStyle = (token)=>{
    const { componentCls, calc } = token;
    const titleHeight = calc(token.fontSizeHeading3).mul(token.lineHeightHeading3).equal();
    const descHeight = calc(token.fontSize).mul(token.lineHeight).equal();
    return {
        [componentCls]: {
            gap: token.padding,
            // ======================== Icon ========================
            [`${componentCls}-icon`]: {
                height: calc(titleHeight).add(descHeight).add(token.paddingXXS).equal(),
                display: 'flex',
                img: {
                    height: '100%'
                }
            },
            // ==================== Content Wrap ====================
            [`${componentCls}-content-wrapper`]: {
                gap: token.paddingXS,
                flex: 'auto',
                minWidth: 0,
                [`${componentCls}-title-wrapper`]: {
                    gap: token.paddingXS
                },
                [`${componentCls}-title`]: {
                    margin: 0
                },
                [`${componentCls}-extra`]: {
                    marginInlineStart: 'auto'
                }
            }
        }
    };
};
const genVariantStyle1 = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: {
            // ======================== Filled ========================
            '&-filled': {
                paddingInline: token.padding,
                paddingBlock: token.paddingSM,
                background: token.colorFillContent,
                borderRadius: token.borderRadiusLG
            },
            // ====================== Borderless ======================
            '&-borderless': {
                [`${componentCls}-title`]: {
                    fontSize: token.fontSizeHeading3,
                    lineHeight: token.lineHeightHeading3
                }
            }
        }
    };
};
const prepareComponentToken7 = ()=>({});
const __TURBOPACK__default__export__135 = genStyleHooks('Welcome', (token)=>{
    const compToken = merge1(token, {});
    return [
        genWelcomeStyle(compToken),
        genVariantStyle1(compToken)
    ];
}, prepareComponentToken7);
;
;
;
;
;
;
;
function Welcome(props, ref) {
    const { prefixCls: customizePrefixCls, rootClassName, className, style, variant = 'filled', // Semantic
    classNames = {}, styles = {}, // Layout
    icon, title, description, extra } = props;
    // ============================= MISC =============================
    const { direction, getPrefixCls } = __TURBOPACK__default__export__4();
    const prefixCls = getPrefixCls('welcome', customizePrefixCls);
    // ======================= Component Config =======================
    const contextConfig = __TURBOPACK__default__export__3('welcome');
    // ============================ Styles ============================
    const [wrapCSSVar, hashId, cssVarCls] = __TURBOPACK__default__export__135(prefixCls);
    // ============================= Icon =============================
    const iconNode = __TURBOPACK__imported__module__2211__82["default"].useMemo(()=>{
        if (!icon) {
            return null;
        }
        let iconEle = icon;
        if (typeof icon === 'string' && icon.startsWith('http')) {
            iconEle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__30["jsx"])("img", {
                src: icon,
                alt: "icon"
            });
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__30["jsx"])("div", {
            className: (0, __TURBOPACK__imported__module__1446__21["default"])(`${prefixCls}-icon`, contextConfig.classNames.icon, classNames.icon),
            style: styles.icon,
            children: iconEle
        });
    }, [
        icon
    ]);
    const titleNode = __TURBOPACK__imported__module__2211__82["default"].useMemo(()=>{
        if (!title) {
            return null;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__30["jsx"])(__TURBOPACK__imported__module__7454__18["Typography"].Title, {
            level: 4,
            className: (0, __TURBOPACK__imported__module__1446__21["default"])(`${prefixCls}-title`, contextConfig.classNames.title, classNames.title),
            style: styles.title,
            children: title
        });
    }, [
        title
    ]);
    const extraNode = __TURBOPACK__imported__module__2211__82["default"].useMemo(()=>{
        if (!extra) {
            return null;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__30["jsx"])("div", {
            className: (0, __TURBOPACK__imported__module__1446__21["default"])(`${prefixCls}-extra`, contextConfig.classNames.extra, classNames.extra),
            style: styles.extra,
            children: extra
        });
    }, [
        extra
    ]);
    // ============================ Render ============================
    return wrapCSSVar(/*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__30["jsxs"])(__TURBOPACK__imported__module__7454__18["Flex"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__1446__21["default"])(prefixCls, contextConfig.className, className, rootClassName, hashId, cssVarCls, `${prefixCls}-${variant}`, {
            [`${prefixCls}-rtl`]: direction === 'rtl'
        }),
        style: style,
        children: [
            iconNode,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__30["jsxs"])(__TURBOPACK__imported__module__7454__18["Flex"], {
                vertical: true,
                className: `${prefixCls}-content-wrapper`,
                children: [
                    extra ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__30["jsxs"])(__TURBOPACK__imported__module__7454__18["Flex"], {
                        align: "flex-start",
                        className: `${prefixCls}-title-wrapper`,
                        children: [
                            titleNode,
                            extraNode
                        ]
                    }) : titleNode,
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__30["jsx"])(__TURBOPACK__imported__module__7454__18["Typography"].Text, {
                        className: (0, __TURBOPACK__imported__module__1446__21["default"])(`${prefixCls}-description`, contextConfig.classNames.description, classNames.description),
                        style: styles.description,
                        children: description
                    })
                ]
            })
        ]
    }));
}
const ForwardWelcome = /*#__PURE__*/ __TURBOPACK__imported__module__2211__82["default"].forwardRef(Welcome);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__136 = ForwardWelcome;
// MERGED MODULE: [project]/components/x-provider/index.tsx [library] (ecmascript) <locals>
;
var __TURBOPACK__imported__module__7084__31 = __TURBOPACK__imported__module__7084__;
var __TURBOPACK__imported__module__7454__19 = __TURBOPACK__imported__module__7454__;
var __TURBOPACK__imported__module__2211__83 = __TURBOPACK__imported__module__2211__;
;
;
;
;
;
const XProvider = (props)=>{
    const { attachments, bubble, conversations, prompts, sender, suggestion, thoughtChain, welcome, theme, ...antdConfProps } = props;
    const { theme: parentTheme } = __TURBOPACK__default__export__4();
    const xProviderProps = __TURBOPACK__imported__module__2211__83["default"].useMemo(()=>{
        return {
            attachments,
            bubble,
            conversations,
            prompts,
            sender,
            suggestion,
            thoughtChain,
            welcome
        };
    }, [
        attachments,
        bubble,
        conversations,
        prompts,
        sender,
        suggestion,
        thoughtChain,
        welcome
    ]);
    const mergedTheme = __TURBOPACK__imported__module__2211__83["default"].useMemo(()=>{
        const concatTheme = {
            ...parentTheme,
            ...theme
        };
        return concatTheme;
    }, [
        parentTheme,
        theme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__31["jsx"])(__TURBOPACK__default__export__2.Provider, {
        value: xProviderProps,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__7084__31["jsx"])(__TURBOPACK__imported__module__7454__19["ConfigProvider"], {
            ...antdConfProps,
            // Note:  we can not set `cssVar` by default.
            //        Since when developer not wrap with XProvider,
            //        the generate css is still using css var but no css var injected.
            // Origin comment: antdx enable cssVar by default, and antd v6 will enable cssVar by default
            // theme={{ cssVar: true, ...antdConfProps?.theme }}
            theme: mergedTheme
        })
    });
};
;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__137 = XProvider;
// MERGED MODULE: [project]/components/use-x-chat/index.ts [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__84 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/components/use-x-chat/useSyncState.ts [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__85 = __TURBOPACK__imported__module__2211__;
;
function useSyncState1(defaultValue) {
    const [, forceUpdate] = __TURBOPACK__imported__module__2211__85["default"].useState(0);
    const stateRef = __TURBOPACK__imported__module__2211__85["default"].useRef(typeof defaultValue === 'function' ? defaultValue() : defaultValue);
    const setState = __TURBOPACK__imported__module__2211__85["default"].useCallback((action)=>{
        stateRef.current = typeof action === 'function' ? action(stateRef.current) : action;
        forceUpdate((prev)=>prev + 1);
    }, []);
    const getState = __TURBOPACK__imported__module__2211__85["default"].useCallback(()=>stateRef.current, []);
    return [
        stateRef.current,
        setState,
        getState
    ];
}
;
;
;
function toArray(item) {
    return Array.isArray(item) ? item : [
        item
    ];
}
function useXChat(config) {
    const { defaultMessages, agent, requestFallback, requestPlaceholder, parser, transformMessage, transformStream, resolveAbortController } = config;
    // ========================= Agent Messages =========================
    const idRef = __TURBOPACK__imported__module__2211__84["default"].useRef(0);
    const [messages, setMessages, getMessages] = useSyncState1(()=>(defaultMessages || []).map((info, index)=>({
                id: `default_${index}`,
                status: 'local',
                ...info
            })));
    const createMessage = (message, status)=>{
        const msg = {
            id: `msg_${idRef.current}`,
            message,
            status
        };
        idRef.current += 1;
        return msg;
    };
    // ========================= BubbleMessages =========================
    const parsedMessages = __TURBOPACK__imported__module__2211__84["default"].useMemo(()=>{
        const list = [];
        messages.forEach((agentMsg)=>{
            const rawParsedMsg = parser ? parser(agentMsg.message) : agentMsg.message;
            const bubbleMsgs = toArray(rawParsedMsg);
            bubbleMsgs.forEach((bubbleMsg, bubbleMsgIndex)=>{
                let key = agentMsg.id;
                if (bubbleMsgs.length > 1) {
                    key = `${key}_${bubbleMsgIndex}`;
                }
                list.push({
                    id: key,
                    message: bubbleMsg,
                    status: agentMsg.status
                });
            });
        });
        return list;
    }, [
        messages
    ]);
    // ============================ Request =============================
    const getFilteredMessages = (msgs)=>msgs.filter((info)=>info.status !== 'loading' && info.status !== 'error').map((info)=>info.message);
    // For agent to use. Will filter out loading and error message
    const getRequestMessages = ()=>getFilteredMessages(getMessages());
    const getTransformMessage = (params)=>{
        const { chunk, chunks, originMessage } = params;
        if (typeof transformMessage === 'function') {
            return transformMessage(params);
        }
        // Compatible bug fixes, onSuccess(output) => onSuccess(output[]),before v1.1.1
        if (chunk) {
            return chunk;
        }
        if (Array.isArray(chunks)) {
            const chunk = chunks?.length > 0 ? chunks?.[chunks?.length - 1] : undefined;
            return originMessage ? originMessage : chunk;
        }
        return chunks;
    };
    const onRequest = useEvent((requestParams)=>{
        if (!agent) throw new Error('The agent parameter is required when using the onRequest method in an agent generated by useXAgent.');
        let loadingMsgId = null;
        let message;
        let otherRequestParams = {};
        if (requestParams && typeof requestParams === 'object' && 'message' in requestParams) {
            const { message: requestParamsMessage, ...other } = requestParams;
            message = requestParamsMessage;
            otherRequestParams = other;
        } else {
            message = requestParams;
        }
        // Add placeholder message
        setMessages((ori)=>{
            let nextMessages = [
                ...ori,
                createMessage(message, 'local')
            ];
            let placeholderMsg = '';
            if (requestPlaceholder) {
                if (typeof requestPlaceholder === 'function') {
                    // typescript has bug that not get real return type when use `typeof function` check
                    placeholderMsg = requestPlaceholder(message, {
                        messages: getFilteredMessages(nextMessages)
                    });
                } else {
                    placeholderMsg = requestPlaceholder;
                }
            }
            const loadingMsg = createMessage(placeholderMsg, 'loading');
            loadingMsgId = loadingMsg.id;
            nextMessages = [
                ...nextMessages,
                loadingMsg
            ];
            return nextMessages;
        });
        // Request
        let updatingMsgId = null;
        const updateMessage = (status, chunk, chunks)=>{
            let msg = getMessages().find((info)=>info.id === updatingMsgId);
            if (!msg) {
                // Create if not exist
                const transformData = getTransformMessage({
                    chunk,
                    status,
                    chunks
                });
                msg = createMessage(transformData, status);
                setMessages((ori)=>{
                    const oriWithoutPending = ori.filter((info)=>info.id !== loadingMsgId);
                    return [
                        ...oriWithoutPending,
                        msg
                    ];
                });
                updatingMsgId = msg.id;
            } else {
                // Update directly
                setMessages((ori)=>{
                    return ori.map((info)=>{
                        if (info.id === updatingMsgId) {
                            const transformData = getTransformMessage({
                                originMessage: info.message,
                                chunk,
                                chunks,
                                status
                            });
                            return {
                                ...info,
                                message: transformData,
                                status
                            };
                        }
                        return info;
                    });
                });
            }
            return msg;
        };
        agent.request({
            message,
            messages: getRequestMessages(),
            ...otherRequestParams
        }, {
            onUpdate: (chunk)=>{
                updateMessage('updating', chunk, []);
            },
            onSuccess: (chunks)=>{
                updateMessage('success', undefined, chunks);
            },
            onError: async (error)=>{
                if (requestFallback) {
                    let fallbackMsg;
                    // Update as error
                    if (typeof requestFallback === 'function') {
                        // typescript has bug that not get real return type when use `typeof function` check
                        fallbackMsg = await requestFallback(message, {
                            error,
                            messages: getRequestMessages()
                        });
                    } else {
                        fallbackMsg = requestFallback;
                    }
                    setMessages((ori)=>[
                            ...ori.filter((info)=>info.id !== loadingMsgId && info.id !== updatingMsgId),
                            createMessage(fallbackMsg, 'error')
                        ]);
                } else {
                    // Remove directly
                    setMessages((ori)=>{
                        return ori.filter((info)=>info.id !== loadingMsgId && info.id !== updatingMsgId);
                    });
                }
            },
            onStream: (controller)=>{
                resolveAbortController?.(controller);
            }
        }, transformStream);
    });
    return {
        onRequest,
        messages,
        parsedMessages,
        setMessages
    };
}
// MERGED MODULE: [project]/components/use-x-agent/index.ts [library] (ecmascript)
;
var __TURBOPACK__imported__module__2211__86 = __TURBOPACK__imported__module__2211__;
// MERGED MODULE: [project]/components/x-request/index.ts [library] (ecmascript)
;
// MERGED MODULE: [project]/components/x-stream/index.ts [library] (ecmascript)
;
/**
 * @description default separator for {@link splitStream}
 */ const DEFAULT_STREAM_SEPARATOR = '\n\n';
/**
 * @description Default separator for {@link splitPart}
 * @example "event: delta\ndata: {\"key\": \"value\"}"
 */ const DEFAULT_PART_SEPARATOR = '\n';
/**
 * @description Default separator for key value, A colon (`:`) is used to separate keys from values
 * @example "event: delta"
 */ const DEFAULT_KV_SEPARATOR = ':';
/**
 * Check if a string is not empty or only contains whitespace characters
 */ const isValidString = (str)=>(str ?? '').trim() !== '';
/**
 * @description A TransformStream inst that splits a stream into parts based on {@link DEFAULT_STREAM_SEPARATOR}
 * @example
 *
 * `event: delta
 * data: { content: 'hello' }
 *
 * event: delta
 * data: { key: 'world!' }
 *
 * `
 */ function splitStream() {
    // Buffer to store incomplete data chunks between transformations
    let buffer = '';
    return new TransformStream({
        transform (streamChunk, controller) {
            buffer += streamChunk;
            // Split the buffer based on the separator
            const parts = buffer.split(DEFAULT_STREAM_SEPARATOR);
            // Enqueue all complete parts except for the last incomplete one
            parts.slice(0, -1).forEach((part)=>{
                // Skip empty parts
                if (isValidString(part)) {
                    controller.enqueue(part);
                }
            });
            // Save the last incomplete part back to the buffer for the next chunk
            buffer = parts[parts.length - 1];
        },
        flush (controller) {
            // If there's any remaining data in the buffer, enqueue it as the final part
            if (isValidString(buffer)) {
                controller.enqueue(buffer);
            }
        }
    });
}
/**
 * @description A TransformStream inst that transforms a part string into {@link SSEOutput}
 * @example part string
 *
 * "event: delta\ndata: { key: 'world!' }\n"
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/EventSource
 *
 * When handling responses with `Content-Type: text/event-stream`, the following standard practices are commonly observed:
 * - Double newline characters (`\n\n`) are used to separate individual events.
 * - Single newline characters (`\n`) are employed to separate line within an event.
 */ function splitPart() {
    return new TransformStream({
        transform (partChunk, controller) {
            // Split the chunk into key-value pairs using the partSeparator
            const lines = partChunk.split(DEFAULT_PART_SEPARATOR);
            const sseEvent = lines.reduce((acc, line)=>{
                const separatorIndex = line.indexOf(DEFAULT_KV_SEPARATOR);
                if (separatorIndex === -1) {
                    throw new Error(`The key-value separator "${DEFAULT_KV_SEPARATOR}" is not found in the sse line chunk!`);
                }
                // Extract the key from the beginning of the line up to the separator
                const key = line.slice(0, separatorIndex);
                // The colon is used for comment lines, skip directly
                if (!isValidString(key)) return acc;
                // Extract the value from the line after the separator
                const value = line.slice(separatorIndex + 1);
                return {
                    ...acc,
                    [key]: value
                };
            }, {});
            if (Object.keys(sseEvent).length === 0) return;
            // Reduce the key-value pairs into a single object and enqueue
            controller.enqueue(sseEvent);
        }
    });
}
/**
 * @description Transform Uint8Array binary stream to {@link SSEOutput} by default
 * @warning The `XStream` only support the `utf-8` encoding. More encoding support maybe in the future.
 */ function XStream(options) {
    const { readableStream, transformStream } = options;
    if (!(readableStream instanceof ReadableStream)) {
        throw new Error('The options.readableStream must be an instance of ReadableStream.');
    }
    // Default encoding is `utf-8`
    const decoderStream = new TextDecoderStream();
    const stream = transformStream ? /**
         * Uint8Array binary -> string -> Output
         */ readableStream.pipeThrough(decoderStream).pipeThrough(transformStream) : /**
         * Uint8Array binary -> string -> SSE part string -> Default Output {@link SSEOutput}
         */ readableStream.pipeThrough(decoderStream).pipeThrough(splitStream()).pipeThrough(splitPart());
    /** support async iterator */ stream[Symbol.asyncIterator] = async function*() {
        const reader = this.getReader();
        while(true){
            const { done, value } = await reader.read();
            if (done) break;
            if (!value) continue;
            // Transformed data through all transform pipes
            yield value;
        }
    };
    return stream;
}
const __TURBOPACK__default__export__138 = XStream;
// MERGED MODULE: [project]/components/x-request/x-fetch.ts [library] (ecmascript)
;
const XFetch = async (baseURL, options = {})=>{
    const { fetch: fetchFn = globalThis.fetch, middlewares = {}, ...requestInit } = options;
    if (typeof fetchFn !== 'function') {
        throw new Error('The options.fetch must be a typeof fetch function!');
    }
    /** ---------------------- request init ---------------------- */ let fetchArgs = [
        baseURL,
        requestInit
    ];
    /** ---------------------- request middleware ---------------------- */ if (typeof middlewares.onRequest === 'function') {
        const modifiedFetchArgs = await middlewares.onRequest(...fetchArgs);
        fetchArgs = modifiedFetchArgs;
    }
    /** ---------------------- fetch ---------------------- */ let response = await fetchFn(...fetchArgs);
    /** ---------------------- response middleware ---------------------- */ if (typeof middlewares.onResponse === 'function') {
        const modifiedResponse = await middlewares.onResponse(response);
        if (!(modifiedResponse instanceof Response)) {
            throw new Error('The options.onResponse must return a Response instance!');
        }
        response = modifiedResponse;
    }
    /** ---------------------- response check ---------------------- */ if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}`);
    }
    if (!response.body) {
        throw new Error('The response body is empty.');
    }
    /** ---------------------- return ---------------------- */ return response;
};
const __TURBOPACK__default__export__139 = XFetch;
;
;
class XRequestClass {
    baseURL;
    model;
    defaultHeaders;
    customOptions;
    constructor(options){
        const { baseURL, model, dangerouslyApiKey, ...customOptions } = options;
        this.baseURL = options.baseURL;
        this.model = options.model;
        this.defaultHeaders = {
            'Content-Type': 'application/json',
            ...options.dangerouslyApiKey && {
                Authorization: options.dangerouslyApiKey
            }
        };
        this.customOptions = customOptions;
    }
    static init(options) {
        if (!options.baseURL || typeof options.baseURL !== 'string') throw new Error('The baseURL is not valid!');
        return new XRequestClass(options);
    }
    create = async (params, callbacks, transformStream)=>{
        const abortController = new AbortController();
        const requestInit = {
            method: 'POST',
            body: JSON.stringify({
                model: this.model,
                ...params
            }),
            headers: this.defaultHeaders,
            signal: abortController.signal
        };
        callbacks?.onStream?.(abortController);
        try {
            const response = await __TURBOPACK__default__export__139(this.baseURL, {
                fetch: this.customOptions.fetch,
                ...requestInit
            });
            if (transformStream) {
                await this.customResponseHandler(response, callbacks, transformStream);
                return;
            }
            const contentType = response.headers.get('content-type') || '';
            const mimeType = contentType.split(';')[0].trim();
            switch(mimeType){
                /** SSE */ case 'text/event-stream':
                    await this.sseResponseHandler(response, callbacks);
                    break;
                /** JSON */ case 'application/json':
                    await this.jsonResponseHandler(response, callbacks);
                    break;
                default:
                    throw new Error(`The response content-type: ${contentType} is not support!`);
            }
        } catch (error) {
            const err = error instanceof Error ? error : new Error('Unknown error!');
            callbacks?.onError?.(err);
            throw err;
        }
    };
    customResponseHandler = async (response, callbacks, transformStream)=>{
        const chunks = [];
        for await (const chunk of __TURBOPACK__default__export__138({
            readableStream: response.body,
            transformStream
        })){
            chunks.push(chunk);
            callbacks?.onUpdate?.(chunk);
        }
        callbacks?.onSuccess?.(chunks);
    };
    sseResponseHandler = async (response, callbacks)=>{
        const chunks = [];
        const stream = __TURBOPACK__default__export__138({
            readableStream: response.body
        });
        for await (const chunk of stream){
            chunks.push(chunk);
            callbacks?.onUpdate?.(chunk);
        }
        callbacks?.onSuccess?.(chunks);
    };
    jsonResponseHandler = async (response, callbacks)=>{
        const chunk = await response.json();
        callbacks?.onUpdate?.(chunk);
        callbacks?.onSuccess?.([
            chunk
        ]);
    };
}
const XRequest = XRequestClass.init;
const __TURBOPACK__default__export__140 = XRequest;
;
;
let uuid1 = 0;
class XAgent {
    config;
    requestingMap = {};
    constructor(config){
        this.config = config;
    }
    finishRequest(id) {
        delete this.requestingMap[id];
    }
    request = (info, callbacks, transformStream)=>{
        const { request } = this.config;
        const { onUpdate, onSuccess, onError, onStream } = callbacks;
        const id = uuid1;
        uuid1 += 1;
        this.requestingMap[id] = true;
        request?.(info, {
            onStream: (abortController)=>{
                if (this.requestingMap[id]) {
                    onStream?.(abortController);
                }
            },
            // Status should be unique.
            // One get success or error should not get more message
            onUpdate: (chunk)=>{
                if (this.requestingMap[id]) {
                    onUpdate(chunk);
                }
            },
            onSuccess: (chunks)=>{
                if (this.requestingMap[id]) {
                    onSuccess(chunks);
                    this.finishRequest(id);
                }
            },
            onError: (error)=>{
                if (this.requestingMap[id]) {
                    onError(error);
                    this.finishRequest(id);
                }
            }
        }, transformStream);
    };
    isRequesting() {
        return Object.keys(this.requestingMap).length > 0;
    }
}
function useXAgent(config) {
    const { request, ...restConfig } = config;
    return __TURBOPACK__imported__module__2211__86["default"].useMemo(()=>[
            new XAgent({
                request: request || __TURBOPACK__default__export__140({
                    baseURL: restConfig.baseURL,
                    model: restConfig.model,
                    dangerouslyApiKey: restConfig.dangerouslyApiKey
                }).create,
                ...restConfig
            })
        ], [
        config?.baseURL,
        config?.dangerouslyApiKey,
        config?.model
    ]);
}
var __TURBOPACK__imported__module__1096__ = __turbopack_context__.i(1096);
var __TURBOPACK__imported__module__2088__ = __turbopack_context__.i(2088);
}),
},
{"otherChunks":[],"runtimeModuleIds":[8738]},
]]);


//# sourceMappingURL=antdx.js.map