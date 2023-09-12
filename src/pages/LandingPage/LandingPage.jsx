import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <>
      <section className="text-green-300">
        <h1 className="text-green-100">landing page</h1>
        <p>
          Welcome to our marketplace website, where endless possibilities await.
          Whether you're here to find unique treasures or shop for the
          essentials, we've created a seamless and inviting space for you to
          explore, engage, and connect. Join our vibrant community and
          experience the world of commerce in a whole new way.
        </p>
        <Link to="/login"> Get Started </Link>
        <Link to="#">Learn More</Link>
      </section>
      <section>
        <img
          src="images/test.jpg"
          alt=""
          className="h-auto max-w-lg rounded-lg"
        />
      </section>
      <section>
        <h2 className="font-extrabold">How it all works</h2>
        <p>
          We have meticulously designed our website to be both intuitive and
          user-friendly, guaranteeing a seamless experience when it comes to
          buying and selling items.
        </p>
        <div>
          <img
            src="images/test.jpg"
            alt=""
            className="h-auto max-w-lg rounded-lg"
          />
          <h3>Bid</h3>
          <p>bid away</p>
        </div>
        <div>
          <img
            src="images/test.jpg"
            alt=""
            className="h-auto max-w-lg rounded-lg"
          />
          <h3>Win</h3>
          <p>win away</p>
        </div>
        <div>
          <img
            src="images/test.jpg"
            alt=""
            className="h-auto max-w-lg rounded-lg"
          />
          <h3>Sell</h3>
          <p>sell away</p>
        </div>
      </section>
      <section>
        <div>this is a background</div>
        <div>
          <h2>Our Purpose</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
            quibusdam dolores officiis praesentium adipisci nisi temporibus
            corporis iste quisquam impedit id sint incidunt officia aperiam
            totam beatae, iure cupiditate excepturi!
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
      <footer>
        <h2>Do that thing you wanted to do.</h2>
        <h2>Start using app_name today.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque harum
          nulla quis officiis assumenda deserunt architecto optio! Quia,
          deleniti a! Possimus hic quam enim tempora modi. Velit fugit dolorum
          corporis.
        </p>
        <Link to="/login"> Get Started </Link>
        <div>
          <p>2023 app_name. No Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
