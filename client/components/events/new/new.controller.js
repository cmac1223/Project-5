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
    vm.event.time = Date.parse(vm.event.time);
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

  vm.addUser = function(user) {
    if (vm.selectedUsers.indexOf(user) === -1) {
      vm.selectedUsers.push(user);
    }
  }

}
export default newEventController;