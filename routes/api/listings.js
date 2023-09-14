const express = require('express');
const router = express.Router();
const listingsController = require('../../controllers/api/listings');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/listings'

// GET / (SHOW ALL)
router.get('/', listingsController.getAll);
// GET /:id (SHOW ONE)
router.get('/:id', listingsController.show);
//GET / (SHOW BY CATEGORY)
router.get('/home', listingsController.getListingByCategory);
// // GET /user._id (SHOW USER'S LISTINGS)
// router.get('/user._id', listingsController.getUserListings);
// POST /new
router.post("/", listingsController.create);
// DELETE /:id
router.delete("/:id", listingsController.delete);
// GET /:id/edit
router.get('/:id/edit', listingsController.edit);
// PUT /:id UPDATE
router.put('/:id', listingsController.update);



module.exports = router;
