import { MessageFormatElement } from './types';
/**
 * Hoist all selectors to the beginning of the AST & flatten the
 * resulting options. E.g:
 * "I have {count, plural, one{a dog} other{many dogs}}"
 * becomes "{count, plural, one{I have a dog} other{I have many dogs}}".
 * If there are multiple selectors, the order of which one is hoisted 1st
 * is non-deterministic.
 * The goal is to provide as many full sentences as possible since fragmented
 * sentences are not translator-friendly
 * @param ast AST
 */
export declare function hoistSelectors(ast: MessageFormatElement[]): MessageFormatElement[];
interface IsStructurallySameResult {
    error?: Error;
    success: boolean;
}
/**
 * Check if 2 ASTs are structurally the same. This primarily means that
 * they have the same variables with the same type
 * @param a
 * @param b
 * @returns
 */
export declare function isStructurallySame(a: MessageFormatElement[], b: MessageFormatElement[]): IsStructurallySameResult;
export {};
