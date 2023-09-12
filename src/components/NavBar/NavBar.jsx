import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

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
<div className="flex flex-wrap h-screen">
  <section className="relative mx-auto">
    <nav className="flex justify-between bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-red-500 via-orange-500 to-red-800text-white w-screen">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <a className="text-3xl font-bold font-heading" href="#">
          <h2>Emporium</h2>
          
        </a>
        <ul className="hidden md:flex px-4 mx-auto  font-heading space-x-12">
          <li><a className="hover:text-white" href="#">Home</a></li>
          <li><a className="hover:text-white" href="#">Catagory</a></li>
          <li><a className="hover:text-white" href="#">Collections</a></li>
        </ul>
      </div>
      <ul className="hidden md:flex px-4 font-heading items-center space-x-12">

      <Link className="w-20 hover:text-white" to='' onClick={handleLogOut}>Log Out</Link>
      </ul>
         
    </nav>
    
  </section>
</div>
    </>
  );
}
