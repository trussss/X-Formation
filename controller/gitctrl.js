xFapp.controller("gitCtrl", function($scope, myService, $route)  {
	myService.getGit().then(function(response){
		$scope.users2 = response.data;
	});
});
