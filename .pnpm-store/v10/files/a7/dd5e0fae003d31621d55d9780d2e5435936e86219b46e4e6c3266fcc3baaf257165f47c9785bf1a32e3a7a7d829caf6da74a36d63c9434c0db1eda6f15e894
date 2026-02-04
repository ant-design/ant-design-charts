/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { RunOnceScheduler } from '../../../base/common/async.js';
import { onUnexpectedExternalError } from '../../../base/common/errors.js';
import { hash } from '../../../base/common/hash.js';
import { DisposableStore, toDisposable } from '../../../base/common/lifecycle.js';
import { registerEditorContribution } from '../../browser/editorExtensions.js';
import { ICodeEditorService } from '../../browser/services/codeEditorService.js';
import { InlayHintsProviderRegistry } from '../../common/modes.js';
import { flatten } from '../../../base/common/arrays.js';
import { editorInlayHintForeground, editorInlayHintBackground } from '../../../platform/theme/common/colorRegistry.js';
import { CancellationToken, CancellationTokenSource } from '../../../base/common/cancellation.js';
import { IThemeService } from '../../../platform/theme/common/themeService.js';
import { Range } from '../../common/core/range.js';
import { LanguageFeatureRequestDelays } from '../../common/modes/languageFeatureRegistry.js';
import { CommandsRegistry } from '../../../platform/commands/common/commands.js';
import { URI } from '../../../base/common/uri.js';
import { assertType } from '../../../base/common/types.js';
import { ITextModelService } from '../../common/services/resolverService.js';
import { Position } from '../../common/core/position.js';
const MAX_DECORATORS = 500;
export function getInlayHints(model, ranges, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const datas = [];
        const providers = InlayHintsProviderRegistry.ordered(model).reverse();
        const promises = flatten(providers.map(provider => ranges.map(range => Promise.resolve(provider.provideInlayHints(model, range, token)).then(result => {
            if (result) {
                datas.push({ list: result, provider });
            }
        }, err => {
            onUnexpectedExternalError(err);
        }))));
        yield Promise.all(promises);
        return datas;
    });
}
let InlayHintsController = class InlayHintsController {
    constructor(_editor, _codeEditorService, _themeService) {
        this._editor = _editor;
        this._codeEditorService = _codeEditorService;
        this._themeService = _themeService;
        this._disposables = new DisposableStore();
        this._sessionDisposables = new DisposableStore();
        this._getInlayHintsDelays = new LanguageFeatureRequestDelays(InlayHintsProviderRegistry, 250, 2500);
        this._decorationsTypeIds = [];
        this._decorationIds = [];
        this._disposables.add(InlayHintsProviderRegistry.onDidChange(() => this._update()));
        this._disposables.add(_themeService.onDidColorThemeChange(() => this._update()));
        this._disposables.add(_editor.onDidChangeModel(() => this._update()));
        this._disposables.add(_editor.onDidChangeModelLanguage(() => this._update()));
        this._disposables.add(_editor.onDidChangeConfiguration(e => {
            if (e.hasChanged(124 /* inlayHints */)) {
                this._update();
            }
        }));
        this._update();
    }
    dispose() {
        this._sessionDisposables.dispose();
        this._removeAllDecorations();
        this._disposables.dispose();
    }
    _update() {
        this._sessionDisposables.clear();
        if (!this._editor.getOption(124 /* inlayHints */).enabled) {
            this._removeAllDecorations();
            return;
        }
        const model = this._editor.getModel();
        if (!model || !InlayHintsProviderRegistry.has(model)) {
            this._removeAllDecorations();
            return;
        }
        const scheduler = new RunOnceScheduler(() => __awaiter(this, void 0, void 0, function* () {
            const t1 = Date.now();
            const cts = new CancellationTokenSource();
            this._sessionDisposables.add(toDisposable(() => cts.dispose(true)));
            const visibleRanges = this._editor.getVisibleRangesPlusViewportAboveBelow();
            const result = yield getInlayHints(model, visibleRanges, cts.token);
            // update moving average
            const newDelay = this._getInlayHintsDelays.update(model, Date.now() - t1);
            scheduler.delay = newDelay;
            // render hints
            this._updateHintsDecorators(result);
        }), this._getInlayHintsDelays.get(model));
        this._sessionDisposables.add(scheduler);
        // update inline hints when content or scroll position changes
        this._sessionDisposables.add(this._editor.onDidChangeModelContent(() => scheduler.schedule()));
        this._disposables.add(this._editor.onDidScrollChange(() => scheduler.schedule()));
        scheduler.schedule();
        // update inline hints when any any provider fires an event
        const providerListener = new DisposableStore();
        this._sessionDisposables.add(providerListener);
        for (const provider of InlayHintsProviderRegistry.all(model)) {
            if (typeof provider.onDidChangeInlayHints === 'function') {
                providerListener.add(provider.onDidChangeInlayHints(() => scheduler.schedule()));
            }
        }
    }
    _updateHintsDecorators(hintsData) {
        const { fontSize, fontFamily } = this._getLayoutInfo();
        const backgroundColor = this._themeService.getColorTheme().getColor(editorInlayHintBackground);
        const fontColor = this._themeService.getColorTheme().getColor(editorInlayHintForeground);
        const newDecorationsTypeIds = [];
        const newDecorationsData = [];
        const fontFamilyVar = '--inlayHintsFontFamily';
        this._editor.getContainerDomNode().style.setProperty(fontFamilyVar, fontFamily);
        for (const { list: hints } of hintsData) {
            for (let j = 0; j < hints.length && newDecorationsData.length < MAX_DECORATORS; j++) {
                const { text, position, whitespaceBefore, whitespaceAfter } = hints[j];
                const marginBefore = whitespaceBefore ? (fontSize / 3) | 0 : 0;
                const marginAfter = whitespaceAfter ? (fontSize / 3) | 0 : 0;
                const before = {
                    contentText: text,
                    backgroundColor: `${backgroundColor}`,
                    color: `${fontColor}`,
                    margin: `0px ${marginAfter}px 0px ${marginBefore}px`,
                    fontSize: `${fontSize}px`,
                    fontFamily: `var(${fontFamilyVar})`,
                    padding: `0px ${(fontSize / 4) | 0}px`,
                    borderRadius: `${(fontSize / 4) | 0}px`,
                };
                const key = 'inlayHints-' + hash(before).toString(16);
                this._codeEditorService.registerDecorationType('inlay-hints-controller', key, { before }, undefined, this._editor);
                // decoration types are ref-counted which means we only need to
                // call register und remove equally often
                newDecorationsTypeIds.push(key);
                const options = this._codeEditorService.resolveDecorationOptions(key, true);
                newDecorationsData.push({
                    range: Range.fromPositions(position),
                    options
                });
            }
        }
        this._decorationsTypeIds.forEach(this._codeEditorService.removeDecorationType, this._codeEditorService);
        this._decorationsTypeIds = newDecorationsTypeIds;
        this._decorationIds = this._editor.deltaDecorations(this._decorationIds, newDecorationsData);
    }
    _getLayoutInfo() {
        const options = this._editor.getOption(124 /* inlayHints */);
        const editorFontSize = this._editor.getOption(42 /* fontSize */);
        let fontSize = options.fontSize;
        if (!fontSize || fontSize < 5 || fontSize > editorFontSize) {
            fontSize = (editorFontSize * .9) | 0;
        }
        const fontFamily = options.fontFamily;
        return { fontSize, fontFamily };
    }
    _removeAllDecorations() {
        this._decorationIds = this._editor.deltaDecorations(this._decorationIds, []);
        this._decorationsTypeIds.forEach(this._codeEditorService.removeDecorationType, this._codeEditorService);
        this._decorationsTypeIds = [];
    }
};
InlayHintsController.ID = 'editor.contrib.InlayHints';
InlayHintsController = __decorate([
    __param(1, ICodeEditorService),
    __param(2, IThemeService)
], InlayHintsController);
export { InlayHintsController };
registerEditorContribution(InlayHintsController.ID, InlayHintsController);
CommandsRegistry.registerCommand('_executeInlayHintProvider', (accessor, ...args) => __awaiter(void 0, void 0, void 0, function* () {
    const [uri, range] = args;
    assertType(URI.isUri(uri));
    assertType(Range.isIRange(range));
    const ref = yield accessor.get(ITextModelService).createModelReference(uri);
    try {
        const data = yield getInlayHints(ref.object.textEditorModel, [Range.lift(range)], CancellationToken.None);
        return flatten(data.map(item => item.list)).sort((a, b) => Position.compare(a.position, b.position));
    }
    finally {
        ref.dispose();
    }
}));
