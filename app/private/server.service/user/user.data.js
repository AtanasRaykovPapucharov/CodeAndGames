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
		createUser: (user) => {
			return new Promise((resolve, reject) => {
				db['users']
					.save(user, (err, user) => {
						if (err) {
							reject(err);
						}
						resolve(user);
					})
			});
		},
		updateImage: (id, imgObj) => {
			return new Promise((resolve, reject) => {
				db['users'].update({ _id: mongojsObj.ObjectId(id) },
					{ $set: { image: imgObj } },
					(err, obj) => {
						if (err) {
							reject(err);
						}
						resolve(obj);
					})
			});
		},
		updatePassword: (id, pass) => {
			return new Promise((resolve, reject) => {
				db['users'].update({ _id: mongojsObj.ObjectId(id) },
					{ $set: { password: pass } },
					(err, obj) => {
						if (err) {
							reject(err);
						}
						resolve(obj);
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
		sendEmail: (nodemailerTransporter, mailOptions) => {
			return new Promise((resolve, reject) => {
				nodemailerTransporter.sendMail(mailOptions, (err, info) => {
					if (err) {
						reject(err);
					}
					resolve(info);
				});
			})
		}
	}
}