/**
 * Checks if the character is a path command.
 */
export function isPathCommand(code) {
    // eslint-disable-next-line no-bitwise -- Impossible to satisfy
    switch (code | 0x20) {
        case 0x6d /* m */:
        case 0x7a /* z */:
        case 0x6c /* l */:
        case 0x68 /* h */:
        case 0x76 /* v */:
        case 0x63 /* c */:
        case 0x73 /* s */:
        case 0x71 /* q */:
        case 0x74 /* t */:
        case 0x61 /* a */:
            // case 0x72/* r */:
            return true;
        default:
            return false;
    }
}
//# sourceMappingURL=is-path-command.js.map