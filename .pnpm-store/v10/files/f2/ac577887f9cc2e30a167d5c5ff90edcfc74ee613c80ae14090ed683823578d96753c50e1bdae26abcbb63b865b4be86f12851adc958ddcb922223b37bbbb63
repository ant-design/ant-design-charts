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
var _a;
import './ghostText.css';
import * as dom from '../../../base/browser/dom.js';
import { Disposable, DisposableStore, MutableDisposable, toDisposable } from '../../../base/common/lifecycle.js';
import { Range } from '../../common/core/range.js';
import { ICodeEditorService } from '../../browser/services/codeEditorService.js';
import * as strings from '../../../base/common/strings.js';
import { RenderLineInput, renderViewLine } from '../../common/viewLayout/viewLineRenderer.js';
import { EditorFontLigatures } from '../../common/config/editorOptions.js';
import { createStringBuilder } from '../../common/core/stringBuilder.js';
import { Configuration } from '../../browser/config/configuration.js';
import { LineTokens } from '../../common/core/lineTokens.js';
import { Position } from '../../common/core/position.js';
import { Emitter } from '../../../base/common/event.js';
import { IThemeService, registerThemingParticipant } from '../../../platform/theme/common/themeService.js';
import { ghostTextBorder, ghostTextForeground } from '../../common/view/editorColorRegistry.js';
import { RGBA, Color } from '../../../base/common/color.js';
import { CursorColumns } from '../../common/controller/cursorCommon.js';
const ttPolicy = (_a = window.trustedTypes) === null || _a === void 0 ? void 0 : _a.createPolicy('editorGhostText', { createHTML: value => value });
export class BaseGhostTextWidgetModel extends Disposable {
    constructor(editor) {
        super();
        this.editor = editor;
        this._expanded = undefined;
        this.onDidChangeEmitter = new Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this._register(editor.onDidChangeConfiguration((e) => {
            if (e.hasChanged(104 /* suggest */) && this._expanded === undefined) {
                this.onDidChangeEmitter.fire();
            }
        }));
    }
    get expanded() {
        if (this._expanded === undefined) {
            // TODO this should use a global hidden setting.
            // See https://github.com/microsoft/vscode/issues/125037.
            return true;
        }
        return this._expanded;
    }
    setExpanded(expanded) {
        this._expanded = true;
        this.onDidChangeEmitter.fire();
    }
}
let GhostTextWidget = class GhostTextWidget extends Disposable {
    constructor(editor, _codeEditorService, _themeService) {
        super();
        this.editor = editor;
        this._codeEditorService = _codeEditorService;
        this._themeService = _themeService;
        this.codeEditorDecorationTypeKey = null;
        this.modelRef = this._register(new MutableDisposable());
        this.decorationIds = [];
        this.viewZoneId = null;
        this.viewMoreContentWidget = null;
        this._register(this.editor.onDidChangeConfiguration((e) => {
            if (e.hasChanged(27 /* disableMonospaceOptimizations */)
                || e.hasChanged(103 /* stopRenderingLineAfter */)
                || e.hasChanged(86 /* renderWhitespace */)
                || e.hasChanged(80 /* renderControlCharacters */)
                || e.hasChanged(41 /* fontLigatures */)
                || e.hasChanged(40 /* fontInfo */)
                || e.hasChanged(56 /* lineHeight */)) {
                this.render();
            }
        }));
        this._register(toDisposable(() => {
            this.setModel(undefined);
        }));
    }
    get model() {
        var _a;
        return (_a = this.modelRef.value) === null || _a === void 0 ? void 0 : _a.object;
    }
    shouldShowHoverAtViewZone(viewZoneId) {
        return (this.viewZoneId === viewZoneId);
    }
    setModel(model) {
        if (model === this.model) {
            return;
        }
        this.modelRef.value = model
            ? createDisposableRef(model, model.onDidChange(() => this.render()))
            : undefined;
        this.render();
    }
    getRenderData() {
        var _a;
        if (!this.editor.hasModel() || !((_a = this.model) === null || _a === void 0 ? void 0 : _a.ghostText)) {
            return undefined;
        }
        const { minReservedLineCount, expanded } = this.model;
        let { position, lines } = this.model.ghostText;
        const textModel = this.editor.getModel();
        const maxColumn = textModel.getLineMaxColumn(position.lineNumber);
        const { tabSize } = textModel.getOptions();
        if (lines.length > 1 && position.column !== maxColumn) {
            console.warn('Can only show multiline ghost text at the end of a line');
            lines = [];
            position = new Position(position.lineNumber, maxColumn);
        }
        return { tabSize, position, lines, minReservedLineCount, expanded };
    }
    render() {
        var _a;
        const renderData = this.getRenderData();
        if (this.codeEditorDecorationTypeKey) {
            this._codeEditorService.removeDecorationType(this.codeEditorDecorationTypeKey);
            this.codeEditorDecorationTypeKey = null;
        }
        if (renderData && renderData.lines.length > 0) {
            const foreground = this._themeService.getColorTheme().getColor(ghostTextForeground);
            let opacity = undefined;
            let color = undefined;
            if (foreground) {
                function opaque(color) {
                    const { r, b, g } = color.rgba;
                    return new Color(new RGBA(r, g, b, 255));
                }
                opacity = String(foreground.rgba.a);
                color = Color.Format.CSS.format(opaque(foreground));
            }
            const borderColor = this._themeService.getColorTheme().getColor(ghostTextBorder);
            let border = undefined;
            if (borderColor) {
                border = `2px dashed ${borderColor}`;
            }
            // We add 0 to bring it before any other decoration.
            this.codeEditorDecorationTypeKey = `0-ghost-text-${++GhostTextWidget.decorationTypeCount}`;
            const line = ((_a = this.editor.getModel()) === null || _a === void 0 ? void 0 : _a.getLineContent(renderData.position.lineNumber)) || '';
            const linePrefix = line.substr(0, renderData.position.column - 1);
            // To avoid visual confusion, we don't want to render visible whitespace
            const contentText = renderSingleLineText(renderData.lines[0] || '', linePrefix, renderData.tabSize, false);
            this._codeEditorService.registerDecorationType('ghost-text', this.codeEditorDecorationTypeKey, {
                after: {
                    // TODO: escape?
                    contentText,
                    opacity,
                    color,
                    border,
                },
            });
        }
        const newDecorations = new Array();
        if (renderData && this.codeEditorDecorationTypeKey) {
            newDecorations.push({
                range: Range.fromPositions(renderData.position, renderData.position),
                options: Object.assign({}, this._codeEditorService.resolveDecorationOptions(this.codeEditorDecorationTypeKey, true))
            });
        }
        this.decorationIds = this.editor.deltaDecorations(this.decorationIds, newDecorations);
        if (this.viewMoreContentWidget) {
            this.viewMoreContentWidget.dispose();
            this.viewMoreContentWidget = null;
        }
        this.editor.changeViewZones((changeAccessor) => {
            if (this.viewZoneId) {
                changeAccessor.removeZone(this.viewZoneId);
                this.viewZoneId = null;
            }
            if (renderData) {
                const remainingLines = renderData.lines.slice(1);
                const heightInLines = Math.max(remainingLines.length, renderData.minReservedLineCount);
                if (heightInLines > 0) {
                    if (renderData.expanded) {
                        const domNode = document.createElement('div');
                        this.renderLines(domNode, renderData.tabSize, remainingLines);
                        this.viewZoneId = changeAccessor.addZone({
                            afterLineNumber: renderData.position.lineNumber,
                            afterColumn: renderData.position.column,
                            heightInLines: heightInLines,
                            domNode,
                        });
                    }
                    else if (remainingLines.length > 0) {
                        this.viewMoreContentWidget = this.renderViewMoreLines(renderData.position, renderData.lines[0], remainingLines.length);
                    }
                }
            }
        });
    }
    renderViewMoreLines(position, firstLineText, remainingLinesLength) {
        const fontInfo = this.editor.getOption(40 /* fontInfo */);
        const domNode = document.createElement('div');
        domNode.className = 'suggest-preview-additional-widget';
        Configuration.applyFontInfoSlow(domNode, fontInfo);
        const spacer = document.createElement('span');
        spacer.className = 'content-spacer';
        spacer.append(firstLineText);
        domNode.append(spacer);
        const newline = document.createElement('span');
        newline.className = 'content-newline suggest-preview-text';
        newline.append('⏎  ');
        domNode.append(newline);
        const disposableStore = new DisposableStore();
        const button = document.createElement('div');
        button.className = 'button suggest-preview-text';
        button.append(`+${remainingLinesLength} lines…`);
        disposableStore.add(dom.addStandardDisposableListener(button, 'mousedown', (e) => {
            var _a;
            (_a = this.model) === null || _a === void 0 ? void 0 : _a.setExpanded(true);
            e.preventDefault();
            this.editor.focus();
        }));
        domNode.append(button);
        return new ViewMoreLinesContentWidget(this.editor, position, domNode, disposableStore);
    }
    renderLines(domNode, tabSize, lines) {
        const opts = this.editor.getOptions();
        const disableMonospaceOptimizations = opts.get(27 /* disableMonospaceOptimizations */);
        const stopRenderingLineAfter = opts.get(103 /* stopRenderingLineAfter */);
        // To avoid visual confusion, we don't want to render visible whitespace
        const renderWhitespace = 'none';
        const renderControlCharacters = opts.get(80 /* renderControlCharacters */);
        const fontLigatures = opts.get(41 /* fontLigatures */);
        const fontInfo = opts.get(40 /* fontInfo */);
        const lineHeight = opts.get(56 /* lineHeight */);
        const sb = createStringBuilder(10000);
        sb.appendASCIIString('<div class="suggest-preview-text">');
        for (let i = 0, len = lines.length; i < len; i++) {
            const line = lines[i];
            sb.appendASCIIString('<div class="view-line');
            sb.appendASCIIString('" style="top:');
            sb.appendASCIIString(String(i * lineHeight));
            sb.appendASCIIString('px;width:1000000px;">');
            const isBasicASCII = strings.isBasicASCII(line);
            const containsRTL = strings.containsRTL(line);
            const lineTokens = LineTokens.createEmpty(line);
            renderViewLine(new RenderLineInput((fontInfo.isMonospace && !disableMonospaceOptimizations), fontInfo.canUseHalfwidthRightwardsArrow, line, false, isBasicASCII, containsRTL, 0, lineTokens, [], tabSize, 0, fontInfo.spaceWidth, fontInfo.middotWidth, fontInfo.wsmiddotWidth, stopRenderingLineAfter, renderWhitespace, renderControlCharacters, fontLigatures !== EditorFontLigatures.OFF, null), sb);
            sb.appendASCIIString('</div>');
        }
        sb.appendASCIIString('</div>');
        Configuration.applyFontInfoSlow(domNode, fontInfo);
        const html = sb.build();
        const trustedhtml = ttPolicy ? ttPolicy.createHTML(html) : html;
        domNode.innerHTML = trustedhtml;
    }
};
GhostTextWidget.decorationTypeCount = 0;
GhostTextWidget = __decorate([
    __param(1, ICodeEditorService),
    __param(2, IThemeService)
], GhostTextWidget);
export { GhostTextWidget };
function renderSingleLineText(text, lineStart, tabSize, renderWhitespace) {
    const newLine = lineStart + text;
    const visibleColumnsByColumns = CursorColumns.visibleColumnsByColumns(newLine, tabSize);
    let contentText = '';
    let curCol = lineStart.length + 1;
    for (const c of text) {
        if (c === '\t') {
            const width = visibleColumnsByColumns[curCol + 1] - visibleColumnsByColumns[curCol];
            if (renderWhitespace) {
                contentText += '→';
                for (let i = 1; i < width; i++) {
                    contentText += '\xa0';
                }
            }
            else {
                for (let i = 0; i < width; i++) {
                    contentText += '\xa0';
                }
            }
        }
        else if (c === ' ') {
            if (renderWhitespace) {
                contentText += '·';
            }
            else {
                contentText += '\xa0';
            }
        }
        else {
            contentText += c;
        }
        curCol += 1;
    }
    return contentText;
}
class ViewMoreLinesContentWidget extends Disposable {
    constructor(editor, position, domNode, disposableStore) {
        super();
        this.editor = editor;
        this.position = position;
        this.domNode = domNode;
        this.allowEditorOverflow = false;
        this.suppressMouseDown = false;
        this._register(disposableStore);
        this._register(toDisposable(() => {
            this.editor.removeContentWidget(this);
        }));
        this.editor.addContentWidget(this);
    }
    getId() {
        return 'editor.widget.viewMoreLinesWidget';
    }
    getDomNode() {
        return this.domNode;
    }
    getPosition() {
        return {
            position: this.position,
            preference: [0 /* EXACT */]
        };
    }
}
registerThemingParticipant((theme, collector) => {
    const foreground = theme.getColor(ghostTextForeground);
    if (foreground) {
        function opaque(color) {
            const { r, b, g } = color.rgba;
            return new Color(new RGBA(r, g, b, 255));
        }
        const opacity = String(foreground.rgba.a);
        const color = Color.Format.CSS.format(opaque(foreground));
        // We need to override the only used token type .mtk1
        collector.addRule(`.monaco-editor .suggest-preview-text .mtk1 { opacity: ${opacity}; color: ${color}; }`);
    }
    const border = theme.getColor(ghostTextBorder);
    if (border) {
        collector.addRule(`.monaco-editor .suggest-preview-text .mtk1 { border: 2px dashed ${border}; }`);
    }
});
function createDisposableRef(object, disposable) {
    return {
        object,
        dispose: () => disposable.dispose(),
    };
}
