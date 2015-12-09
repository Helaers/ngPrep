//controller
HomeController.$inject = [];
function HomeController() {

    const vm = this;

    // variables
    vm.title = 'This is home';

    activate();

    /////////

    function activate() {
        console.log('this is the home controller');
    }

}
