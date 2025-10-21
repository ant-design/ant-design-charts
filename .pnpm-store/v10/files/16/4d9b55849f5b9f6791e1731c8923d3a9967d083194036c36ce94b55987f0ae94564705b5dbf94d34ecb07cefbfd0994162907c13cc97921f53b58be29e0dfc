import fs from "fs";
import http from "http";
import https from "https";
import { isIPv6 } from "net";
import path from "path";
import send from "send";
import url from "url";
import { findRootDir } from "./find-root";
import { createHotReloader } from "./hmr";
import { createSelfSignedCertificate } from "./mkcert";
import { blockStdout, getPackPath } from "./util";
import { compatOptionsFromWebpack } from "./webpackCompat";
import { xcodeProfilingReady } from "./xcodeProfile";
export function serve(options, projectPath, rootPath, serverOptions) {
    const bundleOptions = options.compatMode
        ? compatOptionsFromWebpack(options)
        : options;
    if (!rootPath) {
        // help user to find the rootDir automatically
        rootPath = findRootDir(projectPath || process.cwd());
    }
    return serveInternal(bundleOptions, projectPath, rootPath, serverOptions);
}
async function serveInternal(options, projectPath, rootPath, serverOptions) {
    blockStdout();
    if (process.env.XCODE_PROFILE) {
        await xcodeProfilingReady();
    }
    await startServer({
        hostname: (serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.hostname) || "localhost",
        port: (serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.port) || 3000,
        https: serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.https,
        selfSignedCertificate: (serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.https)
            ? await createSelfSignedCertificate((serverOptions === null || serverOptions === void 0 ? void 0 : serverOptions.hostname) || "localhost")
            : undefined,
    }, {
        ...options,
        packPath: getPackPath(),
    }, projectPath || process.cwd(), rootPath);
}
export async function startServer(serverOptions, bundleOptions, projectPath, rootPath) {
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
        ? https.createServer({
            key: fs.readFileSync(selfSignedCertificate.key),
            cert: fs.readFileSync(selfSignedCertificate.cert),
        }, requestListener)
        : http.createServer(requestListener);
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
export async function initialize(bundleOptions, projectPath, rootPath) {
    process.env.NODE_ENV = "development";
    const hotReloader = await createHotReloader(bundleOptions, projectPath, rootPath);
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
            const distRoot = path.resolve(projectPath, ((_a = bundleOptions.config.output) === null || _a === void 0 ? void 0 : _a.path) || "./dist");
            try {
                const reqUrl = req.url || "";
                const path = url.parse(reqUrl).pathname || "";
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
export async function pipeToNodeResponse(readable, res, waitUntilForEnd) {
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
export function createAbortController(response) {
    const controller = new AbortController();
    response.once("close", () => {
        if (response.writableFinished)
            return;
        controller.abort(new ResponseAborted());
    });
    return controller;
}
export function isAbortError(e) {
    return (e === null || e === void 0 ? void 0 : e.name) === "AbortError" || (e === null || e === void 0 ? void 0 : e.name) === ResponseAbortedName;
}
export const ResponseAbortedName = "ResponseAborted";
export class ResponseAborted extends Error {
    constructor() {
        super(...arguments);
        this.name = ResponseAbortedName;
    }
}
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
export class DetachedPromise {
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
export function serveStatic(req, res, path, opts) {
    return new Promise((resolve, reject) => {
        send(req, path, opts)
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
export function formatHostname(hostname) {
    return isIPv6(hostname) ? `[${hostname}]` : hostname;
}
