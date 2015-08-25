#!/usr/bin/env node
'use strict';

var meow = require('meow');
var hexRgb = require('hex-rgb');
var clip = require('cliparoo');
var output;

var cli = meow({
	help: [
		'Usage',
		'  $ rgb [input]',
		'',
		'Examples',
		'  $ rgb #000',
		'  rgb(0, 0, 0)'
	]
});

if (cli.input[0]) {
	output = 'rgb(' + hexRgb(cli.input[0]).join(', ') + ')';
} else {
	output = cli.help;
}

console.log(output);
clip(output);
