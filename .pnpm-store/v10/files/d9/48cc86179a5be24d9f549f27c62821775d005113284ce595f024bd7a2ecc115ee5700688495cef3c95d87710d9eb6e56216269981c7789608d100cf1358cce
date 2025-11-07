import * as zod from 'zod';
import { joinPath } from './utils/joinPath';
import { isNonEmptyArray } from './utils/NonEmptyArray';
const MAX_ISSUES_IN_MESSAGE = 99;
const ISSUE_SEPARATOR = '; ';
const UNION_SEPARATOR = ', or ';
const PREFIX = 'Validation error';
const PREFIX_SEPARATOR = ': ';
export class ValidationError extends Error {
    details;
    name;
    constructor(message, details = []) {
        super(message);
        this.details = details;
        this.name = 'ZodValidationError';
    }
    toString() {
        return this.message;
    }
}
function getMessageFromZodIssue(props) {
    const { issue, issueSeparator, unionSeparator, includePath } = props;
    if (issue.code === 'invalid_union') {
        return issue.unionErrors
            .reduce((acc, zodError) => {
            const newIssues = zodError.issues
                .map((issue) => getMessageFromZodIssue({
                issue,
                issueSeparator,
                unionSeparator,
                includePath,
            }))
                .join(issueSeparator);
            if (!acc.includes(newIssues)) {
                acc.push(newIssues);
            }
            return acc;
        }, [])
            .join(unionSeparator);
    }
    if (includePath && isNonEmptyArray(issue.path)) {
        if (issue.path.length === 1) {
            const identifier = issue.path[0];
            if (typeof identifier === 'number') {
                return `${issue.message} at index ${identifier}`;
            }
        }
        return `${issue.message} at "${joinPath(issue.path)}"`;
    }
    return issue.message;
}
function conditionallyPrefixMessage(reason, prefix, prefixSeparator) {
    if (prefix !== null) {
        if (reason.length > 0) {
            return [prefix, reason].join(prefixSeparator);
        }
        return prefix;
    }
    if (reason.length > 0) {
        return reason;
    }
    return PREFIX;
}
export function fromZodIssue(issue, options = {}) {
    const { issueSeparator = ISSUE_SEPARATOR, unionSeparator = UNION_SEPARATOR, prefixSeparator = PREFIX_SEPARATOR, prefix = PREFIX, includePath = true, } = options;
    const reason = getMessageFromZodIssue({
        issue,
        issueSeparator,
        unionSeparator,
        includePath,
    });
    const message = conditionallyPrefixMessage(reason, prefix, prefixSeparator);
    return new ValidationError(message, [issue]);
}
export function fromZodError(zodError, options = {}) {
    const { maxIssuesInMessage = MAX_ISSUES_IN_MESSAGE, issueSeparator = ISSUE_SEPARATOR, unionSeparator = UNION_SEPARATOR, prefixSeparator = PREFIX_SEPARATOR, prefix = PREFIX, includePath = true, } = options;
    const reason = zodError.errors
        .slice(0, maxIssuesInMessage)
        .map((issue) => getMessageFromZodIssue({
        issue,
        issueSeparator,
        unionSeparator,
        includePath,
    }))
        .join(issueSeparator);
    const message = conditionallyPrefixMessage(reason, prefix, prefixSeparator);
    return new ValidationError(message, zodError.errors);
}
export const toValidationError = (options = {}) => (err) => {
    if (err instanceof zod.ZodError) {
        return fromZodError(err, options);
    }
    if (err instanceof Error) {
        return new ValidationError(err.message);
    }
    return new ValidationError('Unknown error');
};
export function isValidationError(err) {
    return err instanceof ValidationError;
}
export function isValidationErrorLike(err) {
    return err instanceof Error && err.name === 'ZodValidationError';
}
export const errorMap = (issue, ctx) => {
    const error = fromZodIssue({
        ...issue,
        message: issue.message ?? ctx.defaultError,
    });
    return {
        message: error.message,
    };
};
