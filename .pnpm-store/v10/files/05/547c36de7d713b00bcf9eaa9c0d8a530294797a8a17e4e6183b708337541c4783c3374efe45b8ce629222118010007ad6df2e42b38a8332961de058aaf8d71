/**
 * Checks if the character is a space.
 */
export function isSpace(ch) {
    var specialSpaces = [
        0x1680, 0x180e, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200a, 0x202f,
        0x205f, 0x3000, 0xfeff,
    ];
    /* istanbul ignore next */
    return (ch === 0x0a ||
        ch === 0x0d ||
        ch === 0x2028 ||
        ch === 0x2029 || // Line terminators
        // White spaces
        ch === 0x20 ||
        ch === 0x09 ||
        ch === 0x0b ||
        ch === 0x0c ||
        ch === 0xa0 ||
        (ch >= 0x1680 && specialSpaces.includes(ch)));
}
//# sourceMappingURL=is-space.js.map