import React from "react";

const Footer = props => {
  return (
    <div className="container-fluid d-flex w-100 mt-5 bg-light p-3 mx-auto flex-column">
      <footer className="mastfoot mt-auto text-center">
        <div className="inner">
          <p className="mb-0">
            Copyright © 2020 by{" "}
            <a href="https://zigvy.com/" className="text-warning">
              @Zigvy
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
