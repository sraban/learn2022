# MyProjectOne

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



######################## Chat GPT: Searches ############################################

how to include other styles varilables in angular style.scsss
Proper Folder structure for the icon, fonts and global scss, bootstrap in angular project -- 
custom _icon.scss
custom _fonts.scss

what is the need of a typings.d.ts
Run linting tools (e.g., TSLint or ESLint) to catch potential issues. for fixing the code
Prettier set up in angular
tslint fix set up in angular
install angular project steps
set the css media functions for different screen size -- @media()
install jest and ng test with snapshot configure in angular project
Switching Between Jasmine and Jest in Angular:
asyncaWait() in jest angular
        https://www.digitalocean.com/community/tutorials/angular-testing-async-fakeasync
do $npm run verify  which should verify the eslint and test spec and prettify or use husky for auto verify
########################################################################################################################


------------------------------------------------------------------------------------------------------------
-- Coding Standards/ CheckLists while writing code --
------------------------------------------------------------------------------------------------------------
.use of PascalCase, camelCase, kebab-case, SNAKE_CASE naming conventions
.Keep services focused on a single responsibility.
.Suffix names with "****.service.ts", "****.page.ts", "****.component.ts", "****.mock.ts", .....
.Use project prefix for component selectors like <skp-modal-dialog/>
.dependency injection system to inject services where needed
.use onPushStrategy/ use this.cdr if required
.Use encapsulation strategies (ViewEncapsulation) wisely based on component requirements
.Unsubscribe from observables to avoid memory leaks
.Use operators like switchMap and mergeMap to avoid nested subscriptions
.Write self-explanatory code, proper name for members/methods(verbs), use CONST_DATA, readonly, private, public for members in component
.reduce the if else conditions(use ternary, ??, :?, ?., ..., &&, |, & in oneline for data manipulation)
.Write unit tests for components, services, directive and other Angular constructs, Snapshot Test for ngRx Store(Marble Test for Observables)
.Keep templates clean by avoiding complex logic. Move logic to the component class
.Avoid using the : any type unless absolutely necessary. Provide explicit type definitions for variables, parameters, and return types
.for each unit Module keep the folders: container/componet/service/model/mock/constant/directive/
.use new Map() for structure the complex data, handle switch case in new Map() to select the key value
.use <ng-container *ngTemplateOutlet/> for switch case/nested condition in component html
.Document important aspects of the code(logic)
.Place each component in its own file
.not to use ::ng-deep in scss for styling the elements, instead use :host, :host-context()
.do `$npm run verify` before commit  which should verify the `eslint` and `test.spec` and `prettify`
   use .husky to verify on commit of the code
.`$npm audit` for checking the js vunerability in packages
.$git squash all commits into one if multiple commits done
----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

