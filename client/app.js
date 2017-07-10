const angular = require('angular');
require('angular-cookie');
require('ng-token-auth');

require("angular-ui-router");
angular
  .module('ArtistApp', ['ui.router', 'ng-token-auth'])
  .config(function($authProvider) {
    $authProvider.configure({
      apiUrl: '/'
    });
  }).config(router);

router.$inject = ["$stateProvider", "$urlRouterProvider"];

function router ($stateProvider, $urlRouterProvider){
  console.log("In the router!")
  $stateProvider
  .state("home", {
    url: "/",
    template: "<artist-users></artist-users>"
  })
  .state("user", {
    url: "/user/:id",
    template: "<artist-user></artist-user>"
  })

  $urlRouterProvider.otherwise("/");
}