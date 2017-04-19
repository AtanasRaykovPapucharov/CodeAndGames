module.exports = (mongo) => {
	const db = mongo.db;
	const mongojsObj = mongo.api;

	return {
		getUsers: () => {
			return new Promise((resolve, reject) => {
				db['users']
					.find({}, (err, users) => {
						if (err) {
							reject(err);
						}
						resolve(users);
					})
			});
		},
		getUserById: (id) => {
			return new Promise((resolve, reject) => {
				db['users']
					.find({ _id: id }, (err, users) => {
						if (err) {
							reject(err);
						}
						resolve(users);
					})
			});
		},
		getUserByUsername: (username) => {
			return new Promise((resolve, reject) => {
				db['users']
					.find({ "name": username }, (err, users) => {
						if (err) {
							reject(err);
						}
						resolve(users);
					})
			});
		},
		getUserByEmail: (email) => {
			return new Promise((resolve, reject) => {
				db['users']
					.find({ "email": email }, (err, users) => {
						if (err) {
							reject(err);
						}
						resolve(users);
					})
			});
		}
	}
}