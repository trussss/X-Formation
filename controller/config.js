var xFapp = angular.module('xFapp',['ngRoute']);

xFapp.config(function($routeProvider) {
  $routeProvider

  .when('/contributors', {
    templateUrl : 'views/contributors.html',
    controller  : 'XFormCtrl'
  })
  .when('/xFormation', {
    templateUrl : 'views/xFormation.html',
    controller  : 'gitCtrl'
  })  
  .otherwise({redirectTo: '/contributors'});
});