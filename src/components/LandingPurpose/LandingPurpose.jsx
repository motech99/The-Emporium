import React, { useRef, useEffect } from "react";

const LandingPurpose = React.forwardRef((props, ref) => {
  const { aboutRef, aboutIsVisible } = props;

  return (
    <>
      <section
        ref={aboutRef}
        className="flex flex-col md:flex-row lg:max-w-max snap-start snap-always"
      >
        <img
          src="images/carts.png"
          className={`md:w-1/2 h-1/3 md:h-full object-cover opacity-0 ${
            aboutIsVisible ? "opacity-100 duration-1000 " : ""
          }`}
        />
        <div
          ref={ref}
          className={`opacity-0 ${
            aboutIsVisible ? "opacity-100 duration-1000 delay-500" : ""
          }`}
        >
          <h2 className="text-2xl xl:text-6xl my-4 md:mt-10 font-medium">
            Our Purpose
          </h2>
          <p className="text-lg xl:text-3xl leading-relaxed w-4/5 mx-auto md:my-10 text-center">
            Whether you're here to find unique treasures or shop for the
            essentials, we've created a seamless and inviting space for you to
            explore, engage, and connect. Join our vibrant community and
            experience the world of commerce in a whole new way.
          </p>
          <h2 className="text-xl xl:text-4xl mt-6 sm:mt-16 md:mt-28 lg:mt-16 2xl:mt-24 font-medium text-contrast">
            What we're all about
          </h2>
          <p className="text-lg xl:text-3xl leading-relaxed w-4/5 mx-auto md:my-7 text-center">
            At our marketplace, we're all about connecting people to the things
            they love. We're committed to providing a seamless platform where
            buyers can discover incredible deals and sellers can easily reach a
            global audience. Our mission is to foster a vibrant community where
            trust, value, and convenience are paramount, ensuring that every
            transaction is a satisfying experience for all.
          </p>
        </div>
      </section>
    </>
  );
});

export default LandingPurpose;
