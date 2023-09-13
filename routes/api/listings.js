const express = require('express');
const router = express.Router();
const listingsController = require('../../controllers/api/listings');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/listings'

// GET /
router.get('/', listingsController.getAll);
// GET /:id
router.get('/:id', listingsController.show);
// GET /api/listings/ (All user's listings)

// POST /new
router.post("/", listingsController.create);
// DELETE /:id
router.delete("/:id", listingsController.delete);
// GET /:id/edit
router.get('/:id/edit', listingsController.edit);
// PUT /:id UPDATE
router.put('/:id', listingsController.update);



module.exports = router;
