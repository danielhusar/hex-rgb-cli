'use strict';
var assert = require('assert');
var spawn = require('child_process').spawn;
var output = '';
var cli;

it('should print rgb from hex', function (cb) {
	cli = spawn('./cli.js', ['#000']);

	cli.stdout.on('data', function (data) {
		output += data;
	});

	cli.on('close', function (code) {
		assert(!code);
		assert(output.trim() === 'rgb(0, 0, 0)');
		cb();
	});
});

