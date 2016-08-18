xFapp.controller("XFormCtrl", function($scope, myService, $route)  {
	myService.getXForm().then(function(response){
		$scope.users1 = response.data;
	});
	 $scope.$route = $route;
});
