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
      {/* <nav>
        <Link to='/orders'>Order History</Link>
        <Link to='/orders/new'>New Order</Link>
        <br />
        <span
          className='text-xl'>
          Welcome, {user.name}
        </span>
        <br />
        <Link to='' onClick={handleLogOut}>
          Log Out
        </Link>
      </nav> */}
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
                  <Link className="custom--hover custom--font text-background" to="/home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="custom--hover custom--font text-background" to="/all-listing">
                    All Listing
                  </Link>
                </li>
                <li>
                  <Link className="custom--hover custom--font text-background" to="/add-listing">
                    Add Listing
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="hidden md:flex px-4 font-heading items-center space-x-12">
              <li className="w-20">
                <Link
                  className="custom--hover custom--font text-background font-medium"
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
