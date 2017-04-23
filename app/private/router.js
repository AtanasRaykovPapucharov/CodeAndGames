const passport = require('passport');

module.exports = (express, app, mongo, nodemailer, params) => {
	const controllers = require('./server.service/controller')(mongo, nodemailer, params);

	const apiRouter = new express.Router();

	app.use('/api', apiRouter);

	apiRouter
		// .get('/users', passport.authenticate('jwt'), controllers.userCtrl.profile)
		.post('/users', passport.authenticate('local'), controllers.userCtrl.login)
		.put('/users', controllers.userCtrl.newUser)
		// .get('/logout', passport.authenticate('jwt'), controllers.userCtrl.logout)

		.get('/blog', controllers.blogCtrl.blogs)
		.get('/blog/:id', controllers.blogCtrl.blogById)

		.get('/games', controllers.gameCtrl.games)
		.get('/games/:id', controllers.gameCtrl.gameById)

		.get('/tags', controllers.userCtrl.tags)

	app.get('*', (req, res) => {
		res.send('ERROR: No such a route!');
	});
}
