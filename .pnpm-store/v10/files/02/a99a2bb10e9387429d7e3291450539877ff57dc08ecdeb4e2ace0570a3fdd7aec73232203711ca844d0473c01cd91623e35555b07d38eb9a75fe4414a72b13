import { nanoid } from "nanoid";
import ws from "ws";
import { projectFactory } from "./project";
import { createDefineEnv, debounce, getPackPath, processIssues } from "./util";
const wsServer = new ws.Server({ noServer: true });
const sessionId = Math.floor(Number.MAX_SAFE_INTEGER * Math.random());
export const FAST_REFRESH_RUNTIME_RELOAD = "Fast Refresh had to perform a full reload due to a runtime error.";
export async function createHotReloader(bundleOptions, projectPath, rootPath) {
    var _a;
    const createProject = projectFactory();
    const project = await createProject({
        processEnv: (_a = bundleOptions.processEnv) !== null && _a !== void 0 ? _a : {},
        defineEnv: createDefineEnv({
            config: bundleOptions.config,
            dev: true,
            optionDefineEnv: bundleOptions.defineEnv,
        }),
        watch: {
            enable: true,
        },
        dev: true,
        buildId: bundleOptions.buildId || nanoid(),
        config: {
            ...bundleOptions.config,
            mode: "development",
            optimization: {
                ...bundleOptions.config.optimization,
                minify: false,
                moduleIds: "named",
            },
        },
        projectPath: projectPath || process.cwd(),
        rootPath: rootPath || projectPath || process.cwd(),
        packPath: getPackPath(),
    }, {
        persistentCaching: true,
    });
    const entrypointsSubscription = project.entrypointsSubscribe();
    let currentEntriesHandlingResolve;
    let currentEntriesHandling = new Promise((resolve) => (currentEntriesHandlingResolve = resolve));
    let hmrEventHappened = false;
    let hmrHash = 0;
    const clients = new Set();
    const clientStates = new WeakMap();
    function sendToClient(client, payload) {
        client.send(JSON.stringify(payload));
    }
    function sendEnqueuedMessages() {
        for (const client of clients) {
            const state = clientStates.get(client);
            if (!state) {
                continue;
            }
            for (const payload of state.hmrPayloads.values()) {
                sendToClient(client, payload);
            }
            state.hmrPayloads.clear();
            if (state.turbopackUpdates.length > 0) {
                sendToClient(client, {
                    action: "turbopack-message" /* HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_MESSAGE */,
                    data: state.turbopackUpdates,
                });
                state.turbopackUpdates.length = 0;
            }
        }
    }
    const sendEnqueuedMessagesDebounce = debounce(sendEnqueuedMessages, 2);
    function sendTurbopackMessage(payload) {
        var _a;
        payload.diagnostics = [];
        payload.issues = [];
        for (const client of clients) {
            (_a = clientStates.get(client)) === null || _a === void 0 ? void 0 : _a.turbopackUpdates.push(payload);
        }
        hmrEventHappened = true;
        sendEnqueuedMessagesDebounce();
    }
    async function subscribeToHmrEvents(client, id) {
        const state = clientStates.get(client);
        if (!state || state.subscriptions.has(id)) {
            return;
        }
        const subscription = project.hmrEvents(id);
        state.subscriptions.set(id, subscription);
        // The subscription will always emit once, which is the initial
        // computation. This is not a change, so swallow it.
        try {
            await subscription.next();
            for await (const data of subscription) {
                processIssues(data, true, true);
                if (data.type !== "issues") {
                    sendTurbopackMessage(data);
                }
            }
        }
        catch (e) {
            // The client might be using an HMR session from a previous server, tell them
            // to fully reload the page to resolve the issue. We can't use
            // `hotReloader.send` since that would force every connected client to
            // reload, only this client is out of date.
            const reloadAction = {
                action: "reload" /* HMR_ACTIONS_SENT_TO_BROWSER.RELOAD */,
                data: `error in HMR event subscription for ${id}: ${e}`,
            };
            sendToClient(client, reloadAction);
            client.close();
            return;
        }
    }
    function unsubscribeFromHmrEvents(client, id) {
        const state = clientStates.get(client);
        if (!state) {
            return;
        }
        const subscription = state.subscriptions.get(id);
        subscription === null || subscription === void 0 ? void 0 : subscription.return();
    }
    async function handleEntrypointsSubscription() {
        for await (const entrypoints of entrypointsSubscription) {
            if (!currentEntriesHandlingResolve) {
                currentEntriesHandling = new Promise(
                // eslint-disable-next-line no-loop-func
                (resolve) => (currentEntriesHandlingResolve = resolve));
            }
            await Promise.all(entrypoints.apps.map((l) => l.writeToDisk().then((res) => processIssues(res, true, true))));
            currentEntriesHandlingResolve();
            currentEntriesHandlingResolve = undefined;
        }
    }
    const hotReloader = {
        turbopackProject: project,
        serverStats: null,
        onHMR(req, socket, head, onUpgrade) {
            wsServer.handleUpgrade(req, socket, head, (client) => {
                onUpgrade === null || onUpgrade === void 0 ? void 0 : onUpgrade(client);
                const subscriptions = new Map();
                clients.add(client);
                clientStates.set(client, {
                    hmrPayloads: new Map(),
                    turbopackUpdates: [],
                    subscriptions,
                });
                client.on("close", () => {
                    var _a;
                    // Remove active subscriptions
                    for (const subscription of subscriptions.values()) {
                        (_a = subscription.return) === null || _a === void 0 ? void 0 : _a.call(subscription);
                    }
                    clientStates.delete(client);
                    clients.delete(client);
                });
                client.addEventListener("message", ({ data }) => {
                    const parsedData = JSON.parse(typeof data !== "string" ? data.toString() : data);
                    // messages
                    switch (parsedData.event) {
                        case "client-error": // { errorCount, clientId }
                        case "client-warning": // { warningCount, clientId }
                        case "client-success": // { clientId }
                        case "client-full-reload": // { stackTrace, hadRuntimeError }
                            const { hadRuntimeError, dependencyChain } = parsedData;
                            if (hadRuntimeError) {
                                console.warn(FAST_REFRESH_RUNTIME_RELOAD);
                            }
                            if (Array.isArray(dependencyChain) &&
                                typeof dependencyChain[0] === "string") {
                                const cleanedModulePath = dependencyChain[0]
                                    .replace(/^\[project\]/, ".")
                                    .replace(/ \[.*\] \(.*\)$/, "");
                                console.warn(`Fast Refresh had to perform a full reload when ${cleanedModulePath} changed.`);
                            }
                            break;
                        default:
                            // Might be a Turbopack message...
                            if (!parsedData.type) {
                                throw new Error(`unrecognized HMR message "${data}"`);
                            }
                    }
                    // Turbopack messages
                    switch (parsedData.type) {
                        case "turbopack-subscribe":
                            subscribeToHmrEvents(client, parsedData.path);
                            break;
                        case "turbopack-unsubscribe":
                            unsubscribeFromHmrEvents(client, parsedData.path);
                            break;
                        default:
                            if (!parsedData.event) {
                                throw new Error(`unrecognized Turbopack HMR message "${data}"`);
                            }
                    }
                });
                const turbopackConnected = {
                    action: "turbopack-connected" /* HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_CONNECTED */,
                    data: { sessionId },
                };
                sendToClient(client, turbopackConnected);
                const errors = [];
                (async function () {
                    const sync = {
                        action: "sync" /* HMR_ACTIONS_SENT_TO_BROWSER.SYNC */,
                        errors,
                        warnings: [],
                        hash: "",
                    };
                    sendToClient(client, sync);
                })();
            });
        },
        send(action) {
            const payload = JSON.stringify(action);
            for (const client of clients) {
                client.send(payload);
            }
        },
        setHmrServerError(_error) {
            // Not implemented yet.
        },
        clearHmrServerError() {
            // Not implemented yet.
        },
        async start() { },
        async buildFallbackError() {
            // Not implemented yet.
        },
        close() {
            for (const wsClient of clients) {
                // it's okay to not cleanly close these websocket connections, this is dev
                wsClient.terminate();
            }
            clients.clear();
        },
    };
    handleEntrypointsSubscription().catch((err) => {
        console.error(err);
        process.exit(1);
    });
    // Write empty manifests
    await currentEntriesHandling;
    async function handleProjectUpdates() {
        for await (const updateMessage of project.updateInfoSubscribe(30)) {
            switch (updateMessage.updateType) {
                case "start": {
                    hotReloader.send({ action: "building" /* HMR_ACTIONS_SENT_TO_BROWSER.BUILDING */ });
                    break;
                }
                case "end": {
                    sendEnqueuedMessages();
                    const errors = new Map();
                    for (const client of clients) {
                        const state = clientStates.get(client);
                        if (!state) {
                            continue;
                        }
                        const clientErrors = new Map(errors);
                        sendToClient(client, {
                            action: "built" /* HMR_ACTIONS_SENT_TO_BROWSER.BUILT */,
                            hash: String(++hmrHash),
                            errors: [...clientErrors.values()],
                            warnings: [],
                        });
                    }
                    if (hmrEventHappened) {
                        const time = updateMessage.value.duration;
                        const timeMessage = time > 2000 ? `${Math.round(time / 100) / 10}s` : `${time}ms`;
                        console.log(`Compiled in ${timeMessage}`);
                        hmrEventHappened = false;
                    }
                    break;
                }
                default:
            }
        }
    }
    handleProjectUpdates().catch((err) => {
        console.error(err);
        process.exit(1);
    });
    return hotReloader;
}
