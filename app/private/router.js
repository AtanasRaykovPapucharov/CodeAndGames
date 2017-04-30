const passport = require('passport');
const fs = require('fs');

module.exports = (express, app, mongo, nodemailer, params) => {
	const controllers = require('./server.service/controller')(mongo, nodemailer, params);

	const apiRouter = new express.Router();

	app.use('/api', apiRouter);

	apiRouter
		.put('/users', controllers.userCtrl.newUser)
		.post('/users', controllers.userCtrl.login)

		.get('/blog', controllers.blogCtrl.blogs)
		.get('/blog/:id', controllers.blogCtrl.blogById)
		.post('/blog', (req, res, next) => {
			console.log(req.body);
		})

		.get('/games', controllers.gameCtrl.games)
		.get('/games/:id', controllers.gameCtrl.gameById)
		.post('/games', (req, res, next) => {
			console.log(req.body);
		})

		.get('/tags', controllers.userCtrl.tags)


	app.get('*', (req, res) => {
		res.send('ERROR: No such a route!');
	});
}
