import { bold, green, magenta, red } from "picocolors";
import { decodeMagicIdentifier, MAGIC_IDENTIFIER_REGEX, } from "./magicIdentifier";
export function renderStyledStringToErrorAnsi(string) {
    function decodeMagicIdentifiers(str) {
        return str.replaceAll(MAGIC_IDENTIFIER_REGEX, (ident) => {
            try {
                return magenta(`{${decodeMagicIdentifier(ident)}}`);
            }
            catch (e) {
                return magenta(`{${ident} (decoding failed: ${e})}`);
            }
        });
    }
    switch (string.type) {
        case "text":
            return decodeMagicIdentifiers(string.value);
        case "strong":
            return bold(red(decodeMagicIdentifiers(string.value)));
        case "code":
            return green(decodeMagicIdentifiers(string.value));
        case "line":
            return string.value.map(renderStyledStringToErrorAnsi).join("");
        case "stack":
            return string.value.map(renderStyledStringToErrorAnsi).join("\n");
        default:
            throw new Error("Unknown StyledString type", string);
    }
}
