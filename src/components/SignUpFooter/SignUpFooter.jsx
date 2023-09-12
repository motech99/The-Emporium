import { Link } from "react-router-dom";

export default function SignUpFooter() {
  return (
    <>
      <footer className="m-24 snap-start snap-always	">
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
          className="text-center px-16 py-6 rounded-md bg-yellow-400"
        >
          Sign up for free
        </Link>
      </footer>
    </>
  );
}
