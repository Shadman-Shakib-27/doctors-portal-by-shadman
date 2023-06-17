import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  // For Update User
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
  const menuItem = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/Appoinment">Appointment</Link>
      </li>
      <li className="font-semibold">
        <Link to="/Reviews">Reviews</Link>
      </li>
      <li className="font-semibold">
        <Link to="/Contacts">Contact Us</Link>
      </li>
      <li className="font-semibold">
        <Link to="/About">About</Link>
      </li>
      {/* Conditional Rendering */}
      <li className="font-semibold">
        {user ? (
          <button className="btn btn-primary text-white font-bold" onClick={logout}>
            Sign Out
          </button>
        ) : (
          <Link to="/Login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div class="navbar xl:ml-8 ">
      <div class="lg:static navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 25 20"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">Doctors Portal</a>
      </div>
      <div class="navbar-center hidden sm:justify-end lg:flex">
        <ul class="menu menu-horizontal px-1">{menuItem}</ul>
      </div>
    </div>
  );
};

export default Navbar;
