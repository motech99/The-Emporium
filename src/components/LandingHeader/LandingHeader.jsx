import { Link } from "react-router-dom";
import React, { useRef } from "react";

export default function LandingHeader({ handleClick }) {
const myRef = useRef();

  const handleButtonClick = () => {
    handleClick(myRef);
  };
  return (
    <>
      <section className="h-screen xl:mr-36 snap-start snap-always">
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
          <button className="sm:text-3xl" onClick={handleButtonClick}>
            Learn More <span className="text-yellow-400">{">>"}</span>
          </button>
        </div>
      </section>
    </>
  );
}