'use strict';

module.exports = function (connectionString) {
	var mongojs = require('mongojs');
	var collections = ['users', 'blogs'];

	var db = mongojs(connectionString, collections);
	db.on('error', function (err) {
		console.log('Database error!', err);
	});

	db.on('connect', function () {
		console.log('Database connected!');
	});

	var mongo = {
		api: mongojs,
		db: db
	};

	return mongo;
};