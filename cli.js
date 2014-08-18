#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var githubMarkdownCss = require('./');
var argv = process.argv.slice(2);

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Usage',
		'    github-markdown-css > <filename>'
	].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

githubMarkdownCss(function (err, css) {
	if (err) {
		throw err;
	}

	console.log(css);
});
