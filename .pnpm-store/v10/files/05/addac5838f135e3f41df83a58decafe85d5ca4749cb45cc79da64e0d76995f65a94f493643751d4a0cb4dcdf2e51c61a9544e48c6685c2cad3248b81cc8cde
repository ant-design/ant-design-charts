"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.print = void 0;
exports.format = format;
/* global console */
/* eslint no-console: "off" */
const version_1 = require("../version");
const BRAND = 'G6';
/**
 * <zh/> 格式化打印
 *
 * <en/> Format print
 * @param message - <zh/> 消息 | <en/> Message
 * @returns <zh/> 格式化后的消息 | <en/> Formatted message
 */
function format(message) {
    return `[${BRAND} v${version_1.version}] ${message}`;
}
exports.print = {
    mute: false,
    debug: (message) => {
        !exports.print.mute && console.debug(format(message));
    },
    info: (message) => {
        !exports.print.mute && console.info(format(message));
    },
    warn: (message) => {
        !exports.print.mute && console.warn(format(message));
    },
    error: (message) => {
        !exports.print.mute && console.error(format(message));
    },
};
//# sourceMappingURL=print.js.map