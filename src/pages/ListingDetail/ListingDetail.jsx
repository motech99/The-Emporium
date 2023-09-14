import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../../utilities/listings-api";

export default function ListingDetail() {
  const [listing, setListing] = useState(null);



  let { listingId } = useParams();
  console.log(`listingId: ${listingId}`);
  

  // Function to fetch all listings
  const fetchListing = async () => {
    try {
      const data = await getById(listingId);
      setListing(data);
      console.log('data: ', data);
      console.log('sListings: ', setListing(data));
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };
  // Fetch listings when the component mounts
  useEffect(() => {
    fetchListing();
  }, []);

  if (listing === null) {
    return (
      <p>Loading</p>
    )
  }
  return (
    <div className="flex justify-center m-8">
      <h2 className="text-xl font-semibold">{listing.itemName}</h2>
      <p>
        <strong>Category:</strong> {listing.category}
      </p>
      <p>
        <strong>Condition:</strong> {listing.condition}
      </p>
      <p>
        <strong>Auction closes:</strong>
        {new Date(listing.bidEndDate).toLocaleString()}
      </p>
      <p>
        <strong>Description:</strong> {listing.description}
      </p>
      <p>
        <strong>Current Price:</strong> ${listing.startingBid}
      </p>
    </div>
  );
}
