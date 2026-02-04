"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var tsEslintConfig_1 = require("./tsEslintConfig");
var isTypeAwareEnabled = process.env.DISABLE_TYPE_AWARE === undefined;
var parserOptions = {
    ecmaFeatures: {
        jsx: true,
    },
    babelOptions: {
        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
        ],
    },
    requireConfigFile: false,
    project: isTypeAwareEnabled ? './tsconfig.json' : undefined,
};
var isJsMoreTs = function (path) {
    if (path === void 0) { path = 'src'; }
    return __awaiter(void 0, void 0, void 0, function () {
        var fg, jsFiles, tsFiles;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fg = require('fast-glob');
                    return [4 /*yield*/, fg("".concat(path, "/src/**/*.{js,jsx}"), { deep: 3 })];
                case 1:
                    jsFiles = _a.sent();
                    return [4 /*yield*/, fg("".concat(path, "/src/**/*.{ts,tsx}"), { deep: 3 })];
                case 2:
                    tsFiles = _a.sent();
                    return [2 /*return*/, jsFiles.length > tsFiles.length];
            }
        });
    });
};
var isTsProject = fs.existsSync(path.join(process.cwd() || '.', './tsconfig.json'));
if (isTsProject) {
    try {
        isJsMoreTs(process.cwd()).then(function (jsMoreTs) {
            if (!jsMoreTs)
                return;
            console.log('这是一个 TypeScript 项目，如果不是请删除 tsconfig.json');
        });
    }
    catch (e) {
        console.log(e);
    }
}
module.exports = {
    extends: ['prettier', 'plugin:react/recommended'],
    parser: '@babel/eslint-parser',
    plugins: ['react', 'jest', 'unicorn', 'react-hooks'],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        jest: true,
        jasmine: true,
    },
    rules: {
        strict: ['error', 'never'],
        'react/display-name': 0,
        'react/jsx-props-no-spreading': 0,
        'react/state-in-constructor': 0,
        'react/static-property-placement': 0,
        // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        'react/destructuring-assignment': 'off',
        'react/jsx-filename-extension': 'off',
        'react/no-array-index-key': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/require-default-props': 0,
        'react/jsx-fragments': 0,
        'react/jsx-wrap-multilines': 0,
        'react/prop-types': 0,
        'react/forbid-prop-types': 0,
        'react/sort-comp': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-one-expression-per-line': 0,
        'generator-star-spacing': 0,
        'function-paren-newline': 0,
        'sort-imports': 0,
        'class-methods-use-this': 0,
        'no-confusing-arrow': 0,
        'linebreak-style': 0,
        // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'off',
        'unicorn/prevent-abbreviations': 'off',
        // Conflict with prettier
        'arrow-body-style': 0,
        'arrow-parens': 0,
        'object-curly-newline': 0,
        'implicit-arrow-linebreak': 0,
        'operator-linebreak': 0,
        'no-param-reassign': 2,
        'space-before-function-paren': 0,
        'react/self-closing-comp': 1,
        'react/jsx-key': 1,
    },
    settings: {
        // support import modules from TypeScript files in JavaScript files
        'import/resolver': {
            node: {
                extensions: isTsProject ? ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] : ['.js', '.jsx'],
            },
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
        },
        'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
        react: {
            version: 'detect',
        },
    },
    overrides: isTsProject
        ? [
            {
                files: ['**/*.{ts,tsx}'],
                parser: '@typescript-eslint/parser',
                rules: tsEslintConfig_1.default,
                extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
            },
        ]
        : [],
    parserOptions: parserOptions,
};
