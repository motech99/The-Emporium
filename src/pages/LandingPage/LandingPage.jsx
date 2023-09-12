import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <>
      <main className="flex flex-col items-center landing-page">
        <section className="h-screen xl:mr-36 snap-start">
          <h1 className="text-6xl md:text-9xl custom-landing-header max-w-screen-lg mt-48 md:text-left">
            Empowering Your Shopping Experience
          </h1>
          <div className="my-24 md:mr-96">
            <Link
              to="/login"
              className="sm:text-3xl px-16 py-4 rounded-md bg-yellow-400 mr-10"
            >
              Get Started
            </Link>
            <Link to="#" className="sm:text-3xl">
              Learn More <span className="text-yellow-400">{">>"}</span>
            </Link>
          </div>
        </section>

        <section className="h-screen flex flex-row lg:max-w-max snap-start">
          <img src="images/test.jpg" className="w-6/12 object-cover" />
          <div>
            <h2>Our Purpose</h2>
            <p>
              Welcome to The Emporium, where endless possibilities await.
              Whether you're here to find unique treasures or shop for the
              essentials, we've created a seamless and inviting space for you to
              explore, engage, and connect. Join our vibrant community and
              experience the world of commerce in a whole new way.
            </p>
            <h2>What we're all about</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
              quibusdam dolores officiis praesentium adipisci nisi temporibus
              corporis iste quisquam impedit id sint incidunt officia aperiam
              totam beatae, iure cupiditate excepturi!
            </p>
          </div>
        </section>

        <section className="h-screen snap-start">
          <div className="text-left max-w-xl text mx-20 my-28">
            <h2 className="font-extrabold text-5xl text-left my-4">
              How it all works
            </h2>
            <p className="text-lg">
              We have crafted our website to be both intuitive and
              user-friendly, guaranteeing a seamless experience when it comes to
              buying and selling items.
            </p>
          </div>
          <div className="md:flex">
            <div className="mx-20 md:max-w-md">
              <img src="images/test.jpg" alt="" className="h-1/4 rounded-lg" />
              <h3 className="text-left font-bold text-2xl my-4">
                Easy Bidding
              </h3>
              <p className="text-left text-lg">
                Bidding on our marketplace is a breeze. Simply find the item you
                desire, place your bid, and watch the competition unfold in
                real-time.
              </p>
            </div>
            <div className="mx-20 md:max-w-md">
              <img src="images/test.jpg" alt="" className="h-1/4 rounded-lg" />
              <h3 className="text-left font-bold text-2xl my-4">
                Winning Made Simple
              </h3>
              <p className="text-left text-lg">
                Winning an auction is as exciting as it gets. If your bid reigns
                supreme when the auction clock runs out, congratulations, the
                item is yours!
              </p>
            </div>
            <div className="mx-20 md:max-w-md">
              <img src="images/test.jpg" alt="" className="h-1/4 rounded-lg" />
              <h3 className="text-left font-bold text-2xl my-4">
                Seamless Selling Experience
              </h3>
              <p className="text-left text-lg">
                Selling items is a snap too. Just create a listing with details
                and images, set your price, and let potential buyers make their
                move. Easy money!
              </p>
            </div>
          </div>
        </section>

        <section className="h-screen snap-start">
          <img src="images/test.jpg" alt="" className="h-screen rounded-lg" />
        </section>

        <footer className="m-24 snap-start">
          <h2 className="my-6 font-bold text-2xl">
            Do that thing you wanted to do. <br></br> Don't miss out on great
            deals!
          </h2>
          <p className="mb-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            harum nulla quis officiis assumenda deserunt architecto optio! Quia,
            deleniti a! Possimus hic quam enim tempora modi. Velit fugit dolorum
            corporis.
          </p>
          <Link to="/login" className="px-16 py-6 rounded-md bg-yellow-400">
            Sign up for free
          </Link>
        </footer>

        <p className="text-left text-sm">
          2023 The Emporium. No Rights Reserved
        </p>
      </main>
    </>
  );
}
