"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetachedPromise = exports.ResponseAborted = exports.ResponseAbortedName = void 0;
exports.serve = serve;
exports.startServer = startServer;
exports.initialize = initialize;
exports.pipeToNodeResponse = pipeToNodeResponse;
exports.createAbortController = createAbortController;
exports.isAbortError = isAbortError;
exports.serveStatic = serveStatic;
exports.formatHostname = formatHostname;
const fs_1 = __importDefault(require("fs"));
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const net_1 = require("net");
const path_1 = __importDefault(require("path"));
const send_1 = __importDefault(require("send"));
const url_1 = __importDefault(require("url"));
const find_root_1 = require("./find-root");
const hmr_1 = require("./hmr");
const mkcert_1 = require("./mkcert");
const util_1 = require("./util");
const webpackCompat_1 = require("./webpackCompat");
const xcodeProfile_1 = require("./xcodeProfile");
function serve(options, projectPath, rootPath, serverOptions) {
    const bundleOptions = options.compatMode
        ? (0, webpackCompat_1.compatOptionsFromWebpack)(options)
        : options;
    if (!rootPath) {
        // help user to find the rootDir automatically
        rootPath = (0, find_root_1.findRootDir)(projectPath || process.cwd());
    }
    return serveInternal(bundleOptions, projectPath, rootPath, serverOptions);
}
async function serveInternal(options, projectPath, rootPath, serverOptions) {
    (0, util_1.blockStdout)();
    if (process.env.XCODE_PROFILE) {
        await (0, xcodeProfile_1.xcodeProfilingReady)();
    }
    await startServer({
        hostname: (serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.hostname) || "localhost",
        port: (serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.port) || 3000,
        https: serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.https,
        selfSignedCertificate: (serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.https)
            ? await (0, mkcert_1.createSelfSignedCertificate)((serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.hostname) || "localhost")
            : undefined,
    }, {
        ...options,
        packPath: (0, util_1.getPackPath)(),
    }, projectPath || process.cwd(), rootPath);
}
async function startServer(serverOptions, bundleOptions, projectPath, rootPath) {
    let { port, hostname, selfSignedCertificate } = serverOptions;
    process.title = "utoo-pack-dev-server";
    let handlersReady = () => { };
    let handlersError = () => { };
    let handlersPromise = new Promise((resolve, reject) => {
        handlersReady = resolve;
        handlersError = reject;
    });
    let requestHandler = async (req, res) => {
        if (handlersPromise) {
            await handlersPromise;
            return requestHandler(req, res);
        }
        throw new Error("Invariant request handler was not setup");
    };
    let upgradeHandler = async (req, socket, head) => {
        if (handlersPromise) {
            await handlersPromise;
            return upgradeHandler(req, socket, head);
        }
        throw new Error("Invariant upgrade handler was not setup");
    };
    async function requestListener(req, res) {
        try {
            if (handlersPromise) {
                await handlersPromise;
                handlersPromise = undefined;
            }
            await requestHandler(req, res);
        }
        catch (err) {
            res.statusCode = 500;
            res.end("Internal Server Error");
            console.error(`Failed to handle request for ${req.url}`);
            console.error(err);
        }
    }
    const server = selfSignedCertificate
        ? https_1.default.createServer({
            key: fs_1.default.readFileSync(selfSignedCertificate.key),
            cert: fs_1.default.readFileSync(selfSignedCertificate.cert),
        }, requestListener)
        : http_1.default.createServer(requestListener);
    server.on("upgrade", async (req, socket, head) => {
        try {
            await upgradeHandler(req, socket, head);
        }
        catch (err) {
            socket.destroy();
            console.error(`Failed to handle request for ${req.url}`);
            console.error(err);
        }
    });
    let portRetryCount = 0;
    const originalPort = port;
    server.on("error", (err) => {
        if (port && err.code === "EADDRINUSE" && portRetryCount < 10) {
            port += 1;
            portRetryCount += 1;
            server.listen(port, hostname);
        }
        else {
            console.error(`Failed to start server`);
            console.error(err);
            process.exit(1);
        }
    });
    await new Promise((resolve) => {
        server.on("listening", async () => {
            const addr = server.address();
            const actualHostname = formatHostname(typeof addr === "object"
                ? (addr === null || addr === void 0 ? void 0 : addr.address) || hostname || "localhost"
                : addr);
            const formattedHostname = !hostname || actualHostname === "0.0.0.0"
                ? "localhost"
                : actualHostname === "[::]"
                    ? "[::1]"
                    : formatHostname(hostname);
            port = typeof addr === "object" ? (addr === null || addr === void 0 ? void 0 : addr.port) || port : port;
            if (portRetryCount) {
                console.warn(`Port ${originalPort} is in use, using available port ${port} instead.`);
            }
            if (process.env.TURBOPACK_DEBUG_JS) {
                console.log(`Listening on ${serverOptions.https ? "https" : "http"}://${formattedHostname}:${port} ...`);
            }
            try {
                let cleanupStarted = false;
                let closeUpgraded = null;
                const cleanup = () => {
                    if (cleanupStarted) {
                        return;
                    }
                    cleanupStarted = true;
                    (async () => {
                        console.debug("start-server process cleanup");
                        await new Promise((res) => {
                            server.close((err) => {
                                if (err)
                                    console.error(err);
                                res();
                            });
                            server.closeAllConnections();
                            closeUpgraded === null || closeUpgraded === void 0 ? void 0 : closeUpgraded();
                        });
                        console.debug("start-server process cleanup finished");
                        process.exit(0);
                    })();
                };
                const exception = (err) => {
                    console.error(err);
                };
                process.on("SIGINT", cleanup);
                process.on("SIGTERM", cleanup);
                process.on("rejectionHandled", () => { });
                process.on("uncaughtException", exception);
                process.on("unhandledRejection", exception);
                const initResult = await initialize(bundleOptions, projectPath, rootPath);
                requestHandler = initResult.requestHandler;
                upgradeHandler = initResult.upgradeHandler;
                closeUpgraded = initResult.closeUpgraded;
                handlersReady();
            }
            catch (err) {
                handlersError();
                console.error(err);
                process.exit(1);
            }
            resolve();
        });
        server.listen(port, hostname);
    });
}
async function initialize(bundleOptions, projectPath, rootPath) {
    process.env.NODE_ENV = "development";
    const hotReloader = await (0, hmr_1.createHotReloader)(bundleOptions, projectPath, rootPath);
    await hotReloader.start();
    const requestHandlerImpl = async (req, res) => {
        req.on("error", console.error);
        res.on("error", console.error);
        const handleRequest = async () => {
            var _a;
            if (!(req.method === "GET" || req.method === "HEAD")) {
                res.setHeader("Allow", ["GET", "HEAD"]);
                res.statusCode = 405;
                res.end();
            }
            const distRoot = path_1.default.resolve(projectPath, ((_a = bundleOptions.config.output) === null || _a === void 0 ? void 0 : _a.path) || "./dist");
            try {
                const reqUrl = req.url || "";
                const path = url_1.default.parse(reqUrl).pathname || "";
                return await serveStatic(req, res, path, { root: distRoot });
            }
            catch (err) {
                res.setHeader("Cache-Control", "private, no-cache, no-store, max-age=0, must-revalidate");
                res.statusCode = 404;
                res.end();
            }
        };
        try {
            await handleRequest();
        }
        catch (err) {
            res.statusCode = 500;
            res.end("Internal Server Error");
        }
    };
    let requestHandler = requestHandlerImpl;
    const logError = async (type, err) => {
        if (type === "unhandledRejection") {
            console.error("unhandledRejection: ", err);
        }
        else if (type === "uncaughtException") {
            console.error("uncaughtException: ", err);
        }
    };
    process.on("uncaughtException", logError.bind(null, "uncaughtException"));
    process.on("unhandledRejection", logError.bind(null, "unhandledRejection"));
    const upgradeHandler = async (req, socket, head) => {
        var _a;
        try {
            const isHMRRequest = (_a = req.url) === null || _a === void 0 ? void 0 : _a.includes("turbopack-hmr");
            if (isHMRRequest) {
                hotReloader.onHMR(req, socket, head);
            }
            else {
                socket.end();
            }
        }
        catch (err) {
            console.error("Error handling upgrade request", err);
            socket.end();
        }
    };
    return {
        requestHandler,
        upgradeHandler,
        closeUpgraded() {
            hotReloader.close();
        },
    };
}
async function pipeToNodeResponse(readable, res, waitUntilForEnd) {
    try {
        const { errored, destroyed } = res;
        if (errored || destroyed)
            return;
        const controller = createAbortController(res);
        const writer = createWriterFromResponse(res, waitUntilForEnd);
        await readable.pipeTo(writer, { signal: controller.signal });
    }
    catch (err) {
        if (isAbortError(err))
            return;
        throw new Error("failed to pipe response", { cause: err });
    }
}
function createAbortController(response) {
    const controller = new AbortController();
    response.once("close", () => {
        if (response.writableFinished)
            return;
        controller.abort(new ResponseAborted());
    });
    return controller;
}
function isAbortError(e) {
    return (e === null || e === void 0 ? void 0 : e.name) === "AbortError" || (e === null || e === void 0 ? void 0 : e.name) === exports.ResponseAbortedName;
}
exports.ResponseAbortedName = "ResponseAborted";
class ResponseAborted extends Error {
    constructor() {
        super(...arguments);
        this.name = exports.ResponseAbortedName;
    }
}
exports.ResponseAborted = ResponseAborted;
function createWriterFromResponse(res, waitUntilForEnd) {
    let started = false;
    let drained = new DetachedPromise();
    function onDrain() {
        drained.resolve();
    }
    res.on("drain", onDrain);
    res.once("close", () => {
        res.off("drain", onDrain);
        drained.resolve();
    });
    const finished = new DetachedPromise();
    res.once("finish", () => {
        finished.resolve();
    });
    return new WritableStream({
        write: async (chunk) => {
            if (!started) {
                started = true;
                res.flushHeaders();
            }
            try {
                const ok = res.write(chunk);
                if ("flush" in res && typeof res.flush === "function") {
                    res.flush();
                }
                if (!ok) {
                    await drained.promise;
                    drained = new DetachedPromise();
                }
            }
            catch (err) {
                res.end();
                throw new Error("failed to write chunk to response", { cause: err });
            }
        },
        abort: (err) => {
            if (res.writableFinished)
                return;
            res.destroy(err);
        },
        close: async () => {
            if (waitUntilForEnd) {
                await waitUntilForEnd;
            }
            if (res.writableFinished)
                return;
            res.end();
            return finished.promise;
        },
    });
}
class DetachedPromise {
    constructor() {
        let resolve;
        let reject;
        this.promise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });
        this.resolve = resolve;
        this.reject = reject;
    }
}
exports.DetachedPromise = DetachedPromise;
function serveStatic(req, res, path, opts) {
    return new Promise((resolve, reject) => {
        (0, send_1.default)(req, path, opts)
            .on("directory", () => {
            const err = new Error("No directory access");
            err.code = "ENOENT";
            reject(err);
        })
            .on("error", reject)
            .pipe(res)
            .on("finish", resolve);
    });
}
function formatHostname(hostname) {
    return (0, net_1.isIPv6)(hostname) ? `[${hostname}]` : hostname;
}
