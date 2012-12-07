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

	});

});
