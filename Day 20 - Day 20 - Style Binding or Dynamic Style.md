# Style Binding or Dynamic Style

## 1. What is Style Binding?

Style binding in web development refers to the technique of dynamically applying CSS styles to elements based on certain conditions or variables. It allows for the manipulation of an element's style properties directly from the component's logic or data.

## 2. Apply Style Binding

To apply style binding in a framework like Angular or Vue.js, you typically use syntax that binds CSS properties to component data or expressions. For example, in Angular, you might use `[style.property]` or `[ngStyle]` directives to bind styles dynamically.

## 3. Update Style on Button Click

To update styles on a button click event, you would define a method or function in your component that modifies the style properties based on the event. This function can toggle classes, update inline styles, or modify CSS variables as needed.

Example (Angular):

```html
<button (click)="toggleStyle()">Toggle Style</button>
<div [style.color]="isActive ? 'blue' : 'red'">Dynamic Text Color</div>
```

```typescript
isActive: boolean = false;

toggleStyle() {
  this.isActive = !this.isActive;
}
```

## 4. Apply Two Style Bindings

Applying multiple style bindings involves binding more than one CSS property to different data variables or expressions. This allows for comprehensive control over an element's appearance based on various conditions or states.

```html
<div [style.width.px]="width" [style.height.px]="height"></div>
```
