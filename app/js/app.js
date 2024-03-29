'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ngCookies', 'ui']).
	config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/login', {templateUrl:'partials/login.html', controller:LoginController});
		$routeProvider.when('/projects', {templateUrl:'partials/projects.html', controller:ProjectsController});
		$routeProvider.when('/project/settings', {templateUrl:'partials/projectSettings.html', controller:ProjectSettingsController});
		$routeProvider.when('/project/members', {templateUrl:'partials/projectMembers.html', controller:ProjectMembersController});
		$routeProvider.when('/project/add', {templateUrl:'partials/projectAdd.html', controller:ProjectAddController});
		$routeProvider.when('/project/detail', {templateUrl:'partials/projectDetail.html', controller:ProjectDetailController});
		$routeProvider.otherwise({redirectTo:'/login'});
	}]).run(function ($rootScope, $cookieStore, $location) {
		$rootScope.logged = false;
		$rootScope.$on("$routeChangeStart", function (event, next, current) {
			if ($cookieStore.get('loginHash') !== 123) {
				$rootScope.logged = false;
				if (next.templateUrl !== "partials/login.html") {
					$location.path("/login");
				}
			} else {
				if (next.templateUrl === "partials/login.html") {
					$location.path("/projects");
				}
				$rootScope.logged = true;
				$rootScope.userName = 'Jan Machala';
			}
		});
	});

angular.module('ui.config', []).value('ui.config', {
	sortable: {
		connectWith: '.tasks',
		handle: '.taskName'
	}
});