import React, { useState, useEffect } from "react";
import { getAll } from "../../utilities/listings-api";
import "./HomePage.css";

// needs attention...
export default function HomePage() {
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

  // Filter listings by category
  const filterListingsByCategory = (category) => {
    return listings.filter((listing) => listing.category === category);
  };

  // Group listings by category
  const categories = ["Trading Card", "Memorabilia", "Collectible", "Other"];
  const groupedListings = categories.map((category) => ({
    category,
    listings: filterListingsByCategory(category).slice(0, 3), // Limit to top 3 listings per category
  }));
  
  // Display the last 5 listings in the "Latest Listing" section
  const latestListings = listings.slice(0, 5); // Change the number as needed

  return (
    <>
      {/* Home Page Title */}
      <div className='flex justify-center m-8'>
        <h1 className='text-5xl font-bold'>Home Page</h1>
      </div>
      
      {/* Sorted by Categories Section */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {groupedListings.map((group) => (
          <div key={group.category}>
            <h2>{group.category}</h2>
            {group.listings.map((listing) => (
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
        ))}
      </div>
      
      {/* Latest Listing Section  */}
      <div className='flex flex-row-reverse h-screen'>
        <div className='m-8 w-1/4 border bg-[#EAE7E7] rounded-lg shadow-md'>
          <h1 className='text-center font-semibold p-8 text-2xl'>
            Latest Listing
          </h1>
          {latestListings.map((listing) => (
            <div key={listing._id} className="m-4 custom--border-bottom">
              <h2 className="text-xl font-semibold">{listing.itemName}</h2>
              <p>Category: {listing.category}</p>
              <p>Condition: {listing.condition}</p>
              <p>Auction closes: {listing.bidEndDate}</p>
              <p>Description: {listing.description}</p>
              <p>Current Price: ${listing.startingBid}</p>
            </div>
          ))}
        </div>
        <div className='absolute custom--positon'>
          <div class='m-8 w-2/5 h-16 bg-[#EAE7E7] rounded-lg shadow-md  space-x-4'>
            <input
              className='bg-[#ffe8d1] rounded-lg w-1/2 m-2'
              type='text'
              placeholder='search Listing...'
            />
            <button className='bg-[#ff9041] m-3 space-x-4'>Search</button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
    </>
  );
}
