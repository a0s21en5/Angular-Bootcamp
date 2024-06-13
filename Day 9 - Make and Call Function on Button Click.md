# Make and Call Function

## Define Function

To define a function in Angular, you can create a method within a component class. For example:

```typescript
export class MyComponent {
  // Define the function with parameters
  myFunction(param1: string, param2: number) {
    // Function logic here
  }
}
```

## Call Function on Button Click

To call the function when a button is clicked, you can use the (click) event binding in your HTML template. For example:

```html
<button (click)="myFunction('Hello', 123)">Click me</button>
```

## Params in function

The function can accept parameters for customization. In the example above, myFunction accepts two parameters: param1 of type string and param2 of type number. You can customize these parameters based on your application's requirements.

```typescript
export class MyComponent {
  myFunction(param1: string, param2: number) {
    // Function logic here, using param1 and param2
  }
}
```
