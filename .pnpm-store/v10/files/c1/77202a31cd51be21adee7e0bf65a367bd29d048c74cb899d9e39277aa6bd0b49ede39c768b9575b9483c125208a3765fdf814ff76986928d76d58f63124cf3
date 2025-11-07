/**
 * Apply the given set of text changes to the input.
 *
 * @param {string} input
 * @param {readonly import('typescript').TextChange[]} changes
 */
module.exports.applyTextChanges = (input, changes) =>
	changes.reduceRight((text, change) => {
		const head = text.slice(0, change.span.start);
		const tail = text.slice(change.span.start + change.span.length);

		return `${head}${change.newText}${tail}`;
	}, input);
