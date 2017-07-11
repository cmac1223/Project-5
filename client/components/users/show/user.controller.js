UserController.$inject = ["$stateParams", "usersService","$state"];

function UserController($stateParams, usersService, $state){
  const vm = this;

  activate();

  function activate(){
    console.log('in the controller');
    usersService.getUser($stateParams.id).then(response =>{
      vm.user = response.user;
    });
  }
   vm.deleteUser = function (userIdToDeleteFromDatabase) {
        console.log(userIdToDeleteFromDatabase)
        usersService.deleteIdFromDatabase(userIdToDeleteFromDatabase)
            .then(
                function success(response) {
                  $state.go("home");
                })
               .catch( function failure(response) {
                    
                    console.log('Error deleting User with ID of ' + userIdToDeleteFromDatabase);
                })
    }
}

export default UserController;