const passport = require("passport");
const express = require("express");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require('../config/keys');

const app = express();

// Generic register, use specific google provider
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken) => {
    //Google api services sends back an accessToken to retrieve user information
    console.log(accessToken);
  })
);

//Pass user off to passport, when directed to this route
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
