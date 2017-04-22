module.exports = (mongo, nodemailer, params) => {
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
			userData.getUserById(req.params.id)
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
		},

		logout: (req, res, next) => {
			req.logout();
			res.status(200).json({ message: 'POST /api/logout' });
		},

		login: (req, res, next) => {
			const webTokenObject = {
				_id: req.user.id,
				username: req.user.username
			};
			const webTokenSecret = params.webTokenSecret;

			res.status(200).json({
				username: req.user.username,
				auth_token: jsonWebToken.sign(webTokenObject, webTokenSecret),
				favorites: req.user.favorites.map(f => f._id)
			});
		},

		profile: (req, res, next) => {
			const userJson = JSON.parse(JSON.stringify(req.user));
			delete userJson.password;
			res.status(200).json(userJson);
		},

		register: (req, res, next) => {
			if (req.user) {
				return res.status(400).json({ message: 'User already logged in.' });
			}

			const userObject = req.body;
			return userData.getUserByUsername(userObject.username)
				.then(user => {
					if (user) {
						throw new Error('Username already exists.');
					}
					return userData.getUserByEmail(userObject.email);
				})
				.then((user) => {
					if (user) {
						throw new Error('Email already exists.');
					}
				})
				.then(() => {
					return userData.createUser(userObject);
				})
				.then(() => {
					res.status(200).json({ message: 'PUT /api/users' });
				})
				.catch((err) => {
					res.status(400).json({ message: err.message });
				});
		}
	}
}