'use strict';
var emailRegex = require('email-regex');

module.exports = function (str) {
	return emailRegex({exact: true}).test(str);
};
