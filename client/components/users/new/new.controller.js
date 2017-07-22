newUserController.$inject = ["$stateParams", "$http", "usersService", "$state", "$auth"];

function newUserController($stateParams, $http, usersService, $state, $auth){
  const vm = this;
  vm.user = {};

  vm.saveUser = function (){
    $auth.submitRegistration(vm.user)
        .then(function(resp) {
          console.log(resp);
          $state.go("home");
        })
        .catch(function(resp) {
          console.error(`Something went wrong: `, resp)
        });
  };
}
export default newUserController;