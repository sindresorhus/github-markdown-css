'use strict';
var got = require('got');
var cheerio = require('cheerio');
var uncss = require('uncss');
var tempWrite = require('temp-write');

function getCss(cb) {
	got('https://github.com', function (err, data) {
		if (err) {
			return cb(err);
		}

		var ret = [];
		var $ = cheerio.load(data);

		$('link[href*="assets/github"]').each(function (i, el) {
			ret.push(el.attribs.href);
		});

		if (ret.length === 0) {
			return cb(new Error('Could not find GitHub stylesheets'));
		}

		cb(null, ret);
	});
}

function getRenderedFixture(cb) {
	got('https://github.com/sindresorhus/github-markdown-css/blob/gh-pages/fixture.md', function (err, data) {
		if (err) {
			return cb(err);
		}

		var $ = cheerio.load(data);

		cb(null, tempWrite.sync($('.markdown-body').parent().html()));
	});
}

function cleanupCss(str) {
	var css = require('css');
	var style = css.parse(str);

	style.stylesheet.rules = style.stylesheet.rules.filter(function (el) {
		if (el.type === 'keyframes' || el.type === 'comment') {
			return false;
		}

		if (el.type === 'rule' && /::-webkit-validation|:-moz-placeholder|^\.integrations-slide-content|^\.prose-diff|@font-face|^\.octicon|^button::|^\.markdown-body .+(:hover|\.octicon)/.test(el.selectors[0])) {
			return false;
		}

		return true;
	});

	return css.stringify(style);
}

module.exports = function (cb) {
	getRenderedFixture(function (err, fixture) {
		if (err) {
			return cb(err);
		}

		getCss(function (err, stylesheets) {
			if (err) {
				return cb(err);
			}

			uncss([fixture], {
				stylesheets: stylesheets,
				ignore: [/^\.highlight/]
			}, function (err, css) {
				if (err) {
					throw err;
				}

				cb(null, cleanupCss(css));
			});
		});
	});
};
