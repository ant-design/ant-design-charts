import * as zod from 'zod';
export type ZodError = zod.ZodError;
export type ZodIssue = zod.ZodIssue;
export declare class ValidationError extends Error {
    details: Array<zod.ZodIssue>;
    name: 'ZodValidationError';
    constructor(message: string, details?: Array<zod.ZodIssue> | undefined);
    toString(): string;
}
export type FromZodIssueOptions = {
    issueSeparator?: string;
    unionSeparator?: string;
    prefix?: string | null;
    prefixSeparator?: string;
    includePath?: boolean;
};
export declare function fromZodIssue(issue: ZodIssue, options?: FromZodIssueOptions): ValidationError;
export type FromZodErrorOptions = FromZodIssueOptions & {
    maxIssuesInMessage?: number;
};
export declare function fromZodError(zodError: ZodError, options?: FromZodErrorOptions): ValidationError;
export declare const toValidationError: (options?: Parameters<typeof fromZodError>[1]) => (err: unknown) => ValidationError;
export declare function isValidationError(err: unknown): err is ValidationError;
export declare function isValidationErrorLike(err: unknown): err is ValidationError;
export declare const errorMap: zod.ZodErrorMap;
//# sourceMappingURL=ValidationError.d.ts.map