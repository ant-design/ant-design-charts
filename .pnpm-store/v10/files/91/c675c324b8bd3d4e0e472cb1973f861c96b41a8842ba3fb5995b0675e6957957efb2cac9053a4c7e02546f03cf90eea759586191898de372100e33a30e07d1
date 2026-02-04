import { type Program } from "./parser";
export type Context = Record<string, any>;
export type Functions = Record<string, (...args: any[]) => any>;
/**
 * InterpreterState represents the current state of interpretation
 * @property context - Variables and values available during evaluation
 * @property functions - Functions available for calling during evaluation
 */
interface InterpreterState {
    context: Context;
    functions: Functions;
}
/**
 * Creates a new interpreter state with the provided context and functions
 * @param context - Initial variable context
 * @param functions - Available functions
 * @returns A new interpreter state
 */
export declare const createInterpreterState: (context?: Context, functions?: Functions) => InterpreterState;
/**
 * Evaluates an AST and returns the result
 * @param ast - The AST to evaluate
 * @param state - Current interpreter state
 * @param context - Optional context to override the default context
 * @returns The result of evaluation
 * @example
 * const ast = parse(tokens);
 * const result = evaluate(ast, state);
 */
export declare const evaluateAst: (ast: Program, state: InterpreterState, context?: Context) => unknown;
export {};
