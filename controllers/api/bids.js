const Listing = require("../../models/Listing");

async function create(req, res) {
    const listing = await Listing.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.bidder = req.user.name;
    listing.bids.push(req.body);
    try {
      await listing.save();
    } catch (err) {
      console.log(err);
    }
    return res.json(listing);
}

async function deleteBid(req, res) {
    const listing = await Listing.findOne({ 'bids._id': req.params.id, 'bids.user': req.user._id });
    if (!listing) return res.json(listing);
    listing.bids.remove(req.params.id);
    await listing.save();
    res.json(listing);
}

module.exports = {
    create,
    delete: deleteBid
}