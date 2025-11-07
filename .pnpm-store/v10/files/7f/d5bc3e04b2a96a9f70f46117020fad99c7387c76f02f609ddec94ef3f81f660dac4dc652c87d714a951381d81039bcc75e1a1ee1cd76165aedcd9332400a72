import isUrl from 'is-url-superb';
import ky from 'ky';
import isScoped from 'is-scoped';
import registryUrl from 'registry-url';
import registryAuthToken from 'registry-auth-token';
import zip from 'lodash.zip';
import validate from 'validate-npm-package-name';
import orgRegex from 'org-regex';
import pMap from 'p-map';
/// import {isTaken} from 'is-name-taken';

const configuredRegistryUrl = registryUrl();
const organizationRegex = orgRegex({exact: true});

// Ensure the URL always ends in a `/`
const normalizeUrl = url => url.replace(/\/$/, '') + '/';

const npmOrganizationUrl = 'https://www.npmjs.com/org/';

const request = async (name, options) => {
	const registryUrl = normalizeUrl(options.registryUrl ?? configuredRegistryUrl);

	const isOrganization = organizationRegex.test(name);
	if (isOrganization) {
		name = name.replaceAll(/[@/]/g, '');
	}

	const isValid = validate(name);
	if (!isValid.validForNewPackages) {
		const notices = [...isValid.warnings ?? [], ...isValid.errors ?? []].map(v => `- ${v}`);
		notices.unshift(`Invalid package name: ${name}`);
		const error = new InvalidNameError(notices.join('\n'));
		error.warnings = isValid.warnings;
		error.errors = isValid.errors;
		throw error;
	}

	let urlName = name;
	const isScopedPackage = isScoped(name);
	if (isScopedPackage) {
		urlName = name.replaceAll('/', '%2f');
	}

	const authInfo = registryAuthToken(registryUrl, {recursive: true});
	const headers = {};
	if (authInfo && !isOrganization) {
		headers.authorization = `${authInfo.type} ${authInfo.token}`;
	}

	try {
		let packageUrl = registryUrl + urlName.toLowerCase();
		if (isOrganization) {
			packageUrl = npmOrganizationUrl + urlName.toLowerCase();
		}

		await ky.head(packageUrl, {timeout: 10_000, headers});
		return false;
	} catch (error) {
		const statusCode = error.response?.status ?? 500;

		if (statusCode === 404) {
			// Disabled as it's often way too slow: https://github.com/sindresorhus/npm-name-cli/issues/30
			// if (!isOrganization) {
			// 	const conflict = await isTaken(name.toLowerCase(), {maxAge: 60000});
			// 	return !conflict;
			// }

			return true;
		}

		if (isScopedPackage && statusCode === 401) {
			return true;
		}

		throw error;
	}
};

export default async function npmName(name, options = {}) {
	if (!(typeof name === 'string' && name.length > 0)) {
		throw new Error('Package name required');
	}

	if (options.registryUrl !== undefined && !(typeof options.registryUrl === 'string' && isUrl(options.registryUrl))) {
		throw new Error('The `registryUrl` option must be a valid string URL');
	}

	return request(name, options);
}

export async function npmNameMany(names, options = {}) {
	if (!Array.isArray(names)) {
		throw new TypeError(`Expected an array of names, got ${typeof names}`);
	}

	if (options.registryUrl !== undefined && !(typeof options.registryUrl === 'string' && isUrl(options.registryUrl))) {
		throw new Error('The `registryUrl` option must be a valid string URL');
	}

	const result = await pMap(names, name => request(name, options), {stopOnError: false});
	return new Map(zip(names, result));
}

export class InvalidNameError extends Error {}
