"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fetch = void 0;
const d3_dsv_1 = require("@antv/vendor/d3-dsv");
const helper_1 = require("../utils/helper");
const Fetch = (options) => {
    const { value, format = value.split('.').pop(), delimiter = ',', autoType = true, } = options;
    return () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(value);
        if (format === 'csv') {
            // @see: https://github.com/d3/d3-dsv#dsv_parse
            const str = yield response.text();
            return (0, d3_dsv_1.dsvFormat)(delimiter).parse(str, autoType ? d3_dsv_1.autoType : helper_1.identity);
        }
        if (format === 'json') {
            return yield response.json();
        }
        throw new Error(`Unknown format: ${format}.`);
    });
};
exports.Fetch = Fetch;
exports.Fetch.props = {};
//# sourceMappingURL=fetch.js.map