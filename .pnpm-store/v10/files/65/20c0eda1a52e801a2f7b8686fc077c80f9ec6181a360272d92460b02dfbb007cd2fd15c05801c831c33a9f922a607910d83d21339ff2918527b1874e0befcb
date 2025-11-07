"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../sources/index");
const abstract_1 = require("./abstract");
const container_1 = require("./container");
const utils_1 = require("./utils");
const reference_1 = require("./reference");
const types_1 = require("../types");
const utils_2 = require("../../utils");
class ProjectReflection extends container_1.ContainerReflection {
    constructor(name) {
        super(name, abstract_1.ReflectionKind.Global);
        this.reflectionToSymbolIdMap = new WeakMap();
        this.symbolIdToReflectionIdMap = new Map();
        this.fqnToReflectionIdMap = new Map();
        this.reflections = {};
        this.directory = new index_1.SourceDirectory();
        this.files = [];
    }
    isProject() {
        return true;
    }
    getReflectionsByKind(kind) {
        return Object.values(this.reflections)
            .filter(reflection => reflection.kindOf(kind));
    }
    findReflectionByName(arg) {
        const names = Array.isArray(arg) ? arg : utils_1.splitUnquotedString(arg, '.');
        const name = names.pop();
        search: for (const key in this.reflections) {
            const reflection = this.reflections[key];
            if (reflection.name !== name) {
                continue;
            }
            let depth = names.length - 1;
            let target = reflection;
            while ((target = target.parent) && depth >= 0) {
                if (target.name !== names[depth]) {
                    continue search;
                }
                depth -= 1;
            }
            return reflection;
        }
        return undefined;
    }
    getDanglingReferences() {
        const dangling = new Set();
        for (const ref of Object.values(this.reflections)) {
            if (ref instanceof reference_1.ReferenceReflection) {
                if (!ref.tryGetTargetReflection()) {
                    dangling.add(ref.name);
                }
            }
        }
        return [...dangling];
    }
    registerReflection(reflection, fqn) {
        this.referenceGraph = undefined;
        this.reflections[reflection.id] = reflection;
        if (fqn) {
            if (!this.fqnToReflectionIdMap.has(fqn)) {
                this.fqnToReflectionIdMap.set(fqn, reflection.id);
            }
        }
    }
    removeReflection(reflection, removeReferences = false) {
        var _a;
        if (removeReferences) {
            for (const id of (_a = this.getReferenceGraph().get(reflection.id)) !== null && _a !== void 0 ? _a : []) {
                const ref = this.getReflectionById(id);
                if (ref) {
                    this.removeReflection(ref, true);
                }
            }
            this.getReferenceGraph().delete(reflection.id);
        }
        reflection.traverse(child => this.removeReflection(child, removeReferences));
        const parent = reflection.parent;
        parent === null || parent === void 0 ? void 0 : parent.traverse((child, property) => {
            if (child !== reflection) {
                return true;
            }
            if (property === abstract_1.TraverseProperty.Children) {
                utils_2.removeIfPresent(parent.children, reflection);
            }
            else if (property === abstract_1.TraverseProperty.GetSignature) {
                delete parent.getSignature;
            }
            else if (property === abstract_1.TraverseProperty.IndexSignature) {
                delete parent.indexSignature;
            }
            else if (property === abstract_1.TraverseProperty.Parameters) {
                utils_2.removeIfPresent(reflection.parent.parameters, reflection);
            }
            else if (property === abstract_1.TraverseProperty.SetSignature) {
                delete parent.setSignature;
            }
            else if (property === abstract_1.TraverseProperty.Signatures) {
                utils_2.removeIfPresent(parent.signatures, reflection);
            }
            else if (property === abstract_1.TraverseProperty.TypeLiteral) {
                parent.type = new types_1.IntrinsicType('Object');
            }
            else if (property === abstract_1.TraverseProperty.TypeParameter) {
                utils_2.removeIfPresent(parent.typeParameters, reflection);
            }
            return false;
        });
        const ids = this.reflectionToSymbolIdMap.get(reflection);
        for (const id of ids !== null && ids !== void 0 ? ids : []) {
            this.symbolIdToReflectionIdMap.delete(id);
        }
        delete this.reflections[reflection.id];
    }
    getReflectionById(id) {
        return this.reflections[id];
    }
    getReflectionFromFQN(fqn) {
        const id = this.fqnToReflectionIdMap.get(fqn);
        if (typeof id === 'number') {
            return this.getReflectionById(id);
        }
    }
    getReferenceGraph() {
        var _a;
        if (!this.referenceGraph) {
            this.referenceGraph = new Map();
            for (const ref of Object.values(this.reflections)) {
                if (ref instanceof reference_1.ReferenceReflection) {
                    const target = ref.tryGetTargetReflection();
                    if (target) {
                        const refs = (_a = this.referenceGraph.get(target.id)) !== null && _a !== void 0 ? _a : [];
                        refs.push(ref.id);
                        this.referenceGraph.set(target.id, refs);
                    }
                }
            }
        }
        return this.referenceGraph;
    }
}
exports.ProjectReflection = ProjectReflection;
//# sourceMappingURL=project.js.map