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
import { Disposable, MutableDisposable, toDisposable } from '../../../base/common/lifecycle.js';
import { EditorAction, EditorCommand, registerEditorAction, registerEditorCommand, registerEditorContribution } from '../../browser/editorExtensions.js';
import { EditorContextKeys } from '../../common/editorContextKeys.js';
import { GhostTextWidget } from './ghostTextWidget.js';
import { InlineCompletionsModel } from './inlineCompletionsModel.js';
import { SuggestWidgetAdapterModel } from './suggestWidgetAdapterModel.js';
import * as nls from '../../../nls.js';
import { ICommandService } from '../../../platform/commands/common/commands.js';
import { ContextKeyExpr, IContextKeyService, RawContextKey } from '../../../platform/contextkey/common/contextkey.js';
import { IInstantiationService } from '../../../platform/instantiation/common/instantiation.js';
let GhostTextController = class GhostTextController extends Disposable {
    constructor(editor, instantiationService, contextKeyService) {
        super();
        this.editor = editor;
        this.instantiationService = instantiationService;
        this.activeController = this._register(new MutableDisposable());
        this.triggeredExplicitly = false;
        this.contextKeys = new GhostTextContextKeys(contextKeyService);
        this.widget = this._register(instantiationService.createInstance(GhostTextWidget, this.editor));
        this._register(this.editor.onDidChangeModel(() => {
            this.updateModelController();
        }));
        this._register(this.editor.onDidChangeConfiguration((e) => {
            if (e.hasChanged(104 /* suggest */)) {
                this.updateModelController();
            }
        }));
        this.updateModelController();
    }
    static get(editor) {
        return editor.getContribution(GhostTextController.ID);
    }
    // Don't call this method when not neccessary. It will recreate the activeController.
    updateModelController() {
        const suggestOptions = this.editor.getOption(104 /* suggest */);
        const inlineSuggestOptions = this.editor.getOption(52 /* inlineSuggest */);
        this.activeController.value = undefined;
        // ActiveGhostTextController is only created if one of those settings is set or if the inline completions are triggered explicitly.
        this.activeController.value =
            this.editor.hasModel() && (suggestOptions.preview || inlineSuggestOptions.enabled || this.triggeredExplicitly)
                ? this.instantiationService.createInstance(ActiveGhostTextController, this.editor, this.widget, this.contextKeys)
                : undefined;
    }
    shouldShowHoverAt(hoverRange) {
        var _a;
        return ((_a = this.activeController.value) === null || _a === void 0 ? void 0 : _a.shouldShowHoverAt(hoverRange)) || false;
    }
    shouldShowHoverAtViewZone(viewZoneId) {
        return this.widget.shouldShowHoverAtViewZone(viewZoneId);
    }
    trigger() {
        var _a;
        this.triggeredExplicitly = true;
        if (!this.activeController.value) {
            this.updateModelController();
        }
        (_a = this.activeController.value) === null || _a === void 0 ? void 0 : _a.triggerInlineCompletion();
    }
    commit() {
        var _a;
        (_a = this.activeController.value) === null || _a === void 0 ? void 0 : _a.commitInlineCompletion();
    }
    hide() {
        var _a;
        (_a = this.activeController.value) === null || _a === void 0 ? void 0 : _a.hideInlineCompletion();
    }
    showNextInlineCompletion() {
        var _a;
        (_a = this.activeController.value) === null || _a === void 0 ? void 0 : _a.showNextInlineCompletion();
    }
    showPreviousInlineCompletion() {
        var _a;
        (_a = this.activeController.value) === null || _a === void 0 ? void 0 : _a.showPreviousInlineCompletion();
    }
};
GhostTextController.inlineSuggestionVisible = new RawContextKey('inlineSuggestionVisible ', false, nls.localize('inlineSuggestionVisible', "Whether an inline suggestion is visible"));
GhostTextController.inlineSuggestionHasIndentation = new RawContextKey('inlineSuggestionHasIndentation', false, nls.localize('inlineSuggestionHasIndentation', "Whether the inline suggestion starts with whitespace"));
GhostTextController.ID = 'editor.contrib.ghostTextController';
GhostTextController = __decorate([
    __param(1, IInstantiationService),
    __param(2, IContextKeyService)
], GhostTextController);
export { GhostTextController };
// TODO: This should be local state to the editor.
// The global state should depend on the local state of the currently focused editor.
// Currently the global state is updated directly, which may lead to conflicts if multiple ghost texts are active.
class GhostTextContextKeys {
    constructor(contextKeyService) {
        this.contextKeyService = contextKeyService;
        this.lastInlineCompletionVisibleValue = false;
        this.inlineCompletionVisible = GhostTextController.inlineSuggestionVisible.bindTo(this.contextKeyService);
        this.lastInlineCompletionSuggestsIndentationValue = false;
        this.inlineCompletionSuggestsIndentation = GhostTextController.inlineSuggestionHasIndentation.bindTo(this.contextKeyService);
    }
    setInlineCompletionVisible(value) {
        // Only modify the context key if we actually changed it.
        // Thus, we don't overwrite values set by someone else.
        if (value !== this.lastInlineCompletionVisibleValue) {
            this.inlineCompletionVisible.set(value);
            this.lastInlineCompletionVisibleValue = value;
        }
    }
    setInlineCompletionSuggestsIndentation(value) {
        if (value !== this.lastInlineCompletionSuggestsIndentationValue) {
            this.inlineCompletionSuggestsIndentation.set(value);
            this.lastInlineCompletionSuggestsIndentationValue = value;
        }
    }
}
/**
 * The controller for a text editor with an initialized text model.
*/
let ActiveGhostTextController = class ActiveGhostTextController extends Disposable {
    constructor(editor, widget, contextKeys, commandService) {
        super();
        this.editor = editor;
        this.widget = widget;
        this.contextKeys = contextKeys;
        this.commandService = commandService;
        this.suggestWidgetAdapterModel = this._register(new SuggestWidgetAdapterModel(this.editor));
        this.inlineCompletionsModel = this._register(new InlineCompletionsModel(this.editor, this.commandService));
        this._register(this.suggestWidgetAdapterModel.onDidChange(() => {
            this.updateModel();
            // When the suggest widget becomes inactive and an inline completion
            // becomes visible, we need to update the context keys.
            this.updateContextKeys();
        }));
        this.updateModel();
        this._register(toDisposable(() => {
            if (widget.model === this.suggestWidgetAdapterModel || widget.model === this.inlineCompletionsModel) {
                widget.setModel(undefined);
            }
            this.contextKeys.setInlineCompletionVisible(false);
            this.contextKeys.setInlineCompletionSuggestsIndentation(false);
        }));
        if (this.inlineCompletionsModel) {
            this._register(this.inlineCompletionsModel.onDidChange(() => {
                this.updateContextKeys();
            }));
        }
    }
    get activeInlineCompletionsModel() {
        if (this.widget.model === this.inlineCompletionsModel) {
            return this.inlineCompletionsModel;
        }
        return undefined;
    }
    updateContextKeys() {
        var _a, _b;
        this.contextKeys.setInlineCompletionVisible(((_a = this.activeInlineCompletionsModel) === null || _a === void 0 ? void 0 : _a.ghostText) !== undefined);
        if ((_b = this.inlineCompletionsModel) === null || _b === void 0 ? void 0 : _b.ghostText) {
            const firstLine = this.inlineCompletionsModel.ghostText.lines[0] || '';
            const suggestionStartsWithWs = firstLine.startsWith(' ') || firstLine.startsWith('\t');
            const p = this.inlineCompletionsModel.ghostText.position;
            const indentationEndColumn = this.editor.getModel().getLineIndentColumn(p.lineNumber);
            const inIndentation = p.column <= indentationEndColumn;
            this.contextKeys.setInlineCompletionSuggestsIndentation(this.widget.model === this.inlineCompletionsModel
                && suggestionStartsWithWs && inIndentation);
        }
        else {
            this.contextKeys.setInlineCompletionSuggestsIndentation(false);
        }
    }
    shouldShowHoverAt(hoverRange) {
        var _a;
        const ghostText = (_a = this.activeInlineCompletionsModel) === null || _a === void 0 ? void 0 : _a.ghostText;
        if (ghostText) {
            return hoverRange.containsPosition(ghostText.position);
        }
        return false;
    }
    triggerInlineCompletion() {
        var _a;
        (_a = this.activeInlineCompletionsModel) === null || _a === void 0 ? void 0 : _a.startSession();
    }
    commitInlineCompletion() {
        var _a;
        (_a = this.activeInlineCompletionsModel) === null || _a === void 0 ? void 0 : _a.commitCurrentSuggestion();
    }
    hideInlineCompletion() {
        var _a;
        (_a = this.activeInlineCompletionsModel) === null || _a === void 0 ? void 0 : _a.hide();
    }
    showNextInlineCompletion() {
        var _a;
        (_a = this.activeInlineCompletionsModel) === null || _a === void 0 ? void 0 : _a.showNext();
    }
    showPreviousInlineCompletion() {
        var _a;
        (_a = this.activeInlineCompletionsModel) === null || _a === void 0 ? void 0 : _a.showPrevious();
    }
    updateModel() {
        var _a;
        this.widget.setModel(this.suggestWidgetAdapterModel.isActive
            ? this.suggestWidgetAdapterModel
            : this.inlineCompletionsModel);
        (_a = this.inlineCompletionsModel) === null || _a === void 0 ? void 0 : _a.setActive(this.widget.model === this.inlineCompletionsModel);
    }
};
ActiveGhostTextController = __decorate([
    __param(3, ICommandService)
], ActiveGhostTextController);
export { ActiveGhostTextController };
const GhostTextCommand = EditorCommand.bindToContribution(GhostTextController.get);
export const commitInlineSuggestionAction = new GhostTextCommand({
    id: 'editor.action.inlineSuggest.commit',
    precondition: ContextKeyExpr.and(GhostTextController.inlineSuggestionVisible, GhostTextController.inlineSuggestionHasIndentation.toNegated(), EditorContextKeys.tabMovesFocus.toNegated()),
    kbOpts: {
        weight: 100,
        primary: 2 /* Tab */,
    },
    handler(x) {
        x.commit();
        x.editor.focus();
    }
});
registerEditorCommand(commitInlineSuggestionAction);
registerEditorCommand(new GhostTextCommand({
    id: 'editor.action.inlineSuggest.hide',
    precondition: GhostTextController.inlineSuggestionVisible,
    kbOpts: {
        weight: 100,
        primary: 9 /* Escape */,
    },
    handler(x) {
        x.hide();
    }
}));
export class ShowNextInlineSuggestionAction extends EditorAction {
    constructor() {
        super({
            id: ShowNextInlineSuggestionAction.ID,
            label: nls.localize('action.inlineSuggest.showNext', "Show Next Inline Suggestion"),
            alias: 'Show Next Inline Suggestion',
            precondition: ContextKeyExpr.and(EditorContextKeys.writable, GhostTextController.inlineSuggestionVisible),
            kbOpts: {
                weight: 100,
                primary: 512 /* Alt */ | 89 /* US_CLOSE_SQUARE_BRACKET */,
            },
        });
    }
    run(accessor, editor) {
        return __awaiter(this, void 0, void 0, function* () {
            const controller = GhostTextController.get(editor);
            if (controller) {
                controller.showNextInlineCompletion();
                editor.focus();
            }
        });
    }
}
ShowNextInlineSuggestionAction.ID = 'editor.action.inlineSuggest.showNext';
export class ShowPreviousInlineSuggestionAction extends EditorAction {
    constructor() {
        super({
            id: ShowPreviousInlineSuggestionAction.ID,
            label: nls.localize('action.inlineSuggest.showPrevious', "Show Previous Inline Suggestion"),
            alias: 'Show Previous Inline Suggestion',
            precondition: ContextKeyExpr.and(EditorContextKeys.writable, GhostTextController.inlineSuggestionVisible),
            kbOpts: {
                weight: 100,
                primary: 512 /* Alt */ | 87 /* US_OPEN_SQUARE_BRACKET */,
            },
        });
    }
    run(accessor, editor) {
        return __awaiter(this, void 0, void 0, function* () {
            const controller = GhostTextController.get(editor);
            if (controller) {
                controller.showPreviousInlineCompletion();
                editor.focus();
            }
        });
    }
}
ShowPreviousInlineSuggestionAction.ID = 'editor.action.inlineSuggest.showPrevious';
export class TriggerInlineSuggestionAction extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.inlineSuggest.trigger',
            label: nls.localize('action.inlineSuggest.trigger', "Trigger Inline Suggestion"),
            alias: 'Trigger Inline Suggestion',
            precondition: EditorContextKeys.writable
        });
    }
    run(accessor, editor) {
        return __awaiter(this, void 0, void 0, function* () {
            const controller = GhostTextController.get(editor);
            if (controller) {
                controller.trigger();
            }
        });
    }
}
registerEditorContribution(GhostTextController.ID, GhostTextController);
registerEditorAction(TriggerInlineSuggestionAction);
registerEditorAction(ShowNextInlineSuggestionAction);
registerEditorAction(ShowPreviousInlineSuggestionAction);
