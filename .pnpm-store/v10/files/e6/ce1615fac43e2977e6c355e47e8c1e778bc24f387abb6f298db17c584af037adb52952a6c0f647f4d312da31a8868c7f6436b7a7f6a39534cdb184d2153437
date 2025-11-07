"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const components_1 = require("../../components");
const declaration_1 = require("./declaration");
class ReferenceReflectionSerializer extends components_1.ReflectionSerializerComponent {
    supports(t) {
        return t instanceof models_1.ReferenceReflection;
    }
    toObject(ref, obj) {
        var _a, _b;
        return Object.assign(Object.assign({}, obj), { target: (_b = (_a = ref.tryGetTargetReflection()) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : -1 });
    }
}
exports.ReferenceReflectionSerializer = ReferenceReflectionSerializer;
ReferenceReflectionSerializer.PRIORITY = declaration_1.DeclarationReflectionSerializer.PRIORITY - 1;
//# sourceMappingURL=reference.js.map