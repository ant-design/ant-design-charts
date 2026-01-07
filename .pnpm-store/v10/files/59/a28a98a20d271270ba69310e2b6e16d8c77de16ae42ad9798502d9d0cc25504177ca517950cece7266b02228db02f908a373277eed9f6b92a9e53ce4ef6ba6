import path from 'node:path';
import os from 'node:os';
import fs from 'graceful-fs';
import {xdgConfig} from 'xdg-basedir';
import {writeFileSync} from 'atomically';
import {
	getProperty,
	setProperty,
	hasProperty,
	deleteProperty,
} from 'dot-prop';

function getConfigDirectory(id, globalConfigPath) {
	const pathPrefix = globalConfigPath
		? path.join(id, 'config.json')
		: path.join('configstore', `${id}.json`);

	const configDirectory = xdgConfig ?? fs.mkdtempSync(fs.realpathSync(os.tmpdir()) + path.sep);

	return path.join(configDirectory, pathPrefix);
}

const permissionError = 'You don\'t have access to this file.';
const mkdirOptions = {mode: 0o0700, recursive: true};
const writeFileOptions = {mode: 0o0600};

function handlePermissionError(error) {
	if (error.code === 'EACCES') {
		error.message = `${error.message}\n${permissionError}\n`;
	}

	throw error;
}

export default class Configstore {
	constructor(id, defaults, options = {}) {
		this._path = options.configPath ?? getConfigDirectory(id, options.globalConfigPath);
		this._clearInvalidConfig = options.clearInvalidConfig ?? true;

		if (defaults) {
			this.all = {
				...defaults,
				...this.all,
			};
		}
	}

	get all() {
		try {
			return JSON.parse(fs.readFileSync(this._path, 'utf8'));
		} catch (error) {
			// Create directory if it doesn't exist
			if (error.code === 'ENOENT') {
				return {};
			}

			// Handle invalid JSON
			if (error.name === 'SyntaxError') {
				if (this._clearInvalidConfig) {
					writeFileSync(this._path, '', writeFileOptions);
					return {};
				}

				throw error;
			}

			handlePermissionError(error); // This always throws
			/* c8 ignore next */
			return {}; // Unreachable, but satisfies linter
		}
	}

	set all(value) {
		try {
			// Make sure the folder exists as it could have been deleted in the meantime
			fs.mkdirSync(path.dirname(this._path), mkdirOptions);

			writeFileSync(this._path, JSON.stringify(value, undefined, '\t'), writeFileOptions);
		} catch (error) {
			handlePermissionError(error); // This always throws
		}
	}

	get size() {
		return Object.keys(this.all || {}).length;
	}

	get(key) {
		return getProperty(this.all, key);
	}

	set(key, value) {
		const config = this.all;

		if (typeof key === 'object' && arguments.length === 1) {
			for (const k of Object.keys(key)) {
				setProperty(config, k, key[k]);
			}
		} else {
			setProperty(config, key, value);
		}

		this.all = config;
	}

	has(key) {
		return hasProperty(this.all, key);
	}

	delete(key) {
		const config = this.all;
		deleteProperty(config, key);
		this.all = config;
	}

	clear() {
		this.all = {};
	}

	get path() {
		return this._path;
	}
}
