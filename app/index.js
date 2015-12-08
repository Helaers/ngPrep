const angular = require('angular');

if (ON_TEST) {
    require('angular-mocks/angular-mocks');
}

const ngModule = angular.module('app', []);

import directives from './directives';

//require('./directives')(ngModule);

directives(ngModule);

// ES6 test
//function print() {
//    const status = 'working';
//    const message = 'ES6';
//    console.log(`${message} is ${status}`);
//}
//print();
