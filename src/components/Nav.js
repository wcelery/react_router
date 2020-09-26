import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <section>
      <Link style={linkStyle} to="/">
        <h3>Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link style={linkStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={linkStyle} to="/content">
          <li>Content</li>
        </Link>
        <Link style={linkStyle} to="/favorites">
          <li>Favorites</li>
        </Link>
      </ul>
    </section>
  );
}

export default Nav;
