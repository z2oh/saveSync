// A simple test to verify a window is opened with the title 'saveSync'
var Application = require('spectron').Application;
var assert = require('assert');
var electron = require('electron');

describe('application launching', function () {
	this.timeout(10000);

	beforeEach(function () {
		this.app = new Application({
			path: electron,
			args: ['build/app.js']
		});
		return this.app.start();
	});

	afterEach(function () {
		if (this.app && this.app.isRunning()) {
			return this.app.stop();
		}
	});

	it('should launch with the title', function () {
		return this.app.client.getTitle().then(function (title) {
			assert.equal(title, 'saveSync');
		});
	});
});