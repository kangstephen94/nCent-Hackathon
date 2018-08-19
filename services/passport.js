const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const { Client } = require('pg');


const client = new Client ({
  user: 'postgres',
  host: 'localhost',
  database: 'ncnt-dev',
  password: 'dickey',
  port: 5432,
})

client.connect();

// Generic register, use specific google provider
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('' + profile.id);
      //Google api services sends back an accessToken to retrieve user information after redirected back to callback.
      client.query(`SELECT * FROM users WHERE googleId = ${profile.id.toString()}`)
      .then( (res) => {
        console.log(res)
        if (res.rows.length !== 0) {

        } else {
          // Need to also generate a walletID and insert it here
          client.query(`INSERT INTO users(googleId) VALUES(${profile.id.toString()})`);
        }
      })
      .catch(e => console.error(e.stack))
    }
  )
);

