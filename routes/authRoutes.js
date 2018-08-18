const passport = require('passport');

module.exports = app => {

  //Pass user off to passport, when directed to this route
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  
  //Google recognizes token is available
  app.get("/auth/google/callback", passport.authenticate("google"));
  
};
