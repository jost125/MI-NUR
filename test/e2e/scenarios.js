'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function () {

	beforeEach(function () {
		browser().navigateTo('../../app/index.html');
	});


	it('should automatically redirect to /login when location hash/fragment is empty', function () {
		expect(browser().location().url()).toBe("/login");
	});


	describe('login', function () {

		beforeEach(function () {
			browser().navigateTo('#/login');
		});


		it('should render login form when user navigates to /login', function () {
			expect(element('button').text()).
				toMatch(/Login/);
		});

		it('should show invalid user or password on empty credentials', function() {
			element('button').click();
			expect(element('.flashMessages').text()).
				toMatch(/Invalid user or password/);
		})

		it('should log in with correct credentials', function() {
			input('email').enter('example@example.com');
			input('password').enter('example');
			element('button').click();
			expect(browser().location().url()).toBe("/projects");
		})

	});

});
