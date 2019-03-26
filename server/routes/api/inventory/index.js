//
// API Routes for inventory data
//

// Bring in express
const express = require("express");
const router = express.Router();

const inventory = require("../../../controllers/inventory");

// GET: /api/inventory
router.route("/")
	// Return all rows from UserInventory
	.get(inventory.findAll);

module.exports = router;
