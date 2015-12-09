import angular from 'angular';

angular
    .module('appName')
    .config(routing);

routing.$inject = ['$urlRouterProvider'];
function routing($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}
