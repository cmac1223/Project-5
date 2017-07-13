UsersController.$inject = ["usersService"];

function UsersController(usersService) {
  const vm = this;

  activate();

  function activate() {
    usersService.getUsers().then(response => {
      vm.users = response;
      console.log(response);
    });
  }
}
export default UsersController;