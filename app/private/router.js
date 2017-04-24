const passport = require('passport');

module.exports = (express, app, mongo, nodemailer, params) => {
	const controllers = require('./server.service/controller')(mongo, nodemailer, params);

	const apiRouter = new express.Router();

	app.use('/api', apiRouter);

	apiRouter
		.post('/users', controllers.userCtrl.login)
		.put('/users', controllers.userCtrl.newUser)

		.get('/blog', controllers.blogCtrl.blogs)
		.get('/blog/:id', controllers.blogCtrl.blogById)

		.get('/games', controllers.gameCtrl.games)
		.get('/games/:id', controllers.gameCtrl.gameById)

		.get('/tags', controllers.userCtrl.tags)

		.post('/blog/content', (req, res, next) => {
			console.log(req.body);
		})

	app.get('*', (req, res) => {
		res.send('ERROR: No such a route!');
	});
}
