import angular from 'angular';
import uiRouter from 'angular-ui-router';

import homeController from './home.controller.js';
import './home.scss';

const module = angular.module('appName.components.home', [
    uiRouter,
]);

module.config(['$stateProvider', ($stateProvider) => {
    $stateProvider
        .state('home', {
            url: '/',
            title: 'Home',
            templateUrl: './components/home/home.html',
            controller: homeController,
            controllerAs: 'vm',
        });
}]);

module.controller('HomeController', homeController);

export default module.name;
