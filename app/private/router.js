const passport = require('passport');
const fs = require('fs');

module.exports = (express, app, mongo, nodemailer, params) => {
	const controllers = require('./server.service/controller')(mongo, nodemailer, params);

	const apiRouter = new express.Router();

	app.use('/api', apiRouter);

	apiRouter
		.post('/users', controllers.userCtrl.newUser)
		.put('/users', controllers.userCtrl.login)

		.get('/blog', controllers.blogCtrl.blogs)
		.get('/blog/:id', controllers.blogCtrl.blogById)
		.post('/blog', controllers.blogCtrl.newBlog)

		.get('/games', controllers.gameCtrl.games)
		.get('/games/:id', controllers.gameCtrl.gameById)
		.post('/games', controllers.gameCtrl.newGame)

		.get('/tags', controllers.userCtrl.tags)


	app.get('*', (req, res) => {
		res.send('ERROR: No such a route!');
	});
}
