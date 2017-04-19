'use strict';

module.exports = function (express, app, mongo, nodemailer) {
	var controllers = require('./server.service/controller')(mongo, nodemailer);

	var apiRouter = new express.Router();

	app.use('/api', apiRouter);

	apiRouter.get('/users', controllers.userCtrl.users).get('/users/:id', controllers.userCtrl.userById).get('/users/:username', controllers.userCtrl.userByUsername)
	//.post('/users/sendemail', controllers.mainCtrl.sendEmail(nodemailer))
	.get('/blog', controllers.blogCtrl.blogs);

	app.get('*', function (req, res) {
		res.send('ERROR: No such a route!');
	});
};