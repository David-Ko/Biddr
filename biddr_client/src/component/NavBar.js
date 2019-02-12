import React from "react";
import { NavLink /*, Link */ } from "react-router-dom";

const NavBar = props => {
  const { currentUser, onSignOut = () => {} } = props;

  const handleSignOutClick = event => {
    event.preventDefault();

    onSignOut();
  };

  return (
    <nav>
      <NavLink exact to="/">Home</NavLink> |
      {currentUser ? (
        <NavLink exact to="/auctions/new">
          Put something up for auction
        </NavLink> 
      ) : null} |
      <NavLink exact to="/auctions">
        Auctions
      </NavLink> | 
      {currentUser ? (
        <>
          <span> Welcome, {currentUser.first_name}! </span>
          <a href="#not-used" onClick={handleSignOutClick}>
            Sign Out
          </a>
        </>
      ) : (
        <NavLink exact to="/sign_in">
          Sign In
        </NavLink>
      )} |
    </nav>
  );
};
export default NavBar;
