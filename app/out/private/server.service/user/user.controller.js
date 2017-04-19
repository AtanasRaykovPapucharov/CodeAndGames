'use strict';

module.exports = function (mongo, nodemailer) {
	var userData = require('./user.data')(mongo);

	return {
		users: function users(req, res, next) {
			userData.getUsers().then(function (users) {
				res.send(users);
				console.log('users sent!');
			});
		},
		userById: function userById(req, res, next) {
			userData.getUserBy(req.params.id).then(function (user) {
				res.send(user);
				console.log('user by id sent!');
			});
		},
		userByUsername: function userByUsername(req, res, next) {
			userData.getUserByUsername(req.params.username).then(function (user) {
				res.send(user);
				console.log('user by username sent!');
			});
		}
	};
};