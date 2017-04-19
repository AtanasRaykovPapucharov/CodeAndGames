module.exports = {
    init: (() => {
        const express = require('express');

        const app = express();

        const env = process.env.NODE_ENV || 'development';

        const params = require('./server.config/')[env];

        const sessionSecret = params.sessionSecret;

        require('./server.config/express')(express, app, sessionSecret);

        const dbConnectionString = params.db;
        const mongo = require('./server.config/mongo')(dbConnectionString);

        const transporter = params.transporterConnectionString;
        const nodemailer = require('./server.config/nodemailer')(transporter);

        require('./router')(express, app, mongo, nodemailer);

        const port = params.port;

        app.listen(port);

        console.log(`Server running on port:${port}`);

        if (env === 'development') {
            require('openurl').open(`http://localhost:${port}`);
        }
    })()
}
