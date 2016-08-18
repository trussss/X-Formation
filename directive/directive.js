xFapp.directive("userLists", function() {
  return {
    templateUrl: "directive/userlist.html",
	scope: {userData: "=", attr: "="},
	link: function($scope) {			
		$scope.order = "-"+$scope.attr[0];
		$scope.sortOrder = function(type){
			if($scope.order != type){
				$scope.order = type;
			}else{
				$scope.order = "-"+type;
			}
		}
	}
  };
});