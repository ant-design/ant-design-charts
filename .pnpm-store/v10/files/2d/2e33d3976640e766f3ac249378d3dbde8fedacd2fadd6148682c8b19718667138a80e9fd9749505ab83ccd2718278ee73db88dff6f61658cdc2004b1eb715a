import * as _ from 'ts-toolbelt';
import {
    DeepModify,
} from './deepModify';
import {
    AtLeastOneFunctionsFlow,
    AtLeastOneFunctionsFlowFromRightToLeft,
    CondPair,
    CondPairTypeguard,
    DefaultTo,
    Evolvable,
    Evolve,
    Evolver,
    Falsy,
    Functor,
    FunctorMap,
    FunctorFantasyLand,
    InferAnyAType,
    KeyValuePair,
    Lens,
    InferAllAType,
    mergeArrWithLeft,
    LargestArgumentsList,
    IfFunctionsArgumentsDoNotOverlap,
    ObjPred,
    Ord,
    LT,
    EQ,
    GT,
    Ordering,
    ObjectHavingSome,
    PartialRecord,
    Path,
    Placeholder,
    Reduced,
    Fn,
    ReturnTypesOfFns,
    InputTypesOfFns,
    ValueOfUnion,
    Take,
    Tuple,
    ToTupleOfArray,
    ToTupleOfFunction,
    Prop,
    WidenLiterals,
    ElementOf,
} from './tools';

/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * See also {@link pick}
 *
 * @example
 * ```typescript
 * R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 * ```
 */
export function omit<Keys extends readonly PropertyKey[]>(names: Keys): <U extends Partial<Record<ElementOf<Keys>, any>>>(obj: ElementOf<Keys> extends keyof U ? U : never) => ElementOf<Keys> extends keyof U ? Omit<U, ElementOf<Keys>> : never;
export function omit<U, Keys extends keyof U>(names: readonly Keys[], obj: U): Omit<U, Keys>;


/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * See also {@link omit}, {@link props}
 *
 * @example
 * ```typescript
 * R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 * R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 * ```
 */
export function pick<Keys extends readonly PropertyKey[]>(names: Keys): <U extends Partial<Record<ElementOf<Keys>, any>>>(obj: ElementOf<Keys> extends keyof U ? U : never) => ElementOf<Keys> extends keyof U ? Pick<U, ElementOf<Keys>> : never;
export function pick<U, Keys extends keyof U>(names: readonly Keys[], obj: U): Pick<U, Keys>;


/**
 * A special placeholder value used to specify "gaps" within curried functions,
 * allowing partial application of any combination of arguments, regardless of
 * their positions.
 * 
 * If `g` is a curried ternary function and `_` is `R.__`, the following are
 * equivalent:
 * 
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2, _)(1, 3)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @example
 * ```typescript
 * const greet = R.replace('{name}', R.__, 'Hello, {name}!');
 * greet('Alice'); //=> 'Hello, Alice!'
 * ```
 */
export const __: Placeholder;


/**
 * Adds two values.
 *
 * See also {@link subtract}
 *
 * @example
 * ```typescript
 * R.add(2, 3);       //=>  5
 * R.add(7)(10);      //=> 17
 * ```
 */
export function add(a: number): (b: number) => number;
export function add(a: number, b: number): number;


/**
 * Creates a new list iteration function from an existing one by adding two new
 * parameters to its callback function: the current index, and the entire list.
 * 
 * This would turn, for instance, [`R.map`](#map) function into one that
 * more closely resembles `Array.prototype.map`. Note that this will only work
 * for functions in which the iteration callback function is the first
 * parameter, and where the list is the last parameter. (This latter might be
 * unimportant if the list parameter is not used.)
 *
 * @example
 * ```typescript
 * const mapIndexed = R.addIndex(R.map);
 * mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 * //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 * ```
 */
export function addIndex<T>(
  fn: (f: (item: T) => void, list: readonly T[]) => T[],
): _.F.Curry<(a: (item: T, idx: number, list: T[]) => void, b: readonly T[]) => T[]>;
// Special case for filter
export function addIndex<T>(
  fn: (f: (item: T) => boolean, list: readonly T[]) => T[],
): _.F.Curry<(a: (item: T, idx: number, list: T[]) => boolean, b: readonly T[]) => T[]>;
// Special case for map
export function addIndex<T, U>(
  fn: (f: (item: T) => U, list: readonly T[]) => U[],
): _.F.Curry<(a: (item: T, idx: number, list: T[]) => U, b: readonly T[]) => U[]>;
// Special case for reduce
export function addIndex<T, U>(
  fn: (f: (acc: U, item: T) => U, aci: U, list: readonly T[]) => U,
): _.F.Curry<(a: (acc: U, item: T, idx: number, list: T[]) => U, b: U, c: readonly T[]) => U>;


/**
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 *
 * See also {@link update}
 *
 * @example
 * ```typescript
 * R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']);      //=> ['a', 'B', 'c', 'd']
 * R.adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']);     //=> ['a', 'b', 'c', 'D']
 * ```
 */
export function adjust(index: number): {
  // adjust(index)(fn, list)
  <T>(fn: (a: T) => T, list: readonly T[]): T[];
  // adjust(index)(__, list)(fn)
  <T>(__: Placeholder, list: readonly T[]): (fn: (a: T) => T) => T[];
  // adjust(index)(fn)(list)
  <T>(fn: (a: T) => T): (list: readonly T[]) => T[];
};

// adjust(__, fn)
export function adjust<T>(__: Placeholder, fn: (a: T) => T): {
  // adjust(__, fn)(list)(index)
  (list: readonly T[]): (index: number) => T[];
  // adjust(__, fn)(__, index)(list)
  (__: Placeholder, index: number): (list: readonly T[]) => T[];
  // adjust(__, fn)(list, index)
  (list: readonly T[], index: number): T[];
};

export function adjust<T>(index: number, fn: (a: T) => T): (list: readonly T[]) => T[];

// adjust(index, fn)(list)
export function adjust<T>(index: number, fn: (a: T) => T): (list: readonly T[]) => T[];
// adjust(index, fn)(list)
export function adjust<T>(index: number, fn: (a: T) => T): (list: readonly T[]) => T[];


// adjust(__, __, list)
export function adjust<T>(__: Placeholder, __2: Placeholder, list: readonly T[]): {
  // adjust(__, __, list)(index)(fn)
  (index: number): (fn: (a: T) => T) => T[];
  // adjust(__, __, list)(__, fn)(index)
  (__3: Placeholder, fn: (a: T) => T): (index: number) => T[];
  // adjust(__, __, list)(index, fn)
  (index: number, fn: (a: T) => T): T[];
};
// adjust(index, __, list)(fn)
export function adjust<T>(index: number, __: Placeholder, list: readonly T[]): (fn: (a: T) => T) => T[];
// adjust(__, fn, list)(index)
export function adjust<T>(__: Placeholder, fn: (a: T) => T, list: readonly T[]): (index: number) => T[];

// adjust(index, fn, list)
export function adjust<T>(index: number, fn: (a: T) => T, list: readonly T[]): T[];


/**
 * Returns `true` if all elements of the list match the predicate, `false` if
 * there are any that don't.
 * 
 * Dispatches to the `all` method of the second argument, if present.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link any}, {@link none}, {@link transduce}
 *
 * @example
 * ```typescript
 * const equals3 = R.equals(3);
 * R.all(equals3)([3, 3, 3, 3]); //=> true
 * R.all(equals3)([3, 3, 1, 3]); //=> false
 * ```
 */
export function all<T>(fn: (a: T) => boolean): {
  // all (fn)({ all })
  <U extends { all: (fn: (a: T) => boolean) => boolean }>(obj: U): boolean;
  // all (fn)(list)
  (list: readonly T[]): boolean;
};

// all(__, { all })(fn)
export function all<U extends { all: (fn: (a: any) => boolean) => boolean }>(__: Placeholder, obj: U): (fn: (a: InferAllAType<U>) => boolean) => boolean;
// all(__, list)(fn)
export function all<T>(__: Placeholder, list: readonly T[]): (fn: (a: T) => boolean) => boolean;

// all(fn, { all })
export function all<T, U extends { all: (fn: (a: T) => boolean) => boolean }>(fn: (a: T) => boolean, obj: U): boolean;
// all(fn, list)
export function all<T>(fn: (a: T) => boolean, list: readonly T[]): boolean;


/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 * 
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * See also {@link anyPass}, {@link both}
 *
 * @example
 * ```typescript
 * const isQueen = R.propEq('Q', 'rank');
 * const isSpade = R.propEq('♠︎', 'suit');
 * const isQueenOfSpades = R.allPass([isQueen, isSpade]);
 * 
 * isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 * isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 * ```
 */
export function allPass<T, TF1 extends T, TF2 extends T>(
  predicates: [(a: T) => a is TF1, (a: T) => a is TF2]
): (a: T) => a is TF1 & TF2;
export function allPass<T, TF1 extends T, TF2 extends T, TF3 extends T>(
  predicates: [(a: T) => a is TF1, (a: T) => a is TF2, (a: T) => a is TF3],
): (a: T) => a is TF1 & TF2 & TF3;
export function allPass<T, TF1 extends T, TF2 extends T, TF3 extends T, TF4 extends T>(
  predicates: [(a: T) => a is TF1, (a: T) => a is TF2, (a: T) => a is TF3, (a: T) => a is TF4],
): (a: T) => a is TF1 & TF2 & TF3 & TF4;
export function allPass<T, TF1 extends T, TF2 extends T, TF3 extends T, TF4 extends T, TF5 extends T>(
  predicates: [
    (a: T) => a is TF1,
    (a: T) => a is TF2,
    (a: T) => a is TF3,
    (a: T) => a is TF4,
    (a: T) => a is TF5
  ],
): (a: T) => a is TF1 & TF2 & TF3 & TF4 & TF5;
export function allPass<T, TF1 extends T, TF2 extends T, TF3 extends T, TF4 extends T, TF5 extends T, TF6 extends T>(
  predicates: [
    (a: T) => a is TF1,
    (a: T) => a is TF2,
    (a: T) => a is TF3,
    (a: T) => a is TF4,
    (a: T) => a is TF5,
    (a: T) => a is TF6
  ],
): (a: T) => a is TF1 & TF2 & TF3 & TF4 & TF5 & TF6;
export function allPass<F extends (...args: any[]) => boolean>(predicates: readonly F[]): F;


/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 * 
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @example
 * ```typescript
 * const t = R.always('Tee');
 * t(); //=> 'Tee'
 * ```
 */
export function always<T>(val: T): (...args: unknown[]) => T;


/**
 * Returns the first argument if it is falsy, otherwise the second argument.
 * Acts as the boolean `and` statement if both inputs are `Boolean`s.
 *
 * See also {@link both}, {@link or}
 *
 * @example
 * ```typescript
 * R.and(true, true); //=> true
 * R.and(true, false); //=> false
 * R.and(false, true); //=> false
 * R.and(false, false); //=> false
 * ```
 */
export function and<A>(a: A): <B>(b: B) => A | B;
export function and<B>(__: Placeholder, b: B): <A>(a: A) => A | B;
export function and<A, B>(a: A, b: B): A | B;


/**
 * Returns the result of applying the onSuccess function to the value inside
 * a successfully resolved promise. This is useful for working with promises
 * inside function compositions.
 *
 * See also {@link otherwise}
 *
 * @example
 * ```typescript
 * const makeQuery = email => ({ query: { email }});
 * const fetchMember = request =>
 *   Promise.resolve({ firstName: 'Bob', lastName: 'Loblaw', id: 42 });
 * 
 * //getMemberName :: String -> Promise ({ firstName, lastName })
 * const getMemberName = R.pipe(
 *   makeQuery,
 *   fetchMember,
 *   R.andThen(R.pick(['firstName', 'lastName']))
 * );
 * 
 * getMemberName('bob@gmail.com').then(console.log);
 * ```
 */
export function andThen<A, B>(onSuccess: (a: A) => B | Promise<B>): (promise: Promise<A>) => Promise<B>;
export function andThen<A>(__: Placeholder, promise: Promise<A>): <B>(onSuccess: (a: A) => B | Promise<B>) => Promise<B>;
export function andThen<A, B>(onSuccess: (a: A) => B | Promise<B>, promise: Promise<A>): Promise<B>;


/**
 * Returns `true` if at least one of the elements of the list match the predicate,
 * `false` otherwise.
 * 
 * Dispatches to the `any` method of the second argument, if present.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link all}, {@link none}, {@link transduce}
 *
 * @example
 * ```typescript
 * const lessThan0 = R.flip(R.lt)(0);
 * const lessThan2 = R.flip(R.lt)(2);
 * R.any(lessThan0)([1, 2]); //=> false
 * R.any(lessThan2)([1, 2]); //=> true
 * ```
 */
export function any<T>(fn: (a: T) => boolean): {
  // any(fn)(list)
  (list: readonly T[]): boolean;
  // all (fn)({ any })
  <U extends { any: (fn: (a: T) => boolean) => boolean }>(obj: U): boolean;
};

// any(__, list)(fn)
export function any<T>(__: Placeholder, list: readonly T[]): (fn: (a: T) => boolean) => boolean;
// any(__, { any })(fn)
export function any<U extends { any: (fn: (a: any) => boolean) => boolean }>(___: Placeholder, obj: U): (fn: (a: InferAnyAType<U>) => boolean) => boolean;

// any(fn, list)
export function any<T>(fn: (a: T) => boolean, list: readonly T[]): boolean;
// any(fn, { any })
export function any<T, U extends { any: (fn: (a: T) => boolean) => boolean }>(fn: (a: T) => boolean, obj: U): boolean;


/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 * 
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * See also {@link allPass}, {@link either}
 *
 * @example
 * ```typescript
 * const isClub = R.propEq('♣', 'suit');
 * const isSpade = R.propEq('♠', 'suit');
 * const isBlackCard = R.anyPass([isClub, isSpade]);
 * 
 * isBlackCard({rank: '10', suit: '♣'}); //=> true
 * isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 * isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 * ```
 */
export function anyPass<T, TF1 extends T, TF2 extends T>(
  predicates: [(a: T) => a is TF1, (a: T) => a is TF2],
): (a: T) => a is TF1 | TF2;
export function anyPass<T, TF1 extends T, TF2 extends T, TF3 extends T>(
  predicates: [(a: T) => a is TF1, (a: T) => a is TF2, (a: T) => a is TF3],
): (a: T) => a is TF1 | TF2 | TF3;
export function anyPass<T, TF1 extends T, TF2 extends T, TF3 extends T>(
  predicates: [(a: T) => a is TF1, (a: T) => a is TF2, (a: T) => a is TF3],
): (a: T) => a is TF1 | TF2 | TF3;
export function anyPass<T, TF1 extends T, TF2 extends T, TF3 extends T, TF4 extends T>(
  predicates: [(a: T) => a is TF1, (a: T) => a is TF2, (a: T) => a is TF3, (a: T) => a is TF4],
): (a: T) => a is TF1 | TF2 | TF3 | TF4;
export function anyPass<T, TF1 extends T, TF2 extends T, TF3 extends T, TF4 extends T, TF5 extends T>(
  predicates: [
    (a: T) => a is TF1,
    (a: T) => a is TF2,
    (a: T) => a is TF3,
    (a: T) => a is TF4,
    (a: T) => a is TF5
  ],
): (a: T) => a is TF1 | TF2 | TF3 | TF4 | TF5;
export function anyPass<T, TF1 extends T, TF2 extends T, TF3 extends T, TF4 extends T, TF5 extends T, TF6 extends T>(
  predicates: [
    (a: T) => a is TF1,
    (a: T) => a is TF2,
    (a: T) => a is TF3,
    (a: T) => a is TF4,
    (a: T) => a is TF5,
    (a: T) => a is TF6
  ],
): (a: T) => a is TF1 | TF2 | TF3 | TF4 | TF5 | TF6;
export function anyPass<F extends (...args: any[]) => boolean>(predicates: readonly F[]): F;


/**
 * ap applies a list of functions to a list of values.
 * 
 * Dispatches to the `ap` method of the first argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @example
 * ```typescript
 * R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 * R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 * 
 * // R.ap can also be used as S combinator
 * // when only two functions are passed
 * R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
 * ```
 */
export function ap<T, U>(fns: ReadonlyArray<(a: T) => U>): (vs: readonly T[]) => U[];
export function ap<R, A, B>(fn: (r: R, a: A) => B, fn1: (r: R) => A): (r: R) => B;
export function ap<T, U>(fns: ReadonlyArray<(a: T) => U>, vs: readonly T[]): U[];


/**
 * Returns a new list, composed of n-tuples of consecutive elements. If `n` is
 * greater than the length of the list, an empty list is returned.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link transduce}
 *
 * @example
 * ```typescript
 * R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
 * R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 * R.aperture(7, [1, 2, 3, 4, 5]); //=> []
 * ```
 */
export function aperture<N extends number>(n: N): <T>(list: readonly T[]) => Array<Tuple<T, N>> | [];
export function aperture<T>(__: Placeholder, list: readonly T[]): <N extends number>(n: N) => Array<Tuple<T, N>> | [];
export function aperture<N extends number, T>(n: N, list: readonly T[]): Array<Tuple<T, N>> | [];


/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * See also {@link prepend}
 *
 * @example
 * ```typescript
 * R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 * R.append('tests', []); //=> ['tests']
 * R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 * ```
 */
export function append<T>(el: T): (list: readonly T[]) => T[];
// append(__, list)(el)
export function append<T>(__: Placeholder, list: readonly T[]): (el: T) => T[];
// append(el, list)
export function append<T>(el: T, list: readonly T[]): T[];


/**
 * Applies function `fn` to the argument list `args`. This is useful for
 * creating a fixed-arity function from a variadic function. `fn` should be a
 * bound function if context is significant.
 *
 * See also {@link call}, {@link unapply}
 *
 * @example
 * ```typescript
 * const nums = [1, 2, 3, -99, 42, 6, 7];
 * R.apply(Math.max, nums); //=> 42
 * ```
 */
export function apply<F extends (...args: readonly any[]) => any>(fn: F): (args: Parameters<F>) => ReturnType<F>;
// apply(args, fn)
// overload Placeholder options with versions for 1-to-5 args for best constraining
export function apply<A extends readonly [any]>(__: Placeholder, args: A): <F extends (...args: A) => any>(fn: F) => ReturnType<F>;
export function apply<A extends readonly [any, any]>(__: Placeholder, args: A): <F extends (...args: A) => any>(fn: F) => ReturnType<F>;
export function apply<A extends readonly [any, any, any]>(__: Placeholder, args: A): <F extends (...args: A) => any>(fn: F) => ReturnType<F>;
export function apply<A extends readonly [any, any, any, any]>(__: Placeholder, args: A): <F extends (...args: A) => any>(fn: F) => ReturnType<F>;
export function apply<A extends readonly [any, any, any, any, any]>(__: Placeholder, args: A): <F extends (...args: A) => any>(fn: F) => ReturnType<F>;
export function apply<A extends readonly any[]>(__: Placeholder, args: A): <F extends (...args: A) => any>(fn: F) => ReturnType<F>;
// apply(args, fn)
export function apply<F extends (...args: readonly any[]) => any>(fn: F, args: Parameters<F>): ReturnType<F>;


/**
 * Given a spec object recursively mapping properties to functions, creates a
 * function producing an object of the same structure, by mapping each property
 * to the result of calling its associated function with the supplied arguments.
 *
 * See also {@link converge}, {@link juxt}
 *
 * @example
 * ```typescript
 * const getMetrics = R.applySpec({
 *   sum: R.add,
 *   nested: { mul: R.multiply }
 * });
 * getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 * ```
 */
export function applySpec<Obj extends Record<string, (...args: readonly any[]) => any>>(
  obj: Obj,
): (...args: Parameters<Obj[keyof Obj]>) => { [Key in keyof Obj]: ReturnType<Obj[Key]> };
export function applySpec<T>(obj: any): (...args: readonly any[]) => T;


/**
 * Takes a value and applies a function to it.
 * 
 * This function is also known as the `thrush` combinator.
 *
 * @example
 * ```typescript
 * const t42 = R.applyTo(42);
 * t42(R.identity); //=> 42
 * t42(R.add(1)); //=> 43
 * ```
 */
export function applyTo<T>(el: T): <U>(fn: (t: T) => U) => U;
export function applyTo<T, U>(el: T, fn: (t: T) => U): U;


/**
 * Makes an ascending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * See also {@link descend}
 *
 * @example
 * ```typescript
 * const byAge = R.ascend(R.prop('age'));
 * const people = [
 *   { name: 'Emma', age: 70 },
 *   { name: 'Peter', age: 78 },
 *   { name: 'Mikhail', age: 62 },
 * ];
 * const peopleByYoungestFirst = R.sort(byAge, people);
 *   //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]
 * ```
 */
export function ascend<T>(fn: (obj: T) => Ord): (a: T, b: T) => Ordering;
export function ascend<T>(fn: (obj: T) => Ord, a: T, b: T): Ordering;


/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * See also {@link dissoc}, {@link pick}
 *
 * @example
 * ```typescript
 * R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 * ```
 */
export function assoc<K extends PropertyKey>(prop: K): {
  // assoc(prop)(val)(obj)
  <T>(val: T): {
    <U>(obj: U): K extends keyof U ? U[K] extends T ? U : Record<K, T> & Omit<U, K> : U & Record<K, T>;
  }

  // assoc(prop)(__, obj)(val)
  <U>(__: Placeholder, obj: U): {
    <T>(val: T): K extends keyof U ? U[K] extends T ? U : Record<K, T> & Omit<U, K> : U & Record<K, T>;
  }

  // assoc(prop)(val, obj)
  <T, U>(val: T, obj: U): K extends keyof U ? U[K] extends T ? U : Record<K, T> & Omit<U, K> : U & Record<K, T>;
};

// assoc(__, val)
export function assoc<T>(__: Placeholder, val: T) : {
  // assoc(__, val)(prop)(obj)
  <K extends PropertyKey>(prop: K): {
    <U>(obj: U): K extends keyof U ? U[K] extends T ? U : Record<K, T> & Omit<U, K> : U & Record<K, T>;
  }

  // assoc(__, val)(__, obj)(prop)
  <U>(__2: Placeholder, obj: U): {
    <K extends PropertyKey>(prop: K): K extends keyof U ? U[K] extends T ? U : Record<K, T> & Omit<U, K> : U & Record<K, T>;
  };

  // assoc(__, val)(prop, obj)
  <K extends PropertyKey, U>(prop: K, obj: U): K extends keyof U ? U[K] extends T ? U : Record<K, T> & Omit<U, K> : U & Record<K, T>;
};

// assoc(prop, val)(obj)
export function assoc<T, K extends PropertyKey>(prop: K, val: T): {
  <U>(obj: U): U extends Record<K, any> ? U[K] extends T ? U : Record<K, T> & Omit<U, K> : U & Record<K, T>;
};

// assoc(__, __, obj)
export function assoc<U>(__: Placeholder, __2: Placeholder, obj: U): {
  // assoc(__, __, obj)(key)(val)
  <K extends PropertyKey>(key: K): {
    <T>(val: T): K extends keyof U ? U[K] extends T ? U : Record<K, T> & Omit<U, K> : U & Record<K, T>;
  }
  // assoc(__, __, obj)(__, value)(key)
  <T>(__: Placeholder, val: T): {
    <K extends PropertyKey>(key: K): K extends keyof U ? U[K] extends T ? U : Record<K, T> & Omit<U, K> : U & Record<K, T>;
  }
  // assoc(__, __, obj)(key, value)
  <K extends PropertyKey, T>(key: K, val: T): K extends keyof U ? U[K] extends T ? U : Record<K, T> & Omit<U, K> : U & Record<K, T>;
};

// assoc(__, val, obj)(prop)
export function assoc<T, U>(__: Placeholder, val: T, obj: U): <K extends PropertyKey>(prop: K) => K extends keyof U ? T extends U[K] ? U : Record<K, T> & Omit<U, K> : U & Record<K, T>;

// assoc(prop, __, obj)(val)
export function assoc<U, K extends PropertyKey>(prop: K, __: Placeholder, obj: U): <T>(val: T) => K extends keyof U ? U[K] extends T ? U : Record<K, T> & Omit<U, K> : U & Record<K, T>;

// assoc(prop, val, obj)
export function assoc<T, U, K extends PropertyKey>(prop: K, val: T, obj: U): K extends keyof U ? U[K] extends T ? U : Record<K, T> & Omit<U, K> : U & Record<K, T>;


/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * See also {@link dissocPath}
 *
 * @example
 * ```typescript
 * R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 * 
 * // Any missing or non-object keys in path will be overridden
 * R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 * ```
 */
export function assocPath<T, U>(path: Path): _.F.Curry<(a: T, b: U) => U>;
export function assocPath<T, U>(path: Path, val: T): (obj: U) => U;
export function assocPath<T, U>(__: Placeholder, val: T, obj: U): (path: Path) => U;
export function assocPath<T, U>(path: Path, __: Placeholder, obj: U): (val: T) => U;
export function assocPath<T, U>(path: Path, val: T, obj: U): U;


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 2 parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * See also {@link nAry}, {@link unary}
 *
 * @example
 * ```typescript
 * const takesThreeArgs = function(a, b, c) {
 *   return [a, b, c];
 * };
 * takesThreeArgs.length; //=> 3
 * takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
 * 
 * const takesTwoArgs = R.binary(takesThreeArgs);
 * takesTwoArgs.length; //=> 2
 * // Only 2 arguments are passed to the wrapped function
 * takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
 * ```
 */
export function binary<T extends (...arg: any) => any>(fn: T): (...arg: _.T.Take<Parameters<T>, 2>) => ReturnType<T>;


/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * See also {@link partial}
 *
 * @example
 * ```typescript
 * const log = R.bind(console.log, console);
 * R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 * // logs {a: 2}
 * ```
 */
export function bind<F extends (...args: readonly any[]) => any, T>(
  fn: F,
): (thisObj: T) => (...args: Parameters<F>) => ReturnType<F>;
export function bind<F extends (...args: readonly any[]) => any, T>(
  fn: F,
  thisObj: T,
): (...args: Parameters<F>) => ReturnType<F>;


/**
 * A function which calls the two provided functions and returns the `&&`
 * of the results.
 * It returns the result of the first function if it is false-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * false-y value.
 * 
 * In addition to functions, `R.both` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * See also {@link either}, {@link allPass}, {@link and}
 *
 * @example
 * ```typescript
 * const gt10 = R.gt(R.__, 10)
 * const lt20 = R.lt(R.__, 20)
 * const f = R.both(gt10, lt20);
 * f(15); //=> true
 * f(30); //=> false
 * 
 * R.both(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(false)
 * R.both([false, false, 'a'], [11]); //=> [false, false, 11]
 * ```
 */
export function both<T, RT1 extends T>(f: (a: T) => a is RT1): <RT2 extends T>(g: (a: T) => a is RT2) => (a: T) => a is RT1 & RT2;
export function both<Args extends any[]>(f: (...args: Args) => boolean): (g: (...args: Args) => boolean) => (...args: Args) => boolean;
// both(f, g) => (x: T) => boolean
export function both<T, RT1 extends T, RT2 extends T>(f: (a: T) => a is RT1, g: (a: T) => a is RT2): (a: T) => a is RT1 & RT2;
export function both<Args extends any[]>(f: (...args: Args) => boolean, g: (...args: Args) => boolean): (...args: Args) => boolean;


/**
 * Returns the result of calling its first argument with the remaining
 * arguments. This is occasionally useful as a converging function for
 * [`R.converge`](#converge): the first branch can produce a function while the
 * remaining branches produce values to be passed to that function as its
 * arguments.
 *
 * See also {@link apply}
 *
 * @example
 * ```typescript
 * R.call(R.add, 1, 2); //=> 3
 * 
 * const indentN = R.pipe(
 *   R.repeat(' '),
 *   R.join(''),
 *   R.replace(/^(?!$)/gm)
 * );
 * 
 * const format = R.converge(
 *   R.call,
 *   [
 *     R.pipe(R.prop('indent'), indentN),
 *     R.prop('value')
 *   ]
 * );
 * 
 * format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
 * ```
 */
export function call<T extends (...args: readonly any[]) => any>(fn: T, ...args: Parameters<T>): ReturnType<T>;


/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries.
 * 
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 * 
 * If second argument is a function, `chain(f, g)(x)` is equivalent to `f(g(x), x)`.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * @example
 * ```typescript
 * const duplicate = n => [n, n];
 * R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 * 
 * R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 * ```
 */
export function chain<A, B>(fn: (n: A) => readonly B[], list: readonly A[]): B[];
// chain(fn)(list)
export function chain<A, B>(fn: (n: A) => readonly B[]): (list: readonly A[]) => B[];

// chain(fn, monad)
export function chain<A, Ma extends { chain: (fn: (a: A) => Mb) => Mb }, Mb>(fn: (a: A) => Mb, monad: Ma): Mb;
// chain(fn)(monad)
export function chain<A, Ma extends { chain: (fn: (a: A) => Mb) => Mb }, Mb>(fn: (a: A) => Mb): (monad: Ma) => Mb;

// chain (f, g)(x)
export function chain<A, B, R>(aToMb: (a: A, r: R) => B, Ma: (r: R) => A): (r: R) => B;
// chain (f)(g)(x)
export function chain<A, B, R>(aToMb: (a: A, r: R) => B): (Ma: (r: R) => A) => (r: R) => B;

// TODO: types for transducer variation


/**
 * Restricts a number to be within a range.
 * 
 * Also works for other ordered types such as Strings and Dates.
 *
 * @example
 * ```typescript
 * R.clamp(1, 10, -5) // => 1
 * R.clamp(1, 10, 15) // => 10
 * R.clamp(1, 10, 4)  // => 4
 * ```
 */
export function clamp<T>(min: T): {
  (max: T): (value: T) => T;
  (max: T, value: T): T
};
export function clamp<T>(min: T, max: T): (value: T) => T;
export function clamp<T>(min: T, max: T, value: T): T;


/**
 * Creates a deep copy of the source that can be used in place of the source
 * object without retaining any references to it.
 * The source object may contain (nested) `Array`s and `Object`s,
 * `Number`s, `String`s, `Boolean`s and `Date`s.
 * `Function`s are assigned by reference rather than copied.
 * 
 * Dispatches to a `clone` method if present.
 * 
 * Note that if the source object has multiple nodes that share a reference,
 * the returned object will have the same structure, but the references will
 * be pointed to the location within the cloned value.
 *
 * @example
 * ```typescript
 * const objects = [{}, {}, {}];
 * const objectsClone = R.clone(objects);
 * objects === objectsClone; //=> false
 * objects[0] === objectsClone[0]; //=> false
 * ```
 */
export function clone<T>(value: readonly T[]): T[];
export function clone<T>(value: T): T;


/**
 * Splits a list into sub-lists, based on the result of calling a key-returning function on each element,
 * and grouping the results according to values returned.
 *
 * See also {@link groupBy}, {@link partition}
 *
 * @example
 * ```typescript
 * R.collectBy(R.prop('type'), [
 *   {type: 'breakfast', item: '☕️'},
 *   {type: 'lunch', item: '🌯'},
 *   {type: 'dinner', item: '🍝'},
 *   {type: 'breakfast', item: '🥐'},
 *   {type: 'lunch', item: '🍕'}
 * ]);
 * 
 * // [ [ {type: 'breakfast', item: '☕️'},
 * //     {type: 'breakfast', item: '🥐'} ],
 * //   [ {type: 'lunch', item: '🌯'},
 * //     {type: 'lunch', item: '🍕'} ],
 * //   [ {type: 'dinner', item: '🍝'} ] ]
 * ```
 */
export function collectBy<T, K extends PropertyKey>(keyFn: (value: T) => K): (list: readonly T[]) => T[][];
export function collectBy<T, K extends PropertyKey>(keyFn: (value: T) => K, list: readonly T[]): T[][];


/**
 * Makes a comparator function out of a function that reports whether the first
 * element is less than the second.
 *
 * @example
 * ```typescript
 * const byAge = R.comparator((a, b) => a.age < b.age);
 * const people = [
 *   { name: 'Emma', age: 70 },
 *   { name: 'Peter', age: 78 },
 *   { name: 'Mikhail', age: 62 },
 * ];
 * const peopleByIncreasingAge = R.sort(byAge, people);
 *   //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]
 * ```
 */
export function comparator<T>(pred: (a: T, b: T) => boolean): (x: T, y: T) => Ordering;


/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 * 
 * `R.complement` may be applied to any functor
 *
 * See also {@link not}
 *
 * @example
 * ```typescript
 * const isNotNil = R.complement(R.isNil);
 * R.isNil(null); //=> true
 * isNotNil(null); //=> false
 * R.isNil(7); //=> false
 * isNotNil(7); //=> true
 * ```
 */
export function complement<T, TFiltered extends T>(
  pred: (value: T) => value is TFiltered,
): (value: T) => value is Exclude<T, TFiltered>;
export function complement<TArgs extends any[]>(pred: (...args: TArgs) => unknown): (...args: TArgs) => boolean;


/**
 * Performs right-to-left function composition. The last argument may have
 * any arity; the remaining arguments must be unary.
 * 
 * **Note:** The result of compose is not automatically curried.
 *
 * See also {@link pipe}
 *
 * @example
 * ```typescript
 * const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 * const yellGreeting = R.compose(R.toUpper, classyGreeting);
 * yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 * 
 * R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 * ```
 */
export function compose<TArgs extends any[], R1, R2, R3, R4, R5, R6, R7, TResult>(
  ...func: [
        fnLast: (a: any) => TResult,
        ...func: Array<(a: any) => any>,
        f7: (a: R6) => R7,
        f6: (a: R5) => R6,
        f5: (a: R4) => R5,
        f4: (a: R3) => R4,
        f3: (a: R2) => R3,
        f2: (a: R1) => R2,
        f1: (...args: TArgs) => R1
  ]
): (...args: TArgs) => TResult;
// fallback overload if number of composed functions greater than 7
export function compose<TArgs extends any[], R1, R2, R3, R4, R5, R6, R7>(
  f7: (a: R6) => R7,
  f6: (a: R5) => R6,
  f5: (a: R4) => R5,
  f4: (a: R3) => R4,
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1,
): (...args: TArgs) => R7;
export function compose<TArgs extends any[], R1, R2, R3, R4, R5, R6, R7>(
  f7: (a: R6) => R7,
  f6: (a: R5) => R6,
  f5: (a: R4) => R5,
  f4: (a: R3) => R4,
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1,
): (...args: TArgs) => R7;
export function compose<TArgs extends any[], R1, R2, R3, R4, R5, R6>(
  f6: (a: R5) => R6,
  f5: (a: R4) => R5,
  f4: (a: R3) => R4,
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1,
): (...args: TArgs) => R6;
export function compose<TArgs extends any[], R1, R2, R3, R4, R5>(
  f5: (a: R4) => R5,
  f4: (a: R3) => R4,
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1,
): (...args: TArgs) => R5;
export function compose<TArgs extends any[], R1, R2, R3, R4>(
  f4: (a: R3) => R4,
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1,
): (...args: TArgs) => R4;
export function compose<TArgs extends any[], R1, R2, R3>(
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1,
): (...args: TArgs) => R3;
export function compose<TArgs extends any[], R1, R2>(
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1,
): (...args: TArgs) => R2;
export function compose<TArgs extends any[], R1>(f1: (...args: TArgs) => R1): (...args: TArgs) => R1;


/**
 * Performs right-to-left function composition using transforming function. The last function may have
 * any arity; the remaining functions must be unary. Unlike `compose`, functions are passed in an array.
 * 
 * **Note:** The result of composeWith is not automatically curried. Transforming function is not used
 * on the last argument.
 *
 * See also {@link compose}, {@link pipeWith}
 *
 * @example
 * ```typescript
 * const composeWhileNotNil = R.composeWith((f, res) => R.isNil(res) ? res : f(res));
 * 
 * composeWhileNotNil([R.inc, R.prop('age')])({age: 1}) //=> 2
 * composeWhileNotNil([R.inc, R.prop('age')])({}) //=> undefined
 * ```
 */
export function composeWith(
  transformer: (fn: (...args: any[]) => any, intermediatResult: any) => any,
): <TArgs extends any[], TResult>(
  fns: AtLeastOneFunctionsFlowFromRightToLeft<TArgs, TResult>,
) => (...args: TArgs) => TResult;
export function composeWith<TArgs extends any[], TResult>(
  transformer: (fn: (...args: any[]) => any, intermediatResult: any) => any,
  fns: AtLeastOneFunctionsFlowFromRightToLeft<TArgs, TResult>,
): (...args: TArgs) => TResult;


/**
 * Returns the result of concatenating the given lists or strings.
 * 
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 * 
 * Dispatches to the `concat` method of the first argument, if present.
 * Can also concatenate two members of a [fantasy-land
 * compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).
 *
 * @example
 * ```typescript
 * R.concat('ABC', 'DEF'); // 'ABCDEF'
 * R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 * R.concat([], []); //=> []
 * ```
 */
export function concat<S1 extends string>(s1: S1): <S2 extends string>(s2: S2) => string extends (S1 | S2) ? string : `${S1}${S2}`;
// concat(list)(list)
export function concat<T>(list1: readonly T[]): (list2: readonly T[]) => T[];
// concat(__, string)(string)
export function concat<S2 extends string>(__: Placeholder, s2: S2): <S1 extends string>(s1: S1) => string extends (S1 | S2) ? string : `${S1}${S2}`;
// concat(__, list)(list)
export function concat<T2>(__: Placeholder, list2: readonly T2[]): <T1>(list1: (readonly T2[] extends readonly T1[] ? readonly T1[] : never)) => T1[];
// concat(string, string)
export function concat<S1 extends string, S2 extends string>(s1: S1, s2: S2): string extends (S1 | S2) ? string : `${S1}${S2}`;
// concat(list, list)
// if you don't do 2 types here the single T will collapse list1 and list2 when you have tuples of the same type, which is incorrect behavior
export function concat<T1, T2 extends T1>(list1: readonly T1[], list2: readonly T2[]): T1[];


/**
 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
 * to `fn` are applied to each of the predicates in turn until one returns a
 * "truthy" value, at which point `fn` returns the result of applying its
 * arguments to the corresponding transformer. If none of the predicates
 * matches, `fn` returns undefined.
 * 
 * **Please note**: This is not a direct substitute for a `switch` statement.
 * Remember that both elements of every pair passed to `cond` are *functions*,
 * and `cond` returns a function.
 *
 * See also {@link ifElse}, {@link unless}, {@link when}
 *
 * @example
 * ```typescript
 * const fn = R.cond([
 *   [R.equals(0),   R.always('water freezes at 0°C')],
 *   [R.equals(100), R.always('water boils at 100°C')],
 *   [R.T,           temp => 'nothing special happens at ' + temp + '°C']
 * ]);
 * fn(0); //=> 'water freezes at 0°C'
 * fn(50); //=> 'nothing special happens at 50°C'
 * fn(100); //=> 'water boils at 100°C'
 * ```
 */
export function cond<T, TF1 extends T, R>(pairs: [CondPairTypeguard<T, TF1, R>]): (value: T) => R;
export function cond<T, TF1 extends T, TF2 extends T, R>(
  pairs: [CondPairTypeguard<T, TF1, R>, CondPairTypeguard<T, TF2, R>],
): (value: T) => R;
export function cond<T, TF1 extends T, TF2 extends T, TF3 extends T, R>(
  pairs: [CondPairTypeguard<T, TF1, R>, CondPairTypeguard<T, TF2, R>, CondPairTypeguard<T, TF3, R>],
): (value: T) => R;
export function cond<T, TF1 extends T, TF2 extends T, TF3 extends T, TF4 extends T, R>(
  pairs: [
    CondPairTypeguard<T, TF1, R>,
    CondPairTypeguard<T, TF2, R>,
    CondPairTypeguard<T, TF3, R>,
    CondPairTypeguard<T, TF4, R>
  ],
): (value: T) => R;
export function cond<T, TF1 extends T, TF2 extends T, TF3 extends T, TF4 extends T, TF5 extends T, R>(
  pairs: [
    CondPairTypeguard<T, TF1, R>,
    CondPairTypeguard<T, TF2, R>,
    CondPairTypeguard<T, TF3, R>,
    CondPairTypeguard<T, TF4, R>,
    CondPairTypeguard<T, TF5, R>
  ],
): (value: T) => R;
export function cond<T, TF1 extends T, TF2 extends T, TF3 extends T, TF4 extends T, TF5 extends T, TF6 extends T, R>(
  pairs: [
    CondPairTypeguard<T, TF1, R>,
    CondPairTypeguard<T, TF2, R>,
    CondPairTypeguard<T, TF3, R>,
    CondPairTypeguard<T, TF4, R>,
    CondPairTypeguard<T, TF5, R>,
    CondPairTypeguard<T, TF6, R>
  ],
): (value: T) => R;
export function cond<
  T,
  TF1 extends T,
  TF2 extends T,
  TF3 extends T,
  TF4 extends T,
  TF5 extends T,
  TF6 extends T,
  TF7 extends T,
  R
>(
  pairs: [
    CondPairTypeguard<T, TF1, R>,
    CondPairTypeguard<T, TF2, R>,
    CondPairTypeguard<T, TF3, R>,
    CondPairTypeguard<T, TF4, R>,
    CondPairTypeguard<T, TF5, R>,
    CondPairTypeguard<T, TF6, R>,
    CondPairTypeguard<T, TF7, R>
  ],
): (value: T) => R;
export function cond<
  T,
  TF1 extends T,
  TF2 extends T,
  TF3 extends T,
  TF4 extends T,
  TF5 extends T,
  TF6 extends T,
  TF7 extends T,
  TF8 extends T,
  R
>(
  pairs: [
    CondPairTypeguard<T, TF1, R>,
    CondPairTypeguard<T, TF2, R>,
    CondPairTypeguard<T, TF3, R>,
    CondPairTypeguard<T, TF4, R>,
    CondPairTypeguard<T, TF5, R>,
    CondPairTypeguard<T, TF6, R>,
    CondPairTypeguard<T, TF7, R>,
    CondPairTypeguard<T, TF8, R>
  ],
): (value: T) => R;
export function cond<
  T,
  TF1 extends T,
  TF2 extends T,
  TF3 extends T,
  TF4 extends T,
  TF5 extends T,
  TF6 extends T,
  TF7 extends T,
  TF8 extends T,
  TF9 extends T,
  R
>(
  pairs: [
    CondPairTypeguard<T, TF1, R>,
    CondPairTypeguard<T, TF2, R>,
    CondPairTypeguard<T, TF3, R>,
    CondPairTypeguard<T, TF4, R>,
    CondPairTypeguard<T, TF5, R>,
    CondPairTypeguard<T, TF6, R>,
    CondPairTypeguard<T, TF7, R>,
    CondPairTypeguard<T, TF8, R>,
    CondPairTypeguard<T, TF9, R>
  ],
): (value: T) => R;
export function cond<
  T,
  TF1 extends T,
  TF2 extends T,
  TF3 extends T,
  TF4 extends T,
  TF5 extends T,
  TF6 extends T,
  TF7 extends T,
  TF8 extends T,
  TF9 extends T,
  TF10 extends T,
  R
>(
  pairs: [
    CondPairTypeguard<T, TF1, R>,
    CondPairTypeguard<T, TF2, R>,
    CondPairTypeguard<T, TF3, R>,
    CondPairTypeguard<T, TF4, R>,
    CondPairTypeguard<T, TF5, R>,
    CondPairTypeguard<T, TF6, R>,
    CondPairTypeguard<T, TF7, R>,
    CondPairTypeguard<T, TF8, R>,
    CondPairTypeguard<T, TF9, R>,
    CondPairTypeguard<T, TF10, R>
  ],
): (value: T) => R;
export function cond<T extends any[], R>(pairs: Array<CondPair<T, R>>): (...args: T) => R;


/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type.
 *
 * See also {@link invoker}
 *
 * @example
 * ```typescript
 * // Constructor function
 * function Animal(kind) {
 *   this.kind = kind;
 * };
 * Animal.prototype.sighting = function() {
 *   return "It's a " + this.kind + "!";
 * }
 * 
 * const AnimalConstructor = R.construct(Animal)
 * 
 * // Notice we no longer need the 'new' keyword:
 * AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
 * 
 * const animalTypes = ["Lion", "Tiger", "Bear"];
 * const animalSighting = R.invoker(0, 'sighting');
 * const sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
 * R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
 * ```
 */
export function construct<A extends any[], T>(
  constructor: { new (...a: A): T } | ((...a: A) => T),
): _.F.Curry<(...a: A) => T>;


/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type. The arity of the function
 * returned is specified to allow using variadic constructor functions.
 *
 * @example
 * ```typescript
 * // Variadic Constructor function
 * function Salad() {
 *   this.ingredients = arguments;
 * }
 * 
 * Salad.prototype.recipe = function() {
 *   const instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);
 *   return R.join('\n', instructions);
 * };
 * 
 * const ThreeLayerSalad = R.constructN(3, Salad);
 * 
 * // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
 * const salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');
 * 
 * console.log(salad.recipe());
 * // Add a dollop of Mayonnaise
 * // Add a dollop of Potato Chips
 * // Add a dollop of Ketchup
 * ```
 */
export function constructN<A extends any[], T, N extends number>(
  n: N,
  constructor: { new (...a: A): T } | ((...a: A) => T),
): _.F.Curry<(...a: mergeArrWithLeft<Tuple<any, N>, A>) => T>;


/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. The arity of the new function is the same as the arity of
 * the longest branching function. When invoked, this new function is applied
 * to some arguments, and each branching function is applied to those same
 * arguments. The results of each branching function are passed as arguments
 * to the converging function to produce the return value.
 *
 * See also {@link useWith}
 *
 * @example
 * ```typescript
 * const average = R.converge(R.divide, [R.sum, R.length])
 * average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 * 
 * const strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
 * strangeConcat("Yodel") //=> "YODELyodel"
 * ```
 */
export function converge<
  TResult,
  FunctionsList extends ReadonlyArray<Fn> &
  IfFunctionsArgumentsDoNotOverlap<_Fns, 'Functions arguments types must overlap'>,
  _Fns extends ReadonlyArray<Fn> = FunctionsList
>(
  converging: (...args: ReturnTypesOfFns<FunctionsList>) => TResult,
  branches: FunctionsList,
): _.F.Curry<(...args: LargestArgumentsList<FunctionsList>) => TResult>;
export function converge<
  CArgs extends ReadonlyArray<any>,
  TResult,
  FunctionsList extends readonly [
    ...{
      [Index in keyof CArgs]: (...args: ReadonlyArray<any>) => CArgs[Index];
    }
  ] &
  IfFunctionsArgumentsDoNotOverlap<_Fns, 'Functions arguments types must overlap'>,
  _Fns extends ReadonlyArray<Fn> = FunctionsList
>(
  converging: (...args: CArgs) => TResult,
  branches: FunctionsList,
): _.F.Curry<(...args: LargestArgumentsList<FunctionsList>) => TResult>;


/**
 * Returns the number of items in a given `list` matching the predicate `f`
 *
 * @example
 * ```typescript
 * const even = x => x % 2 == 0;
 * 
 * R.count(even, [1, 2, 3, 4, 5]); // => 2
 * R.map(R.count(even), [[1, 1, 1], [2, 3, 4, 5], [6]]); // => [0, 2, 1]
 * ```
 */
export function count<T>(fn: (a: T) => boolean): (list: readonly T[]) => number;
export function count<T>(fn: (a: T) => boolean, list: readonly T[]): number;


/**
 * Counts the elements of a list according to how many match each value of a
 * key generated by the supplied function. Returns an object mapping the keys
 * produced by `fn` to the number of occurrences in the list. Note that all
 * keys are coerced to strings because of how JavaScript objects work.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * @example
 * ```typescript
 * const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 * R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
 * 
 * const letters = ['a', 'b', 'A', 'a', 'B', 'c'];
 * R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
 * ```
 */
export function countBy<T>(fn: (a: T) => string | number): (list: readonly T[]) => { [index: string]: number };
export function countBy<T>(fn: (a: T) => string | number, list: readonly T[]): { [index: string]: number };


/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 * 
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 * 
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 * 
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 * 
 * Please note that default parameters don't count towards a [function arity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
 * and therefore `curry` won't work well with those.
 *
 * See also {@link curryN}, {@link partial}
 *
 * @example
 * ```typescript
 * const addFourNumbers = (a, b, c, d) => a + b + c + d;
 * const curriedAddFourNumbers = R.curry(addFourNumbers);
 * const f = curriedAddFourNumbers(1, 2);
 * const g = f(3);
 * g(4); //=> 10
 * 
 * // R.curry not working well with default parameters
 * const h = R.curry((a, b, c = 2) => a + b + c);
 * h(1)(2)(7); //=> Error! (`3` is not a function!)
 * ```
 */
export function curry<F extends (...args: any) => any>(f: F): _.F.Curry<F>;


/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 * 
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 * 
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 * 
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * See also {@link curry}
 *
 * @example
 * ```typescript
 * const sumArgs = (...args) => R.sum(args);
 * 
 * const curriedAddFourNumbers = R.curryN(4, sumArgs);
 * const f = curriedAddFourNumbers(1, 2);
 * const g = f(3);
 * g(4); //=> 10
 * ```
 */
export function curryN<N extends number>(
  length: N,
): <F extends (...args: any) => any>(
  fn: F,
) => _.F.Curry<(...a: _.T.Take<Parameters<F>, N>) => ReturnType<F>>;
export function curryN<N extends number, F extends (...args: any) => any>(
  length: N,
  fn: F,
): _.F.Curry<(...a: _.T.Take<Parameters<F>, N>) => ReturnType<F>>;


/**
 * Decrements its argument.
 *
 * See also {@link inc}
 *
 * @example
 * ```typescript
 * R.dec(42); //=> 41
 * ```
 */
export function dec(n: number): number;


/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @example
 * ```typescript
 * const defaultTo42 = R.defaultTo(42);
 * 
 * defaultTo42(null);  //=> 42
 * defaultTo42(undefined);  //=> 42
 * defaultTo42(false);  //=> false
 * defaultTo42('Ramda');  //=> 'Ramda'
 * // parseInt('string') results in NaN
 * defaultTo42(parseInt('string')); //=> 42
 * ```
 */
export function defaultTo<Fallback>(a: Fallback): <Value>(b: Value) => DefaultTo<Fallback, Value>;
export function defaultTo<Value>(__: Placeholder, b: Value): <Fallback>(a: Fallback) => DefaultTo<Fallback, Value>;
export function defaultTo<Fallback, Value>(a: Fallback, b: Value): DefaultTo<Fallback, Value>;


/**
 * Makes a descending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * See also {@link ascend}
 *
 * @example
 * ```typescript
 * const byAge = R.descend(R.prop('age'));
 * const people = [
 *   { name: 'Emma', age: 70 },
 *   { name: 'Peter', age: 78 },
 *   { name: 'Mikhail', age: 62 },
 * ];
 * const peopleByOldestFirst = R.sort(byAge, people);
 *   //=> [{ name: 'Peter', age: 78 }, { name: 'Emma', age: 70 }, { name: 'Mikhail', age: 62 }]
 * ```
 */
export function descend<T>(fn: (obj: T) => Ord): (a: T, b: T) => Ordering;
export function descend<T>(fn: (obj: T) => Ord, a: T, b: T): Ordering;


/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared in terms of
 * value equality, not reference equality.
 *
 * See also {@link differenceWith}, {@link symmetricDifference}, {@link symmetricDifferenceWith}, {@link without}
 *
 * @example
 * ```typescript
 * R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 * R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 * R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
 * ```
 */
export function difference<T>(list1: readonly T[]): (list2: readonly T[]) => T[];
export function difference<T>(list1: readonly T[], list2: readonly T[]): T[];


/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * See also {@link difference}, {@link symmetricDifference}, {@link symmetricDifferenceWith}
 *
 * @example
 * ```typescript
 * const cmp = (x, y) => x.a === y.a;
 * const l1 = [{a: 1}, {a: 2}, {a: 3}];
 * const l2 = [{a: 3}, {a: 4}];
 * R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
 * 
 * R.differenceWith(R.equals, [1, 2, 3, 3, 3], []); //=> [1, 2, 3]
 * R.differenceWith(R.equals, [1, 2, 3, 3, 3], [1]); //=> [2, 3]
 * ```
 */
export function differenceWith<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
): (list1: readonly T1[], list2: readonly T2[]) => T1[];
export function differenceWith<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
  list1: readonly T1[],
): (list2: readonly T2[]) => T1[];
export function differenceWith<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
  list1: readonly T1[],
  list2: readonly T2[],
): T1[];


/**
 * Returns a new object that does not contain a `prop` property.
 *
 * See also {@link assoc}, {@link omit}
 *
 * @example
 * ```typescript
 * R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
 * ```
 */
export function dissoc<K extends string | number>(prop: K): <T extends object>(obj: T) => Omit<T, K>;
export function dissoc<T extends object, K extends keyof T>(prop: K, obj: T): Omit<T, K>;


/**
 * Makes a shallow clone of an object. Note that this copies and flattens
 * prototype properties onto the new object as well. All non-primitive
 * properties are copied by reference.
 */
export function dissocPath<T>(path: Path): (obj: any) => T;
export function dissocPath<T>(path: Path, obj: any): T;


/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * See also {@link multiply}
 *
 * @example
 * ```typescript
 * R.divide(71, 100); //=> 0.71
 * 
 * const half = R.divide(R.__, 2);
 * half(42); //=> 21
 * 
 * const reciprocal = R.divide(1);
 * reciprocal(4);   //=> 0.25
 * ```
 */
export function divide(a: number): (b: number) => number;
export function divide(__: Placeholder, b: number): (a: number) => number;
export function divide(a: number, b: number): number;


/**
 * Returns all but the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `drop` method).
 * 
 * Dispatches to the `drop` method of the second argument, if present.
 *
 * See also {@link take}, {@link transduce}, {@link dropLast}, {@link dropWhile}
 *
 * @example
 * ```typescript
 * R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 * R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 * R.drop(3, ['foo', 'bar', 'baz']); //=> []
 * R.drop(4, ['foo', 'bar', 'baz']); //=> []
 * R.drop(3, 'ramda');               //=> 'da'
 * ```
 */
export function drop<T>(n: number): {
  (xs: string): string;
  (xs: readonly T[]): T[];
};
export function drop(n: number, xs: string): string;
export function drop<T>(n: number, xs: readonly T[]): T[];


/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link takeLast}, {@link drop}, {@link dropWhile}, {@link dropLastWhile}
 *
 * @example
 * ```typescript
 * R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 * R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 * R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 * R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 * R.dropLast(3, 'ramda');               //=> 'ra'
 * ```
 */
export function dropLast<T>(n: number): {
  (xs: string): string;
  (xs: readonly T[]): T[];
};
export function dropLast<T>(n: number, xs: readonly T[]): T[];
export function dropLast(n: number, xs: string): string;


/**
 * Returns a new list excluding all the tailing elements of a given list which
 * satisfy the supplied predicate function. It passes each value from the right
 * to the supplied predicate function, skipping elements until the predicate
 * function returns a `falsy` value. The predicate function is applied to one argument:
 * *(value)*.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link takeLastWhile}, {@link addIndex}, {@link drop}, {@link dropWhile}
 *
 * @example
 * ```typescript
 * const lteThree = x => x <= 3;
 * 
 * R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
 * 
 * R.dropLastWhile(x => x !== 'd' , 'Ramda'); //=> 'Ramd'
 * ```
 */
export function dropLastWhile<T>(fn: (a: T) => boolean): (list: readonly T[]) => T[];
export function dropLastWhile<T>(fn: (a: T) => boolean, list: readonly T[]): T[];


/**
 * Returns a new list without any consecutively repeating elements.
 * [`R.equals`](#equals) is used to determine equality.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link transduce}
 *
 * @example
 * ```typescript
 * R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
 * ```
 */
export function dropRepeats<T>(list: readonly T[]): T[];


/**
 * Returns a new list without any consecutively repeating elements,
 * based upon the value returned by applying the supplied function to
 * each list element. [`R.equals`](#equals) is used to determine equality.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link transduce}
 *
 * @example
 * ```typescript
 * R.dropRepeatsBy(Math.abs, [1, -1, -1, 2, 3, -4, 4, 2, 2]); //=> [1, 2, 3, -4, 2]
 * ```
 */
export function dropRepeatsBy<T, U>(fn: (a: T) => U): (list: readonly T[]) => T[];
export function dropRepeatsBy<T, U>(fn: (a: T) => U, list: readonly T[]): T[];



/**
 * Returns a new list without any consecutively repeating elements. Equality is
 * determined by applying the supplied predicate to each pair of consecutive elements. The
 * first element in a series of equal elements will be preserved.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link transduce}
 *
 * @example
 * ```typescript
 * const l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
 * R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
 * ```
 */
export function dropRepeatsWith<T>(predicate: (left: T, right: T) => boolean): (list: readonly T[]) => T[];
export function dropRepeatsWith<T>(predicate: (left: T, right: T) => boolean, list: readonly T[]): T[];


/**
 * Returns a new list excluding the leading elements of a given list which
 * satisfy the supplied predicate function. It passes each value to the supplied
 * predicate function, skipping elements while the predicate function returns
 * `true`. The predicate function is applied to one argument: *(value)*.
 * 
 * Dispatches to the `dropWhile` method of the second argument, if present.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link takeWhile}, {@link transduce}, {@link addIndex}
 *
 * @example
 * ```typescript
 * const lteTwo = x => x <= 2;
 * 
 * R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
 * 
 * R.dropWhile(x => x !== 'd' , 'Ramda'); //=> 'da'
 * ```
 */
export function dropWhile<T>(fn: (a: T) => boolean): (list: readonly T[]) => T[];
export function dropWhile<T>(fn: (a: T) => boolean, list: readonly T[]): T[];


/**
 * A function wrapping calls to the two functions in an `||` operation,
 * returning the result of the first function if it is truth-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * truth-y value.
 * 
 * In addition to functions, `R.either` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * See also {@link both}, {@link anyPass}, {@link or}
 *
 * @example
 * ```typescript
 * const gt10 = x => x > 10;
 * const even = x => x % 2 === 0;
 * const f = R.either(gt10, even);
 * f(101); //=> true
 * f(8); //=> true
 * 
 * R.either(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(55)
 * R.either([false, false, 'a'], [11]) // => [11, 11, "a"]
 * ```
 */
export function either<Fn extends (...args: any[]) => boolean>(f: Fn): (g: Fn) => Fn;
export function either<Fn extends (...args: any[]) => boolean>(f: Fn, g: Fn): Fn;


/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`),
 * TypedArray (`Uint8Array []`, `Float32Array []`, etc), and Arguments. Other
 * types are supported if they define `<Type>.empty`,
 * `<Type>.prototype.empty` or implement the
 * [FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).
 * 
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @example
 * ```typescript
 * R.empty(Just(42));               //=> Nothing()
 * R.empty([1, 2, 3]);              //=> []
 * R.empty('unicorns');             //=> ''
 * R.empty({x: 1, y: 2});           //=> {}
 * R.empty(Uint8Array.from('123')); //=> Uint8Array []
 * ```
 */
export function empty<T>(x: T): T;


/**
 * Checks if a list ends with the provided sublist.
 * 
 * Similarly, checks if a string ends with the provided substring.
 *
 * See also {@link startsWith}
 *
 * @example
 * ```typescript
 * R.endsWith('c', 'abc')                //=> true
 * R.endsWith('b', 'abc')                //=> false
 * R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
 * R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
 * ```
 */
export function endsWith(substr: string): (str: string) => boolean;
export function endsWith<T>(subList: readonly T[]): (list: readonly T[]) => boolean;
export function endsWith(substr: string, str: string): boolean;
export function endsWith<T>(subList: readonly T[], list: readonly T[]): boolean;


/**
 * Takes a function and two values in its domain and returns `true` if the
 * values map to the same value in the codomain; `false` otherwise.
 *
 * @example
 * ```typescript
 * R.eqBy(Math.abs, 5, -5); //=> true
 * ```
 */
export function eqBy<T>(fn: (a: T) => unknown): {
  (a: T): (b: T) => boolean;
  (a: T, b: T): boolean;
};
export function eqBy<T>(fn: (a: T) => unknown, a: T): (b: T) => boolean;
export function eqBy<T>(fn: (a: T) => unknown, a: T, b: T): boolean;


/**
 * Reports whether two objects have the same value, in [`R.equals`](#equals)
 * terms, for the specified property. Useful as a curried predicate.
 *
 * @example
 * ```typescript
 * const o1 = { a: 1, b: 2, c: 3, d: 4 };
 * const o2 = { a: 10, b: 20, c: 3, d: 40 };
 * R.eqProps('a', o1, o2); //=> false
 * R.eqProps('c', o1, o2); //=> true
 * ```
 */
export function eqProps<P extends string>(prop: P): <T, U>(obj1: Record<P, T>, obj2: Record<P, U>) => boolean;
export function eqProps<T>(prop: string, obj1: T): <U>(obj2: U) => boolean;
export function eqProps<T, U>(prop: string, obj1: T, obj2: U): boolean;


/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 * 
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @example
 * ```typescript
 * R.equals(1, 1); //=> true
 * R.equals(1, '1'); //=> false
 * R.equals([1, 2, 3], [1, 2, 3]); //=> true
 * 
 * const a = {}; a.v = a;
 * const b = {}; b.v = b;
 * R.equals(a, b); //=> true
 * ```
 */
export function equals<T>(a: T): (b: T) => boolean;
export function equals<T>(__: Placeholder, b: T): (a: T) => boolean;
export function equals<T>(a: T, b: T): boolean;


/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 * 
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @example
 * ```typescript
 * const tomato = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 * const transformations = {
 *   firstName: R.trim,
 *   lastName: R.trim, // Will not get invoked.
 *   data: {elapsed: R.add(1), remaining: R.add(-1)}
 * };
 * R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 * ```
 */
export function evolve<E extends Evolver>(transformations: E): <V extends Evolvable<E>>(obj: V) => Evolve<V, E>;
export function evolve<E extends Evolver, V extends Evolvable<E>>(transformations: E, obj: V): Evolve<V, E>;


/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * See also {@link T}
 *
 * @example
 * ```typescript
 * R.F(); //=> false
 * ```
 */
export function F(...args: unknown[]): false;


/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 * 
 * Dispatches to the `filter` method of the second argument, if present.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link reject}, {@link transduce}, {@link addIndex}
 *
 * @example
 * ```typescript
 * const isEven = n => n % 2 === 0;
 * 
 * R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 * 
 * R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 * ```
 */
export function filter<A, P extends A>(
  pred: (val: A) => val is P,
): {
  // if we put `Record<string, A>` first, it will actually pic up `A[]` as well
  // so it needs to go first
  <B extends A>(list: readonly B[]): P[];
  <B extends A>(dict: Record<string, B>): Record<string, P>;
  // but we also want `A[]` to be the default when doing `pipe(filter(fn))`, so it also needs to be last
  <B extends A>(list: readonly B[]): P[];
};

// filter(() => boolean)
export function filter<T>(
  pred: (value: T) => boolean,
): <P extends T, C extends readonly P[] | Record<string, P>>(collection: C) => C;

// filter(() => narrow, list) - readonly T[] falls into Record<string T> for some reason, so list needs to come first
export function filter<T, P extends T>(pred: (val: T) => val is P, list: readonly T[]): P[];
// filter(() => narrow, dist)
export function filter<T, P extends T>(pred: (val: T) => val is P, dict: Record<string, T>): Record<string, P>;
// filter(() => boolean, list | dist) - this case is not expected to be picked up directly
// it is here so operations like `flip(filter)` or `addIndex(filter)` get retained correctly type-wise (or best they can)
export function filter<T, C extends readonly T[] | Record<string, T>>(pred: (value: T) => boolean, collection: C): C;


/**
 * Returns the first element of the list which matches the predicate, or
 * `undefined` if no element matches.
 * 
 * Dispatches to the `find` method of the second argument, if present.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link transduce}
 *
 * @example
 * ```typescript
 * const xs = [{a: 1}, {a: 2}, {a: 3}];
 * R.find(R.propEq(2, 'a'))(xs); //=> {a: 2}
 * R.find(R.propEq(4, 'a'))(xs); //=> undefined
 * ```
 */
export function find<T, P extends T>(pred: (val: T) => val is P): (list: readonly T[]) => P | undefined;
export function find<T>(pred: (val: T) => boolean): (list: readonly T[]) => T | undefined;
export function find<T, P extends T>(pred: (val: T) => val is P, list: readonly T[]): P | undefined;
export function find<T>(pred: (val: T) => boolean, list: readonly T[]): T | undefined;


/**
 * Returns the index of the first element of the list which matches the
 * predicate, or `-1` if no element matches.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link transduce}, {@link indexOf}
 *
 * @example
 * ```typescript
 * const xs = [{a: 1}, {a: 2}, {a: 3}];
 * R.findIndex(R.propEq(2, 'a'))(xs); //=> 1
 * R.findIndex(R.propEq(4, 'a'))(xs); //=> -1
 * ```
 */
export function findIndex<T>(fn: (a: T) => boolean): (list: readonly T[]) => number;
export function findIndex<T>(fn: (a: T) => boolean, list: readonly T[]): number;


/**
 * Returns the last element of the list which matches the predicate, or
 * `undefined` if no element matches.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link transduce}
 *
 * @example
 * ```typescript
 * const xs = [{a: 1, b: 0}, {a:1, b: 1}];
 * R.findLast(R.propEq(1, 'a'))(xs); //=> {a: 1, b: 1}
 * R.findLast(R.propEq(4, 'a'))(xs); //=> undefined
 * ```
 */
export function findLast<T, P extends T>(pred: (val: T) => val is P): (list: readonly T[]) => P | undefined;
export function findLast<T>(pred: (val: T) => boolean): (list: readonly T[]) => T | undefined;
export function findLast<T, P extends T>(pred: (val: T) => val is P, list: readonly T[]): P | undefined;
export function findLast<T>(pred: (val: T) => boolean, list: readonly T[]): T | undefined;


/**
 * Returns the index of the last element of the list which matches the
 * predicate, or `-1` if no element matches.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link transduce}, {@link lastIndexOf}
 *
 * @example
 * ```typescript
 * const xs = [{a: 1, b: 0}, {a:1, b: 1}];
 * R.findLastIndex(R.propEq(1, 'a'))(xs); //=> 1
 * R.findLastIndex(R.propEq(4, 'a'))(xs); //=> -1
 * ```
 */
export function findLastIndex<T>(fn: (a: T) => boolean): (list: readonly T[]) => number;
export function findLastIndex<T>(fn: (a: T) => boolean, list: readonly T[]): number;


/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * See also {@link unnest}
 *
 * @example
 * ```typescript
 * R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 * //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 * ```
 */
export function flatten<T extends readonly any[]>(list: T): _.T.Flatten<T>;


/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @example
 * ```typescript
 * const mergeThree = (a, b, c) => [].concat(a, b, c);
 * 
 * mergeThree(1, 2, 3); //=> [1, 2, 3]
 * 
 * R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * ```
 */
export function flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): {
  (arg1: U): (arg0: T) => TResult;
  (arg1: U, arg0: T): TResult;
};
export function flip<F extends (...args: any) => any, P extends _.F.Parameters<F>>(
  fn: F,
): _.F.Curry<(...args: _.T.Merge<[P[1], P[0]], P>) => _.F.Return<F>>;


/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 * 
 * `fn` receives one argument: *(value)*.
 * 
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 * 
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
 * the original array. In some libraries this function is named `each`.
 * 
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * See also {@link addIndex}
 *
 * @example
 * ```typescript
 * const printXPlusFive = x => console.log(x + 5);
 * R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 * // logs 6
 * // logs 7
 * // logs 8
 * ```
 */
export function forEach<T>(fn: (x: T) => void): <U extends readonly T[]>(list: U) => U;
export function forEach<U extends readonly any[] = readonly any[]>(__: Placeholder, list: U): (fn: (x: U extends readonly (infer T)[] ? T : never) => void) => U;
export function forEach<T, U extends readonly T[] = readonly T[]>(fn: (x: T) => void, list: U): U;


/**
 * Iterate over an input `object`, calling a provided function `fn` for each
 * key and value in the object.
 * 
 * `fn` receives three argument: *(value, key, obj)*.
 *
 * @example
 * ```typescript
 * const printKeyConcatValue = (value, key) => console.log(key + ':' + value);
 * R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
 * // logs x:1
 * // logs y:2
 * ```
 */
export function forEachObjIndexed<T>(fn: (value: T[keyof T], key: keyof T, obj: T) => void): (obj: T) => T;
export function forEachObjIndexed<T>(fn: (value: T[keyof T], key: keyof T, obj: T) => void, obj: T): T;


/**
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 *
 * See also {@link toPairs}, {@link pair}
 *
 * @example
 * ```typescript
 * R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 * ```
 */
export function fromPairs<K extends PropertyKey, V>(
  pairs: readonly [K, V][]
): { [P in K]: V };


/**
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a key-returning function on each element, and grouping the
 * results according to values returned.
 * 
 * Dispatches to the `groupBy` method of the second argument, if present.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link reduceBy}, {@link transduce}, {@link indexBy}, {@link collectBy}
 *
 * @example
 * ```typescript
 * const byGrade = R.groupBy(function(student) {
 *   const score = student.score;
 *   return score < 65 ? 'F' :
 *          score < 70 ? 'D' :
 *          score < 80 ? 'C' :
 *          score < 90 ? 'B' : 'A';
 * });
 * const students = [{name: 'Abby', score: 84},
 *                 {name: 'Eddy', score: 58},
 *                 // ...
 *                 {name: 'Jack', score: 69}];
 * byGrade(students);
 * // {
 * //   'A': [{name: 'Dianne', score: 99}],
 * //   'B': [{name: 'Abby', score: 84}]
 * //   // ...,
 * //   'F': [{name: 'Eddy', score: 58}]
 * // }
 * ```
 */
export function groupBy<T, K extends string = string>(fn: (a: T) => K): (list: readonly T[]) => Partial<Record<K, T[]>>;
export function groupBy<T>(__: Placeholder, list: readonly T[]): <K extends string = string>(fn: (a: T) => K) => Partial<Record<K, T[]>>;
export function groupBy<T, K extends string = string>(fn: (a: T) => K, list: readonly T[]): Partial<Record<K, T[]>>;


/**
 * Takes a list and returns a list of lists where each sublist's elements are
 * all satisfied pairwise comparison according to the provided function.
 * Only adjacent elements are passed to the comparison function.
 *
 * @example
 * ```typescript
 * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
 * 
 * R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]
 * 
 * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
 * 
 * const isVowel = R.test(/^[aeiou]$/i);
 * R.groupWith(R.eqBy(isVowel), 'aestiou')
 * //=> ['ae', 'st', 'iou']
 * ```
 */
export function groupWith<T>(fn: (a: T, b: T) => boolean): {
  (list: string): string[];
  (list: readonly T[]): T[][];
};
export function groupWith<T>(fn: (a: T, b: T) => boolean, list: string): string[];
export function groupWith<T>(fn: (a: T, b: T) => boolean, list: readonly T[]): T[][];


/**
 * Returns `true` if the first argument is greater than the second; `false`
 * otherwise.
 *
 * See also {@link lt}
 *
 * @example
 * ```typescript
 * R.gt(2, 1); //=> true
 * R.gt(2, 2); //=> false
 * R.gt(2, 3); //=> false
 * R.gt('a', 'z'); //=> false
 * R.gt('z', 'a'); //=> true
 * ```
 */
export function gt<T extends Ord>(a: T): (b: WidenLiterals<T>) => boolean;
export function gt<T extends Ord>(__: Placeholder, b: T): (a: WidenLiterals<T>) => boolean;
export function gt<T extends Ord>(a: T, b: T): boolean;


/**
 * Returns `true` if the first argument is greater than or equal to the second;
 * `false` otherwise.
 *
 * See also {@link lte}
 *
 * @example
 * ```typescript
 * R.gte(2, 1); //=> true
 * R.gte(2, 2); //=> true
 * R.gte(2, 3); //=> false
 * R.gte('a', 'z'); //=> false
 * R.gte('z', 'a'); //=> true
 * ```
 */
export function gte<T extends Ord>(a: T): (b: WidenLiterals<T>) => boolean;
export function gte<T extends Ord>(__: Placeholder, b: T): (a: WidenLiterals<T>) => boolean;
export function gte<T extends Ord>(a: T, b: T): boolean;


/**
 * Returns whether or not an object has an own property with the specified name
 *
 * @example
 * ```typescript
 * const hasName = R.has('name');
 * hasName({name: 'alice'});   //=> true
 * hasName({name: 'bob'});     //=> true
 * hasName({});                //=> false
 * 
 * const point = {x: 0, y: 0};
 * const pointHas = R.has(R.__, point);
 * pointHas('x');  //=> true
 * pointHas('y');  //=> true
 * pointHas('z');  //=> false
 * ```
 */
export function has<K extends PropertyKey>(prop: K): (obj: unknown) => obj is ObjectHavingSome<K>;
export function has(__: Placeholder, obj: unknown): <P extends PropertyKey>(s: P) => boolean;
export function has<K extends PropertyKey>(prop: K, obj: unknown): obj is ObjectHavingSome<K>;



/**
 * Returns whether or not an object or its prototype chain has a property with
 * the specified name
 *
 * @example
 * ```typescript
 * function Rectangle(width, height) {
 *   this.width = width;
 *   this.height = height;
 * }
 * Rectangle.prototype.area = function() {
 *   return this.width * this.height;
 * };
 * 
 * const square = new Rectangle(2, 2);
 * R.hasIn('width', square);  //=> true
 * R.hasIn('area', square);  //=> true
 * ```
 */
export function hasIn(s: string): <T>(obj: T) => boolean;
export function hasIn<T>(s: string, obj: T): boolean;


/**
 * Returns whether or not a path exists in an object. Only the object's
 * own properties are checked.
 *
 * See also {@link has}
 *
 * @example
 * ```typescript
 * R.hasPath(['a', 'b'], {a: {b: 2}});         // => true
 * R.hasPath(['a', 'b'], {a: {b: undefined}}); // => true
 * R.hasPath(['a', 'b'], {a: {c: 2}});         // => false
 * R.hasPath(['a', 'b'], {});                  // => false
 * ```
 */
export function hasPath(list: readonly string[]): <T>(obj: T) => boolean;
export function hasPath<T>(list: readonly string[], obj: T): boolean;


/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * See also {@link tail}, {@link init}, {@link last}
 *
 * @example
 * ```typescript
 * R.head(['fi', 'fo', 'fum']); //=> 'fi'
 * R.head([]); //=> undefined
 * 
 * R.head('abc'); //=> 'a'
 * R.head(''); //=> ''
 * ```
 */
export function head(str: string): string;
// empty tuple - purposefully `never`. `head` should never work on tuple type with no length
export function head(list: readonly []): never;
// non-empty tuple
export function head<T1, TRest>(list: readonly [T1, ...TRest[]]): T1;
// arrays, because these could be empty, they return `T | undefined`
// this is no different than the tuple form since `T[]` can be empty at runtime
export function head<T>(list: readonly T[]): T | undefined;


/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 * 
 * Note this is merely a curried version of ES6 `Object.is`.
 * 
 * `identical` does not support the `__` placeholder.
 *
 * @example
 * ```typescript
 * const o = {};
 * R.identical(o, o); //=> true
 * R.identical(1, 1); //=> true
 * R.identical(1, '1'); //=> false
 * R.identical([], []); //=> false
 * R.identical(0, -0); //=> false
 * R.identical(NaN, NaN); //=> true
 * ```
 */
export function identical<T>(a: T): (b: T) => boolean;
export function identical<T>(a: T, b: T): boolean;


/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @example
 * ```typescript
 * R.identity(1); //=> 1
 * 
 * const obj = {};
 * R.identity(obj) === obj; //=> true
 * ```
 */
export function identity<T>(a: T): T;


/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 * 
 * Note that `ifElse` takes its arity from the longest of the three functions passed to it.
 *
 * See also {@link unless}, {@link when}, {@link cond}
 *
 * @example
 * ```typescript
 * const incCount = R.ifElse(
 *   R.has('count'),
 *   R.over(R.lensProp('count'), R.inc),
 *   R.assoc('count', 1)
 * );
 * incCount({ count: 1 }); //=> { count: 2 }
 * incCount({});           //=> { count: 1 }
 * ```
 */
export function ifElse<T, TF extends T, TOnTrueResult, TOnFalseResult>(
  pred: (a: T) => a is TF,
  onTrue: (a: TF) => TOnTrueResult,
  onFalse: (a: Exclude<T, TF>) => TOnFalseResult,
): (a: T) => TOnTrueResult | TOnFalseResult;
export function ifElse<TArgs extends readonly any[], TOnTrueResult, TOnFalseResult>(
  fn: (...args: TArgs) => boolean,
  onTrue: (...args: TArgs) => TOnTrueResult,
  onFalse: (...args: TArgs) => TOnFalseResult,
): (...args: TArgs) => TOnTrueResult | TOnFalseResult;


/**
 * Increments its argument.
 *
 * See also {@link dec}
 *
 * @example
 * ```typescript
 * R.inc(42); //=> 43
 * ```
 */
export function inc(n: number): number;


/**
 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
 * terms, to at least one element of the given list; `false` otherwise.
 * Also works with strings.
 *
 * See also {@link any}
 *
 * @example
 * ```typescript
 * R.includes(3, [1, 2, 3]); //=> true
 * R.includes(4, [1, 2, 3]); //=> false
 * R.includes({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 * R.includes([42], [[42]]); //=> true
 * R.includes('ba', 'banana'); //=>true
 * ```
 */
export function includes(s: string): (list: readonly string[] | string) => boolean;
export function includes<T>(target: T): (list: readonly T[]) => boolean;

export function includes(__: Placeholder, list: string): (s: string) => boolean;
export function includes<T>(__: Placeholder, list: readonly T[]): (target: T) => boolean;

export function includes(s: string, list: string): boolean;
export function includes<T>(target: T, list: readonly T[]): boolean;


/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link groupBy}
 *
 * @example
 * ```typescript
 * const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 * R.indexBy(R.prop('id'), list);
 * //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 * ```
 */
export function indexBy<T, K extends string | number = string>(
  fn: (a: T) => K,
): (list: readonly T[]) => { [key in K]: T };
export function indexBy<T, K extends string | number | undefined = string>(
  fn: (a: T) => K | undefined,
): (list: readonly T[]) => { [key in NonNullable<K>]?: T };
export function indexBy<T, K extends string | number = string>(fn: (a: T) => K, list: readonly T[]): { [key in K]: T };
export function indexBy<T, K extends string | number | undefined = string>(
  fn: (a: T) => K,
  list: readonly T[],
): { [key in NonNullable<K>]?: T };


/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * See also {@link lastIndexOf}, {@link findIndex}
 *
 * @example
 * ```typescript
 * R.indexOf(3, [1,2,3,4]); //=> 2
 * R.indexOf(10, [1,2,3,4]); //=> -1
 * ```
 */
export function indexOf(target: string): (list: readonly string[] | string) => number;
export function indexOf<T>(target: T): (list: readonly T[]) => number;
export function indexOf(target: string, list: readonly string[] | string): number;
export function indexOf<T>(target: T, list: readonly T[]): number;


/**
 * Returns all but the last element of the given list or string.
 *
 * See also {@link last}, {@link head}, {@link tail}
 *
 * @example
 * ```typescript
 * R.init([1, 2, 3]);  //=> [1, 2]
 * R.init([1, 2]);     //=> [1]
 * R.init([1]);        //=> []
 * R.init([]);         //=> []
 * 
 * R.init('abc');  //=> 'ab'
 * R.init('ab');   //=> 'a'
 * R.init('a');    //=> ''
 * R.init('');     //=> ''
 * ```
 */
export function init(list: string): string;
export function init<T>(list: readonly T[]): T[];


/**
 * Takes a predicate `pred`, a list `xs`, and a list `ys`, and returns a list
 * `xs'` comprising each of the elements of `xs` which is equal to one or more
 * elements of `ys` according to `pred`.
 * 
 * `pred` must be a binary function expecting an element from each list.
 * 
 * `xs`, `ys`, and `xs'` are treated as sets, semantically, so ordering should
 * not be significant, but since `xs'` is ordered the implementation guarantees
 * that its values are in the same order as they appear in `xs`. Duplicates are
 * not removed, so `xs'` may contain duplicates if `xs` contains duplicates.
 *
 * See also {@link intersection}
 *
 * @example
 * ```typescript
 * R.innerJoin(
 *   (record, id) => record.id === id,
 *   [{id: 824, name: 'Richie Furay'},
 *    {id: 956, name: 'Dewey Martin'},
 *    {id: 313, name: 'Bruce Palmer'},
 *    {id: 456, name: 'Stephen Stills'},
 *    {id: 177, name: 'Neil Young'}],
 *   [177, 456, 999]
 * );
 * //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 * ```
 */
export function innerJoin<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
): (list1: readonly T1[], list2: readonly T2[]) => T1[];
export function innerJoin<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
  list1: readonly T1[],
): (list2: readonly T2[]) => T1[];
export function innerJoin<T1, T2>(pred: (a: T1, b: T2) => boolean, list1: readonly T1[], list2: readonly T2[]): T1[];


/**
 * Inserts the supplied element into the list, at the specified `index`. _Note that
 * 
 * this is not destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @example
 * ```typescript
 * R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
 * ```
 */
export function insert(index: number): <T>(elt: T, list: readonly T[]) => T[];
export function insert<T>(index: number, elt: T): (list: readonly T[]) => T[];
export function insert<T>(index: number, elt: T, list: readonly T[]): T[];


/**
 * Inserts the sub-list into the list, at the specified `index`. _Note that this is not
 * destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @example
 * ```typescript
 * R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
 * ```
 */
export function insertAll(index: number): <T>(elts: readonly T[], list: readonly T[]) => T[];
export function insertAll<T>(index: number, elts: readonly T[]): (list: readonly T[]) => T[];
export function insertAll<T>(index: number, elts: readonly T[], list: readonly T[]): T[];


/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 * See also {@link innerJoin}
 *
 * @example
 * ```typescript
 * R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 * ```
 */
export function intersection<T>(list1: readonly T[]): (list2: readonly T[]) => T[];
export function intersection<T>(list1: readonly T[], list2: readonly T[]): T[];


/**
 * Creates a new list with the separator interposed between elements.
 * 
 * Dispatches to the `intersperse` method of the second argument, if present.
 *
 * @example
 * ```typescript
 * R.intersperse('a', ['b', 'n', 'n', 's']); //=> ['b', 'a', 'n', 'a', 'n', 'a', 's']
 * ```
 */
export function intersperse<T>(separator: T): (list: readonly T[]) => T[];
export function intersperse<T>(separator: T, list: readonly T[]): T[];


/**
 * Transforms the items of the list with the transducer and appends the
 * transformed items to the accumulator using an appropriate iterator function
 * based on the accumulator type.
 * 
 * The accumulator can be an array, string, object or a transformer. Iterated
 * items will be appended to arrays and concatenated to strings. Objects will
 * be merged directly or 2-item arrays will be merged as key, value pairs.
 * 
 * The accumulator can also be a transformer object that provides a 2-arity
 * reducing iterator function, step, 0-arity initial value function, init, and
 * 1-arity result extraction function result. The step function is used as the
 * iterator function in reduce. The result function is used to convert the
 * final accumulator into the return type and in most cases is R.identity. The
 * init function is used to provide the initial accumulator.
 * 
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the
 * transducer.
 *
 * See also {@link transduce}
 *
 * @example
 * ```typescript
 * const numbers = [1, 2, 3, 4];
 * const transducer = R.compose(R.map(R.add(1)), R.take(2));
 * 
 * R.into([], transducer, numbers); //=> [2, 3]
 * 
 * const intoArray = R.into([]);
 * intoArray(transducer, numbers); //=> [2, 3]
 * ```
 */
export function into(acc: any): <T>(xf: (...a: readonly any[]) => any, list: readonly T[]) => T[];
export function into<T>(acc: any, xf: (...a: readonly any[]) => any, list: readonly T[]): T[];
export function into<T, R>(acc: any, xf: (...a: readonly any[]) => R[], list: readonly T[]): R[];
export function into(acc: any, xf: (...a: readonly any[]) => any): <T>(list: readonly T[]) => T[];


/**
 * Same as [`R.invertObj`](#invertObj), however this accounts for objects with
 * duplicate values by putting the values into an array.
 *
 * See also {@link invertObj}
 *
 * @example
 * ```typescript
 * const raceResultsByFirstName = {
 *   first: 'alice',
 *   second: 'jake',
 *   third: 'alice',
 * };
 * R.invert(raceResultsByFirstName);
 * //=> { 'alice': ['first', 'third'], 'jake':['second'] }
 * ```
 */
export function invert<T>(obj: T): { [index: string]: string[] };


/**
 * Returns a new object with the keys of the given object as values, and the
 * values of the given object, which are coerced to strings, as keys. Note
 * that the last key found is preferred when handling the same value.
 *
 * See also {@link invert}
 *
 * @example
 * ```typescript
 * const raceResults = {
 *   first: 'alice',
 *   second: 'jake'
 * };
 * R.invertObj(raceResults);
 * //=> { 'alice': 'first', 'jake':'second' }
 * 
 * // Alternatively:
 * const raceResults = ['alice', 'jake'];
 * R.invertObj(raceResults);
 * //=> { 'alice': '0', 'jake':'1' }
 * ```
 */
export function invertObj(obj: { [index: string]: string } | { [index: number]: string }): { [index: string]: string };


/**
 * Given an `arity` (Number) and a `name` (String) the `invoker` function
 * returns a curried function that takes `arity` arguments and a `context`
 * object. It will "invoke" the `name`'d function (a method) on the `context`
 * object.
 *
 * See also {@link construct}
 *
 * @example
 * ```typescript
 * // A function with no arguments
 * const asJson = invoker(0, "json")
 * // Just like calling .then((response) => response.json())
 * fetch("http://example.com/index.json").then(asJson)
 * 
 * // A function with one argument
 * const sliceFrom = invoker(1, 'slice');
 * sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 * 
 * // A function with two arguments
 * const sliceFrom6 = invoker(2, 'slice')(6);
 * sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 * 
 * // NOTE: You can't simply pass some of the arguments to the initial invoker function.
 * const firstCreditCardSection = invoker(2, "slice", 0, 4)
 * firstCreditCardSection("4242 4242 4242 4242") // => Function<...>
 * 
 * // Since invoker returns a curried function, you may partially apply it to create the function you need.
 * const firstCreditCardSection = invoker(2, "slice")(0, 4)
 * firstCreditCardSection("4242 4242 4242 4242") // => "4242"
 * ```
 */
export function invoker(arity: number, method: string): (...a: readonly any[]) => any;


/**
 * See if an object (i.e. `val`) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 * If `val` was created using `Object.create`, `R.is(Object, val) === true`.
 *
 * @example
 * ```typescript
 * R.is(Object, {}); //=> true
 * R.is(Number, 1); //=> true
 * R.is(Object, 1); //=> false
 * R.is(String, 's'); //=> true
 * R.is(String, new String('')); //=> true
 * R.is(Object, new String('')); //=> true
 * R.is(Object, 's'); //=> false
 * R.is(Number, {}); //=> false
 * ```
 */
export function is<C extends (...args: any[]) => any>(ctor: C): (val: any) => val is ReturnType<C>;
export function is<C extends new (...args: any[]) => any>(ctor: C): (val: any) => val is InstanceType<C>;
export function is<C extends (...args: any[]) => any>(ctor: C, val: any): val is ReturnType<C>;
export function is<C extends new (...args: any[]) => any>(ctor: C, val: any): val is InstanceType<C>;


/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * See also {@link empty}
 *
 * @example
 * ```typescript
 * R.isEmpty([1, 2, 3]);           //=> false
 * R.isEmpty([]);                  //=> true
 * R.isEmpty('');                  //=> true
 * R.isEmpty(null);                //=> false
 * R.isEmpty({});                  //=> true
 * R.isEmpty({length: 0});         //=> false
 * R.isEmpty(Uint8Array.from('')); //=> true
 * ```
 */
export function isEmpty(value: any): boolean;


/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @example
 * ```typescript
 * R.isNil(null); //=> true
 * R.isNil(undefined); //=> true
 * R.isNil(0); //=> false
 * R.isNil([]); //=> false
 * ```
 */
export function isNil<T>(value: T): value is ((null | undefined) & T);


/**
 * Checks if the input value is not `null` and not `undefined`.
 *
 * @example
 * ```typescript
 * R.isNotNil(null); //=> false
 * R.isNotNil(undefined); //=> false
 * R.isNotNil(0); //=> true
 * R.isNotNil([]); //=> true
 * ```
 */
export function isNotNil<T>(value: T): value is NonNullable<T>;


/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * See also {@link split}
 *
 * @example
 * ```typescript
 * const spacer = R.join(' ');
 * spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 * R.join('|', [1, 2, 3]);    //=> '1|2|3'
 * ```
 */
export function join(x: string): (xs: readonly any[]) => string;
export function join(x: string, xs: readonly any[]): string;


/**
 * juxt applies a list of functions to a list of values.
 *
 * See also {@link applySpec}
 *
 * @example
 * ```typescript
 * const getRange = R.juxt([Math.min, Math.max]);
 * getRange(3, 4, 9, -3); //=> [-3, 9]
 * ```
 */
export function juxt<A extends any[], R1>(fns: [(...a: A) => R1]): (...a: A) => [R1];
export function juxt<A extends any[], R1, R2>(fns: [(...a: A) => R1, (...a: A) => R2]): (...a: A) => [R1, R2];
export function juxt<A extends any[], R1, R2, R3>(
  fns: [(...a: A) => R1, (...a: A) => R2, (...a: A) => R3],
): (...a: A) => [R1, R2, R3];
export function juxt<A extends any[], R1, R2, R3, R4>(
  fns: [(...a: A) => R1, (...a: A) => R2, (...a: A) => R3, (...a: A) => R4],
): (...a: A) => [R1, R2, R3, R4];
export function juxt<A extends any[], R1, R2, R3, R4, R5>(
  fns: [(...a: A) => R1, (...a: A) => R2, (...a: A) => R3, (...a: A) => R4, (...a: A) => R5],
): (...a: A) => [R1, R2, R3, R4, R5];
export function juxt<A extends any[], U>(fns: Array<(...args: A) => U>): (...args: A) => U[];


/**
 * #__PURE__
 */
export function keys<T extends object>(x: T): Array<keyof T>;


/**
 * Returns a list containing the names of all the properties of the supplied
 * object, including prototype properties.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * See also {@link keys}, {@link valuesIn}
 *
 * @example
 * ```typescript
 * const F = function() { this.x = 'X'; };
 * F.prototype.y = 'Y';
 * const f = new F();
 * R.keysIn(f); //=> ['x', 'y']
 * ```
 */
export function keysIn<T>(obj: T): string[];


/**
 * Returns the last element of the given list or string.
 *
 * See also {@link init}, {@link head}, {@link tail}
 *
 * @example
 * ```typescript
 * R.last(['fi', 'fo', 'fum']); //=> 'fum'
 * R.last([]); //=> undefined
 * 
 * R.last('abc'); //=> 'c'
 * R.last(''); //=> ''
 * ```
 */
export function last(str: string): string;
export function last(list: readonly []): undefined;
export function last<T extends any>(list: readonly T[]): T | undefined;


/**
 * Returns the position of the last occurrence of an item in an array, or -1 if
 * the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * See also {@link indexOf}, {@link findLastIndex}
 *
 * @example
 * ```typescript
 * R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
 * R.lastIndexOf(10, [1,2,3,4]); //=> -1
 * ```
 */
export function lastIndexOf(target: string): (list: readonly string[] | string) => number;
export function lastIndexOf<T>(target: T): (list: readonly T[]) => number;
export function lastIndexOf(target: string, list: readonly string[] | string): number;
export function lastIndexOf<T>(target: T, list: readonly T[]): number;


/**
 * Returns the number of elements in the array by returning `list.length`.
 *
 * @example
 * ```typescript
 * R.length([]); //=> 0
 * R.length([1, 2, 3]); //=> 3
 * ```
 */
export function length<T extends { length: number }>(list: T): number;


/**
 * Returns a lens for the given getter and setter functions. The getter "gets"
 * the value of the focus; the setter "sets" the value of the focus. The setter
 * should not mutate the data structure.
 *
 * See also {@link view}, {@link set}, {@link over}, {@link lensIndex}, {@link lensProp}
 *
 * @example
 * ```typescript
 * const xLens = R.lens(R.prop('x'), R.assoc('x'));
 * 
 * R.view(xLens, {x: 1, y: 2});            //=> 1
 * R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 * R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 * ```
 */
export function lens<S, A>(getter: (s: S) => A, setter: (a: A, s: S) => S): Lens<S, A>;


/**
 * Returns a lens whose focus is the specified index.
 *
 * See also {@link view}, {@link set}, {@link over}, {@link nth}
 *
 * @example
 * ```typescript
 * const headLens = R.lensIndex(0);
 * 
 * R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
 * R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
 * R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
 * ```
 */
export function lensIndex<A>(n: number): Lens<A[], A>;
export function lensIndex<A extends any[], N extends number>(n: N): Lens<A, A[N]>;


/**
 * Returns a lens whose focus is the specified path.
 *
 * See also {@link view}, {@link set}, {@link over}
 *
 * @example
 * ```typescript
 * const xHeadYLens = R.lensPath(['x', 0, 'y']);
 * 
 * R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 * //=> 2
 * R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 * //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
 * R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 * //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
 * ```
 */
export function lensPath<S, K0 extends keyof S = keyof S>(path: [K0]): Lens<S, S[K0]>;
export function lensPath<S, K0 extends keyof S = keyof S, K1 extends keyof S[K0] = keyof S[K0]>(
  path: [K0, K1],
): Lens<S, S[K0][K1]>;
export function lensPath<
  S,
  K0 extends keyof S = keyof S,
  K1 extends keyof S[K0] = keyof S[K0],
  K2 extends keyof S[K0][K1] = keyof S[K0][K1]
>(path: [K0, K1, K2]): Lens<S, S[K0][K1][K2]>;
export function lensPath<
  S,
  K0 extends keyof S = keyof S,
  K1 extends keyof S[K0] = keyof S[K0],
  K2 extends keyof S[K0][K1] = keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2] = keyof S[K0][K1][K2]
>(path: [K0, K1, K2, K3]): Lens<S, S[K0][K1][K2][K3]>;
export function lensPath<
  S,
  K0 extends keyof S = keyof S,
  K1 extends keyof S[K0] = keyof S[K0],
  K2 extends keyof S[K0][K1] = keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2] = keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3] = keyof S[K0][K1][K2][K3]
>(path: [K0, K1, K2, K3, K4]): Lens<S, S[K0][K1][K2][K3][K4]>;
export function lensPath<
  S,
  K0 extends keyof S = keyof S,
  K1 extends keyof S[K0] = keyof S[K0],
  K2 extends keyof S[K0][K1] = keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2] = keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3] = keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4] = keyof S[K0][K1][K2][K3][K4]
>(path: [K0, K1, K2, K3, K4, K5]): Lens<S, S[K0][K1][K2][K3][K4][K5]>;
export function lensPath<S = any, A = any>(path: Path): Lens<S, A>;


/**
 * Returns a lens whose focus is the specified property.
 *
 * See also {@link view}, {@link set}, {@link over}
 *
 * @example
 * ```typescript
 * const xLens = R.lensProp('x');
 * 
 * R.view(xLens, {x: 1, y: 2});            //=> 1
 * R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 * R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 * ```
 */
export function lensProp<S, K extends keyof S = keyof S>(prop: K): Lens<S, S[K]>;


/**
 * "lifts" a function of arity >= 1 so that it may "map over" a list, Function or other
 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * See also {@link liftN}
 *
 * @example
 * ```typescript
 * const madd3 = R.lift((a, b, c) => a + b + c);
 * 
 * madd3([100, 200], [30, 40], [5, 6, 7]); //=> [135, 136, 137, 145, 146, 147, 235, 236, 237, 245, 246, 247]
 * 
 * const madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 * 
 * madd5([10, 20], [1], [2, 3], [4], [100, 200]); //=> [117, 217, 118, 218, 127, 227, 128, 228]
 * ```
 */
export function lift<F extends (...args: readonly any[]) => any>(
  fn: F,
): {
  (...args: ToTupleOfArray<Parameters<F>>): Array<ReturnType<F>>;
  <R>(...args: ToTupleOfFunction<R, Parameters<F>>): (arg: R) => ReturnType<F>;
};


/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * See also {@link lift}, {@link ap}
 *
 * @example
 * ```typescript
 * const madd3 = R.liftN(3, (...args) => R.sum(args));
 * madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 * ```
 */
export function liftN<N extends number, F extends (...args: readonly any[]) => any>(
  n: N,
  fn: F,
): {
  (...args: Take<N, ToTupleOfArray<Parameters<F>>>): Array<ReturnType<F>>;
  <R>(...args: Take<N, ToTupleOfFunction<R, Parameters<F>>>): (arg: R) => ReturnType<F>;
};


/**
 * Returns `true` if the first argument is less than the second; `false`
 * otherwise.
 *
 * See also {@link gt}
 *
 * @example
 * ```typescript
 * R.lt(2, 1); //=> false
 * R.lt(2, 2); //=> false
 * R.lt(2, 3); //=> true
 * R.lt('a', 'z'); //=> true
 * R.lt('z', 'a'); //=> false
 * ```
 */
export function lt<T extends Ord>(a: T): (b: WidenLiterals<T>) => boolean;
export function lt<T extends Ord>(__: Placeholder, b: T): (a: WidenLiterals<T>) => boolean;
export function lt<T extends Ord>(a: T, b: T): boolean;


/**
 * Returns `true` if the first argument is less than or equal to the second;
 * `false` otherwise.
 *
 * See also {@link gte}
 *
 * @example
 * ```typescript
 * R.lte(2, 1); //=> false
 * R.lte(2, 2); //=> true
 * R.lte(2, 3); //=> true
 * R.lte('a', 'z'); //=> true
 * R.lte('z', 'a'); //=> false
 * ```
 */
export function lte<T extends Ord>(a: T): (b: WidenLiterals<T>) => boolean;
export function lte<T extends Ord>(__: Placeholder, b: T): (a: WidenLiterals<T>) => boolean;
export function lte<T extends Ord>(a: T, b: T): boolean;


/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 * 
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 * 
 * Dispatches to the `map` method of the second argument, if present.
 * 
 * Acts as a transducer if a transformer is given in list position.
 * 
 * Also treats functions as functors and will compose them together.
 *
 * See also {@link transduce}, {@link addIndex}, {@link pluck}, {@link project}
 *
 * @example
 * ```typescript
 * const double = x => x * 2;
 * 
 * R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 * 
 * R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * ```
 */
export function map<A, B>(fn: (x: A) => B): {
  // first and last def are the same and are here on purpose
  // the list variant needs to come before the FunctorMap ones, because `T[]` is a `FunctorMap<T>`
  (list: readonly A[]): B[];
  (functor: FunctorFantasyLand<A>): FunctorFantasyLand<B>;
  (functor: FunctorMap<A>): FunctorMap<B>;
  <U extends Record<PropertyKey, A>>(dict: U): Record<keyof U, B>;
  // it also needs to be here when you pass map as an argument to a function, eg `compose(map(fn))`
  (list: readonly A[]): B[];
};

// map(__, list)
export function map<A>(__: Placeholder, list: readonly A[]): <B>(fn: (x: A) => B) => B[];
export function map<A>(__: Placeholder, obj: FunctorFantasyLand<A>): <B>(fn: (a: A) => B) => FunctorFantasyLand<B>;
export function map<A>(__: Placeholder, obj: FunctorMap<A>): <B>(fn: (a: A) => B) => FunctorMap<B>;
export function map<U extends object>(__: Placeholder, dict: U): <B>(fn: (x: ValueOfUnion<B>) => B) => Record<keyof U, B>;
// map(fn, list)
// first and last def are the same and are here on purpose
// the list variant needs to come before the FunctorMap ones, because `T[]` is a `FunctorMap<T>`
export function map<A, B>(fn: (x: A) => B, list: readonly A[]): B[];
export function map<A, B>(fn: (x: A) => B, obj: FunctorFantasyLand<A>): FunctorFantasyLand<B>;
export function map<A, B>(fn: (x: A) => B, obj: FunctorMap<A>): FunctorMap<B>;
export function map<U extends object, B>(fn: (x: ValueOfUnion<U>) => B, dict: U): Record<keyof U, B>;
// it also needs to be here when you pass map as an argument to a function, eg `flip(map)`
export function map<A, B>(fn: (x: A) => B, list: readonly A[]): B[];


/**
 * The `mapAccum` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from left to right, and returning a final value of this
 * accumulator together with the new list.
 * 
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 *
 * See also {@link scan}, {@link addIndex}, {@link mapAccumRight}
 *
 * @example
 * ```typescript
 * const digits = ['1', '2', '3', '4'];
 * const appender = (a, b) => [a + b, a + b];
 * 
 * R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
 * ```
 */
export function mapAccum<T, U, TResult>(
  fn: (acc: U, value: T) => [U, TResult],
): (acc: U, list: readonly T[]) => [U, TResult[]];
export function mapAccum<T, U, TResult>(
  fn: (acc: U, value: T) => [U, TResult],
  acc: U,
): (list: readonly T[]) => [U, TResult[]];
export function mapAccum<T, U, TResult>(
  fn: (acc: U, value: T) => [U, TResult],
  acc: U,
  list: readonly T[],
): [U, TResult[]];


/**
 * The `mapAccumRight` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from right to left, and returning a final value of this
 * accumulator together with the new list.
 * 
 * Similar to [`mapAccum`](#mapAccum), except moves through the input list from
 * the right to the left.
 * 
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 *
 * See also {@link addIndex}, {@link mapAccum}
 *
 * @example
 * ```typescript
 * const digits = ['1', '2', '3', '4'];
 * const appender = (a, b) => [b + a, b + a];
 * 
 * R.mapAccumRight(appender, 5, digits); //=> ['12345', ['12345', '2345', '345', '45']]
 * ```
 */
export function mapAccumRight<T, U, TResult>(
  fn: (acc: U, value: T) => [U, TResult],
): (acc: U, list: readonly T[]) => [U, TResult[]];
export function mapAccumRight<T, U, TResult>(
  fn: (acc: U, value: T) => [U, TResult],
  acc: U,
): (list: readonly T[]) => [U, TResult[]];
export function mapAccumRight<T, U, TResult>(
  fn: (acc: U, value: T) => [U, TResult],
  acc: U,
  list: readonly T[],
): [U, TResult[]];


/**
 * An Object-specific version of [`map`](#map). The function is applied to three
 * arguments: *(value, key, obj)*. If only the value is significant, use
 * [`map`](#map) instead.
 *
 * See also {@link map}
 *
 * @example
 * ```typescript
 * const xyz = { x: 1, y: 2, z: 3 };
 * const prependKeyAndDouble = (num, key, obj) => key + (num * 2);
 * 
 * R.mapObjIndexed(prependKeyAndDouble, xyz); //=> { x: 'x2', y: 'y4', z: 'z6' }
 * ```
 */
export function mapObjIndexed<T, TResult, TKey extends string>(
  fn: (value: T, key: TKey, obj?: Record<TKey, T>) => TResult,
): (obj: Record<TKey, T>) => Record<TKey, TResult>;
export function mapObjIndexed<T, TResult, TKey extends string>(
  fn: (value: T, key: TKey, obj?: PartialRecord<TKey, T>) => TResult,
): (obj: Record<TKey, T>) => PartialRecord<TKey, TResult>;
export function mapObjIndexed<T, TResult, TKey extends string>(
  fn: (value: T, key: TKey, obj?: Record<TKey, T>) => TResult,
  obj: Record<TKey, T>,
): Record<TKey, TResult>;
export function mapObjIndexed<T, TResult, TKey extends string>(
  fn: (value: T, key: TKey, obj?: Record<TKey, T>) => TResult,
  obj: PartialRecord<TKey, T>,
): PartialRecord<TKey, TResult>;
export function mapObjIndexed<T, TResult>(
  fn: (
    value: T,
    key: string,
    obj?: {
      [key: string]: T;
    },
  ) => TResult,
  obj: {
    [key: string]: T;
  },
): {
  [key: string]: TResult;
};


/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * which returns `null` when there are no matches.
 *
 * See also {@link test}
 *
 * @example
 * ```typescript
 * R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 * R.match(/a/, 'b'); //=> []
 * R.match(/a/, null); //=> TypeError: null does not have a method named "match"
 * ```
 */
export function match(regexp: RegExp): (str: string) => RegExpMatchArray;
export function match(__: Placeholder, str: string): (regexp: RegExp) => RegExpMatchArray;
export function match(regexp: RegExp, str: string): RegExpMatchArray;


/**
 * `mathMod` behaves like the modulo operator should mathematically, unlike the
 * `%` operator (and by extension, [`R.modulo`](#modulo)). So while
 * `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`. `mathMod` requires Integer
 * arguments, and returns NaN when the modulus is zero or negative.
 *
 * See also {@link modulo}
 *
 * @example
 * ```typescript
 * R.mathMod(-17, 5);  //=> 3
 * R.mathMod(17, 5);   //=> 2
 * R.mathMod(17, -5);  //=> NaN
 * R.mathMod(17, 0);   //=> NaN
 * R.mathMod(17.2, 5); //=> NaN
 * R.mathMod(17, 5.3); //=> NaN
 * 
 * const clock = R.mathMod(R.__, 12);
 * clock(15); //=> 3
 * clock(24); //=> 0
 * 
 * const seventeenMod = R.mathMod(17);
 * seventeenMod(3);  //=> 2
 * seventeenMod(4);  //=> 1
 * seventeenMod(10); //=> 7
 * ```
 */
export function mathMod(a: number): (b: number) => number;
export function mathMod(__: Placeholder, b: number): (a: number) => number;
export function mathMod(a: number, b: number): number;


/**
 * Returns the larger of its two arguments.
 *
 * See also {@link maxBy}, {@link min}
 *
 * @example
 * ```typescript
 * R.max(789, 123); //=> 789
 * R.max('a', 'b'); //=> 'b'
 * ```
 */
export function max<T extends Ord>(a: T): (b: T) => T;
export function max<T extends Ord>(a: T, b: T): T;


/**
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
 *
 * See also {@link max}, {@link minBy}
 *
 * @example
 * ```typescript
 * //  square :: Number -> Number
 * const square = n => n * n;
 * 
 * R.maxBy(square, -3, 2); //=> -3
 * 
 * R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 * R.reduce(R.maxBy(square), 0, []); //=> 0
 * ```
 */
export function maxBy<T>(fn: (a: T) => Ord): {
  // maxBy(fn)(a)(b)
  (a: T): (b: T) => T;
  // maxBy(fn)(a, b)
  (a: T, b: T): T;
};
// maxBy(__, a)
export function maxBy<T>(__: Placeholder, a: T): {
  // maxBy(__, a)(fn)(b)
  (fn: (a: T) => Ord): (b: T) => T;
  // maxBy(__, a)(__, b)(fn)
  (__: Placeholder, b: T): (fn: (a: T) => Ord) => T;
  // maxBy(__, a)(fn, b)
  (fn: (a: T) => Ord, b: T): T;
};
// maxBy(fn, a)(b)
export function maxBy<T>(fn: (a: T) => Ord, a: T): (b: T) => T;
// maxBy(__, a, b)(fn)
export function maxBy<T>(__: Placeholder, a: T, b: T): (fn: (a: T) => Ord) => T;
// maxBy(fn, a, b)
export function maxBy<T>(fn: (a: T) => Ord, a: T, b: T): T;


/**
 * Returns the mean of the given list of numbers.
 *
 * See also {@link median}
 *
 * @example
 * ```typescript
 * R.mean([2, 7, 9]); //=> 6
 * R.mean([]); //=> NaN
 * ```
 */
export function mean(list: readonly number[]): number;


/**
 * Returns the median of the given list of numbers.
 *
 * See also {@link mean}
 *
 * @example
 * ```typescript
 * R.median([2, 9, 7]); //=> 7
 * R.median([7, 2, 10, 9]); //=> 8
 * R.median([]); //=> NaN
 * ```
 */
export function median(list: readonly number[]): number;


/**
 * Takes a string-returning function `keyGen` and a function `fn` and returns
 * a new function that returns cached results for subsequent
 * calls with the same arguments.
 * 
 * When the function is invoked, `keyGen` is applied to the same arguments
 * and its result becomes the cache key. If the cache contains something
 * under that key, the function simply returns it and does not invoke `fn` at all.
 * 
 * Otherwise `fn` is applied to the same arguments and its return value
 * is cached under that key and returned by the function.
 * 
 * Care must be taken when implementing `keyGen` to avoid key collision,
 * or if tracking references, memory leaks and mutating arguments.
 *
 * @example
 * ```typescript
 * const withAge = memoizeWith(o => `${o.birth}/${o.death}`, ({birth, death}) => {
 * //                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^
 * //                          keyGen                        fn
 *   console.log(`computing age for ${birth}/${death}`);
 *   return ({birth, death, age: death - birth});
 * });
 * 
 * withAge({birth: 1921, death: 1999});
 * //=> LOG: computing age for 1921/1999
 * //=> {birth: 1921, death: 1999, age: 78} (returned from fn)
 * 
 * withAge({birth: 1921, death: 1999});
 * //=> {birth: 1921, death: 1999, age: 78} (returned from cache)
 * ```
 */
export function memoizeWith<T extends (...args: readonly any[]) => any>(
  keyFn: (...v: Parameters<T>) => string,
  fn: T,
): T;


/**
 * Creates one new object with the own properties from a list of objects.
 * If a key exists in more than one object, the value from the last
 * object it exists in will be used.
 *
 * See also {@link reduce}
 *
 * @example
 * ```typescript
 * R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
 * R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
 * ```
 */
export function mergeAll<T extends object, Ts extends readonly object[]>(list: [T, ...Ts]): _.O.Assign<T, Ts>;
// for when passing in an `T[]` where all the objects are the same shape `mergeAll([obj1, obj2, obj3]: T[])
// this just returns T
export function mergeAll<T>(list: readonly T[]): T;


/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the first object will be used.
 *
 * See also {@link merge}, {@link mergeDeepRight}, {@link mergeDeepWith}, {@link mergeDeepWithKey}
 *
 * @example
 * ```typescript
 * R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                 { age: 40, contact: { email: 'baa@example.com' }});
 * //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
 * ```
 */
export function mergeDeepLeft<L extends object>(l: L): <R extends object>(r: R) => _.O.Assign<R, [L], 'deep'>;
export function mergeDeepLeft<L extends object, R extends object>(l: L, r: R): _.O.Assign<R, [L], 'deep'>;


/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 *
 * See also {@link merge}, {@link mergeDeepLeft}, {@link mergeDeepWith}, {@link mergeDeepWithKey}
 *
 * @example
 * ```typescript
 * R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                  { age: 40, contact: { email: 'baa@example.com' }});
 * //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 * ```
 */
export function mergeDeepRight<L extends object>(l: L): <R extends object>(r: R) => _.O.Assign<L, [R], 'deep'>;
export function mergeDeepRight<L extends object, R extends object>(l: L, r: R): _.O.Assign<L, [R], 'deep'>;


/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to associated values using the
 *   resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * See also {@link mergeWith}, {@link mergeDeepWithKey}
 *
 * @example
 * ```typescript
 * R.mergeDeepWith(R.concat,
 *                 { a: true, c: { values: [10, 20] }},
 *                 { b: true, c: { values: [15, 35] }});
 * //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
 * ```
 */
export function mergeDeepWith<T1, T2>(fn: (x: any, z: any) => any): (a: T1, b: T2) => any;
export function mergeDeepWith<T1, T2>(fn: (x: any, z: any) => any, a: T1): (b: T2) => any;
export function mergeDeepWith<T1, T2>(fn: (x: any, z: any) => any, a: T1, b: T2): any;


/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * See also {@link mergeWithKey}, {@link mergeDeepWith}
 *
 * @example
 * ```typescript
 * let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 * R.mergeDeepWithKey(concatValues,
 *                    { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                    { b: true, c: { thing: 'bar', values: [15, 35] }});
 * //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 * ```
 */
export function mergeDeepWithKey<T1, T2>(fn: (k: string, x: any, z: any) => any): (a: T1, b: T2) => any;
export function mergeDeepWithKey<T1, T2>(fn: (k: string, x: any, z: any) => any, a: T1): (b: T2) => any;
export function mergeDeepWithKey<T1, T2>(fn: (k: string, x: any, z: any) => any, a: T1, b: T2): any;


/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the first object will be used.
 *
 * See also {@link mergeRight}, {@link mergeDeepLeft}, {@link mergeWith}, {@link mergeWithKey}
 *
 * @example
 * ```typescript
 * R.mergeLeft({ 'age': 40 }, { 'name': 'fred', 'age': 10 });
 * //=> { 'name': 'fred', 'age': 40 }
 * 
 * const resetToDefault = R.mergeLeft({x: 0});
 * resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
 * ```
 */
export function mergeLeft<L extends object>(l: L): <R extends object>(r: R) => _.O.Assign<R, [L], 'flat'>;
export function mergeLeft<L extends object, R extends object>(l: L, r: R): _.O.Assign<R, [L], 'flat'>;


/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * See also {@link mergeLeft}, {@link mergeDeepRight}, {@link mergeWith}, {@link mergeWithKey}
 *
 * @example
 * ```typescript
 * R.mergeRight({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 * //=> { 'name': 'fred', 'age': 40 }
 * 
 * const withDefaults = R.mergeRight({x: 0, y: 0});
 * withDefaults({y: 2}); //=> {x: 0, y: 2}
 * ```
 */
export function mergeRight<L extends object>(l: L): <R extends object>(r: R) => _.O.Assign<L, [R], 'flat'>;
export function mergeRight<L extends object, R extends object>(l: L, r: R): _.O.Assign<L, [R], 'flat'>;


/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the values
 * associated with the key in each object, with the result being used as the
 * value associated with the key in the returned object.
 *
 * See also {@link mergeDeepWith}, {@link merge}, {@link mergeWithKey}
 *
 * @example
 * ```typescript
 * R.mergeWith(R.concat,
 *             { a: true, values: [10, 20] },
 *             { b: true, values: [15, 35] });
 * //=> { a: true, b: true, values: [10, 20, 15, 35] }
 * ```
 */
export function mergeWith(fn: (x: any, z: any) => any): <U, V>(a: U, b: V) => any;
export function mergeWith<U>(fn: (x: any, z: any) => any, a: U): <V>(b: V) => any;
export function mergeWith<U, V>(fn: (x: any, z: any) => any, a: U, b: V): any;


/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * See also {@link mergeDeepWithKey}, {@link merge}, {@link mergeWith}
 *
 * @example
 * ```typescript
 * let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 * R.mergeWithKey(concatValues,
 *                { a: true, thing: 'foo', values: [10, 20] },
 *                { b: true, thing: 'bar', values: [15, 35] });
 * //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * ```
 */
export function mergeWithKey(fn: (str: string, x: any, z: any) => any): <U, V>(a: U, b: V) => any;
export function mergeWithKey<U>(fn: (str: string, x: any, z: any) => any, a: U): <V>(b: V) => any;
export function mergeWithKey<U, V>(fn: (str: string, x: any, z: any) => any, a: U, b: V): any;


/**
 * Returns the smaller of its two arguments.
 *
 * See also {@link minBy}, {@link max}
 *
 * @example
 * ```typescript
 * R.min(789, 123); //=> 123
 * R.min('a', 'b'); //=> 'a'
 * ```
 */
export function min<T extends Ord>(a: T): (b: T) => T;
export function min<T extends Ord>(a: T, b: T): T;


/**
 * Takes a function and two values, and returns whichever value produces the
 * smaller result when passed to the provided function.
 *
 * See also {@link min}, {@link maxBy}
 *
 * @example
 * ```typescript
 * //  square :: Number -> Number
 * const square = n => n * n;
 * 
 * R.minBy(square, -3, 2); //=> 2
 * 
 * R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
 * R.reduce(R.minBy(square), Infinity, []); //=> Infinity
 * ```
 */
export function minBy<T>(fn: (a: T) => Ord): {
  // minBy(fn)(a)(b)
  (a: T): (b: T) => T;
  // minBy(fn)(a, b)
  (a: T, b: T): T;
};
// minBy(__, a)
export function minBy<T>(__: Placeholder, a: T): {
  // minBy(__, a)(fn)(b)
  (fn: (a: T) => Ord): (b: T) => T;
  // minBy(__, a)(__, b)(fn)
  (__: Placeholder, b: T): (fn: (a: T) => Ord) => T;
  // minBy(__, a)(fn, b)
  (fn: (a: T) => Ord, b: T): T;
};
// minBy(fn, a)(b)
export function minBy<T>(fn: (a: T) => Ord, a: T): (b: T) => T;
// minBy(__, a, b)(fn)
export function minBy<T>(__: Placeholder, a: T, b: T): (fn: (a: T) => Ord) => T;
// minBy(fn, a, b)
export function minBy<T>(fn: (a: T) => Ord, a: T, b: T): T;


/**
 * Creates a copy of the passed object by applying an `fn` function to the given `prop` property.
 * 
 * The function will not be invoked, and the object will not change
 * if its corresponding property does not exist in the object.
 * All non-primitive properties are copied to the new object by reference.
 *
 * @example
 * ```typescript
 * const person = {name: 'James', age: 20, pets: ['dog', 'cat']};
 * R.modify('age', R.add(1), person); //=> {name: 'James', age: 21, pets: ['dog', 'cat']}
 * R.modify('pets', R.append('turtle'), person); //=> {name: 'James', age: 20, pets: ['dog', 'cat', 'turtle']}
 * ```
 */
export function modify<K extends string, A, P>(
  prop: K,
  fn: (a: A) => P,
): <T extends Record<K, A>>(target: T) => Omit<T, K> & Record<K, P>;

export function modify<T extends object, K extends keyof T, P>(
  prop: K,
  fn: (a: T[K]) => P,
  obj: T,
): Omit<T, K> & Record<K, P>;


/**
 * Creates a shallow clone of the passed object by applying an `fn` function
 * to the value at the given path.
 * 
 * The function will not be invoked, and the object will not change
 * if its corresponding path does not exist in the object.
 * All non-primitive properties are copied to the new object by reference.
 *
 * @example
 * ```typescript
 * const person = {name: 'James', address: { zipCode: '90216' }};
 * R.modifyPath(['address', 'zipCode'], R.reverse, person); //=> {name: 'James', address: { zipCode: '61209' }}
 * 
 * // Can handle arrays too
 * const person = {name: 'James', addresses: [{ zipCode: '90216' }]};
 * R.modifyPath(['addresses', 0, 'zipCode'], R.reverse, person); //=> {name: 'James', addresses: [{ zipCode: '61209' }]}
 * ```
 */
export function modifyPath<U, T>(path: [], fn: (value: U) => T, obj: U): T;
export function modifyPath<K0 extends keyof U, U, T>(path: [K0], fn: (value: U[K0]) => T, obj: U): DeepModify<[K0], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  U,
  T
>(path: [K0, K1], fn: (value: U[K0][K1]) => T, obj: U): DeepModify<[K0, K1], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  U,
  T
>(path: [K0, K1, K2], fn: (value: U[K0][K1][K2]) => T, obj: U): DeepModify<[K0, K1, K2], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  U,
  T
>(path: [K0, K1, K2, K3], fn: (value: U[K0][K1][K2][K3]) => T, obj: U): DeepModify<[K0, K1, K2, K3], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  K4 extends keyof U[K0][K1][K2][K3],
  U,
  T
>(path: [K0, K1, K2, K3, K4], fn: (value: U[K0][K1][K2][K3][K4]) => T, obj: U): DeepModify<[K0, K1, K2, K3, K4], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  K4 extends keyof U[K0][K1][K2][K3],
  K5 extends keyof U[K0][K1][K2][K3][K4],
  U,
  T
>(path: [K0, K1, K2, K3, K4, K5], fn: (value: U[K0][K1][K2][K3][K4][K5]) => T, obj: U): DeepModify<[K0, K1, K2, K3, K4, K5], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  K4 extends keyof U[K0][K1][K2][K3],
  K5 extends keyof U[K0][K1][K2][K3][K4],
  K6 extends keyof U[K0][K1][K2][K3][K4][K5],
  U,
  T
>(path: [K0, K1, K2, K3, K4, K5, K6], fn: (value: U[K0][K1][K2][K3][K4][K5][K6]) => T, obj: U): DeepModify<[K0, K1, K2, K3, K4, K5, K6], U, T>;
// backup type
// for unknown path, or key-chain larger than 6, allow user to set output type B and input type A
export function modifyPath<B, A = any>(path: Path, fn: (a: any) => any, obj: A): B;


/**
 * Divides the first parameter by the second and returns the remainder. Note
 * that this function preserves the JavaScript-style behavior for modulo. For
 * mathematical modulo see [`mathMod`](#mathMod).
 *
 * See also {@link mathMod}
 *
 * @example
 * ```typescript
 * R.modulo(17, 3); //=> 2
 * // JS behavior:
 * R.modulo(-17, 3); //=> -2
 * R.modulo(17, -3); //=> 2
 * 
 * const isOdd = R.modulo(R.__, 2);
 * isOdd(42); //=> 0
 * isOdd(21); //=> 1
 * ```
 */
export function modulo(a: number): (b: number) => number;
export function modulo(__: Placeholder, b: number): (a: number) => number;
export function modulo(a: number, b: number): number;


/**
 * Move an item, at index `from`, to index `to`, in a list of elements.
 * A new list will be created containing the new elements order.
 *
 * @example
 * ```typescript
 * R.move(0, 2, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['b', 'c', 'a', 'd', 'e', 'f']
 * R.move(-1, 0, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['f', 'a', 'b', 'c', 'd', 'e'] list rotation
 * ```
 */
export function move(from: number): {
  (to: number): <T>(list: readonly T[]) => T[];
  <T>(to: number, list: readonly T[]): T[];
};
export function move(from: number, to: number): <T>(list: readonly T[]) => T[];
export function move<T>(from: number, to: number, list: readonly T[]): T[];


/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * See also {@link divide}
 *
 * @example
 * ```typescript
 * const double = R.multiply(2);
 * const triple = R.multiply(3);
 * double(3);       //=>  6
 * triple(4);       //=> 12
 * R.multiply(2, 5);  //=> 10
 * ```
 */
export function multiply(a: number): (b: number) => number;
export function multiply(a: number, b: number): number;


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `n` parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * See also {@link binary}, {@link unary}
 *
 * @example
 * ```typescript
 * const takesTwoArgs = (a, b) => [a, b];
 * 
 * takesTwoArgs.length; //=> 2
 * takesTwoArgs(1, 2); //=> [1, 2]
 * 
 * const takesOneArg = R.nAry(1, takesTwoArgs);
 * takesOneArg.length; //=> 1
 * // Only `n` arguments are passed to the wrapped function
 * takesOneArg(1, 2); //=> [1, undefined]
 * ```
 */
export function nAry<N extends number>(
  n: N,
): <T extends (...arg: any) => unknown>(fn: T) => (...arg: _.T.Take<Parameters<T>, N>) => ReturnType<T>;
export function nAry<N extends number, T extends (...arg: any) => unknown>(
  n: N,
  fn: T,
): (...arg: _.T.Take<Parameters<T>, N>) => ReturnType<T>;


/**
 * Negates its argument.
 *
 * @example
 * ```typescript
 * R.negate(42); //=> -42
 * ```
 */
export function negate(n: number): number;


/**
 * Returns `true` if no elements of the list match the predicate, `false`
 * otherwise.
 * 
 * Dispatches to the `all` method of the second argument, if present.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link all}, {@link any}
 *
 * @example
 * ```typescript
 * const isEven = n => n % 2 === 0;
 * const isOdd = n => n % 2 !== 0;
 * 
 * R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
 * R.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false
 * ```
 */
export function none<T>(fn: (a: T) => boolean): (list: readonly T[]) => boolean;
export function none<T>(fn: (a: T) => boolean, list: readonly T[]): boolean;


/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * See also {@link complement}
 *
 * @example
 * ```typescript
 * R.not(true); //=> false
 * R.not(false); //=> true
 * R.not(0); //=> true
 * R.not(1); //=> false
 * ```
 */
export function not(value: any): boolean;


/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @example
 * ```typescript
 * const list = ['foo', 'bar', 'baz', 'quux'];
 * R.nth(1, list); //=> 'bar'
 * R.nth(-1, list); //=> 'quux'
 * R.nth(-99, list); //=> undefined
 * 
 * R.nth(2, 'abc'); //=> 'c'
 * R.nth(3, 'abc'); //=> ''
 * ```
 */
export function nth(n: number): <T extends readonly any[] | string>(list: T) => (T extends Array<infer E> ? E : string) | undefined;
export function nth(n: number, list: string): string;
export function nth<T>(n: number, list: readonly T[]): T | undefined;


/**
 * Returns a function which returns its nth argument.
 *
 * @example
 * ```typescript
 * R.nthArg(1)('a', 'b', 'c'); //=> 'b'
 * R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
 * ```
 */
export function nthArg(n: number): (...a: readonly any[]) => any;


/**
 * `o` is a curried composition function that returns a unary function.
 * Like [`compose`](#compose), `o` performs right-to-left function composition.
 * Unlike [`compose`](#compose), the rightmost function passed to `o` will be
 * invoked with only one argument. Also, unlike [`compose`](#compose), `o` is
 * limited to accepting only 2 unary functions. The name o was chosen because
 * of its similarity to the mathematical composition operator ∘.
 *
 * See also {@link compose}, {@link pipe}
 *
 * @example
 * ```typescript
 * const classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + name.last
 * const yellGreeting = R.o(R.toUpper, classyGreeting);
 * yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
 * 
 * R.o(R.multiply(10), R.add(10))(-4) //=> 60
 * ```
 */
export function o<T2, R>(f: (x: T2) => R): {
  <T1>(g: (x: T1) => T2): (v: T1) => R;
  <T1>(g: (x: T1) => T2, v: T1): R;
};
export function o<T1, T2, R>(f: (x: T2) => R, g: (x: T1) => T2): (v: T1) => R;
export function o<T1, T2, R>(f: (x: T2) => R, g: (x: T1) => T2, v: T1): R;


/**
 * Creates an object containing a single key:value pair.
 *
 * See also {@link pair}
 *
 * @example
 * ```typescript
 * const matchPhrases = R.compose(
 *   R.objOf('must'),
 *   R.map(R.objOf('match_phrase'))
 * );
 * matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
 * ```
 */
export function objOf<K extends string>(key: K): <T>(value: T) => Record<K, T>;
export function objOf<T, K extends string>(key: K, value: T): Record<K, T>;


/**
 * Given a constructor and a value, returns a new instance of that constructor
 * containing the value.
 * 
 * Dispatches to the `fantasy-land/of` method of the constructor first (if present)
 * or to the `of` method last (if present). When neither are present, wraps the
 * value in an array.
 * 
 * Note this `of` is different from the ES6 `of`; See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 *
 * @example
 * ```typescript
 * R.of(Array, 42);   //=> [42]
 * R.of(Array, [42]); //=> [[42]]
 * R.of(Maybe, 42);   //=> Maybe.Just(42)
 * ```
 */
export function of<Ctor extends { of: (value: any) => any; }>(ctor: Ctor): <T extends Parameters<Ctor['of']>[0]>(val: T) => Ctor extends ArrayConstructor ? T[] : ReturnType<Ctor['of']>;
// of(__, val)(ctor)
export function of<T>(__: Placeholder, val: T): <Ctor extends { of: (value: any) => any; }>(ctor: Ctor) => Ctor extends ArrayConstructor ? T[] : ReturnType<Ctor['of']>;
// of(ctor, val)
export function of<Ctor extends { of: (value: any) => any; }, T extends Parameters<Ctor['of']>[0]>(ctor: Ctor, val: T): Ctor extends ArrayConstructor ? T[] : ReturnType<Ctor['of']>;


/**
 * Takes a binary function `f`, a unary function `g`, and two values.
 * Applies `g` to each value, then applies the result of each to `f`.
 * 
 * Also known as the P combinator.
 *
 * @example
 * ```typescript
 * const eqBy = R.on((a, b) => a === b);
 * eqBy(R.prop('a'), {b:0, a:1}, {a:1}) //=> true;
 * 
 * const containsInsensitive = R.on(R.includes, R.toLower);
 * containsInsensitive('o', 'FOO'); //=> true
 * ```
 */
export function on<U, R>(combine: (a: U, b: U) => R): {
  <T>(transform: (value: T) => U): {
    (a: T): (b: T) => R;
    (a: T, b: T): R;
  };
  <T>(transform: (value: T) => U, a: T): (b: T) => R;
  <T>(transform: (value: T) => U, a: T, b: T): R;
};

// For manually specifying overloads
export function on<T, U, R>(combine: (a: U, b: U) => R): {
  (transform: (value: T) => U): {
    (a: T): (b: T) => R;
    (a: T, b: T): R;
  };
  (transform: (value: T) => U, a: T): (b: T) => R;
  (transform: (value: T) => U, a: T, b: T): R;
};

export function on<T, U, R>(combine: (a: U, b: U) => R, transform: (value: T) => U): {
  (a: T): (b: T) => R;
  (a: T, b: T): R;
};
export function on<T, U, R>(combine: (a: U, b: U) => R, transform: (value: T) => U, a: T): (b: T) => R;
export function on<T, U, R>(combine: (a: U, b: U) => R, transform: (value: T) => U, a: T, b: T): R;


/**
 * Accepts a function `fn` and returns a function that guards invocation of
 * `fn` such that `fn` can only ever be called once, no matter how many times
 * the returned function is invoked. The first value calculated is returned in
 * subsequent invocations.
 *
 * @example
 * ```typescript
 * const addOneOnce = R.once(x => x + 1);
 * addOneOnce(10); //=> 11
 * addOneOnce(addOneOnce(50)); //=> 11
 * ```
 */
export function once<F extends (...a: readonly any[]) => any>(fn: F): F;


/**
 * Returns the first argument if it is truthy, otherwise the second argument.
 * Acts as the boolean `or` statement if both inputs are `Boolean`s.
 *
 * See also {@link either}, {@link and}
 *
 * @example
 * ```typescript
 * R.or(true, true); //=> true
 * R.or(true, false); //=> true
 * R.or(false, true); //=> true
 * R.or(false, false); //=> false
 * ```
 */
export function or<T>(a: T | Falsy): <U>(b: U) => T | U;
export function or<T, U>(a: T | Falsy, b: U): T | U;


/**
 * Returns the result of applying the onFailure function to the value inside
 * a failed promise. This is useful for handling rejected promises
 * inside function compositions.
 *
 * See also {@link andThen}
 *
 * @example
 * ```typescript
 * const failedFetch = id => Promise.reject('bad ID');
 * const useDefault = () => ({ firstName: 'Bob', lastName: 'Loblaw' });
 * 
 * //recoverFromFailure :: String -> Promise ({ firstName, lastName })
 * const recoverFromFailure = R.pipe(
 *   failedFetch,
 *   R.otherwise(useDefault),
 *   R.andThen(R.pick(['firstName', 'lastName'])),
 * );
 * recoverFromFailure(12345).then(console.log);
 * ```
 */
export function otherwise<A, B>(onError: (error: any) => B | Promise<B>): (promise: Promise<A>) => Promise<B>;
export function otherwise<A, B>(onError: (error: any) => B | Promise<B>, promise: Promise<A>): Promise<B>;


/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * See also {@link view}, {@link set}, {@link lens}, {@link lensIndex}, {@link lensProp}, {@link lensPath}
 *
 * @example
 * ```typescript
 * const headLens = R.lensIndex(0);
 * 
 * R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 * ```
 */
export function over<S, A>(lens: Lens<S, A>): {
  (fn: (a: A) => A): (value: S) => S;
  (fn: (a: A) => A, value: S): S;
};
export function over<S, A>(lens: Lens<S, A>, fn: (a: A) => A): (value: S) => S;
export function over<S, A>(lens: Lens<S, A>, fn: (a: A) => A, value: S): S;


/**
 * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
 *
 * See also {@link objOf}, {@link of}
 *
 * @example
 * ```typescript
 * R.pair('foo', 'bar'); //=> ['foo', 'bar']
 * ```
 */
export function pair<F>(fst: F): <S>(snd: S) => [F, S];
export function pair<F, S>(fst: F, snd: S): [F, S];


/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided initially followed by the arguments provided to `g`.
 *
 * See also {@link partialRight}, {@link curry}
 *
 * @example
 * ```typescript
 * const multiply2 = (a, b) => a * b;
 * const double = R.partial(multiply2, [2]);
 * double(3); //=> 6
 * 
 * const greet = (salutation, title, firstName, lastName) =>
 *   salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 * 
 * const sayHello = R.partial(greet, ['Hello']);
 * const sayHelloToMs = R.partial(sayHello, ['Ms.']);
 * sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
 * ```
 */
export function partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, args: [V0]): (x1: V1) => T;
export function partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: [V0, V1]): (x2: V2) => T;
export function partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: [V0]): (x1: V1, x2: V2) => T;
export function partial<V0, V1, V2, V3, T>(
  fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T,
  args: [V0, V1, V2],
): (x2: V3) => T;
export function partial<V0, V1, V2, V3, T>(
  fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T,
  args: [V0, V1],
): (x2: V2, x3: V3) => T;
export function partial<V0, V1, V2, V3, T>(
  fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T,
  args: [V0],
): (x1: V1, x2: V2, x3: V3) => T;
export function partial<T>(fn: (...a: readonly any[]) => T, args: readonly any[]): (...a: readonly any[]) => T;


/**
 * Takes a function `f` and an object, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the object
 * provided initially merged deeply (right) with the object provided as an argument to `g`.
 *
 * See also {@link partial}, {@link partialRight}, {@link curry}, {@link mergeDeepRight}
 *
 * @example
 * ```typescript
 * const multiply2 = ({ a, b }) => a * b;
 * const double = R.partialObject(multiply2, { a: 2 });
 * double({ b: 2 }); //=> 4
 * 
 * const greet = ({ salutation, title, firstName, lastName }) =>
 *   salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 * 
 * const sayHello = R.partialObject(greet, { salutation: 'Hello' });
 * const sayHelloToMs = R.partialObject(sayHello, { title: 'Ms.' });
 * sayHelloToMs({ firstName: 'Jane', lastName: 'Jones' }); //=> 'Hello, Ms. Jane Jones!'
 * ```
 */
export function partialObject<T, R>(fn: (value: T) => R): <P1>(partial: P1) => (value: Omit<T, keyof P1>) => R;
export function partialObject<T extends P1, P1, R>(fn: (value: T) => R, partial: P1): (value: Omit<T, keyof P1>) => R;


/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided to `g` followed by the arguments provided initially.
 *
 * See also {@link partial}
 *
 * @example
 * ```typescript
 * const greet = (salutation, title, firstName, lastName) =>
 *   salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 * 
 * const greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
 * 
 * greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 * ```
 */
export function partialRight<V0, V1, T>(fn: (x0: V0, x1: V1) => T, args: [V1]): (x1: V0) => T;
export function partialRight<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: [V1, V2]): (x2: V0) => T;
export function partialRight<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: [V2]): (x1: V0, x2: V1) => T;
export function partialRight<V0, V1, V2, V3, T>(
  fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T,
  args: [V1, V2, V3],
): (x0: V0) => T;
export function partialRight<V0, V1, V2, V3, T>(
  fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T,
  args: [V2, V3],
): (x0: V0, x1: V1) => T;
export function partialRight<V0, V1, V2, V3, T>(
  fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T,
  args: [V3],
): (x0: V0, x1: V1, x2: V2) => T;
export function partialRight<T>(fn: (...a: readonly any[]) => T, args: readonly any[]): (...a: readonly any[]) => T;


/**
 * Takes a predicate and a list or other `Filterable` object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * See also {@link filter}, {@link reject}
 *
 * @example
 * ```typescript
 * R.partition(R.includes('s'), ['sss', 'ttt', 'foo', 'bars']);
 * // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 * 
 * R.partition(R.includes('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 * // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 * ```
 */
export function partition<T, U extends T>(fn: (a: T) => a is U): <L extends T = T>(list: readonly L[]) => [U[], Exclude<L, U>[]];
export function partition<T>(fn: (a: T) => boolean): <L extends T = T>(list: readonly L[]) => [L[], L[]];

export function partition<T, U extends T>(fn: (a: T) => a is U, list: readonly T[]): [U[], Exclude<T, U>[]];
export function partition<T>(fn: (a: T) => boolean, list: readonly T[]): [T[], T[]];


/**
 * Retrieves the value at a given path. The nodes of the path can be arbitrary strings or non-negative integers.
 * For anything else, the value is unspecified. Integer paths are meant to index arrays, strings are meant for objects.
 *
 * See also {@link prop}, {@link nth}, {@link assocPath}, {@link dissocPath}
 *
 * @example
 * ```typescript
 * R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 * R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 * R.path(['a', 'b', 0], {a: {b: [1, 2, 3]}}); //=> 1
 * R.path(['a', 'b', -2], {a: {b: [1, 2, 3]}}); //=> 2
 * R.path([2], {'2': 2}); //=> 2
 * R.path([-2], {'-2': 'a'}); //=> undefined
 * ```
 */
export function path<T = unknown>(path: Path): (obj: any) => T | undefined;
// full signatures
export function path<S, K0 extends keyof S>(path: [K0], obj: S): S[K0];
export function path<S, K0 extends keyof S, K1 extends keyof S[K0]>(path: [K0, K1], obj: S): S[K0][K1];
export function path<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1]
>(path: [K0, K1, K2], obj: S): S[K0][K1][K2];
export function path<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2]
>(path: [K0, K1, K2, K3], obj: S): S[K0][K1][K2][K3];
export function path<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3]
>(path: [K0, K1, K2, K3, K4], obj: S): S[K0][K1][K2][K3][K4];
export function path<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4]
>(path: [K0, K1, K2, K3, K4, K5], obj: S): S[K0][K1][K2][K3][K4][K5];
export function path<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4],
  K6 extends keyof S[K0][K1][K2][K3][K4][K5]
>(path: [K0, K1, K2, K3, K4, K5, K6], obj: S): S[K0][K1][K2][K3][K4][K5][K6];
export function path<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4],
  K6 extends keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends keyof S[K0][K1][K2][K3][K4][K5][K6]
>(path: [K0, K1, K2, K3, K4, K5, K6, K7], obj: S): S[K0][K1][K2][K3][K4][K5][K6][K7];
export function path<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4],
  K6 extends keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends keyof S[K0][K1][K2][K3][K4][K5][K6],
  K8 extends keyof S[K0][K1][K2][K3][K4][K5][K6][K7]
>(path: [K0, K1, K2, K3, K4, K5, K6, K7, K8], obj: S): S[K0][K1][K2][K3][K4][K5][K6][K7][K8];
// final backup
export function path<T = unknown>(path: Path, obj: any): T | undefined;


/**
 * Determines whether a nested path on an object has a specific value, in
 * [`R.equals`](#equals) terms. Most likely used to filter a list.
 *
 * See also {@link whereEq}, {@link propEq}, {@link pathSatisfies}, {@link equals}
 *
 * @example
 * ```typescript
 * const user1 = { address: { zipCode: 90210 } };
 * const user2 = { address: { zipCode: 55555 } };
 * const user3 = { name: 'Bob' };
 * const users = [ user1, user2, user3 ];
 * const isFamous = R.pathEq(90210, ['address', 'zipCode']);
 * R.filter(isFamous, users); //=> [ user1 ]
 * ```
 */
export function pathEq(val: any): {
  (path: Path): (obj: any) => boolean;
  (path: Path, obj: any): boolean;
};
export function pathEq(val: any, path: Path): (obj: any) => boolean;
export function pathEq(val: any, path: Path, obj: any): boolean;


/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @example
 * ```typescript
 * R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 * R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 * ```
 */
export function pathOr<T>(defaultValue: T): _.F.Curry<(a: Path, b: any) => T>;
export function pathOr<T>(defaultValue: T, path: Path): (obj: any) => T;
export function pathOr<T>(defaultValue: T, path: Path, obj: any): T;


/**
 * Retrieves the values at given paths of an object.
 *
 * See also {@link path}
 *
 * @example
 * ```typescript
 * R.paths([['a', 'b'], ['p', 0, 'q']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, 3]
 * R.paths([['a', 'b'], ['p', 'r']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, undefined]
 * ```
 */
export function paths<T>(paths: Path[]): (obj: any) => Array<T | undefined>;
export function paths<T>(paths: Path[], obj: any): Array<T | undefined>;


/**
 * Returns `true` if the specified object property at given path satisfies the
 * given predicate; `false` otherwise.
 *
 * See also {@link propSatisfies}, {@link path}
 *
 * @example
 * ```typescript
 * R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 * R.pathSatisfies(R.is(Object), [], {x: {y: 2}}); //=> true
 * ```
 */
export function pathSatisfies<T, U>(pred: (val: T) => boolean): _.F.Curry<(a: Path, b: U) => boolean>;
export function pathSatisfies<T, U>(pred: (val: T) => boolean, path: Path): (obj: U) => boolean;
export function pathSatisfies<T, U>(pred: (val: T) => boolean, path: Path, obj: U): boolean;


/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for
 * properties that don't exist.
 *
 * See also {@link pick}
 *
 * @example
 * ```typescript
 * R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 * R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 * ```
 */
export function pickAll(names: readonly string[]): <T, U>(obj: T) => U;
export function pickAll<T, K extends keyof T>(names: readonly K[], obj: T): Pick<T, K>;
export function pickAll<T, U>(names: readonly string[], obj: T): U;


/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * See also {@link pick}, {@link filter}
 *
 * @example
 * ```typescript
 * const isUpperCase = (val, key) => key.toUpperCase() === key;
 * R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 * ```
 */
export function pickBy<T>(pred: ObjPred<T>): <U, V extends T>(obj: V) => U;
export function pickBy<T, U>(pred: ObjPred<T>, obj: T): U;


/**
 * Performs left-to-right function composition. The first argument may have
 * any arity; the remaining arguments must be unary.
 * 
 * In some libraries this function is named `sequence`.
 * 
 * **Note:** The result of pipe is not automatically curried.
 *
 * See also {@link compose}
 *
 * @example
 * ```typescript
 * const f = R.pipe(Math.pow, R.negate, R.inc);
 * 
 * f(3, 4); // -(3^4) + 1
 * ```
 */
export function pipe<TArgs extends any[], R1, R2, R3, R4, R5, R6, R7, TResult>(
  ...funcs: [
        f1: (...args: TArgs) => R1,
        f2: (a: R1) => R2,
        f3: (a: R2) => R3,
        f4: (a: R3) => R4,
        f5: (a: R4) => R5,
        f6: (a: R5) => R6,
        f7: (a: R6) => R7,
        ...func: Array<(a: any) => any>,
        fnLast: (a: any) => TResult
  ]
): (...args: TArgs) => TResult;
// fallback overload if number of piped functions greater than 7
export function pipe<TArgs extends any[], R1, R2, R3, R4, R5, R6, R7>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7,
): (...args: TArgs) => R7;
export function pipe<TArgs extends any[], R1, R2, R3, R4, R5, R6>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
): (...args: TArgs) => R6;
export function pipe<TArgs extends any[], R1, R2, R3, R4, R5>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
): (...args: TArgs) => R5;
export function pipe<TArgs extends any[], R1, R2, R3, R4>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
): (...args: TArgs) => R4;
export function pipe<TArgs extends any[], R1, R2, R3>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
): (...args: TArgs) => R3;
export function pipe<TArgs extends any[], R1, R2>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2,
): (...args: TArgs) => R2;
export function pipe<TArgs extends any[], R1>(f1: (...args: TArgs) => R1): (...args: TArgs) => R1;


/**
 * Performs left-to-right function composition using transforming function. The first function may have
 * any arity; the remaining functions must be unary.
 * 
 * **Note:** The result of pipeWith is not automatically curried. Transforming function is not used on the
 * first argument.
 *
 * See also {@link composeWith}, {@link pipe}
 *
 * @example
 * ```typescript
 * const pipeWhileNotNil = R.pipeWith((f, res) => R.isNil(res) ? res : f(res));
 * const f = pipeWhileNotNil([Math.pow, R.negate, R.inc])
 * 
 * f(3, 4); // -(3^4) + 1
 * ```
 */
export function pipeWith(
  transformer: (fn: (...args: any[]) => any, intermediatResult: any) => any,
): <TArgs extends any[], TResult>(fns: AtLeastOneFunctionsFlow<TArgs, TResult>) => (...args: TArgs) => TResult;
export function pipeWith<TArgs extends any[], TResult>(
  transformer: (fn: (...args: any[]) => any, intermediatResult: any) => any,
  fns: AtLeastOneFunctionsFlow<TArgs, TResult>,
): (...args: TArgs) => TResult;


/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 * 
 * `pluck` will work on
 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
 * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
 *
 * See also {@link project}, {@link prop}, {@link props}
 *
 * @example
 * ```typescript
 * var getAges = R.pluck('age');
 * getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]
 * 
 * R.pluck(0, [[1, 2], [3, 4]]);               //=> [1, 3]
 * R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * ```
 */
export function pluck<K extends PropertyKey>(prop: K extends Placeholder ? never : K): {
  <U extends O[keyof O], UK extends keyof U, O extends Record<string, any>>(obj: K extends UK ? O : never): { [OK in keyof O]: O[OK][K] };
  <U extends readonly unknown[] | Record<K, any>>(list: readonly U[]): U extends readonly (infer T)[] ? T[] : U extends Record<K, infer T> ? T[] : never;
};
export function pluck<U>(__: Placeholder, list: readonly U[]): <K extends keyof U>(prop: U extends readonly any[] ? number : K) => U extends readonly (infer T)[] ? T[] : U extends Record<K, infer T> ? T[] : never;
export function pluck<U extends O[keyof O], O extends Record<string, any>>(__: Placeholder, record: O): <K extends keyof U>(prop: K) => { [KK in keyof O]: O[KK][K] };
export function pluck<
  K extends keyof U,
  U extends C[keyof C extends string ? keyof C : number],
  C extends { [k: string]: Record<string, any> } | ReadonlyArray<Record<string, any> | readonly any[]>
>(prop: K, collection: C): keyof C extends string ? { [CK in keyof C]: C[CK] extends Record<K, any> ? C[CK][K] : never } : Array<U[K]>;


/**
 * Returns a new list with the given element at the front, followed by the
 * contents of the list.
 *
 * See also {@link append}
 *
 * @example
 * ```typescript
 * R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 * ```
 */
export function prepend<T>(el: T): (list: readonly T[]) => T[];
export function prepend<T>(el: T, list: readonly T[]): T[];


/**
 * Multiplies together all the elements of a list.
 *
 * See also {@link reduce}
 *
 * @example
 * ```typescript
 * R.product([2,4,6,8,100,1]); //=> 38400
 * ```
 */
export function product(list: readonly number[]): number;


/**
 * Reasonable analog to SQL `select` statement.
 *
 * See also {@link pluck}, {@link props}, {@link prop}
 *
 * @example
 * ```typescript
 * const abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
 * const fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
 * const kids = [abby, fred];
 * R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 * ```
 */
export function project<T, U>(props: readonly string[]): (objs: readonly T[]) => U[];
export function project<T, U>(props: readonly string[], objs: readonly T[]): U[];


/**
 * Takes two functions as pre- and post- processors respectively for a third function,
 * i.e. `promap(f, g, h)(x) === g(h(f(x)))`.
 * 
 * Dispatches to the `promap` method of the third argument, if present,
 * according to the [FantasyLand Profunctor spec](https://github.com/fantasyland/fantasy-land#profunctor).
 * 
 * Acts as a transducer if a transformer is given in profunctor position.
 *
 * See also {@link transduce}
 *
 * @example
 * ```typescript
 * const decodeChar = R.promap(s => s.charCodeAt(), String.fromCharCode, R.add(-8))
 * const decodeString = R.promap(R.split(''), R.join(''), R.map(decodeChar))
 * decodeString("ziuli") //=> "ramda"
 * ```
 */
export function promap<A, B>(pre: (value: A) => B): <C, D>(post: (value: C) => D, fn: (value: B) => C) => (value: A) => D;
export function promap<A, B, C, D>(pre: (value: A) => B, post: (value: C) => D): (fn: (value: B) => C) => (value: A) => D;
export function promap<A, B, C, D>(pre: (value: A) => B, post: (value: C) => D, fn: (value: B) => C): (value: A) => D;


/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * See also {@link path}, {@link props}, {@link pluck}, {@link project}, {@link nth}
 *
 * @example
 * ```typescript
 * R.prop('x', {x: 100}); //=> 100
 * R.prop('x', {}); //=> undefined
 * R.prop(0, [100]); //=> 100
 * R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
 * ```
 */
export function prop<K extends PropertyKey>(prop: K): <U extends { [P in K]?: unknown }>(obj: U) => U[K];
// prop(__, obj)(key)
export function prop<U>(__: Placeholder, obj: U): <K extends keyof U>(prop: K) => U[K];
// prop(key, obj)
export function prop<K extends keyof U, U>(prop: K, obj: U): U[K];


/**
 * Returns `true` if the specified object property is equal, in
 * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
 * You can test multiple properties with [`R.whereEq`](#whereEq),
 * and test nested path property with [`R.pathEq`](#pathEq).
 *
 * See also {@link whereEq}, {@link pathEq}, {@link propSatisfies}, {@link equals}
 *
 * @example
 * ```typescript
 * const abby = {name: 'Abby', age: 7, hair: 'blond'};
 * const fred = {name: 'Fred', age: 12, hair: 'brown'};
 * const rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 * const alois = {name: 'Alois', age: 15, disposition: 'surly'};
 * const kids = [abby, fred, rusty, alois];
 * const hasBrownHair = R.propEq('brown', 'hair');
 * R.filter(hasBrownHair, kids); //=> [fred, rusty]
 * ```
 */
export function propEq<T>(val: T): {
  <K extends PropertyKey>(name: K): (obj: Record<K, T>) => boolean;
  <K extends PropertyKey>(name: K, obj: Record<K, T>): boolean;
};
export function propEq<T, K extends PropertyKey>(val: T, name: K): (obj: Record<K, T>) => boolean;
export function propEq<K extends keyof U, U>(val: U[K], name: K, obj: U): boolean;


/**
 * Returns `true` if the specified object property is of the given type;
 * `false` otherwise.
 *
 * See also {@link is}, {@link propSatisfies}
 *
 * @example
 * ```typescript
 * R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 * R.propIs(Number, 'x', {x: 'foo'});    //=> false
 * R.propIs(Number, 'x', {});            //=> false
 * ```
 */
export function propIs<C extends (...args: any[]) => any, K extends keyof any>(
  type: C,
  name: K,
  obj: any,
): obj is Record<K, ReturnType<C>>;
export function propIs<C extends new (...args: any[]) => any, K extends keyof any>(
  type: C,
  name: K,
  obj: any,
): obj is Record<K, InstanceType<C>>;
export function propIs<C extends (...args: any[]) => any, K extends keyof any>(
  type: C,
  name: K,
): (obj: any) => obj is Record<K, ReturnType<C>>;
export function propIs<C extends new (...args: any[]) => any, K extends keyof any>(
  type: C,
  name: K,
): (obj: any) => obj is Record<K, InstanceType<C>>;
export function propIs<C extends (...args: any[]) => any>(
  type: C,
): {
  <K extends keyof any>(name: K, obj: any): obj is Record<K, ReturnType<C>>;
  <K extends keyof any>(name: K): (obj: any) => obj is Record<K, ReturnType<C>>;
};
export function propIs<C extends new (...args: any[]) => any>(
  type: C,
): {
  <K extends keyof any>(name: K, obj: any): obj is Record<K, InstanceType<C>>;
  <K extends keyof any>(name: K): (obj: any) => obj is Record<K, InstanceType<C>>;
};


/**
 * Return the specified property of the given non-null object if the property
 * is present and it's value is not `null`, `undefined` or `NaN`.
 * 
 * Otherwise the first argument is returned.
 *
 * @example
 * ```typescript
 * const alice = {
 *   name: 'ALICE',
 *   age: 101
 * };
 * const favorite = R.prop('favoriteLibrary');
 * const favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 * 
 * favorite(alice);  //=> undefined
 * favoriteWithDefault(alice);  //=> 'Ramda'
 * ```
 */
export function propOr<T>(val: T): {
  (p: string): <U, V>(obj: U) => V
  <U, V>(p: string, obj: U): V
};
export function propOr<T>(val: T, p: string): <U, V>(obj: U) => V;
export function propOr<U>(__: Placeholder, p: string, obj: U): <T, V>(val: T) => V;
export function propOr<T, U>(val: T, __: Placeholder, obj: U): <V>(p: string) => V;
export function propOr<T, U, V>(val: T, p: string, obj: U): V;


/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
 * order.
 *
 * See also {@link prop}, {@link pluck}, {@link project}
 *
 * @example
 * ```typescript
 * R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 * R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 * 
 * const fullName = R.compose(R.join(' '), R.props(['first', 'last']));
 * fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
 * ```
 */
export function props<P extends string, T>(ps: readonly P[]): (obj: Record<P, T>) => T[];
export function props<P extends string>(ps: readonly P[]): <T>(obj: Record<P, T>) => T[];
export function props<P extends string, T>(ps: readonly P[], obj: Record<P, T>): T[];


/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise. You can test multiple properties with
 * [`R.where`](#where).
 *
 * See also {@link where}, {@link propEq}, {@link propIs}
 *
 * @example
 * ```typescript
 * R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 * ```
 */
export function propSatisfies<P, K extends keyof any>(
  pred: (val: any) => val is P,
  name: K,
  obj: any,
): obj is Record<K, P>;
export function propSatisfies<P, K extends keyof any>(
  pred: (val: any) => val is P,
  name: K,
): (obj: any) => obj is Record<K, P>;
export function propSatisfies<P>(pred: (val: any) => val is P): {
  <K extends keyof any>(name: K, obj: any): obj is Record<K, P>;
  <K extends keyof any>(name: K): (obj: any) => obj is Record<K, P>;
};
export function propSatisfies(pred: (val: any) => boolean, name: keyof any, obj: any): boolean;
export function propSatisfies(pred: (val: any) => boolean, name: keyof any): (obj: any) => boolean;
export function propSatisfies(pred: (val: any) => boolean): _.F.Curry<(a: keyof any, b: any) => boolean>;


/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * @example
 * ```typescript
 * R.range(1, 5);    //=> [1, 2, 3, 4]
 * R.range(50, 53);  //=> [50, 51, 52]
 * ```
 */
export function range(from: number): (to: number) => number[];
export function range(from: number, to: number): number[];


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 * 
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 * 
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 * 
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 * 
 * Be cautious of mutating and returning the accumulator. If you reuse it across
 * invocations, it will continue to accumulate onto the same value. The general
 * recommendation is to always return a new value. If you can't do so for
 * performance reasons, then be sure to reinitialize the accumulator on each
 * invocation.
 * 
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * See also {@link reduced}, {@link addIndex}, {@link reduceRight}
 *
 * @example
 * ```typescript
 * R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 * //          -               -10
 * //         / \              / \
 * //        -   4           -6   4
 * //       / \              / \
 * //      -   3   ==>     -3   3
 * //     / \              / \
 * //    -   2           -1   2
 * //   / \              / \
 * //  0   1            0   1
 * ```
 */
export function reduce<T, U>(f: (acc: U, elem: T) => U | Reduced<U>): {
  // reduce(f)(acc)(list)
  (acc: U): (list: readonly T[]) => U;
  // reduce(f)(__, list)(acc)
  (__: Placeholder, list: readonly T[]): (acc: U) => U;
  // reduce(f)(acc, list)
  (acc: U, list: readonly T[]): U;
};
// reduce(__, acc)
export function reduce<U>(__: Placeholder, acc: U): {
  // reduce(__, acc)(f)(list)
  <T>(f: (acc: U, elem: T) => U | Reduced<U>): (list: readonly T[]) => U;
  // reduce(__, acc)(__, list)(f)
  <T>(__: Placeholder, list: readonly T[]): (f: (acc: U, elem: T) => U | Reduced<U>) => U;
  // reduce(__, acc)(f, list)
  <T>(f: (acc: U, elem: T) => U | Reduced<U>, list: readonly T[]): U;
};
// reduce(f, acc)(list)
export function reduce<T, U>(f: (acc: U, elem: T) => U | Reduced<U>, acc: U): (list: readonly T[]) => U;
// reduce(_, _, list)
export function reduce<T>(__: Placeholder, __2: Placeholder, list: readonly T[]): {
  // reduce(__, __, list)(f)(acc)
  <U>(f: (acc: U, elem: T) => U | Reduced<U>): (acc: U) => U;
  // reduce(__, __, list)(__, acc)(f)
  <U>(__: Placeholder, acc: U): (f: (acc: U, elem: T) => U | Reduced<U>) => U;
  // reduce(__, __, list)(f, acc)
  <U>(f: (acc: U, elem: T) => U | Reduced<U>, acc: U): U;
};
// reduce(f, _, list)(acc)
export function reduce<T, U>(f: (acc: U, elem: T) => U | Reduced<U>, __: Placeholder, list: readonly T[]): (acc: U) => U;
// reduce(__, acc, list)(f)
export function reduce<T, U>(__: Placeholder, acc: U, list: readonly T[]): (f: (acc: U, elem: T) => U | Reduced<U>) => U;
// reduce(f, acc, list)
export function reduce<T, U>(f: (acc: U, elem: T) => U | Reduced<U>, acc: U, list: readonly T[]): U;





/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 * 
 * The value function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to short circuit the iteration.
 * 
 * This function is basically a more general [`groupBy`](#groupBy) function.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link groupBy}, {@link reduce}, {@link reduced}
 *
 * @example
 * ```typescript
 * const groupNames = (acc, {name}) => acc.concat(name)
 * const toGrade = ({score}) =>
 *   score < 65 ? 'F' :
 *   score < 70 ? 'D' :
 *   score < 80 ? 'C' :
 *   score < 90 ? 'B' : 'A'
 * 
 * var students = [
 *   {name: 'Abby', score: 83},
 *   {name: 'Bart', score: 62},
 *   {name: 'Curt', score: 88},
 *   {name: 'Dora', score: 92},
 * ]
 * 
 * reduceBy(groupNames, [], toGrade, students)
 * //=> {"A": ["Dora"], "B": ["Abby", "Curt"], "F": ["Bart"]}
 * ```
 */
export function reduceBy<T, TResult>(
  valueFn: (acc: TResult, elem: T) => TResult,
): _.F.Curry<(a: TResult, b: (elem: T) => string, c: readonly T[]) => { [index: string]: TResult }>;
export function reduceBy<T, TResult>(
  valueFn: (acc: TResult, elem: T) => TResult,
  acc: TResult,
): _.F.Curry<(a: (elem: T) => string, b: readonly T[]) => { [index: string]: TResult }>;
export function reduceBy<T, TResult>(
  valueFn: (acc: TResult, elem: T) => TResult,
  acc: TResult,
  keyFn: (elem: T) => string,
): (list: readonly T[]) => { [index: string]: TResult };
export function reduceBy<T, TResult>(
  valueFn: (acc: TResult, elem: T) => TResult,
  acc: TResult,
  keyFn: (elem: T) => string,
  list: readonly T[],
): { [index: string]: TResult };


/**
 * Returns a value wrapped to indicate that it is the final value of the reduce
 * and transduce functions. The returned value should be considered a black
 * box: the internal structure is not guaranteed to be stable.
 * 
 * This optimization is available to the below functions:
 * - [`reduce`](#reduce)
 * - [`reduceWhile`](#reduceWhile)
 * - [`reduceBy`](#reduceBy)
 * - [`reduceRight`](#reduceRight)
 * - [`transduce`](#transduce)
 *
 * See also {@link reduce}, {@link reduceWhile}, {@link reduceBy}, {@link reduceRight}, {@link transduce}
 *
 * @example
 * ```typescript
 * R.reduce(
 *  (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
 *  [],
 *  [1, 2, 3, 4, 5]) // [1, 2, 3]
 * ```
 */
export function reduced<T>(elem: T): Reduced<T>;


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 * 
 * Similar to [`reduce`](#reduce), except moves through the input list from the
 * right to the left.
 * 
 * The iterator function receives two values: *(value, acc)*, while the arguments'
 * order of `reduce`'s iterator function is *(acc, value)*. `reduceRight` may use [`reduced`](#reduced)
 * to short circuit the iteration.
 * 
 * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduceRight` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
 * 
 * Be cautious of mutating and returning the accumulator. If you reuse it across
 * invocations, it will continue to accumulate onto the same value. The general
 * recommendation is to always return a new value. If you can't do so for
 * performance reasons, then be sure to reinitialize the accumulator on each
 * invocation.
 *
 * See also {@link reduce}, {@link addIndex}, {@link reduced}
 *
 * @example
 * ```typescript
 * R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
 * //    -               -2
 * //   / \              / \
 * //  1   -            1   3
 * //     / \              / \
 * //    2   -     ==>    2  -1
 * //       / \              / \
 * //      3   -            3   4
 * //         / \              / \
 * //        4   0            4   0
 * ```
 */
export function reduceRight<T, TResult>(
  fn: (elem: T, acc: TResult) => TResult,
): (acc: TResult, list: readonly T[]) => TResult;
export function reduceRight<T, TResult>(
  fn: (elem: T, acc: TResult) => TResult,
  acc: TResult,
): (list: readonly T[]) => TResult;
export function reduceRight<T, TResult>(
  fn: (elem: T, acc: TResult) => TResult,
  acc: TResult,
  list: readonly T[],
): TResult;


/**
 * Like [`reduce`](#reduce), `reduceWhile` returns a single item by iterating
 * through the list, successively calling the iterator function. `reduceWhile`
 * also takes a predicate that is evaluated before each step. If the predicate
 * returns `false`, it "short-circuits" the iteration and returns the current
 * value of the accumulator. `reduceWhile` may alternatively be short-circuited
 * via [`reduced`](#reduced).
 *
 * See also {@link reduce}, {@link reduced}
 *
 * @example
 * ```typescript
 * const isOdd = (acc, x) => x % 2 !== 0;
 * const xs = [1, 3, 5, 60, 777, 800];
 * R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
 * 
 * const ys = [2, 4, 6]
 * R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
 * ```
 */
export function reduceWhile<T, TResult>(
  predicate: (acc: TResult, elem: T) => boolean,
): _.F.Curry<(a: (acc: TResult, elem: T) => TResult, b: TResult, c: readonly T[]) => TResult>;
export function reduceWhile<T, TResult>(
  predicate: (acc: TResult, elem: T) => boolean,
  fn: (acc: TResult, elem: T) => TResult,
): _.F.Curry<(a: TResult, b: readonly T[]) => TResult>;
export function reduceWhile<T, TResult>(
  predicate: (acc: TResult, elem: T) => boolean,
  fn: (acc: TResult, elem: T) => TResult,
  acc: TResult,
): (list: readonly T[]) => TResult;
export function reduceWhile<T, TResult>(
  predicate: (acc: TResult, elem: T) => boolean,
  fn: (acc: TResult, elem: T) => TResult,
  acc: TResult,
  list: readonly T[],
): TResult;


/**
 * The complement of [`filter`](#filter).
 * 
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * See also {@link filter}, {@link transduce}, {@link addIndex}
 *
 * @example
 * ```typescript
 * const isOdd = (n) => n % 2 !== 0;
 * 
 * R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 * 
 * R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 * ```
 */
export function reject<A, P extends A>(
  pred: (val: A) => val is P,
): {
  // if we put `Record<string, A>` first, it will actually pic up `A[]` as well
  // so it needs to go first
  <B extends A>(list: readonly B[]): Exclude<B, P>[];
  <B extends A>(dict: Record<string, B>): Record<string, Exclude<B, P>>;
  // but we also want `A[]` to be the default when doing `pipe(reject(fn))`, so it also needs to be last
  <B extends A>(list: readonly B[]): Exclude<B, P>[];
};

// reject(() => boolean)
export function reject<T>(
  pred: (value: T) => boolean,
): <P extends T, C extends readonly P[] | Record<string, P>>(collection: C) => C;

// reject(() => narrow, list) - readonly T[] falls into Record<string T> for some reason, so list needs to come first
export function reject<T, P extends T>(pred: (val: T) => val is P, list: readonly T[]): Exclude<T, P>[];
// reject(() => narrow, dist)
export function reject<T, P extends T>(pred: (val: T) => val is P, dict: Record<string, T>): Record<string, Exclude<T, P>>;
// reject(() => boolean, list | dist) - this case is not expected to be picked up directly
// it is here so operations like `flip(reject)` or `addIndex(reject)` get retained correctly type-wise (or best they can)
export function reject<T, C extends readonly T[] | Record<string, T>>(pred: (value: T) => boolean, collection: C): C;


/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements. _Note that this is not destructive_: it returns a copy of
 * the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * See also {@link without}
 *
 * @example
 * ```typescript
 * R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 * ```
 */
export function remove(start: number): {
  (count: number): <T>(list: readonly T[]) => T[];
  <T>(count: number, list: readonly T[]): T[];
};
export function remove(start: number, count: number): <T>(list: readonly T[]) => T[];
export function remove<T>(start: number, count: number, list: readonly T[]): T[];


/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * See also {@link times}
 *
 * @example
 * ```typescript
 * R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 * 
 * const obj = {};
 * const repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 * repeatedObjs[0] === repeatedObjs[1]; //=> true
 * ```
 */
export function repeat<T>(a: T): (n: number) => T[];
export function repeat<T>(a: T, n: number): T[];


/**
 * Replace a substring or regex match in a string with a replacement.
 * 
 * The first two parameters correspond to the parameters of the
 * `String.prototype.replace()` function, so the second parameter can also be a
 * function.
 *
 * @example
 * ```typescript
 * R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 * R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 * 
 * // Use the "g" (global) flag to replace all occurrences:
 * R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 * ```
 */
export function replace(
  pattern: RegExp | string,
): (replacement: string | ((match: string, ...args: readonly any[]) => string)) => (str: string) => string;
export function replace(
  pattern: RegExp | string,
  replacement: string | ((match: string, ...args: readonly any[]) => string),
): (str: string) => string;
export function replace(
  pattern: RegExp | string,
  replacement: string | ((match: string, ...args: readonly any[]) => string),
  str: string,
): string;


/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @example
 * ```typescript
 * R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 * R.reverse([1, 2]);     //=> [2, 1]
 * R.reverse([1]);        //=> [1]
 * R.reverse([]);         //=> []
 * 
 * R.reverse('abc');      //=> 'cba'
 * R.reverse('ab');       //=> 'ba'
 * R.reverse('a');        //=> 'a'
 * R.reverse('');         //=> ''
 * ```
 */
export function reverse(str: string): string;
export function reverse<T>(list: readonly T[]): T[];


/**
 * Scan is similar to [`reduce`](#reduce), but returns a list of successively
 * reduced values from the left.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link reduce}, {@link mapAccum}
 *
 * @example
 * ```typescript
 * const numbers = [1, 2, 3, 4];
 * const factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
 * ```
 */
export function scan<T, TResult>(fn: (acc: TResult, elem: T) => any): {
  (acc: TResult): (list: readonly T[]) => TResult[]
  (acc: TResult, list: readonly T[]): TResult[]
};
export function scan<T, TResult>(fn: (acc: TResult, elem: T) => any, acc: TResult): (list: readonly T[]) => TResult[];
export function scan<T, TResult>(fn: (acc: TResult, elem: T) => any, acc: TResult, list: readonly T[]): TResult[];


/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * See also {@link view}, {@link over}, {@link lens}, {@link lensIndex}, {@link lensProp}, {@link lensPath}
 *
 * @example
 * ```typescript
 * const xLens = R.lensProp('x');
 * 
 * R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 * R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 * ```
 */
export function set<S, A>(lens: Lens<S, A>): {
  (a: A): (obj: S) => S
  (a: A, obj: S): S
};
export function set<S, A>(lens: Lens<S, A>, a: A): (obj: S) => S;
export function set<S, A>(lens: Lens<S, A>, a: A, obj: S): S;


/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 * 
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @example
 * ```typescript
 * R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 * R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 * R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 * R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 * R.slice(0, 3, 'ramda');                     //=> 'ram'
 * ```
 */
export function slice(a: number): {
  (b: number, list: string): string;
  <T>(b: number, list: readonly T[]): T[];
};
export function slice(
  a: number,
  b: number,
): {
  (list: string): string;
  <T>(list: readonly T[]): T[];
};
export function slice(a: number, b: number, list: string): string;
export function slice<T>(a: number, b: number, list: readonly T[]): T[];


/**
 * Returns a copy of the list, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 *
 * See also {@link ascend}, {@link descend}
 *
 * @example
 * ```typescript
 * const diff = function(a, b) { return a - b; };
 * R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 * ```
 */
export function sort<T>(fn: (a: T, b: T) => number): (list: readonly T[]) => T[];
export function sort<T>(fn: (a: T, b: T) => number, list: readonly T[]): T[];


/**
 * Sorts the list according to the supplied function.
 *
 * @example
 * ```typescript
 * const sortByFirstItem = R.sortBy(R.prop(0));
 * const pairs = [[-1, 1], [-2, 2], [-3, 3]];
 * sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
 * 
 * const sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
 * const alice = {
 *   name: 'ALICE',
 *   age: 101
 * };
 * const bob = {
 *   name: 'Bob',
 *   age: -10
 * };
 * const clara = {
 *   name: 'clara',
 *   age: 314.159
 * };
 * const people = [clara, bob, alice];
 * sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
 * ```
 */
export function sortBy<T>(fn: (a: T) => Ord): (list: readonly T[]) => T[];
export function sortBy(fn: (a: any) => Ord): <T>(list: readonly T[]) => T[];
export function sortBy<T>(fn: (a: T) => Ord, list: readonly T[]): T[];


/**
 * Sorts a list according to a list of comparators.
 *
 * See also {@link ascend}, {@link descend}
 *
 * @example
 * ```typescript
 * const alice = {
 *   name: 'alice',
 *   age: 40
 * };
 * const bob = {
 *   name: 'bob',
 *   age: 30
 * };
 * const clara = {
 *   name: 'clara',
 *   age: 40
 * };
 * const people = [clara, bob, alice];
 * const ageNameSort = R.sortWith([
 *   R.descend(R.prop('age')),
 *   R.ascend(R.prop('name'))
 * ]);
 * ageNameSort(people); //=> [alice, clara, bob]
 * ```
 */
export function sortWith<T>(fns: Array<(a: T, b: T) => number>): (list: readonly T[]) => T[];
export function sortWith<T>(fns: Array<(a: T, b: T) => number>, list: readonly T[]): T[];


/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * See also {@link join}
 *
 * @example
 * ```typescript
 * const pathComponents = R.split('/');
 * R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 * 
 * R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 * ```
 */
export function split(sep: string | RegExp): (str: string) => string[];
export function split(sep: string | RegExp, str: string): string[];


/**
 * Splits a given list or string at a given index.
 *
 * @example
 * ```typescript
 * R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
 * R.splitAt(5, 'hello world');      //=> ['hello', ' world']
 * R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
 * ```
 */
export function splitAt(index: number): {
  <T>(list: readonly T[]): [T[], T[]];
  (list: string): [string, string];
};
export function splitAt<T>(index: number, list: readonly T[]): [T[], T[]];
export function splitAt(index: number, list: string): [string, string];


/**
 * Splits a collection into slices of the specified length.
 *
 * @example
 * ```typescript
 * R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
 * R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
 * ```
 */
export function splitEvery(a: number): {
  (list: string): string[];
  <T>(list: readonly T[]): T[][];
};
export function splitEvery(a: number, list: string): string[];
export function splitEvery<T>(a: number, list: readonly T[]): T[][];


/**
 * Takes a list and a predicate and returns a pair of lists with the following properties:
 * 
 *  - the result of concatenating the two output lists is equivalent to the input list;
 *  - none of the elements of the first output list satisfies the predicate; and
 *  - if the second output list is non-empty, its first element satisfies the predicate.
 *
 * @example
 * ```typescript
 * R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
 * ```
 */
export function splitWhen<T>(pred: (val: T) => boolean): <U extends T>(list: readonly U[]) => [U[], U[]];
export function splitWhen<T>(pred: (val: T) => boolean, list: readonly T[]): [T[], T[]];


/**
 * Splits an array into slices on every occurrence of a value.
 *
 * @example
 * ```typescript
 * R.splitWhenever(R.equals(2), [1, 2, 3, 2, 4, 5, 2, 6, 7]); //=> [[1], [3], [4, 5], [6, 7]]
 * ```
 */
export function splitWhenever<T>(pred: (a: T) => boolean): <U extends T>(list: U[]) => U[][];
export function splitWhenever<T>(pred: (a: T) => boolean, list: T[]): T[][];


/**
 * Checks if a list starts with the provided sublist.
 * 
 * Similarly, checks if a string starts with the provided substring.
 *
 * See also {@link endsWith}
 *
 * @example
 * ```typescript
 * R.startsWith('a', 'abc')                //=> true
 * R.startsWith('b', 'abc')                //=> false
 * R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
 * R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
 * ```
 */
export function startsWith<T>(subList: readonly T[]): (list: readonly T[]) => boolean;
export function startsWith(substr: string): (str: string) => boolean;
export function startsWith<T>(subList: readonly T[], list: readonly T[]): boolean;
export function startsWith(substr: string, str: string): boolean;


/**
 * Subtracts its second argument from its first argument.
 *
 * See also {@link add}
 *
 * @example
 * ```typescript
 * R.subtract(10, 8); //=> 2
 * 
 * const minus5 = R.subtract(R.__, 5);
 * minus5(17); //=> 12
 * 
 * const complementaryAngle = R.subtract(90);
 * complementaryAngle(30); //=> 60
 * complementaryAngle(72); //=> 18
 * ```
 */
export function subtract(a: number): (b: number) => number;
export function subtract(__: Placeholder, b: number): (a: number) => number;
export function subtract(a: number, b: number): number;


/**
 * Adds together all the elements of a list.
 *
 * See also {@link reduce}
 *
 * @example
 * ```typescript
 * R.sum([2,4,6,8,100,1]); //=> 121
 * ```
 */
export function sum(list: readonly number[]): number;


/**
 * Swap an item, at index `indexA` with another item, at index `indexB`, in an object or a list of elements.
 * A new result will be created containing the new elements order.
 *
 * @example
 * ```typescript
 * R.swap(0, 2, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['c', 'b', 'a', 'd', 'e', 'f']
 * R.swap(-1, 0, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['f', 'b', 'c', 'd', 'e', 'a']
 * R.swap('a', 'b', {a: 1, b: 2}); //=> {a: 2, b: 1}
 * R.swap(0, 2, 'foo'); //=> 'oof'
 * ```
 */
export function swap(indexA: number): {
  // swap(indexA)(indexB)(list)
  (indexB: number): <T>(list: readonly T[]) => T[];
  // swap(indexA)(__, list)(indexB)
  <T>(__: Placeholder, list: readonly T[]): (indexB: number) => T[];
  // swap(indexA)(indexB, list)
  <T>(indexB: number, list: readonly T[]): T[];
};

// swap(__, indexB)
export function swap(
  __: Placeholder,
  indexB: number
): {
  // swap(__, indexB)(indexA)(list)
  (indexA: number): <T>(list: readonly T[]) => T[];
  // swap(__, indexB)(__, list)(indexA)
  <T>(__2: Placeholder, list: readonly T[]): (indexA: number) => T[];
  // swap(__, indexB)(indexA, list)
  <T>(indexA: number, list: readonly T[]): T[];
};

// swap(indexA, indexB)(list)
export function swap(indexA: number, indexB: number): <T>(list: readonly T[]) => T[];

// swap(__, __, list)
export function swap<T>(
  __: Placeholder,
  __2: Placeholder,
  list: readonly T[]
): {
  // swap(__, __, list)(indexA)(indexB)
  (indexA: number): (indexB: number) => T[];
  // swap(__, __, list)(__, indexB)(indexA)
  (__3: Placeholder, indexB: number): (indexA: number) => T[];
  // swap(__, __, list)(indexA, indexB)
  (indexA: number, indexB: number): T[];
};

// swap(indexA, __, list)(indexB)
export function swap<T>(
  indexA: number,
  __: Placeholder,
  list: readonly T[]
): (indexB: number) => T[];

// swap(__, indexB, list)(indexA)
export function swap<T>(
  __: Placeholder,
  indexB: number,
  list: readonly T[]
): (indexA: number) => T[];

// swap(indexA, indexB, list)
export function swap<T>(indexA: number, indexB: number, list: readonly T[]): T[];


/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both.
 *
 * See also {@link symmetricDifferenceWith}, {@link difference}, {@link differenceWith}
 *
 * @example
 * ```typescript
 * R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
 * R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
 * ```
 */
export function symmetricDifference<T>(list: readonly T[]): <T>(list: readonly T[]) => T[];
export function symmetricDifference<T>(list1: readonly T[], list2: readonly T[]): T[];


/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both. Duplication is determined according to the value
 * returned by applying the supplied predicate to two list elements.
 *
 * See also {@link symmetricDifference}, {@link difference}, {@link differenceWith}
 *
 * @example
 * ```typescript
 * const eqA = R.eqBy(R.prop('a'));
 * const l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
 * const l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
 * R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
 * ```
 */
export function symmetricDifferenceWith<T>(
  pred: (a: T, b: T) => boolean,
): _.F.Curry<(a: readonly T[], b: readonly T[]) => T[]>;

export function symmetricDifferenceWith<T>(
  pred: (a: T, b: T) => boolean,
  list1: readonly T[],
  list2: readonly T[],
): T[];


/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * See also {@link F}
 *
 * @example
 * ```typescript
 * R.T(); //=> true
 * ```
 */
export function T(...args: unknown[]): true;


/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 * 
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * See also {@link head}, {@link init}, {@link last}
 *
 * @example
 * ```typescript
 * R.tail([1, 2, 3]);  //=> [2, 3]
 * R.tail([1, 2]);     //=> [2]
 * R.tail([1]);        //=> []
 * R.tail([]);         //=> []
 * 
 * R.tail('abc');  //=> 'bc'
 * R.tail('ab');   //=> 'b'
 * R.tail('a');    //=> ''
 * R.tail('');     //=> ''
 * ```
 */
export function tail(list: string): string;
// empty tuple - purposefully `never, They literally have no tail
export function tail(list: readonly []): never;
// length=1 tuples also return `never`. They literally have no tail
export function tail<T>(list: readonly [T]): never;
// non-empty tuples and array
// `infer Rest` only works on types like `readonly [1, '2', 3]` where you will get back `['2', 3]`
// else, if the type is `string[]`, you'll get back `string[]`
export function tail<T extends readonly [...any]>(tuple: T): T extends readonly [any, ...infer Rest] ? Rest : T;


/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 * 
 * Dispatches to the `take` method of the second argument, if present.
 *
 * See also {@link drop}
 *
 * @example
 * ```typescript
 * R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 * R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 * R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 * R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 * R.take(3, 'ramda');               //=> 'ram'
 * 
 * const personnel = [
 *   'Dave Brubeck',
 *   'Paul Desmond',
 *   'Eugene Wright',
 *   'Joe Morello',
 *   'Gerry Mulligan',
 *   'Bob Bates',
 *   'Joe Dodge',
 *   'Ron Crotty'
 * ];
 * 
 * const takeFive = R.take(5);
 * takeFive(personnel);
 * //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * ```
 */
export function take(n: number): {
  (xs: string): string;
  <T>(xs: readonly T[]): T[];
};
export function take(n: number, xs: string): string;
export function take<T>(n: number, xs: readonly T[]): T[];


/**
 * Returns a new list containing the last `n` elements of the given list.
 * If `n > list.length`, returns a list of `list.length` elements.
 *
 * See also {@link dropLast}
 *
 * @example
 * ```typescript
 * R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 * R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 * R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 * R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 * R.takeLast(3, 'ramda');               //=> 'mda'
 * ```
 */
export function takeLast(n: number): {
  (xs: string): string;
  <T>(xs: readonly T[]): T[];
};
export function takeLast<T>(n: number, xs: readonly T[]): T[];
export function takeLast(n: number, xs: string): string;



/**
 * Returns a new list containing the last `n` elements of a given list, passing
 * each value to the supplied predicate function, and terminating when the
 * predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * See also {@link dropLastWhile}, {@link addIndex}
 *
 * @example
 * ```typescript
 * const isNotOne = x => x !== 1;
 * 
 * R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
 * 
 * R.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'
 * ```
 */
export function takeLastWhile<T>(pred: (a: T) => boolean): <T>(list: readonly T[]) => T[];
export function takeLastWhile<T>(pred: (a: T) => boolean, list: readonly T[]): T[];


/**
 * Returns a new list containing the first `n` elements of a given list,
 * passing each value to the supplied predicate function, and terminating when
 * the predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 * 
 * Dispatches to the `takeWhile` method of the second argument, if present.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link dropWhile}, {@link transduce}, {@link addIndex}
 *
 * @example
 * ```typescript
 * const isNotFour = x => x !== 4;
 * 
 * R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
 * 
 * R.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'
 * ```
 */
export function takeWhile<T>(fn: (x: T) => boolean): (list: readonly T[]) => T[];
export function takeWhile<T>(fn: (x: T) => boolean, list: readonly T[]): T[];


/**
 * Runs the given function with the supplied object, then returns the object.
 * 
 * Acts as a transducer if a transformer is given as second parameter.
 *
 * @example
 * ```typescript
 * const sayX = x => console.log('x is ' + x);
 * R.tap(sayX, 100); //=> 100
 * // logs 'x is 100'
 * ```
 */
export function tap<T, R extends T = T>(fn: (a: T) => asserts a is R): (value: T) => R;
export function tap<T>(fn: (a: T) => void): (value: T) => T;
export function tap<T, R extends T = T>(fn: (a: T) => asserts a is R, value: T): R;
export function tap<T>(fn: (a: T) => void, value: T): T;


/**
 * Determines whether a given string matches a given regular expression.
 *
 * See also {@link match}
 *
 * @example
 * ```typescript
 * R.test(/^x/, 'xyz'); //=> true
 * R.test(/^y/, 'xyz'); //=> false
 * ```
 */
export function test(regexp: RegExp): (str: string) => boolean;
export function test(regexp: RegExp, str: string): boolean;


/**
 * Creates a thunk out of a function. A thunk delays a calculation until
 * its result is needed, providing lazy evaluation of arguments.
 *
 * See also {@link partial}, {@link partialRight}
 *
 * @example
 * ```typescript
 * R.thunkify(R.identity)(42)(); //=> 42
 * R.thunkify((a, b) => a + b)(25, 17)(); //=> 42
 * ```
 */
export function thunkify<F extends (...args: readonly any[]) => any>(
  fn: F,
): _.F.Curry<(...args: Parameters<F>) => () => ReturnType<F>>;


/**
 * Calls an input function `n` times, returning an array containing the results
 * of those function calls.
 * 
 * `fn` is passed one argument: The current value of `n`, which begins at `0`
 * and is gradually incremented to `n - 1`.
 *
 * See also {@link repeat}
 *
 * @example
 * ```typescript
 * R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
 * ```
 */
export function times<T>(fn: (i: number) => T): (n: number) => T[];
export function times<T>(fn: (i: number) => T, n: number): T[];


/**
 * The lower case version of a string.
 *
 * See also {@link toUpper}
 *
 * @example
 * ```typescript
 * R.toLower('XYZ'); //=> 'xyz'
 * ```
 */
export function toLower<S extends string>(str: S): Lowercase<S>;
export function toLower(str: string): string;


/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * See also {@link fromPairs}, {@link keys}, {@link values}
 *
 * @example
 * ```typescript
 * R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 * ```
 */
export function toPairs<O extends object>(obj: O): Array<{ [key in keyof O]: [key, O[key]] }[keyof O]>;


/**
 * Converts an object into an array of key, value arrays. The object's own
 * properties and prototype properties are used. Note that the order of the
 * output array is not guaranteed to be consistent across different JS
 * platforms.
 *
 * @example
 * ```typescript
 * const F = function() { this.x = 'X'; };
 * F.prototype.y = 'Y';
 * const f = new F();
 * R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
 * ```
 */
export function toPairsIn<O extends object>(obj: O): Array<{ [key in keyof O]: [key, O[key]] }[keyof O]>;


/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 * 
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 * 
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 * 
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 * 
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @example
 * ```typescript
 * R.toString(42); //=> '42'
 * R.toString('abc'); //=> '"abc"'
 * R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 * R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 * R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 * ```
 */
export function toString(val: unknown): string;


/**
 * The upper case version of a string.
 *
 * See also {@link toLower}
 *
 * @example
 * ```typescript
 * R.toUpper('abc'); //=> 'ABC'
 * ```
 */
export function toUpper<S extends string = string>(str: S): Uppercase<S>;
export function toUpper(str: string): string;


/**
 * Initializes a transducer using supplied iterator function. Returns a single
 * item by iterating through the list, successively calling the transformed
 * iterator function and passing it an accumulator value and the current value
 * from the array, and then passing the result to the next call.
 * 
 * The iterator function receives two values: *(acc, value)*. It will be
 * wrapped as a transformer to initialize the transducer. A transformer can be
 * passed directly in place of an iterator function. In both cases, iteration
 * may be stopped early with the [`R.reduced`](#reduced) function.
 * 
 * A transducer is a function that accepts a transformer and returns a
 * transformer and can be composed directly.
 * 
 * A transformer is an object that provides a 2-arity reducing iterator
 * function, step, 0-arity initial value function, init, and 1-arity result
 * extraction function, result. The step function is used as the iterator
 * function in reduce. The result function is used to convert the final
 * accumulator into the return type and in most cases is
 * [`R.identity`](#identity). The init function can be used to provide an
 * initial accumulator, but is ignored by transduce.
 * 
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the transducer.
 *
 * See also {@link reduce}, {@link reduced}, {@link into}
 *
 * @example
 * ```typescript
 * const numbers = [1, 2, 3, 4];
 * const transducer = R.compose(R.map(R.add(1)), R.take(2));
 * R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 * 
 * const isOdd = (x) => x % 2 !== 0;
 * const firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
 * R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
 * ```
 */
export function transduce<T, U, V>(
  xf: (arg: readonly T[]) => U[],
): (fn: (acc: V, val: U) => V, acc: V, list: readonly T[]) => V;
export function transduce<T, U, V>(
  xf: (arg: readonly T[]) => U[],
  fn: (acc: V, val: U) => V,
): (acc: readonly T[], list: readonly T[]) => V;
export function transduce<T, U, V>(
  xf: (arg: readonly T[]) => U[],
  fn: (acc: V, val: U) => V,
  acc: readonly T[],
): (list: readonly T[]) => V;
export function transduce<T, U, V>(
  xf: (arg: readonly T[]) => U[],
  fn: (acc: V, val: U) => V,
  acc: V,
  list: readonly T[],
): V;


/**
 * Transposes the rows and columns of a 2D list.
 * When passed a list of `n` lists of length `x`,
 * returns a list of `x` lists of length `n`.
 *
 * @example
 * ```typescript
 * R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
 * R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 * 
 * // If some of the rows are shorter than the following rows, their elements are skipped:
 * R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
 * ```
 */
export function transpose<T>(list: readonly T[][]): T[][];


/**
 * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 * 
 * Dispatches to the `traverse` method of the third argument, if present.
 *
 * See also {@link sequence}
 *
 * @example
 * ```typescript
 * // Returns `Maybe.Nothing` if the given divisor is `0`
 * const safeDiv = n => d => d === 0 ? Maybe.Nothing() : Maybe.Just(n / d)
 * 
 * R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Maybe.Just([5, 2.5, 2])
 * R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Maybe.Nothing
 * 
 * // Using a Type Representative
 * R.traverse(Maybe, safeDiv(10), Right(4)); //=> Just(Right(2.5))
 * R.traverse(Maybe, safeDiv(10), Right(0)); //=> Nothing
 * R.traverse(Maybe, safeDiv(10), Left("X")); //=> Just(Left("X"))
 * ```
 */
export function traverse<A, B>(of: (a: B) => B[]): {
  (fn: (t: A) => B[]): (list: readonly A[]) => B[][]
  (fn: (t: A) => B[], list: readonly A[]): B[][]
};
export function traverse<A, B>(of: (a: B) => B[], fn: (t: A) => B[]): (list: readonly A[]) => B[][];
export function traverse<A, B>(of: (a: B) => B[], fn: (t: A) => B[], list: readonly A[]): B[][];


/**
 * Removes (strips) whitespace from both ends of the string.
 *
 * @example
 * ```typescript
 * R.trim('   xyz  '); //=> 'xyz'
 * R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
 * ```
 */
export function trim(str: string): string;


/**
 * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
 * function evaluates the `tryer`; if it does not throw, it simply returns the
 * result. If the `tryer` *does* throw, the returned function evaluates the
 * `catcher` function and returns its result. Note that for effective
 * composition with this function, both the `tryer` and `catcher` functions
 * must return the same type of results.
 *
 * @example
 * ```typescript
 * R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
 * R.tryCatch(() => { throw 'foo'}, R.always('caught'))('bar') // =>
 * 'caught'
 * R.tryCatch(R.times(R.identity), R.always([]))('s') // => []
 * R.tryCatch(() => { throw 'this is not a valid value'}, (err, value)=>({error : err,  value }))('bar') // => {'error': 'this is not a valid value', 'value': 'bar'}
 * ```
 */
export function tryCatch<F extends (...args: readonly any[]) => any>(
  tryer: F,
): <RE = ReturnType<F>, E = unknown>(catcher: (error: E, ...args: _.F.Parameters<F>) => RE) => F | (() => RE);
export function tryCatch<F extends (...args: readonly any[]) => any, RE = ReturnType<F>, E = unknown>(
  tryer: F,
  catcher: (error: E, ...args: _.F.Parameters<F>) => RE,
): F | (() => RE);


/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @example
 * ```typescript
 * R.type({}); //=> "Object"
 * R.type(1); //=> "Number"
 * R.type(false); //=> "Boolean"
 * R.type('s'); //=> "String"
 * R.type(null); //=> "Null"
 * R.type([]); //=> "Array"
 * R.type(/[A-z]/); //=> "RegExp"
 * R.type(() => {}); //=> "Function"
 * R.type(async () => {}); //=> "AsyncFunction"
 * R.type(undefined); //=> "Undefined"
 * ```
 */
export function type(val: any):
| 'Object'
| 'Number'
| 'Boolean'
| 'String'
| 'Null'
| 'Array'
| 'RegExp'
| 'Function'
| 'AsyncFunction'
| 'Undefined'
| 'Symbol'
| 'Error'
| 'Date';


/**
 * Takes a function `fn`, which takes a single array argument, and returns a
 * function which:
 * 
 *   - takes any number of positional arguments;
 *   - passes these arguments to `fn` as an array; and
 *   - returns the result.
 * 
 * In other words, `R.unapply` derives a variadic function from a function which
 * takes an array. `R.unapply` is the inverse of [`R.apply`](#apply).
 *
 * See also {@link apply}
 *
 * @example
 * ```typescript
 * R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
 * ```
 */
export function unapply<T>(fn: (args: readonly any[]) => T): (...args: readonly any[]) => T;


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 1 parameter. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * See also {@link binary}, {@link nAry}
 *
 * @example
 * ```typescript
 * const takesTwoArgs = function(a, b) {
 *   return [a, b];
 * };
 * takesTwoArgs.length; //=> 2
 * takesTwoArgs(1, 2); //=> [1, 2]
 * 
 * const takesOneArg = R.unary(takesTwoArgs);
 * takesOneArg.length; //=> 1
 * // Only 1 argument is passed to the wrapped function
 * takesOneArg(1, 2); //=> [1, undefined]
 * ```
 */
export function unary<T, R>(fn: (a: T, ...args: readonly any[]) => R): (a: T) => R;


/**
 * Returns a function of arity `n` from a (manually) curried function.
 * Note that, the returned function is actually a ramda style
 * curryied function, which can accept one or more arguments in each
 * function calling.
 *
 * See also {@link curry}, {@link curryN}
 *
 * @example
 * ```typescript
 * const addFour = a => b => c => d => a + b + c + d;
 * 
 * const uncurriedAddFour = R.uncurryN(4, addFour);
 * uncurriedAddFour(1, 2, 3, 4); //=> 10
 * ```
 */
export function uncurryN<T>(len: number): (fn: (a: any) => any) => (...args: unknown[]) => T;
export function uncurryN<T>(len: number, fn: (a: any) => any): (...args: unknown[]) => T;


/**
 * Builds a list from a seed value. Accepts an iterator function, which returns
 * either false to stop iteration or an array of length 2 containing the value
 * to add to the resulting list and the seed to be used in the next call to the
 * iterator function.
 * 
 * The iterator function receives one argument: *(seed)*.
 *
 * @example
 * ```typescript
 * const f = n => n > 50 ? false : [-n, n + 10];
 * R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
 * ```
 */
export function unfold<T, TResult>(fn: (seed: T) => [TResult, T] | false): (seed: T) => TResult[];
export function unfold<T, TResult>(fn: (seed: T) => [TResult, T] | false, seed: T): TResult[];


/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list.
 *
 * @example
 * ```typescript
 * R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 * ```
 */
export function union<T>(as: readonly T[]): (bs: readonly T[]) => T[];
export function union<T>(as: readonly T[], bs: readonly T[]): T[];


/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list. Duplication is determined according to the value returned by
 * applying the supplied predicate to two list elements. If an element exists
 * in both lists, the first element from the first list will be used.
 *
 * See also {@link union}
 *
 * @example
 * ```typescript
 * const l1 = [{a: 1}, {a: 2}];
 * const l2 = [{a: 1}, {a: 4}];
 * R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
 * ```
 */
export function unionWith<T>(pred: (a: T, b: T) => boolean): _.F.Curry<(a: readonly T[], b: readonly T[]) => T[]>;
export function unionWith<T>(pred: (a: T, b: T) => boolean, list1: readonly T[], list2: readonly T[]): T[];


/**
 * Returns a new list containing only one copy of each element in the original
 * list. [`R.equals`](#equals) is used to determine equality.
 *
 * @example
 * ```typescript
 * R.uniq([1, 1, 2, 1]); //=> [1, 2]
 * R.uniq([1, '1']);     //=> [1, '1']
 * R.uniq([[42], [42]]); //=> [[42]]
 * ```
 */
export function uniq<T>(list: readonly T[]): T[];


/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. [`R.equals`](#equals) is used for comparison.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * @example
 * ```typescript
 * R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 * ```
 */
export function uniqBy<T, U>(fn: (a: T) => U): (list: readonly T[]) => T[];
export function uniqBy<T, U>(fn: (a: T) => U, list: readonly T[]): T[];


/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied predicate to
 * two list elements. Prefers the first item if two items compare equal based
 * on the predicate.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * @example
 * ```typescript
 * const strEq = R.eqBy(String);
 * R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
 * R.uniqWith(strEq)([{}, {}]);       //=> [{}]
 * R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
 * R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
 * ```
 */
export function uniqWith<T>(pred: (x: T, y: T) => boolean): (list: readonly T[]) => T[];
export function uniqWith<T>(pred: (x: T, y: T) => boolean, list: readonly T[]): T[];



/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the `whenFalseFn` function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 *
 * See also {@link ifElse}, {@link when}, {@link cond}
 *
 * @example
 * ```typescript
 * let safeInc = R.unless(R.isNil, R.inc);
 * safeInc(null); //=> null
 * safeInc(1); //=> 2
 * ```
 */
export function unless<T, U>(pred: (a: T) => boolean, whenFalseFn: (a: T) => U): (a: T) => T | U;
export function unless<T, U>(pred: (a: T) => boolean, whenFalseFn: (a: T) => U, a: T): T | U;


/**
 * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
 * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
 *
 * See also {@link flatten}, {@link chain}
 *
 * @example
 * ```typescript
 * R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
 * R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
 * ```
 */
export function unnest<T extends readonly any[]>(list: T): _.T.UnNest<T>;


/**
 * Takes a predicate, a transformation function, and an initial value,
 * and returns a value of the same type as the initial value.
 * It does so by applying the transformation until the predicate is satisfied,
 * at which point it returns the satisfactory value.
 *
 * @example
 * ```typescript
 * R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
 * ```
 */
export function until<T, U>(pred: (val: T) => boolean, fn: (val: T) => U): (init: U) => U;
export function until<T, U>(pred: (val: T) => boolean, fn: (val: T) => U, init: U): U;


/**
 * Deconstructs an array field from the input documents to output a document for each element.
 * Each output document is the input document with the value of the array field replaced by the element.
 *
 * @example
 * ```typescript
 * R.unwind('hobbies', {
 *   name: 'alice',
 *   hobbies: ['Golf', 'Hacking'],
 *   colors: ['red', 'green'],
 * });
 * // [
 * //   { name: 'alice', hobbies: 'Golf', colors: ['red', 'green'] },
 * //   { name: 'alice', hobbies: 'Hacking', colors: ['red', 'green'] }
 * // ]
 * ```
 */
export function unwind<O extends object>(__: Placeholder, obj: O): {
  <K extends keyof O>(key: K): O[K] extends Array<infer T> ? Array<Omit<O, K> & Record<K, T>> : [O];
};
export function unwind<K extends keyof O, O>(key: K, obj: O): O[K] extends Array<infer T> ? Array<Omit<O, K> & Record<K, T>> : [O];
export function unwind<K extends PropertyKey>(key: K): {
  <O extends Record<K, any>>(obj: O): O[K] extends Array<infer T> ? Array<Omit<O, K> & Record<K, T>> : [O];
};


/**
 * Returns a new copy of the array with the element at the provided index
 * replaced with the given value.
 *
 * See also {@link adjust}
 *
 * @example
 * ```typescript
 * R.update(1, '_', ['a', 'b', 'c']);      //=> ['a', '_', 'c']
 * R.update(-1, '_', ['a', 'b', 'c']);     //=> ['a', 'b', '_']
 * ```
 */
export function update<T>(index: number, value: T): (list: readonly T[]) => T[];
export function update<T>(index: number, value: T, list: readonly T[]): T[];


/**
 * Accepts a function `fn` and a list of transformer functions and returns a
 * new curried function. When the new function is invoked, it calls the
 * function `fn` with parameters consisting of the result of calling each
 * supplied handler on successive arguments to the new function.
 * 
 * If more arguments are passed to the returned function than transformer
 * functions, those arguments are passed directly to `fn` as additional
 * parameters. If you expect additional arguments that don't need to be
 * transformed, although you can ignore them, it's best to pass an identity
 * function so that the new function reports the correct arity.
 *
 * See also {@link converge}
 *
 * @example
 * ```typescript
 * R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
 * R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
 * R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
 * R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
 * ```
 */
export function useWith<
  TArg1,
  TR1,
  TArg2,
  TR2,
  TArg3,
  TR3,
  TArg4,
  TR4,
  TArg5,
  TR5,
  TArg6,
  TR6,
  TArg7,
  TR7,
  TResult,
  RestFunctions extends Array<(...args: any[]) => any>,
  TArgs extends [TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7, ...InputTypesOfFns<RestFunctions>]
>(
  fn: (...args: [TR1, TR2, TR3, TR4, TR5, TR6, TR7, ...ReturnTypesOfFns<RestFunctions>]) => TResult,
  transformers: [
    (arg: TArg1) => TR1,
    (arg: TArg2) => TR2,
    (arg: TArg3) => TR3,
    (arg: TArg4) => TR4,
    (arg: TArg5) => TR5,
    (arg: TArg6) => TR6,
    (arg: TArg7) => TR7,
    ...RestFunctions
  ],
): (...args: TArgs) => TResult;
export function useWith<TArg1, TR1, TArg2, TR2, TArg3, TR3, TArg4, TR4, TArg5, TR5, TArg6, TR6, TArg7, TR7, TResult>(
  fn: (...args: [TR1, TR2, TR3, TR4, TR5, TR6, TR7] & { length: 7 }) => TResult,
  transformers: [
    (arg: TArg1) => TR1,
    (arg: TArg2) => TR2,
    (arg: TArg3) => TR3,
    (arg: TArg4) => TR4,
    (arg: TArg5) => TR5,
    (arg: TArg6) => TR6,
    (arg: TArg7) => TR7
  ],
): (...args: [TArg1, TArg2, TArg3, TArg4, TArg5, TArg7]) => TResult;
export function useWith<TArg1, TR1, TArg2, TR2, TArg3, TR3, TArg4, TR4, TArg5, TR5, TArg6, TR6, TResult>(
  fn: (...args: [TR1, TR2, TR3, TR4, TR5, TR6] & { length: 6 }) => TResult,
  transformers: [
    (arg: TArg1) => TR1,
    (arg: TArg2) => TR2,
    (arg: TArg3) => TR3,
    (arg: TArg4) => TR4,
    (arg: TArg5) => TR5,
    (arg: TArg6) => TR6
  ],
): (...args: [TArg1, TArg2, TArg3, TArg4, TArg5, TArg6]) => TResult;
export function useWith<TArg1, TR1, TArg2, TR2, TArg3, TR3, TArg4, TR4, TArg5, TR5, TResult>(
  fn: (...args: [TR1, TR2, TR3, TR4, TR5] & { length: 5 }) => TResult,
  transformers: [
    (arg: TArg1) => TR1,
    (arg: TArg2) => TR2,
    (arg: TArg3) => TR3,
    (arg: TArg4) => TR4,
    (arg: TArg5) => TR5
  ],
): (...args: [TArg1, TArg2, TArg3, TArg4, TArg5]) => TResult;
export function useWith<TArg1, TR1, TArg2, TR2, TArg3, TR3, TArg4, TR4, TResult>(
  fn: (...args: [TR1, TR2, TR3, TR4] & { length: 4 }) => TResult,
  transformers: [(arg: TArg1) => TR1, (arg: TArg2) => TR2, (arg: TArg3) => TR3, (arg: TArg4) => TR4],
): (...args: [TArg1, TArg2, TArg3, TArg4]) => TResult;
export function useWith<TArg1, TR1, TArg2, TR2, TArg3, TR3, TResult>(
  fn: (...args: [TR1, TR2, TR3] & { length: 3 }) => TResult,
  transformers: [(arg: TArg1) => TR1, (arg: TArg2) => TR2, (arg: TArg3) => TR3],
): (...args: [TArg1, TArg2, TArg3]) => TResult;
export function useWith<TArg1, TR1, TArg2, TR2, TResult>(
  fn: (...args: [TR1, TR2] & { length: 2 }) => TResult,
  transformers: [(arg: TArg1) => TR1, (arg: TArg2) => TR2],
): (...args: [TArg1, TArg2]) => TResult;
export function useWith<TArg1, TR1, TResult>(
  fn: (...args: [TR1]) => TResult,
  transformers: [(arg: TArg1) => TR1],
): (...args: [TArg1]) => TResult;


/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 *
 * See also {@link valuesIn}, {@link keys}, {@link toPairs}
 *
 * @example
 * ```typescript
 * R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 * ```
 */
export function values<T extends object>(obj: T): ValueOfUnion<T>[];


/**
 * Returns a list of all the properties, including prototype properties, of the
 * supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * See also {@link values}, {@link keysIn}
 *
 * @example
 * ```typescript
 * const F = function() { this.x = 'X'; };
 * F.prototype.y = 'Y';
 * const f = new F();
 * R.valuesIn(f); //=> ['X', 'Y']
 * ```
 */
export function valuesIn<T>(obj: any): T[];


/**
 * Returns a "view" of the given data structure, determined by the given lens.
 * The lens's focus determines which portion of the data structure is visible.
 *
 * See also {@link set}, {@link over}, {@link lens}, {@link lensIndex}, {@link lensProp}, {@link lensPath}
 *
 * @example
 * ```typescript
 * const xLens = R.lensProp('x');
 * 
 * R.view(xLens, {x: 1, y: 2});  //=> 1
 * R.view(xLens, {x: 4, y: 2});  //=> 4
 * ```
 */
export function view<S, A>(lens: Lens<S, A>): (obj: S) => A;
export function view<S, A>(lens: Lens<S, A>, obj: S): A;


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the `whenTrueFn` function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 *
 * See also {@link ifElse}, {@link unless}, {@link cond}
 *
 * @example
 * ```typescript
 * // truncate :: String -> String
 * const truncate = R.when(
 *   R.propSatisfies(R.gt(R.__, 10), 'length'),
 *   R.pipe(R.take(10), R.append('…'), R.join(''))
 * );
 * truncate('12345');         //=> '12345'
 * truncate('0123456789ABC'); //=> '0123456789…'
 * ```
 */
export function when<T, U extends T, V>(pred: (a: T) => a is U, whenTrueFn: (a: U) => V): (a: T) => T | V;
export function when<T, U>(pred: (a: T) => boolean, whenTrueFn: (a: T) => U): (a: T) => T | U;
export function when<T, U extends T, V>(pred: (a: T) => a is U, whenTrueFn: (a: U) => V, a: T): T | V;
export function when<T, U>(pred: (a: T) => boolean, whenTrueFn: (a: T) => U, a: T): T | U;


/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 * 
 * `where` is well suited to declaratively expressing constraints for other
 * functions such as [`filter`](#filter) and [`find`](#find).
 *
 * See also {@link propSatisfies}, {@link whereEq}
 *
 * @example
 * ```typescript
 * // pred :: Object -> Boolean
 * const pred = R.where({
 *   a: R.equals('foo'),
 *   b: R.complement(R.equals('bar')),
 *   x: R.gt(R.__, 10),
 *   y: R.lt(R.__, 20)
 * });
 * 
 * pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 * pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 * pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 * pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 * pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 * ```
 */
export function where<T>(spec: T): <U>(testObj: U) => boolean;
export function where<T, U>(spec: T, testObj: U): boolean;


/**
 * Takes a spec object and a test object; each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `whereAny` returns true if at least one of the predicates return true,
 * false otherwise.
 * 
 * `whereAny` is well suited to declaratively expressing constraints for other
 * functions such as [`filter`](#filter) and [`find`](#find).
 *
 * See also {@link propSatisfies}, {@link where}
 *
 * @example
 * ```typescript
 * // pred :: Object -> Boolean
 * const pred = R.whereAny({
 *   a: R.equals('foo'),
 *   b: R.complement(R.equals('xxx')),
 *   x: R.gt(R.__, 10),
 *   y: R.lt(R.__, 20)
 * });
 * 
 * pred({a: 'foo', b: 'xxx', x: 8, y: 34}); //=> true
 * pred({a: 'xxx', b: 'xxx', x: 9, y: 21}); //=> false
 * pred({a: 'bar', b: 'xxx', x: 10, y: 20}); //=> false
 * pred({a: 'foo', b: 'bar', x: 10, y: 20}); //=> true
 * pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> true
 * ```
 */
export function whereAny<Spec extends Record<PropertyKey, (value: any) => boolean>>(spec: Spec): <U extends Record<keyof Spec, any>>(testObj: U) => boolean;
export function whereAny<U>(__: Placeholder, testObj: U): <Spec extends Partial<Record<keyof U, (value: any) => boolean>>>(spec: Spec) => boolean;
export function whereAny<Spec extends Partial<Record<keyof U, (value: any) => boolean>>, U>(spec: Spec, testObj: U): boolean;


/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec, false otherwise. An object satisfies the spec if, for each of the
 * spec's own properties, accessing that property of the object gives the same
 * value (in [`R.equals`](#equals) terms) as accessing that property of the
 * spec.
 * 
 * `whereEq` is a specialization of [`where`](#where).
 *
 * See also {@link propEq}, {@link where}
 *
 * @example
 * ```typescript
 * // pred :: Object -> Boolean
 * const pred = R.whereEq({a: 1, b: 2});
 * 
 * pred({a: 1});              //=> false
 * pred({a: 1, b: 2});        //=> true
 * pred({a: 1, b: 2, c: 3});  //=> true
 * pred({a: 1, b: 1});        //=> false
 * ```
 */
export function whereEq<T>(spec: T): <U>(obj: U) => boolean;
export function whereEq<T, U>(spec: T, obj: U): boolean;


/**
 * Returns a new list without values in the first argument.
 * [`R.equals`](#equals) is used to determine equality.
 * 
 * Acts as a transducer if a transformer is given in list position.
 *
 * See also {@link transduce}, {@link difference}, {@link remove}
 *
 * @example
 * ```typescript
 * R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 * ```
 */
export function without<T>(list1: readonly T[] | readonly unknown[]): (list2: readonly T[]) => T[];
export function without<T>(list1: readonly unknown[], list2: readonly T[]): T[];


/**
 * Exclusive disjunction logical operation.
 * Returns `true` if one of the arguments is truthy and the other is falsy.
 * Otherwise, it returns `false`.
 *
 * See also {@link or}, {@link and}
 *
 * @example
 * ```typescript
 * R.xor(true, true); //=> false
 * R.xor(true, false); //=> true
 * R.xor(false, true); //=> true
 * R.xor(false, false); //=> false
 * ```
 */
export function xor(a: any, b: any): boolean;
export function xor(a: any): (b: any) => boolean;


/**
 * Creates a new list out of the two supplied by creating each possible pair
 * from the lists.
 *
 * @example
 * ```typescript
 * R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * ```
 */
export function xprod<K>(as: readonly K[]): <V>(bs: readonly V[]) => Array<KeyValuePair<K, V>>;
export function xprod<K, V>(as: readonly K[], bs: readonly V[]): Array<KeyValuePair<K, V>>;


/**
 * Creates a new list out of the two supplied by pairing up equally-positioned
 * items from both lists. The returned list is truncated to the length of the
 * shorter of the two input lists.
 * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
 *
 * @example
 * ```typescript
 * R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 * ```
 */
export function zip<K>(list1: readonly K[]): <V>(list2: readonly V[]) => Array<KeyValuePair<K, V>>;
export function zip<K, V>(list1: readonly K[], list2: readonly V[]): Array<KeyValuePair<K, V>>;


/**
 * Creates a new object out of a list of keys and a list of values.
 * Key/value pairing is truncated to the length of the shorter of the two lists.
 * Note: `zipObj` is equivalent to `pipe(zip, fromPairs)`.
 *
 * @example
 * ```typescript
 * R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
 * ```
 */
export function zipObj<K extends PropertyKey>(keys: readonly K[]): <T>(values: readonly T[]) => { [P in K]: T };
export function zipObj<T, K extends PropertyKey>(keys: readonly K[], values: readonly T[]): { [P in K]: T };



/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 *
 * @example
 * ```typescript
 * const f = (x, y) => {
 *   // ...
 * };
 * R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 * //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 * ```
 */
export function zipWith<T, U, TResult>(
  fn: (x: T, y: U) => TResult,
): (list1: readonly T[], list2: readonly U[]) => TResult[];
export function zipWith<T, U, TResult>(
  fn: (x: T, y: U) => TResult,
  list1: readonly T[],
): (list2: readonly U[]) => TResult[];
export function zipWith<T, U, TResult>(
  fn: (x: T, y: U) => TResult,
  list1: readonly T[],
  list2: readonly U[],
): TResult[];



export * from './deepModify';
export * from './tools';
export as namespace R;