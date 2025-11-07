import {MergeExclusive} from 'type-fest';

export interface BaseOptions {
	/**
	The tag name of the release.
	*/
	readonly tag?: string;

	/**
	The branch name or commit SHA to point the release's tag at, if the tag doesn't already exist.

	Default: The default branch.
	*/
	readonly target?: string;

	/**
	The title of the release.

	GitHub shows the `tag` name when not specified.
	*/
	readonly title?: string;

	/**
	The description text of the release.
	*/
	readonly body?: string;

	/**
	Whether the release should be marked as a pre-release.

	@default false
	*/
	readonly isPrerelease?: boolean;
}

export interface RepoUrlOptions extends BaseOptions {
	/**
	The full URL to the repo.
	*/
	readonly repoUrl: string;
}

export interface UserRepoOptions extends BaseOptions {
	/**
	GitHub username or organization.
	*/
	readonly user: string;

	/**
	GitHub repo.
	*/
	readonly repo: string;
}

export type Options = MergeExclusive<RepoUrlOptions, UserRepoOptions>;

/**
Generate a URL for opening a new GitHub release with prefilled tag, body, and other fields.

@returns A URL string.

@example
```
import newGithubReleaseUrl from 'new-github-release-url';
import open from 'open';

const url = newGithubReleaseUrl({
	user: 'sindresorhus',
	repo: 'new-github-release-url',
	body: '\n\n\n---\nI\'m a human. Please be nice.'
});
//=> 'https://github.com/sindresorhus/new-github-release-url/releases/new?body=%0A%0A%0A---%0AI%27m+a+human.+Please+be+nice.'

// Then open it
await open(url);
```
*/
export default function newGithubReleaseUrl(options: Options): string;
