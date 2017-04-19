'use strict';

var LocalStrategy = require('passport-local');
var passport = require('passport');

var userData = require('../controllers/usersController');

module.exports = function () {
  var localStrategy = new LocalStrategy({
    username: 'username',
    password: 'password'
  }, function (username, password, done) {
    userData.getUserByUsername(username).then(function (user) {
      if (user) {
        return {
          isAuthenticated: user.isAuthenticated(username, password),
          user: user
        };
      }

      return done(null, false);
    }).then(function (result) {
      if (!result) {
        return done(null, false);
      }

      if (result.isAuthenticated) {
        return done(null, result.user);
      }

      return done(null, false);
    }).catch(function (err) {
      return done(err, false);
    });
  });

  passport.serializeUser(function (user, done) {
    if (user) {
      return done(null, user._id);
    }

    return done(null, null);
  });

  passport.deserializeUser(function (id, done) {
    userData.getUserById(id).then(function (user) {
      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    }).catch(function (err) {
      done(err, false);
    });
  });

  passport.use(localStrategy);
};