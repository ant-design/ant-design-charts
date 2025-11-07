export declare enum TokenType {
    STRING = 0,
    NUMBER = 1,
    BOOLEAN = 2,
    NULL = 3,
    IDENTIFIER = 4,
    OPERATOR = 5,
    FUNCTION = 6,
    DOT = 7,
    BRACKET_LEFT = 8,
    BRACKET_RIGHT = 9,
    PAREN_LEFT = 10,
    PAREN_RIGHT = 11,
    COMMA = 12,
    QUESTION = 13,
    COLON = 14,
    DOLLAR = 15
}
/**
 * Token represents a single unit in the expression
 * @property type - The category of the token
 * @property value - The actual string value of the token
 */
export interface Token {
    type: TokenType;
    value: string;
}
/**
 * Converts an input expression string into an array of tokens
 * Processes the input character by character, identifying tokens based on patterns
 *
 * Time Complexity: O(n) where n is the length of input string
 * Space Complexity: O(n) for storing the tokens array
 *
 * @param expr - The input expression string to tokenize
 * @returns Array of Token objects
 * @throws Error for unexpected or invalid characters
 */
export declare const tokenize: (expr: string) => Token[];
