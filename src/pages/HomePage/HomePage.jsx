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

  // Display the last 8 listings in the "Latest Listing" section
  const latestListings = listings.slice(0, 8); // Change the number as needed

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
      <main className="fade-in-faster">
        {/* Home Page Title
      <div className="flex justify-center m-8">
        <h1 className="text-5xl font-bold">Home Page</h1>
      </div>
      

        {/* Search Bar */}
        <div className="customGrid gap-y-5 gap-x-0 h-screen">
          <div class="searchbar h-1/1 bg-[#f7f2f2] rounded-lg shadow-md text-center">
            <input
              className="bg-background rounded-lg xl:w-5/6 w-1/2"
              type="text"
              placeholder="search listings..."
            />
            <button className="bg-[#ff9041] m-3 space-x-4 custom-landing-font">
              Search
            </button>
          </div>

          {/* Latest Listing Section  */}
          <div className="sidebar bg-secondary rounded-lg ml-4">
            <h3 className="text-3xl text-left text-white ml-10 mt-5 custom--font">
              Newest Listings
            </h3>
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

          {/* Sorted by Categories Section */}
          {groupedListings.map((group, index) => (

            // New section is created for every category
            <section
              key={group.category}
              className={`content-${
                index + 1
              } bg-[#f7f2f2] rounded-lg shadow-lg flex items-end`}
            >
              <h2 className="text-3xl text-left text-white ml-10 mt-5 custom--font category-header">
                {group.category}
              </h2>
              
              {/* Listing Items */}
              {group.listings.map((listing) => (
                <Link to={`/listings/${listing._id}`}>
                <div
                  key={listing._id}
                  className="w-60 h-1/ shadow-md mb-4 p-4 mx-2 hover:scale-105 hover:shadow-lg duration-200"
                >
                  <div className="flex flex-col h-full">

                    <img className="justify-start h-2/3" src="" alt="" />

                    <div className="justify-end">
                      <h2 className="text-xl font-semibold">
                        {listing.itemName}
                      </h2>
                      <p className="text-center">
                        Currently{" "}
                        <span className="font-semibold">
                          ${listing.startingBid}
                        </span>
                      </p>
                      <p className="text-center">
                        Auction closes:{" "}
                        <span className="font-semibold">
                          {listing.bidEndDate}
                        </span>
                      </p>
                      {/* <p>Condition: {listing.condition}</p> */}
                      {/* <p>Category: {listing.category}</p> */}
                      {/* <p>Description: {listing.description}</p> */}
                    </div>

                  </div>
                </div>
                </Link>
              ))}
            </section>
          ))}

          {/* OLD CATEGORY SECTIONS FOR REFERENCE */}
          {/* 
          <section className="content-one bg-primary rounded-lg ml-8">
            <h2 className="text-3xl text-left text-white ml-10 mt-5 custom--font">Trading Cards</h2>
          </section>
          <section className="content-two bg-[#f7f2f2] rounded-lg ml-8">
            <h2 className="text-3xl text-left text-white ml-10 mt-5 custom--font">Memorabilia</h2>
          </section>
          <section className="content-three bg-[#f7f2f2] rounded-lg ml-8">
            <h2 className="text-3xl text-left text-white ml-10 mt-5 custom--font">Collectible</h2>
          </section>
          <section className="content-four bg-[#f7f2f2] rounded-lg ml-8">
            <h2 className="text-3xl text-left text-white ml-10 mt-5 custom--font">Other</h2>
          </section> */}

          <Footer />
        </div>
      </main>

      {/* <div>
        {listings.length === 0 ? (
          <p>Be the first to list something!</p>
        ) : (
          <>
            <div>
              {listings.map((listing, idx) => (
                <ListingCard
                  key={idx}
                  listing={listing.text}
                  timestamp={new Date(listing.timestamp)}
                />
              ))}
            </div>
          </>
        )}
        <button onClick={allListings}>All Listings</button>
      </div> */}
    </>
  );
}
