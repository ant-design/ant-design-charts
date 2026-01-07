const postcss = require('postcss')
const syntax = require('postcss-less');
const sorting = require('postcss-sorting');
const createConfig = require('./factory');

module.exports = (value, opts = {}) => {
    return postcss({
        plugins: [sorting(createConfig())]
    }).process(value, { from: undefined ,syntax}).css;
}