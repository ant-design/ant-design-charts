"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMap = exports.isValidationErrorLike = exports.isValidationError = exports.toValidationError = exports.fromZodError = exports.fromZodIssue = exports.ValidationError = void 0;
const zod = __importStar(require("zod"));
const joinPath_1 = require("./utils/joinPath");
const NonEmptyArray_1 = require("./utils/NonEmptyArray");
const MAX_ISSUES_IN_MESSAGE = 99;
const ISSUE_SEPARATOR = '; ';
const UNION_SEPARATOR = ', or ';
const PREFIX = 'Validation error';
const PREFIX_SEPARATOR = ': ';
class ValidationError extends Error {
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
exports.ValidationError = ValidationError;
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
    if (includePath && (0, NonEmptyArray_1.isNonEmptyArray)(issue.path)) {
        if (issue.path.length === 1) {
            const identifier = issue.path[0];
            if (typeof identifier === 'number') {
                return `${issue.message} at index ${identifier}`;
            }
        }
        return `${issue.message} at "${(0, joinPath_1.joinPath)(issue.path)}"`;
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
function fromZodIssue(issue, options = {}) {
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
exports.fromZodIssue = fromZodIssue;
function fromZodError(zodError, options = {}) {
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
exports.fromZodError = fromZodError;
const toValidationError = (options = {}) => (err) => {
    if (err instanceof zod.ZodError) {
        return fromZodError(err, options);
    }
    if (err instanceof Error) {
        return new ValidationError(err.message);
    }
    return new ValidationError('Unknown error');
};
exports.toValidationError = toValidationError;
function isValidationError(err) {
    return err instanceof ValidationError;
}
exports.isValidationError = isValidationError;
function isValidationErrorLike(err) {
    return err instanceof Error && err.name === 'ZodValidationError';
}
exports.isValidationErrorLike = isValidationErrorLike;
const errorMap = (issue, ctx) => {
    const error = fromZodIssue({
        ...issue,
        message: issue.message ?? ctx.defaultError,
    });
    return {
        message: error.message,
    };
};
exports.errorMap = errorMap;
