'use strict';

module.exports = {
        init: function () {
                var express = require('express');

                var app = express();

                var env = process.env.NODE_ENV || 'development';

                var params = require('./server.config/')[env];

                var sessionSecret = params.sessionSecret;

                require('./server.config/express')(express, app, sessionSecret);

                var dbConnectionString = params.db;
                var mongo = require('./server.config/mongo')(dbConnectionString);

                var transporter = params.transporterConnectionString;
                var nodemailer = require('./server.config/nodemailer')(transporter);

                require('./router')(express, app, mongo, nodemailer);

                var port = params.port;

                app.listen(port);

                console.log('Server running on port:' + port);

                if (env === 'development') {
                        require('openurl').open('http://localhost:' + port);
                }
        }()
};