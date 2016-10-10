import angular from 'angular';
import FeaturesController from './FeaturesController';

import './features.scss';

const Features = {
  template: `
    <h1>Features</h1>
    <p class="features" ng-repeat="feature in $ctrl.features">{{feature}}</p>
  `,
  controller: FeaturesController,
  bindings: {
    $router: '<'
  }
};

export default Features;