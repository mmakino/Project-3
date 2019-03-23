//
// User Login Controller
//

const passport = require("passport");

module.exports = {
  //
  // By default, if authentication fails, Passport will respond with a 401
  // Unauthorized status, and any additional route handlers will not be
  // invoked. If authentication succeeds, the next handler will be invoked
  // and the req.user property will be set to the authenticated user.
  // http://www.passportjs.org/docs/authenticate/
  //
  authenticate: function(req, res, next) {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/",
      // failureFlash: true
    })(req, res, next);  
  },
}
