import React, { useRef, useEffect } from "react";

const LandingPurpose = React.forwardRef((props, ref) => {
  const { aboutRef, aboutIsVisible } = props;
  
  return (
    <>
      <section ref={aboutRef} className="flex flex-row lg:max-w-max snap-start snap-always">
        <img src="images/test.jpg" className={`w-6/12 object-cover opacity-0 ${aboutIsVisible ? "opacity-100 duration-1000 ": ""}`}/>
        <div
          ref={ref}
          className={`opacity-0 ${aboutIsVisible ? "opacity-100 duration-1000 delay-700" : ""}`}
        >
          <h2>Our Purpose</h2>
          <p>
            Welcome to The Emporium, where endless possibilities await. Whether
            you're here to find unique treasures or shop for the essentials,
            we've created a seamless and inviting space for you to explore,
            engage, and connect. Join our vibrant community and experience the
            world of commerce in a whole new way.
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
    </>
  );
});

export default LandingPurpose;
