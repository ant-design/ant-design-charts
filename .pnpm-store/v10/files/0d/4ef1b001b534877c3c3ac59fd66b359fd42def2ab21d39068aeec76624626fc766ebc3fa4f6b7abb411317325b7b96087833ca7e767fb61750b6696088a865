import ky from 'ky';
import registryUrl from 'registry-url';
import registryAuthToken from 'registry-auth-token';
import semver from 'semver';

export class PackageNotFoundError extends Error {
	constructor(packageName) {
		super(`Package \`${packageName}\` could not be found`);
		this.name = 'PackageNotFoundError';
	}
}

export class VersionNotFoundError extends Error {
	constructor(packageName, version) {
		super(`Version \`${version}\` for package \`${packageName}\` could not be found`);
		this.name = 'VersionNotFoundError';
	}
}

export default async function packageJson(packageName, options = {}) {
	let {version = 'latest'} = options;
	const {omitDeprecated = true} = options;

	const scope = packageName.split('/')[0];
	const registryUrl_ = options.registryUrl ?? registryUrl(scope);
	const packageUrl = new URL(encodeURIComponent(packageName).replace(/^%40/, '@'), registryUrl_);
	const authInfo = registryAuthToken(registryUrl_.toString(), {recursive: true});

	const headers = {
		accept: 'application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8, */*',
	};

	if (options.fullMetadata) {
		delete headers.accept;
	}

	if (authInfo) {
		headers.authorization = `${authInfo.type} ${authInfo.token}`;
	}

	let data;
	try {
		data = await ky(packageUrl, {headers, keepalive: true}).json();
	} catch (error) {
		if (error?.response?.status === 404) {
			throw new PackageNotFoundError(packageName);
		}

		throw error;
	}

	if (options.allVersions) {
		return data;
	}

	const versionError = new VersionNotFoundError(packageName, version);

	if (data['dist-tags'][version]) {
		const {time} = data;
		data = data.versions[data['dist-tags'][version]];
		data.time = time;
	} else if (version) {
		const versionExists = Boolean(data.versions[version]);

		if (omitDeprecated && !versionExists) {
			for (const [metadataVersion, metadata] of Object.entries(data.versions)) {
				if (metadata.deprecated) {
					delete data.versions[metadataVersion];
				}
			}
		}

		if (!versionExists) {
			const versions = Object.keys(data.versions);
			version = semver.maxSatisfying(versions, version);

			if (!version) {
				throw versionError;
			}
		}

		const {time} = data;
		data = data.versions[version];
		data.time = time;

		if (!data) {
			throw versionError;
		}
	}

	return data;
}
