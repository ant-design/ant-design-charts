/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CancellationToken } from '../../../base/common/cancellation.js';
import { onUnexpectedExternalError } from '../../../base/common/errors.js';
import { registerModelAndPositionCommand } from '../../browser/editorExtensions.js';
import { DefinitionProviderRegistry, ImplementationProviderRegistry, TypeDefinitionProviderRegistry, DeclarationProviderRegistry, ReferenceProviderRegistry } from '../../common/modes.js';
import { ReferencesModel } from './referencesModel.js';
function getLocationLinks(model, position, registry, provide) {
    const provider = registry.ordered(model);
    // get results
    const promises = provider.map((provider) => {
        return Promise.resolve(provide(provider, model, position)).then(undefined, err => {
            onUnexpectedExternalError(err);
            return undefined;
        });
    });
    return Promise.all(promises).then(values => {
        const result = [];
        for (let value of values) {
            if (Array.isArray(value)) {
                result.push(...value);
            }
            else if (value) {
                result.push(value);
            }
        }
        return result;
    });
}
export function getDefinitionsAtPosition(model, position, token) {
    return getLocationLinks(model, position, DefinitionProviderRegistry, (provider, model, position) => {
        return provider.provideDefinition(model, position, token);
    });
}
export function getDeclarationsAtPosition(model, position, token) {
    return getLocationLinks(model, position, DeclarationProviderRegistry, (provider, model, position) => {
        return provider.provideDeclaration(model, position, token);
    });
}
export function getImplementationsAtPosition(model, position, token) {
    return getLocationLinks(model, position, ImplementationProviderRegistry, (provider, model, position) => {
        return provider.provideImplementation(model, position, token);
    });
}
export function getTypeDefinitionsAtPosition(model, position, token) {
    return getLocationLinks(model, position, TypeDefinitionProviderRegistry, (provider, model, position) => {
        return provider.provideTypeDefinition(model, position, token);
    });
}
export function getReferencesAtPosition(model, position, compact, token) {
    return getLocationLinks(model, position, ReferenceProviderRegistry, (provider, model, position) => __awaiter(this, void 0, void 0, function* () {
        const result = yield provider.provideReferences(model, position, { includeDeclaration: true }, token);
        if (!compact || !result || result.length !== 2) {
            return result;
        }
        const resultWithoutDeclaration = yield provider.provideReferences(model, position, { includeDeclaration: false }, token);
        if (resultWithoutDeclaration && resultWithoutDeclaration.length === 1) {
            return resultWithoutDeclaration;
        }
        return result;
    }));
}
// -- API commands ----
function _sortedAndDeduped(callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const rawLinks = yield callback();
        const model = new ReferencesModel(rawLinks, '');
        const modelLinks = model.references.map(ref => ref.link);
        model.dispose();
        return modelLinks;
    });
}
registerModelAndPositionCommand('_executeDefinitionProvider', (model, position) => _sortedAndDeduped(() => getDefinitionsAtPosition(model, position, CancellationToken.None)));
registerModelAndPositionCommand('_executeDeclarationProvider', (model, position) => _sortedAndDeduped(() => getDeclarationsAtPosition(model, position, CancellationToken.None)));
registerModelAndPositionCommand('_executeImplementationProvider', (model, position) => _sortedAndDeduped(() => getImplementationsAtPosition(model, position, CancellationToken.None)));
registerModelAndPositionCommand('_executeTypeDefinitionProvider', (model, position) => _sortedAndDeduped(() => getTypeDefinitionsAtPosition(model, position, CancellationToken.None)));
registerModelAndPositionCommand('_executeReferenceProvider', (model, position) => _sortedAndDeduped(() => getReferencesAtPosition(model, position, false, CancellationToken.None)));
