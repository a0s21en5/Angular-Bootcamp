# Toggle Element in Angular

## 1. Create HTML Element and Button

First, create an HTML element (e.g., `<div>`) that you want to toggle, and a button that triggers the toggle.

```html
<button (click)="toggle()">Toggle</button>

<div *ngIf="isHidden">Toggle me!</div>
```

## 2. Define and Apply Property

In your Angular component TypeScript file (app.component.ts for example), define a property (isHidden in this case) and apply it to control the visibility of the HTML element.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHidden: boolean = true;

  toggle() {
    this.isHidden = !this.isHidden;
  }
}
```
