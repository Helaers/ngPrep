import template from './sf-hello.html';
import './sf-hello.scss';
//import testFile from './sf-hello.spec';

export default ngModule => {

    //if (ON_TEST) {
    //    //testFile(ngModule);
    //    require('./sf-hello.spec')(ngModule);
    //}


    ngModule.directive('sfHello', function () {
        return {
            restrict: 'E',
            scope: {},
            template: template,
            controllerAs: 'vm',
            controller: function () {
                const vm = this;

                vm.message = 'Hello Sfen';
            },
        };
    });
};
