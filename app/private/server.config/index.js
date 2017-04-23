module.exports = {
	development: {
		db: require('./constants.json').mongodbConnection || 'mongodb://localhost:27017/appdb',
		nodemailerAppEmail: '"Games&Code" <webdjsandpy@gmail.com>',
		nodemailerSubject: 'Finish creating your account on Games&Code',
		nodemailerText: '',
		nodemailerHtml:
		`<div>
			<h4>Click and confirm that you want to create an account on Games&Code. <br> This link will expire in fifteen minutes and can only be used once.</h4>
			<a href="`+ 'http://localhost:3333/#/after-signup' + `">Create account on Games&Code</a>
		</div>`,
		transporterConnectionString: require('./constants.json').transporterConnection,
		sessionSecret: 'session-secret',
		webTokenSecret: 'web-token-secret',
		cookieName: 'cookie-name',
		port: 3333
	},
	production: {
		db: require('./constants.json').mongodbConnection,
		nodemailerAppEmail: '"Games&Code" <webdjsandpy@gmail.com>',
		nodemailerSubject: 'Finish creating your account on Games&Code',
		nodemailerText: '',
		nodemailerHtml:
		`<div>
			<h4>Click and confirm that you want to create an account on Games&Code. <br> This link will expire in fifteen minutes and can only be used once.</h4>
			<a href="`+ 'http://localhost:3333/#/after-signup' + `">Create account on Games&Code</a>
		</div>`,
		transporterConnectionString: process.env.SMTP_INFO,
		sessionSecret: process.env.SESSION_SECRET,
		webTokenSecret: process.env.WEB_TOKEN_SECRET,
		cookieName: process.env.COOKIE_NAME,
		port: process.env.PORT
	}
}
