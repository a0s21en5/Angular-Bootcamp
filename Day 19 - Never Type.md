# Understanding the `never` Type in TypeScript

The `never` type in TypeScript represents the type of values that never occur. It is primarily used in two scenarios:

1. **Functions that never return:**
   Functions that either throw errors or loop infinitely without ever returning have a return type of `never`. This indicates that such functions never complete execution normally.

2. **Variables under type guards:**
   Variables that are narrowed by type guards to have no possible values (for instance, in exhaustiveness checks) are inferred as having the `never` type.

## Differences from `void`

- **`void`:** Represents the absence of any specific type. Functions with a `void` return type can return `undefined` or `null`.
  
- **`never`:** Represents a type that has no values at all. Functions with a `never` return type never finish executing normally (due to an error or an infinite loop).

## Example Usage

```typescript
// Function that throws an error
function error(message: string): never {
    throw new Error(message);
}

// Function with infinite loop
function infiniteLoop(): never {
    while (true) {
        // do something forever
    }
}

// Type guard narrowing a variable to never
function checkNever(x: string | number): string {
    if (typeof x === "string") {
        return x;
    } else {
        // Type of x here is never because it can't be a number
        return x; // Error: Type 'number' is not assignable to type 'string'.
    }
}
```

## Summary

The `never` type is used to denote functions that never complete normally or variables that cannot have any value at all after type narrowing. It is distinct from `void`, which signifies functions that return `undefined` or `null`.
