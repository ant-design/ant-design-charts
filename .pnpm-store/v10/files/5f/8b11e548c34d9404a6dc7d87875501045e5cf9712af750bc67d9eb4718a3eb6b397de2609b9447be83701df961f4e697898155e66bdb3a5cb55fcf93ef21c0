/* eslint-disable @typescript-eslint/ban-types */

import type {Node, Parent} from 'unist'

type MatchesOne<Value, Check> =
  // Is this a node?
  Value extends Node
    ? // No test.
      Check extends null
      ? Value
      : // No test.
      Check extends undefined
      ? Value
      : // Function test.
      Check extends Function
      ? Check extends (value: any) => value is infer Inferred
        ? Value extends Inferred
          ? Value
          : null
        : // This test function isn’t a type predicate.
          Value | null
      : // String (type) test.
      Value['type'] extends Check
      ? Value extends {type: Check}
        ? Value
        : Value | null
      : // Partial test.
      Value extends Check
      ? Value
      : null
    : null

export type Matches<Value, Check> =
  // Is this a list?
  Check extends any[]
    ? MatchesOne<Value, Check[keyof Check]>
    : MatchesOne<Value, Check>

/* eslint-enable @typescript-eslint/ban-types */
