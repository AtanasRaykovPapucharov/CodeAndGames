'use strict';

module.exports = function (transporterConnectionString) {
	var nodemailer = require('nodemailer');

	// create reusable transporter object using the default SMTP transport
	var transporter = nodemailer.createTransport(transporterConnectionString);

	// verify connection configuration
	transporter.verify(function (error, success) {
		if (error) {
			console.log(error);
			return;
		} else {
			console.log('Server is ready to take our messages');
		}
	});

	return { transporter: transporter, nodemailer: nodemailer };
};