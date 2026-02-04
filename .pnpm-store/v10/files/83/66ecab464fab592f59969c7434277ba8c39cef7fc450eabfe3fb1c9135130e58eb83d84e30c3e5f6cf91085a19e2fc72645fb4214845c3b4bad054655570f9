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
import * as nls from '../../../nls.js';
import { HoverForeignElementAnchor } from '../hover/hoverTypes.js';
import { Range } from '../../common/core/range.js';
import { Disposable } from '../../../base/common/lifecycle.js';
import { commitInlineSuggestionAction, GhostTextController, ShowNextInlineSuggestionAction, ShowPreviousInlineSuggestionAction } from './ghostTextController.js';
import { ICommandService } from '../../../platform/commands/common/commands.js';
import { IMenuService, MenuId, MenuItemAction } from '../../../platform/actions/common/actions.js';
import { IContextKeyService } from '../../../platform/contextkey/common/contextkey.js';
export class InlineCompletionsHover {
    constructor(owner, range) {
        this.owner = owner;
        this.range = range;
    }
    isValidForHoverAnchor(anchor) {
        return (anchor.type === 1 /* Range */
            && this.range.startColumn <= anchor.range.startColumn
            && this.range.endColumn >= anchor.range.endColumn);
    }
}
let InlineCompletionsHoverParticipant = class InlineCompletionsHoverParticipant {
    constructor(_editor, hover, _commandService, _menuService, _contextKeyService) {
        this._editor = _editor;
        this._commandService = _commandService;
        this._menuService = _menuService;
        this._contextKeyService = _contextKeyService;
    }
    suggestHoverAnchor(mouseEvent) {
        const controller = GhostTextController.get(this._editor);
        if (!controller) {
            return null;
        }
        if (mouseEvent.target.type === 8 /* CONTENT_VIEW_ZONE */) {
            // handle the case where the mouse is over the view zone
            const viewZoneData = mouseEvent.target.detail;
            if (controller.shouldShowHoverAtViewZone(viewZoneData.viewZoneId)) {
                return new HoverForeignElementAnchor(1000, this, Range.fromPositions(viewZoneData.positionBefore || viewZoneData.position, viewZoneData.positionBefore || viewZoneData.position));
            }
        }
        if (mouseEvent.target.type === 7 /* CONTENT_EMPTY */ && mouseEvent.target.range) {
            // handle the case where the mouse is over the empty portion of a line following ghost text
            if (controller.shouldShowHoverAt(mouseEvent.target.range)) {
                return new HoverForeignElementAnchor(1000, this, mouseEvent.target.range);
            }
        }
        if (mouseEvent.target.type === 6 /* CONTENT_TEXT */ && mouseEvent.target.range && mouseEvent.target.detail) {
            // handle the case where the mouse is directly over ghost text
            const mightBeForeignElement = mouseEvent.target.detail.mightBeForeignElement;
            if (mightBeForeignElement && controller.shouldShowHoverAt(mouseEvent.target.range)) {
                return new HoverForeignElementAnchor(1000, this, mouseEvent.target.range);
            }
        }
        return null;
    }
    computeSync(anchor, lineDecorations) {
        const controller = GhostTextController.get(this._editor);
        if (controller && controller.shouldShowHoverAt(anchor.range)) {
            return [new InlineCompletionsHover(this, anchor.range)];
        }
        return [];
    }
    renderHoverParts(hoverParts, fragment, statusBar) {
        const menu = this._menuService.createMenu(MenuId.InlineCompletionsActions, this._contextKeyService);
        statusBar.addAction({
            label: nls.localize('showNextInlineSuggestion', "Next"),
            commandId: ShowNextInlineSuggestionAction.ID,
            run: () => this._commandService.executeCommand(ShowNextInlineSuggestionAction.ID)
        });
        statusBar.addAction({
            label: nls.localize('showPreviousInlineSuggestion', "Previous"),
            commandId: ShowPreviousInlineSuggestionAction.ID,
            run: () => this._commandService.executeCommand(ShowPreviousInlineSuggestionAction.ID)
        });
        statusBar.addAction({
            label: nls.localize('acceptInlineSuggestion', "Accept"),
            commandId: commitInlineSuggestionAction.id,
            run: () => this._commandService.executeCommand(commitInlineSuggestionAction.id)
        });
        for (const [_, group] of menu.getActions()) {
            for (const action of group) {
                if (action instanceof MenuItemAction) {
                    statusBar.addAction({
                        label: action.label,
                        commandId: action.item.id,
                        run: () => this._commandService.executeCommand(action.item.id)
                    });
                }
            }
        }
        return Disposable.None;
    }
};
InlineCompletionsHoverParticipant = __decorate([
    __param(2, ICommandService),
    __param(3, IMenuService),
    __param(4, IContextKeyService)
], InlineCompletionsHoverParticipant);
export { InlineCompletionsHoverParticipant };
