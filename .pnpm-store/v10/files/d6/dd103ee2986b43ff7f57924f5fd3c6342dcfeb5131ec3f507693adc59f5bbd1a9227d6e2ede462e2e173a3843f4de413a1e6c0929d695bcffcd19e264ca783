import '../../editor/editor.api.js';
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages, Emitter } from './fillers/monaco-editor-core.js';
// --- CSS configuration and defaults ---------
var LanguageServiceDefaultsImpl = /** @class */ (function () {
    function LanguageServiceDefaultsImpl(languageId, options, modeConfiguration) {
        this._onDidChange = new Emitter();
        this._languageId = languageId;
        this.setOptions(options);
        this.setModeConfiguration(modeConfiguration);
    }
    Object.defineProperty(LanguageServiceDefaultsImpl.prototype, "onDidChange", {
        get: function () {
            return this._onDidChange.event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LanguageServiceDefaultsImpl.prototype, "languageId", {
        get: function () {
            return this._languageId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LanguageServiceDefaultsImpl.prototype, "modeConfiguration", {
        get: function () {
            return this._modeConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LanguageServiceDefaultsImpl.prototype, "diagnosticsOptions", {
        get: function () {
            return this.options;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LanguageServiceDefaultsImpl.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    LanguageServiceDefaultsImpl.prototype.setOptions = function (options) {
        this._options = options || Object.create(null);
        this._onDidChange.fire(this);
    };
    LanguageServiceDefaultsImpl.prototype.setDiagnosticsOptions = function (options) {
        this.setOptions(options);
    };
    LanguageServiceDefaultsImpl.prototype.setModeConfiguration = function (modeConfiguration) {
        this._modeConfiguration = modeConfiguration || Object.create(null);
        this._onDidChange.fire(this);
    };
    return LanguageServiceDefaultsImpl;
}());
var optionsDefault = {
    validate: true,
    lint: {
        compatibleVendorPrefixes: 'ignore',
        vendorPrefix: 'warning',
        duplicateProperties: 'warning',
        emptyRules: 'warning',
        importStatement: 'ignore',
        boxModel: 'ignore',
        universalSelector: 'ignore',
        zeroUnits: 'ignore',
        fontFaceProperties: 'warning',
        hexColorLength: 'error',
        argumentsInColorFunction: 'error',
        unknownProperties: 'warning',
        ieHack: 'ignore',
        unknownVendorSpecificProperties: 'ignore',
        propertyIgnoredDueToDisplay: 'warning',
        important: 'ignore',
        float: 'ignore',
        idSelector: 'ignore'
    },
    data: { useDefaultDataProvider: true }
};
var modeConfigurationDefault = {
    completionItems: true,
    hovers: true,
    documentSymbols: true,
    definitions: true,
    references: true,
    documentHighlights: true,
    rename: true,
    colors: true,
    foldingRanges: true,
    diagnostics: true,
    selectionRanges: true
};
export var cssDefaults = new LanguageServiceDefaultsImpl('css', optionsDefault, modeConfigurationDefault);
export var scssDefaults = new LanguageServiceDefaultsImpl('scss', optionsDefault, modeConfigurationDefault);
export var lessDefaults = new LanguageServiceDefaultsImpl('less', optionsDefault, modeConfigurationDefault);
// export to the global based API
languages.css = { cssDefaults: cssDefaults, lessDefaults: lessDefaults, scssDefaults: scssDefaults };
// --- Registration to monaco editor ---
function getMode() {
    return import('./cssMode.js');
}
languages.onLanguage('less', function () {
    getMode().then(function (mode) { return mode.setupMode(lessDefaults); });
});
languages.onLanguage('scss', function () {
    getMode().then(function (mode) { return mode.setupMode(scssDefaults); });
});
languages.onLanguage('css', function () {
    getMode().then(function (mode) { return mode.setupMode(cssDefaults); });
});
