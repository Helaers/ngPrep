import angular from 'angular';
import uiRouter from 'angular-ui-router';

import homeController from './home.controller.js';
import './home.scss';

const module = angular.module('ngPrep.components.home', [
    uiRouter,
]);


module.config(['$stateProvider', ($stateProvider) => {
    $stateProvider
        .state('home', {
            url: '/',
            //title: 'Resumes',
            templateUrl: './components/home/home.html',
            controller: homeController,
            controllerAs: 'vm',
            //role: ['admin', 'publisher', 'editor'],
        });
}]);

module.controller('HomeController', homeController);


export default module.name;
