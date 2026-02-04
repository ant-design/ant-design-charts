/// <reference types="node" />
import { type t } from './types.t';
import { crypto } from './libs';
export declare function hash(algorithm: t.HashAlgorithm, ...values: any[]): string | undefined;
export declare function hashExists(algorithm: t.HashAlgorithm): boolean;
export declare function encrypt(secret: string, data: crypto.BinaryLike, options?: {
    algorithm?: string;
    ivLength?: number;
}): t.EncryptedFile;
export declare function decrypt(secret: string, input: string | t.EncryptedFile, options?: {
    algorithm?: string;
}): t.DecryptedFile;
