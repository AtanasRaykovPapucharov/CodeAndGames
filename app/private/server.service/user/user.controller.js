module.exports = (mongo, nodemailer, params) => {
	const userData = require('./user.data')(mongo);

	return {
		users: (req, res, next) => {
			userData.getUsers()
				.then((users) => {
					res.status(200).json(users);
				});
		},
		login: (req, res, next) => {
			userData.getUserByEmail(req.body.email)
				.then((user) => {
					if (user[0].password === req.body.password) {
						res.status(200).json(user[0]);
					} else {
						res.status(400).json({ error: 'No such a user!' });
					}
				})
				.catch((err) => {
					res.status(409).json({ error: err });
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
						res.status(400).json({ message: 'Email already exists' });
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
										res
											.status(200)
											.cookie('current-user-app', user.username, {
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