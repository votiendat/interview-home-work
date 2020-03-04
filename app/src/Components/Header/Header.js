import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div className="header container-fluid d-flex w-100 p-3 mx-auto flex-column">
      <header className="masthead mb-auto">
        <div className="inner inner d-flex align-items-center justify-content-between">
          <a className="navbar-brand" href="/">
            <img src={require("../../assets/images/zigvy-logo.svg")} alt="" />
          </a>

          <nav className="nav nav-masthead justify-content-center">
            <Link className="nav-link text-light" to="/">
              Home
            </Link>
            <Link className="nav-link text-light" to="/about">
              About
            </Link>
            <Link className="nav-link text-light" to="/contact">
              Contact
            </Link>
          </nav>

          <nav className="nav nav-masthead justify-content-center">
            <Link className="nav-link text-light" to="/user">
              <i className="fa fa-user-circle mr-2" aria-hidden="true"></i>
              Superman
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
