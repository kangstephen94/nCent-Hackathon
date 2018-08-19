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
      console.log(profile.id.toString());
      //Google api services sends back an accessToken to retrieve user information after redirected back to callback.
      client.query(`SELECT * FROM users WHERE googleId = ${profile.id.toString()}`)
        .then( (res) => {
          console.log(res)
          if (res.rows.length !== 0) {
            console.log('not empty')
          } else {
            // Need to also generate a walletID and insert it here
            console.log('inserted')
            console.log(profile.id)
            client.query(`INSERT INTO users(googleId) VALUES(${profile.id.toString()})`);
          }
        })
        .catch(e => console.error(e.stack))
    }
  )
);

