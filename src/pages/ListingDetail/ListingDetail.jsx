import { useParams } from "react-router-dom";

export default function ListingDetail({ listings }) {
  console.log(listings);
  // listings props is returning an empty arr
  let { listingId } = useParams();

  let listing = listings.find((l) => String(l._id) === listingId);

  return (
    <div className="flex justify-center m-8">
      <h1 className="text-5xl font-bold"> L </h1>
      {/* <h1 className="text-5xl font-bold">{listing.itemName} </h1> */}
    </div>
  );
}
