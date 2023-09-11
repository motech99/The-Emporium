import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <>
      <nav>
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
      </nav>
    </>
  );
}
