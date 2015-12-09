import angular from 'angular';

//import directives
import sfHello from './sfHello';

const module = angular.module('appName.common.directives', [
    sfHello,
]);

export default module.name;
