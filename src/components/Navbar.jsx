import React, { use } from "react";
import { Link, NavLink } from "react-router";
import User from "../assets/user.png";
import { AuthContexts } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContexts);
  const handelLogOut = () => {
    console.log("LogOut");
    logOut()
      .then(() => {
        alert("you logged out successfully ");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email} </div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to={"/"}> Home</NavLink>
        <NavLink to={"/about"}> About</NavLink>
        <NavLink to={"/career"}> Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img className="w-12 rounded-full" src={`${user? user.photoURL: User}`} alt="" />
        {user ? (
          <button onClick={handelLogOut} className="btn btn-primary px-10">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
