module.exports = (mongo, nodemailer, params) => {
	const userData = require('./user.data')(mongo);

	return {
		users: (req, res, next) => {
			userData.getUsers()
				.then((users) => {
					res.status(200).json(users);
				});
		},
		login: (req, res) => {
			const webTokenObject = {
				_id: req.user.id,
				username: req.user.username
			};

			res.status(200).json({
				username: req.user.username,
				auth_token: jsonWebToken.sign(webTokenObject, params.webTokenSecret),
				// favorites: req.user.favorites.map(f => f._id)
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
						return userData.createUser(userObject)
							.then((user) => {
								const nodemailerTransporter = nodemailer.transporter;
								const mailOptions = {
									from: params.nodemailerAppEmail,
									to: user.email,
									subject: params.nodemailerSubject,
									text: params.nodemailerText,
									html: params.nodemailerHtml,
								};

								return userData.sendEmail(nodemailerTransporter, mailOptions)
									.then((resp) => {
										console.log("object");
										res
											.status(200)
											.cookie('email', user.email, {
												expires: new Date(Date.now() + 900000),
												httpOnly: false
											})
											.json(user);
									})
									.catch((err) => {
										res.status(500).json({ error: 'Server cannot send a message' });
									});

							})
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