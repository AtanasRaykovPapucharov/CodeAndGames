'use strict';

const nodemailer = require('nodemailer');

module.exports = (params) => {
	// create reusable transporter object using the default SMTP transport
	const transporter = nodemailer.createTransport(params.transporterConnectionString);

	// verify connection configuration
	transporter.verify(function (error, success) {
		if (error) {
			console.log(error);
			return;
		} else {
			console.log('Server is ready to take our messages');
		}
	});

	return { transporter, nodemailer };
};
