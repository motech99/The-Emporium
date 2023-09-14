import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getUserListings } from "../../utilities/listings-api";

export default function ProfilePage(userId) {
    const [listings, setListings] = useState([]);

    const fetchUserListings = async () => {
        try {
            const data = await getUserListings(userId);
            setListings(data);
            console.log(data);
        } catch (err) {
            console.error("Error fetching listings for user", err);
        }
    }

    // Fetch the listing when the component mounts
    useEffect(() => {
        fetchUserListings();
    }, []);

    console.log();

    return (
        <>
          <div className="flex flex-col items-center m-8">
            <h1 className="text-5xl font-bold custom--font fade-in-faster">
              Your Listings
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
                    <div className="flex flex-col items-center">
                      <img
                        className="max-h-80 max-w-xs mb-10 custom--border rounded"
                        src={listing.image}
                      />
                    </div>
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

