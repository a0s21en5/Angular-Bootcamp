# Angular Installation Guide

## Prerequisites

Before installing Angular, ensure you have the following:

- **Node.js**: Angular requires a current, active LTS or maintenance LTS version of Node.js and NPM.

## Check Node.js Version

To check the version of Node.js installed on your system, run the following command in your terminal:

```bash
node -v
```

## Updating NPM for Angular

Angular requires NPM version or later. To check the current NPM version, run the following command in your terminal:

```bash
npm install -g npm
```

## Check the NPM version

```bash
npm -v
```

## Install Angular CLI

Angular provides many libraries and packages for application development. You can install libraries required for your application using Angular CLI (Command Line Interface). Angular CLI is also used to generate, build, run, and deploy Angular applications.

To install the Angular CLI globally using npm, use one of the following commands:

- `npm install -g @angular/cli`
- `npm install -g @angular/cli@latest`

The `-g` flag indicates that the package should be installed globally, making it available as a command-line tool. Adding `@latest` specifies to install the latest version of Angular CLI.

## Check Angular Version

To check the version of Angular installed, use the following command:

```bash
ng version
```

## Install a Specific Angular Version

To install a specific version of Angular, you can use npm and specify the version you want to install.

```bash
npm install -g @angular/cli@12.2
```

## Uninstall Angular CLI

To uninstall Angular CLI globally, run the following command in your terminal:

```bash
npm uninstall -g @angular/cli
```

## Clear Cache

```bash
npm cache clean --force
npm cache verify
```

## Check and Manage NVM Version

To check the version of Node Version Manager (NVM) installed:

```bash
nvm -v
```

## To install the latest version of Node.js using NVM

```bash
nvm install latest
```

## To list all installed Node.js versions

```bash
nvm ls
```

## To use a specific Node.js version at any point

```bash
nvm use <version_name>
```

## To create a new Angular application

```bash
ng new <project_name>
```

## To build and serve the Angular application

```bash
To build and serve the Angular application:
```

## Powershell execution policy

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```
