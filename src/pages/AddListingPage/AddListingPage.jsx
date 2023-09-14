import AddListingForm from "../../components/AddListingForm/AddListingForm"

export default function AddListingPage( { setImage, image, uploadImage }) {
  return (
    <>
    <div className='flex flex-col items-center m-8 fade-in-faster'>
      <h1 className='text-5xl custom--font font-bold mb-8'>Add Listing Page</h1>
      <AddListingForm setImage={setImage} image={image} uploadImage={uploadImage} />
    </div>
  </>
  );
}
