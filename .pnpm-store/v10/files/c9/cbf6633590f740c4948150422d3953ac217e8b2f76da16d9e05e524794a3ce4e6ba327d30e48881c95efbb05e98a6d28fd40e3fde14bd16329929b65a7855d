/**
 * Inquirer.js
 * A collection of common interactive command line user interfaces.
 */
import { Separator } from '@inquirer/prompts';
import type { Prettify } from '@inquirer/type';
import PromptsRunner from './ui/prompt.ts';
import type { PromptCollection, LegacyPromptConstructor, PromptFn } from './ui/prompt.ts';
import type { Answers, StreamOptions, QuestionMap, PromptSession, PromptModulePublicQuestion, PromptModuleSpecificQuestion, PromptModuleNamedQuestion, QuestionSequence, MergedAnswers, DictionaryAnswers } from './types.ts';
type PublicQuestions<A extends Answers, Prefilled extends Answers> = QuestionSequence<PromptModulePublicQuestion<MergedAnswers<A, Prefilled>, A>>;
type InternalQuestions<A extends Answers, Prefilled extends Answers, Prompts extends Record<string, Record<string, unknown>>> = QuestionSequence<PromptModuleNamedQuestion<MergedAnswers<A, Prefilled>, Prompts, A>>;
type QuestionsDictionary<A extends Answers, Prefilled extends Answers, Prompts extends Record<string, Record<string, unknown>>> = {
    [name in keyof A]: PromptModuleSpecificQuestion<MergedAnswers<A, Prefilled>, Prompts>;
};
type PromptModuleApi<Prompts extends Record<string, Record<string, unknown>> = never> = {
    <const A extends Answers, const Prefilled extends Answers = object>(questions: PublicQuestions<A, Prefilled> | InternalQuestions<A, Prefilled, Prompts>, answers?: Prefilled): PromptReturnType<MergedAnswers<A, Prefilled>>;
    <const A extends Answers, const Prefilled extends Answers = object>(questions: QuestionsDictionary<A, Prefilled, Prompts>, answers?: Prefilled): PromptReturnType<DictionaryAnswers<A, Prefilled>>;
    <A extends Answers>(questions: PromptSession<A>, answers?: Partial<A>): PromptReturnType<A>;
} & {
    prompts: PromptCollection;
    registerPrompt(name: string, prompt: LegacyPromptConstructor | PromptFn): PromptModuleApi<Prompts>;
    restoreDefaultPrompts(): void;
};
export type { QuestionMap, Question, DistinctQuestion, Answers, PromptSession, } from './types.ts';
type PromptReturnType<T> = Promise<Prettify<T>> & {
    ui: PromptsRunner<Prettify<T>>;
};
/**
 * Create a new self-contained prompt module.
 */
export declare function createPromptModule<Prompts extends Record<string, Record<string, unknown>> = never>(opt?: StreamOptions): PromptModuleApi<Prompts>;
declare function registerPrompt(name: string, newPrompt: LegacyPromptConstructor): void;
declare function restoreDefaultPrompts(): void;
declare const inquirer: {
    prompt: PromptModuleApi<Omit<QuestionMap, "__dummy">>;
    ui: {
        Prompt: typeof PromptsRunner;
    };
    createPromptModule: typeof createPromptModule;
    registerPrompt: typeof registerPrompt;
    restoreDefaultPrompts: typeof restoreDefaultPrompts;
    Separator: typeof Separator;
};
export default inquirer;
