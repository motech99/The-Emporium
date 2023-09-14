import { Link } from "react-router-dom";

export default function SignUpFooter({ footerRef, footerIsVisible }) {
  return (
    <>
      <footer
        ref={footerRef}
        className={` snap-start snap-always border-t border-gray-400 my-24 opacity-0 ${
          footerIsVisible ? "opacity-100 duration-1000" : ""
        }`}
      >
        <h2 className="my-6 font-bold text-2xl">
Don't miss out on hidden treasures!
        </h2>
        <p className="mb-12 mx-8">
          Come be a part of our marketplace community and unlock a world of
          convenience and opportunity. Join us today and experience the
          marketplace reimagined.
        </p>
        <Link
          to="/login"
          className="sm:text-2xl px-16 py-4 rounded-md bg-primary mr-10 shadow-lg custom-btn"
        >
          Sign up for free (this button is not supposed to be this wide)
        </Link>
      </footer>
    </>
  );
}
