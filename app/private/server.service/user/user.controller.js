module.exports = (mongo, nodemailer, params) => {
	const userData = require('./user.data')(mongo);

	return {
		users: (req, res, next) => {
			userData.getUsers()
				.then((users) => {
					res.status(200).json(users);
				});
		},
		newUser: (req, res, next) => {
			const userObject = req.body;

			userData.getUserByEmail(userObject.email)
				.then((user) => {
					let userObj = user[0];
					let emailExists = false;

					if (userObj) {
						emailExists = true;
						res.status(409).json({ message: 'Email already exists' });
					}

					return emailExists;
				})
				.then((emailExists) => {
					if (!emailExists) {
						userData.createUser(userObject)
							.then((user) => {
								// TO DO: nodemailer.send()
								res.status(200);
								res.json(user);
							});
					}
				})
				.catch((err) => {
					res.status(400).json({ error: err.message });
				});
		},
		tags: (req, res, next) => {
			userData.getTags()
				.then((tags) => {
					res.status(200).json(tags);
				});
		}
	}
}