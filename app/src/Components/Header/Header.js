import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div className="header container-fluid d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="masthead mb-auto">
        <div className="inner">
          <a class="navbar-brand" href="/">
            <img src={require("../../assets/images/zigvy-logo.svg")} alt="" />
          </a>

          <nav className="nav nav-masthead justify-content-center">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/">
              Contact
            </Link>
            <Link className="nav-link" to="/user">
              <i class="fa fa-user-circle mr-2" aria-hidden="true"></i>
              Superman
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
