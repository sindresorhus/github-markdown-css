'use strict';
var assert = require('assert');
var githubMarkdownCss = require('./');

it('should get the GitHub Markdown CSS', function (cb) {
	this.timeout(20000);

	githubMarkdownCss(function (err, css) {
		assert(!err, err);
		assert(/markdown-body/.test(css));
		cb();
	});
});
