'use strict';

/* jasmine specs for controllers go here */

describe('LoginController', function () {
	var loginController;
	var scope = {};

	beforeEach(function () {
		loginController = new LoginController(scope);
	});

	it('should have no flash message', function () {
		expect(scope.flashMessages.length).toBe(0);
	});

});
