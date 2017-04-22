'use strict';

const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const userData = require('../server.service/user/user.data');

module.exports = (app, params) => {

  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();

  const cookieExtractor = (req) => {
    let cookie = null;
    if (req && req.cookies) {
      cookie = JSON.parse(req.cookies[params.cookieName]);
    }
    return cookie.auth_token;
  };

  opts.jwtFromRequest = ExtractJwt.fromExtractors([cookieExtractor]);
  opts.secretOrKey = params.webTokenSecret;

  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    userData.getUserById(jwt_payload._id)
      .then((user) => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch((err) => {
        done(err, false);
      });
  }));
};