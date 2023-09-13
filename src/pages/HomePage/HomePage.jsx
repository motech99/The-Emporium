import { getAll } from "../../utilities/listings-api";
import "./HomePage.css";
import Footer from "../../components/Footer/Footer"
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
      <main>
        {/* Home Page Title
      <div className="flex justify-center m-8">
        <h1 className="text-5xl font-bold">Home Page</h1>
      </div> */}

        <div className="grid gap-y-3 gap-x-0 h-screen w-screen">
          {/* Searchbar */}
          <div className="searchbar h-1/1 bg-[#f7f2f2] rounded-lg shadow-md text-center">
            <input
              className="bg-background rounded-lg xl:w-5/6 w-1/2"
              type="text"
              placeholder="search listings..."
            />
            <button className="bg-[#ff9041] m-3 space-x-4 custom-landing-font">Search</button>
          </div>

          {/* Sidebar */}
          <div className="sidebar bg-secondary rounded-lg ml-4 mr-8">
            <h3 className="text-3xl text-left text-white ml-10 mt-5 custom--font">Newest Listings</h3>
          </div>
          
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
          </section>
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
