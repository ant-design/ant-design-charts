"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderStyledStringToErrorAnsi = renderStyledStringToErrorAnsi;
const picocolors_1 = require("picocolors");
const magicIdentifier_1 = require("./magicIdentifier");
function renderStyledStringToErrorAnsi(string) {
    function decodeMagicIdentifiers(str) {
        return str.replaceAll(magicIdentifier_1.MAGIC_IDENTIFIER_REGEX, (ident) => {
            try {
                return (0, picocolors_1.magenta)(`{${(0, magicIdentifier_1.decodeMagicIdentifier)(ident)}}`);
            }
            catch (e) {
                return (0, picocolors_1.magenta)(`{${ident} (decoding failed: ${e})}`);
            }
        });
    }
    switch (string.type) {
        case "text":
            return decodeMagicIdentifiers(string.value);
        case "strong":
            return (0, picocolors_1.bold)((0, picocolors_1.red)(decodeMagicIdentifiers(string.value)));
        case "code":
            return (0, picocolors_1.green)(decodeMagicIdentifiers(string.value));
        case "line":
            return string.value.map(renderStyledStringToErrorAnsi).join("");
        case "stack":
            return string.value.map(renderStyledStringToErrorAnsi).join("\n");
        default:
            throw new Error("Unknown StyledString type", string);
    }
}
