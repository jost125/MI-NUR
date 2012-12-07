'use strict';

/* Controllers */

function LoginController($scope, $location, $cookieStore) {
	$scope.flashMessages = [];
	$scope.email = '';
	$scope.password = '';

	$scope.login = function() {
		if ($scope.email == 'example@example.com' && $scope.password == 'example') {
			$cookieStore.put('loginHash', 123);
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
LoginController.$inject = ['$scope', '$location', '$cookieStore'];

function LogoutController($scope, $cookieStore, $location) {
	$scope.logout = function() {
		$cookieStore.remove('loginHash');
		$location.path('/login');
	}
}

LogoutController.$inject = ['$scope', '$cookieStore', '$location'];

function ProjectsController($scope) {

}

ProjectsController.$inject = ['$scope'];
