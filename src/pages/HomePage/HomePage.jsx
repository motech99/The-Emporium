import { getAll } from "../../utilities/listings-api";
import "./HomePage.css";
import ListingCard from "../../components/ListingCard/ListingCard";

// needs attention...
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

export default function Home() {
  return (
    <>
      {/* Home Page Title */}
      <div className="flex justify-center m-8">
        <h1 className="text-5xl font-bold">Home Page</h1>
      </div>

      {/* Latest Listing Section  */}
      <div className="flex flex-row-reverse h-screen">
        <div className="m-8 w-1/4 border bg-[#EAE7E7] rounded-lg shadow-md">
          <h1 className="text-center font-semibold p-8 text-2xl">
            Latest Listing
          </h1>
          <p className="m-4 custom--border-bottom">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            placeat beatae. Voluptate deleniti minus vel quam quis quae cum,
            repellendus, eaque officiis sed distinctio earum quod excepturi
            voluptatibus. Architecto, repellendus.
          </p>
        </div>
        {/* Search Bar */}
        <div className="absolute custom--positon">
          <div class="m-8 w-2/5 h-16 bg-[#EAE7E7] rounded-lg shadow-md  space-x-4">
            <input
              className="bg-[#ffe8d1] rounded-lg w-1/2 m-2"
              type="text"
              placeholder="search Listing..."
            />
            <button className="bg-[#ff9041] m-3 space-x-4">Search</button>
          </div>
        </div>
      </div>

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
