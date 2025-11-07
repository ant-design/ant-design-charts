"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parameterTable = void 0;
const theme_1 = require("../../theme");
const strip_line_breaks_1 = require("./strip-line-breaks");
const type_1 = require("./type");
function parameterTable() {
    const defaultValues = this.map(param => !!param.defaultValue);
    const hasDefaultValues = !defaultValues.every(value => !value);
    const comments = this.map(param => (param.comment && !!param.comment.text) || (param.comment && !!param.comment.shortText));
    const hasComments = !comments.every(value => !value);
    const headers = ['Name', 'Type'];
    if (hasDefaultValues) {
        headers.push('Default');
    }
    if (hasComments) {
        headers.push('Description');
    }
    const rows = this.map(parameter => {
        const isOptional = parameter.flags.includes('Optional');
        const typeOut = type_1.type.call(parameter.type);
        const row = [
            `\`${parameter.flags.isRest ? '...' : ''}${parameter.name}${isOptional ? '?' : ''}\``,
            typeOut ? typeOut.toString().replace(/\|/g, '&#124;') : '',
        ];
        if (hasDefaultValues) {
            row.push(parameter.defaultValue ? parameter.defaultValue : '-');
        }
        if (hasComments) {
            const commentsText = [];
            if (parameter.comment && parameter.comment.shortText) {
                commentsText.push(theme_1.default.handlebars.helpers.comment.call(strip_line_breaks_1.stripLineBreaks.call(parameter.comment.shortText)));
            }
            if (parameter.comment && parameter.comment.text) {
                commentsText.push(theme_1.default.handlebars.helpers.comment.call(strip_line_breaks_1.stripLineBreaks.call(parameter.comment.text)));
            }
            row.push(commentsText.length > 0 ? commentsText.join(' ') : '-');
        }
        return `${row.join(' | ')} |\n`;
    });
    const output = `\n${headers.join(' | ')} |\n${headers.map(() => '------').join(' | ')} |\n${rows.join('')}`;
    return output;
}
exports.parameterTable = parameterTable;
