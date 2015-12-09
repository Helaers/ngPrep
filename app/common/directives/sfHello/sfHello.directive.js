//import html & css
import template from './sfHello.directive.html';
import './sfHello.directive.scss';

//controller
EditableBookDirectiveController.$inject = [];
function EditableBookDirectiveController() {

    const vm = this;

    // variables
    vm.message = 'Hello Sfen';

    activate();

    /////////

    function activate() {

    }

}

//directive
export const sfHelloDirective = function () {
    return {
        restrict: 'E',
        template: template,
        controller: sfHelloDirective,
        replace: true,
        controllerAs: 'vm',
        scope: {},
    };
};


sfHelloDirective.$inject = [];
