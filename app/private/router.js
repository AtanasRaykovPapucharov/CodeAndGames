module.exports = (express, app, mongo, nodemailer) => {
	const controllers = require('./server.service/controller')(mongo, nodemailer);

	const apiRouter = new express.Router();

	app.use('/api', apiRouter);

	apiRouter
		.get('/users', controllers.userCtrl.users)
		.get('/users/:id', controllers.userCtrl.userById)
		.get('/users/:username', controllers.userCtrl.userByUsername)
		.get('/users/:email', controllers.userCtrl.userByEmail)

		.get('/blog', controllers.blogCtrl.blogs)
		.get('/blog/:id', controllers.blogCtrl.blogById)

		.get('/games', controllers.gameCtrl.games)
		.get('/games/:id', controllers.gameCtrl.gameById)

		.get('/tags', controllers.userCtrl.tags)

	app.get('*', (req, res) => {
		res.send('ERROR: No such a route!');
	});
}
