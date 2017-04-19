module.exports = {
	development: {
		db: require('./constants.json').mongodbConnection || 'mongodb://localhost:27017/appdb',
		transporterConnectionString: require('./constants.json').transporterConnection,
		sessionSecret: 'session-secret',
		port: 3333
	},
	production: {
		db: require('./constants.json').mongodbConnection,
		transporterConnectionString: process.env.SMTP_INFO,
		sessionSecret: process.env.SESSION_SECRET,
		port: process.env.PORT
	}
}; 