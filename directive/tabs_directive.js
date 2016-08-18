xFapp.directive("tabList", function() {
  return {
    templateUrl: "directive/tabs.html",
	scope: {tabs: "="}
  };
});

xFapp.directive('activeTab', function ($location) {
  return {
    link: function postLink(scope, element, attrs) {
      scope.$on("$routeChangeSuccess", function (event, current, previous) {
		  if (("#"+$location.path()).indexOf(element.attr("href")) >= 0) {
			element.parent().addClass("active");//parent to get the <li>
		  } else {
			element.parent().removeClass("active");
		  }
      });
    }
  };
});