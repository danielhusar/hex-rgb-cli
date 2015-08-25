'use strict';
var assert = require('assert');
var childProcess = require('child_process');

it('should print rgb from hex', function (cb) {
	childProcess.execFile('./cli.js', ['#000'], {
		cwd: __dirname
	}, function (err, stdout) {
		assert(!err, err);
		assert(stdout.trim() === 'rgb(0, 0, 0)');
		cb();
	});
});
