// xFapp.factory('apiFactory', function($http) {
	// var factory = {};
	// factory.getGit = function() {
		// return $http.get('https://api.github.com/users/x-formation/repos');
	// }
	// factory.getXForm = function() {
		// return $http.get('./json/data.json');
	// }
	// return factory;
// });

xFapp.service('myService', function($http) {

	this.getGit = function() {
		return $http.get('https://api.github.com/users/x-formation/repos');
	}
	this.getXForm = function() {
		return $http.get('./json/data.json');
	}
});