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
	$scope.projects = [
		{'name': 'MI-NUR', 'numberOfMembers': 4, 'numberOfTasks': 15, 'id': 1, showOptions: false},
		{'name': 'MI-PAA', 'numberOfMembers': 1, 'numberOfTasks': 3, 'id': 2, showOptions: false}
	];
}
ProjectsController.$inject = ['$scope'];

function ProjectSettingsController($scope) {
	$scope.project = {
		'name': 'MI-NUR'
	}

	$scope.reallyWantToDelete = false;
	$scope.showConfirmModal = false;

	$scope.delete = function() {
		if ($scope.reallyWantToDelete) {
			$scope.showConfirmModal = true;
		}
	}

	$scope.hideConfirm = function() {
		$scope.showConfirmModal = false;
	}

}
ProjectSettingsController.$inject = ['$scope'];

function ProjectMembersController($scope) {
	$scope.project = {
		'name': 'MI-NUR'
	}

	$scope.members = [
		{'firstName': 'Jan', 'lastName': 'Machala', 'email': 'jan.machala@example.com', 'role': 'member'}
	];
}
ProjectMembersController.$inject = ['$scope'];