import path from 'node:path';
import {randomUUID} from 'node:crypto';
import tempDirectory from 'temp-dir';

export default function tempfile(options = {}) {
	// TODO: Remove this for v6.
	if (typeof options === 'string') {
		throw new TypeError('You must now pass in the file extension as an object.');
	}

	let {extension} = options;

	if (typeof extension === 'string') {
		extension = extension.startsWith('.') ? extension : `.${extension}`;
	}

	return path.join(tempDirectory, randomUUID() + (extension ?? ''));
}
