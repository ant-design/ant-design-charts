import type {PackageJson} from 'type-fest';

type Person = Readonly<PackageJson.Person>;

type PersonObject = Exclude<Person, string>;

// eslint-disable-next-line unicorn/prevent-abbreviations
type Dist = Readonly<{
	/**
	The URL of the tarball containing the payload for the package.
	*/
	tarball: string;

	/**
	The SHA-1 sum of the tarball.
	*/
	shasum: string;

	/**
	A string in the format `<hashAlgorithm>-<base64-hash>`. Refer to the {@link https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity Subresource Integrity} docs on MDN and the {@link https://github.com/npm/cacache#integrity `cacache`} package for more information.

	@since April 2017
	*/
	integrity?: string;

	/**
	The number of files in the tarball, folder excluded.

	@since February 2018
	*/
	fileCount?: number;

	/**
	The total bytes of the unpacked files in the tarball.

	@since February 2018
	*/
	unpackedSize?: number;

	/**
	A PGP signature in the format `<package>@<version>:<integrity>`.

	@since April 2018
	@deprecated April 2023, see https://docs.npmjs.com/about-registry-signatures
	*/
	'npm-signature'?: string;

	/**
	ECDSA signature(s).

	@see https://docs.npmjs.com/about-registry-signatures
	@since April 2023
	*/
	signatures?: Array<{
		/**
		A SHA-256 public key.
		*/
		keyid: string;

		sig: string;
	}>;
}>;

type AbbreviatedVersionPackageJsonFields = (
	| 'dependencies'
	| 'optionalDependencies'
	| 'devDependencies'
	| 'bundleDependencies'
	| 'peerDependencies'
	| 'peerDependenciesMeta'
	| 'bin'
	| 'directories'
	| 'engines'
	| 'cpu'
	| 'os'
	| 'funding'
);

type AbbreviatedVersion = Readonly<{
	/**
	The name of the package.
	*/
	name: string;

	/**
	Package version, parseable by [`node-semver`](https://github.com/npm/node-semver).
	*/
	version: string;

	dist: Dist;

	/**
	The deprecation warnings message of this version. A version is deprecated if this field is set.
	*/
	deprecated?: string;

	/**
	Whether or not this version has a shrinkwrap used to install it. If this field is `undefined`, the client must determine through other means if a shrinkwrap exists.
	*/
	_hasShrinkwrap?: boolean;

	/**
	Whether or not this version has an `install` script.
	*/
	hasInstallScript?: boolean;
}> & Pick<Readonly<PackageJson>, AbbreviatedVersionPackageJsonFields>;

// eslint-disable-next-line unicorn/prevent-abbreviations
type DistTags = {
	[tagName: string]: string;
	latest: string;
};

type AbbreviatedMetadata = Readonly<{
	/**
	The name of the package.
	*/
	name: string;

	/**
	An {@link https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations ISO timestamp} of the last time the package was modified.
	*/
	modified: string;

	'dist-tags': DistTags;

	versions: Record<string, AbbreviatedVersion>;
}>;

type Repository = Readonly<Exclude<PackageJson['repository'], string>>;

type HoistedPackageJsonFields = (
	| 'author'
	| 'bugs'
	| 'contributors'
	| 'description'
	| 'homepage'
	| 'keywords'
	| 'license'
);

// Hoisted from latest version
type HoistedData = Readonly<{
	/**
	People with permission to publish the package. Not authoritative but informational.
	*/
	maintainers?: PersonObject[];

	repository?: Repository;
}> & Pick<Readonly<PackageJson>, HoistedPackageJsonFields>;

type FullVersion = Readonly<{
	/**
	`package@version`
	*/
	_id: string;

	_shasum: string;

	_from: string;

	/**
	The version of npm used to publish the package.
	*/
	_npmVersion: string;

	/**
	The version of Node.js used to publish the package.
	*/
	_nodeVersion: string;

	/**
	The npm user who published this version.
	*/
	_npmUser: PersonObject;

	licenseText?: string;

	gitHead?: string;
}> & Readonly<Omit<PackageJson, 'repository'>> & Omit<AbbreviatedVersion, 'hasInstallScript'> & HoistedData;

type FullMetadata = Readonly<{
	/**
	The name of the package, used as an ID in CouchDB.
	*/
	_id: string;

	/**
	The revision number of this version of the document in CouchDB.
	*/
	_rev: string;

	/**
	A mapping of versions to the time they were published. Each value is an {@link https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations ISO timestamp}.
	*/
	time: {
		[version: string]: string;

		/**
		When the package was created.
		*/
		created: string;

		/**
		When the package was last modified.
		*/
		modified: string;
	};

	/**
	NPM users who have starred the package.
	*/
	users?: Readonly<Record<string, boolean>>;

	versions: Readonly<Record<string, FullVersion>>;
}> & AbbreviatedMetadata & HoistedData;

/**
The error thrown when the given package version cannot be found.
*/
export class VersionNotFoundError extends Error {
	readonly name: 'VersionNotFoundError';

	constructor(packageName: string, version: string);
}

/**
The error thrown when the given package name cannot be found.
*/
export class PackageNotFoundError extends Error {
	readonly name: 'PackageNotFoundError';

	constructor(packageName: string);
}

export type Options = Readonly<{
	/**
	Package version such as `1.0.0` or a [dist tag](https://docs.npmjs.com/cli/dist-tag) such as `latest`.

	The version can also be in any format supported by the [semver](https://github.com/npm/node-semver) module. For example:
	- `1` - Get the latest `1.x.x`
	- `1.2` - Get the latest `1.2.x`
	- `^1.2.3` - Get the latest `1.x.x` but at least `1.2.3`
	- `~1.2.3` - Get the latest `1.2.x` but at least `1.2.3`

	@default 'latest'
	*/
	version?: string;

	/**
	By default, only an abbreviated metadata object is returned for performance reasons. [Read more.](https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md)

	@default false
	*/
	fullMetadata?: boolean;

	/**
	Return the [main entry](https://registry.npmjs.org/ava) containing all versions.

	@default false
	*/
	allVersions?: boolean;

	/**
	The registry URL is by default inferred from the npm defaults and `.npmrc`. This is beneficial as `package-json` and any project using it will work just like npm. This option is*only** intended for internal tools. You should __not__ use this option in reusable packages. Prefer just using `.npmrc` whenever possible.
	*/
	registryUrl?: string;

	/**
	Whether or not to omit deprecated versions of a package.

	If set, versions marked as deprecated on the registry are omitted from results. Providing a dist tag or a specific version will still return that version, even if it's deprecated. If no version can be found once deprecated versions are omitted, a `VersionNotFoundError` is thrown.

	@default true
	*/
	omitDeprecated?: boolean;
}>;

/**
Get metadata of a package from the npm registry.

@param packageName - Name of the package.

@example
```
import packageJson from 'package-json';

console.log(await packageJson('ava'));
//=> {name: 'ava', …}

// Also works with scoped packages
console.log(await packageJson('@sindresorhus/df'));
```
*/
export default function packageJson<ProvidedOptions extends Options>(packageName: string, options?: ProvidedOptions): Promise<(
	ProvidedOptions extends {fullMetadata: true}
		? ProvidedOptions extends {allVersions: true}
			? FullMetadata
			: FullVersion & Pick<FullMetadata, 'time'>
		: ProvidedOptions extends {allVersions: true}
			? AbbreviatedMetadata
			: AbbreviatedVersion
)>;
