# The-Complete-Angular-Bootcamp

# Install Angular
Angular requires a current, active LTS or maintenance LTS version of Node.js and NPM.

# Check Version of Node.js
```node -v```

# Update NPM
Angular requires NPM or later. Check the NPM version
> ```npm -v```

if you don't have the latest version of NPM, then update
> ```npm install -g npm```

# Install Angular CLI
Angular provides many libraries and packages for application development. You can install libraries required for your application using Angular CLI (Command Line Interface). Angular CLI is also used to generate, build, run, and deploy Angular application.

install the Angular CLI globally using NPM
>* ```npm install -g @angular/cli```
>* ```npm install -g @angular/cli@latest```

>* -g indicates global.
>* @latest is specifies to install the latest verion of angular CLI.

# Check Version of Angular version
```ng version```

# Use command to see all the CLI commands
```ng help```

# Note
Angular CLI use Package.json in your application to install all the necessary libraries and packages for your application, including the required Angular framework libraries.

# Create Angular Application
```
ng new <project name>
```

> To open this project in VS Code, navigate to the project folder in the terminal/command window and type
```
code .
```

# Run Angular Application

Use Angular CLI command to build an application. The -o indicates to open it automatically in the default browser.
> ```ng serve -o```

>* Angular has MVC Based Architecture for application development.
>* we can use it with NPM and without NPM 

> File Structure
> * package.json
> Dependencies, Dev-Dependencies

> * node_module
> * src
> * environments
> * assets
> * index.html
> * style.css
> * main.ts
> * app
> * modules
> * components

# Interpolation in Angular
Interpolation is used for one-way data binding in Angular.
Interpolation refers to embedding expressions into marked up text. By default, interpolation uses the double curly braces {{ and }} as delimiters.
>* ```currentCustomer = 'Maria';```

>* ```<h3>Current customer: {{ currentCustomer }}</h3>```
Angular replaces currentCustomer with the string value of the corresponding component property. In this case, the value is Maria.

>* ```<p>{{title}}</p>```
>* ```<div><img alt="item" src="{{itemImageUrl}}"></div>```

# Angular Components
Angular is a SPA(Single Page Applications) framework, and a view is made of one or more component. An Angular component represents a portion of a view.

an interactive web page is made of HTML, CSS, and JavaScript. Angular component is no different.

Angular Component = HTML Template + Component Class + Component Metadata

>### HTML Template
>* HTML template is nothing but a regular HTML code with additional Angular specific syntax to communicate with the component class.

>### Class
>* a component class is a TypeScript class that includes properties and methods. Properties store data and methods include the logic for the component. Eventually, this class will be compiled into JavaScript.

>### Metadata
>* Metadata is some extra data for a component used by Angular API to execute the component, such as the location of HTML and CSS files of the component, selector, providers, etc.

> ### Generate Angular Component using Angular CLI
>```ng generate component <component name>```

> selector	
>* The component's CSS element selector.

>templateUrl	
>* The location of the component's template file.

>styleUrls	
>* The location of the component's private CSS styles.

# Module
module is a mechanism to group ***components***, ***directives***, ***pipes*** and ***services*** that are related.
```
  ng generate module <module name>
```
# Service
```
  ng generate service <service Name>
```
# Events in Angular

> Click
>* The click event is triggered when a user clicks on an element. It can be used to handle button clicks, link clicks, or any other element that supports the click event.
```
<button (click)="handleButtonClick()">Click me</button>
```

```
handleButtonClick() {
  // Handle the button click event here
}
```

> Keyup
>* The keyup event is triggered when a user releases a key on the keyboard. It can be used to perform actions based on the key that was released.

```
<input (keyup)="handleKeyUp($event)">
```

```
handleKeyUp(event: KeyboardEvent) {
  // Handle the keyup event here
  console.log(event.key);
}
```

> Keyup with enter and space
>* To specifically handle the keyup event with the Enter key or the Spacebar, you can use additional conditions in the event handler.
```
<input (keyup.enter)="handleEnterKey()">
<input (keyup.space)="handleSpaceKey()">

```

```
handleEnterKey() {
  // Handle the Enter keyup event here
}

handleSpaceKey() {
  // Handle the Space keyup event here
}
```

> Keydown
>* The keydown event is triggered when a user presses a key on the keyboard. It can be used to perform actions while a key is being held down.
```
<input (keydown)="handleKeyDown($event)">
```

```
handleKeyDown(event: KeyboardEvent) {
  // Handle the keydown event here
}
```



> Blur
>* The blur event is triggered when an element loses focus. It can be used to perform actions when a user moves away from an input field or any other focusable element.
```
<input (blur)="handleBlur()">
```

```
handleBlur() {
  // Handle the blur event here
}
```


> Mouseover and Mouseleave
>* The mouseover event is triggered when a user moves the mouse over an element, and the mouseleave event is triggered when the mouse moves away from the element.
```
<div (mouseover)="handleMouseOver()" (mouseleave)="handleMouseLeave()"></div>
```

```
handleMouseOver() {
  // Handle the mouseover event here
}

handleMouseLeave() {
  // Handle the mouseleave event here
}
```


> Get Values on Textbox
>* To retrieve the value of a textbox or input field, you can use the ngModel directive with two-way binding or access the element's value using Angular's ViewChild decorator.
```
<input [(ngModel)]="inputValue">
<button (click)="handleButtonClick()">Get Value</button>
```

```
inputValue: string;

handleButtonClick() {
  console.log(this.inputValue);
}
```