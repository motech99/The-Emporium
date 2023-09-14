import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../../utilities/listings-api";
import "./HomePage.css";
import Footer from "../../components/Footer/Footer";
import ListingCard from "../../components/ListingCard/ListingCard";

// TO DOS
//  add links to cards
//

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
    listings: filterListingsByCategory(category).slice(0, 5), // Limit to top 5 listings per category
  }));

  // Display the last 4 listings in the "Latest Listing" section
  const latestListings = listings.slice(0, 4); // Change the number as needed

  // export default function HomePage({ user, listings, setListings }) {
  //   async function allListings() {
  //     try {
  //       const userListings = await listingsService.allListings();

  //       const listingsWithValidTimestamps = userListings.map((listing) => ({
  //         ...listing,
  //         timestamp: Date.now(),
  //       }));

  //       setListings(listingsWithValidTimestamps);
  //     } catch (error) {
  //       console.error("Error getting all listings:", error);
  //     }
  //   }

  return (
    <>
      <main className='fade-in-faster'>
        {/* Home Page Title
      <div className="flex justify-center m-8">
        <h1 className="text-5xl font-bold">Home Page</h1>
      </div>
      

        {/* Search Bar */}
        <div className='customGrid gap-y-5 gap-x-0 h-screen'>
          <div class='searchbar h-1/1 bg-[#f7f2f2] rounded-lg shadow-md text-center'>
            <input
              className='bg-background rounded-lg xl:w-5/6 w-1/2'
              type='text'
              placeholder='search listings...'
            />
            <button className='bg-[#ff9041] m-3 space-x-4 custom-landing-font'>
              Search
            </button>
          </div>

          {/* Latest Listing Section  */}
          <div className='sidebar bg-secondary rounded-lg ml-4'>
            <h3 className='text-3xl mt-5 custom--font flex flex-col items-center'>
              Newest Listings
            </h3>
            {latestListings.map((listing) => (
              <Link to={`/listings/${listing._id}`}>
                <div
                  key={listing._id}
                  className='flex flex-col items-center gap-4 m-4 card-md  shadow'>
                  <div className=' h-3/5'>
                    <img
                      className='min-h-full h-full rounded'
                      src={listing.image}
                    />
                  </div>
                  <div className='h-1/5'>
                    <h3 className='font-semibold text-xl border-b-4 border-accent mb-3'>
                      {" "}
                      {listing.itemName}{" "}
                    </h3>
                    <p>
                      <strong>Category:</strong> {listing.category}
                    </p>
                    <p>
                      <strong>Condition:</strong> {listing.condition}
                    </p>
                    <p>
                      <strong>Auction closes: </strong>
                      {new Date(listing.bidEndDate).toLocaleString()}
                    </p>
                    <p>
                      <strong>Current Price:</strong>{" "}
                      <span className='text-contrast text-lg font-semibold'>
                        ${listing.startingBid}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Sorted by Categories Section */}
          {groupedListings.map((group, index) => (
            // New section is created for every category
            <section
              key={group.category}
              className={`content-${
                index + 1
              } bg-[#f7f2f2] rounded-lg shadow-lg flex items-end`}>
              <h2 className='text-3xl text-left text-white ml-10 mt-5 custom--font category-header'>
                {group.category}
              </h2>

              {/* Listing Items */}
              {group.listings.map((listing) => (
                <Link to={`/listings/${listing._id}`}>
                            <div
                key={listing._id}
                className="w-fit opacity-80 shadow-md hover:scale-105 hover:opacity-100 hover:shadow-lg duration-200 custom-listing-home"
              >
                <h2 className="text-xl font-semibold">{listing.itemName}</h2>
                <div className="flex flex-col items-center">
                <img className="max-h-80 max-w-xs 20rem; mb-2  custom--border rounded" src={listing.image} />
                </div>
                <h2 className="text-xl font-semibold">
                  ${listing.startingBid}
                </h2>
        
                <p>
                  <strong>Auction closes:</strong>{" "}
                  {new Date(listing.bidEndDate).toLocaleString()}
                </p>
              </div>
                </Link>
              ))}
            </section>
          ))}
          <Footer />
        </div>
      </main>
    </>
  );
}
