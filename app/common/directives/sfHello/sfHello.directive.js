//import html & css
import template from './sfHello.directive.htm';
import './sfHello.directive.scss';

//controller
sfHelloDirectiveController.$inject = [];
function sfHelloDirectiveController() {

    const vm = this;

    // variables
    vm.message = 'Hello Sfen';

    activate();

    /////////

    function activate() {
        //throw new Error('this is a test error')
    }

}

//directive
export const sfHelloDirective = function () {
    return {
        restrict: 'E',
        template: template,
        controller: sfHelloDirectiveController,
        replace: true,
        controllerAs: 'vm',
        scope: {},
    };
};


sfHelloDirective.$inject = [];
