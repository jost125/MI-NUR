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

function ProjectAddController($scope) {

}
ProjectAddController.$inject = ['$scope'];

function ProjectDetailController($scope) {

	$scope.boxes = {
		'done': {
			'show': false
		},
		'current': {
			'show': true
		},
		'backlog': {
			'show': true
		},
		'icebox': {
			'show': true
		},
		'deadlines': {
			'show': false
		},
		'mywork': {
			'show': false
		}
	};

	$scope.span = 4;

	$scope.tasks = {
		'done': [
		],
		'current': [
			{'name': 'Complete prototype'},
			{'name': 'Write backend for logging'},
			{'name': 'Write essay'},
			{'name': 'CSS are optimized for chrome'},
			{'name': 'CSS are optimized for firefox'},
			{'name': 'CSS are optimized for ie'},
			{'name': 'Scrollbar are desiged in boxes'}
		],
		'icebox': [
			{'name': 'Design is resposive'}
		],
		'backlog': [
		]
	};

	$scope.taskDifficulties = [1, 2, 3, 5, 8, 13];

	$scope.users = [
		'Jan Machala'
	];

	$scope.taskTypes = [
		'Issue'
	];

	$scope.showAddTaskModal = false;

	$scope.showAddTask = function() {
		$scope.showAddTaskModal = true;
	}

	$scope.hideAddTask = function() {
		$scope.showAddTaskModal = false;
	}

	$scope.addTask = function(task) {
		$scope.tasks.icebox.push({'name': task.name});
		$scope.hideAddTask();
	}

	$scope.showDone = function() {
		$scope.boxes.done.show = !$scope.boxes.done.show;
	}

	$scope.showCurrent = function() {
		$scope.boxes.current.show = !$scope.boxes.current.show;
	}

	$scope.showBacklog = function() {
		$scope.boxes.backlog.show = !$scope.boxes.backlog.show;
	}

	$scope.showIcebox = function() {
		$scope.boxes.icebox.show = !$scope.boxes.icebox.show;
	}

	$scope.showDeadlines = function() {
		$scope.boxes.deadlines.show = !$scope.boxes.deadlines.show;
	}

	$scope.showMywork = function() {
		$scope.boxes.mywork.show = !$scope.boxes.mywork.show;
	}

	$scope.getHeight = function() {
		return $(window).height();
	};

	$scope.$watch($scope.getHeight, function(newValue, oldValue) {
		var viewHeight = newValue - angular.element('.projectMenu').height() - angular.element('.mainMenu').height() - 40;
		angular.element('.taskBox').height(viewHeight);
		angular.element('.tasks').height(viewHeight - 30);
	});

	$scope.$watch('tasks', function(newValue, oldValue) {
		console.log(newValue);
		console.log(oldValue);
	}, true);

	$scope.$watch('boxes', function(newValue, oldValue) {
		var shown = 0;
		for (var boxName in $scope.boxes) {
			if ($scope.boxes[boxName].show === true) {
				if (shown === 0) {
					angular.element('.' + boxName + 'Box').css('margin-left', 0);
				} else {
					angular.element('.' + boxName + 'Box').css('margin-left', 34);
				}
				shown++;
			} else {
			}
		}
		$scope.span = shown >= 3 ? 4 : 12 / shown;
	}, true);

	window.onresize = function() {
		$scope.$apply();
	}
}
ProjectDetailController.$inject = ['$scope'];