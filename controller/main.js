var xFapp = angular.module('xFapp',['ngRoute']);

xFapp.controller("XFormCtrl", function($scope, myService)  {
	myService.getXForm().then(function(response){
		$scope.users1 = response.data;
	});
});

xFapp.controller("gitCtrl", function($scope, myService)  {
	myService.getGit().then(function(response){
		$scope.users2 = response.data;
	});
});

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