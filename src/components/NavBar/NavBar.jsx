import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <>
      <div className="flex flex-wrap overflow-x-hidden">
        <section className="relative mx-auto">
          <nav className="flex justify-between overlay-custom text-white w-screen">
            <div className="px-5 xl:px-6 py-2 flex w-full items-center">
              {/* <h2 className="text-4xl custom--hover custom--font">/h2> */}
              <div className="flex justify-start w-4">
                <h1 className="custom--font">T H E</h1>
              </div>
              <Link className="text-4xl custom--hover custom--font" to="/home">
                Emporium
              </Link>
              <ul className="hidden md:flex  px-4 mx-auto  font-heading space-x-12 text-lg font-medium">
                <li>
                  <Link className="custom--hover custom--font" to="/home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="custom--hover custom--font" to="/all-listing">
                    All Listings
                  </Link>
                </li>
                <li>
                  <Link className="custom--hover custom--font" to="/add-listing">
                    Add Listing
                  </Link>
                </li>
                <li>
                  <Link className="custom--hover custom--font" to="/profile/:userId">
                    Profile Page
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="hidden md:flex px-4 font-heading items-center space-x-12">
              <li className="w-20">
                <Link
                  className="custom--hover custom--font font-medium"
                  to=""
                  onClick={handleLogOut}
                >
                  Log Out
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </>
  );
}
