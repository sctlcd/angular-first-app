# [Angular First App - Tell me a joke](https://sctlcd-angular-first-app.web.app/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.3.

[Tell me a joke - live website](https://sctlcd-angular-first-app.web.app/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Deployment

### Deployment – Run Locally

1. Prerequisite:  
    In order to run an Angular project, you must have a Node JS development environment set up in your system. If you don’t have Node JS setup in your system then follow this link to `[Set up Node JS Development Environment](https://nodejs.org/en/download/)
    
    Install Angular CLI (Ignore if Angular CLI is already installed.)
    ```
    npm install -g @angular/cli 
    ```

2. Click on the repository called [Angular First App - Tell me a joke](https://github.com/sctlcd/angular-first-app_tell-me-a-joke)
3. Along the top bar, find the “clone or download” button.
4. Here you have the option to clone by HTTPS or SSH.
5. Once you have chose your desired option, then click the copy icon next to the URL.
6. Open Git Bash.
7. Ensure you are in the correct directory which you want to copy the code into. If not, change the directory.
8. In the terminal, write $ git clone https://github.com/sctlcd/angular-first-app_tell-me-a-joke.git
9. Press the enter button and your clone will be created.

### Deployment - Live Website

[Tell me a joke - live website](https://sctlcd-angular-first-app.web.app/) is currently deployed on [Firebase](https://firebase.google.com/) using the master branch on GitHub. Once you have the project setup locally, you can proceed to deploy it remotely.

1. Setup Basic Angular Project

    1.1. Create a fresh new Angular project using Angular CLI
    ````
    ng new angular-firebase-app
    ````
    1.2. Get into the project folder by using the following command.
    ````
    cd angular-firebase-app
    ````
    1.3. See the new Angular project
    ````
    ng serve --open
    ````
2. Create Firebase Account to Deploy Angular Application
    Go to [Firebase website](https://firebase.google.com/) login using your email id. Click on the Add project button and create a Firebase app.

3. Install the Firebase Tools using Firebase CLI
    
    Setup Firebase tools globally by the following command
    ````
    npm install -g firebase-tools

    ````

4. Login and Initialize Firebase project using Firebase CLI

    4.1. Login to Firebase project.
    ````
    firebase login
    ````
    4.2. Initialize your Firebase project
    ````
    firebase init
    ````
    4.3. The Firebase CLI will display the following properties:  
    - Database: Deploy Firebase Real-time Database Rules
    - Firestore: Deploy rules and create indexes for Firestore
    - Functions: Configure and deploy Cloud Functions
    - Hosting: Configure and deploy Firebase Hosting sites
    - Storage: Deploy Cloud Storage security rules

    4.1. Select one or more features from the list.

    4.2 Firebase CLI will ask you a few questions, here are the answers to the corresponding questions.

    - Which Firebase CLI features do you want to set up for this folder?
    <br>Press space to select required feature then enters to confirm your choices.
    - Select a default Firebase project for this directory:
    <br>Select whichever app you have created.
    - What file should be used for Database Rules? (database.rules.json)
    <br>Press enter to continue with database.rules.json
    - What do you want to use as your public directory? (public)
    <br> dist/your-project-name

        This is a very important step, Angular creates the dist/your-project-name folder where all your compiled files go. To get your project name go to your-project-folder > package.json file, copy your app name
    - Configure as a single-page app (rewrite all URLs to /index.html)?(Y/N)
    <br> y

5. Create Production Build using the Ahead-of-Time (AOT) Compilation ( Ahead-of-Time: AOT compiles your app at build time, Best used for Production Build )

    Create production build using AOT compilation
    ````
    ng build --prod --aot
    ````

    ````dist > your-project-name```` contains your project’s all compiled files

6. Deploy your Angular App to Firebase Hosting

    Using Firebase CLI deploy the Angular app to Firebase hosting
    ````
    firebase deploy 
    ````
    Once the app is deployed you’ll get your Angular Firebase app’s Hosting URL

    Copy the Hosting URL and check your project running on the Firebase server.

7. Congratulations! Your prject is deployed on Firebase Server

    Your app is deployed on Firebase server and it’s working fine now, you can access Firebase configuration from the following command.
    ````
    firebase open
    ````
