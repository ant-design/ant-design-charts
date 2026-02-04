/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { createDecorator } from '../../instantiation/common/instantiation.js';
import { Emitter, PauseableEmitter } from '../../../base/common/event.js';
import { Disposable } from '../../../base/common/lifecycle.js';
import { isUndefinedOrNull } from '../../../base/common/types.js';
import { InMemoryStorageDatabase, Storage } from '../../../base/parts/storage/common/storage.js';
const TARGET_KEY = '__$__targetStorageMarker';
export const IStorageService = createDecorator('storageService');
export var WillSaveStateReason;
(function (WillSaveStateReason) {
    /**
     * No specific reason to save state.
     */
    WillSaveStateReason[WillSaveStateReason["NONE"] = 0] = "NONE";
    /**
     * A hint that the workbench is about to shutdown.
     */
    WillSaveStateReason[WillSaveStateReason["SHUTDOWN"] = 1] = "SHUTDOWN";
})(WillSaveStateReason || (WillSaveStateReason = {}));
export class AbstractStorageService extends Disposable {
    constructor(options = { flushInterval: AbstractStorageService.DEFAULT_FLUSH_INTERVAL }) {
        super();
        this.options = options;
        this._onDidChangeValue = this._register(new PauseableEmitter());
        this._onDidChangeTarget = this._register(new PauseableEmitter());
        this._onWillSaveState = this._register(new Emitter());
        this.onWillSaveState = this._onWillSaveState.event;
        this._workspaceKeyTargets = undefined;
        this._globalKeyTargets = undefined;
    }
    emitDidChangeValue(scope, key) {
        // Specially handle `TARGET_KEY`
        if (key === TARGET_KEY) {
            // Clear our cached version which is now out of date
            if (scope === 0 /* GLOBAL */) {
                this._globalKeyTargets = undefined;
            }
            else if (scope === 1 /* WORKSPACE */) {
                this._workspaceKeyTargets = undefined;
            }
            // Emit as `didChangeTarget` event
            this._onDidChangeTarget.fire({ scope });
        }
        // Emit any other key to outside
        else {
            this._onDidChangeValue.fire({ scope, key, target: this.getKeyTargets(scope)[key] });
        }
    }
    get(key, scope, fallbackValue) {
        var _a;
        return (_a = this.getStorage(scope)) === null || _a === void 0 ? void 0 : _a.get(key, fallbackValue);
    }
    getBoolean(key, scope, fallbackValue) {
        var _a;
        return (_a = this.getStorage(scope)) === null || _a === void 0 ? void 0 : _a.getBoolean(key, fallbackValue);
    }
    getNumber(key, scope, fallbackValue) {
        var _a;
        return (_a = this.getStorage(scope)) === null || _a === void 0 ? void 0 : _a.getNumber(key, fallbackValue);
    }
    store(key, value, scope, target) {
        // We remove the key for undefined/null values
        if (isUndefinedOrNull(value)) {
            this.remove(key, scope);
            return;
        }
        // Update our datastructures but send events only after
        this.withPausedEmitters(() => {
            var _a;
            // Update key-target map
            this.updateKeyTarget(key, scope, target);
            // Store actual value
            (_a = this.getStorage(scope)) === null || _a === void 0 ? void 0 : _a.set(key, value);
        });
    }
    remove(key, scope) {
        // Update our datastructures but send events only after
        this.withPausedEmitters(() => {
            var _a;
            // Update key-target map
            this.updateKeyTarget(key, scope, undefined);
            // Remove actual key
            (_a = this.getStorage(scope)) === null || _a === void 0 ? void 0 : _a.delete(key);
        });
    }
    withPausedEmitters(fn) {
        // Pause emitters
        this._onDidChangeValue.pause();
        this._onDidChangeTarget.pause();
        try {
            fn();
        }
        finally {
            // Resume emitters
            this._onDidChangeValue.resume();
            this._onDidChangeTarget.resume();
        }
    }
    updateKeyTarget(key, scope, target) {
        var _a, _b;
        // Add
        const keyTargets = this.getKeyTargets(scope);
        if (typeof target === 'number') {
            if (keyTargets[key] !== target) {
                keyTargets[key] = target;
                (_a = this.getStorage(scope)) === null || _a === void 0 ? void 0 : _a.set(TARGET_KEY, JSON.stringify(keyTargets));
            }
        }
        // Remove
        else {
            if (typeof keyTargets[key] === 'number') {
                delete keyTargets[key];
                (_b = this.getStorage(scope)) === null || _b === void 0 ? void 0 : _b.set(TARGET_KEY, JSON.stringify(keyTargets));
            }
        }
    }
    get workspaceKeyTargets() {
        if (!this._workspaceKeyTargets) {
            this._workspaceKeyTargets = this.loadKeyTargets(1 /* WORKSPACE */);
        }
        return this._workspaceKeyTargets;
    }
    get globalKeyTargets() {
        if (!this._globalKeyTargets) {
            this._globalKeyTargets = this.loadKeyTargets(0 /* GLOBAL */);
        }
        return this._globalKeyTargets;
    }
    getKeyTargets(scope) {
        return scope === 0 /* GLOBAL */ ? this.globalKeyTargets : this.workspaceKeyTargets;
    }
    loadKeyTargets(scope) {
        const keysRaw = this.get(TARGET_KEY, scope);
        if (keysRaw) {
            try {
                return JSON.parse(keysRaw);
            }
            catch (error) {
                // Fail gracefully
            }
        }
        return Object.create(null);
    }
}
AbstractStorageService.DEFAULT_FLUSH_INTERVAL = 60 * 1000; // every minute
export class InMemoryStorageService extends AbstractStorageService {
    constructor() {
        super();
        this.globalStorage = new Storage(new InMemoryStorageDatabase());
        this.workspaceStorage = new Storage(new InMemoryStorageDatabase());
        this._register(this.workspaceStorage.onDidChangeStorage(key => this.emitDidChangeValue(1 /* WORKSPACE */, key)));
        this._register(this.globalStorage.onDidChangeStorage(key => this.emitDidChangeValue(0 /* GLOBAL */, key)));
    }
    getStorage(scope) {
        return scope === 0 /* GLOBAL */ ? this.globalStorage : this.workspaceStorage;
    }
}
