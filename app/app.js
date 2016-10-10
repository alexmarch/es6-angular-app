import angular from 'angular';
import '@angular/router/angular1/angular_1_router';
import './components/app/Application';

/**
 * Skeleton Application
 */
const app = angular.module('app', ['ngComponentRouter', 'application']);
/**
 * Configure Application
 */
app.config(($locationProvider)=>{
  $locationProvider.html5Mode(true);
})
.value('$routerRootComponent', 'app');
/**
 * Bootstrap Application
 */
(()=>{ angular.bootstrap(document, ['app'], {strictDi: true}); })();

