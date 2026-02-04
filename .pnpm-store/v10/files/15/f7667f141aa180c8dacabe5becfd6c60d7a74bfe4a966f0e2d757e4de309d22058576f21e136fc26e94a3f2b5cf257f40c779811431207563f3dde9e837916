"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSelfSignedCertificate = createSelfSignedCertificate;
exports.getCacheDirectory = getCacheDirectory;
const node_child_process_1 = require("node:child_process");
const node_crypto_1 = require("node:crypto");
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const os_1 = __importDefault(require("os"));
const { WritableStream } = require("node:stream/web");
const MKCERT_VERSION = "v1.4.4";
function getBinaryName() {
    const platform = process.platform;
    const arch = process.arch === "x64" ? "amd64" : process.arch;
    if (platform === "win32") {
        return `mkcert-${MKCERT_VERSION}-windows-${arch}.exe`;
    }
    if (platform === "darwin") {
        return `mkcert-${MKCERT_VERSION}-darwin-${arch}`;
    }
    if (platform === "linux") {
        return `mkcert-${MKCERT_VERSION}-linux-${arch}`;
    }
    throw new Error(`Unsupported platform: ${platform}`);
}
async function downloadBinary() {
    try {
        const binaryName = getBinaryName();
        const cacheDirectory = getCacheDirectory("mkcert");
        const binaryPath = node_path_1.default.join(cacheDirectory, binaryName);
        if (node_fs_1.default.existsSync(binaryPath)) {
            return binaryPath;
        }
        const downloadUrl = `https://github.com/FiloSottile/mkcert/releases/download/${MKCERT_VERSION}/${binaryName}`;
        await node_fs_1.default.promises.mkdir(cacheDirectory, { recursive: true });
        console.log(`Downloading mkcert package...`);
        const response = await fetch(downloadUrl);
        if (!response.ok || !response.body) {
            throw new Error(`request failed with status ${response.status}`);
        }
        console.log(`Download response was successful, writing to disk`);
        const binaryWriteStream = node_fs_1.default.createWriteStream(binaryPath);
        await response.body.pipeTo(new WritableStream({
            write(chunk) {
                return new Promise((resolve, reject) => {
                    binaryWriteStream.write(chunk, (error) => {
                        if (error) {
                            reject(error);
                            return;
                        }
                        resolve();
                    });
                });
            },
            close() {
                return new Promise((resolve, reject) => {
                    binaryWriteStream.close((error) => {
                        if (error) {
                            reject(error);
                            return;
                        }
                        resolve();
                    });
                });
            },
        }));
        await node_fs_1.default.promises.chmod(binaryPath, 0o755);
        return binaryPath;
    }
    catch (err) {
        console.error("Error downloading mkcert:", err);
    }
}
async function createSelfSignedCertificate(host, certDir = "certificates") {
    try {
        const binaryPath = await downloadBinary();
        if (!binaryPath)
            throw new Error("missing mkcert binary");
        const resolvedCertDir = node_path_1.default.resolve(process.cwd(), `./${certDir}`);
        await node_fs_1.default.promises.mkdir(resolvedCertDir, {
            recursive: true,
        });
        const keyPath = node_path_1.default.resolve(resolvedCertDir, "localhost-key.pem");
        const certPath = node_path_1.default.resolve(resolvedCertDir, "localhost.pem");
        if (node_fs_1.default.existsSync(keyPath) && node_fs_1.default.existsSync(certPath)) {
            const cert = new node_crypto_1.X509Certificate(node_fs_1.default.readFileSync(certPath));
            const key = node_fs_1.default.readFileSync(keyPath);
            if (cert.checkHost(host !== null && host !== void 0 ? host : "localhost") &&
                cert.checkPrivateKey((0, node_crypto_1.createPrivateKey)(key))) {
                console.log("Using already generated self signed certificate");
                const caLocation = (0, node_child_process_1.execSync)(`"${binaryPath}" -CAROOT`)
                    .toString()
                    .trim();
                return {
                    key: keyPath,
                    cert: certPath,
                    rootCA: `${caLocation}/rootCA.pem`,
                };
            }
        }
        console.log("Attempting to generate self signed certificate. This may prompt for your password");
        const defaultHosts = ["localhost", "127.0.0.1", "::1"];
        const hosts = host && !defaultHosts.includes(host)
            ? [...defaultHosts, host]
            : defaultHosts;
        (0, node_child_process_1.execSync)(`"${binaryPath}" -install -key-file "${keyPath}" -cert-file "${certPath}" ${hosts.join(" ")}`, { stdio: "ignore" });
        const caLocation = (0, node_child_process_1.execSync)(`"${binaryPath}" -CAROOT`).toString().trim();
        if (!node_fs_1.default.existsSync(keyPath) || !node_fs_1.default.existsSync(certPath)) {
            throw new Error("Certificate files not found");
        }
        console.log(`CA Root certificate created in ${caLocation}`);
        console.log(`Certificates created in ${resolvedCertDir}`);
        const gitignorePath = node_path_1.default.resolve(process.cwd(), "./.gitignore");
        if (node_fs_1.default.existsSync(gitignorePath)) {
            const gitignore = await node_fs_1.default.promises.readFile(gitignorePath, "utf8");
            if (!gitignore.includes(certDir)) {
                console.log("Adding certificates to .gitignore");
                await node_fs_1.default.promises.appendFile(gitignorePath, `\n${certDir}`);
            }
        }
        return {
            key: keyPath,
            cert: certPath,
            rootCA: `${caLocation}/rootCA.pem`,
        };
    }
    catch (err) {
        console.error("Failed to generate self-signed certificate. Falling back to http.", err);
    }
}
// get platform specific cache directory adapted from playwright's handling
// https://github.com/microsoft/playwright/blob/7d924470d397975a74a19184c136b3573a974e13/packages/playwright-core/src/utils/registry.ts#L141
function getCacheDirectory(fileDirectory, envPath) {
    let result;
    if (envPath) {
        result = envPath;
    }
    else {
        let systemCacheDirectory;
        if (process.platform === "linux") {
            systemCacheDirectory =
                process.env.XDG_CACHE_HOME || node_path_1.default.join(os_1.default.homedir(), ".cache");
        }
        else if (process.platform === "darwin") {
            systemCacheDirectory = node_path_1.default.join(os_1.default.homedir(), "Library", "Caches");
        }
        else if (process.platform === "win32") {
            systemCacheDirectory =
                process.env.LOCALAPPDATA || node_path_1.default.join(os_1.default.homedir(), "AppData", "Local");
        }
        else {
            /// Attempt to use generic tmp location for un-handled platform
            if (!systemCacheDirectory) {
                for (const dir of [
                    node_path_1.default.join(os_1.default.homedir(), ".cache"),
                    node_path_1.default.join(os_1.default.tmpdir()),
                ]) {
                    if (node_fs_1.default.existsSync(dir)) {
                        systemCacheDirectory = dir;
                        break;
                    }
                }
            }
            if (!systemCacheDirectory) {
                console.error(new Error("Unsupported platform: " + process.platform));
                process.exit(0);
            }
        }
        result = node_path_1.default.join(systemCacheDirectory, fileDirectory);
    }
    if (!node_path_1.default.isAbsolute(result)) {
        // It is important to resolve to the absolute path:
        //   - for unzipping to work correctly;
        //   - so that registry directory matches between installation and execution.
        // INIT_CWD points to the root of `npm/yarn install` and is probably what
        // the user meant when typing the relative path.
        result = node_path_1.default.resolve(process.env["INIT_CWD"] || process.cwd(), result);
    }
    return result;
}
