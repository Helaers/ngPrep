import angular from 'angular';

//import folders
import directives from './directives';

const module = angular.module('appName.common', [
    directives,
]);

export default module.name;
