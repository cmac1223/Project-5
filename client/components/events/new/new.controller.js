newEventController.$inject = ["$stateParams", "$http", "eventsService", "usersService", "$state"];

function newEventController($stateParams, $http, eventsService, usersService, $state){
  const vm = this;
  vm.event = {};
  vm.users = [];
  vm.selectedUsers = [];
  
  activate();

  function activate() {
    usersService.getUsers()
      .then(function(res) {
        vm.users = res;
      })
  }

  vm.saveEvent = function (){
    eventsService.saveEvent(vm.event, vm.selectedUsers)
      .then(function(resp) {
        console.log(resp);
        $state.go("home");
      })
      .catch(function(resp) {
        console.error(`Something went wrong: `, resp)
      });
  };

  vm.dropdown = function() {
    $('.dropdown-button').dropdown('open');
    console.log('dropdown');
  }

}
export default newEventController;