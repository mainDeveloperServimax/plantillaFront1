# ServimaxAdmin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## deploy google cloud
https://medium.com/gdgcloudsantiago/creaci%C3%B3n-de-proyecto-base-en-angular-6-y-despliegue-en-google-cloud-app-engine-adb6d398774f

https://dev.to/askudhay/step-by-step-guide-to-deploy-ngular-app-to-google-app-engine-46hl

clonar en terminal google 
dirigirse a la carpeta y desplegar ng build --prod 
si falla instalar la dependecia
npm install -g @angular/cli  pendiente de dejarlo en docker

correr proyecto
gcloud app deploy

gcloud app deploy --project=[Project Id]
