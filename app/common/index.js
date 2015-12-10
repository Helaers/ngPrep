import angular from 'angular';

//import folders
import directives from './directives';

const module = angular.module('ngPrep.common', [
    directives,
]);

export default module.name;
