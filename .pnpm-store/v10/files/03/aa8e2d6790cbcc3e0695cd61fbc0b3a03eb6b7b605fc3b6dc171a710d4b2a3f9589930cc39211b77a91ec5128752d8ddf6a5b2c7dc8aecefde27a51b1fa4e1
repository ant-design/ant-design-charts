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
import './actionbar.css';
import { Disposable, dispose } from '../../../common/lifecycle.js';
import { ActionRunner } from '../../../common/actions.js';
import * as DOM from '../../dom.js';
import * as types from '../../../common/types.js';
import { StandardKeyboardEvent } from '../../keyboardEvent.js';
import { Emitter } from '../../../common/event.js';
import { ActionViewItem, BaseActionViewItem } from './actionViewItems.js';
export class ActionBar extends Disposable {
    constructor(container, options = {}) {
        var _a, _b, _c, _d, _e, _f;
        super();
        // Trigger Key Tracking
        this.triggerKeyDown = false;
        this.focusable = true;
        this._onDidBlur = this._register(new Emitter());
        this.onDidBlur = this._onDidBlur.event;
        this._onDidCancel = this._register(new Emitter({ onFirstListenerAdd: () => this.cancelHasListener = true }));
        this.onDidCancel = this._onDidCancel.event;
        this.cancelHasListener = false;
        this._onDidRun = this._register(new Emitter());
        this.onDidRun = this._onDidRun.event;
        this._onBeforeRun = this._register(new Emitter());
        this.onBeforeRun = this._onBeforeRun.event;
        this.options = options;
        this._context = (_a = options.context) !== null && _a !== void 0 ? _a : null;
        this._orientation = (_b = this.options.orientation) !== null && _b !== void 0 ? _b : 0 /* HORIZONTAL */;
        this._triggerKeys = {
            keyDown: (_d = (_c = this.options.triggerKeys) === null || _c === void 0 ? void 0 : _c.keyDown) !== null && _d !== void 0 ? _d : false,
            keys: (_f = (_e = this.options.triggerKeys) === null || _e === void 0 ? void 0 : _e.keys) !== null && _f !== void 0 ? _f : [3 /* Enter */, 10 /* Space */]
        };
        if (this.options.actionRunner) {
            this._actionRunner = this.options.actionRunner;
        }
        else {
            this._actionRunner = new ActionRunner();
            this._register(this._actionRunner);
        }
        this._register(this._actionRunner.onDidRun(e => this._onDidRun.fire(e)));
        this._register(this._actionRunner.onBeforeRun(e => this._onBeforeRun.fire(e)));
        this._actionIds = [];
        this.viewItems = [];
        this.focusedItem = undefined;
        this.domNode = document.createElement('div');
        this.domNode.className = 'monaco-action-bar';
        if (options.animated !== false) {
            this.domNode.classList.add('animated');
        }
        let previousKeys;
        let nextKeys;
        switch (this._orientation) {
            case 0 /* HORIZONTAL */:
                previousKeys = [15 /* LeftArrow */];
                nextKeys = [17 /* RightArrow */];
                break;
            case 1 /* VERTICAL */:
                previousKeys = [16 /* UpArrow */];
                nextKeys = [18 /* DownArrow */];
                this.domNode.className += ' vertical';
                break;
        }
        this._register(DOM.addDisposableListener(this.domNode, DOM.EventType.KEY_DOWN, e => {
            const event = new StandardKeyboardEvent(e);
            let eventHandled = true;
            const focusedItem = typeof this.focusedItem === 'number' ? this.viewItems[this.focusedItem] : undefined;
            if (previousKeys && (event.equals(previousKeys[0]) || event.equals(previousKeys[1]))) {
                eventHandled = this.focusPrevious();
            }
            else if (nextKeys && (event.equals(nextKeys[0]) || event.equals(nextKeys[1]))) {
                eventHandled = this.focusNext();
            }
            else if (event.equals(9 /* Escape */) && this.cancelHasListener) {
                this._onDidCancel.fire();
            }
            else if (event.equals(14 /* Home */)) {
                eventHandled = this.focusFirst();
            }
            else if (event.equals(13 /* End */)) {
                eventHandled = this.focusLast();
            }
            else if (event.equals(2 /* Tab */) && focusedItem instanceof BaseActionViewItem && focusedItem.trapsArrowNavigation) {
                eventHandled = this.focusNext();
            }
            else if (this.isTriggerKeyEvent(event)) {
                // Staying out of the else branch even if not triggered
                if (this._triggerKeys.keyDown) {
                    this.doTrigger(event);
                }
                else {
                    this.triggerKeyDown = true;
                }
            }
            else {
                eventHandled = false;
            }
            if (eventHandled) {
                event.preventDefault();
                event.stopPropagation();
            }
        }));
        this._register(DOM.addDisposableListener(this.domNode, DOM.EventType.KEY_UP, e => {
            const event = new StandardKeyboardEvent(e);
            // Run action on Enter/Space
            if (this.isTriggerKeyEvent(event)) {
                if (!this._triggerKeys.keyDown && this.triggerKeyDown) {
                    this.triggerKeyDown = false;
                    this.doTrigger(event);
                }
                event.preventDefault();
                event.stopPropagation();
            }
            // Recompute focused item
            else if (event.equals(2 /* Tab */) || event.equals(1024 /* Shift */ | 2 /* Tab */)) {
                this.updateFocusedItem();
            }
        }));
        this.focusTracker = this._register(DOM.trackFocus(this.domNode));
        this._register(this.focusTracker.onDidBlur(() => {
            if (DOM.getActiveElement() === this.domNode || !DOM.isAncestor(DOM.getActiveElement(), this.domNode)) {
                this._onDidBlur.fire();
                this.focusedItem = undefined;
                this.triggerKeyDown = false;
            }
        }));
        this._register(this.focusTracker.onDidFocus(() => this.updateFocusedItem()));
        this.actionsList = document.createElement('ul');
        this.actionsList.className = 'actions-container';
        this.actionsList.setAttribute('role', 'toolbar');
        if (this.options.ariaLabel) {
            this.actionsList.setAttribute('aria-label', this.options.ariaLabel);
        }
        this.domNode.appendChild(this.actionsList);
        container.appendChild(this.domNode);
    }
    isTriggerKeyEvent(event) {
        let ret = false;
        this._triggerKeys.keys.forEach(keyCode => {
            ret = ret || event.equals(keyCode);
        });
        return ret;
    }
    updateFocusedItem() {
        for (let i = 0; i < this.actionsList.children.length; i++) {
            const elem = this.actionsList.children[i];
            if (DOM.isAncestor(DOM.getActiveElement(), elem)) {
                this.focusedItem = i;
                break;
            }
        }
    }
    get context() {
        return this._context;
    }
    set context(context) {
        this._context = context;
        this.viewItems.forEach(i => i.setActionContext(context));
    }
    get actionRunner() {
        return this._actionRunner;
    }
    set actionRunner(actionRunner) {
        if (actionRunner) {
            this._actionRunner = actionRunner;
            this.viewItems.forEach(item => item.actionRunner = actionRunner);
        }
    }
    getContainer() {
        return this.domNode;
    }
    push(arg, options = {}) {
        const actions = Array.isArray(arg) ? arg : [arg];
        let index = types.isNumber(options.index) ? options.index : null;
        actions.forEach((action) => {
            const actionViewItemElement = document.createElement('li');
            actionViewItemElement.className = 'action-item';
            actionViewItemElement.setAttribute('role', 'presentation');
            // Prevent native context menu on actions
            if (!this.options.allowContextMenu) {
                this._register(DOM.addDisposableListener(actionViewItemElement, DOM.EventType.CONTEXT_MENU, (e) => {
                    DOM.EventHelper.stop(e, true);
                }));
            }
            let item;
            if (this.options.actionViewItemProvider) {
                item = this.options.actionViewItemProvider(action);
            }
            if (!item) {
                item = new ActionViewItem(this.context, action, options);
            }
            item.actionRunner = this._actionRunner;
            item.setActionContext(this.context);
            item.render(actionViewItemElement);
            if (this.focusable && item instanceof BaseActionViewItem && this.viewItems.length === 0) {
                // We need to allow for the first enabled item to be focused on using tab navigation #106441
                item.setFocusable(true);
            }
            if (index === null || index < 0 || index >= this.actionsList.children.length) {
                this.actionsList.appendChild(actionViewItemElement);
                this.viewItems.push(item);
                this._actionIds.push(action.id);
            }
            else {
                this.actionsList.insertBefore(actionViewItemElement, this.actionsList.children[index]);
                this.viewItems.splice(index, 0, item);
                this._actionIds.splice(index, 0, action.id);
                index++;
            }
        });
        if (typeof this.focusedItem === 'number') {
            // After a clear actions might be re-added to simply toggle some actions. We should preserve focus #97128
            this.focus(this.focusedItem);
        }
    }
    clear() {
        dispose(this.viewItems);
        this.viewItems = [];
        this._actionIds = [];
        DOM.clearNode(this.actionsList);
    }
    length() {
        return this.viewItems.length;
    }
    focus(arg) {
        let selectFirst = false;
        let index = undefined;
        if (arg === undefined) {
            selectFirst = true;
        }
        else if (typeof arg === 'number') {
            index = arg;
        }
        else if (typeof arg === 'boolean') {
            selectFirst = arg;
        }
        if (selectFirst && typeof this.focusedItem === 'undefined') {
            const firstEnabled = this.viewItems.findIndex(item => item.isEnabled());
            // Focus the first enabled item
            this.focusedItem = firstEnabled === -1 ? undefined : firstEnabled;
            this.updateFocus();
        }
        else {
            if (index !== undefined) {
                this.focusedItem = index;
            }
            this.updateFocus();
        }
    }
    focusFirst() {
        this.focusedItem = this.length() > 1 ? 1 : 0;
        return this.focusPrevious();
    }
    focusLast() {
        this.focusedItem = this.length() < 2 ? 0 : this.length() - 2;
        return this.focusNext();
    }
    focusNext() {
        if (typeof this.focusedItem === 'undefined') {
            this.focusedItem = this.viewItems.length - 1;
        }
        else if (this.viewItems.length <= 1) {
            return false;
        }
        const startIndex = this.focusedItem;
        let item;
        do {
            if (this.options.preventLoopNavigation && this.focusedItem + 1 >= this.viewItems.length) {
                this.focusedItem = startIndex;
                return false;
            }
            this.focusedItem = (this.focusedItem + 1) % this.viewItems.length;
            item = this.viewItems[this.focusedItem];
        } while (this.focusedItem !== startIndex && this.options.focusOnlyEnabledItems && !item.isEnabled());
        this.updateFocus();
        return true;
    }
    focusPrevious() {
        if (typeof this.focusedItem === 'undefined') {
            this.focusedItem = 0;
        }
        else if (this.viewItems.length <= 1) {
            return false;
        }
        const startIndex = this.focusedItem;
        let item;
        do {
            this.focusedItem = this.focusedItem - 1;
            if (this.focusedItem < 0) {
                if (this.options.preventLoopNavigation) {
                    this.focusedItem = startIndex;
                    return false;
                }
                this.focusedItem = this.viewItems.length - 1;
            }
            item = this.viewItems[this.focusedItem];
        } while (this.focusedItem !== startIndex && this.options.focusOnlyEnabledItems && !item.isEnabled());
        this.updateFocus(true);
        return true;
    }
    updateFocus(fromRight, preventScroll) {
        if (typeof this.focusedItem === 'undefined') {
            this.actionsList.focus({ preventScroll });
        }
        for (let i = 0; i < this.viewItems.length; i++) {
            const item = this.viewItems[i];
            const actionViewItem = item;
            if (i === this.focusedItem) {
                let focusItem = true;
                if (!types.isFunction(actionViewItem.focus)) {
                    focusItem = false;
                }
                if (this.options.focusOnlyEnabledItems && types.isFunction(item.isEnabled) && !item.isEnabled()) {
                    focusItem = false;
                }
                if (focusItem) {
                    actionViewItem.focus(fromRight);
                }
                else {
                    this.actionsList.focus({ preventScroll });
                }
            }
            else {
                if (types.isFunction(actionViewItem.blur)) {
                    actionViewItem.blur();
                }
            }
        }
    }
    doTrigger(event) {
        if (typeof this.focusedItem === 'undefined') {
            return; //nothing to focus
        }
        // trigger action
        const actionViewItem = this.viewItems[this.focusedItem];
        if (actionViewItem instanceof BaseActionViewItem) {
            const context = (actionViewItem._context === null || actionViewItem._context === undefined) ? event : actionViewItem._context;
            this.run(actionViewItem._action, context);
        }
    }
    run(action, context) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._actionRunner.run(action, context);
        });
    }
    dispose() {
        dispose(this.viewItems);
        this.viewItems = [];
        this._actionIds = [];
        this.getContainer().remove();
        super.dispose();
    }
}
