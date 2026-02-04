const {toString} = Object.prototype;
const isError = value => toString.call(value) === '[object Error]';

export class PresentableError extends Error {
	constructor(message, {cause} = {}) {
		super();

		if (message instanceof PresentableError) {
			return message; // eslint-disable-line no-constructor-return
		}

		if (typeof message !== 'string') {
			throw new TypeError('Message required.');
		}

		this.name = 'PresentableError';
		this.message = message;
		this.cause = cause;
	}

	get isPresentable() {
		return true;
	}
}

export function isPresentableError(value) {
	return value && isError(value) && value.isPresentable === true;
}

export function makePresentableError(error) {
	if (!isError(error)) {
		throw new TypeError('The value is not an error.');
	}

	if (isPresentableError(error)) {
		return;
	}

	if (!Object.isExtensible(error)) {
		throw new Error('The error is non-extensible and cannot be edited.');
	}

	Object.defineProperty(error, 'isPresentable', {value: true});
}
