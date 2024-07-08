# Creating a Basic Form in Angular

Angular provides powerful features for creating forms that handle user input efficiently. Below are the steps to create a simple form, retrieve its values, and display them.

## Import Form Module

First, ensure you have imported the necessary Angular FormsModule in your AppModule to enable form functionality:

```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ]
})
export class AppModule { }
```

## Create a Simple Form

In your component's template (e.g., app.component.html), define a basic form using Angular's template-driven approach:

```html
<form #basicForm="ngForm" (ngSubmit)="getValue(basicForm.value)">
  <label for="email">Enter Your Email:</label>
  <input type="email" id="email" name="email" placeholder="Enter Your Email" ngModel>
  <br><br>

  <label for="password">Enter Your Password:</label>
  <input type="password" id="password" name="password" placeholder="Enter Your Password" ngModel>
  <br><br>

  <button type="submit">Submit</button>
</form>


<ul *ngIf="display">
  <li>{{assignValue.email}}</li>
  <li>{{assignValue.password}}</li>
</ul>
```

## Get Form Value

In your component class (e.g., app.component.ts), define the onSubmit method to handle form submission and retrieve form values:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';

  display: boolean = false;

  assignValue: any = {};

  getValue(data: any) {
    console.log(data);
    this.assignValue = data;
    this.display = true;
  }
}
```
