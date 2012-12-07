'use strict';

/* Controllers */

function LoginController($scope, $location) {
	$scope.flashMessages = [];
	$scope.email = '';
	$scope.password = '';

	$scope.login = function() {
		if ($scope.email == 'example@example.com' && $scope.password == 'example') {
			$location.path('/projects');
		} else {
			$scope._flashMessage('Invalid user or password');
		}
	}

	$scope._flashMessage = function(message) {
		if ($scope.flashMessages.indexOf(message) === -1) {
			$scope.flashMessages.push(message);
		}
	}
}
LoginController.$inject = ['$scope', '$location'];

function ProjectsController($scope) {

}
ProjectsController.$inject = ['$scope'];