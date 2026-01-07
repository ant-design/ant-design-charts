/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { ThemeIcon } from '../common/themeService.js';
import { getIconRegistry } from '../common/iconRegistry.js';
import { asCSSPropertyValue, asCSSUrl } from '../../../base/browser/dom.js';
import { Emitter } from '../../../base/common/event.js';
export function getIconsStyleSheet() {
    const onDidChangeEmmiter = new Emitter();
    const iconRegistry = getIconRegistry();
    iconRegistry.onDidChange(() => onDidChangeEmmiter.fire());
    return {
        onDidChange: onDidChangeEmmiter.event,
        getCSS() {
            const usedFontIds = {};
            const formatIconRule = (contribution) => {
                let definition = contribution.defaults;
                while (ThemeIcon.isThemeIcon(definition)) {
                    const c = iconRegistry.getIcon(definition.id);
                    if (!c) {
                        return undefined;
                    }
                    definition = c.defaults;
                }
                const fontId = definition.fontId;
                if (fontId) {
                    const fontContribution = iconRegistry.getIconFont(fontId);
                    if (fontContribution) {
                        usedFontIds[fontId] = fontContribution;
                        return `.codicon-${contribution.id}:before { content: '${definition.fontCharacter}'; font-family: ${asCSSPropertyValue(fontId)}; }`;
                    }
                }
                return `.codicon-${contribution.id}:before { content: '${definition.fontCharacter}'; }`;
            };
            const rules = [];
            for (let contribution of iconRegistry.getIcons()) {
                const rule = formatIconRule(contribution);
                if (rule) {
                    rules.push(rule);
                }
            }
            for (let id in usedFontIds) {
                const fontContribution = usedFontIds[id];
                const src = fontContribution.definition.src.map(l => `${asCSSUrl(l.location)} format('${l.format}')`).join(', ');
                rules.push(`@font-face { src: ${src}; font-family: ${asCSSPropertyValue(id)}; }`);
            }
            return rules.join('\n');
        }
    };
}
