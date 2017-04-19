'use strict';

module.exports = function (mongo) {
	var db = mongo.db;
	var mongojsObj = mongo.api;

	return {
		getUsers: function getUsers() {
			return new Promise(function (resolve, reject) {
				db['users'].find({}, function (err, users) {
					if (err) {
						reject(err);
					}
					resolve(users);
				});
			});
		},
		getUserById: function getUserById(id) {
			return new Promise(function (resolve, reject) {
				db['users'].find({ _id: id }, function (err, users) {
					if (err) {
						reject(err);
					}
					resolve(users);
				});
			});
		},
		getUserByUsername: function getUserByUsername(username) {
			return new Promise(function (resolve, reject) {
				db['users'].find({ "name": username }, function (err, users) {
					if (err) {
						reject(err);
					}
					resolve(users);
				});
			});
		}
	};
};