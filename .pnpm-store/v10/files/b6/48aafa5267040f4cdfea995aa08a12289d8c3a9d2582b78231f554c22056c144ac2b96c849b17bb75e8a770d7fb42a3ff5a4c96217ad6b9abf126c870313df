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
import * as dom from '../../../base/browser/dom.js';
import { DisposableStore, Disposable } from '../../../base/common/lifecycle.js';
import { Position } from '../../common/core/position.js';
import { Range } from '../../common/core/range.js';
import { ModelDecorationOptions } from '../../common/model/textModel.js';
import { TokenizationRegistry } from '../../common/modes.js';
import { HoverOperation } from './hoverOperation.js';
import { registerThemingParticipant } from '../../../platform/theme/common/themeService.js';
import { coalesce, flatten } from '../../../base/common/arrays.js';
import { textLinkForeground } from '../../../platform/theme/common/colorRegistry.js';
import { Widget } from '../../../base/browser/ui/widget.js';
import { HoverWidget, renderHoverAction } from '../../../base/browser/ui/hover/hoverWidget.js';
import { MarkerHoverParticipant } from './markerHoverParticipant.js';
import { IInstantiationService } from '../../../platform/instantiation/common/instantiation.js';
import { MarkdownHoverParticipant } from './markdownHoverParticipant.js';
import { InlineCompletionsHoverParticipant } from '../inlineCompletions/inlineCompletionsHoverParticipant.js';
import { ColorHoverParticipant } from './colorHoverParticipant.js';
import { IKeybindingService } from '../../../platform/keybinding/common/keybinding.js';
import { HoverRangeAnchor } from './hoverTypes.js';
const $ = dom.$;
let EditorHoverStatusBar = class EditorHoverStatusBar extends Disposable {
    constructor(_keybindingService) {
        super();
        this._keybindingService = _keybindingService;
        this._hasContent = false;
        this.hoverElement = $('div.hover-row.status-bar');
        this.actionsElement = dom.append(this.hoverElement, $('div.actions'));
    }
    get hasContent() {
        return this._hasContent;
    }
    addAction(actionOptions) {
        const keybinding = this._keybindingService.lookupKeybinding(actionOptions.commandId);
        const keybindingLabel = keybinding ? keybinding.getLabel() : null;
        this._register(renderHoverAction(this.actionsElement, actionOptions, keybindingLabel));
        this._hasContent = true;
    }
    append(element) {
        const result = dom.append(this.actionsElement, element);
        this._hasContent = true;
        return result;
    }
};
EditorHoverStatusBar = __decorate([
    __param(0, IKeybindingService)
], EditorHoverStatusBar);
class ModesContentComputer {
    constructor(editor, _participants) {
        this._participants = _participants;
        this._editor = editor;
        this._result = [];
        this._anchor = null;
    }
    setAnchor(anchor) {
        this._anchor = anchor;
        this._result = [];
    }
    clearResult() {
        this._result = [];
    }
    static _getLineDecorations(editor, anchor) {
        if (anchor.type !== 1 /* Range */) {
            return [];
        }
        const model = editor.getModel();
        const lineNumber = anchor.range.startLineNumber;
        const maxColumn = model.getLineMaxColumn(lineNumber);
        return editor.getLineDecorations(lineNumber).filter((d) => {
            if (d.options.isWholeLine) {
                return true;
            }
            const startColumn = (d.range.startLineNumber === lineNumber) ? d.range.startColumn : 1;
            const endColumn = (d.range.endLineNumber === lineNumber) ? d.range.endColumn : maxColumn;
            if (startColumn > anchor.range.startColumn || anchor.range.endColumn > endColumn) {
                return false;
            }
            return true;
        });
    }
    computeAsync(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const anchor = this._anchor;
            if (!this._editor.hasModel() || !anchor) {
                return Promise.resolve([]);
            }
            const lineDecorations = ModesContentComputer._getLineDecorations(this._editor, anchor);
            const allResults = yield Promise.all(this._participants.map(p => this._computeAsync(p, lineDecorations, anchor, token)));
            return flatten(allResults);
        });
    }
    _computeAsync(participant, lineDecorations, anchor, token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!participant.computeAsync) {
                return [];
            }
            return participant.computeAsync(anchor, lineDecorations, token);
        });
    }
    computeSync() {
        if (!this._editor.hasModel() || !this._anchor) {
            return [];
        }
        const lineDecorations = ModesContentComputer._getLineDecorations(this._editor, this._anchor);
        let result = [];
        for (const participant of this._participants) {
            result = result.concat(participant.computeSync(this._anchor, lineDecorations));
        }
        return coalesce(result);
    }
    onResult(result, isFromSynchronousComputation) {
        // Always put synchronous messages before asynchronous ones
        if (isFromSynchronousComputation) {
            this._result = result.concat(this._result);
        }
        else {
            this._result = this._result.concat(result);
        }
    }
    getResult() {
        return this._result.slice(0);
    }
    getResultWithLoadingMessage() {
        if (this._anchor) {
            for (const participant of this._participants) {
                if (participant.createLoadingMessage) {
                    const loadingMessage = participant.createLoadingMessage(this._anchor);
                    if (loadingMessage) {
                        return this._result.slice(0).concat([loadingMessage]);
                    }
                }
            }
        }
        return this._result.slice(0);
    }
}
let ModesContentHoverWidget = class ModesContentHoverWidget extends Widget {
    constructor(editor, _hoverVisibleKey, instantiationService, _keybindingService) {
        super();
        this._hoverVisibleKey = _hoverVisibleKey;
        this._keybindingService = _keybindingService;
        // IContentWidget.allowEditorOverflow
        this.allowEditorOverflow = true;
        this._participants = [
            instantiationService.createInstance(ColorHoverParticipant, editor, this),
            instantiationService.createInstance(MarkdownHoverParticipant, editor, this),
            instantiationService.createInstance(InlineCompletionsHoverParticipant, editor, this),
            instantiationService.createInstance(MarkerHoverParticipant, editor, this),
        ];
        this._hover = this._register(new HoverWidget());
        this._id = ModesContentHoverWidget.ID;
        this._editor = editor;
        this._isVisible = false;
        this._stoleFocus = false;
        this._renderDisposable = null;
        this.onkeydown(this._hover.containerDomNode, (e) => {
            if (e.equals(9 /* Escape */)) {
                this.hide();
            }
        });
        this._register(this._editor.onDidChangeConfiguration((e) => {
            if (e.hasChanged(40 /* fontInfo */)) {
                this._updateFont();
            }
        }));
        this._editor.onDidLayoutChange(() => this.layout());
        this.layout();
        this._editor.addContentWidget(this);
        this._showAtPosition = null;
        this._showAtRange = null;
        this._stoleFocus = false;
        this._messages = [];
        this._lastAnchor = null;
        this._computer = new ModesContentComputer(this._editor, this._participants);
        this._highlightDecorations = [];
        this._isChangingDecorations = false;
        this._shouldFocus = false;
        this._colorPicker = null;
        this._hoverOperation = new HoverOperation(this._computer, result => this._withResult(result, true), null, result => this._withResult(result, false), this._editor.getOption(50 /* hover */).delay);
        this._register(dom.addStandardDisposableListener(this.getDomNode(), dom.EventType.FOCUS, () => {
            if (this._colorPicker) {
                this.getDomNode().classList.add('colorpicker-hover');
            }
        }));
        this._register(dom.addStandardDisposableListener(this.getDomNode(), dom.EventType.BLUR, () => {
            this.getDomNode().classList.remove('colorpicker-hover');
        }));
        this._register(editor.onDidChangeConfiguration(() => {
            this._hoverOperation.setHoverTime(this._editor.getOption(50 /* hover */).delay);
        }));
        this._register(TokenizationRegistry.onDidChange(() => {
            if (this._isVisible && this._lastAnchor && this._messages.length > 0) {
                this._hover.contentsDomNode.textContent = '';
                this._renderMessages(this._lastAnchor, this._messages);
            }
        }));
    }
    dispose() {
        this._hoverOperation.cancel();
        this._editor.removeContentWidget(this);
        super.dispose();
    }
    getId() {
        return this._id;
    }
    getDomNode() {
        return this._hover.containerDomNode;
    }
    _shouldShowAt(mouseEvent) {
        const targetType = mouseEvent.target.type;
        if (targetType === 6 /* CONTENT_TEXT */) {
            return true;
        }
        if (targetType === 7 /* CONTENT_EMPTY */) {
            const epsilon = this._editor.getOption(40 /* fontInfo */).typicalHalfwidthCharacterWidth / 2;
            const data = mouseEvent.target.detail;
            if (data && !data.isAfterLines && typeof data.horizontalDistanceToText === 'number' && data.horizontalDistanceToText < epsilon) {
                // Let hover kick in even when the mouse is technically in the empty area after a line, given the distance is small enough
                return true;
            }
        }
        return false;
    }
    maybeShowAt(mouseEvent) {
        var _a;
        const anchorCandidates = [];
        for (const participant of this._participants) {
            if (typeof participant.suggestHoverAnchor === 'function') {
                const anchor = participant.suggestHoverAnchor(mouseEvent);
                if (anchor) {
                    anchorCandidates.push(anchor);
                }
            }
        }
        if (this._shouldShowAt(mouseEvent) && mouseEvent.target.range) {
            // TODO@rebornix. This should be removed if we move Color Picker out of Hover component.
            // Check if mouse is hovering on color decorator
            const hoverOnColorDecorator = [...((_a = mouseEvent.target.element) === null || _a === void 0 ? void 0 : _a.classList.values()) || []].find(className => className.startsWith('ced-colorBox'))
                && mouseEvent.target.range.endColumn - mouseEvent.target.range.startColumn === 1;
            const showAtRange = (hoverOnColorDecorator // shift the mouse focus by one as color decorator is a `before` decoration of next character.
                ? new Range(mouseEvent.target.range.startLineNumber, mouseEvent.target.range.startColumn + 1, mouseEvent.target.range.endLineNumber, mouseEvent.target.range.endColumn + 1)
                : mouseEvent.target.range);
            anchorCandidates.push(new HoverRangeAnchor(0, showAtRange));
        }
        if (anchorCandidates.length === 0) {
            return false;
        }
        anchorCandidates.sort((a, b) => b.priority - a.priority);
        this._startShowingAt(anchorCandidates[0], 0 /* Delayed */, false);
        return true;
    }
    _showAt(position, range, focus) {
        // Position has changed
        this._showAtPosition = position;
        this._showAtRange = range;
        this._hoverVisibleKey.set(true);
        this._isVisible = true;
        this._hover.containerDomNode.classList.toggle('hidden', !this._isVisible);
        this._editor.layoutContentWidget(this);
        // Simply force a synchronous render on the editor
        // such that the widget does not really render with left = '0px'
        this._editor.render();
        this._stoleFocus = focus;
        if (focus) {
            this._hover.containerDomNode.focus();
        }
    }
    getPosition() {
        if (this._isVisible) {
            return {
                position: this._showAtPosition,
                range: this._showAtRange,
                preference: [
                    1 /* ABOVE */,
                    2 /* BELOW */
                ]
            };
        }
        return null;
    }
    _updateFont() {
        const codeClasses = Array.prototype.slice.call(this._hover.contentsDomNode.getElementsByClassName('code'));
        codeClasses.forEach(node => this._editor.applyFontInfo(node));
    }
    _updateContents(node) {
        this._hover.contentsDomNode.textContent = '';
        this._hover.contentsDomNode.appendChild(node);
        this._updateFont();
        this._editor.layoutContentWidget(this);
        this._hover.onContentsChanged();
    }
    layout() {
        const height = Math.max(this._editor.getLayoutInfo().height / 4, 250);
        const { fontSize, lineHeight } = this._editor.getOption(40 /* fontInfo */);
        this._hover.contentsDomNode.style.fontSize = `${fontSize}px`;
        this._hover.contentsDomNode.style.lineHeight = `${lineHeight}px`;
        this._hover.contentsDomNode.style.maxHeight = `${height}px`;
        this._hover.contentsDomNode.style.maxWidth = `${Math.max(this._editor.getLayoutInfo().width * 0.66, 500)}px`;
    }
    onModelDecorationsChanged() {
        if (this._isChangingDecorations) {
            return;
        }
        if (this._isVisible) {
            // The decorations have changed and the hover is visible,
            // we need to recompute the displayed text
            this._hoverOperation.cancel();
            this._computer.clearResult();
            if (!this._colorPicker) { // TODO@Michel ensure that displayed text for other decorations is computed even if color picker is in place
                this._hoverOperation.start(0 /* Delayed */);
            }
        }
    }
    startShowingAtRange(range, mode, focus) {
        this._startShowingAt(new HoverRangeAnchor(0, range), mode, focus);
    }
    _startShowingAt(anchor, mode, focus) {
        if (this._lastAnchor && this._lastAnchor.equals(anchor)) {
            // We have to show the widget at the exact same range as before, so no work is needed
            return;
        }
        this._hoverOperation.cancel();
        if (this._isVisible) {
            // The range might have changed, but the hover is visible
            // Instead of hiding it completely, filter out messages that are still in the new range and
            // kick off a new computation
            if (!this._showAtPosition || !this._lastAnchor || !anchor.canAdoptVisibleHover(this._lastAnchor, this._showAtPosition)) {
                this.hide();
            }
            else {
                const filteredMessages = this._messages.filter((m) => m.isValidForHoverAnchor(anchor));
                if (filteredMessages.length === 0) {
                    this.hide();
                }
                else if (filteredMessages.length === this._messages.length) {
                    // no change
                    return;
                }
                else {
                    this._renderMessages(anchor, filteredMessages);
                }
            }
        }
        this._lastAnchor = anchor;
        this._computer.setAnchor(anchor);
        this._shouldFocus = focus;
        this._hoverOperation.start(mode);
    }
    hide() {
        this._lastAnchor = null;
        this._hoverOperation.cancel();
        if (this._isVisible) {
            setTimeout(() => {
                // Give commands a chance to see the key
                if (!this._isVisible) {
                    this._hoverVisibleKey.set(false);
                }
            }, 0);
            this._isVisible = false;
            this._hover.containerDomNode.classList.toggle('hidden', !this._isVisible);
            this._editor.layoutContentWidget(this);
            if (this._stoleFocus) {
                this._editor.focus();
            }
        }
        this._isChangingDecorations = true;
        this._highlightDecorations = this._editor.deltaDecorations(this._highlightDecorations, []);
        this._isChangingDecorations = false;
        if (this._renderDisposable) {
            this._renderDisposable.dispose();
            this._renderDisposable = null;
        }
        this._colorPicker = null;
    }
    isColorPickerVisible() {
        return !!this._colorPicker;
    }
    setColorPicker(widget) {
        this._colorPicker = widget;
    }
    onContentsChanged() {
        this._hover.onContentsChanged();
    }
    _withResult(result, complete) {
        this._messages = result;
        if (this._lastAnchor && this._messages.length > 0) {
            this._renderMessages(this._lastAnchor, this._messages);
        }
        else if (complete) {
            this.hide();
        }
    }
    _renderMessages(anchor, messages) {
        if (this._renderDisposable) {
            this._renderDisposable.dispose();
            this._renderDisposable = null;
        }
        this._colorPicker = null; // TODO: TypeScript thinks this is always null
        // update column from which to show
        let renderColumn = 1073741824 /* MAX_SAFE_SMALL_INTEGER */;
        let highlightRange = messages[0].range;
        let forceShowAtRange = null;
        let fragment = document.createDocumentFragment();
        const disposables = new DisposableStore();
        const hoverParts = new Map();
        for (const msg of messages) {
            renderColumn = Math.min(renderColumn, msg.range.startColumn);
            highlightRange = Range.plusRange(highlightRange, msg.range);
            if (msg.forceShowAtRange) {
                forceShowAtRange = msg.range;
            }
            if (!hoverParts.has(msg.owner)) {
                hoverParts.set(msg.owner, []);
            }
            const dest = hoverParts.get(msg.owner);
            dest.push(msg);
        }
        const statusBar = disposables.add(new EditorHoverStatusBar(this._keybindingService));
        for (const [participant, participantHoverParts] of hoverParts) {
            disposables.add(participant.renderHoverParts(participantHoverParts, fragment, statusBar));
        }
        if (statusBar.hasContent) {
            fragment.appendChild(statusBar.hoverElement);
        }
        this._renderDisposable = disposables;
        // show
        if (fragment.hasChildNodes()) {
            if (forceShowAtRange) {
                this._showAt(forceShowAtRange.getStartPosition(), forceShowAtRange, this._shouldFocus);
            }
            else {
                this._showAt(new Position(anchor.range.startLineNumber, renderColumn), highlightRange, this._shouldFocus);
            }
            this._updateContents(fragment);
        }
        if (this._colorPicker) {
            this._colorPicker.layout();
        }
        this._isChangingDecorations = true;
        this._highlightDecorations = this._editor.deltaDecorations(this._highlightDecorations, highlightRange ? [{
                range: highlightRange,
                options: ModesContentHoverWidget._DECORATION_OPTIONS
            }] : []);
        this._isChangingDecorations = false;
    }
};
ModesContentHoverWidget.ID = 'editor.contrib.modesContentHoverWidget';
ModesContentHoverWidget._DECORATION_OPTIONS = ModelDecorationOptions.register({
    description: 'content-hover-highlight',
    className: 'hoverHighlight'
});
ModesContentHoverWidget = __decorate([
    __param(2, IInstantiationService),
    __param(3, IKeybindingService)
], ModesContentHoverWidget);
export { ModesContentHoverWidget };
registerThemingParticipant((theme, collector) => {
    const linkFg = theme.getColor(textLinkForeground);
    if (linkFg) {
        collector.addRule(`.monaco-hover .hover-contents a.code-link span:hover { color: ${linkFg}; }`);
    }
});
