const passport = require('passport');

module.exports = (express, app, mongo, nodemailer, params) => {
	const controllers = require('./server.service/controller')(mongo, nodemailer, params);

	const apiRouter = new express.Router();

	app.use('/api', apiRouter);

	apiRouter
		.post('/users', controllers.userCtrl.newUser)
		.put('/users', controllers.userCtrl.login)
		.put('/users/image', controllers.userCtrl.imageUpdate)
		.put('/users/change-password', controllers.userCtrl.changePassword)
		.put('/users/forgot-password', controllers.userCtrl.forgotPassword)
		.post('/users/contact-us', controllers.userCtrl.contactUs)

		.get('/blog', controllers.blogCtrl.blogs)
		.get('/blog/:id', controllers.blogCtrl.blogById)
		.post('/blog', controllers.blogCtrl.newBlog)
		.put('/blog/comment', controllers.userCtrl.imageUpdate)

		.get('/games', controllers.gameCtrl.games)
		.get('/games/:id', controllers.gameCtrl.gameById)
		.post('/games', controllers.gameCtrl.newGame)

		.get('/tags', controllers.userCtrl.tags)


	app.get('*', (req, res) => {
		res.send('ERROR: No such a route!');
	});
}
