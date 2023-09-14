import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./LandingPage.css";
import LandingHeader from "../../components/LandingHeader/LandingHeader";
import LandingPurpose from "../../components/LandingPurpose/LandingPurpose";
import LandingProcess from "../../components/LandingProcess/LandingProcess";
import SignUpFooter from "../../components/SignUpFooter/SignUpFooter";
import Footer from "../../components/Footer/Footer";

export default function LandingPage() {
  const { ref: myRef, inView: elementIsVisible } = useInView();
  const { ref: aboutRef, inView: aboutIsVisible } = useInView();
  const { ref: processRef, inView: processIsVisible } = useInView();
  const { ref: demoRef, inView: demoIsVisible } = useInView();
  const { ref: footerRef, inView: footerIsVisible } = useInView();

  // Used for scrolling to certain elements on click
  const handleScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className="flex flex-col items-center landing-page">
        <LandingHeader ref={myRef} handleClick={handleScroll} />
        <LandingPurpose
          ref={myRef}
          aboutRef={aboutRef}
          aboutIsVisible={aboutIsVisible}
        />
        <LandingProcess
          processRef={processRef}
          processIsVisible={processIsVisible}
        />
        <section className="h-screen snap-start snap-always" ref={demoRef}>
          <img
            src="images/demo-boring.png"
            alt=""
            className={`object-scale-down h-5/6 mt-24 m-auto shadow-2xl rounded-lg opacity-0 blur-md ${
              demoIsVisible ? "opacity-100 duration-1000 blur-none" : ""
            }`}
          />
        </section>
        <SignUpFooter footerRef={footerRef} footerIsVisible={footerIsVisible} />
        <Footer />
      </main>
    </>
  );
}
