export declare function repeat(s: string, times: number): string;
export declare function setInternalSlot<Instance extends object, Internal extends object, Field extends keyof Internal>(map: WeakMap<Instance, Internal>, pl: Instance, field: Field, value: NonNullable<Internal>[Field]): void;
export declare function setMultiInternalSlots<Instance extends object, Internal extends object, K extends keyof Internal>(map: WeakMap<Instance, Internal>, pl: Instance, props: Pick<NonNullable<Internal>, K>): void;
export declare function getInternalSlot<Instance extends object, Internal extends object, Field extends keyof Internal>(map: WeakMap<Instance, Internal>, pl: Instance, field: Field): Internal[Field];
export declare function getMultiInternalSlots<Instance extends object, Internal extends object, Field extends keyof Internal>(map: WeakMap<Instance, Internal>, pl: Instance, ...fields: Field[]): Pick<Internal, Field>;
export interface LiteralPart {
    type: 'literal';
    value: string;
}
export declare function isLiteralPart(patternPart: LiteralPart | {
    type: string;
    value?: string;
}): patternPart is LiteralPart;
export declare function defineProperty<T extends object>(target: T, name: string | symbol, { value }: {
    value: any;
} & ThisType<any>): void;
/**
 * 7.3.5 CreateDataProperty
 * @param target
 * @param name
 * @param value
 */
export declare function createDataProperty<T extends object>(target: T, name: string | symbol, value: any): void;
export declare const UNICODE_EXTENSION_SEQUENCE_REGEX: RegExp;
export declare function invariant(condition: boolean, message: string, Err?: any): asserts condition;
export declare const createMemoizedNumberFormat: (...args: ConstructorParameters<typeof Intl.NumberFormat>) => Intl.NumberFormat;
export declare const createMemoizedDateTimeFormat: (...args: ConstructorParameters<typeof Intl.DateTimeFormat>) => Intl.DateTimeFormat;
export declare const createMemoizedPluralRules: (...args: ConstructorParameters<typeof Intl.PluralRules>) => Intl.PluralRules;
export declare const createMemoizedLocale: (...args: ConstructorParameters<typeof Intl.Locale>) => Intl.Locale;
export declare const createMemoizedListFormat: (...args: ConstructorParameters<typeof Intl.ListFormat>) => Intl.ListFormat;
