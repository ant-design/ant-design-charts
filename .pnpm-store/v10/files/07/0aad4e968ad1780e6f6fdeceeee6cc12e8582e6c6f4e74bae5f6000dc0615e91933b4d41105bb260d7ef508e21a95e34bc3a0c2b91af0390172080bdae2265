"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./abstract");
const declaration_1 = require("./declaration");
var ReferenceState;
(function (ReferenceState) {
    ReferenceState[ReferenceState["Unresolved"] = 0] = "Unresolved";
    ReferenceState[ReferenceState["Resolved"] = 1] = "Resolved";
})(ReferenceState = exports.ReferenceState || (exports.ReferenceState = {}));
class ReferenceReflection extends declaration_1.DeclarationReflection {
    constructor(name, state, parent) {
        super(name, abstract_1.ReflectionKind.Reference, parent);
        this.flags.setFlag(abstract_1.ReflectionFlag.Exported, true);
        this._state = state;
    }
    get isReference() {
        return true;
    }
    tryGetTargetReflection() {
        this._ensureProject();
        this._ensureResolved(false);
        return this._state[0] === ReferenceState.Resolved ? this._project.getReflectionById(this._state[1]) : undefined;
    }
    tryGetTargetReflectionDeep() {
        let result = this.tryGetTargetReflection();
        while (result instanceof ReferenceReflection) {
            result = result.tryGetTargetReflection();
        }
        return result;
    }
    getTargetReflection() {
        this._ensureProject();
        this._ensureResolved(true);
        return this._project.getReflectionById(this._state[1]);
    }
    getTargetReflectionDeep() {
        let result = this.getTargetReflection();
        while (result instanceof ReferenceReflection) {
            result = result.getTargetReflection();
        }
        return result;
    }
    _ensureResolved(throwIfFail) {
        if (this._state[0] === ReferenceState.Unresolved) {
            const target = this._project.getReflectionFromFQN(this._state[1]);
            if (!target) {
                if (throwIfFail) {
                    throw new Error(`Tried to reference reflection for ${this.name} that does not exist.`);
                }
                return;
            }
            this._state = [ReferenceState.Resolved, target.id];
        }
    }
    _ensureProject() {
        if (this._project) {
            return;
        }
        let project = this.parent;
        while (project && !project.isProject()) {
            project = project.parent;
        }
        this._project = project;
        if (!this._project) {
            throw new Error('Reference reflection has no project and is unable to resolve.');
        }
    }
}
exports.ReferenceReflection = ReferenceReflection;
//# sourceMappingURL=reference.js.map