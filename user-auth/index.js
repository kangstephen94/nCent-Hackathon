const passport = require("passport");
const express = require("express");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

// Generic register, use specific google provider
passport.use(new GoogleStrategy());


const PORT = process.env.PORT || PORT;
app.listen(PORT);
