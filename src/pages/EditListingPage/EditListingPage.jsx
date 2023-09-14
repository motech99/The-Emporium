import EditListingForm from "../../components/EditListingForm/EditListingForm";

export default function EditListingPage({ setImage, image, uploadImage }) {
  const handleEdit = (updatedListingData) => {
    // Perform actions with the updated listing data
    // Make an API call to update the listing on the server
    console.log("Updated listing data:", updatedListingData);
  };

  return (
    <>
      <div className="flex flex-col items-center m-8 fade-in-faster">
        <h1 className="text-5xl custom--font font-bold mb-8">Edit Listing</h1>
        <EditListingForm
          onEdit={handleEdit}
          setImage={setImage}
          image={image}
          uploadImage={uploadImage}
        />
      </div>
    </>
  );
}
