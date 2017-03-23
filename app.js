var app = angular.module("crumbs",['ui.router']);

app.config([ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: './pages/home.html'
    });

  $urlRouterProvider.otherwise('home');

} ]);

app.controller("CrumbsBodyCtrl", [ '$scope', function($scope){

    $scope.title = "Crumbs Of Family Trips";

}]);