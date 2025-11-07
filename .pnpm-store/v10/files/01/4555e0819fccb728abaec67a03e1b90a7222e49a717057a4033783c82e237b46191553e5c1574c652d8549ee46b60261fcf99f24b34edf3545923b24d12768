"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleBuildError = void 0;
exports.processIssues = processIssues;
exports.isWellKnownError = isWellKnownError;
exports.rustifyEnv = rustifyEnv;
exports.createDefineEnv = createDefineEnv;
exports.debounce = debounce;
exports.blockStdout = blockStdout;
exports.getPackPath = getPackPath;
const pack_shared_1 = require("@utoo/pack-shared");
const path_1 = __importDefault(require("path"));
class ModuleBuildError extends Error {
    constructor() {
        super(...arguments);
        this.name = "ModuleBuildError";
    }
}
exports.ModuleBuildError = ModuleBuildError;
function processIssues(result, throwIssue, logErrors) {
    const relevantIssues = new Set();
    for (const issue of result.issues) {
        if (issue.severity !== "error" &&
            issue.severity !== "fatal" &&
            issue.severity !== "warning")
            continue;
        if (issue.severity !== "warning") {
            if (throwIssue) {
                const formatted = (0, pack_shared_1.formatIssue)(issue);
                relevantIssues.add(formatted);
            }
            // if we throw the issue it will most likely get handed and logged elsewhere
            else if (logErrors && isWellKnownError(issue)) {
                const formatted = (0, pack_shared_1.formatIssue)(issue);
                console.error(formatted);
            }
        }
    }
    if (relevantIssues.size && throwIssue) {
        throw new ModuleBuildError([...relevantIssues].join("\n\n"));
    }
}
function isWellKnownError(issue) {
    const { title } = issue;
    const formattedTitle = (0, pack_shared_1.renderStyledStringToErrorAnsi)(title);
    // TODO: add more well known errors
    if (formattedTitle.includes("Module not found") ||
        formattedTitle.includes("Unknown module type")) {
        return true;
    }
    return false;
}
function rustifyEnv(env) {
    return Object.entries(env)
        .filter(([_, value]) => value != null)
        .map(([name, value]) => ({
        name,
        value,
    }));
}
function createDefineEnv(options) {
    var _a;
    let defineEnv = (_a = options.optionDefineEnv) !== null && _a !== void 0 ? _a : {
        client: [],
        edge: [],
        nodejs: [],
    };
    function getDefineEnv() {
        var _a;
        const envs = {
            "process.env.NODE_ENV": options.dev ? "development" : "production",
        };
        const userDefines = (_a = options.config.define) !== null && _a !== void 0 ? _a : {};
        for (const key in userDefines) {
            envs[key] = userDefines[key];
        }
        // serialize
        const defineEnvStringified = {};
        for (const key in defineEnv) {
            const value = envs[key];
            defineEnvStringified[key] = JSON.stringify(value);
        }
        return defineEnvStringified;
    }
    // TODO: future define envs need to extends for more compiler like server or edge.
    for (const variant of Object.keys(defineEnv)) {
        defineEnv[variant] = rustifyEnv(getDefineEnv());
    }
    return defineEnv;
}
function debounce(fn, ms, maxWait = Infinity) {
    let timeoutId;
    // The time the debouncing function was first called during this debounce queue.
    let startTime = 0;
    // The time the debouncing function was last called.
    let lastCall = 0;
    // The arguments and this context of the last call to the debouncing function.
    let args, context;
    // A helper used to that either invokes the debounced function, or
    // reschedules the timer if a more recent call was made.
    function run() {
        const now = Date.now();
        const diff = lastCall + ms - now;
        // If the diff is non-positive, then we've waited at least `ms`
        // milliseconds since the last call. Or if we've waited for longer than the
        // max wait time, we must call the debounced function.
        if (diff <= 0 || startTime + maxWait >= now) {
            // It's important to clear the timeout id before invoking the debounced
            // function, in case the function calls the debouncing function again.
            timeoutId = undefined;
            fn.apply(context, args);
        }
        else {
            // Else, a new call was made after the original timer was scheduled. We
            // didn't clear the timeout (doing so is very slow), so now we need to
            // reschedule the timer for the time difference.
            timeoutId = setTimeout(run, diff);
        }
    }
    return function (...passedArgs) {
        // The arguments and this context of the most recent call are saved so the
        // debounced function can be invoked with them later.
        args = passedArgs;
        context = this;
        // Instead of constantly clearing and scheduling a timer, we record the
        // time of the last call. If a second call comes in before the timer fires,
        // then we'll reschedule in the run function. Doing this is considerably
        // faster.
        lastCall = Date.now();
        // Only schedule a new timer if we're not currently waiting.
        if (timeoutId === undefined) {
            startTime = lastCall;
            timeoutId = setTimeout(run, ms);
        }
    };
}
// ref:
// https://github.com/vercel/next.js/pull/51883
function blockStdout() {
    // rust needs stdout to be blocking, otherwise it will throw an error (on macOS at least) when writing a lot of data (logs) to it
    // see https://github.com/napi-rs/napi-rs/issues/1630
    // and https://github.com/nodejs/node/blob/main/doc/api/process.md#a-note-on-process-io
    if (process.stdout._handle != null) {
        process.stdout._handle.setBlocking(true);
    }
    if (process.stderr._handle != null) {
        process.stderr._handle.setBlocking(true);
    }
}
function getPackPath() {
    return path_1.default.resolve(__dirname, "..");
}
