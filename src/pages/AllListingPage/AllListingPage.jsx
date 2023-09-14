import React, { useState, useEffect } from "react";
import { getAll } from "../../utilities/listings-api";
import "./AllListingPage.css";

export default function AllListingPage() {
  // State to store the listings
  const [listings, setListings] = useState([]);

  // Function to fetch all listings
  const fetchListings = async () => {
    try {
      const data = await getAll();
      setListings(data);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };

  // Fetch listings when the component mounts
  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <>
    <div className='flex flex-col items-center m-8'>
      <h1 className='text-5xl font-bold '>All Listing Page</h1>
      <div className="grid grid-cols-3 gap-6 mt-4 ">
        {/* Map through the listings and display each one */}
        {listings.map((listing) => (
          <div key={listing._id} className="p-4 
           custom-listing">
            <h2 className="text-xl font-semibold">{listing.itemName}</h2>
            <p><strong>Category:</strong> {listing.category}</p>
            <p><strong>Condition:</strong> {listing.condition}</p>
            <p><strong>Auction closes:</strong> {new Date(listing.bidEndDate).toLocaleString()}</p>
            <p><strong>Description:</strong> {listing.description}</p>
            <p><strong>Current Price:</strong> ${listing.startingBid}</p>
          </div>
        ))}
      </div>
    </div>
      </>
  );
}
