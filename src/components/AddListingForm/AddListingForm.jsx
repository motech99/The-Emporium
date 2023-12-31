import { useState, Component } from "react";
import { addListing } from "../../utilities/listings-api";
import { Navigate } from "react-router-dom";
import "./AddListingForm.css";


export default class AddListingForm extends Component {
  state = {
    itemName: "",
    description: "",
    condition: "",
    category: "",
    startingBid: "",
    bidEndDate: "",
    image: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  }


  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {
        itemName,
        description,
        condition,
        category,
        startingBid,
        bidEndDate,
        image
      } = this.state;

      const formData = {
        itemName,
        description,
        condition,
        category,
        startingBid,
        bidEndDate,
        image
      };

      
      const data = await this.props.uploadImage();
      console.log(data)
      formData.image = data.url;
      const newListing = await addListing(formData);
      this.setState({ submitted: true });
      console.log("New listing created:", newListing);
    } catch (error) {
      console.error("Error creating listing:", error);
      this.setState({ error: "Listing creation failed - Try Again" });
    }
  };

  render() {
    const { submitted } = this.state;
    console.log(this.props)

    if (submitted) {
      return <Navigate to="`/listing/${this.listing.id}`" replace={true} />;
    }
    
    return (
      <>
        <div>
          <div className='container-custom fade-in'>
            <div className='add-list-container m-1'>
              <form autoComplete='off' onSubmit={this.handleSubmit}>
                <h1 className='h1-header'>Add New Listing</h1>
                <label>Item Name</label>
                <input className="custom-input"
                  type='text'
                  name='itemName'
                  value={this.state.itemName}
                  onChange={this.handleChange}
                  required
                />
                <label>Description</label>
                <textarea className="custom-textarea"
                  name='description'
                  value={this.state.description}
                  onChange={this.handleChange}
                  required
                />
                <label>Condition</label>
                <select className="custom-select"
                  name='condition'
                  value={this.state.condition}
                  onChange={this.handleChange}
                  required>
                  <option value=''>Select Condition</option>
                  <option value='New'>New</option>
                  <option value='Good'>Good</option>
                  <option value='Used'>Used</option>
                  <option value='Worn'>Worn</option>
                </select>
                <label>Category</label>
                <select
                  name='category'
                  value={this.state.category}
                  onChange={this.handleChange}
                  required>
                  <option value=''>Select Category</option>
                  <option value='Trading Card'>Trading Card</option>
                  <option value='Memorabilia'>Memorabilia</option>
                  <option value='Collectible'>Collectible</option>
                  <option value='Other'>Other</option>
                </select>
                <label>Starting Bid</label>
                <input
                  placeholder='$'
                  type='number'
                  name='startingBid'
                  value={this.state.startingBid}
                  onChange={this.handleChange}
                  required
                />
                <label>Bid End Date</label>
                <input
                  type='datetime-local'
                  name='bidEndDate'
                  value={this.state.bidEndDate}
                  onChange={this.handleChange}
                  required
                />
                <label> Upload Image </label>
                <input type="file" onChange={(e) => this.props.setImage(e.target.files[0])} required
                />
                <button className='bg-[#ff9041]' type='submit'>
                  CREATE LISTING
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
