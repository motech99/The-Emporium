import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      <div className="flex flex-col items-center m-8">
        <h1 className="text-5xl font-bold custom--font fade-in-faster">
          All Listings Page
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 fade-in">
          {/* Map through the listings and display each one */}
          {listings.map((listing) => (
            <Link to={`/listings/${listing._id}`}>
              <div
                key={listing._id}
                className="p-4 w-fit opacity-80 shadow-md hover:scale-105 hover:opacity-100 hover:shadow-lg duration-200 custom-listing"
              >
                <h2 className="text-xl font-semibold">{listing.itemName}</h2>
                <p>
                  <strong>Category:</strong> {listing.category}
                </p>
                <p>
                  <strong>Condition:</strong> {listing.condition}
                </p>
                <p>
                  <strong>Auction closes:</strong>{" "}
                  {new Date(listing.bidEndDate).toLocaleString()}
                </p>
                <p>
                  <strong>Description:</strong> {listing.description}
                </p>
                <p>
                  <strong>Current Price:</strong> ${listing.startingBid}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
