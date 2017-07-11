UsersController.$inject = ["usersService"];

function UsersController(usersService) {
  const vm = this;

  activate();

  function activate() {
    usersService.getUsers().then(Response =>{
      vm.users = Response;
      console.log(Response);
    });
  }
}
export default UsersController;