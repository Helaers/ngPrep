//controller
HomeController.$inject = ['$log'];
function HomeController($log) {

    const vm = this;

    // variables
    vm.title = 'This is home';

    activate();

    /////////

    function activate() {

    }

}

export default HomeController;
