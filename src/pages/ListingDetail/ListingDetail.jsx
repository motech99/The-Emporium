import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getById, deleteListing } from "../../utilities/listings-api";
import { addBid } from "../../utilities/bids-api";
import Footer from "../../components/Footer/Footer";

export default function ListingDetail() {
  const [listing, setListing] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const navigate = useNavigate();

  let { listingId } = useParams();

  // Function to fetch single listing
  const fetchListing = async () => {
    try {
      const data = await getById(listingId);
      setListing(data);
      console.log(listingId);
      console.log(data);
    } catch (error) {
      console.error("Error fetching listing:", error);
    }
  };

  // Fetch the listing when the component mounts
  useEffect(() => {
    fetchListing();
  }, []);

  const handleEditListing = () => {
    // Use the navigate function to redirect to the edit page
    navigate(`/edit-listing/${listingId}`);
  };

  const handleSubmitBid = async (evt) => {
    evt.preventDefault();
    const bidData = {
      bidAmount: bidAmount,
    };

    try {
      // Make an AJAX request to add the bid
      const updatedListing = await addBid(listingId, bidData);
      // Update the listing in the state
      setListing(updatedListing);
      // Clear the bid amount input after submission
      setBidAmount("");
    } catch (err) {
      console.error("Error adding bid:", err);
    }
  }

  const handleDeleteListing = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this listing?');
    if (confirmDelete) {
      try {
        await deleteListing(listingId);
        navigate("/home");
      } catch (err) {
        console.error("Error deleting listing:", err);
      }
    }
  };

  if (listing === null) {
    return <p>Loading</p>;
  }

  return (
    <>
      <div className="grid grid-cols-4 grid-auto-rows-auto gap-5">
        {/* ITEM IMAGE */}
        <div className="col-start-2 col-end-3 row-start-1 m-10">
          <img
            className="object-scale-down rounded-md min-h-full"
            src={listing.image}
            alt=""
          ></img>
        </div>

        {/* ITEM DETAILS */}
        <div className="col-start-3 col-end-4 w-full">
          <h2 className="text-4xl text-left mt-20 mb-10">{listing.itemName}</h2>
          <p className="my-4">
            <strong>Current Price:</strong>{" "}
            <span className="m-5 text-2xl text-contrast">
              ${listing.startingBid}
            </span>
          </p>
          <p className="italic">
            Auction closes at {new Date(listing.bidEndDate).toLocaleString()}
          </p>

          {/* DESCRIPTION */}
          <div className="flex gap-10 my-10">
            <div className="font-semibold flex-col ">
              <p>Category</p>
              <p>Condition</p>
            </div>
            <div className="flex-col">
              <p>{listing.category}</p>
              <p>{listing.condition}</p>
            </div>
          </div>
          {/* DELETE & EDIT BUTTONS */}
          <button className='bg-[#f52d12] button-custom' type='button' onClick={handleDeleteListing}>
            Delete Listing
          </button>
          <button
            className="bg-[#ff9041] button-custom"
            type="button"
            onClick={handleEditListing}
          >
            Edit Listing
          </button>
        </div>

          <div className="border-t border-contrast my-14">
            <h3 className="text-xl mt-6">About this item</h3>
            <p>{listing.description}</p>
          </div>
        
          {/* BID FORM */}
          <form onSubmit={handleSubmitBid}>
            <label htmlFor="bidAmount">Bid Amount:</label>
            <input
              type="number"
              id="bidAmount"
              name="bidAmount"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              required
            />
            <button className="bg-[#ff9041] button-custom" type="submit">
              Place Bid
            </button>
          </form>
          {/* BIDS DISPLAY */}
          <div className=''>
            {listing.bids.map((bid, index) => (
              <p key={index}>
                Bid: {bid.bidAmount} Date: {bid.date} Bidder: {bid.bidder}
              </p>
            ))}
          </div>

        </div>
      {/* <Footer /> */}
    </>
  );
}
