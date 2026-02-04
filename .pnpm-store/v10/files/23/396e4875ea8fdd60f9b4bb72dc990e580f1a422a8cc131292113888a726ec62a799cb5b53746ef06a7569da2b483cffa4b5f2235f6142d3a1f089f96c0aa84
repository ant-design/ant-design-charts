const _ = require('lodash');

// eslint-disable-next-line max-params
module.exports = function checkOption(opts, primaryOption, secondaryOption, value) {
	const secondaryOptionValues = _.get(opts[primaryOption][1], secondaryOption);

	return _.includes(secondaryOptionValues, value);
};
