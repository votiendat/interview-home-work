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
      <div className="header container-fluid d-flex w-100 p-3 mx-auto flex-column">
        <header className="masthead mb-auto header-desktop d-none d-lg-block">
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
              <Link className="nav-link text-light" to="/">
                <i className="fa fa-user-circle mr-2" aria-hidden="true"></i>
                Superman
              </Link>
            </nav>
          </div>
        </header>

        <nav class="navbar navbar-expand-lg navbar-light text-light header-mobile p-0 d-lg-none">
          <a className="navbar-brand" href="/">
            <img src={require("../../assets/images/zigvy-logo.svg")} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa fa-bars text-light" aria-hidden="true"></i>
          </button>

          <div
            class="collapse navbar-collapse bg-light mt-3"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active p-2 pr-4 pl-4">
                <Link className="nav-link text-dark" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item p-2 pr-4 pl-4">
                <Link className="nav-link text-dark" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item p-2 pr-4 pl-4">
                <Link className="nav-link text-dark" to="/contact">
                  Contact
                </Link>
              </li>

              <li class="nav-item p-2 pr-4 pl-4">
                <Link className="nav-link text-dark" to="/">
                  <i className="fa fa-user-circle mr-2" aria-hidden="true"></i>
                  Superman
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
