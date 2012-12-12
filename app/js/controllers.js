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
	};

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
	};

	$scope.reallyWantToDelete = false;
	$scope.showConfirmModal = false;

	$scope.delete = function() {
		if ($scope.reallyWantToDelete) {
			$scope.showConfirmModal = true;
		}
	};

	$scope.hideConfirm = function() {
		$scope.showConfirmModal = false;
	};

}
ProjectSettingsController.$inject = ['$scope'];

function ProjectMembersController($scope) {
	$scope.project = {
		'name': 'MI-NUR'
	};

	$scope.members = [
		{'firstName': 'Jan', 'lastName': 'Machala', 'email': 'jan.machala@example.com', 'role': 'member'}
	];
}
ProjectMembersController.$inject = ['$scope'];

function ProjectAddController() {

}
ProjectAddController.$inject = [];

function ProjectDetailController($scope, $rootScope) {

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
		},
		'search': {
			'show': false
		}
	};

	$scope.lastId = 12;

	$scope.span = 4;

	$scope.currentIteration = 3;

	$scope.tasks = {
		'done': [
			{'name': 'Complete lowfi prototype', 'type': 'Issue', assigneeInicials: null, assignee: null, nextAction: null, state: 'Finished', difficulty: 1, expand: false, id: 1, comments: [], deadline: null, taskCategory: 'done'},
			{'name': 'Complete hifi prototype', 'type': 'Issue', assigneeInicials: null, assignee: null, nextAction: null, state: 'Finished', difficulty: 1, expand: false, id: 11, comments: [], deadline: null, taskCategory: 'done'}
		],
		'current': [
			{'name': 'Write backend for logging', 'type': 'Issue', assigneeInicials: null, assignee: null, nextAction: 'Start', state: 'New', difficulty: 1, expand: false, id: 2, comments: [], deadline: null, taskCategory: 'current'},
			{'name': 'Write essay', 'type': 'Issue', assigneeInicials: null, assignee: null, nextAction: 'Start', state: 'New', difficulty: 1, expand: false, id: 3, comments: [], deadline: null, taskCategory: 'current'},
			{'name': 'CSS are optimized for chrome', 'type': 'Issue', assigneeInicials: null, assignee: null, nextAction: 'Start', state: 'New', difficulty: 1, expand: false, id: 4, deadline: new Date(2012, 12, 12), taskCategory: 'current', comments: [
				{
					text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
					author: 'Jan Machala'
				},
				{
					text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
					author: 'Jan Machala'
				}
			]},
			{'name': 'CSS are optimized for firefox', 'type': 'Issue', assigneeInicials: null, assignee: null, nextAction: 'Start', state: 'New', difficulty: 1, expand: false, id: 5, comments: [], deadline: null, taskCategory: 'current'},
			{'name': 'CSS are optimized for ie', 'type': 'Issue', assigneeInicials: null, assignee: null, nextAction: 'Start', state: 'New', difficulty: 1, expand: false, id: 6, comments: [], deadline: null, taskCategory: 'current'},
			{'name': 'Scrollbar are desiged in boxes', 'type': 'Bug', assigneeInicials: 'JM', assignee: 'Jan Machala', nextAction: 'Start', state: 'New', difficulty: 13, expand: false, id: 7, comments: [], deadline: new Date(2012, 12, 20), taskCategory: 'current'}
		],
		'icebox': [
			{'name': 'Design is resposive', 'type': 'Issue', assigneeInicials: 'JM', assignee: 'Jan Machala', nextAction: 'Start', state: 'New', difficulty: 1, expand: false, id: 8, comments: [], deadline: null, taskCategory: 'icebox'}
		],
		'backlog': [
			{'name': 'CSS are optimized for ie', 'type': 'Issue', assigneeInicials: null, assignee: null, nextAction: 'Start', state: 'New', difficulty: 1, expand: false, id: 9, comments: [], deadline: null, taskCategory: 'backlog'},
			{'name': 'Scrollbar are desiged in boxes', 'type': 'Bug', assigneeInicials: 'JM', assignee: 'Jan Machala', nextAction: 'Start', state: 'New', difficulty: 13, expand: false, id: 10, comments: [], deadline: null, taskCategory: 'backlog'}
		]
	};

	$scope.taskDifficulties = [1, 2, 3, 5, 8, 13];

	$scope.users = [
		{initials: 'JM', name: 'Jan Machala'},
		{initials: 'JD', name: 'John Doe'}
	];

	$scope.taskTypes = [
		'Issue',
		'Bug'
	];

	$scope.taskStates = [
		{name: 'New', next: 'Started', action: 'Start'},
		{name: 'Started', next: 'Finished', action: 'Finish'},
		{name: 'Finished', next: null, nextAction: null}
	];

	$scope.showAddTaskModal = false;

	$scope.showAddTask = function() {
		$scope.showAddTaskModal = true;
	};

	$scope.hideAddTask = function() {
		$scope.showAddTaskModal = false;
	};

	$scope.addTask = function(task, comment) {
		if (!task) {
			task = {};
		}
		if (task.assignee) {
			task.assigneeInicials = $scope.searchUserByName(task.assignee).initials;
		}
		task.difficulty = task.difficulty ? task.difficulty : 0;
		task.type = task.type ? task.type : 'Issue';
		task.expand = false;
		task.id = $scope.lastId++;
		task.nextAction = 'Start';
		task.state = 'New';
		task.comments = [];
		task.taskCategory = 'icebox';
		if (comment) {
			task.comments.push(comment);
		}

		console.log(task);
		$scope.tasks.icebox.push(task);
		$scope.hideAddTask();
		$scope.boxes.icebox.show = true;
	};

	$scope.showDone = function() {
		$scope.boxes.done.show = !$scope.boxes.done.show;
	};

	$scope.showCurrent = function() {
		$scope.boxes.current.show = !$scope.boxes.current.show;
	};

	$scope.showBacklog = function() {
		$scope.boxes.backlog.show = !$scope.boxes.backlog.show;
	};

	$scope.showIcebox = function() {
		$scope.boxes.icebox.show = !$scope.boxes.icebox.show;
	};

	$scope.showDeadlines = function() {
		$scope.boxes.deadlines.show = !$scope.boxes.deadlines.show;
	};

	$scope.showMywork = function() {
		$scope.boxes.mywork.show = !$scope.boxes.mywork.show;
	};

	$scope.toggleTask = function(index, taskCategory) {
		var task = $scope.searchTaskInCategory(index, taskCategory);
		task.expand = !task.expand;
	};

	$scope.deleteTask = function(reallyWantToDelete, index, taskCategory) {
		if (!reallyWantToDelete) {
			alert('If you want to delete this task, check the checkbox');
			return;
		}
		$scope.getTaskCategory(taskCategory).splice(index, 1);
	};

	$scope.setNextAction = function(task) {
		task.nextAction = $scope.searchTaskStateByName(task.state).action;
	};

	$scope.addComment = function(index, taskCategory, commentText) {
		var task = $scope.searchTaskInCategory(index, taskCategory);
		task.comments.push({text: commentText, author: $rootScope.userName});
	};

	$scope.nextStateAndMoveToCurrent = function(index, taskCategory) {
		$scope.nextState(index, taskCategory);
		var task = $scope.searchTaskInCategory(index, taskCategory);
		$scope.tasks.current.push(task);
		$scope.getTaskCategory(taskCategory).splice(index, 1);
	}

	$scope.nextState = function(index, taskCategory) {
		var task = $scope.searchTaskInCategory(index, taskCategory);
		var stateName = task.state;
		var taskState = $scope.searchTaskStateByName(stateName);
		task.state = taskState.next;
		task.nextAction = taskState.next !== null ? $scope.searchTaskStateByName(taskState.next).action : null;
	};

	$scope.changeStateAndMoveToCurrent = function(index, taskCategory, taskStateName) {
		var state = $scope.searchTaskStateByName(taskStateName);
		var task = $scope.searchTaskInCategory(index, taskCategory);
		task.state = state.name;
		task.nextAction = state.action;
		if (task.state !== 'New') {
			$scope.tasks.current.push(task);
			$scope.getTaskCategory(taskCategory).splice(index, 1);
		}
	};

	$scope.changeState = function(task, taskStateName) {
		var state = $scope.searchTaskStateByName(taskStateName);
		task.state = state.name;
		task.nextAction = state.action;
	};

	$scope.searchTaskStateByName = function(stateName) {
		var taskState;
		for (var i in $scope.taskStates) {
			if ($scope.taskStates[i].name === stateName) {
				taskState = $scope.taskStates[i];
				break;
			}
		}

		return taskState;
	};

	$scope.searchTaskInCategory = function(index, taskCategory) {
		return $scope.getTaskCategory(taskCategory)[index];
	};

	$scope.getTaskCategory = function (taskCategory) {
		if (taskCategory === 'current') {
			return $scope.tasks.current;
		} else if (taskCategory === 'done') {
			return $scope.tasks.done;
		} else if (taskCategory === 'icebox') {
			return $scope.tasks.icebox;
		} else if (taskCategory === 'backlog') {
			return $scope.tasks.backlog;
		}
		return null;
	};

	$scope.search = function(phrase) {
		$scope.boxes.search.show = phrase != '';
		var searchBoxElement = angular.element('.searchBox');
		if ($scope.boxes.search.show && searchBoxElement) {
			searchBoxElement.show();
			var position = searchBoxElement.position();
			angular.element(window).scrollTo(position.left, position.top);
		}
	};

	$scope.moveDoneToCurrent = function(index) {
		var task = $scope.tasks.done[index];
		var taskState = $scope.searchTaskStateByName(task.state);
		task.nextAction = taskState.action;
		$scope.tasks.current.push(task);
		$scope.tasks.done.splice(index, 1);
	};

	$scope.setUser = function(task) {
		task.assigneeInicials = $scope.searchUserByName(task.assignee).initials;
	};

	$scope.searchUserByName = function(name) {
		for (var i in $scope.users) {
			if ($scope.users[i].name === name) {
				return $scope.users[i];
			}
		}
		return null;
	};

	$scope.getAllTasks = function() {
		var allTasks = [];
		var i;
		for (i in $scope.tasks.backlog) {
			allTasks.push($scope.tasks.backlog[i]);
		}
		for (i in $scope.tasks.current) {
			allTasks.push($scope.tasks.current[i]);
		}
		for (i in $scope.tasks.done) {
			allTasks.push($scope.tasks.done[i]);
		}
		for (i in $scope.tasks.icebox) {
			allTasks.push($scope.tasks.icebox[i]);
		}

		return allTasks;
	};

	$scope.getAllDeadlines = function() {
		var allTasks = $scope.getAllTasks();
		var filteredTasks = [];
		for (var i in allTasks) {
			if (allTasks[i].deadline !== null) {
				filteredTasks.push(allTasks[i]);
			}
		}

		return filteredTasks;
	};

	$scope.getMyWork = function() {
		var allTasks = $scope.getAllTasks();
		var filteredTasks = [];
		for (var i in allTasks) {
			if (allTasks[i].assignee === $rootScope.userName) {
				filteredTasks.push(allTasks[i]);
			}
		}

		return filteredTasks;
	};

	$scope.jumpToTask = function(task) {
		$scope.boxes[task.taskCategory].show = true;
		angular.element(window).scrollTo(angular.element('li[data-task-id=' + task.id + ']').position());
	};

	$scope.getHeight = function() {
		return $(window).height();
	};

	$scope.$watch($scope.getHeight, function(newValue, oldValue) {
		var viewHeight = newValue - angular.element('.projectMenu').height() - angular.element('.mainMenu').height() - 40;
		angular.element('.taskBox').height(viewHeight);
	});

	$scope.$watch('tasks', function(newTasks, oldTasks) {
		var i;
		for (i in $scope.tasks.backlog) {
			$scope.tasks.backlog[i].state = 'New';
			$scope.tasks.backlog[i].nextAction = 'Start';
		}
		for (i in $scope.tasks.icebox) {
			$scope.tasks.icebox[i].state = 'New';
			$scope.tasks.icebox[i].nextAction = 'Start';
		}
		for (var taskCategory in $scope.tasks) {
			for (i in $scope.tasks[taskCategory]) {
				$scope.tasks[taskCategory][i].taskCategory = taskCategory;
			}
		}
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
			}
		}

		angular.element('.taskBoxContainer').css('width', ((100 / shown) + '%'));
		if (shown >= 3) {
			angular.element('.taskBoxes').css('width', (100 + (shown - 3) * (100/3)) + '%');
		}

	}, true);

	window.onresize = function() {
		$scope.$apply();
	}
}
ProjectDetailController.$inject = ['$scope', '$rootScope'];