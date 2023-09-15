import { Link } from "react-router-dom";
import React, { useRef } from "react";

const LandingHeader = React.forwardRef(({ handleClick }, ref) => {
  const myRef = useRef();

  const handleButtonClick = () => {
    handleClick(myRef);
  };
  return (
    <>
      <section className="xl:mr-36 snap-start snap-always">
        <h1 className="text-6xl lg:text-9xl custom-landing-header max-w-screen-lg mt-48 text-center lg:text-left slide-up">
          Empowering Your <span class="text-accent">Shopping</span> Experience
        </h1>
        <div className="my-24 md:mr-96 delay-1000 fade-in">
          <Link
            to="/login"
            className="text-2xl sm:text-4xl px-12 lg:px-24 lg:mx-10 py-4 rounded-md bg-primary md:mr-10 shadow-lg custom-btn"
          >
            Get Started
          </Link>
          <Link className="text-2xl my-20 sm:text-4xl px-8 md:px-12 custom-btn" onClick={handleButtonClick}>
            Learn More <span className="text-accent">{">>"}</span>
          </Link>
        </div>
      </section>
    </>
  );
});

export default LandingHeader;
