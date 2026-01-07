"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printServerInfo = printServerInfo;
const os_1 = __importDefault(require("os"));
const picocolors_1 = __importDefault(require("picocolors"));
function printServerInfo(protocol, hostname, port) {
    const localUrl = `${protocol}://localhost:${port}`;
    const networkAddress = getNetworkAddress();
    const networkUrl = networkAddress
        ? `${protocol}://${networkAddress}:${port}`
        : null;
    console.log();
    console.log(picocolors_1.default.green("  ┌──────────────────────────────────────────────────┐"));
    console.log(picocolors_1.default.green("  │                                                  │"));
    console.log(picocolors_1.default.green("  │   ") +
        picocolors_1.default.bold("Serving!") +
        picocolors_1.default.green("                                       │"));
    console.log(picocolors_1.default.green("  │                                                  │"));
    const localLabel = "  │   - Local:    ";
    const localPadding = 50 - 15 - localUrl.length; // 15 is "   - Local:    ".length
    console.log(picocolors_1.default.green(localLabel) +
        picocolors_1.default.cyan(localUrl) +
        picocolors_1.default.green(" ".repeat(Math.max(0, localPadding)) + "│"));
    if (networkUrl) {
        const netLabel = "  │   - Network:  ";
        const netPadding = 50 - 17 - networkUrl.length; // 17 is "   - Network:  ".length
        console.log(picocolors_1.default.green(netLabel) +
            picocolors_1.default.cyan(networkUrl) +
            picocolors_1.default.green(" ".repeat(Math.max(0, netPadding)) + "│"));
    }
    console.log(picocolors_1.default.green("  │                                                  │"));
    console.log(picocolors_1.default.green("  │   Copied local address to clipboard!             │"));
    console.log(picocolors_1.default.green("  │                                                  │"));
    console.log(picocolors_1.default.green("  └──────────────────────────────────────────────────┘"));
    console.log();
}
function getNetworkAddress() {
    const interfaces = os_1.default.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === "IPv4" && !iface.internal) {
                return iface.address;
            }
        }
    }
    return undefined;
}
