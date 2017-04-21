module.exports = (mongo, nodemailer) => {
	const userData = require('./user.data')(mongo);

	return {
		users: (req, res, next) => {
			userData.getUsers()
				.then((users) => {
					res.status(200).send(users);
					console.log('users sent!');
				});
		},
		userById: (req, res, next) => {
			userData.getUserBy(req.params.id)
				.then((user) => {
					res.status(200).send(user);
					console.log('user by id sent!');
				});
		},
		userByUsername: (req, res, next) => {
			userData.getUserByUsername(req.params.username)
				.then((user) => {
					res.status(200).send(user);
					console.log('user by username sent!');
				});
		},
		userByEmail: (req, res, next) => {
			userData.getUserByUsername(req.params.email)
				.then((user) => {
					res.status(200).send(user);
					console.log('user by username sent!');
				});
		},
		tags: (req, res, next) => {
			userData.getTags()
				.then((tags) => {
					res.status(200).send(tags);
				});
		}
	}
}