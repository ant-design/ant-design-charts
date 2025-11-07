// https://regex101.com/r/SQrOlx/20

const {source: organization} = /(?<organization>[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?)/;
const {source: repository} = /(?<repository>[\w.-]{1,100})/;
const {source: reservedRepository} = /(?<!\/\.{1,2})/;
const {source: issueNumber} = /(?<issueNumber>[1-9]\d{0,9})/;
const {source: initialDelimiter} = /(?<!\w)/;
const fullRegex = `${initialDelimiter}(?:(?:${organization}(?:\\/${repository})?)?${reservedRepository}#)${issueNumber}\\b`;

export default function issueRegex({additionalPrefix} = {}) {
	if (additionalPrefix) {
		return new RegExp(fullRegex.replace('#', '#|' + additionalPrefix), 'gi');
	}

	return new RegExp(fullRegex, 'gi');
}
