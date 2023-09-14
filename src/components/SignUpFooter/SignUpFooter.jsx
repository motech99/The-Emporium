import { Link } from "react-router-dom";

export default function SignUpFooter({ footerRef, footerIsVisible }) {
  return (
    <>
      <footer
        ref={footerRef}
        className={` flex flex-col justify-center snap-start snap-always border-t border-gray-400 my-24 opacity-0 ${
          footerIsVisible ? "opacity-100 duration-1000" : ""
        }`}
      >
        <h2 className="my-6 font-bold text-2xl">
          Do that thing you wanted to do. <br></br> Don't miss out on great
          deals!
        </h2>
        <p className="mb-12">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque harum
          nulla quis officiis assumenda deserunt architecto optio! Quia,
          deleniti a! Possimus hic quam enim tempora modi. Velit fugit dolorum
          corporis.
        </p>
        <Link
          to="/login"
          className="sm:text-2xl px-16 py-4 rounded-md bg-primary mr-10 shadow-lg custom-btn"
        >
          Sign up for free
        </Link>
      </footer>
    </>
  );
}
