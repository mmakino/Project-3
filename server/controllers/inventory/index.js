//
// Controller for inventory data API
//

// Load database models
const db = require("../../db/models");

module.exports = {
  // Retrieve all rows of UserInventory 
  findAll: function(req, res) {
    db.UserInventory.findAll(req.query)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
}
