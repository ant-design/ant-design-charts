"use strict";
/** @format */
module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-css-modules',
        'stylelint-config-prettier',
    ],
    plugins: ['stylelint-declaration-block-no-ignored-properties'],
    rules: {
        'no-descending-specificity': null,
        'function-url-quotes': 'always',
        'selector-attribute-quotes': 'always',
        'font-family-no-missing-generic-family-keyword': null,
        'plugin/declaration-block-no-ignored-properties': true,
        'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
        // webcomponent
        'selector-type-no-unknown': null,
        'value-keyword-case': ['lower', { ignoreProperties: ['composes'] }],
    },
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
