import React, { useState, useEffect } from "react";
import { getAll } from "../../utilities/listings-api";

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
    <div className='flex justify-center m-8'>
      <h1 className='text-5xl font-bold'>All Listing Page</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {/* Map through the listings and display each one */}
        {listings.map((listing) => (
          <div key={listing._id} className="border p-4">
            <h2 className="text-xl font-semibold">{listing.itemName}</h2>
            <p>Category: {listing.category}</p>
            <p>Condition: {listing.condition}</p>
            <p>Auction closes: {listing.bidEndDate}</p>
            <p>Description: {listing.description}</p>
            <p>Current Price: ${listing.startingBid}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
