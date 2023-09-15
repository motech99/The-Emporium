const Listing = require('../../models/listing');


module.exports = {
  getAll,
  show,
  create,
  getUserListings,
  delete: deleteListing,
  edit,
  update,
  getListingByCategory
};

async function getAll(req, res) {
  const listings = await Listing.find({}).sort({ bidStartDate: -1 }).exec();
  res.json(listings);
}

async function show(req, res) {
  const listing = await Listing.findById(req.params.id);
  res.json(listing);
}

async function create(req, res) {
    try {    
        req.body.seller = req.user._id;
        const listing = await Listing.create(req.body);
        console.log(listing);
        res.json(listing);
  } catch (err) {
        console.log(err);
        res.json({ errorMsg: err.message });
  }
}

async function deleteListing(req, res) {
    try {
        const listing = await Listing.findOne({
            _id: req.params.id,
            seller: req.user._id
        });
        if (!listing) {
            return res.status(404).json({ error: "Listing not found" });
        }
        await listing.remove();
        res.json({ message: "Listing deleted successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
    // const listing = await Listing.findOne({ 'listings._id': req.params._id, 'listings.seller': req.user._id });
    // if (!listing) return ;
    // await Listing.remove(req.params._id);
    // // res.;
}

async function edit(req, res) {
    try {
        const listing = await Listing.findById(req.params.id);
    
        if (!listing) {
          return res.status(404).json({ error: 'Listing not found' });
        }
        res.json(listing);
        // Render the edit view and pass the listing data
        // res.render('editListing', { title: 'Edit Listing', listing });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
    // const listing = await Listing.findOne({'listings._id': req.params.id});
    // // res.render('boardgames/edit', { title: "Edit Review", review });
}

async function update(req, res) {
  console.log('req.params.id - ', req.params.id)
    try {
        const listing = await Listing.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {returnDocument: "after"});
        console.log(listing)
        if (!listing) {
          return res.status(404).json({ error: 'Listing not found' });
        }
    
        // Check if the user has permission to update the listing
        if (!listing.seller.equals(req.user._id)) {
          return res.status(403).json({ error: 'Permission denied' });
        }

        res.json(listing)
    } catch (err) {
      console.log(err)
    }
    
    
    // const listing = await Listing.findOne({'listings._id': req.params.id});
    // if (!listing.seller._id.equals(req.user._id)) {
    // //   return res.redirect(`/boardgames/${boardgame._id}`);
    // }
    // reviewSubdoc.content = req.body.content;
    // reviewSubdoc.rating = req.body.rating;
    // await listing.save();
    // // res.redirect(`/boardgames/${boardgame._id}`);
}

async function getListingByCategory(req, res) {
  try {
      // Fetch distinct categories from the database
      const categories = await Listing.distinct("category");
      const listingsByCategory = {};
  
      for (const category of categories) {
        const listings = await Listing.find({ category }).sort({ bidStartDate: -1 }).limit(3).exec();
        listingsByCategory[category] = listings;
      }
  
      res.json(listingsByCategory);
    } catch (error) {
      console.error("Error fetching listings by category:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
}

async function getUserListings(req, res) {
  console.log("asdasdasdasdasd");
  // const listings = await Listing.find({
  //     user: req.seller._id
  // }).sort({ bidStartDate: -1 }).exec();
  const listing = await Listing.findById(req.params.id);
  res.json(listing);
}