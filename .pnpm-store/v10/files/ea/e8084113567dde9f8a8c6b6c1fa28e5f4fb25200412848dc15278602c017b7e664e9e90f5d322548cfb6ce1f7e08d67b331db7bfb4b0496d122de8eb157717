"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = exports.hashExists = exports.hash = void 0;
const const_1 = require("./const");
const libs_1 = require("./libs");
const util_primitive_1 = require("./util.primitive");
function hash(algorithm, ...values) {
    if (libs_1.R.pipe(util_primitive_1.compact, libs_1.R.isEmpty)(values))
        return undefined;
    const resultHash = libs_1.crypto.createHash(algorithm);
    const addValue = (value) => resultHash.update(value);
    const addValues = libs_1.R.forEach(addValue);
    libs_1.R.pipe(util_primitive_1.toStringArray, addValues)(values);
    return resultHash.digest('hex');
}
exports.hash = hash;
function hashExists(algorithm) {
    return libs_1.crypto.getHashes().includes(algorithm);
}
exports.hashExists = hashExists;
function encrypt(secret, data, options = {}) {
    const { algorithm = const_1.DEFAULTS.encrypt.algorithm, ivLength = const_1.DEFAULTS.encrypt.ivLength } = options;
    const iv = libs_1.crypto.randomBytes(ivLength);
    const cipher = libs_1.crypto.createCipheriv(algorithm, secret, iv);
    const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
    return {
        iv,
        data: encrypted,
        toString: () => `${iv.toString('hex')}:${encrypted.toString('hex')}`,
    };
}
exports.encrypt = encrypt;
function decrypt(secret, input, options = {}) {
    const text = typeof input === 'string' ? input : input.toString();
    const { algorithm = const_1.DEFAULTS.encrypt.algorithm } = options;
    const textParts = text.split(':');
    const iv = Buffer.from(textParts[0], 'hex');
    const encryptedText = Buffer.from(textParts[1], 'hex');
    const decipher = libs_1.crypto.createDecipheriv(algorithm, Buffer.from(secret), iv);
    const decrypted = Buffer.concat([decipher.update(encryptedText), decipher.final()]);
    return {
        iv,
        data: decrypted,
        toString: () => decrypted.toString(),
    };
}
exports.decrypt = decrypt;
