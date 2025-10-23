import { type Token } from "./tokenizer";
/**
 * All possible node types in the Abstract Syntax Tree (AST)
 * - Program: Root node of the AST
 * - Literal: Constants (numbers, strings, booleans, null)
 * - Identifier: Variable and property names
 * - MemberExpression: Property access (dot or bracket notation)
 * - CallExpression: Function invocation
 * - BinaryExpression: Operations with two operands
 * - UnaryExpression: Operations with one operand
 * - ConditionalExpression: Ternary operator expressions
 */
export declare enum NodeType {
    Program = 0,
    Literal = 1,
    Identifier = 2,
    MemberExpression = 3,
    CallExpression = 4,
    BinaryExpression = 5,
    UnaryExpression = 6,
    ConditionalExpression = 7
}
/**
 * Base interface for all AST nodes
 * Every node must have a type property identifying its kind
 */
export interface Node {
    type: NodeType;
}
/**
 * Root node of the AST
 * Contains a single expression as its body
 */
export interface Program extends Node {
    type: NodeType.Program;
    body: Expression;
}
/**
 * Base interface for all expression nodes
 * All expressions are nodes that can produce a value
 */
export type Expression = Literal | Identifier | MemberExpression | CallExpression | BinaryExpression | UnaryExpression | ConditionalExpression;
/**
 * Represents literal values in the code
 * Examples: 42, "hello", true, null
 */
export interface Literal extends Node {
    type: NodeType.Literal;
    value: string | number | boolean | null;
}
/**
 * Represents identifiers/names in the code
 * Examples: variable names, property names
 */
export interface Identifier extends Node {
    type: NodeType.Identifier;
    name: string;
}
/**
 * Represents property access expressions
 * Examples:
 * - obj.prop (computed: false)
 * - obj["prop"] (computed: true)
 */
export interface MemberExpression extends Node {
    type: NodeType.MemberExpression;
    object: Expression;
    property: Expression;
    computed: boolean;
}
/**
 * Represents function calls
 * Example: @sum(a, b)
 */
export interface CallExpression extends Node {
    type: NodeType.CallExpression;
    callee: Identifier;
    arguments: Expression[];
}
/**
 * Represents operations with two operands
 * Examples: a + b, x * y, foo === bar
 */
export interface BinaryExpression extends Node {
    type: NodeType.BinaryExpression;
    operator: string;
    left: Expression;
    right: Expression;
}
/**
 * Represents operations with a single operand
 * Example: !valid
 */
export interface UnaryExpression extends Node {
    type: NodeType.UnaryExpression;
    operator: string;
    argument: Expression;
    prefix: boolean;
}
/**
 * Represents ternary conditional expressions
 * Example: condition ? trueValue : falseValue
 */
export interface ConditionalExpression extends Node {
    type: NodeType.ConditionalExpression;
    test: Expression;
    consequent: Expression;
    alternate: Expression;
}
/**
 * Parse tokens into an AST
 * Time: O(n) - single pass through tokens
 * Space: O(d) - recursive depth of expression tree
 * @param tokens - Array of tokens from the tokenizer
 * @returns AST representing the expression
 */
export declare const parse: (tokens: Token[]) => Program;
