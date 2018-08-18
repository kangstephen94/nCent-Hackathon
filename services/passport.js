const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

// Generic register, use specific google provider
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      //Google api services sends back an accessToken to retrieve user information after redirected back to callback.
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
    }
  )
);

