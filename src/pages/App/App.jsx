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
import EditListingPage from "../EditListingPage/EditListingPage";
import ProfilePage from "../ProfilePage/ProfilePage";


export default function App() {
  const [user, setUser] = useState(getUser());
  const [listings, setListings] = useState([]);

  const [image, setImage] = useState('');

  const uploadImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "react-cloudinary")
    data.append("cloud_name", "duqoyinil")
    return fetch("https://api.cloudinary.com/v1_1/duqoyinil/image/upload",{
      method: "post",
      body: data
    }).then(res => res.json())
        .catch(err => { 
          console.log("is this where the error is")
          console.log(err)}) 
  }
  

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
            <Route path="/all-listing" element={<AllListingPage  />} />
            <Route path="/add-listing" element={<AddListingPage image={image} setImage={setImage} uploadImage={uploadImage} />} />
            <Route path="/edit-listing/:listingId" element={<EditListingPage image={image} setImage={setImage} uploadImage={uploadImage} />} />
            <Route path="/profile/:userId" element={<ProfilePage user={user} listings={listings} />} />
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
