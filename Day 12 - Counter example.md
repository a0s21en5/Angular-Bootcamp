# Angular Counter Example

## Instructions

1. Create a new Angular component named `CounterComponent`.
2. Implement a simple counter with increment and decrement buttons.
3. Display the current count in an `<h1>` tag.
4. Define a TypeScript function to handle the increment and decrement operations.

## Implementation

### HTML Template (`counter.component.html`)

```html
<button (click)="incCounter('Add')">++</button>

<br />
<br />
<h1>{{ displayCounter }}</h1>
<br />
<br />

<button (click)="incCounter('Sub')">--</button>
```

### Ts Template (`counter.component.ts`)

```typescript
count: number = 0;
  displayCounter: number = 0;
  incCounter(value: string) {
    value === 'Add' ? this.count++ : this.count--;
    this.displayCounter = this.count;
  }
```
