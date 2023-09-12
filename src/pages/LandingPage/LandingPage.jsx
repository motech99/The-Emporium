import React, { useRef } from "react";
import "./LandingPage.css";
import LandingHeader from "../../components/LandingHeader/LandingHeader";
import LandingPurpose from "../../components/LandingPurpose/LandingPurpose";
import LandingProcess from "../../components/LandingProcess/LandingProcess";
import SignUpFooter from "../../components/SignUpFooter/SignUpFooter";
import Footer from "../../components/Footer/Footer";

export default function LandingPage() {
  // Endpoint for handleScroll
  const ref = useRef();

  // Used for scrolling to certain elements on click
  const handleScroll = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className="flex flex-col items-center landing-page">
        <LandingHeader handleClick={handleScroll} />
        <LandingPurpose ref={ref} />
        <LandingProcess />
        <section className="h-screen snap-start snap-always	">
          <img src="images/test.jpg" alt="" className="h-screen rounded-lg" />
        </section>
        <SignUpFooter />
        <Footer />
      </main>
    </>
  );
}
