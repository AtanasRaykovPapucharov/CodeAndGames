'use strict';

var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

module.exports = function (express, app, sessionSecret) {
	var sessionObj = {
		secret: sessionSecret,
		resave: true,
		saveUninitialized: true
	};

	app.disable('x-powered-by');
	app.use(cors());
	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(session(sessionObj));
	app.use(passport.initialize());
	app.use(passport.session());

	var staticFolderName = '../../public';
	app.use('/', express.static(path.join(__dirname, staticFolderName)));
};