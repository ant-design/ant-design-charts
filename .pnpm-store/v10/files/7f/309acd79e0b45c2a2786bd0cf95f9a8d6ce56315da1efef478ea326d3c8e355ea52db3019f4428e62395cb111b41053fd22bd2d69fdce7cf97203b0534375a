import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import {globby, globbySync} from 'globby';
import isGlob from 'is-glob';
import isPathCwd from 'is-path-cwd';
import isPathInside from 'is-path-inside';
import pMap from 'p-map';
import slash from 'slash';
import {PresentableError} from 'presentable-error';

function safeCheck(file, cwd) {
	if (isPathCwd(file)) {
		throw new PresentableError('Cannot delete the current working directory. Can be overridden with the `force` option.');
	}

	if (!isPathInside(file, cwd)) {
		throw new PresentableError('Cannot delete files/directories outside the current working directory. Can be overridden with the `force` option.');
	}
}

function normalizePatterns(patterns) {
	patterns = Array.isArray(patterns) ? patterns : [patterns];

	patterns = patterns.map(pattern => {
		if (process.platform === 'win32' && isGlob(pattern) === false) {
			return slash(pattern);
		}

		return pattern;
	});

	return patterns;
}

export async function deleteAsync(patterns, {force, dryRun, cwd = process.cwd(), onProgress = () => {}, ...options} = {}) {
	options = {
		expandDirectories: false,
		onlyFiles: false,
		followSymbolicLinks: false,
		cwd,
		...options,
	};

	patterns = normalizePatterns(patterns);

	const paths = await globby(patterns, options);
	const files = paths.sort((a, b) => b.localeCompare(a));

	if (files.length === 0) {
		onProgress({
			totalCount: 0,
			deletedCount: 0,
			percent: 1,
		});
	}

	let deletedCount = 0;

	const mapper = async file => {
		file = path.resolve(cwd, file);

		if (!force) {
			safeCheck(file, cwd);
		}

		if (!dryRun) {
			await fsPromises.rm(file, {recursive: true, force: true});
		}

		deletedCount += 1;

		onProgress({
			totalCount: files.length,
			deletedCount,
			percent: deletedCount / files.length,
			path: file,
		});

		return file;
	};

	const removedFiles = await pMap(files, mapper, options);

	removedFiles.sort((a, b) => a.localeCompare(b));

	return removedFiles;
}

export function deleteSync(patterns, {force, dryRun, cwd = process.cwd(), ...options} = {}) {
	options = {
		expandDirectories: false,
		onlyFiles: false,
		followSymbolicLinks: false,
		cwd,
		...options,
	};

	patterns = normalizePatterns(patterns);

	const files = globbySync(patterns, options)
		.sort((a, b) => b.localeCompare(a));

	const removedFiles = files.map(file => {
		file = path.resolve(cwd, file);

		if (!force) {
			safeCheck(file, cwd);
		}

		if (!dryRun) {
			fs.rmSync(file, {recursive: true, force: true});
		}

		return file;
	});

	removedFiles.sort((a, b) => a.localeCompare(b));

	return removedFiles;
}
