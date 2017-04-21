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
		postUser: (user) => {
			return new Promise((resolve, reject) => {
				db['users']
					.save(user, (err, user) => {
						if (err) {
							res.send(err);
							return;
						}
						res.json(user);
					})
			});
		},
		updateUser: (id, dataObj) => {
			let updated = { $push: dataObj }

			return new Promise((resolve, reject) => {

				db['users'].update({ _id: mongojsObj.ObjectId(id) }, updated, {},
					(err, obj) => {
						if (err) {
							reject(err);
						}
						resolve(obj);
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
		getTags: () => {
			return new Promise((resolve, reject) => {
				db['tags']
					.find({}, (err, tags) => {
						if (err) {
							reject(err);
						}
						resolve(tags);
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