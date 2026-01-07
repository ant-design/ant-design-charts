<div align="center">

<h1>@antv/expr: Mathematical Expression Parser</h1>

Lightweight JavaScript expression parser and evaluator, safety and high-performance. 🚀

![gzip size](https://img.badgesize.io/https://unpkg.com/@antv/expr/dist/index.esm.js?compression=gzip)
[![Build Status](https://github.com/antvis/expr/actions/workflows/build.yml/badge.svg)](https://github.com/antvis/expr/actions/workflows/build.yml)
[![npm Version](https://img.shields.io/npm/v/@antv/expr.svg)](https://www.npmjs.com/package/@antv/expr)
[![npm Download](https://img.shields.io/npm/dm/@antv/expr.svg)](https://www.npmjs.com/package/@antv/expr)

</div>

Used to parse a _mathematical expressions_ to _JavaScript function_ safely. For example, in [@antv/g2](https://github.com/antvis/expr), we can set the style with an expressions.

```ts
{
  // Equivalent to function: `d => d.value > 100 ? 'red' : 'green'`
  fill: "{ d.value > 100 ? 'red' : 'green' }",
}
```


## ✨ Features

- 🔒 **Secure by default** - No access to global objects or prototype chain, does not use `eval` or `new Function`.
- 🚀 **High performance** - Supports pre-compilation of expressions for improved performance with repeated evaluations.
- 🛠️ **Extensible** - Register custom functions to easily extend functionality.
- 🪩 **Lightweight** - Zero dependencies, small footprint, before gzip it was less than `8 Kb`.


## 📥 Installation

```bash
npm install @antv/expr
# or
yarn add @antv/expr
# or
pnpm add @antv/expr
```


## 🔨 Usage

- [Synchronous Expression Evaluation](#synchronous-expression-evaluation)
- [Pre-compiling Expressions](#pre-compiling-expressions)
- [Registering and Calling Functions](#registering-and-calling-functions)
- [Variable References](#variable-references)
- [Arithmetic Operations](#arithmetic-operations)
- [Comparison and Logical Operations](#comparison-and-logical-operations)
- [Conditional (Ternary) Expressions](#conditional-ternary-expressions)
- [Timeout Handling](#timeout-handling)

### Synchronous Expression Evaluation

```typescript
import { evaluate } from '@antv/expr';

// Basic evaluation
const result = evaluate('x + y', { x: 10, y: 20 }); // returns 30

// Using dot notation and array access
const data = {
  values: [1, 2, 3],
  status: 'active'
};

const result = evaluate('data.values[0] + data.values[1]', { data }); // returns 3
```

### Pre-compiling Expressions

```typescript
import { compile } from '@antv/expr';

// Compile an expression
const evaluator = compile('price * quantity');
const result1 = evaluator({ price: 10, quantity: 5 }); // returns 50
const result2 = evaluator({ price: 20, quantity: 3 }); // returns 60
```

### Registering and Calling Functions

```typescript
import { register, evaluate } from '@antv/expr';

// Register functions
register('formatCurrency', (amount) => `$${amount.toFixed(2)}`);

// Function call with arguments
const result = evaluate('@max(a, b, c)', { a: 5, b: 9, c: 2 }); // returns 9

// Expression as function arguments
const result = evaluate('@formatCurrency(price * quantity)', { 
  price: 10.5, quantity: 3 
}); // returns '$31.50'
```
Build-in Functions: `abs`, `ceil`, `floor`, `round`, `sqrt`, `pow`, `max`, `min`.

### Variable References

```typescript
// Simple variable reference
const result = evaluate('x', { x: 42 }); // returns 42

// Nested property access with dot notation
const result = evaluate('user.profile.name', { 
  user: { profile: { name: 'John' } } 
}); // returns 'John'

// Array access with bracket notation
const result = evaluate('items[0]', { items: [10, 20, 30] }); // returns 10

// Mixed dot and bracket notation
const result = evaluate('data.items[0].value', { 
  data: { items: [{ value: 42 }] } 
}); // returns 42
```

### Arithmetic Operations

```typescript
// Basic arithmetic
const result = evaluate('a + b * c', { a: 5, b: 3, c: 2 }); // returns 11

// Using parentheses for grouping
const result = evaluate('(a + b) * c', { a: 5, b: 3, c: 2 }); // returns 16

// Modulo operation
const result = evaluate('a % b', { a: 10, b: 3 }); // returns 1
```

### Comparison and Logical Operations

```typescript
// Comparison operators
const result = evaluate('age >= 18', { age: 20 }); // returns true

// Logical AND
const result = evaluate('isActive && !isDeleted', { 
  isActive: true, isDeleted: false 
}); // returns true

// Logical OR
const result = evaluate('status === "active" || status === "pending"', { 
  status: 'pending' 
}); // returns true
```

### Conditional (Ternary) Expressions

```typescript
// Simple ternary expression
const result = evaluate('age >= 18 ? "adult" : "minor"', { 
  age: 20 
}); // returns 'adult'

// Nested ternary expressions
const result = evaluate('score >= 90 ? "A" : score >= 80 ? "B" : "C"', { 
  score: 85 
}); // returns 'B'
```

### Timeout Handling

You can implement timeout handling by wrapping your evaluation in a `Promise.race` with a timeout:

```typescript
import { evaluate } from "@antv/expr";

// Create a function that evaluates with a timeout
function evaluateWithTimeout(expr, context, timeoutMs) {
  const evaluationPromise = new Promise((resolve) => {
    resolve(evaluate(expr, context));
  });

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(
      () => reject(new Error(`Evaluation timed out after ${timeoutMs}ms`)),
      timeoutMs,
    );
  });

  return Promise.race([evaluationPromise, timeoutPromise]);
}
```


## 🚀Benchmarks

Performance comparison of different evaluation methods: (baseline: new Function)

| Expression Type       | new Function vs evaluate after compile | new Function vs evaluate without compile | new Function vs [expr-eval](https://www.npmjs.com/package/expr-eval?activeTab=readme) Parser |
|-----------------------|----------------------------------------|------------------------------------------|----------------------------------|
| Simple Expressions    | 1.59x faster                          | 6.36x faster                             | 23.94x faster                    |
| Medium Expressions    | 2.16x faster                          | 9.81x faster                            | 37.81x faster                    |
| Complex Expressions   | 1.59x faster                          | 4.89x faster                             | 32.74x faster                    |

```mermaid
gantt
    title Performance Comparison (Baseline: new Function) * 100
    dateFormat  X
    axisFormat %s

    section Simple
    expr evaluate after compile    :done, 0, 159
    expr evaluate without compile  :done, 0, 636
    expr-eval Parser          :done, 0, 2394

    section Medium
    expr evaluate after compile    :done, 0, 216
    expr evaluate without compile  :done, 0, 981
    expr-eval Parser          :done, 0, 3781

    section Complex
    expr evaluate after compile    :done, 0, 159
    expr evaluate without compile  :done, 0, 489
    expr-eval Parser          :done, 0, 3274
```


## 📮API Reference

#### `evaluate(expression: string, context?: object): any`

Synchronously evaluates an expression and returns the result.

- `expression`: The expression string to evaluate
- `context`: An object containing variables used in the expression (optional)
- Returns: The result of the expression evaluation

#### `compile(expression: string): (context?: object) => any`

Synchronously compiles an expression, returning a function that can be used multiple times.

- `expression`: The expression string to compile
- Returns: A function that accepts a context object and returns the evaluation result

#### `register(name: string, fn: Function): void`

Registers a custom function that can be used in expressions.

- `name`: Function name (used with @ prefix in expressions)
- `fn`: Function implementation

All evaluation errors throw an `ExpressionError` type exception with detailed error information.


## License

MIT
