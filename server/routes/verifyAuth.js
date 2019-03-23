//
// A middleware function for protecting a route
//
module.exports = function(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.json({"error": "Not Authorized"});
	// res.redirect("/users/login");
};
