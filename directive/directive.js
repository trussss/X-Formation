xFapp.directive("userLists", function() {
  return {
    templateUrl: "directive/userlist.html",
	scope: {userData: "=", attr: "="},
	link: function($scope, element) {			
		$scope.order = "-"+$scope.attr[0];
		$scope.currentType =  $scope.attr[0];
		
		$scope.sortOrder = function(type){
		var prevType = $scope.currentType;
		$scope.currentType = type;
			if($scope.order == "-"+ $scope.currentType || prevType!=type)
				$scope.order = $scope.currentType;
			else
				$scope.order = "-"+ $scope.currentType;	
		}
	}
  };
});

xFapp.directive('arrowState', function () {
  return {
    link: function($scope, element) {      
		element.addClass("orderNameDown");
      }
    };
});