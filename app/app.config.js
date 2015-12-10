import angular from 'angular';

angular
    .module('ngPrep')
    .config(routing);

routing.$inject = ['$urlRouterProvider'];
function routing($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}
