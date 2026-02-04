"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.literal = void 0;
const models_1 = require("typedoc/dist/lib/models");
const declaration_title_1 = require("./declaration-title");
const signature_title_1 = require("./signature-title");
const spaces_1 = require("./spaces");
function literal() {
    const md = [];
    if (this.children) {
        this.children.forEach(child => {
            md.push(objectProperty(md, 0, child));
        });
    }
    return md.join('') + '\n';
}
exports.literal = literal;
function objectProperty(md, spaceLength, property) {
    if (property.type instanceof models_1.ReflectionType) {
        md.push(`${spaces_1.spaces(spaceLength)}* ${signature_title_1.signatureTitle.call(property, false)}\n\n`);
        if (property.type.declaration) {
            md.push(objectProperty(md, spaceLength + 2, property.type.declaration));
        }
        if (property.type.declaration && property.type.declaration.signatures) {
            property.type.declaration.signatures.forEach(signature => {
                if (signature.kind !== models_1.ReflectionKind.CallSignature) {
                    md.push(`${spaces_1.spaces(spaceLength)}* ${signature_title_1.signatureTitle.call(signature, false)}\n\n`);
                    if (signature.type instanceof models_1.ReflectionType) {
                        md.push(objectProperty(md, spaceLength + 2, signature.type.declaration));
                    }
                }
            });
        }
    }
    else {
        if (property.signatures) {
            property.signatures.forEach(signature => {
                md.push(`${spaces_1.spaces(spaceLength)}* ${signature_title_1.signatureTitle.call(signature, false)}\n\n`);
                if (signature.type instanceof models_1.ReflectionType) {
                    md.push(objectProperty(md, spaceLength + 2, signature.type.declaration));
                }
            });
        }
        else {
            if (property.kind !== models_1.ReflectionKind.TypeLiteral) {
                md.push(`${spaces_1.spaces(spaceLength)}* ${declaration_title_1.declarationTitle.call(property, false)}\n\n`);
            }
        }
    }
    if (property.children) {
        property.children.forEach(child => {
            md.push(objectProperty(md, property.kind === models_1.ReflectionKind.TypeLiteral ? spaceLength : spaceLength + 2, child));
        });
    }
}
