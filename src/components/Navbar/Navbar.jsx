import React from "react";
import images from "../../constants/images";
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = ({ login, setLogin }) => {
  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="app__navbar">
      <div className="app__navbar-menu section__padding">
        <div className="navbar__menu-logo">
          <Link to="/">VuFood</Link>
        </div>
        <div className="navbar__menu-links">
          <ul>
            <Link to="/aboutus">
              <li>About</li>
            </Link>
            <Link to="/achieve">
              <li>Achieve</li>
            </Link>
            <Link to="/category">
              <li>Categories</li>
            </Link>
            {login ? (
              <Link to="/write">
                <li>Write</li>
              </Link>
            ) : (
              <Link to="/login">
                <li>Login</li>
              </Link>
            )}
            {login && (
              <li className="app__nav-btnlogout">
                <button onClick={refreshPage}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="app__navbar-image">
        <img src={images.navbar} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
