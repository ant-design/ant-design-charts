"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAGIC_IDENTIFIER_REGEX = void 0;
exports.decodeMagicIdentifier = decodeMagicIdentifier;
function decodeHex(hexStr) {
    if (hexStr.trim() === "") {
        throw new Error("can't decode empty hex");
    }
    const num = parseInt(hexStr, 16);
    if (isNaN(num)) {
        throw new Error(`invalid hex: \`${hexStr}\``);
    }
    return String.fromCodePoint(num);
}
const DECODE_REGEX = /^__TURBOPACK__([a-zA-Z0-9_$]+)__$/;
function decodeMagicIdentifier(identifier) {
    const matches = identifier.match(DECODE_REGEX);
    if (!matches) {
        return identifier;
    }
    const inner = matches[1];
    let output = "";
    let mode = 0 /* Mode.Text */;
    let buffer = "";
    for (let i = 0; i < inner.length; i++) {
        const char = inner[i];
        if (mode === 0 /* Mode.Text */) {
            if (char === "_") {
                mode = 1 /* Mode.Underscore */;
            }
            else if (char === "$") {
                mode = 2 /* Mode.Hex */;
            }
            else {
                output += char;
            }
        }
        else if (mode === 1 /* Mode.Underscore */) {
            if (char === "_") {
                output += " ";
                mode = 0 /* Mode.Text */;
            }
            else if (char === "$") {
                output += "_";
                mode = 2 /* Mode.Hex */;
            }
            else {
                output += char;
                mode = 0 /* Mode.Text */;
            }
        }
        else if (mode === 2 /* Mode.Hex */) {
            if (buffer.length === 2) {
                output += decodeHex(buffer);
                buffer = "";
            }
            if (char === "_") {
                if (buffer !== "") {
                    throw new Error(`invalid hex: \`${buffer}\``);
                }
                mode = 3 /* Mode.LongHex */;
            }
            else if (char === "$") {
                if (buffer !== "") {
                    throw new Error(`invalid hex: \`${buffer}\``);
                }
                mode = 0 /* Mode.Text */;
            }
            else {
                buffer += char;
            }
        }
        else if (mode === 3 /* Mode.LongHex */) {
            if (char === "_") {
                throw new Error(`invalid hex: \`${buffer + char}\``);
            }
            else if (char === "$") {
                output += decodeHex(buffer);
                buffer = "";
                mode = 0 /* Mode.Text */;
            }
            else {
                buffer += char;
            }
        }
    }
    return output;
}
exports.MAGIC_IDENTIFIER_REGEX = /__TURBOPACK__[a-zA-Z0-9_$]+__/g;
