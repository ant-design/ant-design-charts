"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGraphin = exports.GraphinContext = void 0;
var react_1 = __importDefault(require("react"));
exports.GraphinContext = react_1.default.createContext({
    graph: null,
    isReady: false,
});
var useGraphin = function () {
    var context = react_1.default.useContext(exports.GraphinContext);
    if (context === undefined || Object.keys(context).length === 0) {
        throw new Error('useGraphin must be used within a GraphinProvider.');
    }
    return context;
};
exports.useGraphin = useGraphin;
