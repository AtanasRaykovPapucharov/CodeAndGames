'use strict';

module.exports = function (mongo, nodemailer) {
	var userCtrl = require('./user/user.controller')(mongo, nodemailer);
	var blogCtrl = require('./blog/blog.controller')(mongo);

	return {
		userCtrl: userCtrl, blogCtrl: blogCtrl
	};
};