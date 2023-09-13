import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import LandingPage from "../LandingPage/LandingPage";
import HomePage from "../HomePage/HomePage";
import AllListingPage from "../AllListingPage/AllListingPage";
import AddListingPage from "../AddListingPage/AddListingPage";
import ListingDetail from "../ListingDetail/ListingDetail";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [listings, setListings] = useState([]);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/home" element={<HomePage user={user} listings={listings} setListings={setListings} />} />
            <Route path="*" element={<Navigate to="/home" />} />
            <Route path="/listings/:listingId" element={<ListingDetail listings={listings} setListings={setListings}/>} />
            <Route path="/all-listing" element={<AllListingPage />} />
            <Route path="/add-listing" element={<AddListingPage />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage setUser={setUser} />} />
          <Route path="/login" element={<AuthPage setUser={setUser} />} />
        </Routes>
      )}
    </main>
  );
}
