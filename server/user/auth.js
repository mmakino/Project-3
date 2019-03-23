const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const db = require("../db/models");

//
// Setup for user authentication and session
//
class UserAuth {
  //
  // Initialize an instance of this class
  //
  // PARAMS:
  // * app = express.express();
  //
  constructor(app = null) {
    this.app = app;
  }

  //
  // Set up and start user authentication
  //
  // PARAMS:
  // * app = express.express();
  //
  start(app = null) {
    if (app) this.app = app;

    if (!this.app) {
      console.log("ERROR: Unable to start. Need an initialized express()");
      return false;
    }

    this.batchInitialize();

    return true;
  }

  //
  // Batch initialization for user login authentication
  //
  batchInitialize() {
    this.initSession();
    this.initPassport();
    this.usePassport();
    this.initUser();
  }

  //
  // Express-session middleware
  //
  initSession() {
    this.app.use(session({
      secret: "bars",
      resave: true,
      saveUninitialized: true,
      // cookie: { secure: true }
    }));
  }

  //
  // set up app-wide "user" variable
  //
  initUser() {
    this.app.use(function (req, res, next) {
      res.locals.user = req.user || null;
      next();
    });
  }

  //
  // User login validation process using "passport" based on a local strategy
  //
  initPassport() {
    // Attempt to authenticate through an email address
    passport.use(new LocalStrategy({
        usernameField: "email"
      },
      (email, password, done) => {
        // Search the email address in the database
        db.UserTable.findOne({
            where: {
              email: email
            }
          })
          .then(user => {
            if (!user) {
              return done(null, false, {
                message: "No user account found for " + email
              });
            }

            // Verify the input password matches with the one from database
            bcrypt.compare(password, user.password, (error, isMatch) => {
              if (error) throw error;

              if (isMatch) {
                return done(null, user);
              } else {
                return done(null, false, {
                  message: "Incorrect password"
                });
              }
            });
          });
      }));

    // Serialize the user session
    passport.serializeUser(function (user, done) {
      done(null, user.id);
    });

    // De-serialize the user session
    passport.deserializeUser(function (id, done) {
      db.UserTable.findByPk(id)
        .then(user => {
          console.log(`User ${user.name} [ID: ${user.id}] logged in`);
          done(null, user);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  //
  // Use passport as middleware
  //
  usePassport() {
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }
}

//
// Export user authentication setup
//
module.exports = new UserAuth();
