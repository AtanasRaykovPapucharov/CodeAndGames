module.exports = {
	development: {
		db: require('./constants.json').mongodbConnection || 'mongodb://localhost:27017/appdb',
		transporterConnectionString: require('./constants.json').transporterConnection,
		sessionSecret: 'session-secret',
		webTokenSecret: 'web-token-secret',
		cookieName: 'cookie-name',
		port: 3333
	},
	production: {
		db: require('./constants.json').mongodbConnection,
		transporterConnectionString: process.env.SMTP_INFO,
		sessionSecret: process.env.SESSION_SECRET,
		webTokenSecret: process.env.WEB_TOKEN_SECRET,
		cookieName: process.env.COOKIE_NAME,
		port: process.env.PORT
	}
}; 