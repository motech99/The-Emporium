import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getById } from "../../utilities/listings-api";
import Footer from "../../components/Footer/Footer";

export default function ListingDetail() {
  const [listing, setListing] = useState(null);

  let { listingId } = useParams();
  console.log(`listingId: ${listingId}`);

  // Function to fetch all listings
  const fetchListing = async () => {
    try {
      const data = await getById(listingId);
      setListing(data);
      console.log("data.bids", data.bids);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };
  // Fetch listings when the component mounts
  useEffect(() => {
    fetchListing();
  }, []);

  const handleEditListing = () => {
    console.log(555555)
    return <Navigate to={`/edit-listing/${listingId}`} replace={true} />;
  };

  if (listing === null) {
    return <p>Loading</p>;
  }
  return (
    <>
      <div className="grid grid-cols-4">
        {/* ITEM IMAGE */}
        <div className="col-start-2 col-end-3">
          <img
            className="h-full w-auto object-cover rounded-md"
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

          {/* BIDDINGS */}
          <div className="">
            {listing.bids.map((bid, index) => (
              <p key={index}>
                Bid {bid.bid} date: {bid.date} bidder: {bid.bidder}
              </p>
            ))}
          </div>

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
             
              <div>

              <button className='bg-[#f52d12] button-custom' type='submit'>
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

          <div className="border-t border-gray-400 my-14">
            <h3 className="text-xl mt-6">About this item</h3>
            <p>{listing.description}</p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
