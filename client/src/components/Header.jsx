import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Link to="/">Redux Auth</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
    </div>
  );
};

export default Header;
