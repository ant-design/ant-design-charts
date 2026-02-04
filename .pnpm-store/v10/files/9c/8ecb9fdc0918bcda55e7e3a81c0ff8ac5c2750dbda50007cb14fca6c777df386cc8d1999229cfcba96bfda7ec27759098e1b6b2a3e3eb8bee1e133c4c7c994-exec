'use strict';

const regex = '@[a-z\\d][\\w-.]+/?';

const orgRegex = options =>
	options && options.exact ?
		new RegExp(`^${regex}$`, 'i') :
		new RegExp(regex, 'gi');

module.exports = orgRegex;

