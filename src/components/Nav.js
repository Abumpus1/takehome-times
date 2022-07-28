import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <nav>
      <Link className="home-link" to="/">
        <h1>The Takehome Times</h1>
      </Link>
    </nav>
  )
}

export default Nav;