"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
const models_2 = require("../models");
const abstract_1 = require("../../../models/reflections/abstract");
class ReflectionSerializer extends components_1.ReflectionSerializerComponent {
    supports(t) {
        return t instanceof models_1.Reflection;
    }
    toObject(reflection, obj) {
        const result = Object.assign(Object.assign({}, obj), { id: reflection.id, name: reflection.name, kind: reflection.kind, kindString: reflection.kindString, flags: {} });
        if (reflection.originalName !== reflection.name) {
            result.originalName = reflection.originalName;
        }
        if (reflection.comment) {
            result.comment = this.owner.toObject(reflection.comment);
        }
        for (const key of Object.getOwnPropertyNames(abstract_1.ReflectionFlags.prototype)) {
            if (reflection.flags[key] === true) {
                result.flags[key] = true;
            }
        }
        if (reflection.decorates && reflection.decorates.length > 0) {
            result.decorates = reflection.decorates.map(t => this.owner.toObject(t));
        }
        if (reflection.decorators && reflection.decorators.length > 0) {
            result.decorators = reflection.decorators.map(d => this.owner.toObject(new models_2.DecoratorWrapper(d)));
        }
        reflection.traverse((child, property) => {
            if (property === models_1.TraverseProperty.TypeLiteral) {
                return;
            }
            let name = models_1.TraverseProperty[property];
            name = name[0].toLowerCase() + name.substr(1);
            if (!result[name]) {
                result[name] = [];
            }
            result[name].push(this.owner.toObject(child));
        });
        return result;
    }
}
exports.ReflectionSerializer = ReflectionSerializer;
ReflectionSerializer.PRIORITY = 1000;
//# sourceMappingURL=abstract.js.map