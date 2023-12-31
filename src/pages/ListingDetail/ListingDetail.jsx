import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getById, deleteListing } from "../../utilities/listings-api";
import { addBid } from "../../utilities/bids-api";
import Footer from "../../components/Footer/Footer";
import "./ListingDetail.css";

export default function ListingDetail(props) {
  const [listing, setListing] = useState(null);
  const navigate = useNavigate();

  let { listingId } = useParams();

  // Function to fetch single listing
  const fetchListing = async () => {
    try {
      const data = await getById(listingId);
      setListing(data);
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

  const handleDeleteListing = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this listing?"
    );
    if (confirmDelete) {
      try {
        await deleteListing(listingId);
        navigate("/home");
      } catch (err) {
        console.error("Error deleting listing:", err);
      }
    }
  };

  const handleSubmitBid = async (evt) => {
    evt.preventDefault();

    try {
      const bidAmount = parseFloat(evt.target.bidAmount.value);
      if (isNaN(bidAmount)) {
        console.error("Invalid bid amount");
        return;
      }

      const bidData = {
        bidAmount: bidAmount,
        bidder: props.user.name,
        user: props.user._id,
        date: new Date().toISOString(),
      };

      // Make an AJAX request to add the bid
      const updatedListing = await addBid(listingId, bidData);

      // Update the listing in the state with the new bid
      setListing(updatedListing);

      // Clear the bid amount input after submission
      evt.target.reset(); // Reset the form to clear the input
    } catch (err) {
      console.error("Error adding bid:", err);
    }
  };

  if (listing === null) {
    return <p>Loading</p>;
  }

  return (
    <>
      <div className="grid grid-cols-5 grid-auto-rows-auto gap-5 fade-in">
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
            <strong>Starting Price:</strong>{" "}
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

          {/* BID FORM */}
          {props.user._id !== listing.seller ? (
            <form className="bidForm" onSubmit={handleSubmitBid}>
              <label htmlFor="bidAmount">Bid Amount:</label>
              <input
                className="w-28 rounded-md ml-4"
                type="number"
                step="0.01"
                id="bidAmount"
                name="bidAmount"
                required
              />
              <button className="bg-[#ff9041] px-4 button-custom" type="submit">
                Place Bid
              </button>
            </form>
          ) : null}

          {/* DELETE & EDIT BUTTONS */}
          {props.user._id === listing.seller ? (
            <>
              <button
                className="bg-[#f52d12] px-4"
                type="button"
                onClick={handleDeleteListing}
              >
                Delete Listing
              </button>
              <button
                className="bg-[#ff9041] px-4"
                type="button"
                onClick={handleEditListing}
              >
                Edit Listing
              </button>
            </>
          ) : null}
          <div className="border-t border-contrast mt-6 mb-14">
            <h3 className="text-xl mt-6">About this item</h3>
            <br />
            <p>{listing.description}</p>
          </div>
        </div>

        {/* BIDS DISPLAY */}
        <div className="col-start-4 col-end-5 w-full">
          <div className="mt-20 mb-10">
            <h3 className="text-3xl text-left mt-60 ml-10 mb-5">Bids</h3>
            {listing.bids.map((bid, index) => (
              <div
                key={index}
                className="flex justify-between border border-secondary rounded-md p-2 mt-2"
              >
                <p>
                  <span className="font-medium">${bid.bidAmount}</span> -{" "}
                  {bid.bidder}
                </p>
                <p>{new Date(bid.date).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
