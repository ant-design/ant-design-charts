/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { isFunction, isString } from '../../../common/types.js';
import * as dom from '../../dom.js';
import { CancellationTokenSource } from '../../../common/cancellation.js';
import { DomEmitter } from '../../event.js';
import { localize } from '../../../../nls.js';
export function setupNativeHover(htmlElement, tooltip) {
    if (isString(tooltip)) {
        htmlElement.title = tooltip;
    }
    else if (tooltip === null || tooltip === void 0 ? void 0 : tooltip.markdownNotSupportedFallback) {
        htmlElement.title = tooltip.markdownNotSupportedFallback;
    }
    else {
        htmlElement.removeAttribute('title');
    }
}
export function setupCustomHover(hoverDelegate, htmlElement, markdownTooltip) {
    if (!markdownTooltip) {
        return undefined;
    }
    const tooltip = getTooltipForCustom(markdownTooltip);
    let hoverOptions;
    let mouseX;
    let isHovering = false;
    let tokenSource;
    let hoverDisposable;
    const mouseOverDomEmitter = new DomEmitter(htmlElement, dom.EventType.MOUSE_OVER, true);
    mouseOverDomEmitter.event((e) => {
        if (isHovering) {
            return;
        }
        tokenSource = new CancellationTokenSource();
        function mouseLeaveOrDown(e) {
            const isMouseDown = e.type === dom.EventType.MOUSE_DOWN;
            if (isMouseDown) {
                hoverDisposable === null || hoverDisposable === void 0 ? void 0 : hoverDisposable.dispose();
                hoverDisposable = undefined;
            }
            if (isMouseDown || e.fromElement === htmlElement) {
                isHovering = false;
                hoverOptions = undefined;
                tokenSource.dispose(true);
                mouseLeaveDomEmitter.dispose();
                mouseDownDomEmitter.dispose();
            }
        }
        const mouseLeaveDomEmitter = new DomEmitter(htmlElement, dom.EventType.MOUSE_LEAVE, true);
        mouseLeaveDomEmitter.event(mouseLeaveOrDown);
        const mouseDownDomEmitter = new DomEmitter(htmlElement, dom.EventType.MOUSE_DOWN, true);
        mouseDownDomEmitter.event(mouseLeaveOrDown);
        isHovering = true;
        function mouseMove(e) {
            mouseX = e.x;
        }
        const mouseMoveDomEmitter = new DomEmitter(htmlElement, dom.EventType.MOUSE_MOVE, true);
        mouseMoveDomEmitter.event(mouseMove);
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (isHovering && tooltip) {
                // Re-use the already computed hover options if they exist.
                if (!hoverOptions) {
                    const target = {
                        targetElements: [htmlElement],
                        dispose: () => { }
                    };
                    hoverOptions = {
                        text: localize('iconLabel.loading', "Loading..."),
                        target,
                        hoverPosition: 2 /* BELOW */
                    };
                    hoverDisposable = adjustXAndShowCustomHover(hoverOptions, mouseX, hoverDelegate, isHovering);
                    const resolvedTooltip = (_a = (yield tooltip(tokenSource.token))) !== null && _a !== void 0 ? _a : (!isString(markdownTooltip) ? markdownTooltip.markdownNotSupportedFallback : undefined);
                    if (resolvedTooltip) {
                        hoverOptions = {
                            text: resolvedTooltip,
                            target,
                            showPointer: hoverDelegate.placement === 'element',
                            hoverPosition: 2 /* BELOW */
                        };
                        // awaiting the tooltip could take a while. Make sure we're still hovering.
                        hoverDisposable = adjustXAndShowCustomHover(hoverOptions, mouseX, hoverDelegate, isHovering);
                    }
                    else if (hoverDisposable) {
                        hoverDisposable.dispose();
                        hoverDisposable = undefined;
                    }
                }
            }
            mouseMoveDomEmitter.dispose();
        }), hoverDelegate.delay);
    });
    return mouseOverDomEmitter;
}
function getTooltipForCustom(markdownTooltip) {
    if (isString(markdownTooltip)) {
        return () => __awaiter(this, void 0, void 0, function* () { return markdownTooltip; });
    }
    else if (isFunction(markdownTooltip.markdown)) {
        return markdownTooltip.markdown;
    }
    else {
        const markdown = markdownTooltip.markdown;
        return () => __awaiter(this, void 0, void 0, function* () { return markdown; });
    }
}
function adjustXAndShowCustomHover(hoverOptions, mouseX, hoverDelegate, isHovering) {
    if (hoverOptions && isHovering) {
        if (mouseX !== undefined && (hoverDelegate.placement === undefined || hoverDelegate.placement === 'mouse')) {
            hoverOptions.target.x = mouseX + 10;
        }
        return hoverDelegate.showHover(hoverOptions);
    }
    return undefined;
}
