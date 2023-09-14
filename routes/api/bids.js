const express = require('express');
const router = express.Router();
const bidsController = require('../../controllers/api/bids');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/listings'

// POST /new
router.post("/:id/bids", ensureLoggedIn, bidsController.create);
// DELETE /:id
router.delete("/bids/:id", ensureLoggedIn, bidsController.delete);

module.exports = router;