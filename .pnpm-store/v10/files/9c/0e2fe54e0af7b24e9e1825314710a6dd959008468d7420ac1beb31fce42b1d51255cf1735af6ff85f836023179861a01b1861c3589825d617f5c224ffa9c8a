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
import './menuEntryActionViewItem.css';
import { asCSSUrl, ModifierKeyEmitter } from '../../../base/browser/dom.js';
import { domEvent } from '../../../base/browser/event.js';
import { Separator, SubmenuAction } from '../../../base/common/actions.js';
import { toDisposable, MutableDisposable, DisposableStore } from '../../../base/common/lifecycle.js';
import { localize } from '../../../nls.js';
import { MenuItemAction, SubmenuItemAction } from '../common/actions.js';
import { IContextMenuService } from '../../contextview/browser/contextView.js';
import { IKeybindingService } from '../../keybinding/common/keybinding.js';
import { UILabelProvider } from '../../../base/common/keybindingLabels.js';
import { INotificationService } from '../../notification/common/notification.js';
import { ThemeIcon } from '../../theme/common/themeService.js';
import { ActionViewItem } from '../../../base/browser/ui/actionbar/actionViewItems.js';
import { DropdownMenuActionViewItem } from '../../../base/browser/ui/dropdown/dropdownActionViewItem.js';
import { isWindows, isLinux, OS } from '../../../base/common/platform.js';
export function createAndFillInActionBarActions(menu, options, target, primaryGroup, primaryMaxCount, shouldInlineSubmenu, useSeparatorsInPrimaryActions) {
    const groups = menu.getActions(options);
    const isPrimaryAction = typeof primaryGroup === 'string' ? (actionGroup) => actionGroup === primaryGroup : primaryGroup;
    // Action bars handle alternative actions on their own so the alternative actions should be ignored
    fillInActions(groups, target, false, isPrimaryAction, primaryMaxCount, shouldInlineSubmenu, useSeparatorsInPrimaryActions);
    return asDisposable(groups);
}
function asDisposable(groups) {
    const disposables = new DisposableStore();
    for (const [, actions] of groups) {
        for (const action of actions) {
            disposables.add(action);
        }
    }
    return disposables;
}
function fillInActions(groups, target, useAlternativeActions, isPrimaryAction = actionGroup => actionGroup === 'navigation', primaryMaxCount = Number.MAX_SAFE_INTEGER, shouldInlineSubmenu = () => false, useSeparatorsInPrimaryActions = false) {
    let primaryBucket;
    let secondaryBucket;
    if (Array.isArray(target)) {
        primaryBucket = target;
        secondaryBucket = target;
    }
    else {
        primaryBucket = target.primary;
        secondaryBucket = target.secondary;
    }
    const submenuInfo = new Set();
    for (const [group, actions] of groups) {
        let target;
        if (isPrimaryAction(group)) {
            target = primaryBucket;
            if (target.length > 0 && useSeparatorsInPrimaryActions) {
                target.push(new Separator());
            }
        }
        else {
            target = secondaryBucket;
            if (target.length > 0) {
                target.push(new Separator());
            }
        }
        for (let action of actions) {
            if (useAlternativeActions) {
                action = action instanceof MenuItemAction && action.alt ? action.alt : action;
            }
            const newLen = target.push(action);
            // keep submenu info for later inlining
            if (action instanceof SubmenuAction) {
                submenuInfo.add({ group, action, index: newLen - 1 });
            }
        }
    }
    // ask the outside if submenu should be inlined or not. only ask when
    // there would be enough space
    for (const { group, action, index } of submenuInfo) {
        const target = isPrimaryAction(group) ? primaryBucket : secondaryBucket;
        // inlining submenus with length 0 or 1 is easy,
        // larger submenus need to be checked with the overall limit
        const submenuActions = action.actions;
        if ((submenuActions.length <= 1 || target.length + submenuActions.length - 2 <= primaryMaxCount) && shouldInlineSubmenu(action, group, target.length)) {
            target.splice(index, 1, ...submenuActions);
        }
    }
    // overflow items from the primary group into the secondary bucket
    if (primaryBucket !== secondaryBucket && primaryBucket.length > primaryMaxCount) {
        const overflow = primaryBucket.splice(primaryMaxCount, primaryBucket.length - primaryMaxCount);
        secondaryBucket.unshift(...overflow, new Separator());
    }
}
let MenuEntryActionViewItem = class MenuEntryActionViewItem extends ActionViewItem {
    constructor(_action, _keybindingService, _notificationService) {
        super(undefined, _action, { icon: !!(_action.class || _action.item.icon), label: !_action.class && !_action.item.icon });
        this._keybindingService = _keybindingService;
        this._notificationService = _notificationService;
        this._wantsAltCommand = false;
        this._itemClassDispose = this._register(new MutableDisposable());
        this._altKey = ModifierKeyEmitter.getInstance();
    }
    get _menuItemAction() {
        return this._action;
    }
    get _commandAction() {
        return this._wantsAltCommand && this._menuItemAction.alt || this._menuItemAction;
    }
    onClick(event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            event.stopPropagation();
            try {
                yield this.actionRunner.run(this._commandAction, this._context);
            }
            catch (err) {
                this._notificationService.error(err);
            }
        });
    }
    render(container) {
        super.render(container);
        container.classList.add('menu-entry');
        this._updateItemClass(this._menuItemAction.item);
        let mouseOver = false;
        let alternativeKeyDown = this._altKey.keyStatus.altKey || ((isWindows || isLinux) && this._altKey.keyStatus.shiftKey);
        const updateAltState = () => {
            const wantsAltCommand = mouseOver && alternativeKeyDown;
            if (wantsAltCommand !== this._wantsAltCommand) {
                this._wantsAltCommand = wantsAltCommand;
                this.updateLabel();
                this.updateTooltip();
                this.updateClass();
            }
        };
        if (this._menuItemAction.alt) {
            this._register(this._altKey.event(value => {
                alternativeKeyDown = value.altKey || ((isWindows || isLinux) && value.shiftKey);
                updateAltState();
            }));
        }
        this._register(domEvent(container, 'mouseleave')(_ => {
            mouseOver = false;
            updateAltState();
        }));
        this._register(domEvent(container, 'mouseenter')(e => {
            mouseOver = true;
            updateAltState();
        }));
    }
    updateLabel() {
        if (this.options.label && this.label) {
            this.label.textContent = this._commandAction.label;
        }
    }
    updateTooltip() {
        if (this.label) {
            const keybinding = this._keybindingService.lookupKeybinding(this._commandAction.id);
            const keybindingLabel = keybinding && keybinding.getLabel();
            const tooltip = this._commandAction.tooltip || this._commandAction.label;
            let title = keybindingLabel
                ? localize('titleAndKb', "{0} ({1})", tooltip, keybindingLabel)
                : tooltip;
            if (!this._wantsAltCommand && this._menuItemAction.alt) {
                const altTooltip = this._menuItemAction.alt.tooltip || this._menuItemAction.alt.label;
                const altKeybinding = this._keybindingService.lookupKeybinding(this._menuItemAction.alt.id);
                const altKeybindingLabel = altKeybinding && altKeybinding.getLabel();
                const altTitleSection = altKeybindingLabel
                    ? localize('titleAndKb', "{0} ({1})", altTooltip, altKeybindingLabel)
                    : altTooltip;
                title += `\n[${UILabelProvider.modifierLabels[OS].altKey}] ${altTitleSection}`;
            }
            this.label.title = title;
        }
    }
    updateClass() {
        if (this.options.icon) {
            if (this._commandAction !== this._menuItemAction) {
                if (this._menuItemAction.alt) {
                    this._updateItemClass(this._menuItemAction.alt.item);
                }
            }
            else if (this._menuItemAction.alt) {
                this._updateItemClass(this._menuItemAction.item);
            }
        }
    }
    _updateItemClass(item) {
        var _a;
        this._itemClassDispose.value = undefined;
        const { element, label } = this;
        if (!element || !label) {
            return;
        }
        const icon = this._commandAction.checked && ((_a = item.toggled) === null || _a === void 0 ? void 0 : _a.icon) ? item.toggled.icon : item.icon;
        if (!icon) {
            return;
        }
        if (ThemeIcon.isThemeIcon(icon)) {
            // theme icons
            const iconClasses = ThemeIcon.asClassNameArray(icon);
            label.classList.add(...iconClasses);
            this._itemClassDispose.value = toDisposable(() => {
                label.classList.remove(...iconClasses);
            });
        }
        else {
            // icon path/url
            if (icon.light) {
                label.style.setProperty('--menu-entry-icon-light', asCSSUrl(icon.light));
            }
            if (icon.dark) {
                label.style.setProperty('--menu-entry-icon-dark', asCSSUrl(icon.dark));
            }
            label.classList.add('icon');
            this._itemClassDispose.value = toDisposable(() => {
                label.classList.remove('icon');
                label.style.removeProperty('--menu-entry-icon-light');
                label.style.removeProperty('--menu-entry-icon-dark');
            });
        }
    }
};
MenuEntryActionViewItem = __decorate([
    __param(1, IKeybindingService),
    __param(2, INotificationService)
], MenuEntryActionViewItem);
export { MenuEntryActionViewItem };
let SubmenuEntryActionViewItem = class SubmenuEntryActionViewItem extends DropdownMenuActionViewItem {
    constructor(action, contextMenuService) {
        super(action, { getActions: () => action.actions }, contextMenuService, {
            menuAsChild: true,
            classNames: ThemeIcon.isThemeIcon(action.item.icon) ? ThemeIcon.asClassName(action.item.icon) : undefined,
        });
    }
    render(container) {
        super.render(container);
        if (this.element) {
            container.classList.add('menu-entry');
            const { icon } = this._action.item;
            if (icon && !ThemeIcon.isThemeIcon(icon)) {
                this.element.classList.add('icon');
                if (icon.light) {
                    this.element.style.setProperty('--menu-entry-icon-light', asCSSUrl(icon.light));
                }
                if (icon.dark) {
                    this.element.style.setProperty('--menu-entry-icon-dark', asCSSUrl(icon.dark));
                }
            }
        }
    }
};
SubmenuEntryActionViewItem = __decorate([
    __param(1, IContextMenuService)
], SubmenuEntryActionViewItem);
export { SubmenuEntryActionViewItem };
/**
 * Creates action view items for menu actions or submenu actions.
 */
export function createActionViewItem(instaService, action) {
    if (action instanceof MenuItemAction) {
        return instaService.createInstance(MenuEntryActionViewItem, action);
    }
    else if (action instanceof SubmenuItemAction) {
        return instaService.createInstance(SubmenuEntryActionViewItem, action);
    }
    else {
        return undefined;
    }
}
