"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function splitUnquotedString(input, delimiter) {
    if (input.startsWith(delimiter)) {
        return splitUnquotedString(input.substring(delimiter.length), delimiter);
    }
    if (input.startsWith('"')) {
        const closingQuoteIndex = input.indexOf('"', 1);
        if (closingQuoteIndex === -1) {
            return input.split(delimiter);
        }
        if (closingQuoteIndex === input.length - 1) {
            return [input];
        }
        else {
            const remainder = input.substring(closingQuoteIndex + 1);
            const result = [input.substring(0, closingQuoteIndex + 1)];
            result.push.apply(result, this.splitUnquotedString(remainder, delimiter));
            return result;
        }
    }
    else {
        return input.split(delimiter);
    }
}
exports.splitUnquotedString = splitUnquotedString;
//# sourceMappingURL=utils.js.map