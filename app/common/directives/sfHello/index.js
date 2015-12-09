import angular from 'angular';
import { sfHelloDirective } from './sfHello.directive';

const module = angular.module('app.common.directives.sfHelloDirective', []);

module.directive('sfHello', sfHelloDirective);

export default module.name;
