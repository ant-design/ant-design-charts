"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reflectionTitle = void 0;
function reflectionTitle() {
    const title = [];
    if (this.model.kindString) {
        title.push(`${this.model.kindString}:`);
    }
    title.push(this.model.name);
    if (this.model.typeParameters) {
        const typeParameters = this.model.typeParameters.map((typeParameter) => typeParameter.name).join(', ');
        title.push(`‹**${typeParameters}**›`);
    }
    return title.join(' ');
}
exports.reflectionTitle = reflectionTitle;
