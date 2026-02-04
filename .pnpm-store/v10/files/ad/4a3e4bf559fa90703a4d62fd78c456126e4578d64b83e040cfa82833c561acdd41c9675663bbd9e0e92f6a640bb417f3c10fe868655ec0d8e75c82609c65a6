import * as binding from "../binding";
import { rustifyEnv } from "../utils/common";
import { runLoaderWorkerPool } from "./loaderWorkerPool";
export class TurbopackInternalError extends Error {
    constructor(cause) {
        super(cause.message);
        this.name = "TurbopackInternalError";
        this.stack = cause.stack;
    }
}
async function withErrorCause(fn) {
    try {
        return await fn();
    }
    catch (nativeError) {
        throw new TurbopackInternalError(nativeError);
    }
}
async function serializeConfig(config) {
    const configSerializable = { ...config };
    if (configSerializable.entry) {
        configSerializable.entry = configSerializable.entry.map((entry) => {
            const { html, ...rest } = entry;
            return rest;
        });
    }
    if (configSerializable.optimization) {
        configSerializable.optimization = { ...configSerializable.optimization };
        const { modularizeImports } = configSerializable.optimization;
        if (modularizeImports) {
            configSerializable.optimization.modularizeImports = Object.fromEntries(Object.entries(modularizeImports).map(([mod, config]) => [
                mod,
                {
                    ...config,
                    transform: typeof config.transform === "string"
                        ? config.transform
                        : Object.entries(config.transform).map(([key, value]) => [
                            key,
                            value,
                        ]),
                },
            ]));
        }
    }
    return JSON.stringify(configSerializable, null, 2);
}
async function rustifyPartialProjectOptions(options) {
    return {
        ...options,
        config: options.config && (await serializeConfig(options.config)),
        processEnv: options.processEnv && rustifyEnv(options.processEnv),
    };
}
async function rustifyProjectOptions(options) {
    var _a;
    return {
        ...options,
        config: await serializeConfig(options.config),
        processEnv: rustifyEnv((_a = options.processEnv) !== null && _a !== void 0 ? _a : {}),
    };
}
export function projectFactory() {
    const cancel = new (class Cancel extends Error {
    })();
    function subscribe(useBuffer, nativeFunction) {
        // A buffer of produced items. This will only contain values if the
        // consumer is slower than the producer.
        let buffer = [];
        // A deferred value waiting for the next produced item. This will only
        // exist if the consumer is faster than the producer.
        let waiting;
        let canceled = false;
        // The native function will call this every time it emits a new result. We
        // either need to notify a waiting consumer, or buffer the new result until
        // the consumer catches up.
        function emitResult(err, value) {
            if (waiting) {
                let { resolve, reject } = waiting;
                waiting = undefined;
                if (err)
                    reject(err);
                else
                    resolve(value);
            }
            else {
                const item = { err, value };
                if (useBuffer)
                    buffer.push(item);
                else
                    buffer[0] = item;
            }
        }
        async function* createIterator() {
            const task = await withErrorCause(() => nativeFunction(emitResult));
            try {
                while (!canceled) {
                    if (buffer.length > 0) {
                        const item = buffer.shift();
                        if (item.err)
                            throw item.err;
                        yield item.value;
                    }
                    else {
                        // eslint-disable-next-line no-loop-func
                        yield new Promise((resolve, reject) => {
                            waiting = { resolve, reject };
                        });
                    }
                }
            }
            catch (e) {
                if (e === cancel)
                    return;
                if (e instanceof Error) {
                    throw new TurbopackInternalError(e);
                }
                throw e;
            }
            finally {
                if (task) {
                    binding.rootTaskDispose(task);
                }
            }
        }
        const iterator = createIterator();
        iterator.return = async () => {
            canceled = true;
            if (waiting)
                waiting.reject(cancel);
            return { value: undefined, done: true };
        };
        return iterator;
    }
    class ProjectImpl {
        constructor(nativeProject) {
            this._nativeProject = nativeProject;
            if (typeof binding.registerWorkerScheduler === "function") {
                runLoaderWorkerPool(binding, require.resolve("@utoo/pack/cjs/binding.js"));
            }
        }
        async update(options) {
            await withErrorCause(async () => binding.projectUpdate(this._nativeProject, await rustifyPartialProjectOptions(options)));
        }
        async writeAllEntrypointsToDisk() {
            return await withErrorCause(async () => {
                const napiEndpoints = (await binding.projectWriteAllEntrypointsToDisk(this._nativeProject));
                return napiEntrypointsToRawEntrypoints(napiEndpoints);
            });
        }
        entrypointsSubscribe() {
            const subscription = subscribe(false, async (callback) => binding.projectEntrypointsSubscribe(this._nativeProject, callback));
            return (async function* () {
                for await (const entrypoints of subscription) {
                    yield napiEntrypointsToRawEntrypoints(entrypoints);
                }
            })();
        }
        hmrEvents(identifier) {
            return subscribe(true, async (callback) => binding.projectHmrEvents(this._nativeProject, identifier, callback));
        }
        hmrIdentifiersSubscribe() {
            return subscribe(false, async (callback) => binding.projectHmrIdentifiersSubscribe(this._nativeProject, callback));
        }
        traceSource(stackFrame, currentDirectoryFileUrl) {
            return binding.projectTraceSource(this._nativeProject, stackFrame, currentDirectoryFileUrl);
        }
        getSourceForAsset(filePath) {
            return binding.projectGetSourceForAsset(this._nativeProject, filePath);
        }
        getSourceMap(filePath) {
            return binding.projectGetSourceMap(this._nativeProject, filePath);
        }
        getSourceMapSync(filePath) {
            return binding.projectGetSourceMapSync(this._nativeProject, filePath);
        }
        updateInfoSubscribe(aggregationMs) {
            return subscribe(true, async (callback) => binding.projectUpdateInfoSubscribe(this._nativeProject, aggregationMs, callback));
        }
        shutdown() {
            return binding.projectShutdown(this._nativeProject);
        }
        onExit() {
            return binding.projectOnExit(this._nativeProject);
        }
    }
    class EndpointImpl {
        constructor(nativeEndpoint) {
            this._nativeEndpoint = nativeEndpoint;
        }
        async writeToDisk() {
            return await withErrorCause(() => binding.endpointWriteToDisk(this._nativeEndpoint));
        }
        async clientChanged() {
            const clientSubscription = subscribe(false, async (callback) => binding.endpointClientChangedSubscribe(await this._nativeEndpoint, callback));
            await clientSubscription.next();
            return clientSubscription;
        }
        async serverChanged(includeIssues) {
            const serverSubscription = subscribe(false, async (callback) => binding.endpointServerChangedSubscribe(await this._nativeEndpoint, includeIssues, callback));
            await serverSubscription.next();
            return serverSubscription;
        }
    }
    function napiEntrypointsToRawEntrypoints(entrypoints) {
        return {
            apps: (entrypoints.apps || []).map((e) => new EndpointImpl(e)),
            libraries: (entrypoints.libraries || []).map((e) => new EndpointImpl(e)),
            issues: entrypoints.issues,
            diagnostics: entrypoints.diagnostics,
        };
    }
    return async function createProject(options, turboEngineOptions) {
        return new ProjectImpl(await binding.projectNew(await rustifyProjectOptions(options), turboEngineOptions || {}));
    };
}
