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

# Check Version of NVM version
```nvm -v```
```nvm install latest```

# use a specific version at any point
```nvm use version_name```

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