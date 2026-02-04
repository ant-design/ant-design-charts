"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const declaration_1 = require("../declaration");
class ArgumentsReader {
    constructor(priority, args = process.argv.slice(2)) {
        this.name = 'arguments';
        this.priority = priority;
        this.args = args;
    }
    read(container, logger) {
        const options = container;
        const seen = new Set();
        let index = 0;
        const trySet = (name, value) => {
            try {
                options.setValue(name, value);
            }
            catch (err) {
                logger.error(err.message);
            }
        };
        while (index < this.args.length) {
            const name = this.args[index];
            const decl = name.startsWith('-')
                ? (index++, options.getDeclaration(name.replace(/^--?/, '')))
                : options.getDeclaration('inputFiles');
            if (decl) {
                if (seen.has(decl.name) && decl.type === declaration_1.ParameterType.Array) {
                    trySet(decl.name, options.getValue(decl.name).concat(this.args[index]));
                }
                else if (decl.type === declaration_1.ParameterType.Boolean) {
                    const value = String(this.args[index]).toLowerCase();
                    if (value === 'true' || value === 'false') {
                        trySet(decl.name, value === 'true');
                    }
                    else {
                        trySet(decl.name, true);
                        index--;
                    }
                }
                else {
                    trySet(decl.name, this.args[index]);
                }
                seen.add(decl.name);
            }
            else {
                logger.error(`Unknown option: ${name}`);
            }
            index++;
        }
    }
}
exports.ArgumentsReader = ArgumentsReader;
//# sourceMappingURL=arguments.js.map