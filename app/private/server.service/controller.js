module.exports = (mongo, nodemailer) => {
	const userCtrl = require('./user/user.controller')(mongo, nodemailer);
	const blogCtrl = require('./blog/blog.controller')(mongo);
	const gameCtrl = require('./game/game.controller')(mongo);

	return {
		userCtrl, blogCtrl, gameCtrl
	}
}