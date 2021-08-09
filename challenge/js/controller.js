// controller logic
angular.module('starter.controllers', [])
  .controller('HomeCtrl', function ($scope, Restaurants) {
    $scope.restaurants = Restaurants.all();
    console.log($scope.restaurants);
  })
  .controller('DetailsCtrl', function ($scope, $stateParams, Restaurants) {
    $scope.restId = $stateParams.id;
    $scope.restaurant = Restaurants.getById($scope.restId)[0];
    console.log('Detail View; ', $scope.restId);
    console.log($scope.restaurant);
  });