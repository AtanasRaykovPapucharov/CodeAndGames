module.exports = {
    init: (() => {

        const env = process.env.NODE_ENV || 'development';

        const params = require('./server.config/')[env];

        const mongo = require('./server.config/mongo')(params.db);

        const express = require('express');

        const app = express();
        
        const nodemailer = require('./server.config/nodemailer')(params);

        require('./server.config/express')(express, app, params);

        require('./router')(express, app, mongo, nodemailer, params);

        const port = params.port;

        app.listen(port);

        console.log(`Server running on port:${port}`);

        if (env === 'development') {
            require('openurl').open(`http://localhost:${port}`);
        }
    })()
}
