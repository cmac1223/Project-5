const angular = require('angular');
require('angular-cookie');
require('ng-token-auth');
require("angular-ui-router");

angular
  .module('ArtistApp', ['ui.router', 'ng-token-auth', 'ipCookie'])
  .config(function($authProvider) {
    $authProvider.configure({
      apiUrl: '/api'
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
  .state("newUser", {
    url: "/user/new",
    template: "<artist-new-user></artist-new-user>"
  });

  $urlRouterProvider.otherwise("/");
}