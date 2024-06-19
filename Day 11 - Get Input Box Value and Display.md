# Get Input Box Value and Display

- Make Input Box.
- Get Value on from function.
- Display Value on Screen.
- Get Value With Button Click.

```html
<!-- app.component.html -->

<input type="text" placeholder="Enter Your Name" [(ngModel)]="inputValue" />

<button (click)="getValue()">Submit</button>

<h1>{{ assignValue }}</h1>
```

```typescript
// app.component.ts
  inputValue: string = ''; // Property to bind to input field
  assignValue: string = ''; // Property to display assigned value

  getValue() {
    this.assignValue = this.inputValue;
  }
```
