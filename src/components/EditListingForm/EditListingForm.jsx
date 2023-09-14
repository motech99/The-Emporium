import React, { useState, useEffect } from "react";
import { editListing } from "../../utilities/listings-api";
import "../AddListingForm/AddListingForm.css";
import { Navigate, useParams } from "react-router-dom";

export default function EditListingForm({ onEdit }) {
  const [listing, setListing] = useState(null);
  const { listingId } = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const data = await editListing(listingId);
        setListing(data);
      } catch (error) {
        console.error("Error fetching listing:", error);
      }
    };

    fetchListing();
  }, [listingId]);

  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    condition: "",
    category: "",
    bidEndDate: "",
    image: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const updatedListing = await editListing(listing._id, formData);
      setSubmitted(true);
      // onEdit(updatedListing);
    } catch (error) {
      console.error("Error editing listing:", error);
    }
  };

  if (!listing) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <div className="container-custom fade-in">
        <div className="add-list-container m-1">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h1 className="h1-header">Edit Listing</h1>

            <label>Item Name</label>
            <input
              className="custom-input"
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              required
            />

            <label>Description</label>
            <textarea
              className="custom-textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <label>Condition</label>
            <select
              className="custom-select"
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              required
            >
              <option value="">Select Condition</option>
              <option value="New">New</option>
              <option value="Good">Good</option>
              <option value="Used">Used</option>
              <option value="Worn">Worn</option>
            </select>
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Trading Card">Trading Card</option>
              <option value="Memorabilia">Memorabilia</option>
              <option value="Collectible">Collectible</option>
              <option value="Other">Other</option>
            </select>
            <label>Bid End Date</label>
            <input
              type="datetime-local"
              name="bidEndDate"
              value={formData.bidEndDate}
              onChange={handleChange}
              required
            />
            <label> Upload Image </label>
            <input
              type="file"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.files[0] })
              }
              required
            />
            <button className="bg-[#ff9041]" type="submit">
              EDIT LISTING
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
