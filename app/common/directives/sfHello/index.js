import angular from 'angular';
import { sfHelloDirective } from './sfHello.directive';

const module = angular.module('ngPrep.common.directives.sfHelloDirective', []);

module.directive('sfHello', sfHelloDirective);

export default module.name;
