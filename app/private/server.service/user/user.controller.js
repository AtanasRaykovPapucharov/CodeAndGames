module.exports = (mongo, nodemailer) => {
	const userData = require('./user.data')(mongo);

	return {
		hi: (req, res, next) => {
			res.send(userData.test)
		}
	}
}