//
// Controller for user registration
//

// Bring in express
const db = require("../../models");
const bcrypt = require("bcryptjs");

module.exports = {
  register: function(req, res, next) {
    let errors = [];

    if (validatePassword(req, errors)) {
      // Check if the email address is already registered
      db.User.findOne({
          where: {
            email: req.body.email
          }
        })
        .then(user => {
          if (user) {
            res.json({"error": "A user with the same email address already exists"});
          } else {
            const newUser = {
              name: req.body.name,
              email: req.body.email,
              password: req.body.password
            };
    
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
    
                newUser.password = hash;
                db.User.create(newUser)
                  .then(user => {
                    // auto-login
                    req.login(user, err => {
                      return next(err);
                    });
                    res.json({"msg": "user registered successfully"});
                  })
                  .catch(error => {
                    res.json({"error": "Unable to register the user: " + error});
                    return;
                  });
              });
            });
          }
        });
    } else {
      // Send the info back w/ errors(if any)
      res.json({
        errors: errors,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        password2: req.body.password2
      });
    }  
  }
}

//
// Validate the input password
//
// PARAMS:
// * req: a reference to the route request object
// * errors: an array buffer for error messages
//
// RETURN:
// * true, if the input password is valid 
// * false, otherwise
//
function validatePassword(req, errors) {
	// Verify "Password" === "Confirm Password"
	if (req.body.password !== req.body.password2) {
		errors.push({
			text: "Passwords do not match"
		});
	}

	// Ensure password is at least 6 characters long
	if (req.body.password.length < 6) {
		errors.push({
			text: "Passwords must be at least 6 characters long"
		});
	}

	return (errors.length === 0);
}
