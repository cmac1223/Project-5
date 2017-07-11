NewUserController.$inject = ["$stateParams", "$http", "usersService", "$state"];

function NewUserController($stateParams, $http, usersService, $state){
  const vm = this;
  vm.user = {};

  vm.saveUser = function (){
    usersService.saveUser(vm.user).then((response) =>{
      console.log(response);
      $state.go("home");
    });
  };
}
export default NewUserController;