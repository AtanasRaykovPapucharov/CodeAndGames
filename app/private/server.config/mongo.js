module.exports = (connectionString) => {
	const mongojs = require('mongojs');
	const collections = ['users', 'blogs'];

	const db = mongojs(connectionString, collections);
	db.on('error', function (err) {
		console.log('Database error!', err)
	})

	db.on('connect', function () {
		console.log('Database connected!')
	})

	const mongo = {
		api: mongojs,
		db: db
	}

	return mongo;
};
