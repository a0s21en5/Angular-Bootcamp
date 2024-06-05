# Angular

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
>
>* ```npm install -g @angular/cli```
>* ```npm install -g @angular/cli@latest```

>* -g indicates global.
>* @latest is specifies to install the latest verion of angular CLI.

# Check Version of Angular version

```ng version```

# Check Version of NVM version

```nvm -v```
```nvm install latest```
nvm ls

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

# to install particular angular version

* npm install -g @angular/cli@12.2

# Uninstall Angular CLI

npm uninstall -g @angular/cli

# Clear Cache

npm cache clean --force
npm cache verify

ng version

-------------------------------

|ANGULAR|  NODE.JS    |
|------------------------------
|12.2.0| 14.20    |
--------------------------------
