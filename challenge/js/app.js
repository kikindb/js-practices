//bootstrap app
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusNar) {
        statusbar.styleDefault();
      }
    })
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      })
      .state('details', {
        url: "/details/:id",
        templateUrl: 'templates/details.html',
        controller: 'DetailsCtrl'
      });
    $urlRouterProvider
      .otherwise('/');
  });