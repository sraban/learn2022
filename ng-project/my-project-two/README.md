# MyProjectTwo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



#########@Sraban: About Installation of Jest in Angular
"ng": "ng",
"start": "ng serve",
"build": "ng build",
"watch": "ng build --watch --configuration development",
"test": "jest -c ./jest.config.js ./src",
"test:watch": "jest -c ./jest.config.js ./src --watch",
"test:coverage": "jest -c ./jest.config.js ./src --coverage"


=========================================================
1. npm uninstall karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter

2. npm install jest @types/jest jest-junit jest-preset-angular ts-jest --save-dev --force

3. Add polyfills.ts, setupJest.ts in /src/

4. Remove test object from angular.json

5. Update scripts in package.json as below

6. Delete karma.conf.js

7. Create and update jest.config.js at root level of project

8. Delete test.ts

9. Create and update setupJest.ts in src folder($npx ts-jest config:init)

10. Update tsconfig.json and tsconfig.spec.json

11. npm run test