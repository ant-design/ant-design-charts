import type {Options as PackageJsonOptions} from 'package-json';

export {PackageNotFoundError, VersionNotFoundError} from 'package-json';

export type Options = Pick<PackageJsonOptions, 'version' | 'registryUrl' | 'omitDeprecated'>;

/**
Get the latest version of an npm package.

@example
```
import latestVersion from 'latest-version';

console.log(await latestVersion('ava'));
//=> '6.1.1'

console.log(await latestVersion('@sindresorhus/df'));
//=> '4.0.0'

// Also works with semver ranges and dist-tags
console.log(await latestVersion('npm', {version: 'latest-5'}));
//=> '5.10.0'
```
*/
export default function latestVersion(packageName: string, options?: Options): Promise<string>;
