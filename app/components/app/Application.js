import angular from 'angular';
import About from './components/About/About.js';
import Features from './components/Features/Features.js';
/**
 * Application skeleton component
 */
export default angular.module('application', [])
  .component('app', {
      template: `
        <div class="skeleton-app">
          <h1>Welcome ! This is Skeleton ES6 Angular Application</h1>
          <a ng-link="['About']">About</a>
          <a ng-link="['Features']">Features</a>
          <ng-outlet></ng-outlet>
        </div>
      `,
      $routeConfig: require('./routes') 
  })
  .component('about', About)
  .component('features', Features)
