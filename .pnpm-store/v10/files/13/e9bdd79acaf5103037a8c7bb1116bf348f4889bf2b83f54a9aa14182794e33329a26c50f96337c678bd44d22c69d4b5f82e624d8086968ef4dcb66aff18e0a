/* global console */
/* eslint no-console: "off" */
import { version } from '../version';
const BRAND = 'G6';
/**
 * <zh/> 格式化打印
 *
 * <en/> Format print
 * @param message - <zh/> 消息 | <en/> Message
 * @returns <zh/> 格式化后的消息 | <en/> Formatted message
 */
export function format(message) {
    return `[${BRAND} v${version}] ${message}`;
}
export const print = {
    mute: false,
    debug: (message) => {
        !print.mute && console.debug(format(message));
    },
    info: (message) => {
        !print.mute && console.info(format(message));
    },
    warn: (message) => {
        !print.mute && console.warn(format(message));
    },
    error: (message) => {
        !print.mute && console.error(format(message));
    },
};
//# sourceMappingURL=print.js.map