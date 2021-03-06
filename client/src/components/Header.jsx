import React from "react";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Link to="/">Redux Auth</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/signout">Sign Out</Link>
      <Link to="/features">Features</Link>
    </div>
  );
};

export default Header;
