'use strict';
var test = require('ava');
var isEmailLike = require('./');

test(function (t) {
	t.assert(isEmailLike('sindresorhus@gmail.com'));
	t.assert(!isEmailLike('unicorn'));
});
