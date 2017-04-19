module.exports = (express, app, mongo, nodemailer) => {
	const controllers = require('./server.service/controller')(mongo, nodemailer);

	const apiRouter = new express.Router();

	app.use('/api', apiRouter);

	apiRouter
		.get('/hi', controllers.userCtrl.hi);
		//.post('/users/sendemail', controllers.mainCtrl.sendEmail(nodemailer))

	app.get('*', function (req, res) {
		res.send('ERROR: No such a route!');
	});
}
