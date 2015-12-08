import sfHello from './sfHello/sf-hello';

//module.exports = function (ngModule) {
export default ngModule => {
    //require('./sf-hello')(ngModule);
    sfHello(ngModule);
};
