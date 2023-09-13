import "./HomePage.css";

// needs attention...
export default function HomePage() {
  return (
    <>
      {/* Home Page Title */}
      <div className='flex justify-center m-8'>
        <h1 className='text-5xl font-bold'>Home Page</h1>
      </div>
      {/* Latest Listing Section  */}
      <div className='flex flex-row-reverse h-screen'>
        <div className='m-8 w-1/4 border bg-[#EAE7E7] rounded-lg shadow-md'>
          <h1 className='text-center font-semibold p-8 text-2xl'>
            Latest Listing
          </h1>
          <p className='m-4 custom--border-bottom'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            placeat beatae. Voluptate deleniti minus vel quam quis quae cum,
            repellendus, eaque officiis sed distinctio earum quod excepturi
            voluptatibus. Architecto, repellendus.
          </p>
        </div>
        <div className='absolute custom--positon'>
          <div class='m-8 w-2/5 h-16 bg-[#EAE7E7] rounded-lg shadow-md  space-x-4'>
            <input
              className='bg-[#ffe8d1] rounded-lg w-1/2 m-2'
              type='text'
              placeholder='search Listing...'
            />
            <button className='bg-[#ff9041] m-3 space-x-4'>Search</button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
    </>
  );
}
