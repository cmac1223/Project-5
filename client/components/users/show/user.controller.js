UserController.$inject = ["$stateParams", "usersService"];

function UserController($stateParams, usersService){
  const vm = this;

  activate();

  function activate(){
    usersService.getUser($stateParams.id).then(response =>{
      vm.user = response.user;
    });
  }
}

export default UserController;