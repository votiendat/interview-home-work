import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

class Header extends Component {
  fixedHeaderHanlder = () => {
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 320) {
        $(".header").addClass("fixed-header");
      } else {
        $(".header").removeClass("fixed-header");
      }
    });
  };

  componentDidMount() {
    this.fixedHeaderHanlder();
  }

  render() {
    return (
      <div className="header container-fluid d-flex w-100 pt-3 pb-3 pr-5 pl-5 mx-auto flex-column">
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
  }
}

export default Header;
