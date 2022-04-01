import React from "react";
import { NavLink } from "react-router-dom";
import UseFirebase from "../../hooks/UseFirebase";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const fb = UseFirebase();

  const { user, loggedOut } = UseFirebase();
  console.log(user, fb);
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
        {user && user.email ? (
          <button onClick={loggedOut}>Log Out</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
