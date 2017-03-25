var app = angular.module("crumbs",['ui.router']);

app.config([ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: './pages/home.html',
      controller: 'CrumbsBodyCtrl'
    });

  $urlRouterProvider.otherwise('home');

} ]);

app.controller("CrumbsBodyCtrl", [ '$scope', function($scope){

    $scope.title = "Crumbs Of Family Trips";

}]);

app.directive("appHeader", function() { 
    return { 
        restrict: "E", 
        templateUrl: "shared/header.html"
    }; 
});

app.directive("appFooter", function() { 
    return { 
        restrict: "E", 
        templateUrl: "shared/footer.html"
    }; 
});