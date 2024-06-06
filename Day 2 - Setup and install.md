# Setting up Angular Development Environment

## Installing Node.js and npm

1. Visit the [official Node.js website](https://nodejs.org/).
2. Download the appropriate installer for your operating system (Windows, macOS, Linux).
3. Run the installer and follow the installation instructions.
4. Once installed, open a terminal or command prompt.
5. Verify the installation by typing the following commands:

    ```bash
    node -v
    npm -v
    ```

    This should print out the versions of Node.js and npm installed on your system.

## Installing Angular CLI

1. With Node.js and npm installed, you can now install Angular CLI.
2. Open a terminal or command prompt.
3. Type the following command:

    ```bash
    npm install -g @angular/cli
    ```

    This will install Angular CLI globally on your system.
4. Verify the installation by typing:

    ```bash
    ng version
    ```

    This should print out the version of Angular CLI installed.

## Creating Your First Angular App

1. Open a terminal or command prompt.
2. Navigate to the directory where you want to create your Angular project.
3. Type the following command to create a new Angular project:

    ```bash
    ng new my-first-app
    ```

    Replace `my-first-app` with the name of your app.
4. Angular CLI will prompt you to choose various options for your project (such as routing and stylesheet format). You can choose the defaults or customize as needed.
5. Once the project is created, navigate into the project directory:

    ```bash
    cd my-first-app
    ```

6. To serve the application locally, type:

    ```bash
    ng serve
    ```

    This will compile your Angular app and serve it at `http://localhost:4200/`.

Congratulations! You've successfully installed Node.js, npm, Angular CLI, and
