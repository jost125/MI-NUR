'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ngCookies']).
	config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/login', {templateUrl:'partials/login.html', controller:LoginController});
		$routeProvider.when('/projects', {templateUrl:'partials/projects.html', controller:ProjectsController});
		$routeProvider.otherwise({redirectTo:'/login'});
	}]).run(function ($rootScope, $cookieStore, $location) {
		$rootScope.$on("$routeChangeStart", function (event, next, current) {
			if ($cookieStore.get('loginHash') !== 123) {
				if (next.templateUrl !== "partials/login.html") {
					$location.path("/login");
				}
			}
		});
	});
