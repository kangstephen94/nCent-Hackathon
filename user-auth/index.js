const passport = require("passport");
const express = require("express");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

// Generic register, use specific google provider
passport.use(new GoogleStrategy());

//613085555439-fvfmgtm0m8q64mkpjg1hlfqeckg80ngd.apps.googleusercontent.com clientID

//ZyX6FoZ8f6rtJfrQ_q0HwLdC  clientSecret

const PORT = process.env.PORT || PORT;
app.listen(PORT);
