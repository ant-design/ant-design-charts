export type AnyPresentableError = {
	readonly isPresentable: true;
} & Error;

export class PresentableError extends Error implements AnyPresentableError {
	readonly name: 'PresentableError';
	readonly isPresentable: true;
	constructor(message: string | PresentableError, options?: {cause?: unknown});
}

/**
Note: If the given value is already a presentable error-like value, it's just passed through.
*/
export function isPresentableError(value: unknown): value is AnyPresentableError;

export function makePresentableError(error: Error): error is AnyPresentableError;
