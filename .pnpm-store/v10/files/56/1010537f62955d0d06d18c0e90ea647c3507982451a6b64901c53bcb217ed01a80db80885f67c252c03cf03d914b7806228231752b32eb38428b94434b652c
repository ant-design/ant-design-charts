# new-github-release-url

> Generate a URL for opening a new GitHub release with prefilled tag, body, and other fields

GitHub supports prefilling a new release by setting [certain search parameters](https://github.com/isaacs/github/issues/1410#issuecomment-442240267). This package simplifies generating such URL.

## Install

```sh
$ npm install new-github-release-url
```

## Usage

```js
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

## API

### newGithubReleaseUrl(options)

Returns a URL string.

#### options

Type: `object`

You are required to either specify the `repoUrl` option or both the `user` and `repo` options.

##### repoUrl

Type: `string`

The full URL to the repo.

##### user

Type: `string`

GitHub username or organization.

##### repo

Type: `string`

GitHub repo.

##### tag

Type: `string`

The tag name of the release.

##### target

Type: `string`\
Default: The default branch

The branch name or commit SHA to point the release's tag at, if the tag doesn't already exist.

##### title

Type: `string`

The title of the release.

GitHub shows the `tag` name when not specified.

##### body

Type: `string`

The description text of the release.

##### isPrerelease

Type: `boolean`\
Default: `false`

Whether the release should be marked as a pre-release.

## Related

- [new-github-issue-url](https://github.com/sindresorhus/new-github-issue-url) - Generate a URL for opening a new GitHub issue with prefilled title, body, and other fields
