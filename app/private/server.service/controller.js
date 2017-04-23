module.exports = (mongo, nodemailer, params) => {
	const userCtrl = require('./user/user.controller')(mongo, nodemailer, params);
	const blogCtrl = require('./blog/blog.controller')(mongo);
	const gameCtrl = require('./game/game.controller')(mongo);

	return {
		userCtrl, blogCtrl, gameCtrl
	}
}